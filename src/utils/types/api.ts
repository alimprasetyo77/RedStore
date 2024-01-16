/* eslint-disable @typescript-eslint/no-explicit-any */
export interface Response<T = any> {
  limit: number
  products: T
  skip: number
  total: number
} 