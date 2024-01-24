import React from "react";
import * as z from "zod";
const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png"];

export interface Data {
  data?: string[];
}

export const productSchema = z.object({
  name: z.string().min(1, { message: "Enter your name" }),
  description: z.string().min(1, { message: "Enter your description" }),
  price: z.number().min(1, { message: "Enter a price" }),
  category: z.string().min(1, { message: "Enter a category" }),
  stock: z.number().min(1, { message: "Enter a stock" }),
  photo_product: z
    .any()
    .refine((files) => files?.[0]?.size <= MAX_FILE_SIZE, "Max image size is 5MB")
    .refine(
      (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
      "Only .jpg, .jpeg, .png formats are supported"
    ).optional().or(z.literal("")),
});
export type IProductType = z.infer<typeof productSchema>;

export const orderSchema = z.object({
  address: z.string().min(1, { message: "Enter your address" }),
  gross_amount: z.number().min(1),
  bank: z.string().min(1, { message: "Select your payment method" }),
  cart_ids: z.any().optional(),
});
export type IOrderType = z.infer<typeof orderSchema>;

export interface IProductsUser {
  id: number;
  name: string;
  price: number | string;
  category: string;
  thumbnail: string;
  images: string[];
  photo_product: string;
  addToCart: React.MouseEventHandler;
}
export interface Products {
  id: number;
  name: string;
  price: number;
  category?: string;
  photo_product: string;
  addToCart: React.MouseEventHandler;
}

export interface ProductsDetail {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  stock: number;
  photo_product: string;
  toko: Seller;
}

export interface Seller {
  id?: number;
  name: string;
  user_name: string;
  photo_profile: string;
}

export interface Cart {
  id: number;
  quantity: number;
  Products: ProductCart;
}

export interface ProductCart {
  name: string;
  price: number;
  photo_product: string;
  toko: TokoCart;
}

export interface TokoCart {
  nama: string;
}

export interface ResCreateOrder {
  order_id: string;
  address: string;
  Payment: PaymentOrder;
}

export interface PaymentOrder {
  status_message: string;
  status: string;
  bank: string;
  gross_amount: number;
  va_number: number;
  transaction_id: string;
  transaction_time: string;
  expired_at: string;
}
