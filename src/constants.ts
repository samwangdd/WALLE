export const DefaultServerUrl = 'http://yapi.int.medlinker.com';

export const CookieStoreFile = '/Users/Shared/api-typescript/apitsYapiCookie.json';

export enum ResponseErrorCode {
  /** 未登录 */
  UnLogin = 40011
}

/** yapi登录接口path */
export const yapiApiLogin = '/api/user/login';
/** 获取菜单列表 */
export const yapiApiGetMenu = '/api/interface/getCatMenu';
/** 获取项目基本信息 */
export const yapiApiGetProject = '/api/project/get';
/** 获取接口数据（有详细接口数据定义文档） */
export const yapiApiInterfaceDetail = '/api/interface/get';
/** 获取某个分类下接口列表 */
export const yapiApiCatInterfaceList = '/api/interface/list_cat';
/** 获取项目下接口列表数据 */
export const yapiApiProjectInterfaceList = '/api/interface/list';
/** 获取项目下菜单列表 */
export const yapiApiProjectMenuList = '/api/interface/list_menu';
/** 导出所有接口 */
export const yapiApiExport = '/api/plugin/export';
/** 获取项目token */
export const yapiApiToken = '/api/project/token';

/** 用于检查是否拥护git权限 */
export const gitRepoCheckTmpPath = '/tmp/gitRepoCheck';
