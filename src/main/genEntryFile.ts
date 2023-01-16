/**
 * 生成 /api/index.ts 入口文件
 */

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import fs from 'fs-extra';
import path from 'path';
import { dedent } from 'vtils';

import { Config } from '../types';
import { genOutputFilePath } from '../utils/getOutputPath';
import { formatContent, topNotesContent } from '../utils/common';
import * as log from '../utils/console';

import { jsonSchemeFileHeader } from './responseDataJsonSchemaHandler';

/** 提前准备好 src/api/index 文件 */
export async function prepareIndexFile(config: Config) {
  const indexFilePath = genOutputFilePath(config, 'index.ts');
  if (!(await fs.pathExists(indexFilePath))) {
    fs.outputFileSync(indexFilePath, dedent`${topNotesContent()}` + '\n');
  }
}

export default async (config: Config, categoryList: { categoryId: string; projectId: string }[]) => {
  const { prettierConfigPath } = config;
  const indexFilePath = genOutputFilePath(config, 'index.ts');
  let originFileContent = '';

  if (await fs.pathExists(indexFilePath)) {
    originFileContent = fs.readFileSync(indexFilePath, { encoding: 'utf-8' });
  }

  const exportAllInterface = categoryList.reduce((list, { categoryId, projectId }) => {
    // return `export * from  "./${projectId}/${categoryId}"`;
    if (originFileContent.indexOf(`${projectId}/${categoryId}`) === -1) {
      list.push(`export * from  "./${projectId}/${categoryId}"`);
    }
    return list;
  }, [] as string[]);

  const content = `
    ${exportAllInterface.join(';')}
  `;

  // 输出index文件
  fs.appendFile(
    indexFilePath,

    formatContent(dedent`${content}`, prettierConfigPath)
  );

  // 输出 responseDataJsonSchema 文件
  const inspector = config.jsonSchema?.enabled;
  if (inspector) {
    const exportAllSchema = categoryList.map(({ categoryId, projectId }) => {
      return `export * from  "./${projectId}/${categoryId}responseDataJsonSchema"`;
    });
    const schemaContent = `
    ${topNotesContent()}
    ${exportAllSchema.join(';')}
    ${jsonSchemeFileHeader()}
  `;

    const schemaFilePath = genOutputFilePath(config, 'responseDataJsonSchema.ts');
    fs.outputFile(schemaFilePath, formatContent(dedent`${schemaContent}`, prettierConfigPath));
  }
};

/**
 * 获取index.ts文件里的上次生成时的 git注释信息
 * @param config
 *
 */

export type GetIndexGitInfoResultName = 'repo' | 'branch' | 'commitId';
export interface GetIndexGitInfoResult {
  repo: string;
  branch: string;
  commitId: string;
}
export const getIndexGitInfo = (config: Config): GetIndexGitInfoResult => {
  const indexFilePath = genOutputFilePath(config, 'index.ts');
  const result: GetIndexGitInfoResult = {} as GetIndexGitInfoResult;

  try {
    const fileContent = fs.readFileSync(indexFilePath, { encoding: 'utf-8' });
    (['repo', 'branch', 'commitId'] as GetIndexGitInfoResultName[]).forEach((k: GetIndexGitInfoResultName) => {
      const reg = new RegExp(`${k}:\\s?([A-Za-z0-9_\\-/://]+)\\s`);
      const matchRes = fileContent.match(reg) || [];
      result[k] = matchRes[1] || '';
    });
  } catch (e) {
    log.tips(`未找到${indexFilePath}，将重新生成`);
  }
  return result;
};
export const genGitRepoIndex = async (config: Config, filePathList: string[]) => {
  const { prettierConfigPath } = config;
  const indexFilePath = genOutputFilePath(config, 'index.ts');
  let originFileContent = '';

  if (await fs.pathExists(indexFilePath)) {
    originFileContent = fs.readFileSync(indexFilePath, { encoding: 'utf-8' });
  }

  // 清除顶部日志信息
  // originFileContent = originFileContent.replace(/\/\/(\s+)?<-Logs->(.|\n)+\/\/(\s+)?<-END->/, '');

  const exportAllInterface = filePathList.reduce((list, filePath) => {
    if (originFileContent.indexOf(filePath) === -1) {
      list.push(`export * from  "./${path.join('./', filePath)}"`);
    }
    return list;
  }, [] as string[]);

  // const content = `
  //   // <-Logs->
  //   ${notes || topNotesContent()}
  //   // <-END->
  //   ${originFileContent}
  //   ${exportAllInterface.join(';')}
  // `;
  const content = `
    ${exportAllInterface.join(';')}
  `;

  // 输出index文件
  fs.appendFile(
    indexFilePath,

    formatContent(dedent`${content}`, prettierConfigPath)
  );
};
