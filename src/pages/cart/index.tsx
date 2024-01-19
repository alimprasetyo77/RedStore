import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import { BsTrash3 } from "react-icons/bs";
import axios from "axios";

const Cart = () => {
  const [cart, setCart] = useState<[]>([]);

  function getCart() {
    axios
      .get("https://virtserver.swaggerhub.com/L3NONEONE_1/EcommerceAppProject/1.0.0/carts")
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    getCart();
  }, []);

  return (
    <Layout>
      <div className="mx-[100px] my-[50px]">
        <h1 className="mb-14">
          <span className="text-slate-300">Home /</span> Cart
        </h1>
        <table className="w-full table-cart mb-5">
          <thead className="h-14 shadow-sm rounded-sm">
            <tr>
              <th colSpan={2}>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>
                <h1>Toko Alim</h1>
              </th>
            </tr>
            <tr className="shadow-sm rounded-sm">
              <td className="w-28 p-3">
                <img src="https://source.unsplash.com/random?product" width={100} height={100} />
              </td>
              <td className="w-32">LCD Monitor</td>
              <td className="text-center">$500</td>
              <td className="text-center">
                <input type="number" className="w-[70px] p-3 border-2 border-slate-300 rounded-sm" min={1} />
              </td>
              <td className="text-center">$1000</td>
              <td className="text-center">
                <button>
                  <BsTrash3 />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="flex justify-between">
          <button className="py-3 px-8 h-14 border-2 border-slate-400 rounded-sm hover:bg-red-500 hover:text-white">Return To Home</button>
          <div className="border-2 border-black rounded-sm p-8 w-[470px]">
            <h1 className="text-md font-semibold">Cart Total</h1>
            <div className="flex justify-between">
              <p>Subtotal:</p>
              <p>$1000</p>
            </div>
            <hr className="border-slate-400 mb-14" />
            <div className="flex justify-between mb-6">
              <p>Total:</p>
              <p>$1000</p>
            </div>
            <button className="py-3 px-8 h-14 border-2 border-slate-400 rounded-sm bg-red-500 text-white mx-1/5">Process to Order</button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
