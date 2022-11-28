/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-shadow */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable camelcase */
/* eslint-disable no-use-before-define */
export * from 'json-schema';
import { JSONSchema4 } from 'json-schema';
import { LiteralUnion, OmitStrict } from 'vtils/types';
import { ParsedPath } from 'path';

export type requestFunctionTemplateType = (props: RequestFunctionTemplateProps, config?: SyntheticalConfig) => string;

/** 顶部依赖生成模板函数 */
/** 生成器参数 */
export type topImportPkgTemplateType = () => string;
export interface GenTemplateType {
  requestFunctionTemplate?: requestFunctionTemplateType;
  topImportPkgTemplate?: topImportPkgTemplateType;
}
export interface GeneratorOptions {
  cwd: string;
}

/** 项目信息 */
export interface Project {
  /** ID */
  _id: number;
  /** 名称 */
  name: string;
  /** 描述 */
  desc: string;
  /** 基本路径 */
  basepath: string;
  /** 标签 */
  tag: string[];
  /** 环境配置 */
  env: Array<{
    /** 环境名称 */
    name: string;
    /** 环境域名 */
    domain: string;
  }>;
  /** 项目token */
  token?: string;
  /** 项目下分类列表 */
  cat: Category[];
}

/** 接口定义 */
export interface Interface {
  /** 接口 ID */
  _id: number;
  /** 所属分类信息（由 YTT 自行实现） */
  _category: OmitStrict<Category, 'list'>;
  /** 所属项目信息（由 YTT 自行实现） */
  _project: Project;
  /** 接口名称 */
  title: string;
  /** 状态 */
  status: LiteralUnion<'done' | 'undone', string>;
  /** 接口备注 */
  markdown: string;
  /** 请求路径 */
  path: string;
  /** 请求方式，HEAD、OPTIONS 处理与 GET 相似，其余处理与 POST 相似 */
  method: Method;
  /** 所属项目 id */
  project_id: number;
  /** 所属分类 id */
  catid: number;
  /** 标签列表 */
  tag: string[];
  /** 请求头 */
  req_headers: Array<{
    /** 名称 */
    name: string;
    /** 值 */
    value: string;
    /** 备注 */
    desc: string;
    /** 示例 */
    example: string;
    /** 是否必需 */
    required: Required;
  }>;
  /** 路径参数 */
  req_params: Array<{
    /** 名称 */
    name: string;
    /** 备注 */
    desc: string;
    /** 示例 */
    example: string;
    /** 类型（YApi-X） */
    type?: RequestParamType;
  }>;
  /** 仅 GET：请求串 */
  req_query: Array<{
    /** 名称 */
    name: string;
    /** 备注 */
    desc: string;
    /** 示例 */
    example: string;
    /** 是否必需 */
    required: Required;
    /** 类型（YApi-X） */
    type?: RequestQueryType;
  }>;
  /** 仅 POST：请求内容类型。为 text, file, raw 时不必特殊处理。 */
  req_body_type: RequestBodyType;
  /** `req_body_type = json` 时是否为 json schema */
  req_body_is_json_schema: boolean;
  /** `req_body_type = form` 时的请求内容 */
  req_body_form: Array<{
    /** 名称 */
    name: string;
    /** 类型 */
    type: RequestFormItemType;
    /** 备注 */
    desc: string;
    /** 示例 */
    example: string;
    /** 是否必需 */
    required: Required;
  }>;
  /** `req_body_type = json` 时的请求内容 */
  req_body_other: string;
  /** 返回数据类型 */
  res_body_type: ResponseBodyType;
  /** `res_body_type = json` 时是否为 json schema */
  res_body_is_json_schema: boolean;
  /** 返回数据 */
  res_body: string;
  /** 创建时间（unix时间戳） */
  add_time: number;
  /** 更新时间（unix时间戳） */
  up_time: number;
  [key: string]: any;
}

