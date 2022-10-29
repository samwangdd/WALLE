/**
 * Created By api-typescript
 * https://alidocs.dingtalk.com/i/team/dN0G7AD82xAq4XWY/docs/dN0G78qlBL1o7zWY#
 */

import request from '../request';

/**
 * 接口 分配团队 的 **请求类型**
 *
 */
/**
 * 分配团队参数
 */
export interface PostPatientPatientScreeningaddTeamRequest {
  /**
   * 源患者IDs
   */
  sourcePatientIds?: string[];
  /**
   * 机构ID
   */
  organId?: number;
  /**
   * 团队ID
   */
  teamId?: number;
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
 * 接口 分配团队 的 **返回类型**
 *
 */
/**
 * 分配团队响应
 */
export interface PostPatientPatientScreeningaddTeamResponse {
  /**
   * 成功的条数
   */
  count?: number;
}

/**
 * 接口 分配团队 的 **请求函数**
 *
 */
export const postPatientPatientScreeningaddTeam = (data?: PostPatientPatientScreeningaddTeamRequest) => {
  return request.post<PostPatientPatientScreeningaddTeamRequest, PostPatientPatientScreeningaddTeamResponse>(
    '/patient/patientScreening/addTeam',
    {
      data
    }
  );
};

/**
 * 接口 患者筛查列表 的 **请求类型**
 *
 */
/**
 * 患者筛查列表参数
 */
export interface PostPatientPatientScreeninglistRequest {
  /**
   * 机构ID
   */
  organId?: string;
  /**
   * 团队ID
   */
  teamId?: string;
  /**
   * 分组id
   */
  categoryId?: string;
  /**
   * 关键词
   */
  keyword?: string;
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
 * 接口 患者筛查列表 的 **返回类型**
 *
 */
/**
 * 患者筛查列表响应
 */
export interface PostPatientPatientScreeninglistResponse {
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
     * 骨量筛选风险因素-年纪 1-男性大于50岁 2-女性大于45岁
     */
    ageFactory?: string;
    /**
     * 出生日期
     */
    birthday?: string;
    /**
     * 年龄
     */
    age?: string;
    /**
     * 疾病名称
     */
    diseaseArray?: string[];
    /**
     * 骨量筛选风险因素-个人史 8-个人病史包含指定疾病
     */
    diseaseFactor?: string;
    /**
     * 家族病名称
     */
    diseaseName?: string;
    /**
     * 骨量筛选风险因素-喝酒 7-生活方式中饮酒状况频率为每天或经常
     */
    drinkFactor?: string;
    /**
     * 饮酒状况1.从不 2.偶尔 3.经常 4.每天 5.戒酒
     */
    drinkStatus?: string;
    /**
     * 骨量筛选风险因素-锻炼 5-生活方式中体育锻炼频率为偶尔或不锻炼
     */
    exeFactor?: string;
    /**
     * 家族史骨折记录危险因素 4-有骨折家族史
     */
    fractureFactor?: string;
    /**
     * 性别
     */
    gender?: string;
    /**
     * 身份证号
     */
    idCard?: string;
    /**
     * 签约机构编码
     */
    institution?: string;
    /**
     * 签约机构名字
     */
    institutionName?: string;
    /**
     * 绝经年纪
     */
    menopausalAge?: string;
    /**
     * 骨量筛选风险因素-是否有绝经记录 3-有绝经年纪记录
     */
    menopauseFactor?: string;
    /**
     * 患者姓名
     */
    name?: string;
    /**
     * 患者ID
     */
    patientId?: string;
    /**
     * 源患者ID
     */
    sourcePatientId?: string;
    /**
     * 体育锻炼_锻炼频率1.每天 2.每周一次以上 3.偶尔 4.不运动
     */
    peFrequence?: string;
    /**
     * 骨量筛选风险因素-抽烟 6-生活方式中饮吸烟状况频率为现在每天吸、偶尔吸、戒烟?
     */
    smokeFactor?: string;
    /**
     * 吸烟状况1.现在每天吸 2.偶尔吸 3.戒烟 4.从不吸
     */
    smokeStatus?: string;
    /**
     * 签约团队id
     */
    teamId?: string;
    /**
     * 签约团队名字
     */
    teamName?: string;
    /**
     * 联系电话
     */
    tel?: string;
    /**
     * 风险因素
     */
    riskFactor?: string[];
    /**
     * 是否绑定  1：已绑定  2：未绑定
     */
    binding?: number;
  }[];
}

/**
 * 接口 患者筛查列表 的 **请求函数**
 *
 */
export const postPatientPatientScreeninglist = (data?: PostPatientPatientScreeninglistRequest) => {
  return request.post<PostPatientPatientScreeninglistRequest, PostPatientPatientScreeninglistResponse>(
    '/patient/patientScreening/list',
    {
      data
    }
  );
};
