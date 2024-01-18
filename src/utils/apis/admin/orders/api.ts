import axios from "axios";
import { Orders } from "./types";

export const getOrders = async () => {
  try {
    const response = await axios.get(
      `https://virtserver.swaggerhub.com/L3NONEONE_1/EcommerceAppProject/1.0.0/admin/orders`
    );
    return response.data as Orders;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
