/**
 * Created By api-typescript
 * https://alidocs.dingtalk.com/i/team/dN0G7AD82xAq4XWY/docs/dN0G78qlBL1o7zWY#
 */

import request from '../request';

/**
 * 接口 方案对标 的 **请求类型**
 *
 */
/**
 * 方案对标参数
 */
export interface PostAnalyseAnalysesolutionBenchmarkingRequest {
  /**
   * 方案ID
   */
  solutionId: number;
  /**
   * 开始日期
   */
  startDate?: string;
  /**
   * 结束日期
   */
  endDate?: string;
  /**
   * 条件表达式
   */
  expressions?: {
    /**
     * 条件分类
     *
     * <ul>
     * <li>indicator: 指标</li>
     * </li>
     */
    category: {};
    /**
     * 运算对象
     * 意义由category决定.如category=indicator,leftOperand为指标id
     */
    leftOperand: string;
    /**
     * 运算符
     */
    operator: {};
    /**
     * 运算对象值
     */
    rightOperand: string;
  }[];
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
 * 接口 方案对标 的 **返回类型**
 *
 */
/**
 * 方案对标响应
 */
export interface PostAnalyseAnalysesolutionBenchmarkingResponse {
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
   * 数据明细
   */
  content?: {
    /**
     * ID
     */
    patientId?: string;
    /**
     * 名称
     */
    name?: string;
    /**
     * 性别
     */
    gender?: string;
    /**
     * 年龄
     */
    age?: number;
    /**
     * 联系电话
     */
    contactMobile?: string;
    /**
     * 既往史
     */
    diseaseHistory?: string[];
    /**
     * 现病史
     */
    diseases?: string[];
    /**
     * 重点关注数据
     */
    indicator?: string[];
    /**
     * 是否有异常指标
     */
    hasExceed?: boolean;
  }[];
}

/**
 * 接口 方案对标 的 **请求函数**
 *
 */
export const postAnalyseAnalysesolutionBenchmarking = (data?: PostAnalyseAnalysesolutionBenchmarkingRequest) => {
  return request.post<PostAnalyseAnalysesolutionBenchmarkingRequest, PostAnalyseAnalysesolutionBenchmarkingResponse>(
    '/analyse/analyse/solutionBenchmarking',
    {
      data
    }
  );
};

/**
 * 接口 对标分析-图表数据 的 **请求类型**
 *
 */
/**
 * 方案对标统计图参数
 */
export interface PostAnalyseAnalysesolutionBenchmarkingChartRequest {
  /**
   * 方案ID
   */
  solutionId: number;
  /**
   * 开始日期
   */
  startDate?: string;
  /**
   * 结束日期
   */
  endDate?: string;
  /**
   * 条件表达式
   */
  expressions?: {
    /**
     * 条件分类
     *
     * <ul>
     * <li>indicator: 指标</li>
     * </li>
     */
    category: {};
    /**
     * 运算对象
     * 意义由category决定.如category=indicator,leftOperand为指标id
     */
    leftOperand: string;
    /**
     * 运算符
     */
    operator: {};
    /**
     * 运算对象值
     */
    rightOperand: string;
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
 * 接口 对标分析-图表数据 的 **返回类型**
 *
 */
/**
 * 对标分析-图表数据响应
 */
export interface PostAnalyseAnalysesolutionBenchmarkingChartResponse {
  /**
   * 条目列表
   */
  items?: {
    /**
     * 节点名称
     */
    label?: string;
    /**
     * 评估次数
     */
    count?: number;
  }[];
}

/**
 * 接口 对标分析-图表数据 的 **请求函数**
 *
 */
export const postAnalyseAnalysesolutionBenchmarkingChart = (
  data?: PostAnalyseAnalysesolutionBenchmarkingChartRequest
) => {
  return request.post<
    PostAnalyseAnalysesolutionBenchmarkingChartRequest,
    PostAnalyseAnalysesolutionBenchmarkingChartResponse
  >('/analyse/analyse/solutionBenchmarkingChart', {
    data
  });
};

/**
 * 接口 对标分析-方案筛查路径 的 **请求类型**
 *
 */
/**
 * 对标分析-方案筛查路径参数
 */
export interface PostAnalyseAnalysesolutionFilterPathRequest {
  /**
   * 方案ID
   */
  solutionId?: number;
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
 * 接口 对标分析-方案筛查路径 的 **返回类型**
 *
 */
/**
 * 对标分析-方案筛查路径响应
 */
export interface PostAnalyseAnalysesolutionFilterPathResponse {
  /**
   * 任务列表
   */
  taskItems?: {
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
   * 指标列表
   */
  indicatorItems?: {
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
   * 费用情况
   */
  feeItems?: {
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
   * 用户属性
   */
  userAttributeItems?: {
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
   * 用户标签
   */
  userLabelItems?: {
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
   * 用户分组
   */
  userGroupItems?: {
    /**
     * ID
     */
    id?: string;
    /**
     * 名称
     */
    name?: string;
  }[];
}

/**
 * 接口 对标分析-方案筛查路径 的 **请求函数**
 *
 */
export const postAnalyseAnalysesolutionFilterPath = (data?: PostAnalyseAnalysesolutionFilterPathRequest) => {
  return request.post<PostAnalyseAnalysesolutionFilterPathRequest, PostAnalyseAnalysesolutionFilterPathResponse>(
    '/analyse/analyse/solutionFilterPath',
    {
      data
    }
  );
};
