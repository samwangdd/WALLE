/**
 * Created By api-typescript
 * https://alidocs.dingtalk.com/i/team/dN0G7AD82xAq4XWY/docs/dN0G78qlBL1o7zWY#
 */

import request from '../request';

/**
 * 接口 添加标签 的 **请求类型**
 *
 */
/**
 * 标签添加参数
 */
export interface PostUserUserDefinedLabeladdRequest {
  /**
   * 名称
   */
  name: string;
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
 * 接口 添加标签 的 **返回类型**
 *
 */
/**
 * 标签添加响应对象
 */
export interface PostUserUserDefinedLabeladdResponse {
  /**
   * 标签ID
   */
  labelId?: string;
}

/**
 * 接口 添加标签 的 **请求函数**
 *
 */
export const postUserUserDefinedLabeladd = (data?: PostUserUserDefinedLabeladdRequest) => {
  return request.post<PostUserUserDefinedLabeladdRequest, PostUserUserDefinedLabeladdResponse>(
    '/user/userDefinedLabel/add',
    {
      data
    }
  );
};

/**
 * 接口 标签删除 的 **请求类型**
 *
 */
/**
 * 标签删除参数
 */
export interface PostUserUserDefinedLabeldeleteRequest {
  /**
   * 标签ID
   */
  labelId: string;
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
 * 接口 标签删除 的 **返回类型**
 *
 */
/**
 * 标签删除响应对象
 */
export interface PostUserUserDefinedLabeldeleteResponse {
  /**
   * 标签ID
   */
  labelId?: string;
}

/**
 * 接口 标签删除 的 **请求函数**
 *
 */
export const postUserUserDefinedLabeldelete = (data?: PostUserUserDefinedLabeldeleteRequest) => {
  return request.post<PostUserUserDefinedLabeldeleteRequest, PostUserUserDefinedLabeldeleteResponse>(
    '/user/userDefinedLabel/delete',
    {
      data
    }
  );
};

/**
 * 接口 标签详情 的 **请求类型**
 *
 */
/**
 * 标签详情参数
 */
export interface PostUserUserDefinedLabeldetailRequest {
  /**
   * 标签ID
   */
  labelId?: string;
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
 * 接口 标签详情 的 **返回类型**
 *
 */
/**
 * 标签详情响应对象
 */
export interface PostUserUserDefinedLabeldetailResponse {
  /**
   * 标签ID
   */
  labelId?: string;
  /**
   * 名称
   */
  name?: string;
  /**
   * 创建时间
   */
  xCreateTime?: string;
}

/**
 * 接口 标签详情 的 **请求函数**
 *
 */
export const postUserUserDefinedLabeldetail = (data?: PostUserUserDefinedLabeldetailRequest) => {
  return request.post<PostUserUserDefinedLabeldetailRequest, PostUserUserDefinedLabeldetailResponse>(
    '/user/userDefinedLabel/detail',
    {
      data
    }
  );
};

/**
 * 接口 标签编辑 的 **请求类型**
 *
 */
/**
 * 标签编辑参数
 */
export interface PostUserUserDefinedLabeleditRequest {
  /**
   * 标签ID
   */
  labelId: string;
  /**
   * 名称
   */
  name: string;
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
 * 接口 标签编辑 的 **返回类型**
 *
 */
/**
 * 标签编辑响应对象
 */
export interface PostUserUserDefinedLabeleditResponse {
  /**
   * 标签ID
   */
  labelId?: string;
}

/**
 * 接口 标签编辑 的 **请求函数**
 *
 */
export const postUserUserDefinedLabeledit = (data?: PostUserUserDefinedLabeleditRequest) => {
  return request.post<PostUserUserDefinedLabeleditRequest, PostUserUserDefinedLabeleditResponse>(
    '/user/userDefinedLabel/edit',
    {
      data
    }
  );
};

/**
 * 接口 标签列表 的 **请求类型**
 *
 */
/**
 * 标签列表参数
 */
export interface PostUserUserDefinedLabellistRequest {
  /**
   * 名称
   */
  name?: string;
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
 * 接口 标签列表 的 **返回类型**
 *
 */
/**
 * 标签列表响应对象
 */
export interface PostUserUserDefinedLabellistResponse {
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
     * 标签ID
     */
    labelId?: string;
    /**
     * 名称
     */
    name?: string;
    /**
     * 患者数
     */
    patientCount?: number;
    /**
     * 创建时间
     */
    xCreateTime?: string;
  }[];
}

/**
 * 接口 标签列表 的 **请求函数**
 *
 */
export const postUserUserDefinedLabellist = (data?: PostUserUserDefinedLabellistRequest) => {
  return request.post<PostUserUserDefinedLabellistRequest, PostUserUserDefinedLabellistResponse>(
    '/user/userDefinedLabel/list',
    {
      data
    }
  );
};
