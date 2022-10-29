/* eslint-disable prefer-const */
/* eslint-disable no-console */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-shadow */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-constant-condition */
/* eslint-disable camelcase */
/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import * as changeCase from 'change-case';
import dayjs from 'dayjs';
import fs from 'fs-extra';
import path, { dirname } from 'path';
import os from 'os';
import { start as downloadGitRepoStart, ParsedJsonFileInfo, getDownloadTargetPath } from './downloadGitRepo';
import { swaggerJsonToYApiData } from './swaggerJsonToYApiData';
import GitRepoInfo from './GitRepoInfo';
import * as conso from './console';
import { dedent, isFunction, noop } from 'vtils';
import rm from 'rimraf';
import {
  CommentConfig,
  Config,
  ExtendedInterface,
  Interface,
  ServerConfig,
  SyntheticalConfig,
  GeneratorOptions,
  RequestFunctionTemplateProps
} from './types';
import { exec } from 'child_process';
import {
  getRequestDataJsonSchema,
  getResponseDataJsonSchema,
  jsonSchemaToType,
  formatContent,
  topNotesContent
} from './utils';

import GenRequest from './genRequest';
import { genGitRepoIndex, getIndexGitInfo } from './genIndex';
import { genJsonSchemeConstContent } from './responseDataJsonSchemaHandler';
import { getOutputFilePath } from './getOutputPath';
import { resolve } from 'dns';

interface OutputFileListType {
  [outputFilePath: string]: {
    syntheticalConfig: SyntheticalConfig;
    content: string[];
    outPath: string;
  };
}

// 默认顶部依赖生成模板
function defaultTopImportPkgTemplate(config: Config, filePath: string) {
  const { defaultRequestLib, outputFilePath = 'src/api' } = config;
  const relative = path.relative(filePath.replace(/\/[^/]+$/, ''), outputFilePath);
  return !defaultRequestLib ? `import request from '${relative}/request'` : '';
}

const getDataKeySetStr = (method: string) => {
  if (['head', 'option', 'get'].includes(method.toLowerCase())) {
    return 'params: data';
  }
  return 'data';
};
// 默认请求函数体生成模板
function defaultRequestFunctionTemplate(props: RequestFunctionTemplateProps): string {
  const { baseURL, requestFunctionName, requestDataTypeName, responseDataTypeName, extendedInterfaceInfo } = props;
  const { req_params, req_query } = extendedInterfaceInfo;
  const hasData = req_params.length || req_query.length;
  const method = extendedInterfaceInfo.method.toLowerCase();
  let finalBaseUrl;
  if (baseURL?.match(/^\[code\]:/)) {
    // 如果使用[code]开头则表示，作为代码段执行，否则仅作为字符串
    finalBaseUrl = baseURL.replace(/^\[code\]:/, '');
  } else if (baseURL) {
    finalBaseUrl = `"${baseURL}"`;
  }
  return `export const ${requestFunctionName} = (data${hasData ? '' : '?'}: ${requestDataTypeName}) => {
    return request.${method}<${requestDataTypeName},${responseDataTypeName}>(${JSON.stringify(
    extendedInterfaceInfo.path
  )}, {
      ${getDataKeySetStr(method)},
      ${finalBaseUrl ? `baseURL: ${finalBaseUrl}` : ''}
    })
  }`;
}

// 后台统一网关函数体生成模板
function adminRequestFunctionTemplate(props: RequestFunctionTemplateProps, config?: SyntheticalConfig): string {
  const { baseURL, requestFunctionName, requestDataTypeName, responseDataTypeName, extendedInterfaceInfo } = props;
  const { req_params, req_query } = extendedInterfaceInfo;
  const hasData = req_params.length || req_query.length;
  let finalBaseUrl = '';
  if (baseURL?.match(/^\[code\]:/)) {
    // 如果使用[code]开头则表示，作为代码段执行，否则仅作为字符串
    finalBaseUrl = baseURL.replace(/^\[code\]:/, '');
  } else {
    finalBaseUrl = `"${baseURL}"`;
  }

  const url = config?.proxyInterface?.path || '/admin-interface/proxy/v0/proxy';

  return `export const ${requestFunctionName} = (data${hasData ? '' : '?'}: ${requestDataTypeName}) => {
    return request.post<${requestDataTypeName},${responseDataTypeName}>( '${url}', {
      data:{
        real_url: '${extendedInterfaceInfo.path}',
        params: JSON.stringify(data)
      },
      ${baseURL ? `baseURL: ${finalBaseUrl}` : ''}
    })
  }`;
}

