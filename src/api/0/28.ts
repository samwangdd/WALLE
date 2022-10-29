/**
 * Created By api-typescript
 * https://alidocs.dingtalk.com/i/team/dN0G7AD82xAq4XWY/docs/dN0G78qlBL1o7zWY#
 */

import request from '../request';

/**
 * 接口 工作台 的 **请求类型**
 *
 */
/**
 * 工作台参数
 */
export interface PostWorkbenchIndexindexRequest {
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
 * 接口 工作台 的 **返回类型**
 *
 */
/**
 * 工作台响应
 */
export interface PostWorkbenchIndexindexResponse {
  /**
   * 名字
   */
  name?: string;
  /**
   * 职称
   */
  title?: string;
  /**
   * 医生小程序主页地址
   *
   * deprecated=true,
   */
  miniProgramUrl?: string;
  /**
   * 团队名称
   */
  teamName?: string;
  /**
   * 团队评分
   */
  score?: number;
  /**
   * 待办事项
   *
   * deprecated=true,
   */
  waits?: {
    /**
     * 名字
     */
    name?: string;
    /**
     * 人数
     */
    num?: number;
    /**
     * 类型编号 1 电话随访  2换药  3完善资料  4 指标异常  5 评估  6 转诊
     */
    type?: number;
  }[];
  /**
   * 服务包列表
   */
  servicePackages?: {
    /**
     * 名字
     */
    name?: string;
    /**
     * 人数
     */
    num?: number;
    /**
     * 类型  1 A包  2 B包   3 C包
     */
    type?: number;
    /**
     * 颜色
     */
    color?: string;
  }[];
  /**
   * 新增患者
   */
  newPatientCount?: number;
  /**
   * 新增签约
   */
  newSignCount?: number;
  /**
   * 服务人数
   */
  serviceTotal?: number;
  /**
   * 转化概况统计
   */
  exchangeStatistic?: {
    /**
     * 入组总人数
     */
    teamCount?: number;
    /**
     * 今日新增入组人数
     */
    todayAddTeamCount?: number;
    /**
     * 发送方案总人数
     */
    recommendSolutionCount?: number;
    /**
     * 今天新增发送方案人数
     */
    todayAddRecommendSolutionCount?: number;
    /**
     * 购买方案总人数
     */
    buySolutionCount?: number;
    /**
     * 今天新增购买方案人数
     */
    todayAddBuySolutionCount?: number;
    /**
     * 发送方案转化率(百分比)
     */
    recommendSolutionPercent?: number;
    /**
     * 方案转化率(百分比)
     */
    buySolutionPercent?: number;
  };
  /**
   * 患者概况统计
   */
  patientStatistic?: {
    /**
     * 昨日新增
     */
    yesterdayAdd?: number;
    /**
     * 昨日购买数量
     */
    yesterdayBuy?: number;
    /**
     * 服务人总数量
     */
    serviceTotal?: number;
    /**
     * 患者来源概况
     */
    sources?: {
      /**
       * 来源类型(1导入 2小程序端添加 3医生添加)
       */
      sourceType?: number;
      /**
       * 来源类型文案
       */
      sourceTypeLabel?: string;
      /**
       * 数量
       */
      num?: number;
    }[];
  };
  /**
   * 服务包数据统计
   *
   * deprecated=true,
   */
  packageStatistic?: {
    /**
     * 包id
     */
    solutionId?: string;
    /**
     * 包名
     */
    name?: string;
    /**
     * 金额
     *
     * deprecated=true,
     */
    money?: string;
    /**
     * 数量
     */
    num?: number;
  }[];
  /**
   * 待办患者列表
   */
  waitCompletePatientList?: {
    /**
     * 患者id
     */
    patientId?: string;
    /**
     * 姓名
     */
    name?: string;
    /**
     * 性别  1：男  2：女
     */
    gender?: number;
    /**
     * 年龄
     */
    age?: number;
    /**
     * 电话
     */
    contactMobile?: string;
    /**
     * 资料完成度 百分比
     */
    completePercent?: number;
    /**
     * 身份证号
     */
    idCard?: string;
  }[];
  /**
   * 待办元素内容
   */
  waitItemList?: {
    /**
     * 待办元素id
     */
    waitItemId?: string;
    /**
     * 名字
     */
    name?: string;
    /**
     * 编码
     */
    code?: string;
    /**
     * 图标
     */
    icon?: string;
    /**
     * 失效的图标
     */
    invalidIcon?: string;
    /**
     * 数量
     */
    num?: number;
    /**
     * 今日增加的数量
     */
    increaseNum?: number;
    /**
     * 逾期的数量
     */
    expireNum?: number;
  }[];
  /**
   * 认证列表
   */
  authList?: string[];
}

/**
 * 接口 工作台 的 **请求函数**
 *
 */
export const postWorkbenchIndexindex = (data?: PostWorkbenchIndexindexRequest) => {
  return request.post<PostWorkbenchIndexindexRequest, PostWorkbenchIndexindexResponse>('/workbench/index/index', {
    data
  });
};

/**
 * 接口 待完善患者列表 的 **请求类型**
 *
 */
/**
 * 待完善患者列表参数
 */
export interface PostWorkbenchIndexwaitCompletePatientListRequest {
  /**
   * 患者名字
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
 * 接口 待完善患者列表 的 **返回类型**
 *
 */
/**
 * 待完善患者列表响应
 */
export interface PostWorkbenchIndexwaitCompletePatientListResponse {
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
     * 患者id
     */
    patientId?: string;
    /**
     * 姓名
     */
    name?: string;
    /**
     * 性别  1：男  2：女
     */
    gender?: number;
    /**
     * 年龄
     */
    age?: number;
    /**
     * 电话
     */
    contactMobile?: string;
    /**
     * 资料完成度 百分比
     */
    completePercent?: number;
    /**
     * 身份证号
     */
    idCard?: string;
  }[];
}

/**
 * 接口 待完善患者列表 的 **请求函数**
 *
 */
export const postWorkbenchIndexwaitCompletePatientList = (data?: PostWorkbenchIndexwaitCompletePatientListRequest) => {
  return request.post<
    PostWorkbenchIndexwaitCompletePatientListRequest,
    PostWorkbenchIndexwaitCompletePatientListResponse
  >('/workbench/index/waitCompletePatientList', {
    data
  });
};

/**
 * 接口 工作量总结 的 **请求类型**
 *
 */
/**
 * 工作量总结参数
 */
export interface PostWorkbenchIndexworkloadRequest {
  /**
   * 时间范围标识
   */
  timeRangeIdentify?: 'today' | 'yesterday' | 'week' | 'month';
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
 * 接口 工作量总结 的 **返回类型**
 *
 */
/**
 * 工作量总结响应
 */
export interface PostWorkbenchIndexworkloadResponse {
  /**
   * 内容
   */
  content?: {
    /**
     * 待办元素id
     */
    waitItemId?: string;
    /**
     * 名字
     */
    name?: string;
    /**
     * 编码
     */
    code?: string;
    /**
     * 数量
     */
    num?: number;
  }[];
  /**
   * 团队工作量统计
   */
  total?: number;
}

/**
 * 接口 工作量总结 的 **请求函数**
 *
 */
export const postWorkbenchIndexworkload = (data?: PostWorkbenchIndexworkloadRequest) => {
  return request.post<PostWorkbenchIndexworkloadRequest, PostWorkbenchIndexworkloadResponse>(
    '/workbench/index/workload',
    {
      data
    }
  );
};

/**
 * 接口 待办用户配置列表 的 **请求类型**
 *
 */
/**
 * 待办用户配置列表参数
 */
export interface PostWorkbenchWaitItemconfListRequest {
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
 * 接口 待办用户配置列表 的 **返回类型**
 *
 */
/**
 * 待办用户配置列表响应
 */
export interface PostWorkbenchWaitItemconfListResponse {
  /**
   * 内容
   */
  content?: {
    /**
     * 待办元素id
     */
    waitItemId?: string;
    /**
     * 名字
     */
    name?: string;
    /**
     * 编码
     */
    code?: string;
    /**
     * 图标
     */
    icon?: string;
    /**
     * 失效的图标
     */
    invalidIcon?: string;
    /**
     * 数量
     */
    num?: number;
    /**
     * 今日增加的数量
     */
    increaseNum?: number;
    /**
     * 逾期的数量
     */
    expireNum?: number;
  }[];
}

/**
 * 接口 待办用户配置列表 的 **请求函数**
 *
 */
export const postWorkbenchWaitItemconfList = (data?: PostWorkbenchWaitItemconfListRequest) => {
  return request.post<PostWorkbenchWaitItemconfListRequest, PostWorkbenchWaitItemconfListResponse>(
    '/workbench/waitItem/confList',
    {
      data
    }
  );
};

/**
 * 接口 编辑用户待办配置 的 **请求类型**
 *
 */
/**
 * 编辑用户待办配置参数
 */
export interface PostWorkbenchWaitItemeditRequest {
  /**
   * 待办元素ID列表
   */
  waitItemIds?: string[];
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
 * 接口 编辑用户待办配置 的 **返回类型**
 *
 */
/**
 * 编辑用户待办配置响应
 */
export interface PostWorkbenchWaitItemeditResponse {
  /**
   * 成功的条数
   */
  count?: number;
}

/**
 * 接口 编辑用户待办配置 的 **请求函数**
 *
 */
export const postWorkbenchWaitItemedit = (data?: PostWorkbenchWaitItemeditRequest) => {
  return request.post<PostWorkbenchWaitItemeditRequest, PostWorkbenchWaitItemeditResponse>('/workbench/waitItem/edit', {
    data
  });
};

/**
 * 接口 待办模板元素列表 的 **请求类型**
 *
 */
/**
 * 待办模板元素列表参数
 */
export interface PostWorkbenchWaitItemlistRequest {
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
 * 接口 待办模板元素列表 的 **返回类型**
 *
 */
/**
 * 待办模板元素列表响应
 */
export interface PostWorkbenchWaitItemlistResponse {
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
     * 待办元素id
     */
    waitItemId?: string;
    /**
     * 名字
     */
    name?: string;
    /**
     * 编码
     */
    code?: string;
    /**
     * 是否选中
     */
    checked?: number;
  }[];
}

/**
 * 接口 待办模板元素列表 的 **请求函数**
 *
 */
export const postWorkbenchWaitItemlist = (data?: PostWorkbenchWaitItemlistRequest) => {
  return request.post<PostWorkbenchWaitItemlistRequest, PostWorkbenchWaitItemlistResponse>('/workbench/waitItem/list', {
    data
  });
};

/**
 * 接口 获取评估列表 的 **请求类型**
 *
 */
/**
 * 获取评估列表参数
 */
export interface PostWorkbenchWaitevaluateListRequest {
  /**
   * 患者名字
   */
  patientName?: string;
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
 * 接口 获取评估列表 的 **返回类型**
 *
 */
/**
 * 获取评估列表响应
 */
export interface PostWorkbenchWaitevaluateListResponse {
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
     * 患者ID
     */
    patientId?: string;
    /**
     * 患者名字
     */
    name?: string;
    /**
     * 性别 1：男   2：女   3：未知
     */
    gender?: number;
    /**
     * 性别字符串
     */
    genderStr?: string;
    /**
     * 年龄
     */
    age?: number;
    /**
     * 手机号
     */
    contactMobile?: string;
    /**
     * 随访ID
     */
    followupId?: string;
    /**
     * 表单名字
     */
    formSchemaName?: string;
    /**
     * 表单结构ID
     */
    formSchemaId?: string;
    /**
     * 表单ID
     */
    formId?: string;
    /**
     * 版本
     */
    version?: string;
    /**
     * 表单系统基础路由
     */
    formBaseUrl?: string;
  }[];
}

/**
 * 接口 获取评估列表 的 **请求函数**
 *
 */
export const postWorkbenchWaitevaluateList = (data?: PostWorkbenchWaitevaluateListRequest) => {
  return request.post<PostWorkbenchWaitevaluateListRequest, PostWorkbenchWaitevaluateListResponse>(
    '/workbench/wait/evaluateList',
    {
      data
    }
  );
};

/**
 * 接口 异常指标编辑备注 的 **请求类型**
 *
 */
/**
 * 异常指标编辑备注参数
 */
export interface PostWorkbenchWaitindicatorAbnormalEditRemarkRequest {
  /**
   * 主键ID
   */
  waitIndicatorAbnormalId?: string;
  /**
   * 备注
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
 * 接口 异常指标编辑备注 的 **返回类型**
 *
 */
/**
 * 异常指标编辑备注响应
 */
export interface PostWorkbenchWaitindicatorAbnormalEditRemarkResponse {}

/**
 * 接口 异常指标编辑备注 的 **请求函数**
 *
 */
export const postWorkbenchWaitindicatorAbnormalEditRemark = (
  data?: PostWorkbenchWaitindicatorAbnormalEditRemarkRequest
) => {
  return request.post<
    PostWorkbenchWaitindicatorAbnormalEditRemarkRequest,
    PostWorkbenchWaitindicatorAbnormalEditRemarkResponse
  >('/workbench/wait/indicatorAbnormalEditRemark', {
    data
  });
};

/**
 * 接口 异常指标编辑状态 的 **请求类型**
 *
 */
/**
 * 异常指标编辑状态参数
 */
export interface PostWorkbenchWaitindicatorAbnormalEditStatusRequest {
  /**
   * 主键IDs
   */
  waitIndicatorAbnormalIds?: string[];
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
 * 接口 异常指标编辑状态 的 **返回类型**
 *
 */
/**
 * 异常指标编辑状态响应
 */
export interface PostWorkbenchWaitindicatorAbnormalEditStatusResponse {
  /**
   * 成功的条数
   */
  count?: string;
}

/**
 * 接口 异常指标编辑状态 的 **请求函数**
 *
 */
export const postWorkbenchWaitindicatorAbnormalEditStatus = (
  data?: PostWorkbenchWaitindicatorAbnormalEditStatusRequest
) => {
  return request.post<
    PostWorkbenchWaitindicatorAbnormalEditStatusRequest,
    PostWorkbenchWaitindicatorAbnormalEditStatusResponse
  >('/workbench/wait/indicatorAbnormalEditStatus', {
    data
  });
};

/**
 * 接口 异常指标列表 的 **请求类型**
 *
 */
/**
 * 异常指标列表参数
 */
export interface PostWorkbenchWaitindicatorAbnormalListRequest {
  /**
   * 开始时间
   */
  startTime?: string;
  /**
   * 结束时间
   */
  endTime?: string;
  /**
   * 患者姓名
   */
  patientName?: string;
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
 * 接口 异常指标列表 的 **返回类型**
 *
 */
/**
 * 异常指标列表响应
 */
export interface PostWorkbenchWaitindicatorAbnormalListResponse {
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
     * 待办异常指标记录ID
     */
    waitIndicatorAbnormalId?: string;
    /**
     * 患者名字
     */
    patientName?: string;
    /**
     * 性别  1：男   2：女   3：未知
     */
    gender?: number;
    /**
     * 生日
     */
    birthdate?: string;
    /**
     * 年龄
     */
    age?: number;
    /**
     * 电话
     */
    contactMobile?: string;
    /**
     * 备注
     */
    remark?: string;
    /**
     * 指标数据数组
     */
    indicatorList?: {
      /**
       * 指标ID
       */
      indicatorId?: string;
      /**
       * 指标名字
       */
      name?: string;
      /**
       * 指标值
       */
      value?: string;
      /**
       * 单位
       */
      unit?: string;
    }[];
  }[];
}

/**
 * 接口 异常指标列表 的 **请求函数**
 *
 */
export const postWorkbenchWaitindicatorAbnormalList = (data?: PostWorkbenchWaitindicatorAbnormalListRequest) => {
  return request.post<PostWorkbenchWaitindicatorAbnormalListRequest, PostWorkbenchWaitindicatorAbnormalListResponse>(
    '/workbench/wait/indicatorAbnormalList',
    {
      data
    }
  );
};
