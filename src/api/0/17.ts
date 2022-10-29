/**
 * Created By api-typescript
 * https://alidocs.dingtalk.com/i/team/dN0G7AD82xAq4XWY/docs/dN0G78qlBL1o7zWY#
 */

import request from '../request';

/**
 * 接口 患者服务包团队分组列表 的 **请求类型**
 *
 */
/**
 * 患者服务包团队分组列表参数
 */
export interface PostPatientServicePackageteamGroupListRequest {
  /**
   * 患者id
   */
  patientId?: string;
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
 * 接口 患者服务包团队分组列表 的 **返回类型**
 *
 */
/**
 * 患者服务包团队分组列表响应
 */
export interface PostPatientServicePackageteamGroupListResponse {
  /**
   * 响应内容
   */
  content?: {
    /**
     * 开始时间
     */
    startDate?: string;
    /**
     * 结束时间
     */
    endDate?: string;
    /**
     * 团队名
     */
    teamName?: string;
    /**
     * 签约医生名
     */
    doctorName?: string;
    /**
     * 服务包
     */
    packages?: {
      /**
       * 开始时间
       */
      startDate?: string;
      /**
       * 结束时间
       */
      endDate?: string;
      /**
       * 包名
       */
      name?: string;
      /**
       * 服务包id
       */
      packageId?: string;
      /**
       * 服务包类型
       */
      type?: string;
    }[];
  }[];
}

/**
 * 接口 患者服务包团队分组列表 的 **请求函数**
 *
 */
export const postPatientServicePackageteamGroupList = (data?: PostPatientServicePackageteamGroupListRequest) => {
  return request.post<PostPatientServicePackageteamGroupListRequest, PostPatientServicePackageteamGroupListResponse>(
    '/patient/servicePackage/teamGroupList',
    {
      data
    }
  );
};

/**
 * 接口 详情 的 **请求类型**
 *
 */
/**
 * 详情参数
 */
export interface PostServicePackagePackagedetailRequest {
  /**
   * 服务包ID
   */
  packageId: string;
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
 * 详情响应
 */
export interface PostServicePackagePackagedetailResponse {
  /**
   * 服务包ID
   */
  packageId?: string;
  /**
   * 类型 1：A包  2：B包  3:C包  4;协作包
   */
  type?: number;
  /**
   * 指标列表
   */
  indicatorItems?: {
    /**
     * 指标ID
     */
    indicatorId?: string;
    /**
     * 名字
     */
    name?: string;
  }[];
  /**
   * 指标IDS
   */
  indicatorIds?: string[];
  /**
   * 首图
   */
  headImg?: string;
  /**
   * 名称
   */
  name?: string;
}

/**
 * 接口 详情 的 **请求函数**
 *
 */
export const postServicePackagePackagedetail = (data?: PostServicePackagePackagedetailRequest) => {
  return request.post<PostServicePackagePackagedetailRequest, PostServicePackagePackagedetailResponse>(
    '/servicePackage/package/detail',
    {
      data
    }
  );
};

/**
 * 接口 添加和编辑服务包 的 **请求类型**
 *
 */
/**
 * 添加和编辑服务包参数
 */
export interface PostServicePackagePackageeditRequest {
  /**
   * 服务包ID
   */
  packageId?: string;
  /**
   * 名称
   */
  name: string;
  /**
   * 首图
   */
  headImg: string;
  /**
   * 类型  1：A包  2：B包  3：C包  4 ：协作包
   */
  type: number;
  /**
   * 指标IDS  重点关注数据
   */
  indicatorIds?: string[];
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
 * 接口 添加和编辑服务包 的 **返回类型**
 *
 */
/**
 * 添加和编辑服务包响应
 */
export interface PostServicePackagePackageeditResponse {
  /**
   * 服务包ID
   */
  packageId?: string;
}

/**
 * 接口 添加和编辑服务包 的 **请求函数**
 *
 */
export const postServicePackagePackageedit = (data?: PostServicePackagePackageeditRequest) => {
  return request.post<PostServicePackagePackageeditRequest, PostServicePackagePackageeditResponse>(
    '/servicePackage/package/edit',
    {
      data
    }
  );
};

/**
 * 接口 编辑状态 的 **请求类型**
 *
 */
/**
 * 编辑状态参数
 */
export interface PostServicePackagePackageeditStatusRequest {
  /**
   * 服务包Ids
   * s
   */
  packageIds?: string[];
  /**
   * 状态
   */
  status: number;
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
 * 接口 编辑状态 的 **返回类型**
 *
 */
/**
 * 编辑状态响应
 */
export interface PostServicePackagePackageeditStatusResponse {
  /**
   * 成功条数
   */
  count?: string;
}

/**
 * 接口 编辑状态 的 **请求函数**
 *
 */
export const postServicePackagePackageeditStatus = (data?: PostServicePackagePackageeditStatusRequest) => {
  return request.post<PostServicePackagePackageeditStatusRequest, PostServicePackagePackageeditStatusResponse>(
    '/servicePackage/package/editStatus',
    {
      data
    }
  );
};

/**
 * 接口 列表 的 **请求类型**
 *
 */
/**
 * 列表参数
 */
export interface PostServicePackagePackagelistRequest {
  /**
   * 类型
   */
  types?: number[];
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
 * 接口 列表 的 **返回类型**
 *
 */
/**
 * 列表响应
 */
export interface PostServicePackagePackagelistResponse {
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
     * 服务包ID
     */
    packageId?: string;
    /**
     * 类型 1：A包  2：B包  3:C包  4;协作包
     */
    type?: number;
    /**
     * 名字
     */
    name?: string;
    /**
     * 指标列表
     */
    indicatorItems?: {
      /**
       * 指标ID
       */
      indicatorId?: string;
      /**
       * 名字
       */
      name?: string;
    }[];
    /**
     * 首图
     */
    headImg?: string;
    /**
     * 创建时间
     */
    xCreateTime?: string;
    /**
     * 状态  1:启用  2：禁用
     */
    status?: number;
  }[];
}

/**
 * 接口 列表 的 **请求函数**
 *
 */
export const postServicePackagePackagelist = (data?: PostServicePackagePackagelistRequest) => {
  return request.post<PostServicePackagePackagelistRequest, PostServicePackagePackagelistResponse>(
    '/servicePackage/package/list',
    {
      data
    }
  );
};
