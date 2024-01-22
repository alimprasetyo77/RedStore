import DialogPayMethod from "../../components/DialogPayMethod";
import Layout from "../../components/Layout";
import { Checkbox } from "../../components/ui/checkbox";

const OrderProducts = () => {
  return (
    <Layout>
      <div className="py-10 bg-slate-100 min-h-screen">
        <div className="flex container mx-auto p-10 shadow-sm rounded-lg bg-white space-y-16">
          <div className="w-full flex-col space-y-10">
            <table className="min-w-full bg-white  border-gray-300 rounded-sm shadow-md text-left">
              <thead className="">
                <tr className="flex justify-between ">
                  <th className="py-4 pl-4 w-80 font-normal">Product</th>
                  <th className="py-4 font-normal">Price</th>
                  <th className="py-4 pr-40 font-normal">Quantity</th>
                  <th className="py-4 mr-10 font-normal">Subtotal</th>
                </tr>
              </thead>
            </table>
            <table className="min-w-full bg-white  border-gray-300 rounded-sm shadow-md text-left">
              <tbody className="">
                <tr>
                  <th className="py-12 px-4 font-normal max-w-36">
                    {" "}
                    <div className="flex items-center ">
                      <img
                        className="w-32 h-32 mr-2"
                        src={`https://picsum.photos/1000/1000?random=${Math.random()}`}
                        alt="Product Image"
                      />
                      <span className="font-semibold pl-2">Keyboard Anti Ghosting Kaya Dia</span>
                    </div>
                  </th>
                  <th className="py-12 px-4 font-normal">15000</th>
                  <th className="py-12 px-4 font-normal">2</th>
                  <th className="py-12 px-4 text-right pr-12 font-semibold">30000</th>
                </tr>
              </tbody>
            </table>
            <div className="text-lg">
              Total Pembayaran : <span className="font-semibold">60000</span>
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
              <p className="font-semibold text-md">Payment Method : </p>
              <DialogPayMethod />
            </div>
            <div className="mt-14 flex items-center space-x-2">
              <Checkbox />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ml-3"
              >
                By ticking, you are confirming that you have already read all the details and input
                correct information
              </label>
            </div>
            <div className="flex justify-end mr-12 py-4 px-4 items-center">
              <button className="bg-[#1E81B3] text-white py-2 px-4">Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default OrderProducts;
