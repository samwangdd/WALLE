/**
 * Created By api-typescript
 * https://alidocs.dingtalk.com/i/team/dN0G7AD82xAq4XWY/docs/dN0G78qlBL1o7zWY#
 */

import request from '../request';

/**
 * 接口 添加机构 的 **请求类型**
 *
 */
/**
 * 添加机构参数
 */
export interface PostOrganOrganaddRequest {
  /**
   * 上级机构ID
   */
  pid?: string;
  /**
   * 名称
   */
  name: string;
  /**
   * 地址
   */
  address: string;
  /**
   * 类型
   *
   * <ul>
   * <li>1.头部机构</li>
   * <li>2.基层机构</li>
   * <li>3.社区</li>
   * <li>4.分院</li>
   * <li>5.卫健医管</li>
   * </ul>
   */
  type: number;
  /**
   * 联系电话
   */
  phone: string;
  /**
   * 机构工作时间
   */
  workingTime: {
    /**
     * 工作日
     */
    workday?: {
      /**
       * 上午
       */
      forenoon?: {
        /**
         * 开始时间
         */
        startTime: string;
        /**
         * 结束时间
         */
        endTime: string;
      };
      /**
       * 下午
       */
      afternoon?: {
        /**
         * 开始时间
         */
        startTime: string;
        /**
         * 结束时间
         */
        endTime: string;
      };
      /**
       * 晚上
       */
      evening?: {
        /**
         * 开始时间
         */
        startTime: string;
        /**
         * 结束时间
         */
        endTime: string;
      };
    };
    /**
     * 节假日
     */
    holiday?: {
      /**
       * 上午
       */
      forenoon?: {
        /**
         * 开始时间
         */
        startTime: string;
        /**
         * 结束时间
         */
        endTime: string;
      };
      /**
       * 下午
       */
      afternoon?: {
        /**
         * 开始时间
         */
        startTime: string;
        /**
         * 结束时间
         */
        endTime: string;
      };
      /**
       * 晚上
       */
      evening?: {
        /**
         * 开始时间
         */
        startTime: string;
        /**
         * 结束时间
         */
        endTime: string;
      };
    };
  };
  /**
   * 机构超级管理员
   */
  managerIds: {};
  /**
   * 下级机构
   */
  childIds?: {};
  /**
   * LOGO
   */
  logo: string;
  /**
   * 机构介绍
   */
  detail: string;
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
 * 接口 添加机构 的 **返回类型**
 *
 */
/**
 * 处理成功，通用响应对象
 */
export interface PostOrganOrganaddResponse {}

/**
 * 接口 添加机构 的 **请求函数**
 *
 */
export const postOrganOrganadd = (data?: PostOrganOrganaddRequest) => {
  return request.post<PostOrganOrganaddRequest, PostOrganOrganaddResponse>('/organ/organ/add', {
    data
  });
};

/**
 * 接口 机构详情 的 **请求类型**
 *
 */
/**
 * 机构详情参数
 */
export interface PostOrganOrgandetailRequest {
  /**
   * 机构ID
   */
  organId?: number;
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
 * 接口 机构详情 的 **返回类型**
 *
 */
/**
 * 机构详情响应
 */
export interface PostOrganOrgandetailResponse {
  /**
   * 上级机构ID
   */
  pid?: string;
  /**
   * 名称
   */
  name?: string;
  /**
   * 地址
   */
  address?: string;
  /**
   * 类型
   *
   * <ul>
   * <li>1.头部机构</li>
   * <li>2.基层机构</li>
   * <li>3.社区</li>
   * <li>4.分院</li>
   * <li>5.卫健医管</li>
   * </ul>
   */
  type?: number;
  /**
   * 类型名称
   */
  typeName?: string;
  /**
   * 联系电话
   */
  phone?: string;
  /**
   * 机构工作时间
   */
  workingTime?: {
    /**
     * 工作日
     */
    workday?: {
      /**
       * 上午
       */
      forenoon?: {
        /**
         * 开始时间
         */
        startTime?: string;
        /**
         * 结束时间
         */
        endTime?: string;
      };
      /**
       * 下午
       */
      afternoon?: {
        /**
         * 开始时间
         */
        startTime?: string;
        /**
         * 结束时间
         */
        endTime?: string;
      };
      /**
       * 晚上
       */
      evening?: {
        /**
         * 开始时间
         */
        startTime?: string;
        /**
         * 结束时间
         */
        endTime?: string;
      };
    };
    /**
     * 节假日
     */
    holiday?: {
      /**
       * 上午
       */
      forenoon?: {
        /**
         * 开始时间
         */
        startTime?: string;
        /**
         * 结束时间
         */
        endTime?: string;
      };
      /**
       * 下午
       */
      afternoon?: {
        /**
         * 开始时间
         */
        startTime?: string;
        /**
         * 结束时间
         */
        endTime?: string;
      };
      /**
       * 晚上
       */
      evening?: {
        /**
         * 开始时间
         */
        startTime?: string;
        /**
         * 结束时间
         */
        endTime?: string;
      };
    };
  };
  /**
   * 下级机构
   */
  childIds?: {};
  /**
   * LOGO
   */
  logo?: string;
  /**
   * 机构介绍
   */
  detail?: string;
}

/**
 * 接口 机构详情 的 **请求函数**
 *
 */
export const postOrganOrgandetail = (data?: PostOrganOrgandetailRequest) => {
  return request.post<PostOrganOrgandetailRequest, PostOrganOrgandetailResponse>('/organ/organ/detail', {
    data
  });
};

/**
 * 接口 编辑机构 的 **请求类型**
 *
 */
/**
 * 编辑机构参数
 */
export interface PostOrganOrganeditRequest {
  /**
   * 机构ID
   */
  organId?: string;
  /**
   * 上级机构ID
   */
  pid?: string;
  /**
   * 名称
   */
  name: string;
  /**
   * 地址
   */
  address: string;
  /**
   * 联系电话
   */
  phone: string;
  /**
   * 机构工作时间
   */
  workingTime: {
    /**
     * 工作日
     */
    workday?: {
      /**
       * 上午
       */
      forenoon?: {
        /**
         * 开始时间
         */
        startTime: string;
        /**
         * 结束时间
         */
        endTime: string;
      };
      /**
       * 下午
       */
      afternoon?: {
        /**
         * 开始时间
         */
        startTime: string;
        /**
         * 结束时间
         */
        endTime: string;
      };
      /**
       * 晚上
       */
      evening?: {
        /**
         * 开始时间
         */
        startTime: string;
        /**
         * 结束时间
         */
        endTime: string;
      };
    };
    /**
     * 节假日
     */
    holiday?: {
      /**
       * 上午
       */
      forenoon?: {
        /**
         * 开始时间
         */
        startTime: string;
        /**
         * 结束时间
         */
        endTime: string;
      };
      /**
       * 下午
       */
      afternoon?: {
        /**
         * 开始时间
         */
        startTime: string;
        /**
         * 结束时间
         */
        endTime: string;
      };
      /**
       * 晚上
       */
      evening?: {
        /**
         * 开始时间
         */
        startTime: string;
        /**
         * 结束时间
         */
        endTime: string;
      };
    };
  };
  /**
   * 机构超级管理员
   */
  managerIds: {};
  /**
   * 下级机构
   */
  childIds?: {};
  /**
   * LOGO
   */
  logo: string;
  /**
   * 机构介绍
   */
  detail: string;
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
 * 接口 编辑机构 的 **返回类型**
 *
 */
/**
 * 处理成功，通用响应对象
 */
export interface PostOrganOrganeditResponse {}

/**
 * 接口 编辑机构 的 **请求函数**
 *
 */
export const postOrganOrganedit = (data?: PostOrganOrganeditRequest) => {
  return request.post<PostOrganOrganeditRequest, PostOrganOrganeditResponse>('/organ/organ/edit', {
    data
  });
};

/**
 * 接口 机构列表 的 **请求类型**
 *
 */
/**
 * 机构列表参数
 */
export interface PostOrganOrganlistRequest {
  /**
   * 机构类型
   *
   * <ul>
   * <li>1:头部机构</li>
   * <li>2:基层机构</li>
   * <li>3:社区</li>
   * <li>4:分院</li>
   * <li>5:卫健医管</li>
   * </ul>
   */
  type?: 1 | 2 | 3 | 4 | 5;
  /**
   * 搜索关键字
   */
  keyword?: string;
  /**
   * 是否获取所有机构(1-是,2-否)
   */
  isAll?: number;
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
 * 接口 机构列表 的 **返回类型**
 *
 */
/**
 * 机构列表响应
 */
export interface PostOrganOrganlistResponse {
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
   * 列表内容
   */
  content?: {
    /**
     * 机构ID
     */
    organId?: string;
    /**
     * 名称
     */
    name?: string;
    /**
     * 地址
     */
    address?: string;
    /**
     * 类型
     */
    typeName?: string;
    /**
     * 联系电话
     */
    phone?: string;
    /**
     * 状态  1:有效  2：无效
     */
    status?: number;
    /**
     * logo
     */
    logo?: string;
  }[];
}

/**
 * 接口 机构列表 的 **请求函数**
 *
 */
export const postOrganOrganlist = (data?: PostOrganOrganlistRequest) => {
  return request.post<PostOrganOrganlistRequest, PostOrganOrganlistResponse>('/organ/organ/list', {
    data
  });
};

/**
 * 接口 更新机构状态 的 **请求类型**
 *
 */
/**
 * 更新机构状态参数
 */
export interface PostOrganOrganupdateStatusRequest {
  /**
   * 机构ID
   */
  organIds: {};
  /**
   * 状态(1-启用,2-禁用)
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
 * 接口 更新机构状态 的 **返回类型**
 *
 */
/**
 * 处理成功，通用响应对象
 */
export interface PostOrganOrganupdateStatusResponse {}

/**
 * 接口 更新机构状态 的 **请求函数**
 *
 */
export const postOrganOrganupdateStatus = (data?: PostOrganOrganupdateStatusRequest) => {
  return request.post<PostOrganOrganupdateStatusRequest, PostOrganOrganupdateStatusResponse>(
    '/organ/organ/updateStatus',
    {
      data
    }
  );
};
