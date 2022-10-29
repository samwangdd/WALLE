/**
 * Created By api-typescript
 * https://alidocs.dingtalk.com/i/team/dN0G7AD82xAq4XWY/docs/dN0G78qlBL1o7zWY#
 */

import request from '../request';

/**
 * 接口 投诉记录审核 的 **请求类型**
 *
 */
/**
 * 投诉记录审核参数
 */
export interface PostOrderComplaintRecordauditRequest {
  /**
   * 投诉记录id
   */
  complaintRecordId?: string;
  /**
   * 处理说明
   */
  feedback?: string;
  /**
   * 是否需要退款 (1需要退款处理  2不需要)
   */
  isRefund?: number;
  /**
   * 退款原因id
   */
  refundReasonId?: number;
  /**
   * 退款金额
   */
  refundMoney?: number;
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
 * 接口 投诉记录审核 的 **返回类型**
 *
 */
/**
 * 投诉记录审核响应
 */
export interface PostOrderComplaintRecordauditResponse {}

/**
 * 接口 投诉记录审核 的 **请求函数**
 *
 */
export const postOrderComplaintRecordaudit = (data?: PostOrderComplaintRecordauditRequest) => {
  return request.post<PostOrderComplaintRecordauditRequest, PostOrderComplaintRecordauditResponse>(
    '/order/complaintRecord/audit',
    {
      data
    }
  );
};

/**
 * 接口 投诉记录详情 的 **请求类型**
 *
 */
/**
 * 投诉记录详情参数
 */
export interface PostOrderComplaintRecorddetailRequest {
  /**
   * 投诉记录id
   */
  complaintRecordId?: string;
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
 * 接口 投诉记录详情 的 **返回类型**
 *
 */
/**
 * 投诉记录详情响应
 */
export interface PostOrderComplaintRecorddetailResponse {
  /**
   * 投诉记录id
   */
  complaintRecordId?: string;
  /**
   * 投诉人
   */
  name?: string;
  /**
   * 联系电话
   */
  contactMobile?: string;
  /**
   * 投诉原因
   */
  content?: string;
  /**
   * 备注
   */
  remark?: string;
  /**
   * 创建时间
   */
  xCreateTime?: string;
  /**
   * 处理状态  1：未处理   2：处理中   3：处理完成
   */
  dealStatus?: string;
  /**
   * 订单金额
   */
  actualMoney?: string;
  /**
   * 退款状态 1已退款 2未退款
   */
  refundStatus?: number;
  /**
   * 退款原因
   */
  refundReason?: string;
  /**
   * 退款金额
   */
  refundMoney?: string;
  /**
   * 处理说明
   */
  feedback?: string;
}

/**
 * 接口 投诉记录详情 的 **请求函数**
 *
 */
export const postOrderComplaintRecorddetail = (data?: PostOrderComplaintRecorddetailRequest) => {
  return request.post<PostOrderComplaintRecorddetailRequest, PostOrderComplaintRecorddetailResponse>(
    '/order/complaintRecord/detail',
    {
      data
    }
  );
};

/**
 * 接口 订单评论详情 的 **请求类型**
 *
 */
/**
 * 订单评论详情参数
 */
export interface PostOrderOrderCommentdetailRequest {
  /**
   * 订单id
   */
  orderId?: string;
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
 * 接口 订单评论详情 的 **返回类型**
 *
 */
/**
 * 订单评论详情响应
 */
export interface PostOrderOrderCommentdetailResponse {
  /**
   * 服务态度
   */
  serviceLevel?: number;
  /**
   * 专业能力
   */
  specialtyLevel?: number;
  /**
   * 回复及时性
   */
  replyLevel?: number;
  /**
   * 评论
   */
  comment?: string;
  /**
   * 创建时间
   */
  xCreateTime?: string;
}

/**
 * 接口 订单评论详情 的 **请求函数**
 *
 */
export const postOrderOrderCommentdetail = (data?: PostOrderOrderCommentdetailRequest) => {
  return request.post<PostOrderOrderCommentdetailRequest, PostOrderOrderCommentdetailResponse>(
    '/order/orderComment/detail',
    {
      data
    }
  );
};

/**
 * 接口 订单评论回复 的 **请求类型**
 *
 */
/**
 * 订单评论回复参数
 */
export interface PostOrderOrderCommentreplyRequest {
  /**
   * 订单id
   */
  orderId?: string;
  /**
   * 回复
   */
  feedback?: string;
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
 * 接口 订单评论回复 的 **返回类型**
 *
 */
/**
 * 订单评论回复响应
 */
export interface PostOrderOrderCommentreplyResponse {}

/**
 * 接口 订单评论回复 的 **请求函数**
 *
 */
export const postOrderOrderCommentreply = (data?: PostOrderOrderCommentreplyRequest) => {
  return request.post<PostOrderOrderCommentreplyRequest, PostOrderOrderCommentreplyResponse>(
    '/order/orderComment/reply',
    {
      data
    }
  );
};

/**
 * 接口 订单详情 的 **请求类型**
 *
 */
/**
 * 订单详情参数
 */
export interface PostOrderOrderdetailRequest {
  /**
   * 订单id
   */
  orderId: string;
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
 * 接口 订单详情 的 **返回类型**
 *
 */
/**
 * 订单详情响应
 */
export interface PostOrderOrderdetailResponse {
  /**
   * 微信用户信息
   */
  userInfo?: {
    /**
     * 用户微信昵称
     */
    nickname?: string;
    /**
     * 用户手机号
     */
    phone?: string;
    /**
     * 紧急联系人姓名
     */
    emergencyContactName?: string;
    /**
     * 紧急联系人手机号
     */
    emergencyContactPhone?: string;
  };
  /**
   * 订单信息
   */
  order?: {
    /**
     * 订单id
     */
    orderId?: string;
    /**
     * 订单类型
     */
    typeStr?: string;
    /**
     * 订单项目名字
     */
    name?: string;
    /**
     * 支付金额
     */
    actualMoney?: string;
    /**
     * 创建时间
     */
    xCreateTime?: string;
    /**
     * 状态文案
     */
    statusLabel?: string;
    /**
     * 状态
     * <ul>
     * <li>1 待支付</li>
     * <li>2 已支付</li>
     * </ul>
     */
    status?: number;
    /**
     * 支付时间
     */
    paidTime?: string;
    /**
     * 支付单号
     */
    payGatewayOrderId?: string;
    /**
     * 服务人姓名
     */
    patientName?: string;
    /**
     * 联系电话
     */
    contactMobile?: string;
    /**
     * 身份证号
     */
    idCard?: string;
    /**
     * 开单医生
     */
    doctorName?: string;
    /**
     * 就诊时间
     */
    admDate?: string;
    /**
     * 订单类型
     * <ul>
     * <li>1方案订单</li>
     * <li>2:医嘱开药</li>
     * <li>3.医嘱检验</li>
     * <li>4.医嘱</li>
     * </ul>
     */
    type?: number;
  };
  /**
   * 评论信息
   */
  comment?: {
    /**
     * 服务态度
     */
    serviceLevel?: number;
    /**
     * 专业能力
     */
    specialtyLevel?: number;
    /**
     * 回复及时性
     */
    replyLevel?: number;
    /**
     * 评论
     */
    comment?: string;
    /**
     * 回复内容
     */
    feedback?: string;
  };
  /**
   * 投诉信息
   */
  complaint?: {
    /**
     * 投诉原因
     */
    content?: string;
    /**
     * 补充说明
     */
    remark?: string;
    /**
     * 处理状态 (1：未处理   2：处理中   3：处理完成)
     */
    dealStatus?: number;
    /**
     * 处理意见
     */
    feedback?: string;
    /**
     * 退款状态
     */
    refundStatus?: number;
    /**
     * 退款金额
     */
    refundMoney?: string;
  };
  /**
   * 团队信息
   */
  team?: {
    /**
     * 名称
     */
    name?: string;
    /**
     * 机构名
     */
    orange?: string;
    /**
     * 服务状态
     */
    status?: string;
    /**
     * 状态名
     */
    statusLabel?: string;
  };
  /**
   * 退款信息
   */
  refund?: {
    /**
     * 退款状态  1 处理中 2 通过 3 拒绝
     */
    status?: string;
    /**
     * 退款状态描述
     */
    statusStr?: string;
    /**
     * 退款原因
     */
    refundReason?: string;
    /**
     * 拒绝原因
     */
    rejectReason?: string;
    /**
     * 退款金额
     */
    refundMoney?: string;
    /**
     * 退款时间
     */
    refundTime?: string;
  };
  /**
   * 检查项目
   */
  examination?: {
    /**
     * 检查项目名
     */
    name?: string;
    /**
     * 检查子项数量
     */
    count?: number;
    /**
     * 总价
     */
    totalPrice?: string;
    /**
     * 检查明细
     */
    items?: {
      /**
       * 检查项目名
       */
      name?: string;
      /**
       * 数量
       */
      amount?: number;
    }[];
  }[];
  /**
   * 医嘱
   */
  medical?: {
    /**
     * 医嘱开药信息
     */
    drugInfo?: {
      /**
       * 药房
       */
      stores?: {
        /**
         * 药房名称
         */
        storeName?: string;
        /**
         * 处方列表
         */
        prescriptions?: {
          /**
           * 处方编号
           */
          presNo?: string;
          /**
           * 处方状态
           */
          status?: string;
          /**
           * 处方状态名称
           */
          statusName?: string;
          /**
           * 停医嘱原因
           */
          reasonDesc?: string;
          /**
           * 审方医师姓名
           */
          reviewPharmacists?: string;
          /**
           * 审方时间
           */
          reviewTime?: string;
          /**
           * 调配药师姓名
           */
          allocatePharmacists?: string;
          /**
           * 调配时间
           */
          allocateTime?: string;
          /**
           * 发药药师姓名
           */
          dispensePharmacists?: string;
          /**
           * 发药时间
           */
          dispenseTime?: string;
          /**
           * 药品信息
           */
          drugs?: {
            /**
             * 药品名称
             */
            productName?: string;
            /**
             * 药品规格
             */
            drugSpec?: string;
            /**
             * 整包装单位
             */
            wholePackingUnit?: string;
            /**
             * 单价
             */
            unitPrice?: number;
            /**
             * 总价
             */
            totalPrice?: number;
            /**
             * 取药量
             */
            amount?: number;
            /**
             * 药品类型ID
             */
            typeId?: string;
            /**
             * 药品类型名称
             */
            typeName?: string;
            /**
             * 用法ID
             */
            usageId?: string;
            /**
             * 用法描述
             */
            usageDesc?: string;
          }[];
        }[];
        /**
         * 发药状态
         */
        dispenseStatus?: number;
      }[];
      /**
       * 收货地址
       */
      logistics?: {};
    };
    /**
     * 输注类药品信息
     */
    infuseDrugsInfo?: {
      /**
       * 药房
       */
      stores?: {
        /**
         * 药房名称
         */
        storeName?: string;
        /**
         * 处方列表
         */
        prescriptions?: {
          /**
           * 处方编号
           */
          presNo?: string;
          /**
           * 处方状态
           */
          status?: string;
          /**
           * 处方状态名称
           */
          statusName?: string;
          /**
           * 停医嘱原因
           */
          reasonDesc?: string;
          /**
           * 审方医师姓名
           */
          reviewPharmacists?: string;
          /**
           * 审方时间
           */
          reviewTime?: string;
          /**
           * 调配药师姓名
           */
          allocatePharmacists?: string;
          /**
           * 调配时间
           */
          allocateTime?: string;
          /**
           * 发药药师姓名
           */
          dispensePharmacists?: string;
          /**
           * 发药时间
           */
          dispenseTime?: string;
          /**
           * 药品信息
           */
          drugs?: {
            /**
             * 药品名称
             */
            productName?: string;
            /**
             * 药品规格
             */
            drugSpec?: string;
            /**
             * 整包装单位
             */
            wholePackingUnit?: string;
            /**
             * 单价
             */
            unitPrice?: number;
            /**
             * 总价
             */
            totalPrice?: number;
            /**
             * 取药量
             */
            amount?: number;
            /**
             * 药品类型ID
             */
            typeId?: string;
            /**
             * 药品类型名称
             */
            typeName?: string;
            /**
             * 用法ID
             */
            usageId?: string;
            /**
             * 用法描述
             */
            usageDesc?: string;
          }[];
        }[];
        /**
         * 发药状态
         */
        dispenseStatus?: number;
      }[];
      /**
       * 取药时间
       */
      dispenseTime?: string;
      /**
       * 注射地址
       */
      address?: string;
      /**
       * 输注类药总价
       */
      infuseDrugPrice?: number;
    };
    /**
     * 医嘱检验列表信息
     */
    inspectInfo?: {
      /**
       * 检查名称
       */
      inspectName?: string;
      /**
       * 检查检验项总价
       */
      totalPrice?: number;
      /**
       * 检验子项目条目
       */
      inspectItems?: {
        /**
         * 项目名称
         */
        itemName?: string;
        /**
         * 检查次数
         */
        number?: number;
        /**
         * 检查子项价格
         */
        price?: number;
      }[];
      /**
       * 检验次数
       */
      amount?: number;
      /**
       * 状态
       */
      status?: number;
      /**
       * 状态名称
       */
      statusName?: number;
    }[];
    /**
     * 开单医生
     */
    doctorName?: string;
    /**
     * 开单时间
     */
    medicalTime?: string;
  };
  /**
   * 医嘱药品
   */
  medicalDrug?: {
    /**
     * 药品名
     */
    drugName?: string;
    /**
     * 生产企业
     */
    manufacturer?: string;
    /**
     * 剂类型
     */
    dosageForm?: string;
  }[];
}

/**
 * 接口 订单详情 的 **请求函数**
 *
 */
export const postOrderOrderdetail = (data?: PostOrderOrderdetailRequest) => {
  return request.post<PostOrderOrderdetailRequest, PostOrderOrderdetailResponse>('/order/order/detail', {
    data
  });
};

/**
 * 接口 订单列表 的 **请求类型**
 *
 */
/**
 * 订单列表参数
 */
export interface PostOrderOrderlistRequest {
  /**
   * 查询订单状态 (1待付款 2已付款 3退款 4投诉评价 5失效订单 6服务完成)
   */
  customStatus?: number;
  /**
   * 查询子状态
   * 待付款   （无）
   * 已付款   （1待启动 2待调配 3进行中）
   * 退款     （1处理中 2通过 3拒绝）
   * 投诉评价 （1投诉待处理 2已评价 3待评价 4投诉已处理）
   * 失效订单（无）
   */
  subCustomStatus?: number;
  /**
   * 订单名称
   */
  name?: string;
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
 * 接口 订单列表 的 **返回类型**
 *
 */
/**
 * 订单列表响应
 */
export interface PostOrderOrderlistResponse {
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
     * 订单id号
     */
    orderId?: string;
    /**
     * 下单时间
     */
    xCreateTime?: string;
    /**
     * 名称
     */
    name?: string;
    /**
     * 实际支付金额
     */
    price?: string;
    /**
     * 用户名称
     */
    username?: string;
    /**
     * 手机号
     */
    phone?: string;
    /**
     * 机构名
     */
    organName?: string;
    /**
     * 方案开始时间
     */
    solutionStartDate?: string;
    /**
     * 服务状态
     * 10待支付  20支付成功  21服务待启动   22服务进行中  60服务完成  30超时未支付系统取消  40用户取消支付  50退款审核中  51同意退款  52退款完成
     * 53拒绝退款   54退款状态异常   61投诉待处理   62投诉已处理   63用户取消投诉   65评价未处理   66已评价
     */
    customOrderStatus?: number;
    /**
     * 服务状态文案
     */
    customOrderStatusStr?: string;
    /**
     * 支付时间
     */
    paidTime?: string;
    /**
     * 退款申请id
     */
    refundApplyId?: string;
    /**
     * 投诉记录id
     */
    complaintRecordId?: string;
    /**
     * 评价ID
     */
    commentId?: string;
    /**
     * 实际支付金额 (此字段作为给price字段使用)
     */
    actualMoney?: string;
  }[];
}

/**
 * 接口 订单列表 的 **请求函数**
 *
 */
export const postOrderOrderlist = (data?: PostOrderOrderlistRequest) => {
  return request.post<PostOrderOrderlistRequest, PostOrderOrderlistResponse>('/order/order/list', {
    data
  });
};

/**
 * 接口 发药确认列表 的 **请求类型**
 *
 */
/**
 * 发药确认列表参数
 */
export interface PostOrderOrdersendDrugConfirmListRequest {
  /**
   * 查询时间
   */
  datetime?: string;
  /**
   * 患者姓名
   */
  patientName?: string;
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
 * 接口 发药确认列表 的 **返回类型**
 *
 */
/**
 * 发药确认列表响应
 */
export interface PostOrderOrdersendDrugConfirmListResponse {
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
   * 内容元素
   */
  content?: {
    /**
     * 订单id
     */
    orderId?: string;
    /**
     * 医嘱id
     */
    medicalId?: string;
    /**
     * 患者名
     */
    patientName?: string;
    /**
     * 性别
     * <ul>
     * <li>1 男</li>
     * <li>2 女</li>
     * </ul>
     */
    gender?: number;
    /**
     * 年龄
     */
    age?: number;
    /**
     * 手机号
     */
    phone?: string;
    /**
     * 取药日期
     */
    takeDate?: string;
    /**
     * 已接受数量
     */
    receivedCount?: number;
    /**
     * 发药总数
     */
    totalCount?: number;
    /**
     * 逾期天数 （非0表示有逾期情况）
     */
    overdueDay?: number;
  }[];
}

/**
 * 接口 发药确认列表 的 **请求函数**
 *
 */
export const postOrderOrdersendDrugConfirmList = (data?: PostOrderOrdersendDrugConfirmListRequest) => {
  return request.post<PostOrderOrdersendDrugConfirmListRequest, PostOrderOrdersendDrugConfirmListResponse>(
    '/order/order/sendDrugConfirmList',
    {
      data
    }
  );
};

/**
 * 接口 退款申请审核 的 **请求类型**
 *
 */
/**
 * 退款申请审核参数
 */
export interface PostOrderRefundApplyauditRequest {
  /**
   * 退款申请id
   */
  refundApplyId?: string;
  /**
   * 退款原因id
   */
  refundReasonId?: string;
  /**
   * 退款金额
   */
  refundMoney?: number;
  /**
   * 退款状态 (1通过 2拒绝)
   */
  status?: number;
  /**
   * 拒绝退款原因
   */
  rejectReason?: string;
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
 * 接口 退款申请审核 的 **返回类型**
 *
 */
/**
 * 退款申请审核响应
 */
export interface PostOrderRefundApplyauditResponse {}

/**
 * 接口 退款申请审核 的 **请求函数**
 *
 */
export const postOrderRefundApplyaudit = (data?: PostOrderRefundApplyauditRequest) => {
  return request.post<PostOrderRefundApplyauditRequest, PostOrderRefundApplyauditResponse>('/order/refundApply/audit', {
    data
  });
};
