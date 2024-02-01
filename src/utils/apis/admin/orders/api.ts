import {  ResponseAdminOrders } from "./types";
import axiosWithConfig from "../../axiosWithConfig";

export const getOrders = async (pageNumber: number, limit: number) => {
  try {
    const response = await axiosWithConfig.get(`/admin/orders?page=${pageNumber}&limit=${limit}`);
    return response.data as ResponseAdminOrders;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
