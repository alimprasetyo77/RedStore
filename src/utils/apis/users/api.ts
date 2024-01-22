/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios"
import { IUserType } from "./types"
import { Response } from "../../types/api"

export const getUser = async () => {
  try {
    const response = await axios.get("https://virtserver.swaggerhub.com/L3NONEONE_1/EcommerceAppProject/1.0.0/users")
    return response.data as IUserType
  } catch (error: any) {
    throw new Error(error.message)
  }
}
export const updateUser = async (body: IUserType) => {
  try {
    const formData = new FormData();

    formData.append("name", body.name);
    formData.append("user_name", body.user_name);
    formData.append("email", body.email);

    if (body.photo_profile.length > 0) {
      formData.append("photo_profile", body.photo_profile[0]);
    }

    const response = await axios.put("https://virtserver.swaggerhub.com/L3NONEONE_1/EcommerceAppProject/1.0.0/users", formData)
    return response.data as Response
  } catch (error: any) {
    throw new Error(error.message)
  }
}

export const deleteUser = async () => {
  try {
    const response = await axios.delete("https://virtserver.swaggerhub.com/L3NONEONE_1/EcommerceAppProject/1.0.0/users")
    return response.data as Response
  } catch (error: any) {
    throw new Error(error.message)
  }
}