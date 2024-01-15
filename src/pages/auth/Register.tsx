import { useEffect } from "react";
import Layout from "../../components/Layout";
import { Link, useSearchParams } from "react-router-dom";
const Register = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const tabParams = searchParams.get("tab");
  useEffect(() => {
    console.log(tabParams);
  }, []);
  const handleTabsNavigation = (value: string) => {
    searchParams.set("tab", value);
    setSearchParams(searchParams);
  };
  return (
    <Layout>
      <div className="flex min-h-screen ">
        <div
          className="w-4/6 bg-black/20 bg-blend-overlay bg-no-repeat bg-cover bg-center"
          style={{
            backgroundImage: `url(https://source.unsplash.com/1200x800?ecommerce)`,
          }}></div>
        <div className="w-4/12 p-10 ">
          <div className="flex flex-col items-center gap-y-6 pt-16">
            <div className="flex w-full bg-slate-100 rounded-xl shadow-sm p-2">
              <button
                className={`font-medium text-sm w-1/2 p-2 rounded-lg ${
                  tabParams === "buyer" || tabParams === null
                    ? "bg-zinc-600 text-white "
                    : "text-zinc-500"
                }`}
                onClick={() => handleTabsNavigation("buyer")}>
                Buyer
              </button>
              <button
                className={`font-medium text-sm w-1/2 p-2 rounded-lg ${
                  tabParams === "seller" ? "bg-zinc-600 text-white " : "text-zinc-500"
                }`}
                onClick={() => handleTabsNavigation("seller")}>
                Seller
              </button>
            </div>
            <h3 className="text-3xl font-bold">Create an account</h3>
            <div className="p-4 flex flex-col w-full gap-y-8">
              <input type="text" placeholder="Name" className="border-b px-5 py-1 outline-none" />
              <input
                type="text"
                placeholder="Username"
                className="border-b px-5 py-1 outline-none"
              />
              <input type="text" placeholder="Email" className="border-b px-5 py-1 outline-none" />
              <input
                type="text"
                placeholder="Password"
                className="border-b px-5 py-1 outline-none"
              />
            </div>
            <button className="w-full py-3 rounded-md bg-red-500 text-white ">
              Create Account
            </button>
            <p className="text-sm self-start">
              Already have account?{" "}
              <Link to={"/login"} className="underline">
                Log in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Register;
