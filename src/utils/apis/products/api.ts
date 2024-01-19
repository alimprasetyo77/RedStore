/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { Products, ProductsDetail } from "./types";
import { Response } from "../../types/api";

export const getProducts = async (limit?: string) => {
  try {
    const response = await axios.get(`https://dummyjson.com/products?limit=${limit}`);
    return response.data as Response<Products[]>;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const getDetail = async (id: string) => {
  try {
    const response = await axios.get(
      `https://virtserver.swaggerhub.com/L3NONEONE_1/EcommerceAppProject/1.0.0/products/${id}`
    );
    return response.data as ProductsDetail;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const getSearch = async (query: string) => {
  try {
    const response = await axios.get(
      `https://virtserver.swaggerhub.com/L3NONEONE_1/EcommerceAppProject/1.0.0/products/search?search=${query}`
    );
    return response.data;
  } catch (error) {}
};
