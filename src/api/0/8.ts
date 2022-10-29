/**
 * Created By api-typescript
 * https://alidocs.dingtalk.com/i/team/dN0G7AD82xAq4XWY/docs/dN0G78qlBL1o7zWY#
 */

import request from '../request';

/**
 * 接口 添加分类 的 **请求类型**
 *
 */
/**
 * 分类添加参数
 */
export interface PostFormTemplateClassifyaddRequest {
  /**
   * 名称
   */
  name: string;
  /**
   * 描述
   */
  desc?: string;
  /**
   * 首图
   */
  headImg?: string;
  /**
   * 上级分类ID
   */
  pid?: string;
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
 * 接口 添加分类 的 **返回类型**
 *
 */
/**
 * 表单分类添加响应对象
 */
export interface PostFormTemplateClassifyaddResponse {
  /**
   * 分类ID
   */
  classifyId?: string;
}

/**
 * 接口 添加分类 的 **请求函数**
 *
 */
export const postFormTemplateClassifyadd = (data?: PostFormTemplateClassifyaddRequest) => {
  return request.post<PostFormTemplateClassifyaddRequest, PostFormTemplateClassifyaddResponse>(
    '/form/templateClassify/add',
    {
      data
    }
  );
};

/**
 * 接口 分类删除 的 **请求类型**
 *
 */
/**
 * 分类删除参数
 */
export interface PostFormTemplateClassifydeleteRequest {
  /**
   * 分类IDs
   */
  classifyIds: string[];
  /**
   * 是否需要检查下级分类 默认为true检查
   */
  checkSubTemplateClassify?: boolean;
  /**
   * 是否需要检查关联数据  默认为true检查
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
 * 接口 分类删除 的 **返回类型**
 *
 */
/**
 * 表单分类删除响应对象
 */
export interface PostFormTemplateClassifydeleteResponse {
  /**
   * 成功删除条数
   */
  count?: number;
}

/**
 * 接口 分类删除 的 **请求函数**
 *
 */
export const postFormTemplateClassifydelete = (data?: PostFormTemplateClassifydeleteRequest) => {
  return request.post<PostFormTemplateClassifydeleteRequest, PostFormTemplateClassifydeleteResponse>(
    '/form/templateClassify/delete',
    {
      data
    }
  );
};

/**
 * 接口 分类详情 的 **请求类型**
 *
 */
/**
 * 分类详情参数
 */
export interface PostFormTemplateClassifydetailRequest {
  /**
   * 分类ID
   */
  classifyId: string;
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
 * 接口 分类详情 的 **返回类型**
 *
 */
/**
 * 表单分类详情响应对象
 */
export interface PostFormTemplateClassifydetailResponse {
  /**
   * 分类ID
   */
  classifyId?: string;
  /**
   * 名称
   */
  name?: string;
  /**
   * 描述
   */
  desc?: string;
  /**
   * 首图
   */
  headImg?: string;
  /**
   * 父ID
   */
  pid?: string;
  /**
   * 层级  1为顶层  下级2,3,4以此类推
   */
  level?: number;
  /**
   * 创建时间
   */
  xCreateTime?: string;
}

/**
 * 接口 分类详情 的 **请求函数**
 *
 */
export const postFormTemplateClassifydetail = (data?: PostFormTemplateClassifydetailRequest) => {
  return request.post<PostFormTemplateClassifydetailRequest, PostFormTemplateClassifydetailResponse>(
    '/form/templateClassify/detail',
    {
      data
    }
  );
};

/**
 * 接口 分类编辑 的 **请求类型**
 *
 */
/**
 * 分类编辑参数
 */
export interface PostFormTemplateClassifyeditRequest {
  /**
   * 分类ID
   */
  classifyId: string;
  /**
   * 名称
   */
  name?: string;
  /**
   * 描述
   */
  desc?: string;
  /**
   * 首图
   */
  headImg?: string;
  /**
   * 上级分类ID
   */
  pid?: string;
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
 * 接口 分类编辑 的 **返回类型**
 *
 */
/**
 * 表单分类编辑响应对象
 */
export interface PostFormTemplateClassifyeditResponse {
  /**
   * 分类ID
   */
  classifyId?: string;
}

/**
 * 接口 分类编辑 的 **请求函数**
 *
 */
export const postFormTemplateClassifyedit = (data?: PostFormTemplateClassifyeditRequest) => {
  return request.post<PostFormTemplateClassifyeditRequest, PostFormTemplateClassifyeditResponse>(
    '/form/templateClassify/edit',
    {
      data
    }
  );
};

/**
 * 接口 分类列表 的 **请求类型**
 *
 */
/**
 * 分类列表参数
 */
export interface PostFormTemplateClassifylistRequest {
  /**
   * 名称
   */
  name?: string;
  /**
   * 分类ID数组
   */
  classifyIds?: string[];
  /**
   * 上级分类ID数组
   */
  pids?: string[];
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
 * 接口 分类列表 的 **返回类型**
 *
 */
/**
 * 表单分类列表响应对象
 */
export interface PostFormTemplateClassifylistResponse {
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
     * 分类ID
     */
    templateClassifyId?: string;
    /**
     * 名称
     */
    name?: string;
    /**
     * 描述
     */
    desc?: string;
    /**
     * 首图
     */
    headImg?: string;
    /**
     * 父ID
     */
    pid?: string;
    /**
     * 层级  1为顶层  下级2,3,4以此类推
     */
    level?: number;
    /**
     * 创建时间
     */
    xCreateTime?: string;
  }[];
}

/**
 * 接口 分类列表 的 **请求函数**
 *
 */
export const postFormTemplateClassifylist = (data?: PostFormTemplateClassifylistRequest) => {
  return request.post<PostFormTemplateClassifylistRequest, PostFormTemplateClassifylistResponse>(
    '/form/templateClassify/list',
    {
      data
    }
  );
};
