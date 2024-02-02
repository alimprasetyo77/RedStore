import { useEffect, useState } from "react";
import { cancelOrder, getOrders } from "../../utils/apis/orders/api";
import Layout from "../../components/Layout";
import Sidebar from "../../components/Sidebar";
import { Loader2 } from "lucide-react";
import Alert from "../../components/Alert";
import { IOrderUser } from "../../utils/apis/orders/types";
import { formattedAmount } from "../../utils/formattedAmount";
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
      console.log(result.data);
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
      <div className="min-h-screen flex bg-slate-100 gap-x-3 w-full pr-0 lg:pr-3">
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
                        className="flex items-center gap-x-8 bg-white rounded shadow p-3 w-auto"
                      >
                        <img
                          src={
                            item.product.photo_product ||
                            "https://via.placeholder.com/100x100?text=No+Image"
                          }
                          alt="photo-product"
                          className=" rounded size-48"
                        />
                        <div className="flex flex-grow flex-col gap-y-6 ">
                          <div className="flex justify-between flex-col lg:flex-row items-center  ">
                            <span className="text-sm font-semibold w-48 ">
                              Toko {item.product.toko.name}
                            </span>
                            <span className="w-48 ">{item.product.name}</span>
                            <span className="text-sm w-48 ">x {item.quantity}</span>
                            <span className="text-sm uppercase tracking-wide w-48 ">
                              {formattedAmount(item.product.price)}
                              <p
                                className={`text-sm text-center uppercase tracking-wide w-48 block xl:hidden ${
                                  item.status === "settlement"
                                    ? "text-green-500"
                                    : item.status === "cancel"
                                    ? "text-red-500"
                                    : item.status === "pending"
                                    ? "text-orange-500"
                                    : "text-gray-500"
                                }`}
                              >
                                {item.status === "expire"
                                  ? "expired"
                                  : item.status === "cancel"
                                  ? "cancelled"
                                  : item.status}
                              </p>
                            </span>
                            <span
                              className={`text-sm text-center uppercase tracking-wide w-48 hidden xl:block ${
                                item.status === "settlement"
                                  ? "text-green-500"
                                  : item.status === "cancel"
                                  ? "text-red-500"
                                  : item.status === "pending"
                                  ? "text-yellow-500"
                                  : "text-gray-500"
                              }`}
                            >
                              {item.status === "expire"
                                ? "expired"
                                : item.status === "cancel"
                                ? "cancelled"
                                : item.status}
                            </span>
                          </div>

                          <div className="flex flex-col lg:flex-row justify-start items-center gap-4 ">
                            <span className={" text-xs max-w-md hidden lg:block"}>
                              order-id : {data.order_id}
                            </span>
                            <div className="flex gap-x-3 ">
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
                          </div>

                          <div className="flex gap-x-6 items-center justify-center lg:justify-start   ">
                            {item.status === "pending" ? (
                              <Alert
                                title="Are you sure?"
                                description={`This action cannot be undone. This will permanently cancel the order.`}
                                onAction={() => handleCancelOrder(data.order_id)}
                              >
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
