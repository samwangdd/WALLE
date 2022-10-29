/**
 * Created By api-typescript
 * https://alidocs.dingtalk.com/i/team/dN0G7AD82xAq4XWY/docs/dN0G78qlBL1o7zWY#
 */

import request from '../request';

/**
 * 接口 饮食处方详情 的 **请求类型**
 *
 */
/**
 * 饮食处方详情参数
 */
export interface PostPatientDietPlandetailRequest {
  /**
   * 饮食处方id
   */
  dietPlanId?: string;
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
 * 接口 饮食处方详情 的 **返回类型**
 *
 */
/**
 * 饮食处方详情响应
 */
export interface PostPatientDietPlandetailResponse {
  /**
   * 饮食处方id
   */
  dietPlanId?: string;
  /**
   * 患者id
   */
  patientId?: string;
  /**
   * 目标
   */
  target?: string;
  /**
   * 理想体重
   */
  ibw?: string;
  /**
   * 能量级别
   */
  level?: string;
  /**
   * 每日总热量
   */
  totalCal?: string;
  /**
   * 附相应热卡的菜谱一份
   */
  action1?: number;
  /**
   * 讲解每种食物的用量
   */
  action2?: number;
  /**
   * 发放限盐勺和限油壶
   */
  action3?: number;
  /**
   * 发放合理膳食资料
   */
  action4?: number;
}

/**
 * 接口 饮食处方详情 的 **请求函数**
 *
 */
export const postPatientDietPlandetail = (data?: PostPatientDietPlandetailRequest) => {
  return request.post<PostPatientDietPlandetailRequest, PostPatientDietPlandetailResponse>('/patient/dietPlan/detail', {
    data
  });
};

/**
 * 接口 运动处方添加 的 **请求类型**
 *
 */
/**
 * 运动处方添加参数
 */
export interface PostPatientExercisePlanaddRequest {
  /**
   * 患者id
   */
  patientId?: number;
  /**
   * 目标(每日千步当量)
   */
  target?: string;
  /**
   * 散步 1选择 2未选择
   */
  item1Flg?: number;
  /**
   * 散步时间
   */
  item1Time?: string;
  /**
   * 做饭 1选择 2未选择
   */
  item2Flg?: number;
  /**
   * 做饭时间
   */
  item2Time?: string;
  /**
   * 中速不行 1选择 2未选择
   */
  item3Flg?: number;
  /**
   * 中速步行时间
   */
  item3Time?: string;
  /**
   * 拖地吸尘 1选择 2未选择
   */
  item4Flg?: number;
  /**
   * 拖地吸尘时间
   */
  item4Time?: string;
  /**
   * 中速骑车 1选择 2未选择
   */
  item5Flg?: number;
  /**
   * 中速汽车时间
   */
  item5Time?: string;
  /**
   * 健身操 1选择 2未选择
   */
  item6Flg?: number;
  /**
   * 健身操时间
   */
  item6Time?: string;
  /**
   * 太极拳 1选择 2未选择
   */
  item7Flg?: number;
  /**
   * 太极拳时间
   */
  item7Time?: string;
  /**
   * 中速游泳 1选择 2未选择
   */
  item8Flg?: number;
  /**
   * 中速游泳时间
   */
  item8Time?: string;
  /**
   * 慢跑 1选择 2未选择
   */
  item9Flg?: number;
  /**
   * 慢跑时间
   */
  item9Time?: string;
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
 * 接口 运动处方添加 的 **返回类型**
 *
 */
/**
 * 运动处方添加响应
 */
export interface PostPatientExercisePlanaddResponse {
  /**
   * 运动处方id号
   */
  exercisePlanId?: string;
}

/**
 * 接口 运动处方添加 的 **请求函数**
 *
 */
export const postPatientExercisePlanadd = (data?: PostPatientExercisePlanaddRequest) => {
  return request.post<PostPatientExercisePlanaddRequest, PostPatientExercisePlanaddResponse>(
    '/patient/exercisePlan/add',
    {
      data
    }
  );
};

/**
 * 接口 运动处方详情 的 **请求类型**
 *
 */
/**
 * 运动处方详情参数
 */
export interface PostPatientExercisePlandetailRequest {
  /**
   * 运动处方id
   */
  exercisePlanId?: string;
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
 * 接口 运动处方详情 的 **返回类型**
 *
 */
/**
 * 运动处方详情响应
 */
export interface PostPatientExercisePlandetailResponse {
  /**
   * 运动处方id
   */
  exercisePlanId?: string;
  /**
   * 患者id
   */
  patientId?: string;
  /**
   * 目标(每日千步当量)
   */
  target?: string;
  /**
   * 散步 1选择 2未选择
   */
  item1Flg?: number;
  /**
   * 散步时间
   */
  item1Time?: string;
  /**
   * 做饭 1选择 2未选择
   */
  item2Flg?: number;
  /**
   * 做饭时间
   */
  item2Time?: string;
  /**
   * 中速不行 1选择 2未选择
   */
  item3Flg?: number;
  /**
   * 中速步行时间
   */
  item3Time?: string;
  /**
   * 拖地吸尘 1选择 2未选择
   */
  item4Flg?: number;
  /**
   * 拖地吸尘时间
   */
  item4Time?: string;
  /**
   * 中速骑车 1选择 2未选择
   */
  item5Flg?: number;
  /**
   * 中速汽车时间
   */
  item5Time?: string;
  /**
   * 健身操 1选择 2未选择
   */
  item6Flg?: number;
  /**
   * 健身操时间
   */
  item6Time?: string;
  /**
   * 太极拳 1选择 2未选择
   */
  item7Flg?: number;
  /**
   * 太极拳时间
   */
  item7Time?: string;
  /**
   * 中速游泳 1选择 2未选择
   */
  item8Flg?: number;
  /**
   * 中速游泳时间
   */
  item8Time?: string;
  /**
   * 慢跑 1选择 2未选择
   */
  item9Flg?: number;
  /**
   * 慢跑时间
   */
  item9Time?: string;
}

/**
 * 接口 运动处方详情 的 **请求函数**
 *
 */
export const postPatientExercisePlandetail = (data?: PostPatientExercisePlandetailRequest) => {
  return request.post<PostPatientExercisePlandetailRequest, PostPatientExercisePlandetailResponse>(
    '/patient/exercisePlan/detail',
    {
      data
    }
  );
};

/**
 * 接口 运动处方列表 的 **请求类型**
 *
 */
/**
 * 运动处方列表参数
 */
export interface PostPatientExercisePlanlistRequest {
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
 * 接口 运动处方列表 的 **返回类型**
 *
 */
/**
 * 运动处方列表响应
 */
export interface PostPatientExercisePlanlistResponse {}

/**
 * 接口 运动处方列表 的 **请求函数**
 *
 */
export const postPatientExercisePlanlist = (data?: PostPatientExercisePlanlistRequest) => {
  return request.post<PostPatientExercisePlanlistRequest, PostPatientExercisePlanlistResponse>(
    '/patient/exercisePlan/list',
    {
      data
    }
  );
};

/**
 * 接口 限酒处方添加 的 **请求类型**
 *
 */
/**
 * 限酒处方添加参数
 */
export interface PostPatientQuitDrinkPlanaddRequest {
  /**
   * 患者id
   */
  patientId?: number;
  /**
   * 管理目标
   */
  target?: string;
  /**
   * 阅读资料 1已阅读 2未阅读
   */
  material?: number;
  /**
   * 家人支持 1支持 2未支持
   */
  support?: number;
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
 * 接口 限酒处方添加 的 **返回类型**
 *
 */
/**
 * 限酒处方添加响应
 */
export interface PostPatientQuitDrinkPlanaddResponse {
  /**
   * 限酒处方id
   */
  quitDrinkPlanId?: string;
}

/**
 * 接口 限酒处方添加 的 **请求函数**
 *
 */
export const postPatientQuitDrinkPlanadd = (data?: PostPatientQuitDrinkPlanaddRequest) => {
  return request.post<PostPatientQuitDrinkPlanaddRequest, PostPatientQuitDrinkPlanaddResponse>(
    '/patient/quitDrinkPlan/add',
    {
      data
    }
  );
};

/**
 * 接口 限酒处方详情 的 **请求类型**
 *
 */
/**
 * 限酒处方详情参数
 */
export interface PostPatientQuitDrinkPlandetailRequest {
  /**
   * 限酒处方id
   */
  quitDrinkPlanId?: string;
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
 * 接口 限酒处方详情 的 **返回类型**
 *
 */
/**
 * 限酒处方详情响应
 */
export interface PostPatientQuitDrinkPlandetailResponse {
  /**
   * 逻辑id
   */
  quitDrinkPlanId?: string;
  /**
   * 患者id
   */
  patientId?: string;
  /**
   * 管理目标
   */
  target?: string;
  /**
   * 阅读资料 1已阅读 2未阅读
   */
  material?: number;
  /**
   * 家人支持 1支持 2未支持
   */
  support?: number;
}

/**
 * 接口 限酒处方详情 的 **请求函数**
 *
 */
export const postPatientQuitDrinkPlandetail = (data?: PostPatientQuitDrinkPlandetailRequest) => {
  return request.post<PostPatientQuitDrinkPlandetailRequest, PostPatientQuitDrinkPlandetailResponse>(
    '/patient/quitDrinkPlan/detail',
    {
      data
    }
  );
};

/**
 * 接口 限酒处方列表 的 **请求类型**
 *
 */
/**
 * 限酒处方列表参数
 */
export interface PostPatientQuitDrinkPlanlistRequest {
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
 * 接口 限酒处方列表 的 **返回类型**
 *
 */
/**
 * 限酒处方列表响应
 */
export interface PostPatientQuitDrinkPlanlistResponse {
  content?: {
    /**
     * 操作人
     */
    opName?: string;
    /**
     * 目标
     */
    target?: string;
    /**
     * 记录时间
     */
    xCreateTime?: string;
  }[];
}

/**
 * 接口 限酒处方列表 的 **请求函数**
 *
 */
export const postPatientQuitDrinkPlanlist = (data?: PostPatientQuitDrinkPlanlistRequest) => {
  return request.post<PostPatientQuitDrinkPlanlistRequest, PostPatientQuitDrinkPlanlistResponse>(
    '/patient/quitDrinkPlan/list',
    {
      data
    }
  );
};

/**
 * 接口 戒烟处方添加 的 **请求类型**
 *
 */
/**
 * 戒烟处方添加参数
 */
export interface PostPatientQuitSmokingPlanaddRequest {
  /**
   * 患者id
   */
  patientId?: number;
  /**
   * 戒烟原因
   * <ul>
   * <li>1 已存在健康问题</li>
   * <li>2 担心吸烟会影响自己的健康</li>
   * <li>3 影响家人的健康</li>
   * <li>4 家人及朋友要求</li>
   * <li>5 全国全面戒烟了，不得不戒烟</li>
   * <li>6 其他</li>
   * </ul>
   */
  quitReason?: string;
  /**
   * 戒烟原因其他
   */
  quitReasonOther?: string;
  /**
   * 决定戒烟日期
   */
  quitDate?: string;
  /**
   * 引发吸烟原因1
   */
  smokingReason1?: string;
  /**
   * 引发吸烟原因2
   */
  smokingReason2?: string;
  /**
   * 引发吸烟原因3
   */
  smokingReason3?: string;
  /**
   * 引发吸烟原因4
   */
  smokingReason4?: string;
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
 * 接口 戒烟处方添加 的 **返回类型**
 *
 */
/**
 * 戒烟处方添加响应
 */
export interface PostPatientQuitSmokingPlanaddResponse {
  /**
   * 逻辑主键id
   */
  quitSmokingPlanId?: string;
}

/**
 * 接口 戒烟处方添加 的 **请求函数**
 *
 */
export const postPatientQuitSmokingPlanadd = (data?: PostPatientQuitSmokingPlanaddRequest) => {
  return request.post<PostPatientQuitSmokingPlanaddRequest, PostPatientQuitSmokingPlanaddResponse>(
    '/patient/quitSmokingPlan/add',
    {
      data
    }
  );
};

/**
 * 接口 戒烟处方详情 的 **请求类型**
 *
 */
/**
 * 戒烟处方详情参数
 */
export interface PostPatientQuitSmokingPlandetailRequest {
  /**
   * 戒烟处方di
   */
  quitSmokingPlanId?: string;
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
 * 接口 戒烟处方详情 的 **返回类型**
 *
 */
/**
 * 戒烟处方详情响应
 */
export interface PostPatientQuitSmokingPlandetailResponse {
  /**
   * 患者id
   */
  patientId?: number;
  /**
   * 戒烟原因
   * <ul>
   * <li>1 已存在健康问题</li>
   * <li>2 担心吸烟会影响自己的健康</li>
   * <li>3 影响家人的健康</li>
   * <li>4 家人及朋友要求</li>
   * <li>5 全国全面戒烟了，不得不戒烟</li>
   * <li>6 其他</li>
   * </ul>
   */
  quitReason?: string;
  /**
   * 戒烟原因其他
   */
  quitReasonOther?: string;
  /**
   * 决定戒烟日期
   */
  quitDate?: string;
  /**
   * 引发吸烟原因1
   */
  smokingReason1?: string;
  /**
   * 引发吸烟原因2
   */
  smokingReason2?: string;
  /**
   * 引发吸烟原因3
   */
  smokingReason3?: string;
  /**
   * 引发吸烟原因4
   */
  smokingReason4?: string;
}

/**
 * 接口 戒烟处方详情 的 **请求函数**
 *
 */
export const postPatientQuitSmokingPlandetail = (data?: PostPatientQuitSmokingPlandetailRequest) => {
  return request.post<PostPatientQuitSmokingPlandetailRequest, PostPatientQuitSmokingPlandetailResponse>(
    '/patient/quitSmokingPlan/detail',
    {
      data
    }
  );
};

/**
 * 接口 戒烟处方列表 的 **请求类型**
 *
 */
/**
 * 戒烟处方列表参数
 */
export interface PostPatientQuitSmokingPlanlistRequest {
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
 * 接口 戒烟处方列表 的 **返回类型**
 *
 */
/**
 * 戒烟处方列表响应
 */
export interface PostPatientQuitSmokingPlanlistResponse {
  content?: {
    /**
     * 操作人
     */
    opName?: string;
    /**
     * 戒烟日期
     */
    quitDate?: string;
    /**
     * 记录时间
     */
    xCreateTime?: string;
  }[];
}

/**
 * 接口 戒烟处方列表 的 **请求函数**
 *
 */
export const postPatientQuitSmokingPlanlist = (data?: PostPatientQuitSmokingPlanlistRequest) => {
  return request.post<PostPatientQuitSmokingPlanlistRequest, PostPatientQuitSmokingPlanlistResponse>(
    '/patient/quitSmokingPlan/list',
    {
      data
    }
  );
};

/**
 * 接口 居民签约 的 **请求类型**
 *
 */
/**
 * 居民签约参数
 */
export interface PostPatientSignedaddRequest {
  /**
   * 是否未成年
   */
  isNonage?: number;
  /**
   * 签约类型
   * <ui>
   * <li>1身份证</li>
   * <li>2电子健康卡</li>
   * <li>3其它</li>
   * </ui>
   */
  signType?: number;
  /**
   * 姓名
   */
  name?: string;
  /**
   * 性别
   * <ul>
   * <li>1男</li>
   * <li>1女</li>
   * </ul>
   */
  gender?: number;
  /**
   * 出生日期
   */
  birthdate?: string;
  /**
   * 民族
   */
  nation?: string;
  /**
   * 证件号码
   */
  idCard?: string;
  /**
   * 本人电话
   */
  contactMobile?: string;
  /**
   * 户籍地址
   */
  registerAddress?: string;
  /**
   * 现住地址(省)
   */
  province?: string;
  /**
   * 省份文案
   */
  provinceText?: string;
  /**
   * 现住地址(市)
   */
  city?: string;
  /**
   * 城市文案
   */
  cityText?: string;
  /**
   * 现住地址(区县)
   */
  county?: string;
  /**
   * 区县文案
   */
  countyText?: string;
  /**
   * 地址详情
   */
  addressDetail?: string;
  /**
   * 是否糖尿病
   * <ul>
   * <li>1是</li>
   * <li>2不是</li>
   * </ul>
   */
  isDiabetes?: number;
  /**
   * 是否高血压
   * <ul>
   * <li>1是</li>
   * <li>2不是</li>
   * </ul>
   */
  isHypertension?: number;
  /**
   * 签约医生id
   */
  doctorUserId?: string;
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
 * 接口 居民签约 的 **返回类型**
 *
 */
/**
 * 居民签约响应
 */
export interface PostPatientSignedaddResponse {
  /**
   * 患者id
   */
  patientId?: string;
}

/**
 * 接口 居民签约 的 **请求函数**
 *
 */
export const postPatientSignedadd = (data?: PostPatientSignedaddRequest) => {
  return request.post<PostPatientSignedaddRequest, PostPatientSignedaddResponse>('/patient/signed/add', {
    data
  });
};

/**
 * 接口 患者档案基本信息 的 **请求类型**
 *
 */
/**
 * 患者档案基本信息参数
 */
export interface PostPatientSignedarchiveBaseInfoRequest {
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
 * 接口 患者档案基本信息 的 **返回类型**
 *
 */
/**
 * 患者档案基本信息响应
 */
export interface PostPatientSignedarchiveBaseInfoResponse {
  /**
   * 姓名
   */
  name?: string;
  /**
   * 性别
   * <ul>
   * <li>1男</li>
   * <li>2女</li>
   * </ul>
   */
  gender?: number;
  /**
   * 出生日期
   */
  birthdate?: string;
  /**
   * 患者id
   */
  patientId?: string;
  /**
   * 国籍
   */
  country?: string;
  /**
   * 证件类型  01身份证
   */
  certType?: string;
  /**
   * 证件号
   */
  idCard?: string;
  /**
   * 籍贯
   */
  nativePlace?: string;
  /**
   * 联系电话
   */
  contactMobile?: string;
  /**
   * 文化程度
   */
  education?: number;
  /**
   * 社保号
   */
  ssn?: string;
  /**
   * 联系人1
   */
  firstContactName?: string;
  /**
   * 联系人1电话
   */
  firstContactMobile?: string;
  /**
   * 农合编号
   */
  ncmsNumber?: string;
  /**
   * 户籍类型
   */
  registerType?: number;
  /**
   * 民族
   */
  nation?: string;
  /**
   * 家庭电话
   */
  telPhone?: string;
  /**
   * 年收入
   */
  annualIncome?: string;
  /**
   * ABO血型
   */
  aboBloodType?: number;
  /**
   * RH血型
   */
  rhBloodType?: number;
  /**
   * qq号
   */
  qq?: string;
  /**
   * 电子邮箱
   */
  email?: string;
  /**
   * 职业
   */
  job?: number;
  /**
   * 婚姻状况
   */
  marriage?: number;
  /**
   * 联系人2
   */
  twoContactName?: string;
  /**
   * 联系人2电话
   */
  twoContactMobile?: string;
  /**
   * 医疗费用支付方式
   */
  medicalFeePayType?: number;
  /**
   * 居委会
   */
  townGov?: number;
  /**
   * 常住类型 1户籍 2非户籍
   */
  residentType?: number;
  /**
   * 是否高血压 1是 2不是
   */
  haveHypertension?: number;
  /**
   * 是否糖尿病 1是 2不是
   */
  haveDiabetes?: number;
  /**
   * 省份
   */
  province?: number;
  /**
   * 城市
   */
  city?: number;
  /**
   * 区县
   */
  county?: number;
  /**
   * 户籍地址
   */
  registerAddress?: string;
  /**
   * 是否门特
   */
  isSpecialOutpatient?: number;
  /**
   * 医疗保险类别
   */
  medicalInsuranceType?: number;
  /**
   * 生活环境
   */
  liveEnvironment?: {}[];
  /**
   * 头像
   */
  avatar?: string;
  /**
   * 工作单位
   */
  workUnit?: string;
  /**
   * 备注
   */
  remark?: string;
  /**
   * 档案初次完成时间
   */
  archiveFirstFinishDate?: string;
  /**
   * 邮政编码
   */
  zip?: string;
  /**
   * 现住地址
   */
  nowAddress?: string;
  /**
   * 居住方式
   */
  dwellType?: number;
  /**
   * 门特申请日期
   */
  specialApplyDate?: string;
  /**
   * 门特入档时间
   */
  specialArchiveTime?: string;
  /**
   * 门特是否本机构 1是 2不是
   */
  specialSelfOrgan?: number;
}

/**
 * 接口 患者档案基本信息 的 **请求函数**
 *
 */
export const postPatientSignedarchiveBaseInfo = (data?: PostPatientSignedarchiveBaseInfoRequest) => {
  return request.post<PostPatientSignedarchiveBaseInfoRequest, PostPatientSignedarchiveBaseInfoResponse>(
    '/patient/signed/archiveBaseInfo',
    {
      data
    }
  );
};

/**
 * 接口 服务包购买记录 的 **请求类型**
 *
 */
/**
 * 服务包购买记录参数
 */
export interface PostPatientSignedbuyRecordRequest {
  /**
   * 患者id
   */
  patientId: string;
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
 * 接口 服务包购买记录 的 **返回类型**
 *
 */
/**
 * 服务包购买记录响应
 */
export interface PostPatientSignedbuyRecordResponse {
  content?: {
    /**
     * 签约团队
     */
    signTeamName?: string;
    /**
     * 签约医生
     */
    signDoctorName?: string;
    /**
     * 签约日期
     */
    signDate?: string;
    packages?: {
      /**
       * 包类型
       */
      type?: string;
      /**
       * 包名
       */
      name?: string;
    }[];
  }[];
}

/**
 * 接口 服务包购买记录 的 **请求函数**
 *
 */
export const postPatientSignedbuyRecord = (data?: PostPatientSignedbuyRecordRequest) => {
  return request.post<PostPatientSignedbuyRecordRequest, PostPatientSignedbuyRecordResponse>(
    '/patient/signed/buyRecord',
    {
      data
    }
  );
};

/**
 * 接口 患者列表 的 **请求类型**
 *
 */
/**
 * 患者列表参数
 */
export interface PostPatientSignedlistRequest {
  /**
   * 签约医生id
   */
  doctorUserId?: string;
  /**
   * 团队id
   */
  teamId?: string;
  /**
   * 姓名
   */
  name?: string;
  /**
   * 全局查询
   * <ul>
   * <li>1. 使用</li>
   * <li>2. 不使用</li>
   * </ul>
   */
  globalQuery?: number;
  /**
   * 服务包分类
   * <ul>
   * <li>1：A包</li>
   * <li>2：B包</li>
   * <li>3：C包 </li>
   * <li>4：协作包</li>
   * </ul>
   */
  packageCategory?: number;
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
 * 接口 患者列表 的 **返回类型**
 *
 */
/**
 * 患者列表响应
 */
export interface PostPatientSignedlistResponse {
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
     * 服务包
     */
    packages?: string[];
    /**
     * 患者id
     */
    patientId?: string;
    /**
     * 患者姓名
     */
    name?: string;
    /**
     * 年龄
     */
    age?: number;
    /**
     * 证件类型
     */
    certTypeText?: string;
    idCard?: string;
    /**
     * 出生日期
     */
    birthdate?: string;
    /**
     * 是否高血压
     * <ul>
     * <li>1是</li>
     * <li>2不是</li>
     * </ul>
     */
    haveHypertension?: number;
    /**
     * 是否糖尿病
     * <ul>
     * <li>1是</li>
     * <li>2不是</li>
     * </ul>
     */
    haveDiabetes?: number;
    /**
     * 联系方式
     */
    contactMobile?: string;
    /**
     * 地址
     */
    address?: string;
    /**
     * 性别
     */
    genderText?: string;
    /**
     * 签约医生
     */
    signedDocName?: string;
    /**
     * 签约日期
     */
    signedDate?: string;
    /**
     * 签约团队
     */
    signedTeamName?: string;
    /**
     * 是否门特
     * <ul>
     * <li>1是</li>
     * <li>2不是</li>
     * </ul>
     */
    isSpecialOutpatient?: number;
    /**
     * 资料完成百分比
     */
    completePercent?: number;
    /**
     * 是否本机构门特
     */
    specialSelfOrgan?: number;
    /**
     * 糖尿病评估
     */
    diabetesAssessText?: string;
    /**
     * 高血压评估
     */
    hypertensionAssessText?: string;
    /**
     * 老年人评估
     */
    oldManAssessText?: string;
    /**
     * 上次评估小结时间
     */
    lastTimeAssessDate?: string;
  }[];
}

/**
 * 接口 患者列表 的 **请求函数**
 *
 */
export const postPatientSignedlist = (data?: PostPatientSignedlistRequest) => {
  return request.post<PostPatientSignedlistRequest, PostPatientSignedlistResponse>('/patient/signed/list', {
    data
  });
};

/**
 * 接口 患者群发短信 的 **请求类型**
 *
 */
/**
 * 患者群发短信参数
 */
export interface PostPatientSignedmassSmsRequest {
  /**
   * 患者id集合
   */
  patientIds: string[];
  /**
   * 内容1
   */
  content1?: string;
  /**
   * 内容2
   */
  content2?: string;
  /**
   * 内容3
   */
  content3?: string;
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
 * 接口 患者群发短信 的 **返回类型**
 *
 */
/**
 * 患者群发短信响应
 */
export interface PostPatientSignedmassSmsResponse {
  /**
   * 发送的患者数量
   */
  count?: number;
}

/**
 * 接口 患者群发短信 的 **请求函数**
 *
 */
export const postPatientSignedmassSms = (data?: PostPatientSignedmassSmsRequest) => {
  return request.post<PostPatientSignedmassSmsRequest, PostPatientSignedmassSmsResponse>('/patient/signed/massSMS', {
    data
  });
};

/**
 * 接口 更新档案基本信息 的 **请求类型**
 *
 */
/**
 * 更新档案基本信息参数
 */
export interface PostPatientSignedupdateArchiveBaseInfoRequest {
  /**
   * 姓名
   */
  name: string;
  /**
   * 性别
   * <ul>
   * <li>1男</li>
   * <li>2女</li>
   * </ul>
   */
  gender: number;
  /**
   * 出生日期
   */
  birthdate: string;
  /**
   * 患者id
   */
  patientId: string;
  /**
   * 国籍
   */
  country?: string;
  /**
   * 证件类型  01 身份证
   */
  certType?: string;
  /**
   * 籍贯
   */
  nativePlace?: string;
  /**
   * 联系电话
   */
  contactMobile: string;
  /**
   * 文化程度
   */
  education?: number;
  /**
   * 社保号
   */
  ssn?: string;
  /**
   * 联系人1
   */
  firstContactName?: string;
  /**
   * 联系人1电话
   */
  firstContactMobile?: string;
  /**
   * 农合编号
   */
  ncmsNumber?: string;
  /**
   * 户籍类型
   */
  registerType?: number;
  /**
   * 民族
   */
  nation?: string;
  /**
   * 家庭电话
   */
  telPhone?: string;
  /**
   * 年收入
   */
  annualIncome?: string;
  /**
   * ABO血型
   */
  aboBloodType?: number;
  /**
   * RH血型
   */
  rhBloodType?: number;
  /**
   * qq号
   */
  qq?: string;
  /**
   * 电子邮箱
   */
  email?: string;
  /**
   * 职业
   */
  job?: number;
  /**
   * 婚姻状况
   */
  marriage?: number;
  /**
   * 联系人2
   */
  twoContactName?: string;
  /**
   * 联系人2电话
   */
  twoContactMobile?: string;
  /**
   * 医疗费用支付方式
   */
  medicalFeePayType?: number;
  /**
   * 居委会
   */
  townGov?: number;
  /**
   * 常住类型 1户籍 2非户籍
   */
  residentType?: number;
  /**
   * 是否高血压 1是 2不是
   */
  haveHypertension?: number;
  /**
   * 是否糖尿病 1是 2不是
   */
  haveDiabetes?: number;
  /**
   * 省份
   */
  province?: number;
  /**
   * 城市
   */
  city?: number;
  /**
   * 区县
   */
  county?: number;
  /**
   * 户籍地址
   */
  registerAddress?: string;
  /**
   * 是否门特
   */
  isSpecialOutpatient?: number;
  /**
   * 医疗保险类别
   */
  medicalInsuranceType?: number;
  /**
   * 生活环境 json 字符串
   */
  liveEnvironment?: string;
  /**
   * 头像
   */
  avatar?: string;
  /**
   * 工作单位
   */
  workUnit?: string;
  /**
   * 备注
   */
  remark?: string;
  /**
   * 档案初次完成时间
   */
  archiveFirstFinishDate?: string;
  /**
   * 邮政编码
   */
  zip?: string;
  /**
   * 现住地址
   */
  nowAddress?: string;
  /**
   * 居住方式
   */
  dwellType?: number;
  /**
   * 省份文本
   */
  provinceText?: string;
  /**
   * 城市文本
   */
  cityText?: string;
  /**
   * 区县文本
   */
  countyText?: string;
  /**
   * 门特申请日期
   */
  specialApplyDate?: string;
  /**
   * 门特入档时间
   */
  specialArchiveTime?: string;
  /**
   * 门特是否本机构 1是 2不是
   */
  specialSelfOrgan?: number;
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
 * 接口 更新档案基本信息 的 **返回类型**
 *
 */
/**
 * 更新档案基本信息响应
 */
export interface PostPatientSignedupdateArchiveBaseInfoResponse {}

/**
 * 接口 更新档案基本信息 的 **请求函数**
 *
 */
export const postPatientSignedupdateArchiveBaseInfo = (data?: PostPatientSignedupdateArchiveBaseInfoRequest) => {
  return request.post<PostPatientSignedupdateArchiveBaseInfoRequest, PostPatientSignedupdateArchiveBaseInfoResponse>(
    '/patient/signed/updateArchiveBaseInfo',
    {
      data
    }
  );
};

/**
 * 接口 减重处方详情 的 **请求类型**
 *
 */
/**
 * 减重处方详情参数
 */
export interface PostPatientWeightPlandetailRequest {
  /**
   * 减重处方id
   */
  weightPlanId?: string;
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
 * 接口 减重处方详情 的 **返回类型**
 *
 */
/**
 * 减重处方详情响应
 */
export interface PostPatientWeightPlandetailResponse {
  /**
   * 减重处方id
   */
  weightPlanId?: string;
  /**
   * 患者id
   */
  patientId?: string;
  /**
   * 管理目标
   */
  target?: string;
  /**
   * 体重状态
   * <span>1超重 2轻度肥胖 3中度肥胖 4重度肥胖</span>
   */
  weightStatus?: number;
  /**
   * 腰围状态 1偏胖 2肥胖
   */
  waistStatus?: number;
}

/**
 * 接口 减重处方详情 的 **请求函数**
 *
 */
export const postPatientWeightPlandetail = (data?: PostPatientWeightPlandetailRequest) => {
  return request.post<PostPatientWeightPlandetailRequest, PostPatientWeightPlandetailResponse>(
    '/patient/weightPlan/detail',
    {
      data
    }
  );
};

/**
 * 接口 减重处方列表 的 **请求类型**
 *
 */
/**
 * 减重处方列表参数
 */
export interface PostPatientWeightPlanlistRequest {
  /**
   * 患者id
   */
  patientId: string;
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
 * 接口 减重处方列表 的 **返回类型**
 *
 */
/**
 * 减重处方列表响应
 */
export interface PostPatientWeightPlanlistResponse {
  content?: {
    /**
     * 操作人
     */
    opName?: string;
    /**
     * 目标
     */
    target?: string;
    /**
     * 记录时间
     */
    xCreateTime?: string;
  }[];
}

/**
 * 接口 减重处方列表 的 **请求函数**
 *
 */
export const postPatientWeightPlanlist = (data?: PostPatientWeightPlanlistRequest) => {
  return request.post<PostPatientWeightPlanlistRequest, PostPatientWeightPlanlistResponse>('/patient/weightPlan/list', {
    data
  });
};

/**
 * 接口 服务包列表 的 **请求类型**
 *
 */
/**
 * 服务包列表参数
 */
export interface PostServicePackageSignedlistRequest {
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
 * 接口 服务包列表 的 **返回类型**
 *
 */
/**
 * 服务包列表响应
 */
export interface PostServicePackageSignedlistResponse {
  items?: {
    /**
     * 包id
     */
    packageId?: string;
    /**
     * 包名
     */
    name?: string;
  }[];
}

/**
 * 接口 服务包列表 的 **请求函数**
 *
 */
export const postServicePackageSignedlist = (data?: PostServicePackageSignedlistRequest) => {
  return request.post<PostServicePackageSignedlistRequest, PostServicePackageSignedlistResponse>(
    '/servicePackage/signed/list',
    {
      data
    }
  );
};

/**
 * 接口 医生用户详情 的 **请求类型**
 *
 */
/**
 * 医生用户详情参数
 */
export interface PostUserSigneddetailRequest {
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
 * 接口 医生用户详情 的 **返回类型**
 *
 */
/**
 * 医生用户详情响应
 */
export interface PostUserSigneddetailResponse {
  /**
   * 姓名
   */
  name?: string;
  /**
   * 头像
   */
  avatar?: string;
  /**
   * 执照
   */
  license?: string;
  /**
   * 性别 1 男 2 女
   */
  sex?: number;
  /**
   * 证件类型 1 身份证
   */
  certType?: number;
  /**
   * 证件号码
   */
  certNo?: string;
  /**
   * 手机号
   */
  phone?: string;
  /**
   * 职称ID
   */
  professionalTitleId?: string;
  /**
   * 职称名字
   */
  professionalTitleName?: string;
  /**
   * 简介
   */
  brief?: string;
  /**
   * 擅长
   */
  speciality?: string;
  /**
   * 生日
   */
  birthday?: string;
  /**
   * 用户id
   */
  userId?: string;
}

/**
 * 接口 医生用户详情 的 **请求函数**
 *
 */
export const postUserSigneddetail = (data?: PostUserSigneddetailRequest) => {
  return request.post<PostUserSigneddetailRequest, PostUserSigneddetailResponse>('/user/signed/detail', {
    data
  });
};

/**
 * 接口 医生列表 的 **请求类型**
 *
 */
/**
 * 医生列表参数
 */
export interface PostUserSigneddoctorListRequest {
  teamId?: string;
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
 * 接口 医生列表 的 **返回类型**
 *
 */
/**
 * 医生列表响应
 */
export interface PostUserSigneddoctorListResponse {
  items?: {
    /**
     * 医生用户id
     */
    userId?: string;
    name?: string;
  }[];
}

/**
 * 接口 医生列表 的 **请求函数**
 *
 */
export const postUserSigneddoctorList = (data?: PostUserSigneddoctorListRequest) => {
  return request.post<PostUserSigneddoctorListRequest, PostUserSigneddoctorListResponse>('/user/signed/doctorList', {
    data
  });
};
