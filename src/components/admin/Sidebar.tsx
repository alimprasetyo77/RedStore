import { Link, NavLink } from "react-router-dom";
import { Users, ShoppingCart, LogOut } from "lucide-react";

const Sidebar = () => {
  return (
    <div className="sticky top-0 mr-8 hidden h-[calc(100vh-40px)]  w-[220px] min-w-[220px] bg-[#1E81B3] dark:border xl:block rounded-br-xl">
      <div className="mt-5 flex flex-col p-3">
        <ul>
          <li>
            <NavLink
              to="/admin/users"
              className={({ isActive }) =>
                isActive
                  ? "flex w-full items-center gap-4 rounded-lg bg-white text-[#1E81B3] font-bold py-4 pl-3"
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
                  ? "flex w-full items-center gap-4 rounded-lg bg-white text-[#1E81B3] font-bold py-4 pl-3"
                  : "flex w-full items-center gap-4 rounded-lg bg-transparent text-white py-4 pl-3"
              }
            >
              <ShoppingCart />
              Orders
            </NavLink>
          </li>
          <li>
            <Link to="" className="flex w-full items center text-white gap-4 py-4 pl-3  ">
              <LogOut />
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
