export interface OrderResponse {
  id: string;
  status: string;
  data: OrderItem[];
}

export interface OrderItem {
  product: Product;
  quantity: number;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  photo_product: string;
}