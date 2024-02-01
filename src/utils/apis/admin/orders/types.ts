export interface ResponseAdminOrders {
  data : GetAdminOrders
  message : string
  total_page : number
}
export interface GetAdminOrders {
  order: OrderData[];
}

export interface OrderData {
  order_id: string;
  product: {
    name: string;
  };
  quantity: number;
  created_at: string;
  bank: string;
  gross_amount: number;
  address: string;
  status: string;
}
