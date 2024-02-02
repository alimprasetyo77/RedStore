import { NavLink, useNavigate } from "react-router-dom";
import { Users, ShoppingCart, LogOut } from "lucide-react";
import { useAuth } from "../../utils/contexts/auth";
import { useToast } from "../ui/use-toast";
import image from "/src/assets/logo-brand.png";
const Sidebar = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const { changeToken } = useAuth();

  const handleLogout = () => {
    changeToken();
    toast({
      description: "Logout successfully",
    });
    navigate("/login");
  };
  return (
    <div className="sticky top-0 mr-8 h-[calc(100vh-40px)]  w-[220px] min-w-[220px] bg-red-500 dark:border rounded-br-xl">
      <div className="mt-5 flex flex-col p-3">
        <ul className="space-y-3">
          <li>
            <NavLink to="/" className={"flex w-full items-center gap-4  py-4 pl-3 "}>
              <img src={image} className="h-20" alt="logo-brand" height={80} />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/users"
              className={({ isActive }) =>
                isActive
                  ? "flex w-full items-center gap-4 rounded-lg bg-white text-red-500 font-bold py-4 pl-3"
                  : "flex w-full items-center gap-4 rounded-lg bg-transparent text-white py-4 pl-3"
              }
            >
              <Users />
              Users
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/orders"
              className={({ isActive }) =>
                isActive
                  ? "flex w-full items-center gap-4 rounded-lg bg-white text-red-500 font-bold py-4 pl-3"
                  : "flex w-full items-center gap-4 rounded-lg bg-transparent text-white py-4 pl-3"
              }
            >
              <ShoppingCart />
              Orders
            </NavLink>
          </li>

          <li>
            <button
              className="flex w-full items center text-white gap-4 py-4 pl-3 "
              onClick={() => handleLogout()}
            >
              <LogOut />
              Logout
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
