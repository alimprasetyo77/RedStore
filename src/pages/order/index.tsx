import { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import { Checkbox } from "../../components/ui/checkbox";
import { Cart, IOrderType } from "../../utils/apis/products/types";
import { createOrder, getCart } from "../../utils/apis/products/api";
import { formattedAmount } from "../../utils/formattedAmount";
import AccorPayment from "../../components/AccorPayment";
import { useToast } from "../../components/ui/use-toast";
import { useNavigate } from "react-router";
import { useCart } from "../../utils/contexts/cartContext";

const OrderProducts = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const { changeCart } = useCart();
  const [cart, setCart] = useState<Cart[]>([]);
  const [term, setTerm] = useState<boolean>(false);
  const [data, setData] = useState<IOrderType>({
    address: "",
    cart_ids: [],
    bank: "",
    gross_amount: 0,
  });
  const fetchCart = async () => {
    try {
      const response = await getCart();
      setCart(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const totalPayment = cart.reduce((total, item) => {
    const itemTotal = (item.Products?.price ?? 0) * (item.quantity ?? 0);
    return total + itemTotal;
  }, 0);
  const handlePaymentMethodSelect = (selectedMethod: string) => {
    setData({
      ...data,
      cart_ids: cart.map((c) => c.id),
      gross_amount: totalPayment,
      bank: selectedMethod,
    });
  };

  const handleCheckout = async () => {
    try {
      const result = await createOrder(data);
      changeCart();
      toast({
        description: result.message,
      });
      navigate("/orderproducts/orderresult", {
        state: { data: result.data },
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <div className="py-10 bg-slate-100 min-h-screen">
        <div className="flex container mx-auto p-10 shadow-sm rounded-lg bg-white space-y-16">
          <div className="w-full flex-col space-y-10">
            <table className="min-w-full bg-white  border-gray-300 rounded-sm shadow-md text-left">
              <thead className="">
                <tr className="flex justify-between ">
                  <th className="py-4 pl-4 w-60 font-normal">Product</th>
                  <th className="py-4 mr-32 font-normal">Price</th>
                  <th className="py-4 mr-60 font-normal">Quantity</th>
                  <th className="py-4 mr-10 font-normal">Subtotal</th>
                </tr>
              </thead>
            </table>

            <table className="min-w-full bg-white  border-gray-300 rounded-sm shadow-md text-left">
              <tbody className="">
                {cart &&
                  cart.map((item, index) => (
                    <tr key={index}>
                      <th className="py-12 px-4 font-normal max-w-36">
                        <div className="flex items-center ">
                          <img
                            className="w-32 h-32 mr-2"
                            src={item.Products.photo_product}
                            alt="Product Image"
                          />
                          <span className="font-semibold pl-2">{item.Products.name}</span>
                        </div>
                      </th>
                      <th className="py-12 px-4 font-normal">
                        {formattedAmount(item.Products.price)}
                      </th>
                      <th className="py-12 px-4 font-normal">{item.quantity}</th>
                      <th className="py-12 px-4 text-right pr-12 font-semibold">
                        {formattedAmount(item.Products.price * item.quantity)}
                      </th>
                    </tr>
                  ))}
              </tbody>
            </table>
            <div className="text-lg">
              Total Pembayaran :
              <span className="font-semibold border-none outline-none bg-transparent pl-3">
                {formattedAmount(totalPayment)}
              </span>
            </div>
            <div>
              <textarea
                rows={2}
                className="py-2 w-80 outline-none border bg-transparent border-gray-300 rounded-sm shadow-md p-6"
                style={{ resize: "none" }}
                placeholder="Alamat Penerima...."
                onChange={(e) =>
                  setData({
                    ...data,
                    address: e.target.value,
                  })
                }
              />
            </div>
            <div className="flex justify-between mr-12 my-4 py-4 px-4 items-center">
              <p className="font-bold text-lg"></p>
              <AccorPayment onSelect={handlePaymentMethodSelect} />
            </div>
            <div className="mt-14 flex items-center space-x-2">
              <Checkbox onCheckedChange={(value: boolean) => setTerm(value)} />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ml-3">
                By ticking, you are confirming that you have already read all the details and input
                correct information
              </label>
            </div>

            <div className="flex justify-end mr-12 py-4 px-4 items-center">
              <button
                className={`text-white py-2 px-4 rounded-md ${
                  !term ? "bg-gray-200" : "bg-[#1E81B3]"
                }`}
                disabled={!term}
                onClick={handleCheckout}>
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default OrderProducts;
