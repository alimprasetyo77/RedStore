import * as z from "zod";
const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png"];

export const productSchema = z.object({
  name: z.string().min(1, { message: "Enter your name" }),
  description: z.string().min(1, { message: "Enter your username" }),
  price: z.number().min(1, { message: "Enter a price" }),
  category: z.string().min(1, { message: "Enter a category" }),
  stock: z.number().min(1, { message: "Enter a stock" }),
  photo_product: z
    .any()
    .refine((files) => files?.[0]?.size <= MAX_FILE_SIZE, "Max image size is 5MB")
    .refine(
      (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
      "Only .jpg, .jpeg, .png formats are supported"
    )
    .optional()
    .or(z.literal("")),
});
export type IProductType = z.infer<typeof productSchema>;

export interface IProductsUser {
  id: number;
  name: string;
  price: number | string;
  category: string;
  photo_product: string;
}

export interface Products2 {
  id: number;
  name: string;
  price: number;
  category: string;
  photo_product: string;
}

export interface ProductsDetail {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  stock: number;
  photo_product: string;
  users: Seller;
}

export interface Seller {
  id: number;
  name: string;
  user_name: string;
  photo_profil: string;
}
