/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { Products } from "./types";
import { Response } from "../../types/api";

export const getProducts = async (limit?: string) => {
  try {
    const response = await axios.get(`https://dummyjson.com/products?limit=${limit}`);
    return response.data as Response<Products[]>;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
