/**
 * Created By api-typescript
 * https://alidocs.dingtalk.com/i/team/dN0G7AD82xAq4XWY/docs/dN0G78qlBL1o7zWY#
 */

import request from '../request';

/**
 * 接口 事件执行 的 **请求类型**
 *
 */
/**
 * 事件执行参数
 */
export interface PostInnerActionactionExecuteRequest {
  /**
   * 事件流ID
   */
  eventFlowId?: string;
  /**
   * 任务ID
   */
  taskId?: string;
  /**
   * 事件ID
   */
  actionId?: string;
  /**
   * 事件编码
   */
  actionCode?: string;
  /**
   * 事件执行记录id
   */
  recordId?: string;
  /**
   * 执行角色类型
   */
  role?: number;
  /**
   * 执行人ID
   */
  executeUserId?: string;
  /**
   * 执行人姓名
   */
  executeUserName?: string;
  /**
   * 事件流状态
   */
  eventFlowStatus?: number;
  /**
   * 业务执行数据
   */
  executeData?: {};
  /**
   * 业务源数据
   */
  resourceData?: {};
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
 * 执行结果数据
 */
export interface PostInnerActionactionExecuteResponse {}

/**
 * 接口 事件执行 的 **请求函数**
 *
 */
export const postInnerActionactionExecute = (data?: PostInnerActionactionExecuteRequest) => {
  return request.post<PostInnerActionactionExecuteRequest, PostInnerActionactionExecuteResponse>(
    '/inner/action/actionExecute',
    {
      data
    }
  );
};

/**
 * 接口 批量获取用户信息 的 **请求类型**
 *
 */
/**
 * 批量获取用户信息参数
 */
export interface PostInnerAdmininfosRequest {
  /**
   * 用户IDs
   */
  userIds: string[];
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
 * 接口 批量获取用户信息 的 **返回类型**
 *
 */
/**
 * 批量获取用户信息响应
 */
export interface PostInnerAdmininfosResponse {
  /**
   * 列表条目
   */
  items?: {}[];
}

/**
 * 接口 批量获取用户信息 的 **请求函数**
 *
 */
export const postInnerAdmininfos = (data?: PostInnerAdmininfosRequest) => {
  return request.post<PostInnerAdmininfosRequest, PostInnerAdmininfosResponse>('/inner/admin/infos', {
    data
  });
};

/**
 * 接口 医嘱订单完成通知 的 **请求类型**
 *
 */
/**
 * 医嘱订单完成通知参数
 */
export interface PostInnerOrdermedicalFinishNotifyRequest {
  /**
   * 订单id
   */
  orderId?: string;
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
 * 接口 医嘱订单完成通知 的 **返回类型**
 *
 */
/**
 * 医嘱订单完成通知响应
 */
export interface PostInnerOrdermedicalFinishNotifyResponse {}

/**
 * 接口 医嘱订单完成通知 的 **请求函数**
 *
 */
export const postInnerOrdermedicalFinishNotify = (data?: PostInnerOrdermedicalFinishNotifyRequest) => {
  return request.post<PostInnerOrdermedicalFinishNotifyRequest, PostInnerOrdermedicalFinishNotifyResponse>(
    '/inner/order/medicalFinishNotify',
    {
      data
    }
  );
};

/**
 * 接口 批量获取订单基本信息 的 **请求类型**
 *
 */
/**
 * 批量获取订单基本信息参数
 */
export interface PostInnerOrderorderBaseInfoRequest {
  /**
   * 医嘱IDs
   */
  medicalIds?: string[];
  /**
   * 订单IDs
   */
  orderIds?: number[];
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
 * 接口 批量获取订单基本信息 的 **返回类型**
 *
 */
/**
 * 批量获取订单基本信息响应
 */
export interface PostInnerOrderorderBaseInfoResponse {
  /**
   * 列表条目
   */
  items?: {
    /**
     * 订单ID
     */
    orderId?: string;
    /**
     * 医嘱ID
     */
    medicalId?: string;
    /**
     * 患者姓名
     */
    patientName?: string;
    /**
     * 患者性别
     */
    patientGender?: string;
    /**
     * 患者手机号
     */
    patientMobile?: string;
    /**
     * 患者年龄
     */
    patientAge?: number;
    /**
     * 医生姓名
     */
    doctorName?: string;
    /**
     * 团队名称
     */
    teamName?: string;
    /**
     * 机构名称
     */
    organName?: string;
    /**
     * 机构电话
     */
    organPhone?: string;
    /**
     * 医生手机号
     */
    doctorMobile?: string;
    /**
     * 订单金额
     */
    totalAmount?: string;
  }[];
}

/**
 * 接口 批量获取订单基本信息 的 **请求函数**
 *
 */
export const postInnerOrderorderBaseInfo = (data?: PostInnerOrderorderBaseInfoRequest) => {
  return request.post<PostInnerOrderorderBaseInfoRequest, PostInnerOrderorderBaseInfoResponse>(
    '/inner/order/orderBaseInfo',
    {
      data
    }
  );
};

/**
 * 接口 获取患者列表 的 **请求类型**
 *
 */
/**
 * 获取患者列表参数
 */
export interface PostInnerPatientlistRequest {
  /**
   * 机构ID
   */
  organId?: string;
  /**
   * 团队ID
   */
  teamId?: number;
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
 * 接口 获取患者列表 的 **返回类型**
 *
 */
/**
 * 获取患者列表响应
 */
export interface PostInnerPatientlistResponse {
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
     * 名字
     */
    name?: string;
    /**
     * 性别 1男  2女   3未知
     */
    gender?: number;
    /**
     * 电话号码
     */
    contactMobile?: string;
    /**
     * 头像
     */
    headImg?: string;
    /**
     * 患者来源类型 1武侯数据中心导入 2小程序端新增 3医生新增  4:门诊诊疗（his）
     */
    sourceType?: number;
    /**
     * 年龄
     */
    age?: number;
  }[];
}

/**
 * 接口 获取患者列表 的 **请求函数**
 *
 */
export const postInnerPatientlist = (data?: PostInnerPatientlistRequest) => {
  return request.post<PostInnerPatientlistRequest, PostInnerPatientlistResponse>('/inner/patient/list', {
    data
  });
};

/**
 * 接口 同步添加患者 的 **请求类型**
 *
 */
/**
 * 同步添加患者参数
 */
export interface PostInnerPatientsyncAddRequest {
  /**
   * 机构Id
   */
  organId?: number;
  /**
   * 团队ID
   */
  teamId?: number;
  /**
   * 名字
   */
  name?: string;
  /**
   * 生日
   */
  birthday?: string;
  /**
   * 电话
   */
  contactMobile?: string;
  /**
   * 身份证
   */
  idCard?: string;
  /**
   * 患者来源类型 1武侯数据中心导入 2小程序端新增 3医生新增  4:门诊诊疗（his）
   */
  sourceType?: number;
  /**
   * 性别 1男  2女  3：未知
   */
  gender?: number;
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
 * 接口 同步添加患者 的 **返回类型**
 *
 */
/**
 * 同步添加患者响应
 */
export interface PostInnerPatientsyncAddResponse {
  /**
   * 患者id
   */
  patientId?: string;
}

/**
 * 接口 同步添加患者 的 **请求函数**
 *
 */
export const postInnerPatientsyncAdd = (data?: PostInnerPatientsyncAddRequest) => {
  return request.post<PostInnerPatientsyncAddRequest, PostInnerPatientsyncAddResponse>('/inner/patient/syncAdd', {
    data
  });
};
