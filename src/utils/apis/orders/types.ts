export interface IOrderUser {
  order: DataOrder[]
}

export interface DataOrder {
  product: ProductItem
  quantity: number
  status: string
}

export interface ProductItem {
  name: string,
  price: number,
  photo_product: string
  toko: {
    name: string
  }
}