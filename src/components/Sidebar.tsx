import { useLocation, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;
  return (
    <div className="w-[280px] bg-white border-r min-h-screen ">
      <ul className="space-y-3 p-6">
        <li
          className={`p-3 hover:bg-zinc-50 hover:font-semibold rounded-md cursor-pointer ${
            pathname === "/user" || pathname === null ? "font-semibold bg-zinc-100" : null
          }`}
          onClick={() => navigate("/user")}>
          Profile
        </li>
        <li
          className={`p-3 hover:bg-zinc-50 hover:font-semibold rounded-md cursor-pointer ${
            pathname === "/user/orders" ? "font-semibold bg-zinc-100" : null
          }`}
          onClick={() => navigate("/user/orders")}>
          Orders
        </li>
        <li
          className={`p-3 hover:bg-zinc-50 hover:font-semibold rounded-md cursor-pointer ${
            pathname === "/user/products" ? "font-semibold bg-zinc-100" : null
          }`}
          onClick={() => navigate("/user/products")}>
          Products
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
