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
  console.log(carts);
  const { toast } = useToast();

  useEffect(() => {}, [carts]);

  const productInCart = async () => {
    const response = await getCart();
    setCarts(response);
    console.log(response);
    toast({
      title: "Berhasil ditambahkan",
      description: "Product berhasil ditambahkan dalam favorites",
    });
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