/**  接口基本信息 */
export interface BaseInterfaceInfo {
  edit_uid: number;
  status: string;
  api_opened: boolean;
  tag: string[];
  _id: number;
  method: string;
  title: string;
  path: string;
  project_id: number;
  catid: number;
  uid: number;
  add_time: number;
}

/** 接口列表 */
export type InterfaceList = Interface[];

/** 分类信息 */
export interface Category {
  /** ID */
  _id: number;
  /** 分类名称 */
  name: string;
  /** 分类备注 */
  desc: string;
  /** 分类接口列表 */
  list: InterfaceList;
  /** 创建时间（unix时间戳） */
  add_time: number;
  /** 更新时间（unix时间戳） */
  up_time: number;
}

export interface ChangeCase {
  /**
   * @example
   * changeCase.camelCase('test string') // => 'testString'
   */
  camelCase: (value: string) => string;
  /**
   * @example
   * changeCase.constantCase('test string') // => 'TEST_STRING'
   */
  constantCase: (value: string) => string;
  /**
   * @example
   * changeCase.dotCase('test string') // => 'test.string'
   */
  dotCase: (value: string) => string;
  /**
   * @example
   * changeCase.headerCase('test string') // => 'Test-String'
   */
  headerCase: (value: string) => string;
  /**
   * @example
   * changeCase.lowerCase('TEST STRING') // => 'test string'
   */
  lowerCase: (value: string) => string;
  /**
   * @example
   * changeCase.lowerCaseFirst('TEST') // => 'tEST'
   */
  lowerCaseFirst: (value: string) => string;
  /**
   * @example
   * changeCase.paramCase('test string') // => 'test-string'
   */
  paramCase: (value: string) => string;
  /**
   * @example
   * changeCase.pascalCase('test string') // => 'TestString'
   */
  pascalCase: (value: string) => string;
  /**
   * @example
   * changeCase.pathCase('test string') // => 'test/string'
   */
  pathCase: (value: string) => string;
  /**
   * @example
   * changeCase.sentenceCase('testString') // => 'Test string'
   */
  sentenceCase: (value: string) => string;
  /**
   * @example
   * changeCase.snakeCase('test string') // => 'test_string'
   */
  snakeCase: (value: string) => string;
  /**
   * @example
   * changeCase.swapCase('Test String') // => 'tEST sTRING'
   */
  swapCase: (value: string) => string;
  /**
   * @example
   * changeCase.titleCase('a simple test') // => 'A Simple Test'
   */
  titleCase: (value: string) => string;
  /**
   * @example
   * changeCase.upperCase('test string') // => 'TEST STRING'
   */
  upperCase: (value: string) => string;
  /**
   * @example
   * changeCase.upperCaseFirst('test') // => 'Test'
   */
  upperCaseFirst: (value: string) => string;
}

/** 请求方式 */
export enum Method {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
  HEAD = 'HEAD',
  OPTIONS = 'OPTIONS',
  PATCH = 'PATCH'
}

/** 是否必需 */
export enum Required {
  /** 不必需 */
  false = '0',
  /** 必需 */
  true = '1'
}

/** 请求数据类型 */
export enum RequestBodyType {
  /** 查询字符串 */
  query = 'query',
  /** 表单 */
  form = 'form',
  /** JSON */
  json = 'json',
  /** 纯文本 */
  text = 'text',
  /** 文件 */
  file = 'file',
  /** 原始数据 */
  raw = 'raw',
  /** 无请求数据 */
  none = 'none'
}

/** 请求路径参数类型 */
export enum RequestParamType {
  /** 字符串 */
  string = 'string',
  /** 数字 */
  number = 'number'
}

/** 请求查询参数类型 */
export enum RequestQueryType {
  /** 字符串 */
  string = 'string',
  /** 数字 */
  number = 'number'
}

/** 请求表单条目类型 */
export enum RequestFormItemType {
  /** 纯文本 */
  text = 'text',
  /** 文件 */
  file = 'file'
}

