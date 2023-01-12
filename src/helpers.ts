/* eslint-disable no-nested-ternary */
/* eslint-disable no-eval */
import type { AppendOptions } from 'form-data';
import type { Config, RequestConfig, RequestFunctionParams } from './types';
import { checkCookie } from './utils/cookie';
import { spinner } from './components/spinner';
import { loginYapi, loginPrompts } from './main/requestYapiData';

/**
 * 定义配置。
 *
 * @param config 配置
 */
export function defineConfig(config: Partial<Config> | Partial<Config>[]): Config[] {
  const configs = config instanceof Array ? config : [config];
  const final: Config[] = configs.map(item => {
    return {
      serverType: 'yapi',
      serverUrl: 'http://yapi.corp.hongsong.club',
      typesOnly: false,
      target: 'typescript',
      prodEnvName: 'local',
      outputFilePath: 'src/api',
      dataKey: 'data',
      jsonSchema: {
        enabled: false
      },
      ...item
    };
  });
  return final;
}

export class FileData<T = any> {
  /**
   * 原始文件数据。
   */
  private originalFileData: T;

  /**
   * 选项。
   */
  private options: AppendOptions | undefined;

  /**
   * 文件数据辅助类，统一网页、小程序等平台的文件上传。
   *
   * @param originalFileData 原始文件数据
   * @param options 若使用内部的 getFormData，则选项会被其使用
   */
  public constructor(originalFileData: T, options?: AppendOptions) {
    this.originalFileData = originalFileData;
    this.options = options;
  }

  /**
   * 获取原始文件数据。
   *
   * @returns 原始文件数据
   */
  public getOriginalFileData(): T {
    return this.originalFileData;
  }

  /**
   * 获取选项。
   */
  public getOptions(): AppendOptions | undefined {
    return this.options;
  }
}

/**
 * 解析请求数据，从请求数据中分离出普通数据和文件数据。
 *
 * @param [requestData] 要解析的请求数据
 * @returns 包含普通数据(data)和文件数据(fileData)的对象，data、fileData 为空对象时，表示没有此类数据
 */
export function parseRequestData(requestData?: any): { data: any; fileData: any } {
  const result = {
    data: {} as any,
    fileData: {} as any
  };
  /* istanbul ignore else */
  if (requestData != null) {
    if (typeof requestData === 'object' && !Array.isArray(requestData)) {
      Object.keys(requestData).forEach(key => {
        if (requestData[key] && requestData[key] instanceof FileData) {
          result.fileData[key] = (requestData[key] as FileData).getOriginalFileData();
        } else {
          result.data[key] = requestData[key];
        }
      });
    } else {
      result.data = requestData;
    }
  }
  return result;
}

/**
 * 准备要传给请求函数的参数。
 */
export function prepare(requestConfig: RequestConfig, requestData: any): RequestFunctionParams {
  let requestPath: string = requestConfig.path;
  const { data, fileData } = parseRequestData(requestData);
  const dataIsObject = data != null && typeof data === 'object' && !Array.isArray(data);
  if (dataIsObject) {
    // 替换路径参数
    if (Array.isArray(requestConfig.paramNames) && requestConfig.paramNames.length > 0) {
      Object.keys(data).forEach(key => {
        if (requestConfig.paramNames.indexOf(key) >= 0) {
          // ref: https://github.com/YMFE/yapi/blob/master/client/containers/Project/Interface/InterfaceList/InterfaceEditForm.js#L465
          requestPath = requestPath
            .replace(new RegExp(`\\{${key}\\}`, 'g'), data[key])
            .replace(new RegExp(`/:${key}(?=/|$)`, 'g'), `/${data[key]}`);
          delete data[key];
        }
      });
    }

    // 追加查询参数到路径上
    let queryString = '';
    if (Array.isArray(requestConfig.queryNames) && requestConfig.queryNames.length > 0) {
      Object.keys(data).forEach(key => {
        if (requestConfig.queryNames.indexOf(key) >= 0) {
          if (data[key] != null) {
            queryString += `${queryString ? '&' : ''}${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`;
          }
          delete data[key];
        }
      });
    }
    if (queryString) {
      requestPath += `${requestPath.indexOf('?') > -1 ? '&' : '?'}${queryString}`;
    }
  }

  // 全部数据
  const allData = {
    ...(dataIsObject ? data : {}),
    ...fileData
  };

  // 获取表单数据
  const getFormData = () => {
    const useNativeFormData = typeof FormData !== 'undefined';
    const useNodeFormData =
      !useNativeFormData &&
      // https://github.com/fjc0k/vtils/blob/master/src/utils/inNodeJS.ts
      typeof global === 'object' &&
      typeof global.process === 'object' &&
      typeof global.process.versions === 'object' &&
      global.process.versions.node != null;
    const UniFormData: typeof FormData | undefined = useNativeFormData
      ? FormData
      : useNodeFormData
        ? eval(`require('form-data')`)
        : undefined;
    if (!UniFormData) {
      throw new Error('当前环境不支持 FormData');
    }
    const formData = new UniFormData();
    Object.keys(data).forEach(key => {
      formData.append(key, data[key]);
    });
    Object.keys(fileData).forEach(key => {
      const options = (requestData[key] as FileData).getOptions();
      formData.append(key, fileData[key], useNativeFormData ? options?.filename : (options as any));
    });
    return formData as any;
  };

  return {
    ...requestConfig,
    path: requestPath,
    rawData: requestData,
    data: data,
    hasFileData: fileData && Object.keys(fileData).length > 0,
    fileData: fileData,
    allData: allData,
    getFormData: getFormData
  };
}

/**
 * 顺序执行异步函数队列
 * @param fns
 * @param results
 * @returns
 */
export const asyncFnArrayOrderRun = async <T = any>(fns: (() => Promise<T>)[], results?: T[]) => {
  if (fns.length) {
    const res = await fns[0]();
    const res1: T[] = await asyncFnArrayOrderRun(fns.slice(1), [...(results || []), res]);
    return res1;
  }
  return results || [];
};

/**
 * 并发请求队列
 * @param fns
 * @param limit
 * @returns
 */
export const autoAsyncSplitQueue = async <T = any>(fns: (() => Promise<T>)[], limit = 1000) => {
  const len = fns.length;
  let count = 0;
  const splitArray: (() => Promise<T>)[][] = [];

  while (count < len) {
    splitArray.push(fns.slice(count, count + limit));
    count += limit;
  }

  const result = await asyncFnArrayOrderRun(
    splitArray.map(item => {
      return async () => {
        const res = await Promise.all(item.map(i => i()));
        return res;
      };
    })
  );
  return result.flat();
};

/**
 * 提前准备yapi的登录环境
 * @param configs
 */
export const prepareYapiLogin = async (configs: Config[]) => {
  const needLoginYapis = configs.filter(item => {
    if (item.serverType === 'yapi') {
      // 如果存在没有token的yapi配置,则需要登录
      if (item.projects instanceof Array) {
        return item.projects.some(i => !i.token);
      }
      return !item.projects || !item.projects?.token;
    }

    return false;
  });
  if (needLoginYapis.length) {
    // 如果有token，则忽略cookie鉴权
    await asyncFnArrayOrderRun(
      needLoginYapis.map(item => {
        return async () => {
          if (!(await checkCookie(item.serverUrl))) {
            spinner.clear();
            const info = await loginPrompts(item.serverUrl);
            spinner.start();
            await loginYapi(info, item);
          }
        };
      })
    );
  }
};
