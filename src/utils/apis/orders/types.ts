export interface IOrderUser {
  order_id: string
  order: DataOrder[]
}

export interface DataOrder {
  product: ProductItem
  quantity: number
  status: string
  gross_amount : number
  va_number : number
}

export interface ProductItem {
  name: string,
  price: number,
  photo_product: string
  toko: {
    name: string
  }
}