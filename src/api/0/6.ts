/**
 * Created By api-typescript
 * https://alidocs.dingtalk.com/i/team/dN0G7AD82xAq4XWY/docs/dN0G78qlBL1o7zWY#
 */

import request from '../request';

/**
 * 接口 添加表单结构模式 的 **请求类型**
 *
 */
/**
 * 表单结构模式添加参数
 */
export interface PostFormSchemaaddRequest {
  /**
   * 名称
   */
  name: string;
  /**
   * 结构字符串
   */
  schema: string;
  /**
   * 表单版本
   */
  version?: string;
  /**
   * 表单版本是否自动生成 1:自动生成  2：不自动    默认为2  不自动生成，用户必传版本
   */
  versionAuto?: number;
  /**
   * 首图
   */
  headImg?: string;
  /**
   * 分类ID
   */
  classifyId?: string;
  /**
   * 结构字符串是否压缩 gzip格式 默认为false  不压缩
   */
  schemaCompress?: boolean;
  /**
   * APP_CODE应用编号
   */
  appCode: string;
  /**
   * CHANNEL_CODE渠道编号
   */
  channelCode: string;
  /**
   * APP_VERSION应用版本
   */
  appVersion?: string;
}

/**
 * 接口 添加表单结构模式 的 **返回类型**
 *
 */
/**
 * 表单结构添加响应对象
 */
export interface PostFormSchemaaddResponse {
  /**
   * 结构ID
   */
  schemaId?: string;
  /**
   * 表单ID
   */
  formId?: string;
}

/**
 * 接口 添加表单结构模式 的 **请求函数**
 *
 */
export const postFormSchemaadd = (data?: PostFormSchemaaddRequest) => {
  return request.post<PostFormSchemaaddRequest, PostFormSchemaaddResponse>('/form/schema/add', {
    data
  });
};

/**
 * 接口 删除 的 **请求类型**
 *
 */
/**
 * 表单结构模式删除参数
 */
export interface PostFormSchemadeleteRequest {
  /**
   * 结构模式ID
   */
  schemaId: string;
  /**
   * 表单ID
   */
  formId?: string;
  /**
   * 是否需要检查关联内容数据  默认为true检查
   */
  checkRelation?: boolean;
  /**
   * APP_CODE应用编号
   */
  appCode: string;
  /**
   * CHANNEL_CODE渠道编号
   */
  channelCode: string;
  /**
   * APP_VERSION应用版本
   */
  appVersion?: string;
}

/**
 * 接口 删除 的 **返回类型**
 *
 */
/**
 * 表单结构删除响应对象
 */
export interface PostFormSchemadeleteResponse {
  /**
   * 结构ID
   */
  schemaId?: string;
  /**
   * 表单ID
   */
  formId?: string;
}

/**
 * 接口 删除 的 **请求函数**
 *
 */
export const postFormSchemadelete = (data?: PostFormSchemadeleteRequest) => {
  return request.post<PostFormSchemadeleteRequest, PostFormSchemadeleteResponse>('/form/schema/delete', {
    data
  });
};

/**
 * 接口 详情 的 **请求类型**
 *
 */
/**
 * 表单结构模式详情参数
 */
export interface PostFormSchemadetailRequest {
  /**
   * 表单结构ID
   */
  schemaId?: string;
  /**
   * 表单ID  获取最新的表单结构
   */
  formId?: string;
  /**
   * 结构字符串是否压缩 gzip格式 默认为false  不压缩
   */
  schemaCompress?: boolean;
  /**
   * APP_CODE应用编号
   */
  appCode: string;
  /**
   * CHANNEL_CODE渠道编号
   */
  channelCode: string;
  /**
   * APP_VERSION应用版本
   */
  appVersion?: string;
}

/**
 * 接口 详情 的 **返回类型**
 *
 */
/**
 * 表单结构详情响应对象
 */
export interface PostFormSchemadetailResponse {
  /**
   * 结构ID
   */
  schemaId?: string;
  /**
   * 表单ID
   */
  formId?: string;
  /**
   * 名称
   */
  name?: string;
  /**
   * 结构模式字符串
   */
  schema?: string;
  /**
   * 首图
   */
  headImg?: string;
  /**
   * 分类ID
   */
  classifyId?: string;
  /**
   * 版本编号
   */
  version?: string;
  /**
   * 创建时间
   */
  xCreateTime?: string;
}

