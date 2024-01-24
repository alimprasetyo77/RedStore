import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Cart } from "../apis/products/types";
import { useToast } from "../../components/ui/use-toast";
import { getCart } from "../apis/products/api";

interface Context {
  carts: Cart[];
  changeCart: (cart: Cart) => void;
  productInCart: () => void;
}

interface Props {
  children: ReactNode;
}

const contextValue = {
  carts: [],
  changeCart: () => {},
  productInCart: () => {},
};

const DataContext = createContext<Context>(contextValue);

export const DataProvider = ({ children }: Readonly<Props>) => {
  const [carts, setCarts] = useState<Cart[]>([]);
  const { toast } = useToast();

  const productInCart = async () => {
    try {
      const response = await getCart();
      setCarts(response.data);
      toast({
        title: "Berhasil ditambahkan",
        description: "Product berhasil ditambahkan dalam favorites",
      });
    } catch (error) {
      console.log(error);
    }
  };

  const changeCart = useCallback(
    (cart: Cart) => {
      setCarts((prevCarts) => [...prevCarts, cart]);
      toast({
        title: "Berhasil ditambahkan",
        description: "Product berhasil ditambahkan dalam favorites",
      });
    },
    [carts]
  );

  const dataContextValue = useMemo(
    () => ({
      carts,
      changeCart,
      productInCart,
    }),
    [carts]
  );

  return <DataContext.Provider value={dataContextValue}>{children}</DataContext.Provider>;
};

export const useCart = () => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error("ERROR: useData must be used within DataContext");
  }
  return context;
};
