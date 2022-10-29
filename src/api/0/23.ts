/**
 * Created By api-typescript
 * https://alidocs.dingtalk.com/i/team/dN0G7AD82xAq4XWY/docs/dN0G78qlBL1o7zWY#
 */

import request from '../request';

/**
 * 接口 评论列表 的 **请求类型**
 *
 */
/**
 * 评论列表参数
 */
export interface PostServicePackageTaskcommentListRequest {
  /**
   * 内容
   */
  content?: string;
  /**
   * 评论IDs
   */
  templateIds?: string[];
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
 * 接口 评论列表 的 **返回类型**
 *
 */
/**
 * 评论列表响应
 */
export interface PostServicePackageTaskcommentListResponse {
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
     * 评论模板id
     */
    templateId?: string;
    /**
     * 内容
     */
    content?: string;
  }[];
}

/**
 * 接口 评论列表 的 **请求函数**
 *
 */
export const postServicePackageTaskcommentList = (data?: PostServicePackageTaskcommentListRequest) => {
  return request.post<PostServicePackageTaskcommentListRequest, PostServicePackageTaskcommentListResponse>(
    '/servicePackage/task/commentList',
    {
      data
    }
  );
};

/**
 * 接口 方案任务详情 的 **请求类型**
 *
 */
/**
 * 方案任务详情参数
 */
export interface PostServicePackageTaskdetailRequest {
  /**
   * 任务
   */
  taskId: string;
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
 * 接口 方案任务详情 的 **返回类型**
 *
 */
/**
 * 方案任务详情响应
 */
export interface PostServicePackageTaskdetailResponse {
  /**
   * 任务ID
   */
  taskId?: string;
  /**
   * 方案id
   */
  solutionId?: string;
  /**
   * 名称
   */
  name?: string;
  /**
   * 执行对象类型   1：全科机构  2：专科机构   3：患者
   */
  objectType?: number;
  /**
   * 角色类型
   */
  roleType?: number;
  /**
   * 执行时间
   */
  timeInterval?: number;
  /**
   * 执行时间类型   1：天  2：周 3：月
   */
  timeIntervalType?: number;
  /**
   * 执行时效
   */
  effectiveTime?: number;
  /**
   * 执行时效类型   1：天  2：周 3：月
   */
  effectiveType?: number;
  /**
   * 评论Id
   */
  templateId?: string;
  /**
   * 评论类容
   */
  comment?: string;
  /**
   * 事件ID
   */
  actionId?: string;
  /**
   * 事件code
   */
  actionCode?: string;
}

/**
 * 接口 方案任务详情 的 **请求函数**
 *
 */
export const postServicePackageTaskdetail = (data?: PostServicePackageTaskdetailRequest) => {
  return request.post<PostServicePackageTaskdetailRequest, PostServicePackageTaskdetailResponse>(
    '/servicePackage/task/detail',
    {
      data
    }
  );
};

/**
 * 接口 方案任务添加和编辑 的 **请求类型**
 *
 */
/**
 * 方案任务添加和编辑参数
 */
export interface PostServicePackageTaskeditRequest {
  /**
   * 任务ID
   */
  taskId?: string;
  /**
   * 名称
   */
  name?: string;
  /**
   * 执行对象类型   1：全科机构  2：专科机构   3：患者
   */
  objectType?: number;
  /**
   * 角色类型
   */
  roleType?: number;
  /**
   * 执行时间
   */
  timeInterval?: number;
  /**
   * 执行时间类型   1：天  2：周 3：月
   */
  timeIntervalType?: number;
  /**
   * 执行时效
   */
  effectiveTime?: number;
  /**
   * 执行时效类型   1：天  2：周 3：月
   */
  effectiveType?: number;
  /**
   * 评论Id
   */
  templateId?: string;
  /**
   * 评论类容
   */
  comment?: string;
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
 * 接口 方案任务添加和编辑 的 **返回类型**
 *
 */
/**
 * 方案任务添加和编辑响应
 */
export interface PostServicePackageTaskeditResponse {
  /**
   * 任务ID
   */
  taskId?: string;
}

/**
 * 接口 方案任务添加和编辑 的 **请求函数**
 *
 */
export const postServicePackageTaskedit = (data?: PostServicePackageTaskeditRequest) => {
  return request.post<PostServicePackageTaskeditRequest, PostServicePackageTaskeditResponse>(
    '/servicePackage/task/edit',
    {
      data
    }
  );
};