/**
 * 接口 详情 的 **请求函数**
 *
 */
export const postFormSchemadetail = (data?: PostFormSchemadetailRequest) => {
  return request.post<PostFormSchemadetailRequest, PostFormSchemadetailResponse>('/form/schema/detail', {
    data
  });
};

/**
 * 接口 编辑 的 **请求类型**
 *
 */
/**
 * 表单结构模式编辑参数
 */
export interface PostFormSchemaeditRequest {
  /**
   * 结构ID
   */
  schemaId: string;
  /**
   * 表单ID
   */
  formId: string;
  /**
   * 名称
   */
  name: string;
  /**
   * 结构模式字符串
   */
  schema: string;
  /**
   * 首图
   */
  headImg?: string;
  /**
   * 分类ID
   */
  classifyId?: string;
  /**
   * 表单版本
   */
  version?: string;
  /**
   * 结构字符串是否压缩 gzip格式 默认为false  不压缩
   */
  schemaCompress?: boolean;
  /**
   * APP_CODE应用编号
   */
  appCode: string;
  /**
   * CHANNEL_CODE渠道编号
   */
  channelCode: string;
  /**
   * APP_VERSION应用版本
   */
  appVersion?: string;
}

/**
 * 接口 编辑 的 **返回类型**
 *
 */
/**
 * 表单结构编辑响应对象
 */
export interface PostFormSchemaeditResponse {
  /**
   * 结构ID
   */
  schemaId?: string;
  /**
   * 表单ID
   */
  formId?: string;
}

/**
 * 接口 编辑 的 **请求函数**
 *
 */
export const postFormSchemaedit = (data?: PostFormSchemaeditRequest) => {
  return request.post<PostFormSchemaeditRequest, PostFormSchemaeditResponse>('/form/schema/edit', {
    data
  });
};

/**
 * 接口 列表 的 **请求类型**
 *
 */
/**
 * 表单结构模式列表参数
 */
export interface PostFormSchemalistRequest {
  /**
   * 名称
   */
  name?: string;
  /**
   * 结构ID数组
   */
  schemaIds?: string[];
  /**
   * 表单ID数组
   */
  formIds?: string[];
  /**
   * 分类ID数组
   */
  classifyIds?: string[];
  /**
   * 是否只显示最新版本 1：是最新 2 ：不是最新  默认为1只显示最新版本
   */
  showNew?: number;
  /**
   * 页数
   */
  pageNum?: number;
  /**
   * 一页的条数
   */
  pageSize?: number;
  /**
   * 排序字段
   */
  orderBy?: string;
  /**
   * 排序方式
   */
  asc?: boolean;
  /**
   * APP_CODE应用编号
   */
  appCode: string;
  /**
   * CHANNEL_CODE渠道编号
   */
  channelCode: string;
  /**
   * APP_VERSION应用版本
   */
  appVersion?: string;
}

/**
 * 接口 列表 的 **返回类型**
 *
 */
/**
 * 表单结构列表响应对象
 */
export interface PostFormSchemalistResponse {
  /**
   * 页数
   */
  pageNum?: number;
  /**
   * 一页的条数
   */
  pageSize?: number;
  /**
   * 总条数
   */
  total?: number;
  /**
   * 总页数
   */
  totalPages?: number;
  /**
   * 排序字段
   */
  orderBy?: string;
  /**
   * 排序方式
   */
  asc?: boolean;
  /**
   * 内容
   */
  content?: {
    /**
     * 结构ID
     */
    schemaId?: string;
    /**
     * 表单ID
     */
    formId?: string;
    /**
     * 名称
     */
    name?: string;
    /**
     * 首图
     */
    headImg?: string;
    /**
     * 分类ID
     */
    classifyId?: string;
    /**
     * 版本
     */
    version?: string;
    /**
     * 创建时间
     */
    xCreateTime?: string;
  }[];
}

/**
 * 接口 列表 的 **请求函数**
 *
 */
export const postFormSchemalist = (data?: PostFormSchemalistRequest) => {
  return request.post<PostFormSchemalistRequest, PostFormSchemalistResponse>('/form/schema/list', {
    data
  });
};
