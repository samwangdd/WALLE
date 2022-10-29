/**
 * Created By api-typescript
 * https://alidocs.dingtalk.com/i/team/dN0G7AD82xAq4XWY/docs/dN0G78qlBL1o7zWY#
 */

import request from '../request';

/**
 * 接口 删除文章 的 **请求类型**
 *
 */
/**
 * 删除文章参数
 */
export interface PostArticleArticlearticleDeleteRequest {
  /**
   * 文章IDs
   */
  articleIds: string[];
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
 * 接口 删除文章 的 **返回类型**
 *
 */
/**
 * 处理成功，通用响应对象
 */
export interface PostArticleArticlearticleDeleteResponse {}

/**
 * 接口 删除文章 的 **请求函数**
 *
 */
export const postArticleArticlearticleDelete = (data?: PostArticleArticlearticleDeleteRequest) => {
  return request.post<PostArticleArticlearticleDeleteRequest, PostArticleArticlearticleDeleteResponse>(
    '/article/article/articleDelete',
    {
      data
    }
  );
};

/**
 * 接口 上下架文章 的 **请求类型**
 *
 */
/**
 * 更新文章状态参数
 */
export interface PostArticleArticlearticleUpdateStatusRequest {
  /**
   * 文章IDs
   */
  articleIds: string[];
  /**
   * 状态(0-下架,1-上架)
   */
  status: number;
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
 * 接口 上下架文章 的 **返回类型**
 *
 */
/**
 * 处理成功，通用响应对象
 */
export interface PostArticleArticlearticleUpdateStatusResponse {}

/**
 * 接口 上下架文章 的 **请求函数**
 *
 */
export const postArticleArticlearticleUpdateStatus = (data?: PostArticleArticlearticleUpdateStatusRequest) => {
  return request.post<PostArticleArticlearticleUpdateStatusRequest, PostArticleArticlearticleUpdateStatusResponse>(
    '/article/article/articleUpdateStatus',
    {
      data
    }
  );
};

/**
 * 接口 文章审核 的 **请求类型**
 *
 */
/**
 * 文章审核参数
 */
export interface PostArticleArticleauditRequest {
  /**
   * ID
   */
  articleId?: string;
  /**
   * 驳回原因
   */
  abortReason?: string;
  /**
   * 审批状态
   *
   * <ul>
   * <li>1-已审批通过;</li>
   * <li>0-未审批</li>
   * <li>-1-已审批未通过</li>
   * </ul>
   */
  isAudit?: string;
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
 * 接口 文章审核 的 **返回类型**
 *
 */
/**
 * 处理成功，通用响应对象
 */
export interface PostArticleArticleauditResponse {}

/**
 * 接口 文章审核 的 **请求函数**
 *
 */
export const postArticleArticleaudit = (data?: PostArticleArticleauditRequest) => {
  return request.post<PostArticleArticleauditRequest, PostArticleArticleauditResponse>('/article/article/audit', {
    data
  });
};

/**
 * 接口 删除文章文类 的 **请求类型**
 *
 */
/**
 * 删除文章文类参数
 */
export interface PostArticleArticlecategoryDeleteRequest {
  /**
   * 分类IDs
   */
  moduleCodes: string[];
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
 * 接口 删除文章文类 的 **返回类型**
 *
 */
/**
 * 处理成功，通用响应对象
 */
export interface PostArticleArticlecategoryDeleteResponse {}

/**
 * 接口 删除文章文类 的 **请求函数**
 *
 */
export const postArticleArticlecategoryDelete = (data?: PostArticleArticlecategoryDeleteRequest) => {
  return request.post<PostArticleArticlecategoryDeleteRequest, PostArticleArticlecategoryDeleteResponse>(
    '/article/article/categoryDelete',
    {
      data
    }
  );
};

/**
 * 接口 新增\/修改文章分类 的 **请求类型**
 *
 */
/**
 * 新增/修改文章分类参数
 */
export interface PostArticleArticlecategoryEditRequest {
  /**
   * 描述
   */
  description?: string;
  /**
   * 编号
   */
  moduleCode?: string;
  /**
   * 名称
   */
  moduleName: string;
  /**
   * 上级分类编号
   */
  parentModuleCode?: string;
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
 * 接口 新增\/修改文章分类 的 **返回类型**
 *
 */
/**
 * 新增/修改文章分类响应
 */
export interface PostArticleArticlecategoryEditResponse {
  /**
   * 描述
   */
  description?: string;
  /**
   * 编号
   */
  moduleCode?: string;
  /**
   * 名称
   */
  moduleName?: string;
  /**
   * 上级分类编号
   */
  parentModuleCode?: string;
  /**
   * 状态(0删除,1-有效)
   */
  status?: number;
}

/**
 * 接口 新增\/修改文章分类 的 **请求函数**
 *
 */
export const postArticleArticlecategoryEdit = (data?: PostArticleArticlecategoryEditRequest) => {
  return request.post<PostArticleArticlecategoryEditRequest, PostArticleArticlecategoryEditResponse>(
    '/article/article/categoryEdit',
    {
      data
    }
  );
};

/**
 * 接口 文章分类列表 的 **请求类型**
 *
 */
/**
 * 文章分类列表参数
 */
export interface PostArticleArticlecategoryListRequest {
  /**
   * 分类名称关键字
   */
  moduleName?: string;
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
 * 接口 文章分类列表 的 **返回类型**
 *
 */
/**
 * 文章分类列表响应
 */
export interface PostArticleArticlecategoryListResponse {
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
  content?: {};
}

/**
 * 接口 文章分类列表 的 **请求函数**
 *
 */
export const postArticleArticlecategoryList = (data?: PostArticleArticlecategoryListRequest) => {
  return request.post<PostArticleArticlecategoryListRequest, PostArticleArticlecategoryListResponse>(
    '/article/article/categoryList',
    {
      data
    }
  );
};

/**
 * 接口 文章分类树 的 **请求类型**
 *
 */
/**
 * 文章分类树参数
 */
export interface PostArticleArticlecategoryTreeRequest {
  /**
   * 上级分类ID
   */
  parentModuleCode?: string;
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
 * 接口 文章分类树 的 **返回类型**
 *
 */
/**
 * 文章分类树响应
 */
export interface PostArticleArticlecategoryTreeResponse {
  /**
   * 子分类
   */
  items?: {}[];
}

/**
 * 接口 文章分类树 的 **请求函数**
 *
 */
export const postArticleArticlecategoryTree = (data?: PostArticleArticlecategoryTreeRequest) => {
  return request.post<PostArticleArticlecategoryTreeRequest, PostArticleArticlecategoryTreeResponse>(
    '/article/article/categoryTree',
    {
      data
    }
  );
};

/**
 * 接口 文章详情 的 **请求类型**
 *
 */
/**
 * 文章详情参数
 */
export interface PostArticleArticledetailRequest {
  /**
   * 文章ID
   */
  articleId?: string;
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
 * 接口 文章详情 的 **返回类型**
 *
 */
/**
 * 文章详情响应
 */
export interface PostArticleArticledetailResponse {
  /**
   * ID
   */
  articleId?: string;
  /**
   * 作者
   */
  authorName?: string;
  /**
   * 作者头像
   */
  authorPortrait?: string;
  /**
   * 封面图
   */
  cover?: string;
  /**
   * 内容(type=2时为视频ID)
   */
  content?: string;
  /**
   * 默认浏览量
   */
  defaultReadCount?: number;
  /**
   * 分类编号
   */
  moduleCode?: string;
  /**
   * 分类名称
   */
  moduleName?: string;
  /**
   * 价格
   */
  price?: number;
  /**
   * 状态
   */
  status?: number;
  /**
   * 副标题
   */
  subhead?: string;
  /**
   * 标签(多个通过“,”分割)
   */
  tags?: string;
  /**
   * 视频时长
   */
  timeInterval?: string;
  /**
   * 标题
   */
  title?: string;
  /**
   * 类型 1图文 2视频
   */
  type?: number;
  /**
   * 视频Id
   */
  videoId?: string;
  /**
   * 视频地址
   */
  videoUrl?: string;
  /**
   * 创建时间
   */
  createTime?: string;
  /**
   * 点赞数
   */
  likeCount?: number;
  /**
   * 阅读数
   */
  readCount?: number;
  /**
   * 分享数
   */
  shareCount?: number;
  /**
   * 发布时间
   */
  publishTime?: string;
}

/**
 * 接口 文章详情 的 **请求函数**
 *
 */
export const postArticleArticledetail = (data?: PostArticleArticledetailRequest) => {
  return request.post<PostArticleArticledetailRequest, PostArticleArticledetailResponse>('/article/article/detail', {
    data
  });
};

/**
 * 接口 增加\/修改文章 的 **请求类型**
 *
 */
/**
 * 增加/修改文章参数
 */
export interface PostArticleArticleeditRequest {
  /**
   * ID
   */
  articleId?: string;
  /**
   * 作者
   */
  authorName?: string;
  /**
   * 作者头像
   */
  authorPortrait?: string;
  /**
   * 作者ID
   */
  authorId?: string;
  /**
   * 内容(type=2时为视频ID)
   */
  content?: string;
  /**
   * 封面图
   */
  cover?: string;
  /**
   * 默认浏览量
   */
  defaultReadCount?: number;
  /**
   * 分类列表
   */
  moduleCode?: string;
  /**
   * 发布时间
   */
  publishTime?: string;
  /**
   * 价格
   */
  price?: number;
  /**
   * 状态 0下架 1上架
   */
  status?: number;
  /**
   * 副标题
   */
  subhead?: string;
  /**
   * 标签(多个通过“,”分割)
   */
  tags?: string;
  /**
   * 视频时长
   */
  timeInterval?: string;
  /**
   * 标题
   */
  title?: string;
  /**
   * 类型 1图文 2视频
   */
  type?: string;
  /**
   * 是否转载(0原创 1转载)
   */
  reprint?: number;
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
 * 接口 增加\/修改文章 的 **返回类型**
 *
 */
/**
 * 增加/修改文章响应
 */
export interface PostArticleArticleeditResponse {
  /**
   * 文章ID
   */
  articleId?: string;
}

/**
 * 接口 增加\/修改文章 的 **请求函数**
 *
 */
export const postArticleArticleedit = (data?: PostArticleArticleeditRequest) => {
  return request.post<PostArticleArticleeditRequest, PostArticleArticleeditResponse>('/article/article/edit', {
    data
  });
};

/**
 * 接口 获取视频播放地址 的 **请求类型**
 *
 */
export interface PostArticleArticlegetVideoUrlRequest {
  /**
   * 视频ID
   */
  videoId: string;
}

/**
 * 接口 获取视频播放地址 的 **返回类型**
 *
 */
export interface PostArticleArticlegetVideoUrlResponse {}

/**
 * 接口 获取视频播放地址 的 **请求函数**
 *
 */
export const postArticleArticlegetVideoUrl = (data?: PostArticleArticlegetVideoUrlRequest) => {
  return request.post<PostArticleArticlegetVideoUrlRequest, PostArticleArticlegetVideoUrlResponse>(
    '/article/article/getVideoUrl',
    {
      data
    }
  );
};

/**
 * 接口 文章列表 的 **请求类型**
 *
 */
/**
 * 文章列表参数
 */
export interface PostArticleArticlelistRequest {
  /**
   * 状态(0下架 1上架)
   */
  status?: {};
  /**
   * 关键词
   */
  keyWord?: {};
  /**
   * 分类编号
   */
  moduleCodes?: string[];
  /**
   * 类型(1图文 2视频)
   */
  type?: {};
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
 * 接口 文章列表 的 **返回类型**
 *
 */
/**
 * 文章列表响应
 */
export interface PostArticleArticlelistResponse {
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
     * ID
     */
    articleId?: string;
    /**
     * 作者
     */
    authorName?: string;
    /**
     * 作者头像
     */
    authorPortrait?: string;
    /**
     * 封面图
     */
    cover?: string;
    /**
     * 默认浏览量
     */
    defaultReadCount?: number;
    /**
     * 分类编号
     */
    moduleCode?: string;
    /**
     * 分类名称
     */
    moduleName?: string;
    /**
     * 价格
     */
    price?: number;
    /**
     * 状态
     */
    status?: number;
    /**
     * 状态名称
     */
    statusText?: string;
    /**
     * 副标题
     */
    subhead?: string;
    /**
     * 标签(多个通过“,”分割)
     */
    tags?: string;
    /**
     * 视频时长
     */
    timeInterval?: string;
    /**
     * 标题
     */
    title?: string;
    /**
     * 类型 1图文 2视频
     */
    type?: number;
    /**
     * 创建时间
     */
    createTime?: string;
    /**
     * 点赞数
     */
    likeCount?: number;
    /**
     * 阅读数
     */
    readCount?: number;
    /**
     * 分享数
     */
    shareCount?: number;
    /**
     * 发布时间
     */
    publishTime?: string;
    /**
     * 驳回原因
     */
    abortReason?: string;
    /**
     * 审批状态
     *
     * <ul>
     * <li>1-已审批通过;</li>
     * <li>0-未审批</li>
     * <li>-1-已审批未通过</li>
     * </ul>
     */
    isAudit?: number;
  }[];
}

/**
 * 接口 文章列表 的 **请求函数**
 *
 */
export const postArticleArticlelist = (data?: PostArticleArticlelistRequest) => {
  return request.post<PostArticleArticlelistRequest, PostArticleArticlelistResponse>('/article/article/list', {
    data
  });
};
