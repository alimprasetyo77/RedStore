/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios"
import { ResponsePayload } from "../../types/api"
import axiosWithConfig from "../axiosWithConfig"

export const getOrders = async () => {
  try {
    const response = await axiosWithConfig.get("/users/orders")
    return response.data as ResponsePayload<[]>
  } catch (error: any) {
    throw new Error(error.message)
  }
}
export const cancelOrder = async (id: number) => {
  try {
    const response = await axios.post(`https://virtserver.swaggerhub.com/L3NONEONE_1/EcommerceAppProject/1.0.0/orders/${id}`)
    return response.data as { message: string }
  } catch (error: any) {
    throw new Error(error.message)

  }
}