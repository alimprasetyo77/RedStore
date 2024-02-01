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
    if (response.status === 200) {
      return response.data as ResponsePayload<LoginPayload>;
    }
  } catch (error: any) {
    const isError = error.response.data.message;
    if (isError.includes("password tidak sesuai")) {
      throw Error("Password incorrect");
    } else if (isError.includes("record not found")) {
      throw Error("Email not registered");
    }
  }
};

export const userRegister = async (body: RegisterType) => {
  try {
    const response = await axiosWithConfig.post("/users", body);
    if (response.status === 200) {
      return response.data as { message: string };
    }
  } catch (error: any) {
    const isError = error.response.data.message;
    if (isError.includes("Duplicate entry")) {
      throw Error("Email already existed");
    }
  }
};
