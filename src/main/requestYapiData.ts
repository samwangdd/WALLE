/**
 * 获取yapi数据
 */
import got, { Options } from 'got';
import { CategoryList, Category, Project, SyntheticalConfig, Interface, BaseInterfaceInfo } from '../types';
import prompts from 'prompts';
import { isEmpty, omit } from 'vtils';
import { cookieJar, checkCookie } from '../utils/cookie';
import {
  DefaultServerUrl,
  ResponseErrorCode,
  yapiApiLogin,
  yapiApiGetProject,
  yapiApiExport,
  yapiApiGetMenu,
  yapiApiInterfaceDetail,
  yapiApiToken,
  yapiApiCatInterfaceList
} from '../constant/common';
import * as log from '../utils/console';
import { spinner } from '../UI/spinner';
import { autoAsyncSplitQueue } from '../helpers';

type ResponseData<T = Record<string, any>> = {
  errcode: number;
  errmsg: string;
  data: T;
};

type ApiConfig = SyntheticalConfig & {
  method?: Options['method'];
  /** 异常了是否执行 `process.exit()` */
  errorExit?: boolean;
};

const client = got.extend({
  cookieJar,
  responseType: 'json',
  https: {
    rejectUnauthorized: false
  }
});

const emailValidate: prompts.PrevCaller<'email', string | boolean> = (prev) => {
  return !prev ? '请输入邮箱' : true;
};
const passwordValidate: prompts.PrevCaller<'password', string | boolean> = (prev) => {
  return !prev ? '请输入密码' : true;
};

const inputs = [
  {
    type: 'text',
    name: 'email',
    message: '请输入yapi的邮箱账号',
    validate: emailValidate
  },
  {
    type: 'password',
    name: 'password',
    message: '请输入密码',
    validate: passwordValidate
  }
] as const;
type NameValueKey = typeof inputs[number]['name'];

/**
 * 登录提示框，账号密码录入
 * @returns
 */
export const loginPrompts = async (serverUrl?: string) => {
  const formatInputs = [...inputs] as unknown as prompts.PromptObject[];
  if (serverUrl) {
    formatInputs[0].message = `请输入${serverUrl}的邮箱账号`;
  }
  const res = await prompts(formatInputs);
  return res as {
    // eslint-disable-next-line no-unused-vars
    [k in NameValueKey]: string;
  };
};

export type LoginProps = {
  // eslint-disable-next-line no-unused-vars
  [k in NameValueKey]: string;
};
export type LoginResponseData = {
  email: string;
  role: string;
  study: boolean;
  type: string;
  uid: number;
  username: string;
};
/**
 * 登录
 * @param data
 * @param config
 * @returns
 */
export const login = async function (data: LoginProps, config?: SyntheticalConfig) {
  const { serverUrl = DefaultServerUrl } = config || {};
  const url = `${serverUrl}${yapiApiLogin}`;
  const res = await client<ResponseData<LoginResponseData>>(url, { method: 'post', json: data }).catch(errmsg => {
    log.error(errmsg || '登录失败');
    process.exit();
  });

  // 设置Cookie
  const cookie = cookieJar.getCookieStringSync(url);
  if (cookie) cookieJar.setCookie(cookie, serverUrl);

  const { body } = res;
  if (body && body.errcode) {
    log.error(body.errmsg || '登录失败');
    process.exit(0);
  }
  return body.data || body;
};

type FetchApiData = {
  token?: string;
  [k: string]: any;
};

/**
 * fetch 封装
 * @param path 
 * @param data 
 * @param config 
 * @returns 
 */
export const fetchApi = async function <T>(path: string, data: FetchApiData, config?: ApiConfig) {
  const { serverUrl = DefaultServerUrl, serverType, errorExit = true } = config || {};
  // 如果有token，则忽略cookie鉴权
  if (serverType === 'yapi' && !config?.token && !(await checkCookie(serverUrl))) {
    spinner.stop();
    log.log(data);
    const info = await loginPrompts(serverUrl);
    spinner.start();
    await login(info);
  }
  const method = config?.method || 'get';
  const url = path.startsWith('http') ? path : `${serverUrl}${path}`;
  const params = { ...data };
  if (config?.token) {
    params.token = config.token;
  }
  const response = await client<ResponseData<T>>(url, {
    method,
    json: method.toLowerCase() !== 'get' ? params : undefined,
    searchParams: method.toLowerCase() === 'get' ? params : undefined
  }).catch(e => {
    return {
      body: {
        errcode: 1111,
        errmsg: e.message || '接口请求异常',
        data: null
      }
    };
  });

  const { body: res } = response;
  if (res && res.errcode) {
    spinner.stop();
    if (res.errcode === ResponseErrorCode.UnLogin) {
      log.error('登录已过期或token异常', url, data);
    } else {
      log.error(res.errmsg, url, data);
    }

    if (errorExit) process.exit();
  }

  return (res.data || res) as T;
};

