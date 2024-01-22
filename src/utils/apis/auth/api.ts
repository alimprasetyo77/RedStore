/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { LoginType, RegisterType } from "./types";
import { Response } from "../../types/api";

interface ResponseLogin {
  code: number
  token: string;
}

export const userLogin = async (body: LoginType) => {
  try {
    const response = await axios.post(`https://virtserver.swaggerhub.com/L3NONEONE_1/EcommerceAppProject/1.0.0/login`, body);
    return response.data as ResponseLogin;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};

export const userRegister = async (body: RegisterType) => {
  try {
    const response = await axios.post(`https://virtserver.swaggerhub.com/L3NONEONE_1/EcommerceAppProject/1.0.0/users`, body);
    return response.data as Response;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};
