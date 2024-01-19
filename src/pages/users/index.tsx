import { useSearchParams } from "react-router-dom";
import Layout from "../../components/Layout";
import { useEffect, useState } from "react";
// import Card from "../../components/Card";
import Sidebar from "../../components/Sidebar";
import ProfileDetail from "./module/profile-detail";
import { getUser } from "../../utils/apis/users/api";
import { IUserType } from "../../utils/apis/users/types";
import { getOrders } from "../../utils/apis/orders/api";
import { OrderResponse } from "../../utils/apis/orders/types";
import Orders from "./module/orders";
import Products from "./module/products";

const Profile = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [user, setUser] = useState<IUserType>();
  const [orders, setOrders] = useState<OrderResponse[]>();
  const tab = searchParams.get("tab");
  useEffect(() => {
    getDataUser();
    getDataOrders();
  }, []);

  const getDataOrders = async () => {
    try {
      const result = await getOrders();
      setOrders([result]);
    } catch (error) {
      console.error(error);
    }
  };
  const getDataUser = async () => {
    try {
      const result = await getUser();
      setUser(result);
    } catch (error) {
      console.log(error);
    }
  };

  const handleTab = (tab: string) => {
    searchParams.set("tab", tab);
    setSearchParams(searchParams);
  };

  return (
    <Layout>
      <div className=" bg-slate-100 min-h-screen ">
        <div className="flex">
          <Sidebar onAction={handleTab} tab={tab} />
          <div className="container mx-auto p-10 my-8 shadow-sm rounded-lg bg-white space-y-16">
            {tab === "profile" || tab === null ? (
              <div className="flex flex-col items-center gap-y-4  flex-grow">
                <ProfileDetail data={user!} />
              </div>
            ) : tab === "orders" ? (
              <div className="max-h-screen">
                <h1 className="text-2xl font-semibold mb-6">My Orders</h1>
                {orders &&
                  orders.map((order) => (
                    <div key={order.id} className=" space-y-8">
                      {order.data?.map((data, index) => (
                        <Orders
                          key={index}
                          data={data}
                          user={user?.user_name as string}
                          status={order.status}
                        />
                      ))}
                    </div>
                  ))}
              </div>
            ) : tab === "products" ? (
              <Products />
            ) : null}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
