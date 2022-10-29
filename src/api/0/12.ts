/**
 * Created By api-typescript
 * https://alidocs.dingtalk.com/i/team/dN0G7AD82xAq4XWY/docs/dN0G78qlBL1o7zWY#
 */

import request from '../request';

/**
 * 接口 患者信息 的 **请求类型**
 *
 */
/**
 * 患者信息参数
 */
export interface PostExternalBoneMassPatientinfoRequest {
  /**
   * 身份证号
   */
  id?: string;
  /**
   * 设备码
   */
  DeviceCode?: string;
  /**
   * 机构码
   */
  OrganCode?: string;
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
 * 接口 患者信息 的 **返回类型**
 *
 */
/**
 * 患者信息响应
 */
export interface PostExternalBoneMassPatientinfoResponse {
  /**
   * 姓名
   */
  姓名?: string;
  /**
   * 出生日期
   */
  出生日期?: string;
  /**
   * 性别
   */
  性别?: string;
  /**
   * 身高
   */
  身高?: string;
  /**
   * 体重
   */
  体重?: string;
}

/**
 * 接口 患者信息 的 **请求函数**
 *
 */
export const postExternalBoneMassPatientinfo = (data?: PostExternalBoneMassPatientinfoRequest) => {
  return request.post<PostExternalBoneMassPatientinfoRequest, PostExternalBoneMassPatientinfoResponse>(
    '/externalBoneMass/patient/info',
    {
      data
    }
  );
};

/**
 * 接口 上传图片 的 **请求类型**
 *
 */
/**
 * 上传图片参数
 */
export interface PostExternalBoneMassPatientuploadImagesRequest {
  /**
   * 身份证号
   */
  id?: string;
  /**
   * json 字符串
   */
  json?: string;
  /**
   * 机构编码
   */
  OrganCode?: string;
  /**
   * 设备编码
   */
  DeviceCode?: string;
  /**
   * ip地址
   */
  ClientIp?: string;
  /**
   * 检查ID
   */
  InspectionId?: string;
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
 * 接口 上传图片 的 **返回类型**
 *
 */
/**
 * 上传图片响应
 */
export interface PostExternalBoneMassPatientuploadImagesResponse {
  /**
   * 图片id集合
   */
  imageIds?: string[];
}

/**
 * 接口 上传图片 的 **请求函数**
 *
 */
export const postExternalBoneMassPatientuploadImages = (data?: PostExternalBoneMassPatientuploadImagesRequest) => {
  return request.post<PostExternalBoneMassPatientuploadImagesRequest, PostExternalBoneMassPatientuploadImagesResponse>(
    '/externalBoneMass/patient/uploadImages',
    {
      data
    }
  );
};

/**
 * 接口 骨量档案详情 的 **请求类型**
 *
 */
/**
 * 骨量档案详情参数
 */
export interface PostPatientArchiveboneDetailRequest {
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
 * 接口 骨量档案详情 的 **返回类型**
 *
 */
/**
 * 骨量档案详情响应
 */
export interface PostPatientArchiveboneDetailResponse {
  /**
   * 患者ID
   */
  patientId?: number;
  /**
   * 姓名
   */
  name?: string;
  /**
   * 头像地址
   */
  headImg?: string;
  /**
   * 性别
   */
  gender?: {
    /**
     * 选项ID
     */
    id?: string;
    /**
     * 选项描述
     */
    desc?: string;
  };
  /**
   * 出生日期
   */
  birthdate?: string;
  /**
   * 年龄
   */
  age?: number;
  /**
   * 证件类型
   */
  certType?: {
    /**
     * 选项ID
     */
    id?: string;
    /**
     * 选项描述
     */
    desc?: string;
  };
  /**
   * 证件号码
   */
  idCard?: string;
  /**
   * 国家
   */
  country?: {
    /**
     * 选项ID
     */
    id?: string;
    /**
     * 选项描述
     */
    desc?: string;
  };
  /**
   * 民族
   */
  nation?: {
    /**
     * 选项ID
     */
    id?: string;
    /**
     * 选项描述
     */
    desc?: string;
  };
  /**
   * 现居地址(省)
   */
  province?: {
    /**
     * 选项ID
     */
    id?: string;
    /**
     * 选项描述
     */
    desc?: string;
  };
  /**
   * 现居地址(市)
   */
  city?: {
    /**
     * 选项ID
     */
    id?: string;
    /**
     * 选项描述
     */
    desc?: string;
  };
  /**
   * 现居地(区县)
   */
  county?: {
    /**
     * 选项ID
     */
    id?: string;
    /**
     * 选项描述
     */
    desc?: string;
  };
  /**
   * 详细地址
   */
  address?: string;
  /**
   * 本人电话
   */
  contactMobile?: string;
  /**
   * 文化程度
   */
  education?: {
    /**
     * 选项ID
     */
    id?: string;
    /**
     * 选项描述
     */
    desc?: string;
  };
  /**
   * 婚姻状况
   */
  marriage?: {
    /**
     * 选项ID
     */
    id?: string;
    /**
     * 选项描述
     */
    desc?: string;
  };
  /**
   * 腰围
   */
  waistline?: string;
  /**
   * 身高
   */
  height?: string;
  /**
   * 体重
   */
  weight?: string;
  /**
   * bmi
   */
  bmi?: string;
  /**
   * 紧急联系人
   */
  emergencyContacts?: {
    /**
     * 姓名
     */
    name?: string;
    /**
     * 电话
     */
    phone?: string;
  }[];
  /**
   * question
   */
  question?: string[];
}

/**
 * 接口 骨量档案详情 的 **请求函数**
 *
 */
export const postPatientArchiveboneDetail = (data?: PostPatientArchiveboneDetailRequest) => {
  return request.post<PostPatientArchiveboneDetailRequest, PostPatientArchiveboneDetailResponse>(
    '/patient/archive/boneDetail',
    {
      data
    }
  );
};

/**
 * 接口 骨量档案-保存 的 **请求类型**
 *
 */
/**
 * 骨量档案-保存参数
 */
export interface PostPatientArchiveboneSaveRequest {
  /**
   * 患者ID
   */
  patientId?: number;
  /**
   * 姓名
   */
  name?: string;
  /**
   * 性别
   */
  gender?: number;
  /**
   * 出生日期
   */
  birthdate?: string;
  /**
   * 证件类型
   */
  certType?: string;
  /**
   * 证件号码
   */
  idCard?: string;
  /**
   * 国家
   */
  country?: string;
  /**
   * 民族
   */
  nation?: string;
  /**
   * 现居地址(省)
   */
  province?: string;
  /**
   * 现居地址(市)
   */
  city?: string;
  /**
   * 现居地(区县)
   */
  county?: string;
  /**
   * 详细地址
   */
  address?: string;
  /**
   * 本人电话
   */
  contactMobile?: string;
  /**
   * 文化程度
   */
  education?: string;
  /**
   * 婚姻状况
   */
  marriage?: string;
  /**
   * 腰围
   */
  waistline?: string;
  /**
   * 身高
   */
  height?: string;
  /**
   * 体重
   */
  weight?: string;
  /**
   * bmi
   */
  bmi?: string;
  /**
   * 紧急联系人
   */
  emergencyContacts?: {
    /**
     * 姓名
     */
    name?: string;
    /**
     * 电话
     */
    phone?: string;
  }[];
  /**
   * boneIllnessHistory
   */
  boneIllnessHistory?: string;
  /**
   * boneFamilyHistory
   */
  boneFamilyHistory?: string;
  /**
   * bonePersonalHistory
   */
  bonePersonalHistory?: string;
  /**
   * boneMedicineHistory
   */
  boneMedicineHistory?: string;
  /**
   * boneOther
   */
  boneOther?: string;
  /**
   * boneWoman
   */
  boneWoman?: string;
  /**
   * boneMan
   */
  boneMan?: string;
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
 * 接口 骨量档案-保存 的 **返回类型**
 *
 */
/**
 * 骨量档案-保存响应
 */
export interface PostPatientArchiveboneSaveResponse {
  /**
   * 患者ID
   */
  patientId?: number;
}

/**
 * 接口 骨量档案-保存 的 **请求函数**
 *
 */
export const postPatientArchiveboneSave = (data?: PostPatientArchiveboneSaveRequest) => {
  return request.post<PostPatientArchiveboneSaveRequest, PostPatientArchiveboneSaveResponse>(
    '/patient/Archive/boneSave',
    {
      data
    }
  );
};

/**
 * 接口 添加 的 **请求类型**
 *
 */
/**
 * 患者配置添加参数
 */
export interface PostPatientConfigaddRequest {
  /**
   * 患者id
   */
  patientId: number;
  /**
   * 配置中文名
   */
  name: string;
  /**
   * 配置key名
   */
  key: string;
  /**
   * 配置值
   */
  value: string;
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
 * 接口 添加 的 **返回类型**
 *
 */
/**
 * 处理成功，通用响应对象
 */
export interface PostPatientConfigaddResponse {}

/**
 * 接口 添加 的 **请求函数**
 *
 */
export const postPatientConfigadd = (data?: PostPatientConfigaddRequest) => {
  return request.post<PostPatientConfigaddRequest, PostPatientConfigaddResponse>('/patient/config/add', {
    data
  });
};

/**
 * 接口 患者标签列表 的 **请求类型**
 *
 */
/**
 * 患者标签列表参数
 */
export interface PostPatientLabellistRequest {
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
 * 接口 患者标签列表 的 **返回类型**
 *
 */
/**
 * 患者标签列表响应
 */
export interface PostPatientLabellistResponse {
  content?: {
    /**
     * 标签id
     */
    labelId?: string;
    /**
     * 标签名
     */
    name?: string;
  }[];
}

/**
 * 接口 患者标签列表 的 **请求函数**
 *
 */
export const postPatientLabellist = (data?: PostPatientLabellistRequest) => {
  return request.post<PostPatientLabellistRequest, PostPatientLabellistResponse>('/patient/label/list', {
    data
  });
};

/**
 * 接口 操作患者记录列表 的 **请求类型**
 *
 */
/**
 * 操作患者记录列表参数
 */
export interface PostPatientOperatingrecordListRequest {
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
 * 接口 操作患者记录列表 的 **返回类型**
 *
 */
/**
 * 操作患者记录列表响应
 */
export interface PostPatientOperatingrecordListResponse {
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
     * 年龄
     */
    age?: number;
  }[];
}

/**
 * 接口 操作患者记录列表 的 **请求函数**
 *
 */
export const postPatientOperatingrecordList = (data?: PostPatientOperatingrecordListRequest) => {
  return request.post<PostPatientOperatingrecordListRequest, PostPatientOperatingrecordListResponse>(
    '/patient/operating/recordList',
    {
      data
    }
  );
};

/**
 * 接口 打标签 的 **请求类型**
 *
 */
/**
 * 打标签参数
 */
export interface PostPatientPatientaddLabelRequest {
  /**
   * 患者IDs
   */
  patientIds?: string[];
  /**
   * 标签IDs
   */
  labelIds?: string[];
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
 * 接口 打标签 的 **返回类型**
 *
 */
/**
 * 打标签响应
 */
export interface PostPatientPatientaddLabelResponse {
  /**
   * 成功的条数
   */
  count?: number;
}

/**
 * 接口 打标签 的 **请求函数**
 *
 */
export const postPatientPatientaddLabel = (data?: PostPatientPatientaddLabelRequest) => {
  return request.post<PostPatientPatientaddLabelRequest, PostPatientPatientaddLabelResponse>(
    '/patient/patient/addLabel',
    {
      data
    }
  );
};

/**
 * 接口 为患者分配医生团队 的 **请求类型**
 *
 */
/**
 * 添加参数
 */
export interface PostPatientPatientaddTeamRequest {
  /**
   * 患者IDs
   */
  patientIds?: string[];
  /**
   * 机构ID
   */
  organId?: number;
  /**
   * 团队IDs
   */
  teamIds?: string[];
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
 * 接口 为患者分配医生团队 的 **返回类型**
 *
 */
/**
 * 患者添加用户团队响应对象
 */
export interface PostPatientPatientaddTeamResponse {
  /**
   * 成功的条数
   */
  count?: number;
}

/**
 * 接口 为患者分配医生团队 的 **请求函数**
 *
 */
export const postPatientPatientaddTeam = (data?: PostPatientPatientaddTeamRequest) => {
  return request.post<PostPatientPatientaddTeamRequest, PostPatientPatientaddTeamResponse>('/patient/patient/addTeam', {
    data
  });
};

/**
 * 接口 数据分析 的 **请求类型**
 *
 */
/**
 * 数据分析参数
 */
export interface PostPatientPatientanalysisRequest {
  /**
   * 患者ID
   */
  patientId?: string;
  /**
   * 指标ID
   */
  indicatorId?: string;
  /**
   * 开始时间
   */
  startTime?: string;
  /**
   * 结束时间
   */
  endTime?: string;
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
 * 接口 数据分析 的 **返回类型**
 *
 */
/**
 * 数据分析响应
 */
export interface PostPatientPatientanalysisResponse {
  /**
   * 内容
   */
  content?: {
    /**
     * 时间
     */
    xCreateTime?: string;
    /**
     * 测试时间
     */
    testDate?: string;
    /**
     * 时间搓
     */
    createTime?: number;
    /**
     * 值
     */
    value?: number;
  }[];
}

/**
 * 接口 数据分析 的 **请求函数**
 *
 */
export const postPatientPatientanalysis = (data?: PostPatientPatientanalysisRequest) => {
  return request.post<PostPatientPatientanalysisRequest, PostPatientPatientanalysisResponse>(
    '/patient/patient/analysis',
    {
      data
    }
  );
};

/**
 * 接口 分析指标列表 的 **请求类型**
 *
 */
/**
 * 分析指标列表参数
 */
export interface PostPatientPatientanalysisIndicatorListRequest {
  /**
   * 患者ID
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
 * 接口 分析指标列表 的 **返回类型**
 *
 */
/**
 * 分析指标列表响应
 */
export interface PostPatientPatientanalysisIndicatorListResponse {
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
     * 指标名字
     */
    name?: string;
    /**
     * 单位
     */
    unit?: string;
  }[];
}

/**
 * 接口 分析指标列表 的 **请求函数**
 *
 */
export const postPatientPatientanalysisIndicatorList = (data?: PostPatientPatientanalysisIndicatorListRequest) => {
  return request.post<PostPatientPatientanalysisIndicatorListRequest, PostPatientPatientanalysisIndicatorListResponse>(
    '/patient/patient/analysisIndicatorList',
    {
      data
    }
  );
};

/**
 * 接口 文章推荐 的 **请求类型**
 *
 */
/**
 * 文章推荐参数
 */
export interface PostPatientPatientarticleRecommendRequest {
  /**
   * 患者ID
   */
  patientIds?: string[];
  /**
   * 文章IDs
   */
  articleIds: string[];
  /**
   * 咨询记录id
   */
  inquiryRecordIds?: string[];
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
 * 接口 文章推荐 的 **返回类型**
 *
 */
/**
 * 文章推荐响应
 */
export interface PostPatientPatientarticleRecommendResponse {
  /**
   * 条数
   */
  count?: number;
  /**
   * im消息体(当请求参数 sendIM 为 2 的时候，此字段有值)
   */
  imMessages?: string[];
}

/**
 * 接口 文章推荐 的 **请求函数**
 *
 */
export const postPatientPatientarticleRecommend = (data?: PostPatientPatientarticleRecommendRequest) => {
  return request.post<PostPatientPatientarticleRecommendRequest, PostPatientPatientarticleRecommendResponse>(
    '/patient/patient/articleRecommend',
    {
      data
    }
  );
};

/**
 * 接口 查询患者列表 的 **请求类型**
 *
 */
/**
 * 查询患者列表参数
 */
export interface PostPatientPatientbaseListRequest {
  /**
   * 关键词
   */
  keyword?: string;
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
 * 接口 查询患者列表 的 **返回类型**
 *
 */
/**
 * 查询患者列表响应
 */
export interface PostPatientPatientbaseListResponse {
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
     * 名字
     */
    name?: string;
    /**
     * 年龄
     */
    age?: number;
    /**
     * 患者id
     */
    patientId?: string;
  }[];
}

/**
 * 接口 查询患者列表 的 **请求函数**
 *
 */
export const postPatientPatientbaseList = (data?: PostPatientPatientbaseListRequest) => {
  return request.post<PostPatientPatientbaseListRequest, PostPatientPatientbaseListResponse>(
    '/patient/patient/baseList',
    {
      data
    }
  );
};

/**
 * 接口 患者详情 的 **请求类型**
 *
 */
/**
 * 获取患者详情参数
 */
export interface PostPatientPatientdetailRequest {
  /**
   * 患者ID
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
 * 接口 患者详情 的 **返回类型**
 *
 */
/**
 * 患者详情响应
 */
export interface PostPatientPatientdetailResponse {
  /**
   * ID
   */
  patientId?: string;
  /**
   * 姓名
   */
  name?: string;
  /**
   * 头像地址
   */
  headImg?: string;
  /**
   * 性别
   * <ul>
   * <li>1:男</li>
   * <li>2:女</li>
   * </ul>
   */
  gender?: number;
  /**
   * 手机号
   */
  contactMobile?: string;
  /**
   * 年龄
   */
  age?: number;
  /**
   * 资料完整度(%)
   */
  infoProgress?: number;
  /**
   * 服务进度(%)
   */
  serviceProgress?: number;
  /**
   * 签约时间
   */
  signTime?: string;
  /**
   * 患者标签名列表
   */
  labelNames?: string[];
  /**
   * 执行中协作包数量
   */
  unfinishedPkgCount?: number;
  /**
   * 执行中协作包列表
   */
  unfinishedPkgList?: {
    /**
     * 方案工作流记录ID
     */
    flowRecordId?: string;
    /**
     * 名称
     */
    name?: string;
    /**
     * 执行时间
     */
    timeBetween?: string;
    /**
     * 指标类型(0-无,1-重要,2-异常)
     */
    indexType?: 0 | 1 | 2;
    /**
     * 指标列表
     */
    indexList?: {
      /**
       * 指标名称
       */
      name?: string;
      /**
       * 指标值
       */
      value?: string;
    }[];
  }[];
  /**
   * 已完成协作包数量
   */
  finishedPkgCount?: number;
  /**
   * 已完成协作包列表
   */
  finishedPkgList?: {
    /**
     * 方案工作流记录ID
     */
    flowRecordId?: string;
    /**
     * 名称
     */
    name?: string;
    /**
     * 执行时间
     */
    timeBetween?: string;
    /**
     * 指标类型(0-无,1-重要,2-异常)
     */
    indexType?: 0 | 1 | 2;
    /**
     * 指标列表
     */
    indexList?: {
      /**
       * 指标名称
       */
      name?: string;
      /**
       * 指标值
       */
      value?: string;
    }[];
  }[];
  /**
   * 流程记录列表
   */
  flowRecordList?: {
    /**
     * 类型
     *
     * <ul>
     * <li>followup_form:评估</li>
     * <li>solution:服务包</li>
     * <li>article:宣教</li>
     * </ul>
     */
    typeCode?: string;
    /**
     * 工作流记录ID
     */
    flowRecordId?: string;
    /**
     * 宣教文章ID
     */
    articleId?: string;
    /**
     * 随访信息
     */
    followupInfo?: {
      /**
       * 随访ID
       */
      followupId?: string;
      /**
       * 表单ID
       */
      formId?: string;
      /**
       * 表单机构ID
       */
      formSchemaId?: string;
      /**
       * 表单系统基础路由
       */
      formBaseUrl?: string;
      /**
       * 表单内容记录ID
       */
      formContentId?: string;
    };
    /**
     * 标题
     */
    title?: string;
    /**
     * 日期(年份)
     */
    year?: number;
    /**
     * 日期(月)
     */
    month?: number;
    /**
     * 日期(日)
     */
    day?: number;
    /**
     * 日期描述(月日)
     */
    date?: string;
    /**
     * 状态
     */
    status?: 100 | 101 | 102;
    /**
     * 状态名称
     *
     * <ul>
     * <li>100:未开始<li>
     * <li>101:进行中<li>
     * <li>102:已完成<li>
     * </ul>
     */
    statusName?: string;
  }[];
  /**
   * 筛查结果
   */
  examinationResult?: string;
}

/**
 * 接口 患者详情 的 **请求函数**
 *
 */
export const postPatientPatientdetail = (data?: PostPatientPatientdetailRequest) => {
  return request.post<PostPatientPatientdetailRequest, PostPatientPatientdetailResponse>('/patient/patient/detail', {
    data
  });
};

/**
 * 接口 新增\/编辑患者个人信息 的 **请求类型**
 *
 */
/**
 * 编辑患者个人信息参数
 */
export interface PostPatientPatienteditRequest {
  /**
   * 患者ID
   */
  patientId?: string;
  /**
   * 姓名
   */
  name: string;
  /**
   * 性别
   */
  gender: number;
  /**
   * 出生日期
   */
  birthdate: string;
  /**
   * 证件类型
   */
  certType: string;
  /**
   * 证件号码
   */
  idCard: string;
  /**
   * 国家
   */
  country?: string;
  /**
   * 民族
   */
  nation?: string;
  /**
   * 现居地址(省)
   */
  province: string;
  /**
   * 现居地址(市)
   */
  city: string;
  /**
   * 现居地(区县)
   */
  county: string;
  /**
   * 详细地址
   */
  address?: string;
  /**
   * 地理坐标(latitude, longitude)
   */
  location?: string;
  /**
   * 本人电话
   */
  contactMobile?: string;
  /**
   * 职业
   */
  job?: string;
  /**
   * 工作单位
   */
  workUnit?: string;
  /**
   * 文化程度
   */
  education?: string;
  /**
   * 婚姻状况
   */
  marriage?: string;
  /**
   * 户籍地址(省)
   */
  registerProvince?: string;
  /**
   * 户籍地址(市)
   */
  registerCity?: string;
  /**
   * 户籍地址(区县)
   */
  registerCounty?: string;
  /**
   * 户籍地址
   */
  registerAddress?: string;
  /**
   * 户籍类型
   */
  registerType?: string;
  /**
   * 居委会
   */
  townGov?: string;
  /**
   * 社保号
   */
  ssn?: string;
  /**
   * 年收入
   */
  annualIncome?: string;
  /**
   * 医疗费用支付方式
   */
  medicalFeePayType?: string;
  /**
   * 医疗保险类别
   */
  medicalInsuranceType?: string;
  /**
   * 邮编
   */
  zip?: string;
  /**
   * 农合编号
   */
  ncmsNumber?: string;
  /**
   * 家庭电话
   */
  telPhone?: string;
  /**
   * 生活环境
   */
  liveEnv?: string;
  /**
   * ABO血型
   */
  aboBloodType?: string;
  /**
   * RH血型
   */
  rhBloodType?: string;
  /**
   * 是否患有高血压
   */
  haveHypertension?: string;
  /**
   * 是否患有糖尿病
   */
  haveDiabetes?: string;
  /**
   * 是否门特
   */
  isSpecialOutpatient?: string;
  /**
   * 紧急联系人
   */
  emergencyContacts?: {
    /**
     * 姓名
     */
    name?: string;
    /**
     * 电话
     */
    phone?: string;
  }[];
  /**
   * 资料完善状态  (1已完善   2未完善)
   */
  completeStatus?: string;
  /**
   * qq号
   */
  qq?: string;
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
 * 接口 新增\/编辑患者个人信息 的 **返回类型**
 *
 */
/**
 * 添加患者响应
 */
export interface PostPatientPatienteditResponse {
  /**
   * 患者id
   */
  patientId?: string;
}

/**
 * 接口 新增\/编辑患者个人信息 的 **请求函数**
 *
 */
export const postPatientPatientedit = (data?: PostPatientPatienteditRequest) => {
  return request.post<PostPatientPatienteditRequest, PostPatientPatienteditResponse>('/patient/patient/edit', {
    data
  });
};

/**
 * 接口 查看患者身份证号码 的 **请求类型**
 *
 */
/**
 * 查看患者身份证号码参数
 */
export interface PostPatientPatientidCardViewRequest {
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
 * 接口 查看患者身份证号码 的 **返回类型**
 *
 */
/**
 * 查看患者身份证号码响应
 */
export interface PostPatientPatientidCardViewResponse {
  /**
   * 身份证号
   */
  idCard?: string;
}

/**
 * 接口 查看患者身份证号码 的 **请求函数**
 *
 */
export const postPatientPatientidCardView = (data?: PostPatientPatientidCardViewRequest) => {
  return request.post<PostPatientPatientidCardViewRequest, PostPatientPatientidCardViewResponse>(
    '/patient/patient/idCardView',
    {
      data
    }
  );
};

/**
 * 接口 获取患者个人信息 的 **请求类型**
 *
 */
/**
 * 获取患者个人信息参数
 */
export interface PostPatientPatientinfoRequest {
  /**
   * 患者ID
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
 * 接口 获取患者个人信息 的 **返回类型**
 *
 */
/**
 * 获取患者个人信息响应
 */
export interface PostPatientPatientinfoResponse {
  /**
   * 患者ID
   */
  patientId?: string;
  /**
   * 头像地址
   */
  headImg?: string;
  /**
   * 资料完整度(%)
   */
  infoProgress?: string;
  /**
   * 姓名
   */
  name?: string;
  /**
   * 性别
   */
  gender?: {
    /**
     * 选项ID
     */
    id?: string;
    /**
     * 选项描述
     */
    desc?: string;
  };
  /**
   * 出生日期
   */
  birthdate?: string;
  /**
   * 年龄
   */
  age?: number;
  /**
   * 证件类型
   */
  certType?: {
    /**
     * 选项ID
     */
    id?: string;
    /**
     * 选项描述
     */
    desc?: string;
  };
  /**
   * 证件号码
   */
  idCard?: string;
  /**
   * 国家
   */
  country?: {
    /**
     * 选项ID
     */
    id?: string;
    /**
     * 选项描述
     */
    desc?: string;
  };
  /**
   * 民族
   */
  nation?: {
    /**
     * 选项ID
     */
    id?: string;
    /**
     * 选项描述
     */
    desc?: string;
  };
  /**
   * 现居地址(省)
   */
  province?: {
    /**
     * 选项ID
     */
    id?: string;
    /**
     * 选项描述
     */
    desc?: string;
  };
  /**
   * 现居地址(市)
   */
  city?: {
    /**
     * 选项ID
     */
    id?: string;
    /**
     * 选项描述
     */
    desc?: string;
  };
  /**
   * 现居地(区县)
   */
  county?: {
    /**
     * 选项ID
     */
    id?: string;
    /**
     * 选项描述
     */
    desc?: string;
  };
  /**
   * 详细地址
   */
  address?: string;
  /**
   * 地理坐标
   */
  location?: string;
  /**
   * 本人电话
   */
  contactMobile?: string;
  /**
   * 职业
   */
  job?: {
    /**
     * 选项ID
     */
    id?: string;
    /**
     * 选项描述
     */
    desc?: string;
  };
  /**
   * 工作单位
   */
  workUnit?: string;
  /**
   * 文化程度
   */
  education?: {
    /**
     * 选项ID
     */
    id?: string;
    /**
     * 选项描述
     */
    desc?: string;
  };
  /**
   * 婚姻状况
   */
  marriage?: {
    /**
     * 选项ID
     */
    id?: string;
    /**
     * 选项描述
     */
    desc?: string;
  };
  /**
   * 户籍地址(省)
   */
  registerProvince?: {
    /**
     * 选项ID
     */
    id?: string;
    /**
     * 选项描述
     */
    desc?: string;
  };
  /**
   * 户籍地址(市)
   */
  registerCity?: {
    /**
     * 选项ID
     */
    id?: string;
    /**
     * 选项描述
     */
    desc?: string;
  };
  /**
   * 户籍地址(区县)
   */
  registerCounty?: {
    /**
     * 选项ID
     */
    id?: string;
    /**
     * 选项描述
     */
    desc?: string;
  };
  /**
   * 户籍地址
   */
  registerAddress?: string;
  /**
   * 户籍类型
   */
  registerType?: {
    /**
     * 选项ID
     */
    id?: string;
    /**
     * 选项描述
     */
    desc?: string;
  };
  /**
   * 居委会
   */
  townGov?: {
    /**
     * 选项ID
     */
    id?: string;
    /**
     * 选项描述
     */
    desc?: string;
  };
  /**
   * 社保号
   */
  ssn?: string;
  /**
   * 年收入
   */
  annualIncome?: string;
  /**
   * 医疗费用支付方式
   */
  medicalFeePayType?: {
    /**
     * 选项ID
     */
    id?: string;
    /**
     * 选项描述
     */
    desc?: string;
  };
  /**
   * 医疗保险类别
   */
  medicalInsuranceType?: {
    /**
     * 选项ID
     */
    id?: string;
    /**
     * 选项描述
     */
    desc?: string;
  };
  /**
   * 邮编
   */
  zip?: string;
  /**
   * 农合编号
   */
  ncmsNumber?: string;
  /**
   * 家庭电话
   */
  telPhone?: string;
  /**
   * 生活环境
   */
  liveEnv?: {
    /**
     * 选项ID
     */
    id?: string;
    /**
     * 选项描述
     */
    desc?: string;
  };
  /**
   * ABO血型
   */
  aboBloodType?: {
    /**
     * 选项ID
     */
    id?: string;
    /**
     * 选项描述
     */
    desc?: string;
  };
  /**
   * RH血型
   */
  rhBloodType?: {
    /**
     * 选项ID
     */
    id?: string;
    /**
     * 选项描述
     */
    desc?: string;
  };
  /**
   * 是否患有高血压
   */
  haveHypertension?: string;
  /**
   * 是否患有高血糖
   */
  haveDiabetes?: string;
  /**
   * 是否门特
   */
  isSpecialOutpatient?: string;
  /**
   * 紧急联系人
   */
  emergencyContacts?: {
    /**
     * 姓名
     */
    name?: string;
    /**
     * 电话
     */
    phone?: string;
  }[];
  /**
   * qq号
   */
  qq?: string;
}

/**
 * 接口 获取患者个人信息 的 **请求函数**
 *
 */
export const postPatientPatientinfo = (data?: PostPatientPatientinfoRequest) => {
  return request.post<PostPatientPatientinfoRequest, PostPatientPatientinfoResponse>('/patient/patient/info', {
    data
  });
};

/**
 * 接口 患者列表 的 **请求类型**
 *
 */
/**
 * 患者列表参数
 */
export interface PostPatientPatientlistRequest {
  /**
   * 患者分类ID
   */
  categoryId?: string;
  /**
   * 签约状态(0-未签约,1已签约)
   */
  signStatus?: 0 | 1;
  /**
   * 指标状态(0-无异常,1-有异常)
   */
  targetException?: 0 | 1;
  /**
   * 搜索关键字
   */
  keyword?: string;
  /**
   * 标签ID列表
   */
  labelIds?: {};
  /**
   * 是否门特
   */
  isSpecialOutpatient?: 0 | 1;
  /**
   * 当前是否有购买服务包
   */
  isPurchasedPkg?: 0 | 1;
  /**
   * 是否已注册小程序(绑定)
   */
  isRegistered?: 0 | 1;
  /**
   * 性别
   */
  gender?: 1 | 2;
  /**
   * 是否分组
   */
  isCategorized?: 0 | 1;
  /**
   * 年龄段
   */
  ageStage?: 1 | 2 | 3 | 4 | 5;
  /**
   * 服务包分组ID
   */
  serviceGroupId?: number;
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
 * 患者列表
 */
export interface PostPatientPatientlistResponse {
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
     * ID
     */
    patientId?: string;
    /**
     * 姓名
     */
    name?: string;
    /**
     * 头像地址
     */
    headImg?: string;
    /**
     * 性别
     */
    gender?: number;
    /**
     * 手机号
     */
    contactMobile?: string;
    /**
     * 年龄
     */
    age?: number;
    /**
     * 资料完整度(%)
     */
    infoProgress?: number;
    /**
     * 服务进度(%)
     */
    serviceProgress?: number;
    /**
     * 是否有协作服务包
     */
    hasServicePkg?: 0 | 1;
    /**
     * 协作服务包名称列表
     */
    servicePkgNames?: string[];
    /**
     * 指标类型(0-无,1-重要,2-异常)
     */
    indexType?: 0 | 1 | 2;
    /**
     * 指标列表
     */
    indexList?: {
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
     * 诊断
     */
    diagnosis?: string;
    /**
     * 患者标签名列表
     */
    labelNames?: string[];
    /**
     * 患者标签列表
     */
    labels?: {
      /**
       * 患者标签列表
       */
      id?: string;
      /**
       * 患者标签列表
       */
      name?: string;
    }[];
    /**
     * 是否已注册小程序(0-未注册,1-已注册)
     */
    isRegistered?: 0 | 1;
    /**
     * 服务包类型列表
     */
    pkgTypes?: string[];
    /**
     * 评估结果列表
     */
    followupList?: {
      /**
       * 名称
       */
      name?: string;
      /**
       * 结果描述
       */
      resultDesc?: string;
    }[];
    /**
     * 是否有评估结果
     */
    hasFollowup?: 0 | 1;
    /**
     * 咨询记录id
     */
    inquiryId?: string;
    /**
     * im群聊id
     */
    imGroupId?: string;
    /**
     * 是否门特
     */
    isSpecialOutpatient?: number;
    /**
     * BMI
     */
    bmi?: number;
    /**
     * 证件类型
     */
    certTypeText?: string;
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
     * 患者地址
     */
    address?: string;
  }[];
}

/**
 * 接口 患者列表 的 **请求函数**
 *
 */
export const postPatientPatientlist = (data?: PostPatientPatientlistRequest) => {
  return request.post<PostPatientPatientlistRequest, PostPatientPatientlistResponse>('/patient/patient/list', {
    data
  });
};

/**
 * 接口 患者移除团队 的 **请求类型**
 *
 */
/**
 * 患者移除团队参数
 */
export interface PostPatientPatientremoveTeamRequest {
  /**
   * 患者id集合
   */
  patientIds?: string[];
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
 * 接口 患者移除团队 的 **返回类型**
 *
 */
/**
 * 患者移除团队响应
 */
export interface PostPatientPatientremoveTeamResponse {
  /**
   * 影响行
   */
  affectRow?: number;
}

/**
 * 接口 患者移除团队 的 **请求函数**
 *
 */
export const postPatientPatientremoveTeam = (data?: PostPatientPatientremoveTeamRequest) => {
  return request.post<PostPatientPatientremoveTeamRequest, PostPatientPatientremoveTeamResponse>(
    '/patient/patient/removeTeam',
    {
      data
    }
  );
};

/**
 * 接口 患者服务列表 的 **请求类型**
 *
 */
/**
 * 患者服务列表参数
 */
export interface PostPatientPatientserviceListRequest {
  /**
   * 患者ID
   */
  patientId: number;
  /**
   * 关键字
   */
  keyword?: string;
  /**
   * 类型
   *
   * <ul>
   * <li>followup_form:评估</li>
   * <li>solution:服务包</li>
   * <li>article:宣教</li>
   * </ul>
   */
  typeCode?: 'followup_form' | 'solution' | 'article';
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
 * 接口 患者服务列表 的 **返回类型**
 *
 */
/**
 * 患者服务列表响应
 */
export interface PostPatientPatientserviceListResponse {
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
   * 分页列表数据
   */
  content?: {
    /**
     * 类型
     *
     * <ul>
     * <li>followup_form:评估</li>
     * <li>solution:服务包</li>
     * <li>article:宣教</li>
     * </ul>
     */
    typeCode?: string;
    /**
     * 工作流记录ID
     */
    flowRecordId?: string;
    /**
     * 宣教文章ID
     */
    articleId?: string;
    /**
     * 随访信息
     */
    followupInfo?: {
      /**
       * 随访ID
       */
      followupId?: string;
      /**
       * 表单ID
       */
      formId?: string;
      /**
       * 表单机构ID
       */
      formSchemaId?: string;
      /**
       * 表单系统基础路由
       */
      formBaseUrl?: string;
      /**
       * 表单内容记录ID
       */
      formContentId?: string;
    };
    /**
     * 标题
     */
    title?: string;
    /**
     * 日期(年份)
     */
    year?: number;
    /**
     * 日期(月)
     */
    month?: number;
    /**
     * 日期(日)
     */
    day?: number;
    /**
     * 日期描述(月日)
     */
    date?: string;
    /**
     * 状态
     */
    status?: 100 | 101 | 102;
    /**
     * 状态名称
     *
     * <ul>
     * <li>100:未开始<li>
     * <li>101:进行中<li>
     * <li>102:已完成<li>
     * </ul>
     */
    statusName?: string;
  }[];
}

/**
 * 接口 患者服务列表 的 **请求函数**
 *
 */
export const postPatientPatientserviceList = (data?: PostPatientPatientserviceListRequest) => {
  return request.post<PostPatientPatientserviceListRequest, PostPatientPatientserviceListResponse>(
    '/patient/patient/serviceList',
    {
      data
    }
  );
};

/**
 * 接口 查看患者电话号码 的 **请求类型**
 *
 */
/**
 * 查看患者电话号码参数
 */
export interface PostPatientPatientviewContactMobileRequest {
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
 * 接口 查看患者电话号码 的 **返回类型**
 *
 */
/**
 * 查看患者电话号码响应
 */
export interface PostPatientPatientviewContactMobileResponse {
  /**
   * 手机号
   */
  contactMobile?: string;
}

/**
 * 接口 查看患者电话号码 的 **请求函数**
 *
 */
export const postPatientPatientviewContactMobile = (data?: PostPatientPatientviewContactMobileRequest) => {
  return request.post<PostPatientPatientviewContactMobileRequest, PostPatientPatientviewContactMobileResponse>(
    '/patient/patient/viewContactMobile',
    {
      data
    }
  );
};