export class Generator {
  /** 配置 */
  private config: ServerConfig;

  private disposes: Array<() => any> = [];

  private gitRepoInfo?: GitRepoInfo;

  constructor(config: Config, private options: GeneratorOptions = { cwd: process.cwd() }) {
    this.config = config;
  }

  static configValidator(config: Config) {
    const { gitRepoSettings } = config;
    const { repository } = gitRepoSettings || {};
    if (!repository) {
      conso.error(`gitRepoSettings参数未设置仓库链接repository`);
      return false;
    }
    return true;
  }

  /**
   * 读取json文件内容
   * @param filePath
   * @returns
   */
  async readJson(filePath: string): Promise<Interface[]> {
    if (filePath && filePath.match(/\.json$/)) {
      const json = fs.readJSONSync(filePath);
      const { interfaces } = await swaggerJsonToYApiData(json);
      return interfaces;
    }
    return [];
  }

  /**
   * 获取更新了的文件列表
   */
  async getUpdatedFiles(): Promise<ParsedJsonFileInfo['renderPaths']> {
    const { gitRepoSettings } = this.config;
    const { commitId } = getIndexGitInfo(this.config);
    const { renderPaths, jsonFileDir } = await downloadGitRepoStart(gitRepoSettings!);
    this.gitRepoInfo = new GitRepoInfo({
      gitRepoPath: jsonFileDir
    });
    let fFiles = renderPaths;

    // 如果能获取到commit，则按照对比差异生成
    if (commitId && !gitRepoSettings?.forceUpdate) {
      const { changed, files } = await this.gitRepoInfo!.diffSummary(commitId);
      const changedFiles: string[] = [];

      fFiles = files
        .filter(item => {
          const jsonFilePath = path.join(jsonFileDir, item.file);
          return item.file.match(/.json$/) && fs.existsSync(jsonFilePath);
        })
        .map(item => {
          const jsonFilePath = path.join(jsonFileDir, item.file);
          const { ext, name, base, dir } = path.parse(item.file);
          changedFiles.push(item.file);
          const fname = name.replace(/\.swagger$/, '');
          return {
            name: fname,
            dir,
            base,
            outPath: path.join(dir, fname),
            jsonFilePath: jsonFilePath
          };
        });
      if (changed > 0) {
        conso.info(`发现${changed}处更新，变更文件如下表`);
        conso.table(files);
      }
    }
    return fFiles;
  }

  /**
   * 生成代码
   * @returns
   */
  async generate(): Promise<OutputFileListType> {
    const outputFileList: OutputFileListType = Object.create(null);
    const filesList = await this.getUpdatedFiles();
    const { filter, baseURL } = this.config.gitRepoSettings || {};
    const interfaceFilter = filter || this.config.filter;
    await Promise.all(
      filesList.map(async item => {
        const { jsonFilePath, name, outPath } = item;
        const writePath = getOutputFilePath(this.config, outPath);
        const interfaces = await this.readJson(jsonFilePath);
        const filtedInterfaces = interfaces.filter(item => {
          if (interfaceFilter instanceof RegExp) {
            return interfaceFilter.test(item.path);
          }
          if (interfaceFilter instanceof Array) {
            return interfaceFilter.includes(item.path);
          }
          if (interfaceFilter instanceof Function) {
            return interfaceFilter(item.path);
          }
          return true;
        });
        const codes = await Promise.all(
          filtedInterfaces.map(async interfaceItem => {
            const { code } = await this.generateInterfaceCode(
              {
                ...this.config
              },
              interfaceItem
            );
            return code;
          })
        );
        if (codes && codes.length) {
          outputFileList[writePath] = {
            syntheticalConfig: this.config,
            content: codes,
            outPath
          };
        }
      })
    );
    return outputFileList;
  }