/** 返回数据类型 */
export enum ResponseBodyType {
  /** JSON */
  json = 'json',
  /** 纯文本 */
  text = 'text',
  /** XML */
  xml = 'xml',
  /** 原始数据 */
  raw = 'raw'

  // yapi 实际上返回的是 json，有另外的字段指示其是否是 json schema
  /** JSON Schema */
  // jsonSchema = 'json-schema',
}

/** 扩展接口定义 */
export interface ExtendedInterface extends Interface {
  parsedPath: ParsedPath;
}

/** 分类列表，对应数据导出的 json 内容 */
export type CategoryList = Category[];

/** 支持生成 React Hooks 代码的相关配置 */
export interface ReactHooksConfig {
  /**
   * 是否开启该项功能。
   */
  enabled: boolean;

  /**
   * 请求 Hook 函数制造者文件路径。
   *
   * @default 与 `outputFilePath` 同级目录下的 `makeRequestHook.ts` 文件
   * @example 'src/api/makeRequestHook.ts'
   */
  requestHookMakerFilePath?: string;

  /**
   * 获取请求 Hook 的名称。
   *
   * @default `use${changeCase.pascalCase(requestFunctionName)}`
   * @param interfaceInfo 接口信息
   * @param changeCase 常用的大小写转换函数集合对象
   * @returns 请求 Hook 的名称
   */
  getRequestHookName?(interfaceInfo: ExtendedInterface, changeCase: ChangeCase): string;
}

/** 支持生成 JSON Schema 的相关配置 */
export interface JsonSchemaConfig {
  /**
   * 是否开启该项功能。
   */
  enabled: boolean;

  /**
   * 是否生成请求数据的 JSON Schema。
   *
   * @default true
   */
  // requestData?: boolean;

  /**
   * 是否生成返回数据的 JSON Schema。
   *
   * @default true
   */
  // responseData?: boolean;
}

/** 支持生成注释的相关配置 */
export interface CommentConfig {
  /**
   * 是否开启该项功能。
   *
   * @default true
   */
  enabled?: boolean;

  /**
   * 是否有标题。
   *
   * @default true
   */
  title?: boolean;

  /**
   * 是否有分类名称。
   *
   * @default true
   */
  category?: boolean;

  /**
   * 是否有标签。
   *
   * @default true
   */
  tag?: boolean;

  /**
   * 是否有请求头。
   *
   * @default true
   */
  requestHeader?: boolean;

  /**
   * 是否有更新时间。
   *
   * @default true
   */
  updateTime?: boolean;

  /**
   * 是否为标题、分类名称添加链接。
   *
   * @default true
   */
  link?: boolean;
}

/**
 * 共享的配置。
 */
export interface SharedConfig {
  /**
   * 要生成的目标代码类型。
   * 默认为 `typescript`，若设为 `javascript`，会将生成的 `.ts` 文件转换为 `.js` + `.d.ts` 文件并删除原 `.ts` 文件。
   *
   * @default 'typescript'
   */
  target?: 'typescript' | 'javascript';

  /**
   * 是否只生成接口请求内容和返回内容的 TypeSript 类型，是则请求文件和请求函数都不会生成。
   *
   * @default false
   */
  typesOnly?: boolean;

  /**
   * 测试环境名称。
   *
   * **用于获取测试环境域名。**
   *
   * 获取方式：打开项目 --> `设置` --> `环境配置` --> 点开或新增测试环境 --> 复制测试环境名称。
   *
   * @example 'dev'
   */
  devEnvName?: string;

  /**
   * 生产环境名称。
   *
   * **用于获取生产环境域名。**
   *
   * 获取方式：打开项目 --> `设置` --> `环境配置` --> 点开或新增生产环境 --> 复制生产环境名称。
   *
   * @example 'prod'
   */
  prodEnvName?: string;

  /**
   * 输出文件路径。
   *
   * 可以是 `相对路径` 或 `绝对路径`。
   *
   * @example 'src/api/index.ts'
   */
  // outputFilePath?: string | ((interfaceInfo: Interface, changeCase: ChangeCase) => string);
  outputFilePath?: string;

