/**
 * Created By api-typescript
 * https://alidocs.dingtalk.com/i/team/dN0G7AD82xAq4XWY/docs/dN0G78qlBL1o7zWY#
 */

import request from '../request';

/**
 * 接口 添加 的 **请求类型**
 *
 */
/**
 * 表单内容添加参数
 */
export interface PostFormContentaddRequest {
  /**
   * 用户ID
   */
  userId?: string;
  /**
   * 表单结构Id
   */
  schemaId: string;
  /**
   * 表单ID
   */
  formId: string;
  /**
   * 内容
   */
  content: string;
  /**
   * 内容字符串是否压缩 gzip格式 默认为false  不压缩
   */
  contentCompress?: boolean;
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
 * 接口 添加 的 **返回类型**
 *
 */
/**
 * 表单内容添加响应对象
 */
export interface PostFormContentaddResponse {
  /**
   * 内容ID
   */
  contentId?: string;
}

/**
 * 接口 添加 的 **请求函数**
 *
 */
export const postFormContentadd = (data?: PostFormContentaddRequest) => {
  return request.post<PostFormContentaddRequest, PostFormContentaddResponse>('/form/content/add', {
    data
  });
};

/**
 * 接口 删除 的 **请求类型**
 *
 */
/**
 * 表单内容删除参数
 */
export interface PostFormContentdeleteRequest {
  /**
   * 内容ID
   */
  contentIds?: string[];
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
 * 表单内容删除响应对象
 */
export interface PostFormContentdeleteResponse {
  /**
   * 成功删除的条数
   */
  count?: number;
}

/**
 * 接口 删除 的 **请求函数**
 *
 */
export const postFormContentdelete = (data?: PostFormContentdeleteRequest) => {
  return request.post<PostFormContentdeleteRequest, PostFormContentdeleteResponse>('/form/content/delete', {
    data
  });
};

/**
 * 接口 详情 的 **请求类型**
 *
 */
/**
 * 表单内容详情参数
 */
export interface PostFormContentdetailRequest {
  /**
   * 内容ID
   */
  contentId: string;
  /**
   * 包含表单结构详情 默认true包含
   */
  includeSchema?: boolean;
  /**
   * 内容字符串是否压缩 gzip格式 默认为false  不压缩
   */
  contentCompress?: boolean;
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
 * 表单内容详情响应对象
 */
export interface PostFormContentdetailResponse {
  /**
   * 表单内容Id
   */
  contentId?: string;
  /**
   * 内容
   */
  content?: string;
  /**
   * 表单结构详情
   */
  schema?: {};
  /**
   * 创建时间
   */
  xCreateTime?: string;
}

/**
 * 接口 详情 的 **请求函数**
 *
 */
export const postFormContentdetail = (data?: PostFormContentdetailRequest) => {
  return request.post<PostFormContentdetailRequest, PostFormContentdetailResponse>('/form/content/detail', {
    data
  });
};

/**
 * 接口 编辑 的 **请求类型**
 *
 */
/**
 * 表单内容编辑参数
 */
export interface PostFormContenteditRequest {
  /**
   * 内容ID
   */
  contentId: string;
  /**
   * 结构ID
   */
  schemaId: string;
  /**
   * 内容
   */
  content: string;
  /**
   * 用户id
   */
  userId?: number;
  /**
   * 内容字符串是否压缩 gzip格式 默认为false  不压缩
   */
  contentCompress?: boolean;
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
 * 表单内容编辑响应对象
 */
export interface PostFormContenteditResponse {
  /**
   * 内容ID
   */
  contentId?: string;
  /**
   * 结构ID
   */
  schemaId?: string;
}

/**
 * 接口 编辑 的 **请求函数**
 *
 */
export const postFormContentedit = (data?: PostFormContenteditRequest) => {
  return request.post<PostFormContenteditRequest, PostFormContenteditResponse>('/form/content/edit', {
    data
  });
};

/**
 * 接口 列表 的 **请求类型**
 *
 */
/**
 * 表单内容列表参数
 */
export interface PostFormContentlistRequest {
  /**
   * 用户ID数组
   */
  userIds?: string[];
  /**
   * 表单名称
   */
  name?: string;
  /**
   * 内容ID数组
   */
  contentIds?: string[];
  /**
   * 包含表单结构详情 默认true包含
   */
  includeSchema?: boolean;
  /**
   * 表单结构ID数组
   */
  schemaIds?: string[];
  /**
   * 表单ID数组
   */
  formIds?: string[];
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
 * 表单内容列表响应对象
 */
export interface PostFormContentlistResponse {
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
     * 用户ID
     */
    userId?: string;
    /**
     * 用户名字
     */
    userName?: string;
    /**
     * 表单内容Id
     */
    contentId?: string;
    /**
     * 内容
     */
    content?: string;
    /**
     * 表单结构详情
     */
    schema?: {
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
    };
    /**
     * 创建时间
     */
    xCreateTime?: string;
    formId?: string;
    schemaId?: string;
  }[];
}

/**
 * 接口 列表 的 **请求函数**
 *
 */
export const postFormContentlist = (data?: PostFormContentlistRequest) => {
  return request.post<PostFormContentlistRequest, PostFormContentlistResponse>('/form/content/list', {
    data
  });
};
