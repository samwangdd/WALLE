/**
 * Created By api-typescript
 * https://alidocs.dingtalk.com/i/team/dN0G7AD82xAq4XWY/docs/dN0G78qlBL1o7zWY#
 */

import request from '../request';

/**
 * 接口 转诊状态回调 的 **请求类型**
 *
 */
/**
 * 转诊状态回调参数
 */
export interface PostInnerReferralReferralstatusCallBackRequest {
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
  /**
   * 转诊详情ID
   */
  transferDiagnosisInfoId?: string;
  /**
   * 转诊状态
   */
  transferStatus?: number;
  /**
   * 留号医生
   */
  locDoctorName?: string;
  /**
   * 留号科室
   */
  locDeptName?: string;
  /**
   * 实际转入日期
   */
  retentionDate?: string;
  /**
   * 就诊阶段
   */
  admRange?: number;
  /**
   * 转诊当天具体时间
   */
  admTimeRange?: string;
  /**
   * 审核结果
   */
  auditResult?: string;
}

/**
 * 接口 转诊状态回调 的 **返回类型**
 *
 */
/**
 * 处理成功，通用响应对象
 */
export interface PostInnerReferralReferralstatusCallBackResponse {}

/**
 * 接口 转诊状态回调 的 **请求函数**
 *
 */
export const postInnerReferralReferralstatusCallBack = (data?: PostInnerReferralReferralstatusCallBackRequest) => {
  return request.post<PostInnerReferralReferralstatusCallBackRequest, PostInnerReferralReferralstatusCallBackResponse>(
    '/innerReferral/referral/statusCallBack',
    {
      data
    }
  );
};

/**
 * 接口 新增转诊申请 的 **请求类型**
 *
 */
/**
 * 新增转诊申请参数
 */
