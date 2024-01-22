import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import { BsTrash3 } from "react-icons/bs";
import axios from "axios";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cart, setCart] = useState<[]>([]);
  const [total, setTotal] = useState<number>(0);

  function getCart() {
    axios
      .get("https://virtserver.swaggerhub.com/L3NONEONE_1/EcommerceAppProject/1.0.0/carts")
      .then((res) => {
        console.log(res);
        setCart(res.data);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    getCart();
  }, []);

  const handleDecrement = (cart_id: number) => {
    setCart((cart) => cart.map((item) => (cart_id === item.product.id ? { ...item, quantity: item.quantity - (item.quantity > 1 ? 1 : 0) } : item)));
    updateCartQuantity(cart_id);
  };

  const handleIncrement = (cart_id: number) => {
    setCart((cart) => cart.map((item) => (cart_id === item.product.id ? { ...item, quantity: item.quantity + (item.quantity < 100 ? 1 : 0) } : item)));
    updateCartQuantity(cart_id);
  };

  const totalHarga: number[] = cart.map((item) => {
    return item.product.price * item.quantity;
  });
  let sumTotal: number = totalHarga.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

  function updateCartQuantity(id: number) {
    axios
      .put(`https://virtserver.swaggerhub.com/L3NONEONE_1/EcommerceAppProject/1.0.0/carts/${id}`, {})
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  }

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
          {cart &&
            cart.map((items: any, index: number) => {
              return (
                <tbody key={index}>
                  <tr className="shadow-sm rounded-sm">
                    <td className="w-28 p-3">
                      <img src={`${items.product.photo_product}`} width={100} height={100} />
                    </td>
                    <td className="w-32">{items.product.name}</td>
                    <td className="text-center">Rp. {items.product.price}</td>
                    <td className="text-center">
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-red-500 text-white cursor-pointer flex justify-center items-center" onClick={() => handleDecrement(items.product.id)}>
                          <FaMinus />
                        </div>
                        <div className="w-8 h-8 flex justify-center items-center">{items.quantity}</div>
                        <div className="w-8 h-8 rounded-full bg-red-500 text-white cursor-pointer flex justify-center items-center" onClick={() => handleIncrement(items.product.id)}>
                          <FaPlus />
                        </div>
                      </div>
                    </td>
                    <td className="text-center">Rp. {items.product.price * items.quantity}</td>
                    <td className="text-center">
                      <button>
                        <BsTrash3 />
                      </button>
                    </td>
                  </tr>
                </tbody>
              );
            })}
        </table>
        <div className="flex justify-between">
          <Link to={"/"}>
            <button className="py-3 px-8 h-14 border-2 border-slate-400 rounded-sm hover:bg-red-500 hover:text-white">Return To Home</button>
          </Link>
          <div className="border-2 border-black rounded-sm p-8 w-[470px]">
            <h1 className="text-md font-semibold">Cart Total</h1>
            <hr className="border-slate-400 mb-14" />
            <div className="flex justify-between mb-6">
              <p>Total:</p>
              <p>Rp. {sumTotal}</p>
            </div>
            <button className="py-3 px-8 h-14 border-2 border-slate-400 rounded-sm bg-red-500 text-white mx-1/5">Process to Order</button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;