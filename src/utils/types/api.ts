/* eslint-disable @typescript-eslint/no-explicit-any */

import { IProductsUser } from "../apis/products/types";

export interface Response {
  code: number;
  message: string;
}
export interface ResponsePayload<T = any> {
  message: string;
  data: T;
}
export interface ResponseProductsUser {
  Product: IProductsUser[];
}
