/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios"
import { IProductType } from "./types"
import { Response, ResponseProductsUser } from "../../types/api"


export const getProductsByUser = async () => {
  try {
    const response = await axios.get("https://virtserver.swaggerhub.com/L3NONEONE_1/EcommerceAppProject/1.0.0/users/products")
    return response.data as ResponseProductsUser
  } catch (error: any) {
    throw new Error(error.message)

  }
}

export const createProduct = async (body: IProductType) => {
  try {
    const response = await axios.post("https://virtserver.swaggerhub.com/L3NONEONE_1/EcommerceAppProject/1.0.0/products", body)
    return response.data as Response
  } catch (error: any) {
    throw new Error(error.message)
  }
}

export const updateProduct = async (body: IProductType, id: number) => {
  try {
    const response = await axios.put(`https://virtserver.swaggerhub.com/L3NONEONE_1/EcommerceAppProject/1.0.0/products/${id}`, body)
    return response.data as Response
  } catch (error: any) {
    throw new Error(error.message)
  }
}


export const deleteProduct = async (id: number) => {
  try {
    const response = await axios.delete(`https://virtserver.swaggerhub.com/L3NONEONE_1/EcommerceAppProject/1.0.0/products/${id}`)
    return response.data as Response
  } catch (error: any) {
    throw new Error(error.message)
  }
}