import chalk from "chalk";

import { Config } from "@/types";
import { spinner } from "@/components/spinner";
import * as log from '@/utils/console';
import { packageCheck } from "@/utils/dependenciesHandler";

import { Generator } from "./generator";
import { yapiUrlParser } from "./yapiUrlParser";

export default async function executeCLI(config: Config, cwd: string) {
  const { defaultRequestLib = true, topImportPkgTemplate, outputFilePath } = config;

  if (defaultRequestLib === false && typeof topImportPkgTemplate !== 'function') {
    spinner.stop();
    log.error(
      `您已配置不使用默认请求库，请通过 topImportPkgTemplate 配置使用的请求方法，示例：

      ${chalk.green(
        "topImportPkgTemplate: ()=>`import request from '../request'`"
      )
      } `
    );

    return false;
  }

  const { serverType, } = config;
  const label = chalk.green(`${config.serverUrl} 文件解析耗时`);
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

  log.success(`${serverType} 模式代码生成成功，文件路径：${outputFilePath} \n`);
  // TODO: 生成文件名列表
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