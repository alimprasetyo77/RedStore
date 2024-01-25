/* eslint-disable @typescript-eslint/no-explicit-any */
import { ResponsePayload } from "../../types/api"
import axiosWithConfig from "../axiosWithConfig"
import { IOrderUser } from "./types"

export const getOrders = async () => {
  try {
    const response = await axiosWithConfig.get("/users/orders")
    return response.data as ResponsePayload<IOrderUser[]>
  } catch (error: any) {
    throw new Error(error.message)
  }
}
export const cancelOrder = async (id: number) => {
  try {
    const response = await axiosWithConfig.put(`/orders/${id}`)
    return response.data as { message: string }
  } catch (error: any) {
    throw new Error(error.message)

  }
}