export interface PostReferralReferralapplyRequest {
  /**
   * 逻辑ID
   */
  referralId?: number;
  /**
   * 患者姓名
   */
  patientName?: string;
  /**
   * 就诊卡
   */
  patientCard?: string;
  /**
   * 性别
   */
  patientSex?: string;
  /**
   * 年龄
   */
  patientAge?: string;
  /**
   * 手机号
   */
  patientPhone?: string;
  /**
   * 医保类别
   */
  healthInsuranceType?: string;
  /**
   * 首诊医生
   */
  initialDoctor?: string;
  /**
   * 首诊医生联系方式
   */
  initialDoctorPhone?: string;
  /**
   * 转入医院id
   */
  transferHospitalId?: string;
  /**
   * 拟转诊科室id
   */
  transferDepartmentId?: string;
  /**
   * 拟转诊科室code
   */
  transferDepartmentCode?: string;
  /**
   * 拟转诊科室名称
   */
  transferDepartmentName?: string;
  /**
   * 转入日期
   */
  reservationDate?: string;
  /**
   * 预约时段
   */
  reservationTimeSlot?: string;
  /**
   * 上次就诊医院
   */
  previousOrganName?: string;
  /**
   * 上次就诊时间
   */
  previousSeeTime?: string;
  /**
   * 患病时间
   */
  illnessTime?: string;
  /**
   * 是否可以接受安排其他时间
   */
  changeDate?: number;
  /**
   * 转诊类型
   */
  transferType?: number;
  /**
   * 当前病情症状
   */
  tags?: string;
  /**
   * 当前病情描述
   */
  description?: string;
  /**
   * 正在使用的药品
   */
  useDrug?: string;
  /**
   * 首次诊断
   */
  initialDiagnosis?: string;
  /**
   * 上次就诊诊断
   */
  previousConclusion?: string;
  /**
   * 患者主诉
   */
  chiefComplaint?: string;
  /**
   * 合并症
   */
  comorbidity?: string;
  /**
   * 并发症
   */
  complications?: string;
  /**
   * 过敏史
   */
  historyAllergy?: string;
  /**
   * 现病史
   */
  historyDiseasePresent?: string;
  /**
   * 既往史
   */
  historyDiseaseLast?: string;
  /**
   * 治疗经过
   */
  treatmentHistory?: string;
  /**
   * 附件
   */
  fileArray?: {};
  /**
   * 备注
   */
  remarks?: string;
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
 * 接口 新增转诊申请 的 **返回类型**
 *
 */
/**
 * 新增转诊申请响应
 */
export interface PostReferralReferralapplyResponse {
  /**
   * 转诊ID
   */
  referralId?: string;
}

/**
 * 接口 新增转诊申请 的 **请求函数**
 *
 */
export const postReferralReferralapply = (data?: PostReferralReferralapplyRequest) => {
  return request.post<PostReferralReferralapplyRequest, PostReferralReferralapplyResponse>('/referral/referral/apply', {
    data
  });
};

/**
 * 接口 转诊申请配置 的 **请求类型**
 *
 */
/**
 * 转诊申请配置参数
 */
export interface PostReferralReferralconfigRequest {
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
 * 接口 转诊申请配置 的 **返回类型**
 *
 */
/**
 * 转诊申请配置响应
 */
export interface PostReferralReferralconfigResponse {}

/**
 * 接口 转诊申请配置 的 **请求函数**
 *
 */
export const postReferralReferralconfig = (data?: PostReferralReferralconfigRequest) => {
  return request.post<PostReferralReferralconfigRequest, PostReferralReferralconfigResponse>(
    '/referral/referral/config',
    {
      data
    }
  );
};

/**
 * 接口 转诊申请详情 的 **请求类型**
 *
 */
/**
 * 转诊申请详情参数
 */
export interface PostReferralReferraldetailRequest {
  /**
   * 转诊详情id
   */
  referralId?: string;
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
 * 接口 转诊申请详情 的 **返回类型**
 *
 */
/**
 * 转诊申请详情响应
 */
export interface PostReferralReferraldetailResponse {
  /**
   * 患者姓名
   */
  patientName?: string;
  /**
   * 就诊卡
   */
  patientCard?: string;
  /**
   * 性别
   */
  patientSex?: string;
  /**
   * 年龄
   */
  patientAge?: string;
  /**
   * 手机号
   */
  patientPhone?: string;
  /**
   * 医保类别
   */
  healthInsuranceType?: string;
  /**
   * 首诊医生
   */
  initialDoctor?: string;
  /**
   * 首诊医生联系方式
   */
  initialDoctorPhone?: string;
  /**
   * 转入医生
   */
  locDoctorName?: string;
  /**
   * 留号科室
   */
  locDeptName?: string;
  /**
   * 转入医院id
   */
  transferHospitalId?: string;
  /**
   * 拟转诊科室id
   */
  transferDepartmentId?: string;
  /**
   * 拟转诊科室code
   */
  transferDepartmentCode?: string;
  /**
   * 拟转诊科室名称
   */
  transferDepartmentName?: string;
  /**
   * 转入日期
   */
  reservationDate?: string;
  /**
   * 预约时段
   */
  reservationTimeSlot?: string;
  /**
   * 实际转入日期
   */
  retentionDate?: string;
  /**
   * 实际预约时段
   */
  admTimeRange?: string;
  /**
   * 上次就诊医院
   */
  previousOrganName?: string;
  /**
   * 上次就诊时间
   */
  previousSeeTime?: string;
  /**
   * 患病时间
   */
  illnessTime?: string;
  /**
   * 是否可以接受安排其他时间
   */
  changeDate?: number;
  /**
   * 转诊类型
   */
  transferType?: number;
  /**
   * 当前病情症状
   */
  tags?: string;
  /**
   * 当前病情描述
   */
  description?: string;
  /**
   * 正在使用的药品
   */
  useDrug?: string;
  /**
   * 首次诊断
   */
  initialDiagnosis?: string;
  /**
   * 上次就诊诊断
   */
  previousConclusion?: string;
  /**
   * 患者主诉
   */
  chiefComplaint?: string;
  /**
   * 合并症
   */
  comorbidity?: string;
  /**
   * 并发症
   */
  complications?: string;
  /**
   * 过敏史
   */
  historyAllergy?: string;
  /**
   * 现病史
   */
  historyDiseasePresent?: string;
  /**
   * 既往史
   */
  historyDiseaseLast?: string;
  /**
   * 治疗经过
   */
  treatmentHistory?: string;
  /**
   * 附件
   */
  fileArray?: {};
  /**
   * 备注
   */
  remarks?: string;
  /**
   * 服务状态
   */
  transferStatus?: number;
  /**
   * 服务状态名称
   */
  transferStatusName?: string;
  /**
   * 转诊ID
   */
  referralId?: string;
  /**
   * 审核结果
   */
  auditResult?: string;
}

/**
 * 接口 转诊申请详情 的 **请求函数**
 *
 */
export const postReferralReferraldetail = (data?: PostReferralReferraldetailRequest) => {
  return request.post<PostReferralReferraldetailRequest, PostReferralReferraldetailResponse>(
    '/referral/referral/detail',
    {
      data
    }
  );
};

/**
 * 接口 获取转诊部门 的 **请求类型**
 *
 */
/**
 * 获取转诊部门参数
 */
export interface PostReferralReferralgetDepartmentRequest {
  /**
   * 转诊医院ID
   */
  transferHospitalId?: string;
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
 * 接口 获取转诊部门 的 **返回类型**
 *
 */
/**
 * 获取转诊部门响应
 */
export interface PostReferralReferralgetDepartmentResponse {
  /**
   * 内容
   */
  transferDepartment?: {
    /**
     * 科室id
     */
    transferDepartmentId?: string;
    /**
     * 科室名称
     */
    transferDepartmentName?: string;
    /**
     * 科室code
     */
    transferDepartmentCode?: string;
  }[];
}

/**
 * 接口 获取转诊部门 的 **请求函数**
 *
 */
export const postReferralReferralgetDepartment = (data?: PostReferralReferralgetDepartmentRequest) => {
  return request.post<PostReferralReferralgetDepartmentRequest, PostReferralReferralgetDepartmentResponse>(
    '/referral/referral/getDepartment',
    {
      data
    }
  );
};

/**
 * 接口 转诊申请列表 的 **请求类型**
 *
 */
/**
 * 转诊申请列表参数
 */
export interface PostReferralReferrallistRequest {
  /**
   * 关键词
   */
  keyword?: string;
  /**
   * 页数
   */
  pageNum?: number;
  /**
   * 每页条数
   */
  pageSize?: number;
  /**
   * 开始日期
   */
  startDate?: string;
  /**
   * 结束日期
   */
  endDate?: string;
  /**
   * 转诊状态
   */
  transferStatus?: number;
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
 * 接口 转诊申请列表 的 **返回类型**
 *
 */
/**
 * 转诊申请列表响应
 */
export interface PostReferralReferrallistResponse {
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
     * 服务状态
     */
    transferStatus?: number;
    /**
     * 服务状态名称
     */
    transferStatusName?: string;
    /**
     * 患者姓名
     */
    patientName?: string;
    /**
     * 性别
     */
    patientSex?: string;
    /**
     * 性别名称
     */
    patientSexStr?: string;
    /**
     * 年龄
     */
    patientAge?: string;
    /**
     * 手机号
     */
    patientPhone?: string;
    /**
     * 转入医院id
     */
    transferHospitalId?: string;
    /**
     * 转入医院名称
     */
    transferHospitalName?: string;
    /**
     * 拟转诊科室名称
     */
    transferDepartmentName?: string;
    /**
     * 拟转入时间
     */
    reservationTimeSlotStr?: string;
    /**
     * 实际转入时间
     */
    admRangeStr?: string;
    /**
     * 申请人
     */
    userName?: string;
    /**
     * 申请时间
     */
    referralTime?: string;
    /**
     * 转诊ID
     */
    referralId?: string;
    /**
     * 审核结果
     */
    auditResult?: string;
  }[];
}

/**
 * 接口 转诊申请列表 的 **请求函数**
 *
 */
export const postReferralReferrallist = (data?: PostReferralReferrallistRequest) => {
  return request.post<PostReferralReferrallistRequest, PostReferralReferrallistResponse>('/referral/referral/list', {
    data
  });
};
