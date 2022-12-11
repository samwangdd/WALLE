/* eslint-disable no-empty-pattern */
/* eslint-disable @typescript-eslint/no-var-requires */
import * as TSNode from 'ts-node';
import fs from 'fs-extra';
import path from 'path';
import prompt from 'prompts';
import yargs from 'yargs';
import { dedent } from 'vtils';
import yargsParser from 'yargs-parser';
import chalk from 'chalk';
import { Config } from './types';
import { asyncFnArrayOrderRun, prepareYapiLogin } from './helpers';
import { Generator } from './main/Generator';
import { packageCheck } from './dependenciesHandler';
import * as log from './utils/console';
import { formatContent } from './utils/common';
import { intersection } from './utils/array';
import { prepareIndexFile } from './genIndex';
import { spinner } from './UI/spinner';
import { yapiUrlParser } from './yapiUrlAnalysis';
import { YAPI_CONFIG_SNIPPET } from './constant/snippet';
import { YAPI_PROMPT } from './constant/prompt';

TSNode.register({
  // 不加载本地的 tsconfig.json
  skipProject: true,
  // 仅转译，不做类型检查
  transpileOnly: true,
  // 自定义编译选项
  compilerOptions: {
    strict: false,
    target: 'es2017',
    module: 'commonjs',
    moduleResolution: 'node',
    declaration: false,
    removeComments: false,
    esModuleInterop: true,
    allowSyntheticDefaultImports: true,
    importHelpers: false,
    // 转换 js，支持在 apits.config.js 里使用最新语法
    allowJs: true,
    lib: ['es2017']
  }
});

// 获取配置文件的路径信息
export async function getConfigFilePath() {
  const cwd = process.cwd();
  const configTSFile = path.join(cwd, 'apits.config.ts');
  const configTSLocalFile = path.join(cwd, 'apits.config.local.ts');
  const configTSLocalFileExist = await fs.pathExists(configTSLocalFile);
  const configTSFileExist = await fs.pathExists(configTSFile);
  const configFileExist = configTSLocalFileExist || configTSFileExist;
  const configFile = configTSLocalFileExist ? configTSLocalFile : configTSFile || '';

  return {
    cwd,
    configFileExist,
    configFile,
    configTSFile,
    configTSLocalFile,
    configTSFileExist
  };
}

export async function initConfigFile() {
  const { configTSFile, configTSFileExist } = await getConfigFilePath();
  if (configTSFileExist) {
    log.tips(`检测到配置文件: ${configTSFile}`);
    const answers = await prompt({
      message: '是否覆盖已有配置文件?',
      name: 'override',
      type: 'confirm'
    });
    if (!answers.override) return;
  }

  const serverTypeAnswers = await prompt({
    message: '选择获取接口信息的类型',
    name: 'serverType',
    type: 'select',
    choices: [
      { title: 'Yapi', value: 'yapi' },
    ]
  });
  let yapiAnswers;
  if (serverTypeAnswers.serverType === 'yapi') {
    yapiAnswers = await prompt(YAPI_PROMPT as any);
  }

  const yapiSnippet = YAPI_CONFIG_SNIPPET(yapiAnswers?.token)
  console.log('%c [ yapiAnswers ]-114', 'font-size:13px; background:#a48d70; color:#e8d1b4;', yapiAnswers)
  fs.outputFile(
    configTSFile,
    formatContent(dedent`${yapiSnippet}`)
  ).then(() => {
    log.success('写入配置文件完毕');
  })
}

async function callGenerator(config: Config, cwd: string) {
  const { defaultRequestLib = true, topImportPkgTemplate, outputFilePath } = config;

  if (defaultRequestLib === false && typeof topImportPkgTemplate !== 'function') {
    spinner.stop();
    log.error(
      `已配置不使用默认请求库，请通过topImportPkgTemplate配置使用的依赖库 \n 示例：${chalk.cyan(
        "()=>`import request from '../request'`"
      )
      } `
    );
    return false;
  }

  const { serverType, } = config;

  const label = chalk.green(`${config.serverUrl} 耗时`);
  console.time(label);
  let projects = config.projects;
  if (serverType === 'yapi' && config.yapiUrlList?.length) {
    const res = await yapiUrlParser(config);
    if (res.parseResultList?.length) {
      spinner.clear();
      log.info(`URL 解析结果: `);
      log.table(res.parseResultList);
    }
    projects = res.projects;
  }
  spinner.start();
  const generator = new Generator(
    {
      ...config,
      projects
    },
    { cwd }
  );
  await generator.prepare();
  const output = await generator.generate();
  await generator.write(output);
  spinner.clear();
  log.success(`${serverType} 模式代码生成成功，文件路径：${outputFilePath} `);
  console.timeEnd(label);
  // spinner.render();
  await generator.destroy();

  // TODO: 如果不是只需要类型声明，则需要检测基础请求库是否安装
  // if (!config.typesOnly && defaultRequestLib) {
  //   await packageCheck('@you-lib/request');
  // }

  // 是否启用拦截器，拦截器由使用到change-case
  if (config.jsonSchema?.enabled) {
    await packageCheck('change-case');
  }

  return true;
}

export async function execute() {
  // const timeLabel = chalk.green('总耗时');
  // console.time(timeLabel);
  const { cwd, configFileExist, configFile } = await getConfigFilePath();

  if (!configFileExist) {
    return log.error(`Not Found: ${configFile} `);
  }
  log.tips(`发现配置文件: ${configFile} `);
  let generator: Generator | undefined;
  try {
    const config: Config[] = require(configFile).default;

    await prepareYapiLogin(config);
    // await prepareGitRepoLogin(config);

    spinner.start('正在获取数据并生成代码... \n');
    await asyncFnArrayOrderRun(
      config.map((configItem) => {
        return async () => {
          await prepareIndexFile(configItem);
          callGenerator(configItem, cwd);
        };
      })
    );
    spinner.stop();
  } catch (err) {
    spinner.stop();
    if (generator) await generator?.destroy();
    return log.error(err);
  }

  // console.timeEnd(timeLabel);
  return null;
}

export const COMMAND_LIST = ['init', 'gen'];
export default class CLI {
  argvs: any;

  run(args: any) {
    this.argvs = yargsParser(args);

    const cli = this.init();

    if (args.length === 0) {
      cli.showHelp();
    } else {
      const inter = intersection(COMMAND_LIST)(args)
      if (!inter.length) {
        log.error(`未知命令：${args}，请确认参数是否正确！`);
        cli.showHelp();
      }
    }

    return cli.parse(args);
  }

  init() {
    return yargs
      .scriptName('apits')
      .usage('Usage: $0 <command> [options]')
      .command<any>(
        'init',
        '生成配置文件',
        () => { },
        (argv: any) => {
          const { } = argv;
          initConfigFile();
        }
      )
      .command<any>(
        'gen',
        '生成接口类型声明和方法',
        () => { },
        (argv: any) => {
          const { } = argv;
          execute();
        }
      )
      .help();
  }
}
