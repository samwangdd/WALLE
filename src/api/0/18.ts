/**
 * Created By api-typescript
 * https://alidocs.dingtalk.com/i/team/dN0G7AD82xAq4XWY/docs/dN0G78qlBL1o7zWY#
 */

import request from '../request';

/**
 * 接口 事件表单添加和编辑 的 **请求类型**
 *
 */
/**
 * 方案事件表单添加和编辑参数
 */
export interface PostServicePackageActionactionFormEditRequest {
  /**
   * 任务事件ID
   */
  taskActionId?: string;
  /**
   * 任务ID
   */
  taskId: string;
  /**
   * 事件ID
   */
  actionId: string;
  /**
   * 表单结构ID
   */
  schemaId: string;
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
 * 接口 事件表单添加和编辑 的 **返回类型**
 *
 */
/**
 * 方案事件表单添加和编辑响应
 */
export interface PostServicePackageActionactionFormEditResponse {
  /**
   * 任务事件ID
   */
  taskActionId?: string;
}

/**
 * 接口 事件表单添加和编辑 的 **请求函数**
 *
 */
export const postServicePackageActionactionFormEdit = (data?: PostServicePackageActionactionFormEditRequest) => {
  return request.post<PostServicePackageActionactionFormEditRequest, PostServicePackageActionactionFormEditResponse>(
    '/servicePackage/action/actionFormEdit',
    {
      data
    }
  );
};

/**
 * 接口 事件列表 的 **请求类型**
 *
 */
/**
 * 事件列表参数
 */
export interface PostServicePackageActionactionListRequest {
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
 * 接口 事件列表 的 **返回类型**
 *
 */
/**
 * 事件列表响应
 */
export interface PostServicePackageActionactionListResponse {
  /**
   * 事件列表
   */
  eventItem?: {
    /**
     * 事件ID
     */
    actionId?: string;
    /**
     * 名字
     */
    name?: string;
    /**
     * 事件code   health_form:表单    health_propaganda:宣教
     */
    actionCode?: string;
    /**
     * 图标
     */
    icon?: string;
    /**
     * 事件类型  1：普通事件  2：定时任务执行    3：任务完成延时执行任务
     */
    type?: number;
    /**
     * 类型名字
     */
    typeName?: string;
    /**
     * 数据类型  0:无  1：下拉列表
     */
    dataType?: number;
  }[];
}

/**
 * 接口 事件列表 的 **请求函数**
 *
 */
export const postServicePackageActionactionList = (data?: PostServicePackageActionactionListRequest) => {
  return request.post<PostServicePackageActionactionListRequest, PostServicePackageActionactionListResponse>(
    '/servicePackage/action/actionList',
    {
      data
    }
  );
};

/**
 * 接口 获取事件对于的表单列表 的 **请求类型**
 *
 */
/**
 * 获取事件对于的表单列表参数
 */
export interface PostServicePackageActionformListRequest {
  /**
   * 事件code
   */
  actionCode?: string;
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
 * 接口 获取事件对于的表单列表 的 **返回类型**
 *
 */
/**
 * 获取事件对于的表单列表响应
 */
export interface PostServicePackageActionformListResponse {
  /**
   * 表单列表
   */
  formList?: {
    /**
     * 表单结构ID
     */
    schemaId?: string;
    /**
     * 名字
     */
    name?: string;
  }[];
}

/**
 * 接口 获取事件对于的表单列表 的 **请求函数**
 *
 */
export const postServicePackageActionformList = (data?: PostServicePackageActionformListRequest) => {
  return request.post<PostServicePackageActionformListRequest, PostServicePackageActionformListResponse>(
    '/servicePackage/action/formList',
    {
      data
    }
  );
};

/**
 * 接口 获取执行对象角色列表 的 **请求类型**
 *
 */
/**
 * 获取执行对象角色列表参数
 */
export interface PostServicePackageActionobjectRoleListRequest {
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
 * 接口 获取执行对象角色列表 的 **返回类型**
 *
 */
/**
 * 获取执行对象角色列表响应
 */
export interface PostServicePackageActionobjectRoleListResponse {
  /**
   * 获取执行对象角色列表元素
   */
  roleList?: {
    /**
     * 名字
     */
    name?: string;
    /**
     * 类型
     */
    type?: number;
  }[];
  /**
   * 执行对象列表
   */
  content?: {
    /**
     * 名字
     */
    name?: string;
    /**
     * 类型
     */
    type?: number;
    /**
     * 角色列表
     */
    roleList?: {
      /**
       * 名字
       */
      name?: string;
      /**
       * 类型
       */
      type?: number;
    }[];
  }[];
}

/**
 * 接口 获取执行对象角色列表 的 **请求函数**
 *
 */
export const postServicePackageActionobjectRoleList = (data?: PostServicePackageActionobjectRoleListRequest) => {
  return request.post<PostServicePackageActionobjectRoleListRequest, PostServicePackageActionobjectRoleListResponse>(
    '/servicePackage/action/objectRoleList',
    {
      data
    }
  );
};
