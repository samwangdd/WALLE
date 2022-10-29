/**
 * Created By api-typescript
 * https://alidocs.dingtalk.com/i/team/dN0G7AD82xAq4XWY/docs/dN0G78qlBL1o7zWY#
 */

import request from '../request';

/**
 * 接口 获取咨询(单聊)信息 的 **请求类型**
 *
 */
/**
 * 获取咨询(单聊)信息参数
 */
export interface PostMessageImgetInquiryRequest {
  /**
   * 患者id
   */
  patientId: string;
  /**
   * 医生用户id
   */
  doctorUserId: string;
  /**
   * 团队id
   */
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
 * 接口 获取咨询(单聊)信息 的 **返回类型**
 *
 */
/**
 * 获取咨询(单聊)信息响应
 */
export interface PostMessageImgetInquiryResponse {
  /**
   * 单聊记录id
   */
  inquiryRecordId?: string;
  /**
   * im群聊ID
   */
  imGroupId?: string;
}

/**
 * 接口 获取咨询(单聊)信息 的 **请求函数**
 *
 */
export const postMessageImgetInquiry = (data?: PostMessageImgetInquiryRequest) => {
  return request.post<PostMessageImgetInquiryRequest, PostMessageImgetInquiryResponse>('/message/im/getInquiry', {
    data
  });
};

/**
 * 接口 获取推荐方案列表信息 的 **请求类型**
 *
 */
/**
 * 获取推荐方案列表信息参数
 */
export interface PostMessageImgetRecSolutionListRequest {
  /**
   * 推荐方案ID列表
   */
  recommendSolutionIds?: string[];
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
 * 接口 获取推荐方案列表信息 的 **返回类型**
 *
 */
/**
 * 获取推荐方案列表信息响应
 */
export interface PostMessageImgetRecSolutionListResponse {
  /**
   * 内容
   */
  content?: {
    /**
     * 推荐方案ID
     */
    recommendSolutionId?: string;
    /**
     * 方案ID
     */
    solutionId?: string;
    /**
     * 购买状态 1已购买 2未购买
     */
    status?: number;
  }[];
}

/**
 * 接口 获取推荐方案列表信息 的 **请求函数**
 *
 */
export const postMessageImgetRecSolutionList = (data?: PostMessageImgetRecSolutionListRequest) => {
  return request.post<PostMessageImgetRecSolutionListRequest, PostMessageImgetRecSolutionListResponse>(
    '/message/im/getRecSolutionList',
    {
      data
    }
  );
};

/**
 * 接口 查询im聊天消息记录 的 **请求类型**
 *
 */
/**
 * 查询im聊天消息记录参数
 */
export interface PostMessageImrecordGetmsgRequest {
  /**
   * 就诊Id类型
   */
  appointmentId?: string;
  /**
   * 业务编码
   */
  businessCode?: string;
  /**
   * 结束日期 long类型
   */
  endDate?: string;
  /**
   * 消息类型 0=查群组消息 1=查单聊消息
   */
  msgType?: string;
  /**
   * 页码，默认从第0页开始
   */
  page?: number;
  /**
   * 每页条数，默认每页100条
   */
  pageSize?: number;
  /**
   * 排序命令: ASC=正序 DESC=倒序
   */
  sortOrder?: string;
  /**
   * 开始日期 long类型
   */
  startDate?: string;
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
 * 接口 查询im聊天消息记录 的 **返回类型**
 *
 */
/**
 * 查询im聊天消息记录响应
 */
export interface PostMessageImrecordGetmsgResponse {
  /**
   * 内容
   */
  content?: {
    /**
     * 就诊Id
     */
    appointmentId?: string;
    /**
     * 发送者im号
     */
    Sender?: string;
    /**
     * 接收者im号
     */
    receiver?: string;
    /**
     * 发送时间
     */
    SendTime?: string;
    /**
     * 消息类型 (TEXT文本 OTHER自定义)
     */
    MsgType?: string;
    /**
     * 正文
     */
    ''?: {};
    /**
     * 文件名
     */
    FileName?: string;
    /**
     * 文件url
     */
    FileUrl?: string;
    /**
     * 第三方账sdk号
     */
    ThirdSdkAccount?: string;
    /**
     * 消息id
     */
    msgId?: string;
    /**
     * 持续时间
     */
    duration?: string;
    /**
     * 分组id
     */
    groupId?: string;
    /**
     * 时间戳
     */
    TimeStamp?: string;
    /**
     * 昵称
     */
    FromNick?: string;
    /**
     * 业务码
     */
    businessCode?: string;
    /**
     * 消息版本
     */
    msgVersion?: string;
    /**
     * 昵称
     */
    name?: string;
    /**
     * 角色名
     */
    role?: string;
    /**
     * 头像
     */
    avatar?: string;
    /**
     * 发送者userId
     */
    senderUserId?: string;
    /**
     * 团队id
     */
    teamId?: string;
  }[];
}

/**
 * 接口 查询im聊天消息记录 的 **请求函数**
 *
 */
export const postMessageImrecordGetmsg = (data?: PostMessageImrecordGetmsgRequest) => {
  return request.post<PostMessageImrecordGetmsgRequest, PostMessageImrecordGetmsgResponse>('/message/im/recordGetmsg', {
    data
  });
};

/**
 * 接口 发送推荐方案 的 **请求类型**
 *
 */
/**
 * 发送推荐方案参数
 */
export interface PostMessageImsendRecSolutionRequest {
  /**
   * 推荐方案id  对应字段recommend_solution_id
   */
  recSolutionId?: string;
  /**
   * 咨询记录id
   */
  inquiryRecordId?: string;
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
 * 接口 发送推荐方案 的 **返回类型**
 *
 */
/**
 * 发送推荐方案响应
 */
export interface PostMessageImsendRecSolutionResponse {}

/**
 * 接口 发送推荐方案 的 **请求函数**
 *
 */
export const postMessageImsendRecSolution = (data?: PostMessageImsendRecSolutionRequest) => {
  return request.post<PostMessageImsendRecSolutionRequest, PostMessageImsendRecSolutionResponse>(
    '/message/im/sendRecSolution',
    {
      data
    }
  );
};

/**
 * 接口 会话列表 的 **请求类型**
 *
 */
/**
 * 会话列表参数
 */
export interface PostMessageImsessionListRequest {
  /**
   * 团队id
   */
  businessId?: string;
  /**
   * 姓名
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
 * 接口 会话列表 的 **返回类型**
 *
 */
/**
 * 会话列表响应
 */
export interface PostMessageImsessionListResponse {
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
}

/**
 * 接口 会话列表 的 **请求函数**
 *
 */
export const postMessageImsessionList = (data?: PostMessageImsessionListRequest) => {
  return request.post<PostMessageImsessionListRequest, PostMessageImsessionListResponse>('/message/im/sessionList', {
    data
  });
};

/**
 * 接口 模版批量发送 的 **请求类型**
 *
 */
/**
 * 模版批量发送参数
 */
export interface PostMessageImtmpBatchSendRequest {
  /**
   * 批量发送模版id
   */
  massTmpId: string;
  /**
   * 患者id集合
   */
  patientIds: string[];
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
 * 接口 模版批量发送 的 **返回类型**
 *
 */
/**
 * 批量发送响应
 */
export interface PostMessageImtmpBatchSendResponse {
  /**
   * 发送失败的 patient_id 集合
   */
  sendFail?: string[];
}

/**
 * 接口 模版批量发送 的 **请求函数**
 *
 */
export const postMessageImtmpBatchSend = (data?: PostMessageImtmpBatchSendRequest) => {
  return request.post<PostMessageImtmpBatchSendRequest, PostMessageImtmpBatchSendResponse>('/message/im/tmpBatchSend', {
    data
  });
};

/**
 * 接口 获取消息列表 的 **请求类型**
 *
 */
/**
 * 获取消息列表参数
 */
export interface PostMessageMessagelistRequest {
  /**
   * 分类 1：系统消息  2：重要消息  3：指标异常
   */
  classify?: number;
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
 * 接口 获取消息列表 的 **返回类型**
 *
 */
/**
 * 获取消息列表响应元素
 */
export interface PostMessageMessagelistResponse {
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
     * 患者名字
     */
    patientName?: string;
    /**
     * 内容
     */
    content?: {}[];
    /**
     * 分类 1：系统消息  2：重要消息  3：指标异常
     */
    classify?: number;
  }[];
}

/**
 * 接口 获取消息列表 的 **请求函数**
 *
 */
export const postMessageMessagelist = (data?: PostMessageMessagelistRequest) => {
  return request.post<PostMessageMessagelistRequest, PostMessageMessagelistResponse>('/message/message/list', {
    data
  });
};

/**
 * 接口 增加群发模板 的 **请求类型**
 *
 */
/**
 * 增加群发模板参数
 */
export interface PostMessageMessagemassTemplateAddRequest {
  /**
   * 内容
   */
  content?: string;
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
 * 接口 增加群发模板 的 **返回类型**
 *
 */
/**
 * 增加群发模板响应
 */
export interface PostMessageMessagemassTemplateAddResponse {
  /**
   * 模板ID
   */
  templateId?: number;
}

/**
 * 接口 增加群发模板 的 **请求函数**
 *
 */
export const postMessageMessagemassTemplateAdd = (data?: PostMessageMessagemassTemplateAddRequest) => {
  return request.post<PostMessageMessagemassTemplateAddRequest, PostMessageMessagemassTemplateAddResponse>(
    '/message/message/massTemplateAdd',
    {
      data
    }
  );
};

/**
 * 接口 删除群发模板 的 **请求类型**
 *
 */
/**
 * 删除群发模板参数
 */
export interface PostMessageMessagemassTemplateDeleteRequest {
  /**
   * 模板ID
   */
  templateId: number;
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
 * 接口 删除群发模板 的 **返回类型**
 *
 */
/**
 * 处理成功，通用响应对象
 */
export interface PostMessageMessagemassTemplateDeleteResponse {}

/**
 * 接口 删除群发模板 的 **请求函数**
 *
 */
export const postMessageMessagemassTemplateDelete = (data?: PostMessageMessagemassTemplateDeleteRequest) => {
  return request.post<PostMessageMessagemassTemplateDeleteRequest, PostMessageMessagemassTemplateDeleteResponse>(
    '/message/message/massTemplateDelete',
    {
      data
    }
  );
};

/**
 * 接口 修改群发模板 的 **请求类型**
 *
 */
/**
 * 修改群发模板参数
 */
export interface PostMessageMessagemassTemplateEditRequest {
  /**
   * 模板ID
   */
  templateId: number;
  /**
   * 内容
   */
  content?: string;
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
 * 接口 修改群发模板 的 **返回类型**
 *
 */
/**
 * 处理成功，通用响应对象
 */
export interface PostMessageMessagemassTemplateEditResponse {}

/**
 * 接口 修改群发模板 的 **请求函数**
 *
 */
export const postMessageMessagemassTemplateEdit = (data?: PostMessageMessagemassTemplateEditRequest) => {
  return request.post<PostMessageMessagemassTemplateEditRequest, PostMessageMessagemassTemplateEditResponse>(
    '/message/message/massTemplateEdit',
    {
      data
    }
  );
};

/**
 * 接口 群发模板列表 的 **请求类型**
 *
 */
/**
 * 群发模板列表参数
 */
export interface PostMessageMessagemassTemplateListRequest {
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
 * 接口 群发模板列表 的 **返回类型**
 *
 */
/**
 * 群发模板列表响应
 */
export interface PostMessageMessagemassTemplateListResponse {
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
     * 模板ID
     */
    templateId?: number;
    /**
     * 模板内容
     */
    content?: string;
  }[];
}

/**
 * 接口 群发模板列表 的 **请求函数**
 *
 */
export const postMessageMessagemassTemplateList = (data?: PostMessageMessagemassTemplateListRequest) => {
  return request.post<PostMessageMessagemassTemplateListRequest, PostMessageMessagemassTemplateListResponse>(
    '/message/message/massTemplateList',
    {
      data
    }
  );
};

/**
 * 接口 给患者发送短信 的 **请求类型**
 *
 */
/**
 * 给患者发送短信参数
 */
export interface PostMessageSmssendSmsToPatientRequest {
  /**
   * 用户模板ID (使用用户自定义模板发送短信必传)
   */
  userTemplateId?: string;
  /**
   * 短信模板ID
   */
  templateId?: string;
  /**
   * 患者ID
   */
  patientIds?: string[];
  /**
   * 模板元素列表
   */
  templateItemList?: {
    /**
     * 用户模板元素ID (使用用户自定义模板发送短信必传)
     */
    userTemplateItemId?: string;
    /**
     * 模板元素ID
     */
    templateItemId?: string;
    /**
     * 内容
     */
    value?: string;
  }[];
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
 * 接口 给患者发送短信 的 **返回类型**
 *
 */
/**
 * 给患者发送短信响应
 */
export interface PostMessageSmssendSmsToPatientResponse {
  /**
   * 发送成功的条数
   */
  count?: number;
}

/**
 * 接口 给患者发送短信 的 **请求函数**
 *
 */
export const postMessageSmssendSmsToPatient = (data?: PostMessageSmssendSmsToPatientRequest) => {
  return request.post<PostMessageSmssendSmsToPatientRequest, PostMessageSmssendSmsToPatientResponse>(
    '/message/sms/sendSmsToPatient',
    {
      data
    }
  );
};

/**
 * 接口 患者筛查发送短信 的 **请求类型**
 *
 */
/**
 * 患者筛查发送短信参数
 */
export interface PostMessageSmssendSmsToPatientScreeningRequest {
  /**
   * 用户模板ID (使用用户自定义模板发送短信必传)
   */
  userTemplateId?: string;
  /**
   * 短信模板ID
   */
  templateId?: string;
  /**
   * 患者ID
   */
  sourcePatientIds?: string[];
  /**
   * 模板元素列表
   */
  templateItemList?: {
    /**
     * 用户模板元素ID (使用用户自定义模板发送短信必传)
     */
    userTemplateItemId?: string;
    /**
     * 模板元素ID
     */
    templateItemId?: string;
    /**
     * 内容
     */
    value?: string;
  }[];
  /**
   * 机构ID
   */
  organId?: string;
  /**
   * 团队Id
   */
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
 * 接口 患者筛查发送短信 的 **返回类型**
 *
 */
/**
 * 患者筛查发送短信响应
 */
export interface PostMessageSmssendSmsToPatientScreeningResponse {
  /**
   * 发送成功的条数
   */
  count?: number;
}

/**
 * 接口 患者筛查发送短信 的 **请求函数**
 *
 */
export const postMessageSmssendSmsToPatientScreening = (data?: PostMessageSmssendSmsToPatientScreeningRequest) => {
  return request.post<PostMessageSmssendSmsToPatientScreeningRequest, PostMessageSmssendSmsToPatientScreeningResponse>(
    '/message/sms/sendSmsToPatientScreening',
    {
      data
    }
  );
};

/**
 * 接口 短信模板列表 的 **请求类型**
 *
 */
/**
 * 短信模板列表参数
 */
export interface PostMessageSmstemplateListRequest {
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
 * 接口 短信模板列表 的 **返回类型**
 *
 */
/**
 * 短信模板列表响应
 */
export interface PostMessageSmstemplateListResponse {
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
     * 模板ID
     */
    templateId?: string;
    /**
     * 名字
     */
    name?: string;
    /**
     * 模板元素列表
     */
    templateItemList?: {
      /**
       * 模板元素ID
       */
      templateItemId?: string;
      /**
       * 用户模板元素ID
       */
      userTemplateItemId?: string;
      /**
       * 用户模板ID
       */
      userTemplateId?: string;
      /**
       * 元素类型  1：文本   2：普通变量  3：系统变量(不可编辑)
       */
      type?: number;
      /**
       * 内容
       */
      value?: string;
      /**
       * 排序
       */
      order?: number;
    }[];
  }[];
}

/**
 * 接口 短信模板列表 的 **请求函数**
 *
 */
export const postMessageSmstemplateList = (data?: PostMessageSmstemplateListRequest) => {
  return request.post<PostMessageSmstemplateListRequest, PostMessageSmstemplateListResponse>(
    '/message/sms/templateList',
    {
      data
    }
  );
};

/**
 * 接口 用户短信模板添加 的 **请求类型**
 *
 */
/**
 * 用户短信模板添加参数
 */
export interface PostMessageSmsuserTemplateAddRequest {
  /**
   * 模板ID
   */
  templateId?: string;
  /**
   * 用户模板ID (编辑必传，添加不传)
   */
  userTemplateId?: string;
  /**
   * 模板元素列表
   */
  templateItemList?: {
    /**
     * 用户模板元素ID
     */
    userTemplateItemId?: string;
    /**
     * 模板元素ID
     */
    templateItemId?: string;
    /**
     * 内容
     */
    value?: string;
  }[];
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
 * 接口 用户短信模板添加 的 **返回类型**
 *
 */
/**
 * 用户短信模板添加响应
 */
export interface PostMessageSmsuserTemplateAddResponse {
  /**
   * 用户短信模板ID
   */
  userTemplateId?: string;
}

/**
 * 接口 用户短信模板添加 的 **请求函数**
 *
 */
export const postMessageSmsuserTemplateAdd = (data?: PostMessageSmsuserTemplateAddRequest) => {
  return request.post<PostMessageSmsuserTemplateAddRequest, PostMessageSmsuserTemplateAddResponse>(
    '/message/sms/userTemplateAdd',
    {
      data
    }
  );
};

/**
 * 接口 用户短信模板删除 的 **请求类型**
 *
 */
/**
 * 用户短信模板删除参数
 */
export interface PostMessageSmsuserTemplateDeleteRequest {
  /**
   * 用户模板ID
   */
  userTemplateId?: string;
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
 * 接口 用户短信模板删除 的 **返回类型**
 *
 */
/**
 * 用户短信模板删除响应
 */
export interface PostMessageSmsuserTemplateDeleteResponse {
  /**
   * 用户模板ID
   */
  userTemplateId?: string;
}

/**
 * 接口 用户短信模板删除 的 **请求函数**
 *
 */
export const postMessageSmsuserTemplateDelete = (data?: PostMessageSmsuserTemplateDeleteRequest) => {
  return request.post<PostMessageSmsuserTemplateDeleteRequest, PostMessageSmsuserTemplateDeleteResponse>(
    '/message/sms/userTemplateDelete',
    {
      data
    }
  );
};

/**
 * 接口 用户短信模板列表 的 **请求类型**
 *
 */
/**
 * 用户短信模板列表参数
 */
export interface PostMessageSmsuserTemplateListRequest {
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
 * 接口 用户短信模板列表 的 **返回类型**
 *
 */
/**
 * 用户短信模板列表响应
 */
export interface PostMessageSmsuserTemplateListResponse {
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
     * 用户短信模板ID
     */
    userTemplateId?: string;
    /**
     * 短信模板ID
     */
    templateId?: string;
    /**
     * 名字
     */
    name?: string;
    /**
     * 用户模板元素列表
     */
    templateItemList?: {
      /**
       * 用户模板元素ID
       */
      userTemplateItemId?: string;
      /**
       * 模板元素ID
       */
      templateItemId?: string;
      /**
       * 元素类型  1：文本   2：普通变量  3：系统变量(不可编辑)
       */
      type?: number;
      /**
       * 内容
       */
      value?: string;
      /**
       * 排序
       */
      order?: number;
    }[];
  }[];
}

/**
 * 接口 用户短信模板列表 的 **请求函数**
 *
 */
export const postMessageSmsuserTemplateList = (data?: PostMessageSmsuserTemplateListRequest) => {
  return request.post<PostMessageSmsuserTemplateListRequest, PostMessageSmsuserTemplateListResponse>(
    '/message/sms/userTemplateList',
    {
      data
    }
  );
};
