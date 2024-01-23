/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios"
import { IProductType } from "./types"
import { ResponsePayload } from "../../types/api"
import { ProductsDetail } from "./types";
import axiosWithConfig from "../axiosWithConfig";


export const getProductsByUser = async () => {
  try {
    const response = await axiosWithConfig.get("/users/products")
    return response.data as ResponsePayload;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const createProduct = async (body: IProductType) => {

  const formData = new FormData();

  formData.append("name", body.name);
  formData.append("description", body.description);
  formData.append("price", body.price.toString());
  formData.append("category", body.category);
  formData.append("stock", body.stock.toString());
  formData.append("photo_product", body.photo_product[0]);

  try {
    const response = await axiosWithConfig.post("/products", formData)
    return response.data as { message: string };
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const updateProduct = async (body: IProductType, id: number) => {
  const formData = new FormData();

  formData.append("name", body.name);
  formData.append("description", body.description);
  formData.append("price", body.price.toString());
  formData.append("category", body.category);
  formData.append("stock", body.stock.toString());
  formData.append("photo_product", body.photo_product[0]);

  try {
    const response = await axiosWithConfig.put(`/products/${id}`, formData)
    return response.data as { message: string };
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const deleteProduct = async (id: number) => {
  try {
    const response = await axiosWithConfig.delete(`products/${id}`)
    return response.data as { message: string };
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
  } catch (error: any) {
    throw new Error(error.message);

  }
};
