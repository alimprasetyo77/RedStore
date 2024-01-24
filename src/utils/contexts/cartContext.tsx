import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import { Cart } from "../apis/products/types";
import { getCart } from "../apis/products/api";
import { useAuth } from "./auth";

interface Context {
  carts: Cart[];
  changeCart: () => void;
}

interface Props {
  children: ReactNode;
}

const contextValue = {
  carts: [],
  changeCart: () => {},
};

const DataContext = createContext<Context>(contextValue);

export const DataProvider = ({ children }: Readonly<Props>) => {
  const { token } = useAuth();
  const [carts, setCarts] = useState<Cart[]>([]);

  useEffect(() => {
    token !== "" && changeCart();
    console.log("changeCart");
  }, [setCarts, token]);

  const changeCart = async () => {
    try {
      const response = await getCart();
      setCarts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const dataContextValue = {
    carts,
    changeCart,
  };

  return <DataContext.Provider value={dataContextValue}>{children}</DataContext.Provider>;
};

export const useCart = () => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error("ERROR: useData must be used within DataContext");
  }
  return context;
};
