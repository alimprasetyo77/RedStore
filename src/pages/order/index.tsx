import { useEffect, useState } from "react";
import DialogPayMethod from "../../components/DialogPayMethod";
import Layout from "../../components/Layout";
import { Checkbox } from "../../components/ui/checkbox";
import { Cart } from "../../utils/apis/products/types";
import { getCart } from "../../utils/apis/products/api";
import { formattedAmount } from "../../utils/formattedAmount";

const OrderProducts = () => {
  const [cart, setCart] = useState<Cart[]>([]);
  const [term, setTerm] = useState<boolean>(false);
  const [selectedPayment, setSelectedPayment] = useState("");

  const fetchCart = async () => {
    const response = await getCart();
    setCart(response);
    console.log(response);
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const totalPayment = cart.reduce((total, item) => {
    const itemTotal = (item.Products?.price ?? 0) * (item.quantity ?? 0);
    return total + itemTotal;
  }, 0);

  const handlePaymentMethodSelect = (selectedMethod: string) => {
    setSelectedPayment(selectedMethod);
  };
  return (
    <Layout>
      <div className="py-10 bg-slate-100 min-h-screen">
        <div className="flex container mx-auto p-10 shadow-sm rounded-lg bg-white space-y-16">
          {cart &&
            cart.map((item, index) => (
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
                {item.Products && (
                  <table className="min-w-full bg-white  border-gray-300 rounded-sm shadow-md text-left">
                    <tbody className="">
                      <tr>
                        <th className="py-12 px-4 font-normal max-w-36">
                          {" "}
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
                    </tbody>
                  </table>
                )}
                <div className="text-lg">
                  Total Pembayaran :{" "}
                  <span className="font-semibold">{formattedAmount(totalPayment)}</span>
                </div>
                <div>
                  <textarea
                    rows={2}
                    className="py-2 w-80 outline-none border bg-transparent border-gray-300 rounded-sm shadow-md p-6"
                    style={{ resize: "none" }}
                    placeholder="Alamat Penerima...."
                  />
                </div>
                <div className="flex justify-between mr-12 my-4 border py-4 px-4 items-center">
                  <p className="font-bold text-lg">
                    Payment Method : {selectedPayment.toUpperCase()}
                  </p>
                  <DialogPayMethod onSelect={handlePaymentMethodSelect} />
                </div>
                <div className="mt-14 flex items-center space-x-2">
                  <Checkbox onCheckedChange={(value: boolean) => setTerm(value)} />
                  <label
                    htmlFor="terms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ml-3"
                  >
                    By ticking, you are confirming that you have already read all the details and
                    input correct information
                  </label>
                </div>
                <div className="flex justify-end mr-12 py-4 px-4 items-center">
                  <button className="bg-[#1E81B3] text-white py-2 px-4" disabled={!term}>
                    Checkout
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </Layout>
  );
};

export default OrderProducts;