  /**
   * 请求函数文件路径。
   *
   * @default 与 `outputFilePath` 同级目录下的 `request.ts` 文件
   * @example 'src/api/request.ts'
   */
  requestFunctionFilePath?: string;

  /**
   * 如果接口响应的结果是 `JSON` 对象，
   * 且我们想要的数据在该对象下，
   * 那我们就可将 `dataKey` 设为我们想要的数据对应的键。
   *
   * 比如该对象为 `{ code: 0, msg: '成功', data: 100 }`，
   * 我们想要的数据为 `100`，
   * 则我们可将 `dataKey` 设为 `data`。
   *
   * @example 'data'
   */
  dataKey?: string;

  /**
   * 支持生成 React Hooks 代码的相关配置。
   */
  reactHooks?: ReactHooksConfig;

  /**
   * 支持生成 JSON Schema 的相关配置。
   */
  jsonSchema?: JsonSchemaConfig;

  /**
   * 支持生成注释的相关配置。
   */
  comment?: CommentConfig;

  /**
   * 预处理接口信息，返回新的接口信息。可返回 false 排除当前接口。
   *
   * 譬如你想对接口的 `path` 进行某些处理或者想排除某些接口，就可使用该方法。
   *
   * @example
   *
   * ```js
   * interfaceInfo => {
   *   interfaceInfo.path = interfaceInfo.path.replace('v1', 'v2')
   *   return interfaceInfo
   * }
   * ```
   */
  preprocessInterface?(interfaceInfo: Interface, changeCase: ChangeCase): Interface | false;

  /**
   * 获取请求函数的名称。
   *
   * @default changeCase.camelCase(interfaceInfo.parsedPath.name)
   * @param interfaceInfo 接口信息
   * @param changeCase 常用的大小写转换函数集合对象
   * @returns 请求函数的名称
   */
  getRequestFunctionName?(interfaceInfo: ExtendedInterface, changeCase: ChangeCase): string;

  /**
   * 获取请求数据类型的名称。
   *
   * @default changeCase.pascalCase(`${requestFunctionName}Request`)
   * @param interfaceInfo 接口信息
   * @param changeCase 常用的大小写转换函数集合对象
   * @returns 请求数据类型的名称
   */
  getRequestDataTypeName?(interfaceInfo: ExtendedInterface, changeCase: ChangeCase): string;

  /**
   * 获取响应数据类型的名称。
   *
   * @default changeCase.pascalCase(`${requestFunctionName}Response`)
   * @param interfaceInfo 接口信息
   * @param changeCase 常用的大小写转换函数集合对象
   * @returns 响应数据类型的名称
   */
  getResponseDataTypeName?(interfaceInfo: ExtendedInterface, changeCase: ChangeCase): string;
}

/**
 * 分类的配置。
 */
export interface CategoryConfig extends SharedConfig {
  /**
   * 分类 ID。
   *
   * 获取方式：打开项目 --> 点开分类 --> 复制浏览器地址栏 `/api/cat_` 后面的数字。
   *
   * @example 20
   */
  id: number;
  /**
   * 过滤接口
   */
  filter?: ((path: string, id?: number) => boolean) | RegExp | string[];
}

export interface TokenNeed {
  /**
   * 项目id，与token等效，二选一
   *
   * 获取方式：打开项目 --> `设置` --> `项目配置` --> 项目ID。
   *
   * @example '123'
   */
  projectId?: number;
  /**
   * 项目的token，与projectId等效，二选一
   *
   * 获取方式：打开项目 --> `设置` --> `token配置` --> 复制 token。
   *
   * @example 'e02a47122259d0c1973a9ff81cabb30685d64abc72f39edaa1ac6b6a792a647d'
   */
  token: string;
}
export interface ProjectIdNeed {
  /**
   * 项目id，与token等效，二选一
   *
   * 获取方式：打开项目 --> `设置` --> `项目配置` --> 项目ID。
   *
   * @example '123'
   */
  projectId: number;
  /**
   * 项目的token，与projectId等效，二选一
   *
   * 获取方式：打开项目 --> `设置` --> `token配置` --> 复制 token。
   *
   * @example 'e02a47122259d0c1973a9ff81cabb30685d64abc72f39edaa1ac6b6a792a647d'
   */
  token?: string;
}

