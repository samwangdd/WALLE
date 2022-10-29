/**
 * Created By api-typescript
 * https://alidocs.dingtalk.com/i/team/dN0G7AD82xAq4XWY/docs/dN0G78qlBL1o7zWY#
 */

import request from '../request';

/**
 * 接口 添加团队 的 **请求类型**
 *
 */
/**
 * 添加和编辑参数
 */
export interface PostUserTeamaddRequest {
  /**
   * 名字
   */
  name: string;
  /**
   * 机构ID
   */
  organId: string;
  /**
   * 科室ID
   */
  departmentId?: string;
  /**
   * 首图
   */
  headImg: string;
  /**
   * 简介
   */
  brief: string;
  /**
   * 团队成员
   */
  users: {
    /**
     * 用户ID
     */
    userId: string;
    /**
     * 团队负责人
     */
    isMain?: number;
    /**
     * 角色ID
     */
    roleId?: string;
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
 * 接口 添加团队 的 **返回类型**
 *
 */
/**
 * 添加和编辑响应
 */
export interface PostUserTeamaddResponse {
  /**
   * 团队ID
   */
  teamId?: string;
}

/**
 * 接口 添加团队 的 **请求函数**
 *
 */
export const postUserTeamadd = (data?: PostUserTeamaddRequest) => {
  return request.post<PostUserTeamaddRequest, PostUserTeamaddResponse>('/user/team/add', {
    data
  });
};

/**
 * 接口 详情 的 **请求类型**
 *
 */
/**
 * 详情参数
 */
export interface PostUserTeamdetailRequest {
  /**
   * 团队ID
   */
  teamId: string;
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
 * 接口 详情 的 **返回类型**
 *
 */
/**
 * 详情响应
 */
export interface PostUserTeamdetailResponse {
  /**
   * 团队ID
   */
  teamId?: string;
  /**
   * 机构ID
   */
  organId?: string;
  /**
   * 机构名字
   */
  organName?: string;
  /**
   * 科室ID
   */
  departmentId?: string;
  /**
   * 科室名字
   */
  departmentName?: string;
  /**
   * 简介
   */
  brief?: string;
  /**
   * 团队头像
   */
  headImg?: string;
  /**
   * 团队名称
   */
  name?: string;
  /**
   * 评分
   */
  score?: number;
  /**
   * 患者人数
   */
  patientNum?: number;
  /**
   * 团队成员列表
   */
  teamItemList?: {
    /**
     * 用户ID
     */
    userId?: string;
    /**
     * 名称
     */
    name?: string;
    /**
     * 团队角色ID
     */
    teamRoleId?: string;
    /**
     * 团队角色名字
     */
    teamRoleName?: string;
    /**
     * 头像
     */
    avatar?: string;
    /**
     * 职称
     */
    title?: string;
    /**
     * 是否是团队长  1：是  2：不是
     */
    isMain?: number;
  }[];
}

/**
 * 接口 详情 的 **请求函数**
 *
 */
export const postUserTeamdetail = (data?: PostUserTeamdetailRequest) => {
  return request.post<PostUserTeamdetailRequest, PostUserTeamdetailResponse>('/user/team/detail', {
    data
  });
};

/**
 * 接口 编辑团队 的 **请求类型**
 *
 */
/**
 * 添加和编辑参数
 */
export interface PostUserTeameditRequest {
  /**
   * 团队ID
   */
  teamId?: string;
  /**
   * 名字
   */
  name: string;
  /**
   * 科室ID
   */
  departmentId?: string;
  /**
   * 首图
   */
  headImg: string;
  /**
   * 简介
   */
  brief: string;
  /**
   * 团队成员
   */
  users: {
    /**
     * 用户ID
     */
    userId: string;
    /**
     * 团队负责人
     */
    isMain?: number;
    /**
     * 角色ID
     */
    roleId?: string;
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
 * 接口 编辑团队 的 **返回类型**
 *
 */
/**
 * 添加和编辑响应
 */
export interface PostUserTeameditResponse {
  /**
   * 团队ID
   */
  teamId?: string;
}

/**
 * 接口 编辑团队 的 **请求函数**
 *
 */
export const postUserTeamedit = (data?: PostUserTeameditRequest) => {
  return request.post<PostUserTeameditRequest, PostUserTeameditResponse>('/user/team/edit', {
    data
  });
};

/**
 * 接口 编辑状态 的 **请求类型**
 *
 */
/**
 * 编辑状态参数
 */
export interface PostUserTeameditStatusRequest {
  /**
   * 团队IDs
   */
  teamIds?: string[];
  /**
   * 状态  1:启用  2：禁用
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
export interface PostUserTeameditStatusResponse {
  /**
   * 成功的条数
   */
  count?: number;
}

/**
 * 接口 编辑状态 的 **请求函数**
 *
 */
export const postUserTeameditStatus = (data?: PostUserTeameditStatusRequest) => {
  return request.post<PostUserTeameditStatusRequest, PostUserTeameditStatusResponse>('/user/team/editStatus', {
    data
  });
};

/**
 * 接口 列表 的 **请求类型**
 *
 */
/**
 * 用户团队列表参数
 */
export interface PostUserTeamlistRequest {
  /**
   * 团队名称
   */
  name?: string;
  /**
   * 团队id集合
   */
  ''?: string[];
  /**
   * 机构id
   */
  organId?: string;
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
 * 团队列表响应
 */
export interface PostUserTeamlistResponse {
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
  content?: {
    /**
     * 机构ID
     */
    organId?: string;
    /**
     * 团队ID
     */
    teamId?: string;
    /**
     * 团队头像
     */
    headImg?: string;
    /**
     * 团队名称
     */
    name?: string;
    /**
     * 机构名字
     */
    organName?: string;
    /**
     * 团队人数
     */
    num?: number;
    /**
     * 状态  1：启用  2：禁用
     */
    status?: number;
    /**
     * 创建时间
     */
    xCreateTime?: string;
    /**
     * 评分
     */
    score?: number;
    /**
     * 服务中患者人数
     */
    servicePatientNum?: number;
    /**
     * 团队成员列表
     */
    teamItemList?: {
      /**
       * 用户ID
       */
      userId?: string;
      /**
       * 名称
       */
      name?: string;
      /**
       * 团队角色ID
       */
      teamRoleId?: string;
      /**
       * 团队角色名字
       */
      teamRoleName?: string;
      /**
       * 头像
       */
      avatar?: string;
      /**
       * 职称
       */
      title?: string;
      /**
       * 是否是团队长  1：是  2：不是
       */
      isMain?: number;
    }[];
  }[];
}

/**
 * 接口 列表 的 **请求函数**
 *
 */
export const postUserTeamlist = (data?: PostUserTeamlistRequest) => {
  return request.post<PostUserTeamlistRequest, PostUserTeamlistResponse>('/user/team/list', {
    data
  });
};

/**
 * 接口 医生是否绑定团队 的 **请求类型**
 *
 */
/**
 * 医生是否绑定团队参数
 */
export interface PostUserUserisBindTeamRequest {
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
 * 接口 医生是否绑定团队 的 **返回类型**
 *
 */
/**
 * 医生是否绑定团队响应
 */
export interface PostUserUserisBindTeamResponse {
  /**
   * 绑定状态 1. 已绑定 2. 未绑定
   */
  status?: number;
}

/**
 * 接口 医生是否绑定团队 的 **请求函数**
 *
 */
export const postUserUserisBindTeam = (data?: PostUserUserisBindTeamRequest) => {
  return request.post<PostUserUserisBindTeamRequest, PostUserUserisBindTeamResponse>('/user/user/isBindTeam', {
    data
  });
};
