/* eslint-disable @typescript-eslint/no-explicit-any */
import {  ResponseAdminOrders } from "./types";
import axiosWithConfig from "../../axiosWithConfig";



export const getUsers = async (pageNumber: number, limit: number) => {
  try {
    const response = await axiosWithConfig.get(`/admin/users?page=${pageNumber}&limit=${limit}`);
    return response.data as ResponseAdminOrders;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
