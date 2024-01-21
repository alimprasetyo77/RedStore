import axios from "axios";
import { Users } from "./types";

export const getUsers = async (pageNumber: number, limit: number) => {
  try {
    const response = await axios.get(
      `https://virtserver.swaggerhub.com/L3NONEONE_1/EcommerceAppProject/1.0.0/admin/users?page=${pageNumber}&limit=${limit}`
    );
    return response.data as Users;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
