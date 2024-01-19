export interface Products {
  id: number;
  title: string;
  description: string;
  price: number | string;
  discountPercentage: number | string;
  rating: number;
  stock: number | string;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

export interface ProductsDetail {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  stock: number;
  photo_product: string;
  users: Seller[];
}

export interface Seller {
  id: number;
  name: string;
  user_name: string;
  photo_profil: string;
}
