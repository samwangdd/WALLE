/**
 * Created By api-typescript
 * https://alidocs.dingtalk.com/i/team/dN0G7AD82xAq4XWY/docs/dN0G78qlBL1o7zWY#
 */

import request from '../request';

/**
 * 接口 找回密码 的 **请求类型**
 *
 */
/**
 * 找回密码参数
 */
export interface PostUserAuthforgotPwdRequest {
  /**
   * 手机号
   */
  phone: string;
  /**
   * 密码
   */
  password: string;
  /**
   * 认证key
   */
  authKey: string;
  /**
   * 验证码
   */
  authCode: string;
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
 * 接口 找回密码 的 **返回类型**
 *
 */
/**
 * 处理成功，通用响应对象
 */
export interface PostUserAuthforgotPwdResponse {}

/**
 * 接口 找回密码 的 **请求函数**
 *
 */
export const postUserAuthforgotPwd = (data?: PostUserAuthforgotPwdRequest) => {
  return request.post<PostUserAuthforgotPwdRequest, PostUserAuthforgotPwdResponse>('/user/auth/forgotPwd', {
    data
  });
};

/**
 * 接口 手机号登录 的 **请求类型**
 *
 */
/**
 * 手机登录参数
 */
export interface PostUserAuthloginByPhoneRequest {
  /**
   * 手机号
   */
  phone: string;
  /**
   * 机构ID
   */
  organId?: number;
  /**
   * 角色ID
   */
  roleId?: number;
  /**
   * 认证key
   */
  authKey: string;
  /**
   * 验证码
   */
  authCode: string;
  /**
   * 设备码
   */
  deviceNum: string;
  /**
   * 设备类型
   */
  deviceType: string;
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
 * 接口 手机号登录 的 **返回类型**
 *
 */
/**
 * 手机号登录响应
 */
export interface PostUserAuthloginByPhoneResponse {
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
 * 接口 手机号登录 的 **请求函数**
 *
 */
export const postUserAuthloginByPhone = (data?: PostUserAuthloginByPhoneRequest) => {
  return request.post<PostUserAuthloginByPhoneRequest, PostUserAuthloginByPhoneResponse>('/user/auth/loginByPhone', {
    data
  });
};

/**
 * 接口 密码登录 的 **请求类型**
 *
 */
/**
 * 密码登录参数
 */
export interface PostUserAuthloginByPwdRequest {
  /**
   * 手机号
   */
  phone: string;
  /**
   * 机构ID
   */
  organId?: number;
  /**
   * 角色ID
   */
  roleId?: number;
  /**
   * 密码
   */
  password: string;
  /**
   * 设备码
   */
  deviceNum: string;
  /**
   * 设备类型
   */
  deviceType: string;
  /**
   * 设备uuid
   */
  deviceUUID: string;
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
 * 接口 密码登录 的 **返回类型**
 *
 */
/**
 * 手机号登录响应
 */
export interface PostUserAuthloginByPwdResponse {
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
 * 接口 密码登录 的 **请求函数**
 *
 */
export const postUserAuthloginByPwd = (data?: PostUserAuthloginByPwdRequest) => {
  return request.post<PostUserAuthloginByPwdRequest, PostUserAuthloginByPwdResponse>('/user/auth/loginByPwd', {
    data
  });
};

/**
 * 接口 获取手机登录验证码 的 **请求类型**
 *
 */
export interface PostUserAuthsendAuthCodeRequest {
  /**
   * 手机号
   */
  phone: number;
  /**
   * 短信模版
   */
  templateCode: string;
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
 * 接口 获取手机登录验证码 的 **返回类型**
 *
 */
export interface PostUserAuthsendAuthCodeResponse {
  needSlider?: boolean;
  /**
   * 认证key
   */
  authKey?: string;
  exprieTime?: number;
  canNext?: boolean;
}

/**
 * 接口 获取手机登录验证码 的 **请求函数**
 *
 */
export const postUserAuthsendAuthCode = (data?: PostUserAuthsendAuthCodeRequest) => {
  return request.post<PostUserAuthsendAuthCodeRequest, PostUserAuthsendAuthCodeResponse>('/user/auth/sendAuthCode', {
    data
  });
};

/**
 * 接口 用户关联机构列表 的 **请求类型**
 *
 */
/**
 * 用户关联机构列表参数
 */
export interface PostUserAuthuserOrganListRequest {
  /**
   * 用户手机号
   */
  phone?: number;
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
 * 接口 用户关联机构列表 的 **返回类型**
 *
 */
/**
 * 用户关联机构列表响应
 */
export interface PostUserAuthuserOrganListResponse {
  /**
   * 机构列表
   */
  organItems?: {
    /**
     * 机构ID
     */
    organId?: string;
    /**
     * 机构名称
     */
    name?: string;
    /**
     * 角色列表
     */
    roleItems?: {
      /**
       * 角色ID
       */
      roleId?: string;
      /**
       * 角色名称
       */
      roleName?: string;
    }[];
  }[];
}

/**
 * 接口 用户关联机构列表 的 **请求函数**
 *
 */
export const postUserAuthuserOrganList = (data?: PostUserAuthuserOrganListRequest) => {
  return request.post<PostUserAuthuserOrganListRequest, PostUserAuthuserOrganListResponse>('/user/auth/userOrganList', {
    data
  });
};
