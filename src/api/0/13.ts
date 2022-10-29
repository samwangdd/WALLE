/**
 * Created By api-typescript
 * https://alidocs.dingtalk.com/i/team/dN0G7AD82xAq4XWY/docs/dN0G78qlBL1o7zWY#
 */

import request from '../request';

/**
 * 接口 获取病史信息 的 **请求类型**
 *
 */
/**
 * 获取病史信息参数
 */
export interface PostPatientArchivediseaseHistoryInfoRequest {
  /**
   * 患者ID
   */
  patientId?: number;
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
 * 接口 获取病史信息 的 **返回类型**
 *
 */
/**
 * 获取病史信息响应
 */
export interface PostPatientArchivediseaseHistoryInfoResponse {
  /**
   * 档案ID
   */
  archiveId?: number;
  /**
   * 过敏史
   */
  allergyHistory?: {
    /**
     * 过敏类型
     */
    allergyType: string;
    /**
     * 过敏类型描述
     */
    allergyTypeDesc: string;
    /**
     * 过敏源
     */
    allergyOrigin: string;
    /**
     * 过敏源描述
     */
    allergyOriginDesc: string;
    /**
     * 过敏源描述（其他）
     */
    allergyOriginName?: string;
    /**
     * 记录日期
     */
    date: string;
  }[];
  /**
   * 输血史
   */
  transfusionHistory?: {
    /**
     * 输血描述
     */
    transfusionDesc: string;
    /**
     * 诊断日期
     */
    diagnoseDate: string;
    /**
     * 记录日期
     */
    date: string;
  }[];
  /**
   * 家族史
   */
  familyHistory?: {
    /**
     * 关系
     */
    relation: string;
    /**
     * 关系描述
     */
    relationDesc: string;
    /**
     * 疾病ID
     */
    diseaseId: string;
    /**
     * 疾病名称
     */
    diseaseDesc: string;
    /**
     * 诊断日期
     */
    diagnoseDate: string;
    /**
     * 记录日期
     */
    date: string;
  }[];
  /**
   * 疾病史
   */
  diseaseHistory?: {
    /**
     * 疾病ID
     */
    diseaseId: string;
    /**
     * 疾病名称
     */
    diseaseDesc: string;
    /**
     * 诊断日期
     */
    diagnoseDate: string;
    /**
     * 记录日期
     */
    date: string;
  }[];
  /**
   * 手术外伤史
   */
  surgeryHistory?: {
    /**
     * 手术描述
     */
    surgeryDesc: string;
    /**
     * 手术类型
     */
    surgeryType: string;
    /**
     * 手术类型描述
     */
    surgeryTypeDesc: string;
    /**
     * 诊断日期
     */
    diagnoseDate: string;
    /**
     * 记录日期
     */
    date: string;
  }[];
  /**
   * 预约接种史
   */
  vaccinationHistory?: {
    /**
     * 疫苗ID
     */
    vaccinationId: string;
    /**
     * 疫苗名称
     */
    vaccinationDesc: string;
    /**
     * 机构ID
     */
    organizationId: string;
    /**
     * 机构名称
     */
    organizationDesc: string;
    /**
     * 接种日期
     */
    inoculationDate: string;
    /**
     * 记录日期
     */
    date: string;
  }[];
  /**
   * 是否有遗传病(0-无,1-有)
   */
  hasHeredityDisease?: number;
  /**
   * 遗传疾病名称
   */
  heredityDiseaseName?: string;
  /**
   * 暴露史(0-无,1-化学品,2-读物,3-射线)
   */
  exposeHistory?: number;
  /**
   * 残疾类型
   *
   * <ul>
   * <li>0:无</li>
   * <li>1:视力残疾</li>
   * <li>2:听力残疾</li>
   * <li>3:语言残疾</li>
   * <li>4:肢体残疾</li>
   * <li>5:智力残疾</li>
   * <li>6:精神残疾</li>
   * <li>7:其他残疾</li>
   * </ul>
   */
  disabilityType?: number;
  /**
   * 其他残疾名称
   */
  otherDisabilityName?: string;
  /**
   * 结婚年龄
   */
  marriageAge?: number;
  /**
   * 儿子数量
   */
  boyNumber?: number;
  /**
   * 女儿数量
   */
  girlNumber?: number;
  /**
   * 出生时体重
   */
  birthWeight?: string;
  /**
   * 足月产次数
   */
  partusMaturusNumber?: number;
  /**
   * 分娩次数
   */
  childbirthNumber?: number;
  /**
   * 巨大儿史
   */
  macrosomiaWeight?: string;
  /**
   * 初潮年龄
   */
  menophaniaAge?: number;
  /**
   * 绝经年龄
   */
  pausimeniaAge?: number;
  /**
   * 月经天数
   */
  menstrualDay?: number;
  /**
   * 月经周期
   */
  menstrualCycle?: number;
  /**
   * 人工流产次数
   */
  inducedAbortionNumber?: number;
  /**
   * 哺乳方式
   */
  lactationType?: string;
  /**
   * 妊娠合并症并发症
   */
  pregnancyComplication?: string;
  /**
   * 避孕史
   */
  contraceptionHistory?: string;
  /**
   * 妊娠终止方式
   */
  terminationPregnancyType?: string;
}

/**
 * 接口 获取病史信息 的 **请求函数**
 *
 */
export const postPatientArchivediseaseHistoryInfo = (data?: PostPatientArchivediseaseHistoryInfoRequest) => {
  return request.post<PostPatientArchivediseaseHistoryInfoRequest, PostPatientArchivediseaseHistoryInfoResponse>(
    '/patient/archive/diseaseHistoryInfo',
    {
      data
    }
  );
};

/**
 * 接口 病史信息编辑 的 **请求类型**
 *
 */
/**
 * 病史信息编辑参数
 */
export interface PostPatientArchiveeditDiseaseHistoryRequest {
  /**
   * 患者ID
   */
  patientId?: number;
  /**
   * 过敏史
   */
  allergyHistory?: {
    /**
     * 过敏类型
     */
    allergyType: string;
    /**
     * 过敏源
     */
    allergyOrigin: string;
    /**
     * 记录日期
     */
    date: string;
  }[];
  /**
   * 输血史
   */
  transfusionHistory?: {
    /**
     * 输血描述
     */
    transfusionDesc: string;
    /**
     * 诊断日期
     */
    diagnoseDate: string;
    /**
     * 记录日期
     */
    date: string;
  }[];
  /**
   * 家族史
   */
  familyHistory?: {
    /**
     * 关系
     */
    relation: string;
    /**
     * 疾病ID
     */
    diseaseId: string;
    /**
     * 诊断日期
     */
    diagnoseDate: string;
    /**
     * 记录日期
     */
    date: string;
  }[];
  /**
   * 疾病史
   */
  diseaseHistory?: {
    /**
     * 疾病ID
     */
    diseaseId: string;
    /**
     * 诊断日期
     */
    diagnoseDate: string;
    /**
     * 记录日期
     */
    date: string;
  }[];
  /**
   * 手术外伤史
   */
  surgeryHistory?: {
    /**
     * 手术描述
     */
    surgeryDesc: string;
    /**
     * 手术类型
     */
    surgeryType: string;
    /**
     * 诊断日期
     */
    diagnoseDate: string;
    /**
     * 记录日期
     */
    date: string;
  }[];
  /**
   * 预约接种史
   */
  vaccinationHistory?: {
    /**
     * 疫苗ID
     */
    vaccinationId: string;
    /**
     * 机构ID
     */
    organizationId: string;
    /**
     * 接种日期
     */
    inoculationDate: string;
    /**
     * 记录日期
     */
    date: string;
  }[];
  /**
   * 是否有遗传病(0-无,1-有)
   */
  hasHeredityDisease?: number;
  /**
   * 遗传疾病名称
   */
  heredityDiseaseName?: string;
  /**
   * 暴露史(0-无,1-化学品,2-毒物,3-射线)
   */
  exposeHistory?: number;
  /**
   * 结婚年龄
   */
  marriageAge?: number;
  /**
   * 儿子数量
   */
  boyNumber?: number;
  /**
   * 女儿数量
   */
  girlNumber?: number;
  /**
   * 出生时体重
   */
  birthWeight?: string;
  /**
   * 足月产次数
   */
  partusMaturusNumber?: number;
  /**
   * 分娩次数
   */
  childbirthNumber?: number;
  /**
   * 巨大儿史
   */
  macrosomiaWeight?: string;
  /**
   * 初潮年龄
   */
  menophaniaAge?: number;
  /**
   * 绝经年龄
   */
  pausimeniaAge?: number;
  /**
   * 月经天数
   */
  menstrualDay?: number;
  /**
   * 月经周期
   */
  menstrualCycle?: number;
  /**
   * 人工流产次数
   */
  inducedAbortionNumber?: number;
  /**
   * 哺乳方式
   */
  lactationType?: number;
  /**
   * 妊娠合并症并发症
   */
  pregnancyComplication?: string;
  /**
   * 避孕史
   */
  contraceptionHistory?: string;
  /**
   * 妊娠终止方式
   */
  terminationPregnancyType?: number;
  /**
   * 残疾情况
   *
   * <ul>
   * <li>0:无</li>
   * <li>1:视力残疾</li>
   * <li>2:听力残疾</li>
   * <li>3:语言残疾</li>
   * <li>4:肢体残疾</li>
   * <li>5:智力残疾</li>
   * <li>6:精神残疾</li>
   * <li>7:其他残疾</li>
   * </ul>
   */
  disabilityType?: number;
  /**
   * 其他残疾名称
   */
  otherDisabilityName?: string;
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
 * 接口 病史信息编辑 的 **返回类型**
 *
 */
/**
 * 处理成功，通用响应对象
 */
export interface PostPatientArchiveeditDiseaseHistoryResponse {}

/**
 * 接口 病史信息编辑 的 **请求函数**
 *
 */
export const postPatientArchiveeditDiseaseHistory = (data?: PostPatientArchiveeditDiseaseHistoryRequest) => {
  return request.post<PostPatientArchiveeditDiseaseHistoryRequest, PostPatientArchiveeditDiseaseHistoryResponse>(
    '/patient/archive/editDiseaseHistory',
    {
      data
    }
  );
};

/**
 * 接口 诊疗数据添加 的 **请求类型**
 *
 */
/**
 * 诊疗数据添加参数
 */
export interface PostPatientDiagnoseaddRequest {
  /**
   * 患者id
   */
  patientId?: string;
  /**
   * 类型 (1检验报告 2检查报告 3病历)
   */
  type?: number;
  /**
   * 图片地址集合
   */
  images?: string[];
  /**
   * 机构名
   */
  organ?: string;
  /**
   * 机构ID
   */
  organCode?: number;
  /**
   * 检查类型
   */
  checkType?: number;
  /**
   * 是否正常
   */
  normal?: number;
  /**
   * 检查结果
   */
  checkStr?: string;
  /**
   * 检验日期
   */
  date?: string;
  /**
   * 报告名称
   */
  name?: string;
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
 * 接口 诊疗数据添加 的 **返回类型**
 *
 */
/**
 * 诊疗数据添加响应
 */
export interface PostPatientDiagnoseaddResponse {
  /**
   * 数据记录id
   */
  diagnoseId?: string;
}

/**
 * 接口 诊疗数据添加 的 **请求函数**
 *
 */
export const postPatientDiagnoseadd = (data?: PostPatientDiagnoseaddRequest) => {
  return request.post<PostPatientDiagnoseaddRequest, PostPatientDiagnoseaddResponse>('/patient/diagnose/add', {
    data
  });
};

/**
 * 接口 诊疗数据列表 的 **请求类型**
 *
 */
/**
 * 诊疗数据列表参数
 */
export interface PostPatientDiagnoselistRequest {
  /**
   * 类型 1检验报告 2检查报告 3病历
   */
  type?: number;
  /**
   * 患者id
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
 * 接口 诊疗数据列表 的 **返回类型**
 *
 */
/**
 * 诊疗数据列表响应
 */
export interface PostPatientDiagnoselistResponse {
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
     * 诊疗数据id
     */
    diagnoseId?: string;
    /**
     * 报告名称
     */
    name?: string;
    /**
     * 图片数组
     */
    images?: string[];
    /**
     * 图片类型  1：url  2：barcodePdf
     */
    imageType?: number;
    /**
     * 报告类型 1检验报告 2检查报告 3病历
     */
    type?: number;
    /**
     * 检验机构
     */
    organ?: string;
    /**
     * 检验日期
     */
    date?: string;
    /**
     * 机构编码
     */
    organCode?: number;
    /**
     * 检查类型
     */
    checkType?: number;
    /**
     * 是否正常
     */
    normal?: number;
    /**
     * 检查结果
     */
    checkStr?: string;
    /**
     * 上传日期
     */
    updateDate?: string;
    /**
     * 是否正常
     */
    normalStr?: string;
    /**
     * 来源 (1患者 2医生)
     */
    fromType?: number;
  }[];
}

/**
 * 接口 诊疗数据列表 的 **请求函数**
 *
 */
export const postPatientDiagnoselist = (data?: PostPatientDiagnoselistRequest) => {
  return request.post<PostPatientDiagnoselistRequest, PostPatientDiagnoselistResponse>('/patient/diagnose/list', {
    data
  });
};
