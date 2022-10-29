/**
 * Created By api-typescript
 * https://alidocs.dingtalk.com/i/team/dN0G7AD82xAq4XWY/docs/dN0G78qlBL1o7zWY#
 */

import request from '../request';

/**
 * 接口 获取地区树 的 **请求类型**
 *
 */
export interface PostBaseDicgetAreaTreeRequest {}

/**
 * 接口 获取地区树 的 **返回类型**
 *
 */
/**
 * 获取地区树响应
 */
export interface PostBaseDicgetAreaTreeResponse {
  /**
   * 下级地区
   */
  content?: {};
}

/**
 * 接口 获取地区树 的 **请求函数**
 *
 */
export const postBaseDicgetAreaTree = (data?: PostBaseDicgetAreaTreeRequest) => {
  return request.post<PostBaseDicgetAreaTreeRequest, PostBaseDicgetAreaTreeResponse>('/base/dic/getAreaTree', {
    data
  });
};

/**
 * 接口 评估主页 的 **请求类型**
 *
 */
/**
 * 评估主页参数
 */
export interface PostAssessmentBaseindexRequest {
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
 * 接口 评估主页 的 **返回类型**
 *
 */
/**
 * 评估主页响应
 */
export interface PostAssessmentBaseindexResponse {}

/**
 * 接口 评估主页 的 **请求函数**
 *
 */
export const postAssessmentBaseindex = (data?: PostAssessmentBaseindexRequest) => {
  return request.post<PostAssessmentBaseindexRequest, PostAssessmentBaseindexResponse>('/assessment/base/index', {
    data
  });
};

/**
 * 接口 后台管理模块列表聚合接口 的 **请求类型**
 *
 */
/**
 * 后台管理模块列表聚合接口参数
 */
export interface PostBaseAggregateitemListRequest {
  /**
   * 资源模块名字数组   organ:医院、机构   department：科室   team:团队  label:标签 package:服务包 indicator:指标 role:角色 professionalTitle:职称 teamRole:团队角色 followupForm:随访评估量表
   */
  names?: string[];
  /**
   * 名字关键词搜索
   */
  name?: string;
}

/**
 * 接口 后台管理模块列表聚合接口 的 **返回类型**
 *
 */
/**
 * 后台管理模块列表聚合接口响应
 */
export interface PostBaseAggregateitemListResponse {
  /**
   * 医院，机构列表
   */
  organ?: {
    /**
     * 机构ID
     */
    organId?: string;
    /**
     * 机构ID
     */
    id?: string;
    /**
     * 名字
     */
    name?: string;
  }[];
  /**
   * 科室列表
   */
  department?: {
    /**
     * 科室Id
     */
    departmentId?: string;
    /**
     * 科室Id
     */
    id?: string;
    /**
     * 名字
     */
    name?: string;
  }[];
  /**
   * 团队列表
   */
  team?: {
    /**
     * 团队ID
     */
    teamId?: string;
    /**
     * 团队ID
     */
    id?: string;
    /**
     * 名字
     */
    name?: string;
  }[];
  /**
   * 标签列表
   */
  label?: {
    /**
     * 标签ID
     */
    labelId?: string;
    /**
     * 标签ID
     */
    id?: string;
    /**
     * 名字
     */
    name?: string;
  }[];
  /**
   * 服务包列表
   */
  package?: {
    /**
     * 服务包ID
     */
    packageId?: string;
    /**
     * 服务包ID
     */
    id?: string;
    /**
     * 名字
     */
    name?: string;
  }[];
  /**
   * 指标列表
   */
  indicator?: {
    /**
     * 指标ID
     */
    indicatorId?: string;
    /**
     * 指标ID
     */
    id?: string;
    /**
     * 名字
     */
    name?: string;
  }[];
  /**
   * 角色列表
   */
  role?: {
    /**
     * 角色ID
     */
    roleId?: string;
    /**
     * 角色ID
     */
    id?: string;
    /**
     * 名字
     */
    name?: string;
  }[];
  /**
   * 职称列表
   */
  professionalTitle?: {
    /**
     * 职称ID
     */
    professionalTitleId?: string;
    /**
     * 职称ID
     */
    id?: string;
    /**
     * 名字
     */
    name?: string;
  }[];
  /**
   * 团队角色列表
   */
  teamRole?: {
    /**
     * 角色ID
     */
    roleId?: string;
    /**
     * 角色ID
     */
    id?: string;
    /**
     * 名字
     */
    name?: string;
  }[];
  /**
   * 随访评估表单列表
   */
  followupForm?: {
    /**
     * 表单结构ID
     */
    schemaId?: string;
    /**
     * 表单结构ID
     */
    id?: string;
    /**
     * 名字
     */
    name?: string;
  }[];
}

/**
 * 接口 后台管理模块列表聚合接口 的 **请求函数**
 *
 */
export const postBaseAggregateitemList = (data?: PostBaseAggregateitemListRequest) => {
  return request.post<PostBaseAggregateitemListRequest, PostBaseAggregateitemListResponse>('/base/aggregate/itemList', {
    data
  });
};

/**
 * 接口 客户端数据上报 的 **请求类型**
 *
 */
/**
 * 客户端数据上报参数
 */
export interface PostBaseAlertreportRequest {
  /**
   * 用户id
   */
  userId?: string;
  /**
   * 数据类型 (1埋点类型 2错误类型 3闪退类型)
   */
  type?: string;
  /**
   * 客户端类型 (1桌面 2手机 3web)
   */
  clientType?: string;
  /**
   * 时间 (格式：1949-10-01 10:10:10)
   */
  time?: string;
  /**
   * 埋点名称
   */
  name?: string;
  /**
   * 错误信息
   */
  errMsg?: string;
  /**
   * 冗余数据
   */
  data?: string;
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
 * 接口 客户端数据上报 的 **返回类型**
 *
 */
/**
 * 客户端数据上报响应
 */
export interface PostBaseAlertreportResponse {}

/**
 * 接口 客户端数据上报 的 **请求函数**
 *
 */
export const postBaseAlertreport = (data?: PostBaseAlertreportRequest) => {
  return request.post<PostBaseAlertreportRequest, PostBaseAlertreportResponse>('/base/alert/report', {
    data
  });
};

/**
 * 接口 获取字典选项列表 的 **请求类型**
 *
 */
/**
 * 获取字典选项列表参数
 */
export interface PostBaseDicgetItemListRequest {
  /**
   * 类型
   *
   * <ul>
   * <li>nation(民族)</li>
   * <li>job(工作类型)</li>
   * <li>gender(性别)</li>
   * <li>marriage(婚姻状况)</li>
   * <li>credentials(身份证件类型)</li>
   * <li>country(国家)</li>
   * <li>education(教育程度)</li>
   * <li>medicalFeePayType(医疗费用类型)</li>
   * <li>registerType(户籍类型)</li>
   * <li>medicalInsuranceType(医保类型)</li>
   * <li>liveEnv(生活环境)</li>
   * <li>aboBloodType(ABO血型)</li>
   * <li>rhBloodType(RH血型)</li>
   * <li>allergyType(过敏类型)</li>
   * <li>allergyOrigin(过敏源)</li>
   * <li>diseaseNames(疾病名称)</li>
   * <li>relations(患者关系)</li>
   * <li>surgeryType(手术类型)</li>
   * <li>vaccinationNames(疫苗名称)</li>
   * <li>vaccinationOrganization(接种机构)</li>
   * <li>exposeType(暴露类型)</li>
   * <li>disabilityType(残疾类型)</li>
   * <li>townGovMap(居委会)</li>
   *
   * </ul>
   */
  typeCode?: string;
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
 * 接口 获取字典选项列表 的 **返回类型**
 *
 */
/**
 * 获取字典选项列表响应
 */
export interface PostBaseDicgetItemListResponse {
  /**
   * 类型
   */
  typeCode?: string;
  /**
   * 类型名称
   */
  typeName?: string;
  /**
   * 内容
   */
  content?: {
    /**
     * 编号
     */
    code?: string;
    /**
     * 描述
     */
    desc?: string;
  }[];
}

/**
 * 接口 获取字典选项列表 的 **请求函数**
 *
 */
export const postBaseDicgetItemList = (data?: PostBaseDicgetItemListRequest) => {
  return request.post<PostBaseDicgetItemListRequest, PostBaseDicgetItemListResponse>('/base/dic/getItemList', {
    data
  });
};

/**
 * 接口 自定义字典选项 的 **请求类型**
 *
 */
/**
 * 自定义字典选项参数
 */
export interface PostBaseDicitemCustomRequest {
  /**
   * 分组编号
   *
   * <ul>
   * <li>nation(民族)</li>
   * <li>job(工作类型)</li>
   * <li>gender(性别)</li>
   * <li>marriage(婚姻状况)</li>
   * <li>credentials(身份证件类型)</li>
   * <li>country(国家)</li>
   * <li>education(教育程度)</li>
   * <li>medicalFeePayType(医疗费用类型)</li>
   * <li>registerType(户籍类型)</li>
   * <li>medicalInsuranceType(医保类型)</li>
   * <li>liveEnv(生活环境)</li>
   * <li>aboBloodType(ABO血型)</li>
   * <li>rhBloodType(RH血型)</li>
   * <li>allergyType(过敏类型)</li>
   * <li>allergyOrigin(过敏源)</li>
   * <li>diseaseNames(疾病名称)</li>
   * <li>relations(患者关系)</li>
   * <li>surgeryType(手术类型)</li>
   * <li>vaccinationNames(疫苗名称)</li>
   * <li>vaccinationOrganization(接种机构)</li>
   * <li>exposeType(暴露类型)</li>
   * <li>disabilityType(残疾类型)</li>
   * <li>townGovMap(居委会)</li>
   *
   * </ul>
   */
  groupCode?: string;
  /**
   * 选项名称
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
 * 接口 自定义字典选项 的 **返回类型**
 *
 */
/**
 * 自定义字典选项响应
 */
export interface PostBaseDicitemCustomResponse {
  /**
   * 选项编号
   */
  code?: string;
  /**
   * 分组名称
   */
  name?: string;
  /**
   * 分组编号
   */
  groupCode?: string;
}

/**
 * 接口 自定义字典选项 的 **请求函数**
 *
 */
export const postBaseDicitemCustom = (data?: PostBaseDicitemCustomRequest) => {
  return request.post<PostBaseDicitemCustomRequest, PostBaseDicitemCustomResponse>('/base/dic/itemCustom', {
    data
  });
};

/**
 * 接口 字典选项列表 的 **请求类型**
 *
 */
/**
 * 字典选项列表参数
 */
export interface PostBaseDicitemListRequest {
  /**
   * 分组Codes
   *
   * <ul>
   * <li>nation(民族)</li>
   * <li>job(工作类型)</li>
   * <li>gender(性别)</li>
   * <li>marriage(婚姻状况)</li>
   * <li>credentials(身份证件类型)</li>
   * <li>country(国家)</li>
   * <li>education(教育程度)</li>
   * <li>medicalFeePayType(医疗费用类型)</li>
   * <li>registerType(户籍类型)</li>
   * <li>medicalInsuranceType(医保类型)</li>
   * <li>liveEnv(生活环境)</li>
   * <li>aboBloodType(ABO血型)</li>
   * <li>rhBloodType(RH血型)</li>
   * <li>allergyType(过敏类型)</li>
   * <li>allergyOrigin(过敏源)</li>
   * <li>diseaseNames(疾病名称)</li>
   * <li>relations(患者关系)</li>
   * <li>surgeryType(手术类型)</li>
   * <li>vaccinationNames(疫苗名称)</li>
   * <li>vaccinationOrganization(接种机构)</li>
   * <li>exposeType(暴露类型)</li>
   * <li>disabilityType(残疾类型)</li>
   * <li>townGovMap(居委会)</li>
   *
   * </ul>
   */
  groupCodes?: string[];
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
 * 接口 字典选项列表 的 **返回类型**
 *
 */
/**
 * 字典选项列表响应
 */
export interface PostBaseDicitemListResponse {
  /**
   * 分组列表
   */
  groups?: {
    /**
     * 分组编号
     */
    groupCode?: string;
    /**
     * 分组名称
     */
    groupName?: string;
    /**
     * 字典列表
     */
    items?: {
      /**
       * 编号
       */
      code?: string;
      /**
       * 描述
       */
      name?: string;
    }[];
  }[];
}

/**
 * 接口 字典选项列表 的 **请求函数**
 *
 */
export const postBaseDicitemList = (data?: PostBaseDicitemListRequest) => {
  return request.post<PostBaseDicitemListRequest, PostBaseDicitemListResponse>('/base/dic/itemList', {
    data
  });
};

/**
 * 接口 退款原因字典 的 **请求类型**
 *
 */
/**
 * 投诉原因字典参数
 */
export interface PostBaseDicrefundReasonRequest {
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
 * 接口 退款原因字典 的 **返回类型**
 *
 */
/**
 * 投诉原因字典响应
 */
export interface PostBaseDicrefundReasonResponse {
  content?: {
    /**
     * 原因id
     */
    refundReasonId?: string;
    /**
     * 内容
     */
    content?: string;
  }[];
}

/**
 * 接口 退款原因字典 的 **请求函数**
 *
 */
export const postBaseDicrefundReason = (data?: PostBaseDicrefundReasonRequest) => {
  return request.post<PostBaseDicrefundReasonRequest, PostBaseDicrefundReasonResponse>('/base/dic/refundReason', {
    data
  });
};

/**
 * 接口 标签添加分类 的 **请求类型**
 *
 */
/**
 * 分类添加参数
 */
export interface PostBaseLabelclassifyAddRequest {
  /**
   * 名称
   */
  name: string;
  /**
   * 描述
   */
  desc?: string;
  /**
   * 首图
   */
  headImg?: string;
  /**
   * 上级分类ID
   */
  pid?: string;
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
 * 接口 标签添加分类 的 **返回类型**
 *
 */
/**
 * 分类添加响应对象
 */
export interface PostBaseLabelclassifyAddResponse {
  /**
   * 分类ID
   */
  classifyId?: string;
}

/**
 * 接口 标签添加分类 的 **请求函数**
 *
 */
export const postBaseLabelclassifyAdd = (data?: PostBaseLabelclassifyAddRequest) => {
  return request.post<PostBaseLabelclassifyAddRequest, PostBaseLabelclassifyAddResponse>('/base/label/classifyAdd', {
    data
  });
};

/**
 * 接口 标签分类删除 的 **请求类型**
 *
 */
/**
 * 分类删除参数
 */
export interface PostBaseLabelclassifyDeleteRequest {
  /**
   * 分类IDs
   */
  classifyIds: string[];
  /**
   * 是否需要检查下级分类 默认为true检查
   */
  checkSubClassify?: boolean;
  /**
   * 是否需要检查关联数据  默认为true检查
   */
  checkRelation?: boolean;
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
 * 接口 标签分类删除 的 **返回类型**
 *
 */
/**
 * 分类删除响应对象
 */
export interface PostBaseLabelclassifyDeleteResponse {
  /**
   * 分类ID
   */
  classifyId?: string;
}

/**
 * 接口 标签分类删除 的 **请求函数**
 *
 */
export const postBaseLabelclassifyDelete = (data?: PostBaseLabelclassifyDeleteRequest) => {
  return request.post<PostBaseLabelclassifyDeleteRequest, PostBaseLabelclassifyDeleteResponse>(
    '/base/label/classifyDelete',
    {
      data
    }
  );
};

/**
 * 接口 标签分类详情 的 **请求类型**
 *
 */
/**
 * 分类详情参数
 */
export interface PostBaseLabelclassifyDetailRequest {
  /**
   * 分类ID
   */
  classifyId: string;
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
 * 接口 标签分类详情 的 **返回类型**
 *
 */
/**
 * 分类详情响应对象
 */
export interface PostBaseLabelclassifyDetailResponse {
  /**
   * 分类ID
   */
  classifyId?: string;
  /**
   * 名称
   */
  name?: string;
  /**
   * 描述
   */
  desc?: string;
  /**
   * 首图
   */
  headImg?: string;
  /**
   * 父ID
   */
  pid?: string;
  /**
   * 层级  1为顶层  下级2,3,4以此类推
   */
  level?: number;
  /**
   * 创建时间
   */
  xCreateTime?: string;
}

/**
 * 接口 标签分类详情 的 **请求函数**
 *
 */
export const postBaseLabelclassifyDetail = (data?: PostBaseLabelclassifyDetailRequest) => {
  return request.post<PostBaseLabelclassifyDetailRequest, PostBaseLabelclassifyDetailResponse>(
    '/base/label/classifyDetail',
    {
      data
    }
  );
};

/**
 * 接口 标签分类编辑 的 **请求类型**
 *
 */
/**
 * 分类编辑参数
 */
export interface PostBaseLabelclassifyEditRequest {
  /**
   * 分类ID
   */
  classifyId?: string;
  /**
   * 名称
   */
  name?: string;
  /**
   * 描述
   */
  desc?: string;
  /**
   * 首图
   */
  headImg?: string;
  /**
   * 上级分类ID
   */
  pid?: string;
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
 * 接口 标签分类编辑 的 **返回类型**
 *
 */
/**
 * 分类编辑响应对象
 */
export interface PostBaseLabelclassifyEditResponse {
  /**
   * 分类ID
   */
  classifyId?: string;
}

/**
 * 接口 标签分类编辑 的 **请求函数**
 *
 */
export const postBaseLabelclassifyEdit = (data?: PostBaseLabelclassifyEditRequest) => {
  return request.post<PostBaseLabelclassifyEditRequest, PostBaseLabelclassifyEditResponse>('/base/label/classifyEdit', {
    data
  });
};

/**
 * 接口 标签分类列表 的 **请求类型**
 *
 */
/**
 * 分类列表参数
 */
export interface PostBaseLabelclassifyListRequest {
  /**
   * 名称
   */
  name?: string;
  /**
   * 分类ID数组
   */
  classifyIds?: string[];
  /**
   * 上级分类ID数组
   */
  pids?: string[];
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
 * 接口 标签分类列表 的 **返回类型**
 *
 */
/**
 * 分类列表响应对象
 */
export interface PostBaseLabelclassifyListResponse {
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
     * 分类ID
     */
    classifyId?: string;
    /**
     * 名称
     */
    name?: string;
    /**
     * 描述
     */
    desc?: string;
    /**
     * 首图
     */
    headImg?: string;
    /**
     * 父ID
     */
    pid?: string;
    /**
     * 层级  1为顶层  下级2,3,4以此类推
     */
    level?: number;
    /**
     * 创建时间
     */
    xCreateTime?: string;
  }[];
}

/**
 * 接口 标签分类列表 的 **请求函数**
 *
 */
export const postBaseLabelclassifyList = (data?: PostBaseLabelclassifyListRequest) => {
  return request.post<PostBaseLabelclassifyListRequest, PostBaseLabelclassifyListResponse>('/base/label/classifyList', {
    data
  });
};

/**
 * 接口 音频上传 的 **请求类型**
 *
 */
export interface PostBaseUploadaudioRequest {
  /**
   * 文件名称
   */
  file: FileData;
}

/**
 * 接口 音频上传 的 **返回类型**
 *
 */
export interface PostBaseUploadaudioResponse {}

/**
 * 接口 音频上传 的 **请求函数**
 *
 */
export const postBaseUploadaudio = (data: PostBaseUploadaudioRequest) => {
  return request.post<PostBaseUploadaudioRequest, PostBaseUploadaudioResponse>('/base/upload/audio', {
    data
  });
};

/**
 * 接口 通过[流]上传文件 的 **请求类型**
 *
 */
/**
 * 通过[流]上传文件参数
 */
export interface PostBaseUploadstreamImgRequest {
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
 * 接口 通过[流]上传文件 的 **返回类型**
 *
 */
/**
 * 通过[流]上传文件响应
 */
export interface PostBaseUploadstreamImgResponse {}

/**
 * 接口 通过[流]上传文件 的 **请求函数**
 *
 */
export const postBaseUploadstreamImg = (data?: PostBaseUploadstreamImgRequest) => {
  return request.post<PostBaseUploadstreamImgRequest, PostBaseUploadstreamImgResponse>('/base/upload/streamIMG', {
    data
  });
};

/**
 * 接口 上传文章视频 的 **请求类型**
 *
 */
export interface PostBaseUploaduploadArticleVideoRequest {
  /**
   * 上传的文件键名
   */
  file: FileData;
}

/**
 * 接口 上传文章视频 的 **返回类型**
 *
 */
export interface PostBaseUploaduploadArticleVideoResponse {}

/**
 * 接口 上传文章视频 的 **请求函数**
 *
 */
export const postBaseUploaduploadArticleVideo = (data: PostBaseUploaduploadArticleVideoRequest) => {
  return request.post<PostBaseUploaduploadArticleVideoRequest, PostBaseUploaduploadArticleVideoResponse>(
    '/base/upload/uploadArticleVideo',
    {
      data
    }
  );
};

/**
 * 接口 图片上传 的 **请求类型**
 *
 */
export interface PostBaseUploaduploadImgRequest {
  /**
   * 文件域名称
   */
  file: FileData;
}

/**
 * 接口 图片上传 的 **返回类型**
 *
 */
export interface PostBaseUploaduploadImgResponse {}

/**
 * 接口 图片上传 的 **请求函数**
 *
 */
export const postBaseUploaduploadImg = (data: PostBaseUploaduploadImgRequest) => {
  return request.post<PostBaseUploaduploadImgRequest, PostBaseUploaduploadImgResponse>('/base/upload/uploadImg', {
    data
  });
};

/**
 * 接口 获取最新版本详情 的 **请求类型**
 *
 */
/**
 * 获取最新版本详情参数
 */
export interface PostBaseVensiondetailRequest {
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
 * 接口 获取最新版本详情 的 **返回类型**
 *
 */
/**
 * 获取最新版本详情响应
 */
export interface PostBaseVensiondetailResponse {
  /**
   * 版本ID
   */
  versionId?: string;
  /**
   * 名字
   */
  name?: string;
  /**
   * 版本
   */
  version?: string;
  /**
   * 链接
   */
  url?: string;
  /**
   * 描述
   */
  desc?: string;
  /**
   * 是否最新  1:是  2：否
   */
  isNew?: string;
}

/**
 * 接口 获取最新版本详情 的 **请求函数**
 *
 */
export const postBaseVensiondetail = (data?: PostBaseVensiondetailRequest) => {
  return request.post<PostBaseVensiondetailRequest, PostBaseVensiondetailResponse>('/base/vension/detail', {
    data
  });
};

/**
 * 接口 检查新版本 的 **请求类型**
 *
 */
/**
 * 检查新版本参数
 */
export interface PostBaseVersioncheckNewVersionRequest {
  /**
   * 版本字符串
   */
  version?: string;
  /**
   * 版本数字编号
   */
  versionNum?: number;
  /**
   * type 类型    1：医生桌面端   2：医生移动端
   */
  type?: string;
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
 * 接口 检查新版本 的 **返回类型**
 *
 */
/**
 * 检查新版本响应
 */
export interface PostBaseVersioncheckNewVersionResponse {
  /**
   * 是否可以升级   1：有新版本   2：无新版本
   */
  upgrade?: number;
  /**
   * 版本号
   */
  version?: string;
  /**
   * 版本num
   */
  versionNum?: number;
  /**
   * 版本包下载地址
   */
  url?: string;
  /**
   * 更新内容
   */
  upgradeList?: {}[];
  /**
   * 必须更新  1：必须更新   2：可选更新
   */
  mustUpdate?: number;
}

/**
 * 接口 检查新版本 的 **请求函数**
 *
 */
export const postBaseVersioncheckNewVersion = (data?: PostBaseVersioncheckNewVersionRequest) => {
  return request.post<PostBaseVersioncheckNewVersionRequest, PostBaseVersioncheckNewVersionResponse>(
    '/base/version/checkNewVersion',
    {
      data
    }
  );
};
