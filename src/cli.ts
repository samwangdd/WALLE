#!/usr/bin/env node
/* eslint-disable no-inner-declarations */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable class-methods-use-this */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-empty-pattern */
/* eslint-disable global-require */
import * as TSNode from 'ts-node';
import fs from 'fs-extra';
import path from 'path';
import prompt from 'prompts';
import yargs from 'yargs';
import { Config } from './types';
import { dedent } from 'vtils';
import { Generator } from './Generator';
import { Generator as GitRepoGenerator } from './GitRepoGenerator';
import yargsParser from 'yargs-parser';
import { packageCheck } from './dependenciesHandler';
import chalk from 'chalk';
import * as log from './utils/console';
import { formatContent } from './utils/common';
import { prepareIndexFile } from './genIndex';
import { spinnerInstance } from './spinner';
import { asyncFnArrayOrderRun, prepareYapiLogin } from './helpers';
import { yapiUrlParser } from './yapiUrlAnalysis';
import { intersection } from './utils/array';

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
interface OptionsType {
  configFile?: string;
}

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

export async function generateConfigFile() {
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
      { title: 'GitRepo', value: 'git-repo' },
      { title: 'Swagger', value: 'swagger' }
    ]
  });
  let yapiAnswers;
  if (serverTypeAnswers.serverType === 'yapi') {
    yapiAnswers = await prompt([
      {
        message: `yapi项目token`,
        name: 'token',
        type: 'text',
        initial: ''
      },
      {
        message: '接口信息服务地址',
        name: 'url',
        type: 'text',
        initial: 'http://yapi.corp.hongsong.club/'
      }
    ]);
  }
  let swaggerAnswers;
  if (serverTypeAnswers.serverType === 'swagger') {
    swaggerAnswers = await prompt([
      {
        message: '接口信息服务地址',
        name: 'url',
        type: 'text',
        initial: ''
      }
    ]);
  }
  let gitRepoAnswers;
  if (serverTypeAnswers.serverType === 'git-repo') {
    gitRepoAnswers = await prompt([
      {
        message: '仓库地址(SSH协议)',
        name: 'repository',
        type: 'text',
        initial: 'https://git.medlinker.com/foundations/api-swagger.git'
      },
      {
        message: '使用的分支名',
        name: 'branch',
        type: 'text',
        initial: 'master'
      }
    ]);
  }

  await fs.outputFile(
    configTSFile,
    formatContent(dedent`
      import { defineConfig } from 'api-typescript'

      export default defineConfig({
        serverType: '${serverTypeAnswers.serverType}',
        ${serverTypeAnswers.serverType !== 'git-repo'
        ? `serverUrl: '${yapiAnswers?.url || swaggerAnswers?.url || ''}',`
        : ''
      }
        ${serverTypeAnswers.serverType === 'yapi'
        ? `projects: {
          token: '${yapiAnswers?.token}' // yapi项目的token
        },`
        : ''
      }
        ${serverTypeAnswers.serverType === 'git-repo'
        ? `gitRepoSettings: {
            repository: '${gitRepoAnswers?.repository || ''}',
            branch: '${gitRepoAnswers?.branch || ''}'
          },`
        : ''
      }
        outputFilePath: 'src/api'
      })
    `)
  );
  log.success('写入配置文件完毕');
}

async function dodo(config: Config, cwd: string, index = 0) {
  const { defaultRequestLib = true, topImportPkgTemplate, outputFilePath } = config;
  if (defaultRequestLib === false && typeof topImportPkgTemplate !== 'function') {
    spinnerInstance.stop();
    log.error(
      `已配置不使用默认请求库，请通过topImportPkgTemplate配置使用的依赖库 \n 示例：${chalk.cyan(
        "()=>`import request from '../request'`"
      )}`
    );
    return false;
  }

  const { serverType, gitRepoSettings } = config;
  if (serverType === 'git-repo' && GitRepoGenerator.configValidator(config)) {
    const label = chalk.green(`${gitRepoSettings?.repository} 耗时`);
    console.time(label);
    spinnerInstance.start();
    const gitRepoGenertorInstance = new GitRepoGenerator(config, { cwd });
    const output = await gitRepoGenertorInstance.generate();
    await gitRepoGenertorInstance.write(output);
    const outTips = Object.keys(output).length
      ? `${serverType}模式代码生成成功，文件路径：${outputFilePath}`
      : `未找到需要更新的接口`;
    spinnerInstance.clear();
    log.log(chalk.yellowBright(`\n${index + 1}.-------------------------------`));
    log.success(outTips);
    console.timeEnd(label);
    log.log(chalk.yellowBright('---------------------------------\n'));
    // spinnerInstance.render();
  } else {
    const label = chalk.green(`${config.serverUrl} 耗时`);
    console.time(label);
    let projects = config.projects;
    if (serverType === 'yapi' && config.yapiUrlList?.length) {
      const res = await yapiUrlParser(config);
      if (res.parseResultList?.length) {
        spinnerInstance.clear();
        log.info(`Url 解析结果:`);
        log.table(res.parseResultList);
      }
      projects = res.projects;
    }
    spinnerInstance.start();
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
    spinnerInstance.clear();
    log.log(chalk.yellowBright(`\n${index + 1}.-------------------------`));
    log.success(`${serverType}模式代码生成成功，文件路径：${outputFilePath}`);
    console.timeEnd(label);
    log.log(chalk.yellowBright('---------------------------\n'));
    // spinnerInstance.render();
    await generator.destroy();
  }

  // 如果不是只需要类型声明，则需要检测基础请求库是否安装
  if (!config.typesOnly && defaultRequestLib) {
    await packageCheck('@medlinker/med-request');
  }

  // 是否启用拦截器，拦截器由使用到change-case
  if (config.jsonSchema?.enabled) {
    await packageCheck('change-case');
  }
  return true;
}

export async function execute() {
  const timeLabel = chalk.green('总耗时');
  console.time(timeLabel);
  const { cwd, configFileExist, configFile, configTSFile } = await getConfigFilePath();

  if (!configFileExist) {
    return log.error(`Not Found: ${configFile}`);
  }
  log.tips(`发现配置文件: ${configFile}`);
  let generator: Generator | undefined;
  try {
    const config: Config[] = require(configFile).default;

    await prepareYapiLogin(config);
    // await prepareGitRepoLogin(config);

    spinnerInstance.start('正在获取数据并生成代码... \n');
    await asyncFnArrayOrderRun(
      config.map((configItem, index) => {
        return async () => {
          await prepareIndexFile(configItem);
          await dodo(configItem, cwd, index);
        };
      })
    );
    spinnerInstance.stop();
  } catch (err) {
    spinnerInstance.stop();
    if (generator) await generator?.destroy();
    return log.error(err);
  }

  console.timeEnd(timeLabel);
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
        y => { },
        (argv: any) => {
          const { } = argv;
          generateConfigFile();
        }
      )
      .command<any>(
        'gen',
        '生成接口类型声明和方法',
        y => { },
        (argv: any) => {
          const { } = argv;
          execute();
        }
      )
      .help();
  }
}
