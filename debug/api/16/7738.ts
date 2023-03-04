/**
 * Created By WALLE, Please Don't Modify This File.
 * 此文件由 WALL-E 自动生成，请勿修改
 */
import type { IHttpBusinessResponse } from "@hs/hs-fe-walle";

import request from "@/service/api";

/**
 * 接口 [\/thank\/api\/scene\/getAvailableCount↗](http://yapi.corp.hongsong.club/project/16/interface/api/63165) 的 **TS 请求类型**
 *
 */
export interface GetThankApiSceneGetAvailableCountRequest {}

/**
 * 接口 [\/thank\/api\/scene\/getAvailableCount↗](http://yapi.corp.hongsong.club/project/16/interface/api/63165) 的 **TS 返回类型**
 *
 */
/**
 * data
 */
export type GetThankApiSceneGetAvailableCountResponse = number;

/**
 * 接口 [\/thank\/api\/scene\/getAvailableCount↗](http://yapi.corp.hongsong.club/project/16/interface/api/63165)
 *
 */
export const getThankApiSceneGetAvailableCount = (
  data?: GetThankApiSceneGetAvailableCountRequest
) => {
  return request.get<
    GetThankApiSceneGetAvailableCountRequest,
    IHttpBusinessResponse<GetThankApiSceneGetAvailableCountResponse>
  >("/thank/api/scene/getAvailableCount", {
    query: data,
  });
};

/**
 * 接口 [\/thank\/api\/shareFriendsIncrease↗](http://yapi.corp.hongsong.club/project/16/interface/api/62825) 的 **TS 请求类型**
 *
 */
export interface GetThankApiShareFriendsIncreaseRequest {
  /**
   * (String)
   */
  topicId: unknown;
}

/**
 * 接口 [\/thank\/api\/shareFriendsIncrease↗](http://yapi.corp.hongsong.club/project/16/interface/api/62825) 的 **TS 返回类型**
 *
 */
/**
 * data
 */
export type GetThankApiShareFriendsIncreaseResponse = boolean;

/**
 * 接口 [\/thank\/api\/shareFriendsIncrease↗](http://yapi.corp.hongsong.club/project/16/interface/api/62825)
 *
 */
export const getThankApiShareFriendsIncrease = (
  data: GetThankApiShareFriendsIncreaseRequest
) => {
  return request.get<
    GetThankApiShareFriendsIncreaseRequest,
    IHttpBusinessResponse<GetThankApiShareFriendsIncreaseResponse>
  >("/thank/api/shareFriendsIncrease", {
    query: data,
  });
};

/**
 * 接口 [\/thank\/api\/shareMomentsIncrease↗](http://yapi.corp.hongsong.club/project/16/interface/api/62829) 的 **TS 请求类型**
 *
 */
export interface GetThankApiShareMomentsIncreaseRequest {
  /**
   * (String)
   */
  topicId: unknown;
}

/**
 * 接口 [\/thank\/api\/shareMomentsIncrease↗](http://yapi.corp.hongsong.club/project/16/interface/api/62829) 的 **TS 返回类型**
 *
 */
/**
 * data
 */
export type GetThankApiShareMomentsIncreaseResponse = boolean;

/**
 * 接口 [\/thank\/api\/shareMomentsIncrease↗](http://yapi.corp.hongsong.club/project/16/interface/api/62829)
 *
 */
export const getThankApiShareMomentsIncrease = (
  data: GetThankApiShareMomentsIncreaseRequest
) => {
  return request.get<
    GetThankApiShareMomentsIncreaseRequest,
    IHttpBusinessResponse<GetThankApiShareMomentsIncreaseResponse>
  >("/thank/api/shareMomentsIncrease", {
    query: data,
  });
};

/**
 * 接口 [\/thank\/api\/scene\/sceneThankLimit↗](http://yapi.corp.hongsong.club/project/16/interface/api/63169) 的 **TS 请求类型**
 *
 */
export interface GetThankApiSceneSceneThankLimitRequest {
  /**
   * (String)
   */
  topicId: unknown;
}

/**
 * 接口 [\/thank\/api\/scene\/sceneThankLimit↗](http://yapi.corp.hongsong.club/project/16/interface/api/63169) 的 **TS 返回类型**
 *
 */
/**
 * UserSceneLimitVO
 */
export interface GetThankApiSceneSceneThankLimitResponse {
  moments?: boolean;
  friends?: boolean;
}

/**
 * 接口 [\/thank\/api\/scene\/sceneThankLimit↗](http://yapi.corp.hongsong.club/project/16/interface/api/63169)
 *
 */
export const getThankApiSceneSceneThankLimit = (
  data: GetThankApiSceneSceneThankLimitRequest
) => {
  return request.get<
    GetThankApiSceneSceneThankLimitRequest,
    IHttpBusinessResponse<GetThankApiSceneSceneThankLimitResponse>
  >("/thank/api/scene/sceneThankLimit", {
    query: data,
  });
};

/**
 * 接口 [\/thank\/api\/scene\/availableIncrease↗](http://yapi.corp.hongsong.club/project/16/interface/api/63173) 的 **TS 请求类型**
 *
 */
export interface GetThankApiSceneAvailableIncreaseRequest {
  /**
   * (String)
   */
  topicId: unknown;
}

/**
 * 接口 [\/thank\/api\/scene\/availableIncrease↗](http://yapi.corp.hongsong.club/project/16/interface/api/63173) 的 **TS 返回类型**
 *
 */
/**
 * UserSceneIncreaseAvailableVO
 */
export interface GetThankApiSceneAvailableIncreaseResponse {
  moments?: number;
  friends?: number;
}

/**
 * 接口 [\/thank\/api\/scene\/availableIncrease↗](http://yapi.corp.hongsong.club/project/16/interface/api/63173)
 *
 */
export const getThankApiSceneAvailableIncrease = (
  data: GetThankApiSceneAvailableIncreaseRequest
) => {
  return request.get<
    GetThankApiSceneAvailableIncreaseRequest,
    IHttpBusinessResponse<GetThankApiSceneAvailableIncreaseResponse>
  >("/thank/api/scene/availableIncrease", {
    query: data,
  });
};
