/* eslint-disable @typescript-eslint/no-explicit-any */
import { ResponsePayload } from './../../types/api';
import { IUserType } from "./types"
import axiosWithConfig from "../axiosWithConfig"

export const getUser = async () => {
  try {
    const response = await axiosWithConfig.get("/users")
    return response.data as ResponsePayload<IUserType>
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

    const response = await axiosWithConfig.put("/users", formData)
    return response.data as { message: string }
  } catch (error: any) {
    throw new Error(error.message)
  }
}

export const deleteUser = async () => {
  try {
    const response = await axiosWithConfig.delete("/users")
    return response.data as { message: string }
  } catch (error: any) {
    throw new Error(error.message)
  }
}