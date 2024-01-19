export interface Products {
  id?: number;
  title?: string;
  description?: string;
  price?: number | string;
  discountPercentage?: number | string;
  rating?: number;
  stock?: number | string;
  brand?: string;
  category?: string;
  thumbnail?: string;
  images?: string[];
}

export interface Data {
  data?: string[];
}
