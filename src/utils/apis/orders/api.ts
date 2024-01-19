/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios"
import { OrderResponse } from "./types"
import { Response } from "../../types/api"

export const getOrders = async () => {
  try {
    const response = await axios.get(`https://virtserver.swaggerhub.com/L3NONEONE_1/EcommerceAppProject/1.0.0/users/orders`)
    return response.data as OrderResponse
  } catch (error: any) {
    throw new Error(error.message)
  }
}
export const cancelOrder = async (id: number) => {
  try {
    const response = await axios.post(`https://virtserver.swaggerhub.com/L3NONEONE_1/EcommerceAppProject/1.0.0/orders/${id}`)
    return response.data as Response
  } catch (error: any) {
    throw new Error(error.message)

  }
}