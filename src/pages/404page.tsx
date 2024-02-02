import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div
      className="min-h-screen bg-blend-hard-light bg-black flex justify-items-center bg-center bg-cover"
      style={{
        backgroundImage: `url(//lezada-demo.myshopify.com/cdn/shop/files/bg-coming-soon.png?v=1613765928)`,
      }}
    >
      <div className="max-w-7xl w-full mx-auto ">
        <div className="w-1/2 gap-y-10 flex flex-col items-center justify-center h-full">
          <h1 className="text-zinc-900 text-6xl">Ooops!</h1>
          <h1 className="text-zinc-900 text-6xl">Page not found!</h1>
          <p className="uppercase text-zinc-800 font-medium tracking-widest mt-5">
            please go to back to
            <span
              className="underline underline-offset-4 font-normal ml-2 cursor-pointer tracking-wide"
              onClick={() => navigate("/")}
            >
              go to home page
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
