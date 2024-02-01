/* eslint-disable @typescript-eslint/no-explicit-any */
import { LoginType, RegisterType } from "./types";
import { ResponsePayload } from "../../types/api";
import axiosWithConfig from "../axiosWithConfig";

interface LoginPayload {
  nama: string;
  role: string;
  token: string;
}

export const userLogin = async (body: LoginType) => {
  try {
    const response = await axiosWithConfig.post("/login", body);
    return response.data as ResponsePayload<LoginPayload>;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};

export const userRegister = async (body: RegisterType) => {
  try {
    const response = await axiosWithConfig.post("/users", body);
    return response.data as { message: string };
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};
