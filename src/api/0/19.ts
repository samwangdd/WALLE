/**
 * Created By api-typescript
 * https://alidocs.dingtalk.com/i/team/dN0G7AD82xAq4XWY/docs/dN0G78qlBL1o7zWY#
 */

import request from '../request';

/**
 * 接口 获取随访表单列表 的 **请求类型**
 *
 */
/**
 * 获取随访表单列表参数
 */
export interface PostServicePackageFollowupformListRequest {
  /**
   * 名字
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
 * 接口 获取随访表单列表 的 **返回类型**
 *
 */
/**
 * 获取随访表单列表响应
 */
export interface PostServicePackageFollowupformListResponse {
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
     * 随访表单ID
     */
    followupFormId?: string;
    /**
     * 名字
     */
    name?: string;
    /**
     * 表单id
     */
    formId?: string;
    /**
     * 结构ID
     */
    schemaId?: string;
    /**
     * 创建时间
     */
    xCreateTime?: string;
    /**
     * 状态  1:启用  2:未启用
     */
    status?: number;
    /**
     * banner图
     */
    banner?: string;
    /**
     * 表单系统基础路由
     */
    formBaseUrl?: string;
  }[];
}

/**
 * 接口 获取随访表单列表 的 **请求函数**
 *
 */
export const postServicePackageFollowupformList = (data?: PostServicePackageFollowupformListRequest) => {
  return request.post<PostServicePackageFollowupformListRequest, PostServicePackageFollowupformListResponse>(
    '/servicePackage/followup/formList',
    {
      data
    }
  );
};

/**
 * 接口 获取患者评估表单列表 的 **请求类型**
 *
 */
/**
 * 获取患者评估表单列表参数
 */
export interface PostServicePackageFollowuppatientFormListRequest {
  /**
   * 患者ID
   */
  patientId?: string;
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
 * 接口 获取患者评估表单列表 的 **返回类型**
 *
 */
/**
 * 获取患者评估表单列表响应
 */
export interface PostServicePackageFollowuppatientFormListResponse {
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
     * 随访ID
     */
    followupId?: string;
    /**
     * 评估结果
     */
    result?: string;
    /**
     * 执行时间
     */
    execTime?: string;
    /**
     * 执行角色
     */
    realExecRole?: number;
    /**
     * 执行人姓名
     */
    realExecName?: string;
    /**
     * 患者id
     */
    patientId?: string;
    /**
     * 医生ID
     */
    doctorUserId?: string;
    /**
     * 表单结构名字
     */
    formSchemaName?: string;
    /**
     * 表单ID
     */
    formId?: string;
    /**
     * /**
     * 表单结构版本
     */
    version?: string;
    /**
     * 表单机构ID
     */
    formSchemaId?: string;
    /**
     * 表单内容记录ID
     */
    formContentId?: string;
    /**
     * 表单系统基础路由
     */
    formBaseUrl?: string;
    /**
     * 执行状态 1：已完成  2：未完成
     */
    status?: number;
  }[];
}

/**
 * 接口 获取患者评估表单列表 的 **请求函数**
 *
 */
export const postServicePackageFollowuppatientFormList = (data?: PostServicePackageFollowuppatientFormListRequest) => {
  return request.post<
    PostServicePackageFollowuppatientFormListRequest,
    PostServicePackageFollowuppatientFormListResponse
  >('/servicePackage/followup/patientFormList', {
    data
  });
};

/**
 * 接口 推送评估量表 的 **请求类型**
 *
 */
/**
 * 推送评估表单参数
 */
export interface PostServicePackageFollowuppushFormRequest {
  /**
   * 患者列表
   */
  patientList?: {
    /**
     * 患者ID
     */
    patientId?: string;
    /**
     * 咨询记录id
     */
    inquiryRecordId?: string;
  }[];
  /**
   * 评估表单列表
   */
  formList?: {
    /**
     * 表单结构ID
     */
    schemaId?: string;
  }[];
  /**
   * 是否发送im (1发送 2不发生)
   */
  sendIM?: number;
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
 * 接口 推送评估量表 的 **返回类型**
 *
 */
/**
 * 推送评估表单响应
 */
export interface PostServicePackageFollowuppushFormResponse {
  /**
   * 成功的条数
   */
  count?: number;
  /**
   * im消息体(当请求参数 sendIM 为 2 的时候，此字段有值)
   */
  imMessages?: string[];
}

/**
 * 接口 推送评估量表 的 **请求函数**
 *
 */
export const postServicePackageFollowuppushForm = (data?: PostServicePackageFollowuppushFormRequest) => {
  return request.post<PostServicePackageFollowuppushFormRequest, PostServicePackageFollowuppushFormResponse>(
    '/servicePackage/followup/pushForm',
    {
      data
    }
  );
};

/**
 * 接口 保存评估结果 的 **请求类型**
 *
 */
/**
 * 保存评估结果参数
 */
export interface PostServicePackageFollowupsaveFromResultRequest {
  /**
   * 随访ID
   */
  followupId?: string;
  /**
   * 内容
   */
  content?: string;
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
 * 接口 保存评估结果 的 **返回类型**
 *
 */
/**
 * 保存评估结果响应
 */
export interface PostServicePackageFollowupsaveFromResultResponse {
  /**
   * 随访ID
   */
  followupId?: string;
  /**
   * 表单内容ID
   */
  formContentId?: string;
}

/**
 * 接口 保存评估结果 的 **请求函数**
 *
 */
export const postServicePackageFollowupsaveFromResult = (data?: PostServicePackageFollowupsaveFromResultRequest) => {
  return request.post<
    PostServicePackageFollowupsaveFromResultRequest,
    PostServicePackageFollowupsaveFromResultResponse
  >('/servicePackage/followup/saveFromResult', {
    data
  });
};