/**
 * 项目的配置。
 */
export type ProjectConfig = SharedConfig &
  (ProjectIdNeed | TokenNeed) & {
    /**
   * 设置接口的baseURL
   *
   * @description 若要配置使用运行时代码，则增加`[code]:`前缀
   ```
   例：
    baseURL: "[code]:process.env.MED_API_HOST"  => baseURL:process.env.MED_API_HOST

    baseURL: "process.env.MED_API_HOST" => baseURL:"process.env.MED_API_HOST"
   ```
   */
    baseURL?: ((path: string) => string | undefined) | string;

    /**
     * 分类列表。
     */
    categories?: CategoryConfig[];
  };

export interface DownloadGitRepoSettings {
  /**
   * 仓库地址
   */
  repository: string;
  /**
   * 分支名
   * @default master
   */
  branch?: string;
  /**
   * 下载目录
   *
   * @default /tmp
   */
  dest?: string;
  /**
   * 全量更新
   * @default false
   * @description 全量更新，忽略git change
   *
   * @deprecated 暂时取消局部对比更新，强制全量更新
   *
   * 仓库模式下，工具会记录每次生成代码时仓库的commitId，通过对比commit之间的文件变化来实现局部更新
   */
  forceUpdate?: boolean;
  /**
   * 筛选
   */
  filter?: ((path: string) => boolean) | RegExp | string[];
  /**
   * 设置接口的baseURL
   *
   * @description 若要配置使用运行时代码，则增加`[code]:`前缀
   ```
   例：
    baseURL: "[code]:process.env.MED_API_HOST"  => baseURL:process.env.MED_API_HOST

    baseURL: "process.env.MED_API_HOST" => baseURL:"process.env.MED_API_HOST"
   ```
   */
  baseURL?: ((path: string) => string | undefined) | string;
}

/**
 * 服务器的配置。
 */
export interface ServerConfig extends SharedConfig, GenTemplateType {
  /**
   * 服务地址。若服务类型为 `yapi`，此处填其首页地址；若服务类型为 `swagger`，此处填其 json 地址。
   *
   * @小仓swagger https://patient-medication-qa.medlinker.com/swagger/doc.json
   * @大仓git_repo  https://git.medlinker.com/foundations/api-swagger.git
   * @yapi  ttp://yapi.int.medlinker.com/
   */
  serverUrl: string;

  /**
   * 服务类型。
   *
   * @default 'yapi'
   */
  serverType?: 'yapi' | 'swagger' | 'git-repo';

  /**
   * 仓库设置
   */
  gitRepoSettings?: DownloadGitRepoSettings;

  /**
   * 项目列表。
   */
  projects?: ProjectConfig | ProjectConfig[];
  /**
   * prettier代码格式化配置文件的路径
   *
   * @default process.cwd()
   */
  prettierConfigPath?: string;
  /**
   * 是否使用默认的请求库
   *
   * @default true
   */
  defaultRequestLib?: boolean;
  /**
   * 代理请求模式，所有请求均请求到指定接口
   */
  proxyInterface?: {
    /**
     * 代理接口
     *
     * @default /admin-interface/proxy/v0/proxy
     */
    path?: string;
  };
  /**
   * 设置接口的baseURL
   *
   * @description 若要配置使用运行时代码，则增加`[code]:`前缀
   ```
   例：
    baseURL: "[code]:process.env.MED_API_HOST"  => baseURL:process.env.MED_API_HOST

    baseURL: "process.env.MED_API_HOST" => baseURL:"process.env.MED_API_HOST"
   ```
   */
  baseURL?: ((path: string) => string | undefined) | string;
  /**
   * 过滤接口
   */
  filter?: ((path: string, id?: number) => boolean) | RegExp | string[];
  /**
   * yapi页面链接地址列表
   * 通过url分析出项目id，接口id，分类id
   *
   @example
   ```
    `http://yapi.corp.hongsong.club/project/279/interface/api => 项目id：279`
    `http://yapi.corp.hongsong.club/project/279/interface/api/cat_1061 =>项目id:279、分类id:1061`
    `http://yapi.corp.hongsong.club/project/279/interface/api/19343 => 项目id:279、接口id: 19343`
   ```
   */
  yapiUrlList?: string | string[];
  /**
   * 请求函数是否需要extra入参
   *
   * @default false
   */
  requestFunctionExtraParams?: boolean;
}

