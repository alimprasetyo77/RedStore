import { useEffect, useState } from "react";
import { cancelOrder, getOrders } from "../../utils/apis/orders/api";
import Layout from "../../components/Layout";
import Sidebar from "../../components/Sidebar";
import { Loader2 } from "lucide-react";
import Alert from "../../components/Alert";
import { IOrderUser } from "../../utils/apis/orders/types";
import "../../styles/index.css";
const Orders = () => {
  const [loading, setLoading] = useState(false);
  const [orders, setOrders] = useState<IOrderUser[]>();
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
  const handleCancelOrder = async (id: string) => {
    try {
      const result = await cancelOrder(id);
      getDataOrders();
      alert(result.message);
    } catch (error) {
      console.log(error);
    }
  };
  const iconBank = [
    "https://res.cloudinary.com/dypeyso0m/image/upload/v1703677027/bca_u8s8de.png",
    "https://res.cloudinary.com/dypeyso0m/image/upload/v1703677142/bri_tjmr7e.png",
    "https://res.cloudinary.com/dypeyso0m/image/upload/v1703677155/647bf1a6c87148864bbb4cd44130da36_bl9g38.png",
  ];
  return (
    <Layout>
      <div className="flex bg-slate-100">
        <Sidebar />
        <div className="max-h-screen container mx-auto p-10 my-8 shadow-sm rounded-lg bg-white ">
          <h1 className="text-2xl font-semibold mb-6">My Orders</h1>
          {loading ? (
            <Loader2 className="text-center w-full h-8 animate-spin" />
          ) : (
            <div className="max-h-[90%] space-y-6 overflow-y-scroll orders px-3">
              {orders && orders.length > 0 ? (
                orders.map((data, index) => (
                  <div key={index} className="space-y-8">
                    {data.order.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-x-8 bg-white rounded shadow p-3 ">
                        <img
                          src={
                            item.product.photo_product ||
                            "https://via.placeholder.com/100x100?text=No+Image"
                          }
                          alt="photo-product"
                          className=" rounded size-28"
                        />
                        <div className="flex flex-grow flex-col gap-y-4 ">
                          <div className="flex justify-between items-center  ">
                            <span className="text-sm font-semibol w-48 ">
                              Toko {item.product.toko.name}
                            </span>
                            <span className="w-48 ">{item.product.name}</span>
                            <span className="text-sm w-48 ">x {item.quantity}</span>
                            <span className="text-sm uppercase tracking-wide w-48 ">
                              Rp.{item.product.price}
                            </span>
                            <span className="text-sm text-red-500 uppercase tracking-wide w-48 ">
                              {item.status}
                            </span>
                          </div>

                          <div className="flex gap-x-4 items-center">
                            <span className={" text-sm"}>order-id : {data.order_id}</span>
                            <img
                              src={
                                item.bank === "bca"
                                  ? iconBank[0]
                                  : item.bank === "bri"
                                  ? iconBank[1]
                                  : iconBank[2]
                              }
                              alt="icon-bank"
                              width={50}
                              height={50}
                            />
                            :<span>{item.va_number}</span>
                          </div>
                          <div className="flex gap-x-6 items-center  ">
                            {item.status !== "cancelled" ? (
                              <Alert
                                title="Are you sure?"
                                description={`This action cannot be undone. This will permanently delete the order.`}
                                onAction={() => handleCancelOrder(`${data.order_id}`)}>
                                <button className="py-1 px-4 bg-rose-500 text-white font-medium text-xs rounded">
                                  Cancel Order
                                </button>
                              </Alert>
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
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Orders;
