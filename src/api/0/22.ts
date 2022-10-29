/**
 * Created By api-typescript
 * https://alidocs.dingtalk.com/i/team/dN0G7AD82xAq4XWY/docs/dN0G78qlBL1o7zWY#
 */

import request from '../request';

/**
 * 接口 添加方案流程 的 **请求类型**
 *
 */
/**
 * 添加方案流程参数
 */
export interface PostServicePackageSolutionFlowaddRequest {
  /**
   * 方案ID
   */
  solutionId?: string;
  /**
   * 宽度
   */
  width?: number;
  /**
   * 深度
   */
  deep?: number;
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
 * 接口 添加方案流程 的 **返回类型**
 *
 */
/**
 * 添加方案流程响应
 */
export interface PostServicePackageSolutionFlowaddResponse {
  /**
   * 方案ID
   */
  solutionId?: string;
  /**
   * 流程ID
   */
  flowId?: string;
}

/**
 * 接口 添加方案流程 的 **请求函数**
 *
 */
export const postServicePackageSolutionFlowadd = (data?: PostServicePackageSolutionFlowaddRequest) => {
  return request.post<PostServicePackageSolutionFlowaddRequest, PostServicePackageSolutionFlowaddResponse>(
    '/servicePackage/solutionFlow/add',
    {
      data
    }
  );
};

/**
 * 接口 方案流程详情 的 **请求类型**
 *
 */
/**
 * 方案流程详情参数
 */
export interface PostServicePackageSolutionFlowdetailRequest {
  /**
   * 方案ID
   */
  solutionId?: string;
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
 * 接口 方案流程详情 的 **返回类型**
 *
 */
/**
 * 方案流程详情响应
 */
export interface PostServicePackageSolutionFlowdetailResponse {
  /**
   * 流程列表
   */
  content?: {
    /**
     * 流程ID
     */
    flowId?: string;
    /**
     * 流程名字
     */
    name?: string;
    /**
     * 是否是主流程  1:是   2：不是
     */
    isMain?: number;
    /**
     * 任务列表
     */
    tasks?: {
      /**
       * 流程ID
       */
      flowId?: string;
      /**
       * 任务Id
       */
      taskId?: string;
      /**
       * 任务名字
       */
      name?: string;
      /**
       * 备注
       */
      comment?: string;
      /**
       * 任务顺序  由小到大
       */
      order?: number;
      /**
       * 是否开启子流程   1：开启   2：不开启
       */
      enableSubFlow?: number;
      /**
       * 子流程ID列表
       */
      subFlows?: {
        /**
         * 流程ID
         */
        flowId?: string;
        /**
         * 名字
         */
        name?: string;
        /**
         * 结构描述
         */
        resultDesc?: string;
        /**
         * 绑定类型   1：绑定已有流程   2：绑定新增流程
         */
        bindType?: number;
      }[];
    }[];
  }[];
  /**
   * 方案ID
   */
  solutionId?: string;
  /**
   * 宽度
   */
  width?: number;
  /**
   * 深度
   */
  deep?: number;
}

/**
 * 接口 方案流程详情 的 **请求函数**
 *
 */
export const postServicePackageSolutionFlowdetail = (data?: PostServicePackageSolutionFlowdetailRequest) => {
  return request.post<PostServicePackageSolutionFlowdetailRequest, PostServicePackageSolutionFlowdetailResponse>(
    '/servicePackage/solutionFlow/detail',
    {
      data
    }
  );
};

/**
 * 接口 流程添加 的 **请求类型**
 *
 */
/**
 * 流程添加参数
 */
export interface PostServicePackageSolutionFlowflowAddRequest {
  /**
   * 方案ID
   */
  solutionId?: string;
  /**
   * 任务ID
   */
  taskId?: string;
  /**
   * 流程ID
   */
  flowId?: string;
  /**
   * 名字
   */
  name?: string;
  /**
   * 编码
   */
  code?: string;
  /**
   * 规则匹配结果描述
   */
  resultDesc?: string;
  /**
   * 是否是主流程  1:是  2：不是
   */
  isMain?: number;
  /**
   * 匹配规则
   */
  rules?: {
    /**
     * 变量数据来源  'ACTION':事件, 'TASK'：任务, 'EVENT_FLOW'：事件流
     */
    dataResource?: string;
    /**
     * 数据类型  'LONG'：整形, 'DECIMAL'：否点数, 'STRING'：字符串, 'BOOLEAN', 'DATE_TIME:时间'
     */
    dataType?: string;
    /**
     * 参数类型 = ['VARIABLE'：变量, 'FIXED'：固定值, 'OPERATION'：计算符, 'COMPARE'：比较符, 'BRACKETS'：括号, 'RELATION'：关系],
     */
    paramType?: string;
    /**
     * 变量数据来源事件ID
     */
    resourceActionId?: string;
    /**
     * 变量数据来源任务ID
     */
    resourceTaskId?: string;
    /**
     * 值
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
 * 接口 流程添加 的 **返回类型**
 *
 */
/**
 * 流程添加响应
 */
export interface PostServicePackageSolutionFlowflowAddResponse {
  /**
   * 流程ID
   */
  flowId?: string;
  /**
   * 任务流程ID
   */
  taskFlowId?: string;
  /**
   * 绑定类型   1：绑定已有流程   2：绑定新增流程
   */
  bindType?: number;
}

/**
 * 接口 流程添加 的 **请求函数**
 *
 */
export const postServicePackageSolutionFlowflowAdd = (data?: PostServicePackageSolutionFlowflowAddRequest) => {
  return request.post<PostServicePackageSolutionFlowflowAddRequest, PostServicePackageSolutionFlowflowAddResponse>(
    '/servicePackage/solutionFlow/flowAdd',
    {
      data
    }
  );
};

/**
 * 接口 获取流程列表 的 **请求类型**
 *
 */
/**
 * 获取流程列表参数
 */
export interface PostServicePackageSolutionFlowflowListRequest {
  /**
   * 方案ID
   */
  solutionId?: string;
  /**
   * 流程CODE
   */
  code?: string;
  /**
   * 名字
   */
  name?: string;
  /**
   * 任务ID
   */
  taskId?: string;
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
 * 接口 获取流程列表 的 **返回类型**
 *
 */
/**
 * 获取流程列表响应
 */
export interface PostServicePackageSolutionFlowflowListResponse {
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
     * 流程ID
     */
    flowId?: string;
    /**
     * 方案ID
     */
    solutionId?: string;
    /**
     * 名字
     */
    name?: string;
    /**
     * 是否主流程
     */
    isMain?: number;
  }[];
}

/**
 * 接口 获取流程列表 的 **请求函数**
 *
 */
export const postServicePackageSolutionFlowflowList = (data?: PostServicePackageSolutionFlowflowListRequest) => {
  return request.post<PostServicePackageSolutionFlowflowListRequest, PostServicePackageSolutionFlowflowListResponse>(
    '/servicePackage/solutionFlow/flowList',
    {
      data
    }
  );
};

/**
 * 接口 获取任务变量列表 的 **请求类型**
 *
 */
/**
 * 获取任务变量列表参数
 */
export interface PostServicePackageSolutionFlowgetTaskVariableListRequest {
  /**
   * 任务Id
   */
  taskId?: string;
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
 * 接口 获取任务变量列表 的 **返回类型**
 *
 */
/**
 * 获取任务变量列表响应
 */
export interface PostServicePackageSolutionFlowgetTaskVariableListResponse {
  /**
   * 列表
   */
  content?: {
    /**
     * 名字
     */
    name?: string;
    /**
     * 值
     */
    value?: string;
    /**
     * 变量数据来源
     */
    dataResource?: string;
    /**
     * 数据类型
     */
    dataType?: string;
    /**
     * 变量数据来源事件ID
     */
    resourceActionId?: string;
    /**
     * 变量数据来源任务ID
     */
    resourceTaskId?: string;
  }[];
}

/**
 * 接口 获取任务变量列表 的 **请求函数**
 *
 */
export const postServicePackageSolutionFlowgetTaskVariableList = (
  data?: PostServicePackageSolutionFlowgetTaskVariableListRequest
) => {
  return request.post<
    PostServicePackageSolutionFlowgetTaskVariableListRequest,
    PostServicePackageSolutionFlowgetTaskVariableListResponse
  >('/servicePackage/solutionFlow/getTaskVariableList', {
    data
  });
};

/**
 * 接口 符号列表 的 **请求类型**
 *
 */
/**
 * 符号列表参数
 */
export interface PostServicePackageSolutionFlowsymbolListRequest {
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
 * 接口 符号列表 的 **返回类型**
 *
 */
/**
 * 符号列表响应
 */
export interface PostServicePackageSolutionFlowsymbolListResponse {
  /**
   * 符号
   */
  content?: {
    /**
     * 类型
     */
    type?: string;
    /**
     * 符号
     */
    symbol?: string;
  }[];
}

/**
 * 接口 符号列表 的 **请求函数**
 *
 */
export const postServicePackageSolutionFlowsymbolList = (data?: PostServicePackageSolutionFlowsymbolListRequest) => {
  return request.post<
    PostServicePackageSolutionFlowsymbolListRequest,
    PostServicePackageSolutionFlowsymbolListResponse
  >('/servicePackage/solutionFlow/symbolList', {
    data
  });
};

/**
 * 接口 任务添加 的 **请求类型**
 *
 */
/**
 * 任务添加参数
 */
export interface PostServicePackageSolutionFlowtaskAddRequest {
  /**
   * 方案ID
   */
  solutionId?: string;
  /**
   * 流程id
   */
  flowId?: string;
  /**
   * 任务ID
   */
  taskId?: string;
  /**
   * 任务类型  1:普通任务   2：自动任务
   */
  type?: number;
  /**
   * 是否开启子流程  1：开启   2：不开启
   */
  enableSubFlow?: number;
  /**
   * 任务编码
   */
  code?: string;
  /**
   * 角色类型列表
   */
  roleTypes?: {};
  /**
   * 名字
   */
  name?: string;
  /**
   * 执行时间
   */
  timeInterval?: number;
  /**
   * 执行时间类型   1：天  2：周 3：月
   */
  timeIntervalType?: number;
  /**
   * 执行时效
   */
  effectiveTime?: number;
  /**
   * 执行时效类型 1：天  2：周  3:月
   */
  effectiveType?: number;
  /**
   * 子流程列表
   */
  subFlowIds?: string[];
  /**
   * 事件列表
   */
  actions?: {
    /**
     * 事件ID
     */
    actionId?: string;
    /**
     * 事件code
     */
    actionCode?: string;
    /**
     * 事件类型 1:普通事件  2：定时任务执行  3：任务完成延时执行任务
     */
    type?: number;
    /**
     * 自定义事件名称
     */
    userDefinedName?: string;
    /**
     * 是否为状态扭转节点 1   2
     */
    isTransform?: number;
    /**
     * 源数据对象
     */
    resourceData?: {
      /**
       * 事件ID
       */
      actionId?: string;
      /**
       * 事件Code
       */
      actionCode?: string;
      /**
       * 表单结构ID
       */
      schemaId?: string;
      /**
       * 文章ID
       */
      articleId?: string;
    };
    /**
     * 角色权限配置数组
     */
    actionRoles?: {
      /**
       * 角色名字
       */
      name?: string;
      /**
       * 角色类型
       */
      type?: string;
      /**
       * 权限类型  1:执行  2：读  3：禁止
       */
      permissionType?: number;
    }[];
  }[];
  /**
   * 评论
   */
  comment?: string;
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
 * 接口 任务添加 的 **返回类型**
 *
 */
/**
 * 任务添加响应
 */
export interface PostServicePackageSolutionFlowtaskAddResponse {
  /**
   * 任务ID
   */
  taskId?: string;
}

/**
 * 接口 任务添加 的 **请求函数**
 *
 */
export const postServicePackageSolutionFlowtaskAdd = (data?: PostServicePackageSolutionFlowtaskAddRequest) => {
  return request.post<PostServicePackageSolutionFlowtaskAddRequest, PostServicePackageSolutionFlowtaskAddResponse>(
    '/servicePackage/solutionFlow/taskAdd',
    {
      data
    }
  );
};

/**
 * 接口 任务详情 的 **请求类型**
 *
 */
/**
 * 任务详情参数
 */
export interface PostServicePackageSolutionFlowtaskDetailRequest {
  /**
   * 任务ID
   */
  taskId?: string;
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
 * 接口 任务详情 的 **返回类型**
 *
 */
/**
 * 任务详情响应
 */
export interface PostServicePackageSolutionFlowtaskDetailResponse {
  /**
   * 方案ID
   */
  solutionId?: string;
  /**
   * 流程id
   */
  flowId?: string;
  /**
   * 任务ID
   */
  taskId?: string;
  /**
   * 任务类型  1:普通任务   2：自动任务
   */
  type?: number;
  /**
   * 名字
   */
  name?: string;
  /**
   * 任务编码
   */
  code?: string;
  /**
   * 执行时间
   */
  timeInterval?: number;
  /**
   * 执行时间类型   1：天  2：周 3：月
   */
  timeIntervalType?: number;
  /**
   * 执行时效
   */
  effectiveTime?: number;
  /**
   * 执行时效类型 1：天  2：周  3:月
   */
  effectiveType?: number;
  /**
   * 备注
   */
  comment?: string;
  /**
   * 使能子流程  1：使能  2：无子流程
   */
  enableSubFlow?: number;
  /**
   * 事件列表
   */
  actions?: {
    /**
     * 事件ID
     */
    actionId?: string;
    /**
     * 事件code
     */
    actionCode?: string;
    /**
     * 事件名称
     */
    name?: string;
    /**
     * 自定义名字
     */
    userDefinedName?: string;
    /**
     * 是否为状态扭转节点 true:是  false :不是
     */
    isTransform?: boolean;
    /**
     * 事件源数据
     */
    resourceData?: {
      /**
       * 事件ID
       */
      actionId?: string;
      /**
       * 事件code
       */
      actionCode?: string;
      /**
       * 表单数据
       */
      healthForm?: {
        /**
         * 表单结构ID
         */
        schemaId?: string;
        /**
         * 名字
         */
        name?: string;
      };
      /**
       * 文章数据
       */
      healthPropaganda?: {
        /**
         * 文章ID
         */
        articleId?: string;
        /**
         * 名字
         */
        name?: string;
      };
    };
    /**
     * 角色权限配置数组
     */
    actionRoles?: {
      /**
       * 角色类型
       */
      type?: string;
      /**
       * 角色名字
       */
      name?: string;
      /**
       * 权限类型  1:执行  2：读  3：禁止
       */
      permissionType?: number;
    }[];
  }[];
  /**
   * 子流程信息列表
   */
  subFlows?: {
    /**
     * 流程ID
     */
    flowId?: string;
    /**
     * 流程名字
     */
    name?: string;
    /**
     * 判定结果描述
     */
    resultDesc?: string;
  }[];
  /**
   * 角色类型列表
   */
  roleTypes?: string[];
}

/**
 * 接口 任务详情 的 **请求函数**
 *
 */
export const postServicePackageSolutionFlowtaskDetail = (data?: PostServicePackageSolutionFlowtaskDetailRequest) => {
  return request.post<
    PostServicePackageSolutionFlowtaskDetailRequest,
    PostServicePackageSolutionFlowtaskDetailResponse
  >('/servicePackage/solutionFlow/taskDetail', {
    data
  });
};
