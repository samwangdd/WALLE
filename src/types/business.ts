import { AnyObject } from "vtils/types";

export interface IHttpBusinessState extends AnyObject {
  code: string;
  msg: string;
}

export interface IHttpBusinessResponse<T> {
  data: T;
  state: IHttpBusinessState;
}