/** 混合的配置。 */
export type SyntheticalConfig = Partial<
  ServerConfig &
    ProjectConfig &
    CategoryConfig & {
      mockUrl: string;
      devUrl: string;
      prodUrl: string;
    }
>;

/** 配置。 */
export type Config = ServerConfig;

/**
 * 请求配置。
 */
export interface RequestConfig<
  MockUrl extends string = string,
  DevUrl extends string = string,
  ProdUrl extends string = string,
  Path extends string = string,
  DataKey extends string | undefined = string | undefined,
  ParamName extends string = string,
  QueryName extends string = string,
  RequestDataOptional extends boolean = boolean
> {
  /** 接口 Mock 地址，结尾无 `/` */
  mockUrl: MockUrl;
  /** 接口测试环境地址，结尾无 `/` */
  devUrl: DevUrl;
  /** 接口生产环境地址，结尾无 `/` */
  prodUrl: ProdUrl;
  /** 接口路径，以 `/` 开头 */
  path: Path;
  /** 请求方法 */
  method: Method;
  /** 请求头，除了 Content-Type 的所有头 */
  requestHeaders: Record<string, string>;
  /** 请求数据类型 */
  requestBodyType: RequestBodyType;
  /** 返回数据类型 */
  responseBodyType: ResponseBodyType;
  /** 数据所在键 */
  dataKey: DataKey;
  /** 路径参数的名称列表 */
  paramNames: ParamName[];
  /** 查询参数的名称列表 */
  queryNames: QueryName[];
  /** 请求数据是否可选 */
  requestDataOptional: RequestDataOptional;
  /** 请求数据的 JSON Schema (仅开启了 JSON Schema 生成时生效) */
  requestDataJsonSchema: JSONSchema4;
  /** 返回数据的 JSON Schema (仅开启了 JSON Schema 生成时生效) */
  responseDataJsonSchema: JSONSchema4;
  /** 请求函数名称 */
  requestFunctionName: string;
}

/**
 * 请求参数。
 */
export interface RequestFunctionParams extends RequestConfig {
  /** 原始数据 */
  rawData: Record<string, any>;
  /** 请求数据，不含文件数据 */
  data: Record<string, any>;
  /** 是否有文件数据 */
  hasFileData: boolean;
  /** 请求文件数据 */
  fileData: Record<string, any>;
  /** 所有请求数据，包括 data、fileData */
  allData: Record<string, any>;
  /** 获取全部请求数据（包含文件）的 FormData 实例 */
  getFormData: () => FormData;
}

/** 请求函数的额外参数 */
export type RequestFunctionRestArgs<T extends Function> = T extends (payload: any, ...args: infer R) => any ? R : never;

/** 属性定义 */
export interface PropDefinition {
  /** 属性名称 */
  name: string;
  /** 是否必需 */
  required: boolean;
  /** 类型 */
  type: JSONSchema4['type'];
  /** 注释 */
  comment: string;
}

/** 属性定义列表 */
export type PropDefinitions = PropDefinition[];

/** 请求函数体生成模板函数 */
export interface RequestFunctionTemplateProps {
  baseURL?: string;
  requestFunctionName: string;
  requestDataTypeName: string;
  extendedInterfaceInfo: ExtendedInterface;
  responseDataTypeName: string;
}
