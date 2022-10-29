import { DownloadGitRepoSettings, Config } from './types';
import fs from 'fs-extra';
import { execSync } from 'child_process';
import path from 'path';
import { JSONSchema4, JSONSchema4TypeName } from 'json-schema';
import * as conso from './console';
import rm from 'rimraf';

const defautlGitRepo = 'https://git.medlinker.com/foundations/api-swagger.git';

/**
 * 获取下载的目录目录
 * @param props
 * @returns
 */
export function getDownloadTargetPath(props: DownloadGitRepoSettings): string {
  const { repository = defautlGitRepo, dest = '/tmp' } = props;
  const dirName = (repository.match(/\/([^/.]+)(\.git)?$/) || [])[1] || 'api-swagger';
  const target = path.join(dest, dirName);
  return target;
}

/**
 * 从json仓库下载接口定义json
 * @param props
 * @returns
 */
export function download(props: DownloadGitRepoSettings): Promise<{
  target: string;
  repository: string;
}> {
  const { repository = defautlGitRepo, dest = '/tmp', branch = 'master' } = props;
  const url = `${repository.replace(/#(\w+)?$/, '')}#${branch}`;

  try {
    const target = getDownloadTargetPath(props);
    const gitHEADPath = path.resolve(target, '.git/HEAD');
    if (!fs.pathExistsSync(target) || !fs.existsSync(gitHEADPath)) {
      // 可能存在.git文件下的信息丢失的情况，如果丢失就删除后，重新clone
      execSync(`rm -rf ${target}`);
      execSync(`cd ${dest} && git clone ${repository}`);
      execSync(`cd ${target} && git checkout ${branch} && git pull origin ${branch}`);
    } else {
      execSync(`cd ${target} && git checkout ${branch} && git pull origin ${branch}`);
    }
    return Promise.resolve({
      target,
      repository: url
    });
  } catch (e) {
    conso.error(e);
    return Promise.reject(e);
  }
}

/**
 * 遍历文件
 * @param target
 * @returns
 */
export function mapFile(target: string): any[] {
  const files = fs.readdirSync(target);
  return files.map(item => {
    const tp = path.resolve(target, item);
    const fileInfo = fs.statSync(tp);
    const ifDir = fileInfo.isDirectory();
    if (ifDir) {
      return mapFile(tp);
    }
    // 只需要json文件
    if (item.match(/\.json$/)) {
      return tp;
    }
    return null;
  });
}

export interface ParsedJsonFileInfo {
  jsonFileDir: string;
  jsonFilePaths: string[];
  renderPaths: {
    name: string;
    dir: string;
    base: string;
    outPath: string;
    jsonFilePath: string;
  }[];
}

export interface ParameterType {
  name: string;
  description: string;
  in?: 'path' | 'query' | 'header' | 'body' | 'formData';
  required: boolean;
  type: string;
  schema?: {
    $ref: string;
  };
}
/**
 * 接口内容格式定义
 */
export interface JsonFileInterfaceInfo {
  summary: string;
  responses: {
    [method: string]: JSONSchema4;
  };
  parameters: ParameterType[];
  tags?: string[];
}

/**
 * JSON文件内容格式定义
 */
export interface JsonFileContentInfo {
  schemes?: string[];
  paths: Record<
    string,
    {
      [method: string]: JsonFileInterfaceInfo;
    }
  >;
  definitions: Record<string, JSONSchema4>;
  [k: string]: any;
}

export async function start(props: DownloadGitRepoSettings): Promise<ParsedJsonFileInfo> {
  const { target } = await download(props);
  const jsonFilePaths = mapFile(target);
  const renderPaths = jsonFilePaths.flat(Infinity).reduce((list, item, index) => {
    if (item) {
      const renderPath = item.replace(target, '');
      const { ext, name, base, dir } = path.parse(renderPath);
      const fname = name.replace(/\.swagger$/, '');
      list.push({
        name: fname,
        dir,
        base,
        outPath: path.join(dir, fname),
        jsonFilePath: item
      });
    }
    return list;
  }, [] as string[]);
  // console.log(target, renderPaths);

  return {
    jsonFileDir: target,
    renderPaths,
    jsonFilePaths
  };
}

export default start;
