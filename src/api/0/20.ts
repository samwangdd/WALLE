/**
 * Created By api-typescript
 * https://alidocs.dingtalk.com/i/team/dN0G7AD82xAq4XWY/docs/dN0G78qlBL1o7zWY#
 */

import request from '../request';

/**
 * 接口 指标列表 的 **请求类型**
 *
 */
/**
 * 指标列表参数
 */
export interface PostServicePackageIndicatorlistRequest {
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
 * 接口 指标列表 的 **返回类型**
 *
 */
/**
 * 指标列表响应
 */
export interface PostServicePackageIndicatorlistResponse {
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
     * 指标ID
     */
    indicatorId?: string;
    /**
     * 名字
     */
    name?: string;
    /**
     * 英文名字
     */
    englishName?: string;
    /**
     * 参考值类型  1：范围值  2：名词
     */
    referenceType?: number;
    /**
     * 最小值
     */
    min?: number;
    /**
     * 最大值
     */
    max?: number;
    /**
     * 参考值
     */
    reference?: string;
  }[];
}

/**
 * 接口 指标列表 的 **请求函数**
 *
 */
export const postServicePackageIndicatorlist = (data?: PostServicePackageIndicatorlistRequest) => {
  return request.post<PostServicePackageIndicatorlistRequest, PostServicePackageIndicatorlistResponse>(
    '/servicePackage/indicator/list',
    {
      data
    }
  );
};
