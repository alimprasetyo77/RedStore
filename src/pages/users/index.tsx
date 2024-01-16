import { useSearchParams } from "react-router-dom";
import Layout from "../../components/Layout";
import { useEffect, useState } from "react";
import Card from "../../components/Card";
import { getProducts } from "../../utils/apis/products/api";
import { Products } from "../../utils/apis/products/types";

const Profile = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState<Products[]>();
  const tab = searchParams.get("tab");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const result = await getProducts("10");
      setProducts(result.products);
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
      <div className="py-10 bg-slate-100 min-h-screen">
        <div className="container mx-auto p-10 shadow-sm rounded-lg bg-white space-y-16">
          <div className="flex items-center gap-x-10">
            <img
              src="https://source.unsplash.com/300x300?person"
              alt="profile-user"
              className="rounded-full size-48"
            />
            <div className="flex flex-col gap-12">
              <div className="flex flex-col gap-y-1">
                <h1 className="text-3xl font-bold">John Doe</h1>
                <span className="text-sm font-medium text-zinc-500">@john</span>
              </div>
              <div className="flex items-center gap-x-3 ">
                <button className="px-6 py-2 text-xs font-semibold rounded-md border bg-zinc-900 text-white">
                  Edit Profile
                </button>
                <button className="px-6 py-2 text-xs font-semibold rounded-md border bg-red-500 text-white">
                  Remove Account
                </button>
                <button className="px-6 py-2 text-xs font-semibold rounded-md border bg-teal-500 text-white">
                  Add Product
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-y-5">
            <ul className="flex items-center gap-x-10 px-3">
              <li
                className={`cursor-pointer ${
                  tab === "orders" || tab === null ? "font-medium" : "font-normal"
                }`}
                onClick={() => handleTab("orders")}>
                My Orders
              </li>
              <li
                className={`cursor-pointer ${tab === "products" ? "font-medium" : "font-normal"}`}
                onClick={() => handleTab("products")}>
                My Products
              </li>
            </ul>
            {tab === "orders" || tab === null ? (
              <>
                {products?.slice(5, 10).map((product, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-x-8 bg-white rounded shadow p-3">
                    <img
                      src={product.thumbnail}
                      alt="photo-product"
                      className="border rounded size-28"
                    />
                    <div className="flex flex-grow flex-col gap-y-3 ">
                      <div className="flex  justify-between items-center  ">
                        <span className="text-sm font-semibold">{product.brand}</span>
                        <span className="text-sm text-red-500 uppercase tracking-wide">
                          canceled
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>{product.title}</span>
                        <span className="text-sm uppercase tracking-wide">Rp.200.000</span>
                      </div>
                      <span className="text-sm">x2</span>
                    </div>
                  </div>
                ))}
              </>
            ) : (
              <div className="grid grid-cols-5 gap-8 p-3">
                {products?.map((product, index) => (
                  <Card key={index} data={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
