/**
 * Created By api-typescript
 * https://alidocs.dingtalk.com/i/team/dN0G7AD82xAq4XWY/docs/dN0G78qlBL1o7zWY#
 */

import request from '../request';

/**
 * 接口 添加模版 的 **请求类型**
 *
 */
/**
 * 表单结构模式添加参数
 */
export interface PostFormTemplateaddRequest {
  /**
   * 名称
   */
  name: string;
  /**
   * 结构字符串
   */
  schema: string;
  /**
   * 分类ID
   */
  classifyId: string;
  /**
   * 结构字符串是否压缩 gzip格式 默认为false  不压缩
   */
  schemaCompress?: boolean;
  /**
   * 描述
   */
  desc?: string;
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
 * 接口 添加模版 的 **返回类型**
 *
 */
/**
 * 表单结构添加响应对象
 */
export interface PostFormTemplateaddResponse {
  /**
   * 模版ID
   */
  templateId?: string;
}

/**
 * 接口 添加模版 的 **请求函数**
 *
 */
export const postFormTemplateadd = (data?: PostFormTemplateaddRequest) => {
  return request.post<PostFormTemplateaddRequest, PostFormTemplateaddResponse>('/form/template/add', {
    data
  });
};

/**
 * 接口 删除 的 **请求类型**
 *
 */
/**
 * 表单模板删除参数
 */
export interface PostFormTemplatedeleteRequest {
  /**
   * 模版id
   */
  templateId?: number;
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
 * 表单模版删除响应对象
 */
export interface PostFormTemplatedeleteResponse {
  /**
   * ID
   */
  templateId?: string;
}

/**
 * 接口 删除 的 **请求函数**
 *
 */
export const postFormTemplatedelete = (data?: PostFormTemplatedeleteRequest) => {
  return request.post<PostFormTemplatedeleteRequest, PostFormTemplatedeleteResponse>('/form/template/delete', {
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
export interface PostFormTemplatelistRequest {
  /**
   * 分类ID数组
   */
  classifyIds?: string[];
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
 * 表单模版列表响应对象
 */
export interface PostFormTemplatelistResponse {
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
  content?: {
    /**
     * 模版名称
     */
    name?: string;
    /**
     * 模版分类名
     */
    classifyName?: string;
    /**
     * 模版描述
     */
    desc?: string;
    /**
     * 创建时间
     */
    xCreateTime?: string;
    /**
     * 结构字符串
     */
    schema?: string;
  }[];
}

/**
 * 接口 列表 的 **请求函数**
 *
 */
export const postFormTemplatelist = (data?: PostFormTemplatelistRequest) => {
  return request.post<PostFormTemplatelistRequest, PostFormTemplatelistResponse>('/form/template/list', {
    data
  });
};