/**
 * 获取项目token
 */
export const fetchToken = async (id: number, config?: ApiConfig) => {
  const res = await fetchApi<string>(
    yapiApiToken,
    {
      project_id: id
    },
    config
  );

  return res;
};

/**
 * 获取项目基本信息 by id
 */
export const fetchProjectById = async (config: ApiConfig) => {
  const { projectId } = config;
  const projectInfo = await fetchApi<Project>(
    yapiApiGetProject,
    {
      id: projectId
    },
    config
  );
  const basePath = `/${projectInfo.basepath || '/'}`.replace(/\/+$/, '').replace(/^\/+/, '/');
  projectInfo.basepath = basePath;

  // 顺便获取项目token
  if (!config.token && config.serverType === 'yapi' && projectInfo._id) {
    const token = await fetchToken(projectInfo._id, config);
    projectInfo.token = token;
  }
  return projectInfo;
};

/**
 * 获取项目基本信息
 *
 */
export const fetchProject = async (config: ApiConfig) => {
  if (!config.token) {
    return fetchProjectById(config);
  }
  const projectInfo = await fetchApi<Project>(
    yapiApiGetProject,
    {
      token: config.token
    },
    config
  );
  const basePath = `/${projectInfo.basepath || '/'}`.replace(/\/+$/, '').replace(/^\/+/, '/');
  projectInfo.basepath = basePath;
  return projectInfo;
};

/**
 * 通过导出接口获取项目下的所有接口 by id
 */
export const fetchExportById = async (config: ApiConfig) => {
  const projectInfo = await fetchProjectById(config);
  const categoryList = await fetchApi<CategoryList>(
    yapiApiExport,
    {
      type: 'json',
      status: 'all',
      isWiki: 'false',
      token: projectInfo.token
    },
    config
  );
  return categoryList.map(cat => {
    cat.list = (cat.list || []).map(item => {
      item.path = `${projectInfo.basepath}${item.path}`;
      return item;
    });
    return cat;
  });
};
/**
 * 通过导出接口获取项目下的所有接口
 */
export const fetchExport = async (config: ApiConfig) => {
  if (!config.token) {
    return fetchExportById(config);
  }
  const projectInfo = await fetchProject(config);
  const categoryList = await fetchApi<CategoryList>(
    yapiApiExport,
    {
      type: 'json',
      status: 'all',
      isWiki: 'false',
      token: config.token
    },
    config
  );
  return categoryList.map(cat => {
    cat.list = (cat.list || []).map(item => {
      item.path = `${projectInfo.basepath}${item.path}`;
      return item;
    });
    return cat;
  });
};

/**
 * 获取所有接口 by id
 * @param param0
 * @returns
 */
export const fetchInterfaceListById = async function (config: ApiConfig): Promise<Category[]> {
  const { id } = config;
  const allData = await fetchExportById(config);
  const category = (allData || []).filter(
    cat => !isEmpty(cat) && !isEmpty(cat.list) && (!id || (id && cat.list[0].catid === id))
  );

  if (category) {
    category.forEach(interfaceInfo => {
      interfaceInfo._id = interfaceInfo.list[0].catid;
      interfaceInfo.list.forEach(item => {
        // 实现 _category 字段
        item._category = omit(interfaceInfo, ['list']);
      });
    });
  }

  return category;
};

/**
 * 获取所有接口
 * @param param0
 * @returns
 */
export const fetchInterfaceList = async function (config: ApiConfig): Promise<Category[]> {
  const { id, token } = config;
  if (!token) {
    return fetchInterfaceListById(config);
  }
  const allData = await fetchExport(config);
  const category = (allData || []).filter(
    cat => !isEmpty(cat) && !isEmpty(cat.list) && (!id || (id && cat.list[0].catid === id))
  );

  if (category) {
    category.forEach(interfaceInfo => {
      interfaceInfo._id = interfaceInfo.list[0].catid;
      interfaceInfo.list.forEach(item => {
        // 实现 _category 字段
        item._category = omit(interfaceInfo, ['list']);
      });
    });
  }

  return category;
};

/**
 * 获取项目信息 by id
 * @param config
 * @returns
 */
