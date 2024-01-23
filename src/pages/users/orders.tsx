import { useEffect, useState } from "react";
import { cancelOrder, getOrders } from "../../utils/apis/orders/api";
import { OrderResponse } from "../../utils/apis/orders/types";
import { useAuth } from "../../utils/contexts/auth";
import Layout from "../../components/Layout";
import Sidebar from "../../components/Sidebar";
import { Loader2 } from "lucide-react";

const Orders = () => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [orders, setOrders] = useState<OrderResponse[]>();
  useEffect(() => {
    getDataOrders();
  }, []);

  const getDataOrders = async () => {
    try {
      setLoading(true);
      const result = await getOrders();
      setOrders(result.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  const handleCancelOrder = async (id: number) => {
    try {
      const result = await cancelOrder(id);
      alert(result.message);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Layout>
      <div className="flex bg-slate-100">
        <Sidebar />
        <div className="max-h-screen container mx-auto p-10 my-8 shadow-sm rounded-lg bg-white  ">
          <h1 className="text-2xl font-semibold mb-6">My Orders</h1>
          {loading ? (
            <Loader2 className="text-center w-full h-8 animate-spin" />
          ) : (
            <>
              {orders && orders.length > 0 ? (
                orders.map((order) => (
                  <div key={order.id} className=" space-y-8">
                    {order.data?.map((data, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-x-8 bg-white rounded shadow p-3 ">
                        <img
                          src={
                            "https://source.unsplash.com/100x100?products" ??
                            data.product.photo_product
                          }
                          alt="photo-product"
                          className="border rounded size-28"
                        />
                        <div className="flex flex-grow flex-col gap-y-5 ">
                          <div className="flex justify-between items-center  ">
                            <span className="text-sm font-semibol w-48 ">Toko {user.name}</span>
                            <span className="w-48 ">{data.product.name}</span>
                            <span className="text-sm w-48 ">x {data.quantity}</span>
                            <span className="text-sm uppercase tracking-wide w-48 ">
                              Rp.{data.product.price}
                            </span>
                            <span className="text-sm text-red-500 uppercase tracking-wide w-48 ">
                              {order.status}
                            </span>
                          </div>
                          <div className="flex  items-center">
                            {order.status !== "dibatalkan" ? (
                              <button
                                className="py-1 px-4 bg-rose-500 text-white font-medium text-xs rounded"
                                onClick={() => handleCancelOrder(data.product.id)}>
                                Cancel Order
                              </button>
                            ) : null}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ))
              ) : (
                <p className="text-center italic">Orders list not existing</p>
              )}
            </>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Orders;
