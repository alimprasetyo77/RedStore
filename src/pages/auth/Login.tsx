import Layout from "../../components/Layout";

const Login = () => {
  return (
    <div className="flex min-h-screen ">
      <div
        className="w-4/6 bg-black/20 bg-blend-overlay bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage: `url(https://source.unsplash.com/1200x800?online-shop)`,
        }}
      ></div>
      <div className="w-4/12 p-16 ">
        <div className="flex flex-col items-start  gap-y-16 pt-20">
          <h3 className="text-4xl font-semibold ">Log In to Account</h3>
          <div className="flex flex-col w-full gap-y-8">
            <input type="text" placeholder="Email" className="border-b px-5 py-1 outline-none" />
            <input type="password" placeholder="Password" className="border-b px-5 py-1 outline-none" />
          </div>
          <button className="w-1/3 py-3 rounded-md bg-red-500 text-white ">Log In</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