  /**
   * 写入文件
   * @param outputFileList
   * @returns
   */
  async write(outputFileList: OutputFileListType) {
    const filePathList: string[] = Object.keys(outputFileList);
    const config = this.config || {};
    if (!outputFileList || filePathList.length === 0) {
      return Promise.resolve([]);
    }
    const interfacePathList = filePathList.map(fp => {
      return outputFileList[fp].outPath;
    });
    // 生成 request.ts
    await GenRequest(config);

    if (!this.gitRepoInfo) {
      conso.error('未获取到git信息');
      return Promise.reject(new Error('未获取到git信息'));
    }
    const notes = await this.gitRepoInfo.gitNotesContent();
    // 生成入口 index.ts
    await genGitRepoIndex(config, interfacePathList, notes);

    return Promise.all(
      filePathList.map(async outputFilePath => {
        let { content, syntheticalConfig } = outputFileList[outputFilePath];

        const topImportPkgTemplate = syntheticalConfig.topImportPkgTemplate || defaultTopImportPkgTemplate;

        // 始终写入主文件
        const rawOutputContent = dedent`
          ${topNotesContent()}
          ${topImportPkgTemplate(config, outputFilePath)}

          ${content.join('\n\n').trim()}
        `;

        const outputContent = formatContent(dedent`${rawOutputContent}`, config.prettierConfigPath);
        await fs.outputFile(path.join(process.cwd(), `${outputFilePath}.ts`), outputContent);

        // 如果要生成 JavaScript 代码，
        // 则先对主文件进行 tsc 编译，主文件引用到的其他文件也会被编译，
        // 然后，删除原始的 .tsx? 文件。
        if (syntheticalConfig.target === 'javascript') {
          await this.tsc(outputFilePath);
          await Promise.all([fs.remove(outputFilePath).catch(noop)]);
        }
      })
    );
  }

  async tsc(file: string) {
    return new Promise<void>(resolve => {
      // add this to fix bug that not-generator-file-on-window

      const command = `${os.platform() === 'win32' ? 'node ' : ''}${require.resolve(`typescript/bin/tsc`)}`;

      exec(
        `${command} --target ES2019 --module ESNext --jsx preserve --declaration --esModuleInterop ${file}`,
        {
          cwd: this.options.cwd,
          env: process.env
        },
        () => resolve()
      );
    });
  }

  /** 请求函数名生成 */
  requestFunctionNameGen(extendedInterfaceInfo: ExtendedInterface): string {
    const path = extendedInterfaceInfo.parsedPath.dir;
    const method = extendedInterfaceInfo.method; // 可能存在同path，不同method的用法
    const prefix = [method, ...path.split('/')].join('_');
    return changeCase.camelCase(prefix + extendedInterfaceInfo.parsedPath.name);
  }

