/**
 * Created By api-typescript
 * https://alidocs.dingtalk.com/i/team/dN0G7AD82xAq4XWY/docs/dN0G78qlBL1o7zWY#
 */

import request from '../request';

/**
 * 接口 用户添加并绑定到机构 的 **请求类型**
 *
 */
/**
 * 用户添加参数
 */
export interface PostUserAdminaddRequest {
  /**
   * 头像
   */
  avatar?: string;
  /**
   * 执照
   */
  license?: string;
  /**
   * 姓名
   */
  name: string;
  /**
   * 性别
   */
  sex: 1 | 2;
  /**
   * 证件号
   */
  certNo: string;
  /**
   * 证件类型 1身份证
   */
  certType: 1;
  /**
   * 手机号
   */
  phone: string;
  /**
   * 职称ID
   */
  professionalTitleId?: string;
  /**
   * 简介
   */
  brief?: string;
  /**
   * 擅长
   */
  speciality?: string;
  /**
   * 出生年月日
   */
  birthday?: string;
  /**
   * 机构ID
   * 当且仅当用户为系统管理员时可填写
   */
  organId: string;
  /**
   * 科室ID
   */
  departmentId: string;
  /**
   * 是否为医生
   */
  isDoctor?: number;
  /**
   * 角色ID
   */
  roleIds: {};
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
 * 接口 用户添加并绑定到机构 的 **返回类型**
 *
 */
/**
 * 添加用户响应
 */
export interface PostUserAdminaddResponse {
  /**
   * 用户ID
   */
  userId?: string;
}

/**
 * 接口 用户添加并绑定到机构 的 **请求函数**
 *
 */
export const postUserAdminadd = (data?: PostUserAdminaddRequest) => {
  return request.post<PostUserAdminaddRequest, PostUserAdminaddResponse>('/user/admin/add', {
    data
  });
};

/**
 * 接口 绑定用户到机构 的 **请求类型**
 *
 */
/**
 * 机构用户绑定用户参数
 */
export interface PostUserAdminbindOrganRequest {
  /**
   * 用户ID
   */
  userId: number;
  /**
   * 机构ID
   * 当且仅当用户为系统管理员时可填写
   */
  organId?: number;
  /**
   * 科室ID
   */
  departmentId?: number;
  /**
   * 角色ID
   */
  roleIds: number[];
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
 * 接口 绑定用户到机构 的 **返回类型**
 *
 */
/**
 * 处理成功，通用响应对象
 */
export interface PostUserAdminbindOrganResponse {}

/**
 * 接口 绑定用户到机构 的 **请求函数**
 *
 */
export const postUserAdminbindOrgan = (data?: PostUserAdminbindOrganRequest) => {
  return request.post<PostUserAdminbindOrganRequest, PostUserAdminbindOrganResponse>('/user/admin/bindOrgan', {
    data
  });
};

/**
 * 接口 用户详情 的 **请求类型**
 *
 */
/**
 * 用户详情参数
 */
export interface PostUserAdmindetailRequest {
  /**
   * 用户id
   */
  userId: string;
  /**
   * 机构ID
   */
  organId?: number;
  /**
   * 是否包含团队信息  1:包含   2：不包含 默认
   */
  includeTeam?: number;
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
 * 接口 用户详情 的 **返回类型**
 *
 */
/**
 * 用户详情响应
 */
export interface PostUserAdmindetailResponse {
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
   * 科室ID
   */
  departmentId?: string;
  /**
   * 是否为医生
   */
  isDoctor?: number;
  /**
   * 科室名字
   */
  departmentName?: string;
  /**
   * 机构ID
   */
  organId?: string;
  /**
   * 机构名字
   */
  organName?: string;
  /**
   * 角色IDs
   */
  roleIds?: {};
  /**
   * 角色列表
   */
  roleItems?: {
    /**
     * ID
     */
    id?: string;
    /**
     * 名称
     */
    name?: string;
  }[];
  /**
   * 角色名字
   */
  roleName?: string;
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
  /**
   * 团队列表
   */
  teamList?: {
    /**
     * 团队ID
     */
    teamId?: number;
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
  }[];
}

/**
 * 接口 用户详情 的 **请求函数**
 *
 */
export const postUserAdmindetail = (data?: PostUserAdmindetailRequest) => {
  return request.post<PostUserAdmindetailRequest, PostUserAdmindetailResponse>('/user/admin/detail', {
    data
  });
};

/**
 * 接口 用户编辑 的 **请求类型**
 *
 */
/**
 * 编辑用户参数
 */
export interface PostUserAdmineditRequest {
  /**
   * 用户ID
   */
  userId: number;
  /**
   * 机构ID
   */
  organId: number;
  /**
   * 头像
   */
  avatar?: string;
  /**
   * 执照
   */
  license?: string;
  /**
   * 姓名
   */
  name?: string;
  /**
   * 性别
   */
  sex?: 1 | 2;
  /**
   * 证件号
   */
  certNo?: string;
  /**
   * 证件类型 1身份证
   */
  certType?: 1;
  /**
   * 职称ID
   */
  professionalTitleId?: string;
  /**
   * 简介
   */
  brief?: string;
  /**
   * 擅长
   */
  speciality?: string;
  /**
   * 出生年月日
   */
  birthday?: string;
  /**
   * 科室ID
   */
  departmentId?: string;
  /**
   * 是否为医生
   */
  isDoctor?: number;
  /**
   * 角色ID
   */
  roleIds?: {};
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
 * 接口 用户编辑 的 **返回类型**
 *
 */
/**
 * 用户编辑响应
 */
export interface PostUserAdmineditResponse {
  /**
   * userId
   */
  userId?: string;
}

/**
 * 接口 用户编辑 的 **请求函数**
 *
 */
export const postUserAdminedit = (data?: PostUserAdmineditRequest) => {
  return request.post<PostUserAdmineditRequest, PostUserAdmineditResponse>('/user/admin/edit', {
    data
  });
};

/**
 * 接口 用户密码修改 的 **请求类型**
 *
 */
/**
 * 修改用户密码参数
 */
export interface PostUserAdmineditPwdRequest {
  /**
   * 用户id
   */
  userId: string;
  /**
   * 旧密码
   */
  oldPassword: string;
  /**
   * 新密码
   */
  newPassword: string;
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
 * 接口 用户密码修改 的 **返回类型**
 *
 */
/**
 * 处理成功，通用响应对象
 */
export interface PostUserAdmineditPwdResponse {}

/**
 * 接口 用户密码修改 的 **请求函数**
 *
 */
export const postUserAdmineditPwd = (data?: PostUserAdmineditPwdRequest) => {
  return request.post<PostUserAdmineditPwdRequest, PostUserAdmineditPwdResponse>('/user/admin/editPwd', {
    data
  });
};

/**
 * 接口 根据手机号获取用户信息 的 **请求类型**
 *
 */
/**
 * 根据手机号获取用户信息参数
 */
export interface PostUserAdmingetByPhoneRequest {
  /**
   * 手机号
   */
  phone?: string;
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
 * 接口 根据手机号获取用户信息 的 **返回类型**
 *
 */
/**
 * 根据手机号获取用户信息响应
 */
export interface PostUserAdmingetByPhoneResponse {
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
 * 接口 根据手机号获取用户信息 的 **请求函数**
 *
 */
export const postUserAdmingetByPhone = (data?: PostUserAdmingetByPhoneRequest) => {
  return request.post<PostUserAdmingetByPhoneRequest, PostUserAdmingetByPhoneResponse>('/user/admin/getByPhone', {
    data
  });
};

/**
 * 接口 列表 的 **请求类型**
 *
 */
/**
 * 用户列表参数
 */
export interface PostUserAdminlistRequest {
  /**
   * 关键词
   */
  keyword?: string;
  /**
   * 职称ID列表
   */
  professionalTitleIds?: string[];
  /**
   * 机构ID
   */
  organId?: number;
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
 * 用户列表响应
 */
export interface PostUserAdminlistResponse {
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
     * 姓名
     */
    name?: string;
    /**
     * 职称ID
     */
    professionalTitleId?: string;
    /**
     * 职称名字
     */
    professionalTitleName?: string;
    /**
     * 角色名字
     */
    roleName?: string;
    /**
     * 手机号
     */
    phone?: string;
    /**
     * 机构用户ID
     */
    organUserId?: string;
    /**
     * 机构ID
     */
    organId?: string;
    /**
     * 机构名称
     */
    organName?: string;
    /**
     * 用户id
     */
    userId?: string;
    /**
     * 创建时间
     */
    xCreateTime?: string;
    /**
     * 状态
     */
    status?: number;
  }[];
}

/**
 * 接口 列表 的 **请求函数**
 *
 */
export const postUserAdminlist = (data?: PostUserAdminlistRequest) => {
  return request.post<PostUserAdminlistRequest, PostUserAdminlistResponse>('/user/admin/list', {
    data
  });
};

/**
 * 接口 切换登陆机构和角色 的 **请求类型**
 *
 */
/**
 * 切换登陆机构和角色参数
 */
export interface PostUserAdminloginSwitchRequest {
  /**
   * 机构ID
   */
  organId?: number;
  /**
   * 角色ID
   */
  roleId?: number;
  /**
   * 设备码
   */
  deviceNum?: string;
  /**
   * 设备类型
   */
  deviceType?: string;
  /**
   * 设备uuid
   */
  deviceUUID?: string;
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
 * 接口 切换登陆机构和角色 的 **返回类型**
 *
 */
/**
 * 手机号登录响应
 */
export interface PostUserAdminloginSwitchResponse {
  /**
   * token
   */
  token?: string;
  /**
   * 登录用户信息响应
   */
  info?: {
    /**
     * 姓名
     */
    name?: string;
    /**
     * 头像
     */
    avatar?: string;
    /**
     * adminId
     */
    adminId?: string;
    /**
     * 手机号
     */
    phone?: string;
    /**
     * 用户id
     */
    userId?: string;
    /**
     * 是否为系统账号
     */
    isSystemAccount?: boolean;
    /**
     * 是否有二维码
     */
    hasQrCode?: boolean;
    /**
     * 机构ID
     */
    organId?: string;
    /**
     * 团队角色名
     */
    teamRoleName?: string;
    /**
     * 团队id
     */
    teamId?: string;
  };
  /**
   * 角色信息
   */
  roleInfo?: {
    /**
     * 角色ID
     */
    roleId?: string;
    /**
     * 角色名字
     */
    roleName?: string;
    /**
     * 角色code
     */
    roleCode?: string;
    /**
     * 角色类型   角色类型 0超级管理员 1机构管理员 2普通用户 3自定义角色
     */
    roleType?: number;
  };
  /**
   * 可访问接口资源列表
   */
  allowAccessResources?: string[];
  /**
   * 主菜单列表
   *
   * <ul>
   *
   * <li>home:工作台</li>
   * <li>patient:患者管理</li>
   * <li>solution:方案管理</li>
   * <li>user:用户管理</li>
   * <li>team:团队管理</li>
   * <li>meta:无数据管理</li>
   * <li>patientCategory:患者分组管理</li>
   * <li>solutionBenchmarking:方案对标管理</li>
   * <li>servicePkg:服务包管理</li>
   * <li>organization:机构管理管理</li>
   * <li>role:角色管理</li>
   * <li>article:内容管理</li>
   * <li>followup:评估随访管理</li>
   * <li>order:订单模块</li>
   * <li>im:IM模块</li>
   * </ul>
   */
  mainMenus?: string[];
  /**
   * 是否白名单用户
   */
  isWhitelistUser?: boolean;
  /**
   * 医生小程序主页地址
   */
  miniProgramUrl?: string;
  /**
   * his登录信息
   */
  hisLoginRespVO?: {
    /**
     * 令牌
     */
    accessToken?: string;
    /**
     * 令牌类型
     */
    tokenType?: string;
    /**
     * 刷新令牌
     */
    refreshToken?: string;
    /**
     * 过期时间
     */
    expiresIn?: string;
    /**
     * scope
     */
    scope?: string;
  };
}

/**
 * 接口 切换登陆机构和角色 的 **请求函数**
 *
 */
export const postUserAdminloginSwitch = (data?: PostUserAdminloginSwitchRequest) => {
  return request.post<PostUserAdminloginSwitchRequest, PostUserAdminloginSwitchResponse>('/user/admin/loginSwitch', {
    data
  });
};

/**
 * 接口 当前用户详情 的 **请求类型**
 *
 */
/**
 * 基础参数对象
 */
export interface PostUserAdminmyDetailRequest {
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
 * 接口 当前用户详情 的 **返回类型**
 *
 */
/**
 * 用户详情响应
 */
export interface PostUserAdminmyDetailResponse {
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
   * 科室ID
   */
  departmentId?: string;
  /**
   * 是否为医生
   */
  isDoctor?: number;
  /**
   * 科室名字
   */
  departmentName?: string;
  /**
   * 机构ID
   */
  organId?: string;
  /**
   * 机构名字
   */
  organName?: string;
  /**
   * 角色IDs
   */
  roleIds?: {};
  /**
   * 角色列表
   */
  roleItems?: {
    /**
     * ID
     */
    id?: string;
    /**
     * 名称
     */
    name?: string;
  }[];
  /**
   * 角色名字
   */
  roleName?: string;
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
  /**
   * 团队列表
   */
  teamList?: {
    /**
     * 团队ID
     */
    teamId?: number;
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
  }[];
}

/**
 * 接口 当前用户详情 的 **请求函数**
 *
 */
export const postUserAdminmyDetail = (data?: PostUserAdminmyDetailRequest) => {
  return request.post<PostUserAdminmyDetailRequest, PostUserAdminmyDetailResponse>('/user/admin/myDetail', {
    data
  });
};

/**
 * 接口 角色列表 的 **请求类型**
 *
 */
/**
 * 角色列表参数
 */
export interface PostUserAdminrolesRequest {
  /**
   * 角色类型
   *
   * <ul>
   * <li>1:系统管理角色</li>
   * <li>2:机构管理角色</li>
   * </ul>
   */
  roleType?: number;
  /**
   * 机构ID
   */
  organId?: number;
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
 * 接口 角色列表 的 **返回类型**
 *
 */
/**
 * 用户角色列表响应
 */
export interface PostUserAdminrolesResponse {
  content?: {
    /**
     * 角色ID
     */
    roleId?: string;
    /**
     * 角色名称
     */
    roleName?: string;
  }[];
}

/**
 * 接口 角色列表 的 **请求函数**
 *
 */
export const postUserAdminroles = (data?: PostUserAdminrolesRequest) => {
  return request.post<PostUserAdminrolesRequest, PostUserAdminrolesResponse>('/user/admin/roles', {
    data
  });
};

/**
 * 接口 设置状态 的 **请求类型**
 *
 */
/**
 * 用户状态设置参数
 */
export interface PostUserAdminsetStatusRequest {
  /**
   * 机构用户IDs
   */
  organUserIds: {};
  /**
   * 状态 1 启用 2 禁用
   */
  status: string;
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
 * 接口 设置状态 的 **返回类型**
 *
 */
/**
 * 处理成功，通用响应对象
 */
export interface PostUserAdminsetStatusResponse {}

/**
 * 接口 设置状态 的 **请求函数**
 *
 */
export const postUserAdminsetStatus = (data?: PostUserAdminsetStatusRequest) => {
  return request.post<PostUserAdminsetStatusRequest, PostUserAdminsetStatusResponse>('/user/admin/setStatus', {
    data
  });
};

/**
 * 接口 用户可访问接口列表 的 **请求类型**
 *
 */
/**
 * 用户可访问接口列表参数
 */
export interface PostUserAdminuserAllowResourcesRequest {
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
 * 接口 用户可访问接口列表 的 **返回类型**
 *
 */
/**
 * 用户可访问接口列表响应
 */
export interface PostUserAdminuserAllowResourcesResponse {
  /**
   * 接口列表
   */
  items?: string[];
}

/**
 * 接口 用户可访问接口列表 的 **请求函数**
 *
 */
export const postUserAdminuserAllowResources = (data?: PostUserAdminuserAllowResourcesRequest) => {
  return request.post<PostUserAdminuserAllowResourcesRequest, PostUserAdminuserAllowResourcesResponse>(
    '/user/admin/userAllowResources',
    {
      data
    }
  );
};
