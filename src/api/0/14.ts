/**
 * Created By api-typescript
 * https://alidocs.dingtalk.com/i/team/dN0G7AD82xAq4XWY/docs/dN0G78qlBL1o7zWY#
 */

import request from '../request';

/**
 * 接口 添加患者分类 的 **请求类型**
 *
 */
/**
 * 添加患者分类参数
 */
export interface PostPatientPatientCategoryaddRequest {
  /**
   * 患者分类ID
   */
  categoryId?: string;
  /**
   * 父ID
   */
  pid?: string;
  /**
   * 名字
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
 * 接口 添加患者分类 的 **返回类型**
 *
 */
/**
 * 添加患者分类响应
 */
export interface PostPatientPatientCategoryaddResponse {
  /**
   * 分组id
   */
  categoryId?: string;
}

/**
 * 接口 添加患者分类 的 **请求函数**
 *
 */
export const postPatientPatientCategoryadd = (data?: PostPatientPatientCategoryaddRequest) => {
  return request.post<PostPatientPatientCategoryaddRequest, PostPatientPatientCategoryaddResponse>(
    '/patient/patientCategory/add',
    {
      data
    }
  );
};

/**
 * 接口 患者入组 的 **请求类型**
 *
 */
/**
 * 患者入组参数
 */
export interface PostPatientPatientCategoryaddPatientRequest {
  /**
   * 分组ID
   */
  categoryId?: string;
  /**
   * 机构ID
   */
  organId?: string;
  /**
   * 患者IDS
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
 * 接口 患者入组 的 **返回类型**
 *
 */
/**
 * 患者入组响应
 */
export interface PostPatientPatientCategoryaddPatientResponse {
  /**
   * 成功的条数
   */
  count?: number;
}

/**
 * 接口 患者入组 的 **请求函数**
 *
 */
export const postPatientPatientCategoryaddPatient = (data?: PostPatientPatientCategoryaddPatientRequest) => {
  return request.post<PostPatientPatientCategoryaddPatientRequest, PostPatientPatientCategoryaddPatientResponse>(
    '/patient/patientCategory/addPatient',
    {
      data
    }
  );
};

/**
 * 接口 患者分类删除 的 **请求类型**
 *
 */
/**
 * 患者分类删除参数
 */
export interface PostPatientPatientCategorydeleteRequest {
  /**
   * 分组id
   */
  categoryId?: string;
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
 * 接口 患者分类删除 的 **返回类型**
 *
 */
/**
 * 患者分类删除响应
 */
export interface PostPatientPatientCategorydeleteResponse {
  /**
   * 成功的条数
   */
  count?: number;
}

/**
 * 接口 患者分类删除 的 **请求函数**
 *
 */
export const postPatientPatientCategorydelete = (data?: PostPatientPatientCategorydeleteRequest) => {
  return request.post<PostPatientPatientCategorydeleteRequest, PostPatientPatientCategorydeleteResponse>(
    '/patient/patientCategory/delete',
    {
      data
    }
  );
};

/**
 * 接口 移除患者 的 **请求类型**
 *
 */
/**
 * 移除患者参数
 */
export interface PostPatientPatientCategorydeletePatientRequest {
  /**
   * 分组ID
   */
  categoryId?: string;
  /**
   * 机构ID
   */
  organId?: string;
  /**
   * 患者IDS
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
 * 接口 移除患者 的 **返回类型**
 *
 */
/**
 * 移除患者响应
 */
export interface PostPatientPatientCategorydeletePatientResponse {
  /**
   * 删除行数
   */
  count?: number;
}

/**
 * 接口 移除患者 的 **请求函数**
 *
 */
export const postPatientPatientCategorydeletePatient = (data?: PostPatientPatientCategorydeletePatientRequest) => {
  return request.post<PostPatientPatientCategorydeletePatientRequest, PostPatientPatientCategorydeletePatientResponse>(
    '/patient/patientCategory/deletePatient',
    {
      data
    }
  );
};

/**
 * 接口 患者分类列表 的 **请求类型**
 *
 */
/**
 * 患者分类列表参数
 */
export interface PostPatientPatientCategorylistRequest {
  /**
   * 机构ID
   */
  organId?: number;
  /**
   * 显示召回(1-是,2-否)
   */
  hideRecall?: 1 | 2;
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
 * 接口 患者分类列表 的 **返回类型**
 *
 */
/**
 * 患者分类列表响应
 */
export interface PostPatientPatientCategorylistResponse {
  /**
   * 内容
   */
  content?: {
    /**
     * 分组ID
     */
    categoryId?: string;
    /**
     * 名字
     */
    name?: string;
    /**
     * 父id
     */
    pid?: string;
    /**
     * 数量
     */
    count?: number;
    /**
     * 子元素列表
     */
    subs?: {}[];
    /**
     * 是否默认选中  1：选中   2:不选中
     */
    checked?: number;
    /**
     * 分组编号
     */
    code?: string;
  }[];
}

/**
 * 接口 患者分类列表 的 **请求函数**
 *
 */
export const postPatientPatientCategorylist = (data?: PostPatientPatientCategorylistRequest) => {
  return request.post<PostPatientPatientCategorylistRequest, PostPatientPatientCategorylistResponse>(
    '/patient/patientCategory/list',
    {
      data
    }
  );
};

/**
 * 接口 患者风险筛查筛选条 的 **请求类型**
 *
 */
/**
 * 患者风险筛查筛选条参数
 */
export interface PostPatientPatientCategorypatientFilterBarRequest {
  /**
   * 分组ID
   */
  categoryId?: string;
  /**
   * 分组状态  1：已分组  0：未分组
   */
  isCategorized?: number;
  /**
   * 关键词
   */
  keyword?: string;
  /**
   * 机构ID
   */
  organId?: string;
  /**
   * 团队ID
   */
  teamId?: string;
  /**
   * 性别
   */
  gender?: number;
  /**
   * 年龄段
   */
  ageStage?: number;
  /**
   * 风险
   */
  risk?: number;
  /**
   * 依从性
   */
  compliance?: number;
}

/**
 * 接口 患者风险筛查筛选条 的 **返回类型**
 *
 */
/**
 * 患者风险筛查筛选条响应
 */
export interface PostPatientPatientCategorypatientFilterBarResponse {
  /**
   * 性别
   */
  gender?: {
    /**
     * 名称
     */
    name?: string;
    /**
     * 值
     */
    value?: string;
    /**
     * 数量
     */
    num?: string;
  }[];
  /**
   * 年龄段
   */
  ageStage?: {
    /**
     * 名称
     */
    name?: string;
    /**
     * 值
     */
    value?: string;
    /**
     * 数量
     */
    num?: string;
  }[];
  /**
   * 风险
   */
  risk?: {
    /**
     * 名称
     */
    name?: string;
    /**
     * 值
     */
    value?: string;
    /**
     * 数量
     */
    num?: string;
  }[];
  /**
   * 依从性
   */
  compliance?: {
    /**
     * 名称
     */
    name?: string;
    /**
     * 值
     */
    value?: string;
    /**
     * 数量
     */
    num?: string;
  }[];
}

/**
 * 接口 患者风险筛查筛选条 的 **请求函数**
 *
 */
export const postPatientPatientCategorypatientFilterBar = (
  data?: PostPatientPatientCategorypatientFilterBarRequest
) => {
  return request.post<
    PostPatientPatientCategorypatientFilterBarRequest,
    PostPatientPatientCategorypatientFilterBarResponse
  >('/patient/patientCategory/patientFilterBar', {
    data
  });
};

/**
 * 接口 患者风险筛查列表 的 **请求类型**
 *
 */
/**
 * 患者风险筛查列表参数
 */
export interface PostPatientPatientCategorypatientFilterListRequest {
  /**
   * 分组ID
   */
  categoryId?: string;
  /**
   * 分组状态  1：已分组  0：未分组
   */
  isCategorized?: number;
  /**
   * 关键词
   */
  keyword?: string;
  /**
   * 机构ID
   */
  organId?: string;
  /**
   * 团队ID
   */
  teamId?: string;
  /**
   * 性别
   */
  gender?: number;
  /**
   * 年龄段
   */
  ageStage?: number;
  /**
   * 风险
   */
  risk?: number;
  /**
   * 依从性
   */
  compliance?: number;
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
 * 接口 患者风险筛查列表 的 **返回类型**
 *
 */
/**
 * 患者风险筛查列表响应
 */
export interface PostPatientPatientCategorypatientFilterListResponse {
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
     * 姓名
     */
    name?: string;
    /**
     * 是否绑定用户 1已绑定用户 2未绑定用户
     */
    isBind?: number;
    /**
     * 生日
     */
    birthdate?: string;
    /**
     * 年龄
     */
    age?: string;
    /**
     * '性别  1：男   2：女   3：未知',
     */
    gender?: number;
    /**
     * 联系方式
     */
    contactMobile?: string;
    /**
     * 机构ID
     */
    organId?: string;
    /**
     * 机构名字
     */
    organName?: string;
    /**
     * 团队
     */
    teams?: {
      /**
       * 团队Id
       */
      teamId?: string;
      /**
       * 名字
       */
      name?: string;
    }[];
    /**
     * 组名字
     */
    categorys?: {
      /**
       * 组Id
       */
      categoryId?: string;
      /**
       * 名字
       */
      name?: string;
    }[];
  }[];
}

/**
 * 接口 患者风险筛查列表 的 **请求函数**
 *
 */
export const postPatientPatientCategorypatientFilterList = (
  data?: PostPatientPatientCategorypatientFilterListRequest
) => {
  return request.post<
    PostPatientPatientCategorypatientFilterListRequest,
    PostPatientPatientCategorypatientFilterListResponse
  >('/patient/patientCategory/patientFilterList', {
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
export interface PostPatientPatientCategorypatientListRequest {
  /**
   * 分组ID
   */
  categoryId?: string;
  /**
   * 分组状态  1：已分组  2：未分组  0：全部
   */
  categoryStatus?: number;
  /**
   * 关键词
   */
  keyword?: string;
  /**
   * 机构ID
   */
  organId?: string;
  /**
   * 团队ID
   */
  teamId?: string;
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
export interface PostPatientPatientCategorypatientListResponse {
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
     * 姓名
     */
    name?: string;
    /**
     * 是否绑定用户 1已绑定用户 2未绑定用户
     */
    isBind?: number;
    /**
     * 生日
     */
    birthdate?: string;
    /**
     * 年龄
     */
    age?: string;
    /**
     * '性别  1：男   2：女   3：未知',
     */
    gender?: number;
    /**
     * 联系方式
     */
    contactMobile?: string;
    /**
     * 机构ID
     */
    organId?: string;
    /**
     * 机构名字
     */
    organName?: string;
    /**
     * 团队
     */
    teams?: {
      /**
       * 团队Id
       */
      teamId?: string;
      /**
       * 名字
       */
      name?: string;
    }[];
    /**
     * 组名字
     */
    categorys?: {
      /**
       * 组Id
       */
      categoryId?: string;
      /**
       * 名字
       */
      name?: string;
    }[];
  }[];
}

/**
 * 接口 患者列表 的 **请求函数**
 *
 */
export const postPatientPatientCategorypatientList = (data?: PostPatientPatientCategorypatientListRequest) => {
  return request.post<PostPatientPatientCategorypatientListRequest, PostPatientPatientCategorypatientListResponse>(
    '/patient/patientCategory/patientList',
    {
      data
    }
  );
};
