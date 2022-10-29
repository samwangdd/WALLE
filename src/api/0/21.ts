/**
 * Created By api-typescript
 * https://alidocs.dingtalk.com/i/team/dN0G7AD82xAq4XWY/docs/dN0G78qlBL1o7zWY#
 */

import request from '../request';

/**
 * 接口 方案推荐 的 **请求类型**
 *
 */
/**
 * 患者方案推荐参数
 */
export interface PostServicePackageSolutionrecommendRequest {
  /**
   * 患者ID集合
   */
  patientIds?: string[];
  /**
   * 方案ID
   */
  solutionId: number;
  /**
   * 方案IDs
   */
  solutionIds?: string[];
  /**
   * 开始日期
   */
  solutionStartDate?: string;
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
 * 接口 方案推荐 的 **返回类型**
 *
 */
export type PostServicePackageSolutionrecommendResponse = any;

/**
 * 接口 方案推荐 的 **请求函数**
 *
 */
export const postServicePackageSolutionrecommend = (data?: PostServicePackageSolutionrecommendRequest) => {
  return request.post<PostServicePackageSolutionrecommendRequest, PostServicePackageSolutionrecommendResponse>(
    '/servicePackage/solution/recommend',
    {
      data
    }
  );
};

/**
 * 接口 事件执行 的 **请求类型**
 *
 */
/**
 * 事件执行参数
 */
export interface PostServicePackageSolutionactionExecuteRequest {
  /**
   * 事件编码 ,
   */
  actionCode?: string;
  /**
   * 事件ID
   */
  actionId?: string;
  /**
   * 事件流ID
   */
  eventFlowId?: string;
  /**
   * 业务执行数据 ,
   */
  executeData?: {
    /**
     * 表单事件
     */
    healthForm?: {
      /**
       * 表单结构ID
       */
      schemaId?: string;
      /**
       * 内容
       */
      content?: string;
    };
    /**
     * 随访表单事件
     */
    healthFollowupForm?: {
      /**
       * 表单结构ID
       */
      schemaId?: string;
      /**
       * 内容
       */
      content?: string;
    };
    /**
     * 文章事件
     */
    healthPropaganda?: {
      /**
       * 文章ID
       */
      articleId?: string;
    };
  };
  /**
   * 任务ID
   */
  taskId?: string;
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
 * 接口 事件执行 的 **返回类型**
 *
 */
/**
 * 事件执行响应
 */
export interface PostServicePackageSolutionactionExecuteResponse {}

/**
 * 接口 事件执行 的 **请求函数**
 *
 */
export const postServicePackageSolutionactionExecute = (data?: PostServicePackageSolutionactionExecuteRequest) => {
  return request.post<PostServicePackageSolutionactionExecuteRequest, PostServicePackageSolutionactionExecuteResponse>(
    '/servicePackage/solution/actionExecute',
    {
      data
    }
  );
};

/**
 * 接口 添加和编辑方案 的 **请求类型**
 *
 */
/**
 * 添加和编辑方案参数
 */
export interface PostServicePackageSolutioneditRequest {
  /**
   * 方案ID
   */
  solutionId?: string;
  /**
   * 方案名称
   */
  name?: string;
  /**
   * 简码
   */
  code?: string;
  /**
   * 机构ID
   */
  organId?: string;
  /**
   * 科室IDs
   */
  departments?: string[];
  /**
   * 团队IDs
   */
  teams?: string[];
  /**
   * 标签IDs
   */
  labels?: string[];
  /**
   * 指标IDs  重点关注数据
   */
  indicators?: string[];
  /**
   * 价格类型  1:收费  2:免费   默认为1
   */
  priceType?: number;
  /**
   * 价格
   */
  price?: number;
  /**
   * 服务包ID
   */
  packageId?: string;
  /**
   * banner图地址
   */
  bannerUrl?: string;
  /**
   * 详情
   */
  details?: string;
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
 * 接口 添加和编辑方案 的 **返回类型**
 *
 */
/**
 * 添加和编辑方案响应
 */
export interface PostServicePackageSolutioneditResponse {
  /**
   * 方案ID
   */
  solutionId?: string;
}

/**
 * 接口 添加和编辑方案 的 **请求函数**
 *
 */
export const postServicePackageSolutionedit = (data?: PostServicePackageSolutioneditRequest) => {
  return request.post<PostServicePackageSolutioneditRequest, PostServicePackageSolutioneditResponse>(
    '/servicePackage/solution/edit',
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
export interface PostServicePackageSolutioneditStatusRequest {
  /**
   * 方案IDS
   */
  solutionIds?: string[];
  /**
   * 状态   1:启用  2：禁用
   */
  status?: number;
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
export interface PostServicePackageSolutioneditStatusResponse {
  /**
   * 修改条数
   */
  count?: number;
}

/**
 * 接口 编辑状态 的 **请求函数**
 *
 */
export const postServicePackageSolutioneditStatus = (data?: PostServicePackageSolutioneditStatusRequest) => {
  return request.post<PostServicePackageSolutioneditStatusRequest, PostServicePackageSolutioneditStatusResponse>(
    '/servicePackage/solution/editStatus',
    {
      data
    }
  );
};

/**
 * 接口 方案信息获取 的 **请求类型**
 *
 */
/**
 * 方案信息获取参数
 */
export interface PostServicePackageSolutioninfoRequest {
  /**
   * 方案ID
   */
  solutionId?: number;
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
 * 接口 方案信息获取 的 **返回类型**
 *
 */
/**
 * 方案信息
 */
export interface PostServicePackageSolutioninfoResponse {
  /**
   * 方案ID
   */
  solutionId?: string;
  /**
   * 名称
   */
  name?: string;
  /**
   * 简码
   */
  code?: string;
  /**
   * 机构ID
   */
  organId?: string;
  /**
   * 机构名字
   */
  organName?: string;
  /**
   * 服务包ID
   */
  packageId?: string;
  /**
   * 服务包名字
   */
  packageName?: string;
  /**
   * 价格类型
   */
  priceType?: number;
  /**
   * 价格
   */
  price?: number;
  /**
   * banner图地址
   */
  bannerUrl?: string;
  /**
   * 详情
   */
  details?: string;
  /**
   * 团队IDs
   */
  teams?: {
    /**
     * 团队id
     */
    teamId?: string;
    /**
     * 团队id
     */
    id?: string;
    /**
     * 名字
     */
    name?: string;
  }[];
  /**
   * 标签IDs
   */
  labels?: {
    /**
     * 标签id
     */
    labelId?: string;
    /**
     * 标签id
     */
    id?: string;
    /**
     * 名字
     */
    name?: string;
  }[];
  /**
   * 指标IDs
   */
  indicators?: {
    /**
     * 指标id
     */
    indicatorId?: string;
    /**
     * 指标id
     */
    id?: string;
    /**
     * 名字
     */
    name?: string;
  }[];
  /**
   * 科室IDs
   */
  departments?: {
    /**
     * 科室id
     */
    departmentId?: string;
    /**
     * 科室id
     */
    id?: string;
    /**
     * 名字
     */
    name?: string;
  }[];
}

/**
 * 接口 方案信息获取 的 **请求函数**
 *
 */
export const postServicePackageSolutioninfo = (data?: PostServicePackageSolutioninfoRequest) => {
  return request.post<PostServicePackageSolutioninfoRequest, PostServicePackageSolutioninfoResponse>(
    '/servicePackage/solution/info',
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
 * 方案选择列表
 */
export interface PostServicePackageSolutionlistRequest {
  /**
   * 团队ID
   */
  teamId?: string;
  /**
   * 关键词
   */
  keyword?: string;
  /**
   * 服务包ID
   */
  packageId?: number;
  /**
   * 服务包类型
   */
  packageTypes?: string[];
  /**
   * 方案状态
   */
  status?: number;
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
 * 方案选择列表
 */
export interface PostServicePackageSolutionlistResponse {
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
     * 方案ID
     */
    solutionId?: string;
    /**
     * 名称
     */
    name?: string;
    /**
     * 机构ID
     */
    organId?: string;
    /**
     * 归属医院
     */
    organNameList?: string[];
    /**
     * 服务包ID
     */
    packageId?: string;
    /**
     * 服务包名称
     */
    packageName?: string;
    /**
     * 服务包类型  1:A包  2：B包  3： C包
     */
    packageType?: number;
    /**
     * 服务包类型名字
     */
    packageTypeName?: string;
    /**
     * 所属科室
     */
    departmentNameList?: string[];
    /**
     * 归属团队
     */
    teamNameList?: string[];
    /**
     * banner图地址
     */
    bannerUrl?: string;
    /**
     * 价格
     */
    price?: number;
    /**
     * 价格类型  1：付费  2：免费'
     */
    priceType?: number;
    /**
     * 简码
     */
    code?: string;
    /**
     * 状态  1:启用  2:禁用
     */
    status?: string;
  }[];
}

/**
 * 接口 列表 的 **请求函数**
 *
 */
export const postServicePackageSolutionlist = (data?: PostServicePackageSolutionlistRequest) => {
  return request.post<PostServicePackageSolutionlistRequest, PostServicePackageSolutionlistResponse>(
    '/servicePackage/solution/list',
    {
      data
    }
  );
};

/**
 * 接口 扫码列表 的 **请求类型**
 *
 */
/**
 * 扫码列表参数
 */
export interface PostServicePackageSolutionscanListRequest {
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
 * 接口 扫码列表 的 **返回类型**
 *
 */
/**
 * 扫码列表响应
 */
export interface PostServicePackageSolutionscanListResponse {
  content?: {}[];
}

/**
 * 接口 扫码列表 的 **请求函数**
 *
 */
export const postServicePackageSolutionscanList = (data?: PostServicePackageSolutionscanListRequest) => {
  return request.post<PostServicePackageSolutionscanListRequest, PostServicePackageSolutionscanListResponse>(
    '/servicePackage/solution/scanList',
    {
      data
    }
  );
};

/**
 * 接口 任务备注修改 的 **请求类型**
 *
 */
/**
 * 任务评论修改参数
 */
export interface PostServicePackageSolutiontaskCommentEditRequest {
  /**
   * 任务ID
   */
  taskId: number;
  /**
   * 评论内容
   */
  remark?: string;
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
 * 接口 任务备注修改 的 **返回类型**
 *
 */
/**
 * 处理成功，通用响应对象
 */
export interface PostServicePackageSolutiontaskCommentEditResponse {}

/**
 * 接口 任务备注修改 的 **请求函数**
 *
 */
export const postServicePackageSolutiontaskCommentEdit = (data?: PostServicePackageSolutiontaskCommentEditRequest) => {
  return request.post<
    PostServicePackageSolutiontaskCommentEditRequest,
    PostServicePackageSolutiontaskCommentEditResponse
  >('/servicePackage/solution/taskCommentEdit', {
    data
  });
};

/**
 * 接口 方案任务树 的 **请求类型**
 *
 */
/**
 * 方案任务树参数
 */
export interface PostServicePackageSolutiontaskTreeRequest {
  /**
   * 工作流执行记录ID
   */
  flowRecordId: number;
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
 * 接口 方案任务树 的 **返回类型**
 *
 */
/**
 * 方案任务树响应
 */
export interface PostServicePackageSolutiontaskTreeResponse {
  /**
   * 内容列表
   */
  groupItems?: {
    /**
     * 第几天
     */
    day?: number;
    /**
     * 日期
     */
    date?: string;
    /**
     * 任务列表
     */
    taskItems?: {
      /**
       * 任务ID
       */
      taskId?: string;
      /**
       * 任务状态 0状态异常 1  未激活  2进行中   3已完成
       */
      status?: number;
      /**
       * 任务名称
       */
      name?: string;
      /**
       * 评论
       */
      comment?: string;
      /**
       * 备注
       */
      remark?: string;
      /**
       * 预约时间
       */
      subscribeTime?: string;
      /**
       * 已逾期天数
       */
      overdueDays?: number;
      /**
       * 异常指标列表
       */
      abnormalIndexItems?: {
        /**
         * 指标名称
         */
        name?: string;
        /**
         * 指标值
         */
        value?: string;
      }[];
      /**
       * 最大执行次数
       */
      maxExecute?: number;
      /**
       * 已执行次数
       */
      alreadyExecuteCount?: number;
      /**
       * 事件ID
       */
      actionId?: string;
      /**
       * 事件CODE
       */
      actionCode?: string;
      /**
       * 事件流ID
       */
      eventFlowId?: string;
      /**
       * 执行用户姓名
       */
      executeUserName?: string;
      /**
       * 执行记录id
       */
      recordId?: string;
      /**
       * 事件执行时间
       */
      executeCreateTime?: string;
      /**
       * 事件执行结果
       */
      executeRes?: string;
      /**
       * 事件执行结果
       */
      executeResults?: {
        /**
         * 名字
         */
        name?: string;
        /**
         * 值
         */
        value?: string;
      }[];
      /**
       * 业务源数据
       */
      businessData?: {
        /**
         * 随访表单源数据
         */
        healthFollowupForm?: {
          /**
           * 表单结构ID
           */
          schemaId?: string;
          /**
           * 名字
           */
          name?: string;
          /**
           * 版本
           */
          version?: string;
          /**
           * 表单ID
           */
          formId?: string;
          /**
           * 表单系统基础地址
           */
          formBaseUrl?: string;
        };
        /**
         * 宣教源数据
         */
        healthPropaganda?: {
          /**
           * 文章ID
           */
          articleId?: string;
          /**
           * 名字
           */
          title?: string;
          /**
           * 类型 1图文 2视频
           */
          type?: number;
          /**
           * 内容
           */
          content?: string;
        };
      };
    }[];
  }[];
  /**
   * 分组最大任务数
   */
  groupMaxTaskNum?: number;
  /**
   * 任务显示类型
   *
   * <ul>
   * <option>1：按执行日期分组</option>
   * <option>2：按节点分组</option>
   * </ul>
   */
  displayType?: number;
  /**
   * 任务状态
   *
   * <ul>
   * <option>100：初使状态</option>
   * <option>101：进行中</option>
   * <option>102：已完成</option>
   * </ul>
   */
  status?: number;
}

/**
 * 接口 方案任务树 的 **请求函数**
 *
 */
export const postServicePackageSolutiontaskTree = (data?: PostServicePackageSolutiontaskTreeRequest) => {
  return request.post<PostServicePackageSolutiontaskTreeRequest, PostServicePackageSolutiontaskTreeResponse>(
    '/servicePackage/solution/taskTree',
    {
      data
    }
  );
};