export const fetchProjectInfoById = async function (config: ApiConfig) {
  const { serverUrl, projectId } = config;
  const projectInfo = await fetchProjectById(config);
  const projectCats = await fetchApi<CategoryList>(
    yapiApiGetMenu,
    {
      project_id: projectId
    },
    config
  );
  return {
    ...projectInfo,
    cats: projectCats,
    getMockUrl: () => `${serverUrl}/mock/${projectInfo._id}`,
    getDevUrl: (devEnvName: string) => {
      const env = projectInfo.env.find(e => e.name === devEnvName);
      return (env && env.domain) /* istanbul ignore next */ || '';
    },
    getProdUrl: (prodEnvName: string) => {
      const env = projectInfo.env.find(e => e.name === prodEnvName);
      return (env && env.domain) /* istanbul ignore next */ || '';
    }
  };
};

/**
 * 获取项目信息
 * @param config
 * @returns
 */
export const fetchProjectInfo = async function (config: ApiConfig) {
  const { token, serverUrl } = config;
  if (!token) {
    return fetchProjectInfoById(config);
  }
  const projectInfo = await fetchProject(config);
  const projectCats = await fetchApi<CategoryList>(
    yapiApiGetMenu,
    {
      token
    },
    config
  );
  return {
    ...projectInfo,
    cats: projectCats,
    getMockUrl: () => `${serverUrl}/mock/${projectInfo._id}`,
    getDevUrl: (devEnvName: string) => {
      const env = projectInfo.env.find(e => e.name === devEnvName);
      return (env && env.domain) /* istanbul ignore next */ || '';
    },
    getProdUrl: (prodEnvName: string) => {
      const env = projectInfo.env.find(e => e.name === prodEnvName);
      return (env && env.domain) /* istanbul ignore next */ || '';
    }
  };
};

/**
 * 获取单个接口信息 by id
 */
export const fetchInterfaceById = async (id: number, config?: ApiConfig) => {
  const res = await fetchApi<Interface>(
    yapiApiInterfaceDetail,
    {
      id
    },
    config
  );

  return res;
};

/**
 * 获取分类下的接口列表信息 by id
 */
export const fetchCatInterfaceById = async (catid: number, config?: ApiConfig) => {
  const res = await fetchApi<{ list: BaseInterfaceInfo[]; count: number; total: number }>(
    yapiApiCatInterfaceList,
    {
      catid,
      page: 1,
      limit: 5000
    },
    { ...config, errorExit: false }
  );

  const list = res.list;
  // if (list.length) {
  //   const resList = await Promise.all(
  //     list.map(async item => fetchInterfaceById(item._id, { ...config, errorExit: false }))
  //   );

  //   return resList;
  // }

  return list;
};

/**
 * 批量获取分类下的详细接口信息
 * @param categoryList
 * @param config
 * @returns
 */
export const getInterfacesByCategoryIds = async (categoryIds: number[], config?: ApiConfig) => {
  const res = await autoAsyncSplitQueue(
    categoryIds.map(id => {
      return async () => {
        const rr = await fetchCatInterfaceById(id, config);
        return rr;
      };
    })
  );

  const allInterface = res.flat();
  const result = await autoAsyncSplitQueue(
    allInterface.map(j => {
      return async () => {
        const info = await fetchInterfaceById(j._id, config);
        return info;
      };
    })
  );

  return result.flat();
};

/**
 * 获取项目信息和接口
 * @param config
 * @returns
 */
export const getProjectInfoAndInterfaces = async (config: ApiConfig) => {
  const { categories = [], token } = config;
  let projectInfo!: Project;
  let allInterfaceList: Category[] = [];

  if (token) {
    // 通过token获取的项目信息，未返回分类列表
    const simpleProjectInfo = await fetchProjectInfo(config);
    projectInfo = await fetchProjectInfoById({
      ...config,
      projectId: simpleProjectInfo._id
    });
  } else {
    projectInfo = await fetchProjectInfoById(config);
  }

  const catList = (projectInfo?.cat || []).filter(item => categories?.findIndex(i => i.id === item._id) >= 0);
  if (catList?.length) {
    await Promise.all(
      catList.map(async (item, index) => {
        const interfaceList = await getInterfacesByCategoryIds([item._id], config);
        catList[index].list = interfaceList.map(kk => {
          kk._category = omit(item, ['list']); // 追加分类信息

          return kk;
        });
      })
    );
    allInterfaceList = catList;
  } else {
    // 未配置，则全量生成，此时用export接口更高效
    allInterfaceList = await fetchInterfaceList({
      ...config,
      token: token || projectInfo.token
    });
  }

  return {
    projectInfo,
    allInterfaceList
  };
};