  /** 生成接口代码 */
  async generateInterfaceCode(syntheticalConfig: SyntheticalConfig, interfaceInfo: Interface) {
    const extendedInterfaceInfo: ExtendedInterface = {
      ...interfaceInfo,
      parsedPath: path.parse(interfaceInfo.path)
    };
    const requestFunctionName = isFunction(syntheticalConfig.getRequestFunctionName)
      ? await syntheticalConfig.getRequestFunctionName(extendedInterfaceInfo, changeCase)
      : this.requestFunctionNameGen(extendedInterfaceInfo);
    const requestConfigName = changeCase.camelCase(`${requestFunctionName}RequestConfig`);
    const requestConfigTypeName = changeCase.pascalCase(requestConfigName);
    const requestDataTypeName = isFunction(syntheticalConfig.getRequestDataTypeName)
      ? await syntheticalConfig.getRequestDataTypeName(extendedInterfaceInfo, changeCase)
      : changeCase.pascalCase(`${requestFunctionName}Request`);
    const responseDataTypeName = isFunction(syntheticalConfig.getResponseDataTypeName)
      ? await syntheticalConfig.getResponseDataTypeName(extendedInterfaceInfo, changeCase)
      : changeCase.pascalCase(`${requestFunctionName}Response`);
    const requestDataJsonSchema = getRequestDataJsonSchema(extendedInterfaceInfo);
    // 入参

    const requestDataType = await jsonSchemaToType(requestDataJsonSchema, requestDataTypeName);
    const responseDataJsonSchema = getResponseDataJsonSchema(extendedInterfaceInfo, syntheticalConfig.dataKey);
    // console.log(JSON.stringify(responseDataJsonSchema));
    const responseDataType = await jsonSchemaToType(responseDataJsonSchema, responseDataTypeName);
    const isRequestDataOptional = /(\{\}|any)$/s.test(requestDataType);
    const requestHookName =
      syntheticalConfig.reactHooks && syntheticalConfig.reactHooks.enabled
        ? isFunction(syntheticalConfig.reactHooks.getRequestHookName)
          ? /* istanbul ignore next */
            await syntheticalConfig.reactHooks.getRequestHookName(extendedInterfaceInfo, changeCase)
          : `use${changeCase.pascalCase(requestFunctionName)}`
        : '';

    // 支持路径参数
    const paramNames = (extendedInterfaceInfo.req_params /* istanbul ignore next */ || []).map(item => item.name);
    const paramNamesLiteral = JSON.stringify(paramNames);
    const paramNameType = paramNames.length === 0 ? 'string' : `'${paramNames.join("' | '")}'`;

    // 支持查询参数
    const queryNames = (extendedInterfaceInfo.req_query /* istanbul ignore next */ || []).map(item => item.name);
    const queryNamesLiteral = JSON.stringify(queryNames);
    const queryNameType = queryNames.length === 0 ? 'string' : `'${queryNames.join("' | '")}'`;

    // 接口注释
    const genComment = (genTitle: (title: string) => string) => {
      const {
        enabled: isEnabled = true,
        title: hasTitle = true,
        category: hasCategory = false,
        tag: hasTag = true,
        requestHeader: hasRequestHeader = true,
        updateTime: hasUpdateTime = true,
        link: hasLink = true
      } = {
        ...syntheticalConfig.comment
      } as CommentConfig;
      if (!isEnabled) {
        return '';
      }
      // 转义标题中的 /
      const escapedTitle = String(extendedInterfaceInfo.title).replace(/\//g, '\\/');

      const titleComment = hasTitle
        ? dedent`
            * ${genTitle(escapedTitle)}
            *
          `
        : '';

      return dedent`
        /**
         ${[titleComment].filter(Boolean).join('\n')}
         */
      `;
    };
    const requestFunctionTemplate =
      syntheticalConfig.requestFunctionTemplate ||
      (syntheticalConfig.proxyInterface ? adminRequestFunctionTemplate : defaultRequestFunctionTemplate);
    const baseURL = syntheticalConfig.gitRepoSettings?.baseURL || syntheticalConfig.baseURL;
    let baseUrl;
    try {
      baseUrl =
        typeof baseURL === 'string'
          ? baseURL
          : typeof baseURL === 'function'
          ? baseURL(extendedInterfaceInfo.path)
          : '';
    } catch (e) {
      conso.error(e);
    }
    const code = dedent`
      ${genComment(title => `接口 ${title} 的 **请求类型**`)}
      ${requestDataType.trim()}

      ${genComment(title => `接口 ${title} 的 **返回类型**`)}
      ${responseDataType.trim()}

      ${
        syntheticalConfig.typesOnly
          ? ''
          : dedent`
            ${genComment(title => `接口 ${title} 的 **请求函数**`)}
            ${requestFunctionTemplate(
              {
                baseURL: baseUrl,
                requestFunctionName,
                requestDataTypeName,
                responseDataTypeName,
                extendedInterfaceInfo
              },
              syntheticalConfig
            )}

          `
      }
    `;

    return {
      code,
      responseDataJsonSchema: genJsonSchemeConstContent(
        extendedInterfaceInfo.path,
        syntheticalConfig.serverUrl || '',
        extendedInterfaceInfo,
        responseDataJsonSchema
      )
    };
  }

  async destroy() {
    return Promise.all(this.disposes.map(async dispose => dispose()));
  }

  /**
   * 清除仓库代码
   * @returns
   */
  async clearGitRepo() {
    const gitRepoPath = this.gitRepoInfo?.gitRepoPath;
    if (gitRepoPath) {
      return new Promise((resolve, reject) => {
        rm(gitRepoPath, e => {
          if (e) reject(e);
          else resolve('success');
        });
      });
    }

    return Promise.resolve('success');
  }
}
