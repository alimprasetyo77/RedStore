import {
  ListOrdered,
  MenuIcon,
  Search,
  ShoppingCart,
  User,
  UserRound,
  X,
} from "lucide-react";
import { ChangeEvent, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../utils/contexts/auth";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";
import { useToast } from "./ui/use-toast";
import { useCart } from "../utils/contexts/cartContext";
import brand from "/src/assets/logo-brand.png";
import { MdProductionQuantityLimits } from "react-icons/md";
const Navbar = () => {
  const { carts } = useCart();
  const { toast } = useToast();
  const navigate = useNavigate();
  const location = useLocation();
  const { user, token, changeToken } = useAuth();
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [navMob, setNavMob] = useState(false);

  const handleSearchTerm = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearchTerm(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && searchTerm.trim() !== "") {
      navigate(`/products/search/${searchTerm}`);
    }
  };
  const handleLogout = () => {
    setNavMob(false);
    changeToken();
    toast({
      description: "Logout successfully",
    });
  };

  return (
    <div className="w-full shadow py-4 bg-red-500 text-white sticky top-0 z-50">
      <div className="container flex items-center justify-between mx-auto gap-x-10 lg:gap-x-0">
        <Link to={"/"}>
          <img src={brand} alt="logo-brand" width={80} height={80} />
        </Link>
        <ul className="hidden lg:flex items-center flex-grow justify-center gap-x-8">
          <Link
            to={"/"}
            className={`${
              location.pathname === "/" && "font-semibold"
            } cursor-pointer`}
          >
            <li>Home</li>
          </Link>
          {user.role === "admin" ? (
            <>
              <li className="hover:font-semibold cursor-pointer">Dasboard</li>
              <li
                className="hover:font-semibold cursor-pointer"
                onClick={() => handleLogout()}
              >
                Logout
              </li>
            </>
          ) : (
            <>
              <li className="hover:font-semibold cursor-pointer">Contact</li>
              <li className="hover:font-semibold cursor-pointer">About</li>
            </>
          )}
          {!token ? (
            <Link to={"/login"}>
              <li className="hover:font-semibold">Sign in</li>
            </Link>
          ) : null}
        </ul>
        <div className="flex-grow lg:flex-grow-0 flex items-center justify-between bg-[#F5F5F5] px-3 py-1 h-8 overflow-hidden rounded-lg text-sm border">
          <input
            className="px-5 py-1 outline-none border-none bg-transparent text-zinc-800 w-full"
            placeholder="Search"
            onChange={(e) => handleSearchTerm(e)}
            onKeyDown={handleKeyDown}
          />
          <Link
            to={
              searchTerm.trim() !== ""
                ? `/products/search?search=${searchTerm}`
                : "#"
            }
          >
            <Search className="text-red-500" />
          </Link>
        </div>

        <Link
          to={"/cart"}
          className="relative cursor-pointer hover:bg-red-400/70 p-1 rounded-full duration-300 lg:hidden"
        >
          <ShoppingCart />
          <span className="absolute z-10 -top-2 -right-2 bg-white font-medium text-black size-4 flex items-center justify-center text-xs rounded-full p-2">
            {carts ? carts.length : 0}
          </span>
        </Link>

        <MenuIcon
          className="lg:hidden size-8 "
          onClick={() => setNavMob(!navMob)}
        />

        <div
          className={`lg:hidden flex flex-col items-center gap-5 fixed bg-white inset-x-0 bottom-0 top-6 ${
            navMob ? "translate-y-0" : "translate-y-full"
          } rounded-xl transition-all duration-500 p-4 z-20`}
        >
          <div className="flex items-center w-full gap-x-6 text-black">
            <X onClick={() => setNavMob(false)} />
            <span className="text-xl font-medium">Menu</span>
          </div>
          {token && user.role !== "admin" ? (
            <>
              <Link
                className="text-black font-medium hover:bg-slate-100 w-full px-4 py-2 flex items-center gap-x-3 mt-2"
                to={"/user"}
              >
                <User />
                My Profile
              </Link>
              <Link
                className="text-black font-medium hover:bg-slate-100 w-full px-4 py-2 flex items-center gap-x-3"
                to={"/user/orders"}
              >
                <ListOrdered />
                My Orders
              </Link>
              <Link
                className="text-black font-medium hover:bg-slate-100 w-full px-4 py-2 flex items-center gap-x-3"
                to={"/user/products"}
              >
                <MdProductionQuantityLimits className="size-6" />
                My Products
              </Link>
              <hr className="bg-black h-px w-full" />
              <Link
                to={"/"}
                className="text-black font-medium hover:bg-slate-100 w-full px-4 py-2"
              >
                Home
              </Link>
              <Link
                to={"/"}
                className="text-black font-medium hover:bg-slate-100 w-full px-4 py-2"
              >
                About
              </Link>
              <Link
                to={"/"}
                className="text-black font-medium hover:bg-slate-100 w-full px-4 py-2"
              >
                Contact
              </Link>

              <span
                className="text-black font-medium hover:bg-slate-100 w-full px-4 py-2 "
                onClick={handleLogout}
              >
                Logout
              </span>
            </>
          ) : (
            <>
              <Link
                to={"/login"}
                className="text-black font-medium hover:bg-slate-100 w-full px-4 py-2"
              >
                Login
              </Link>
              <Link
                to={"/register"}
                className="text-black font-medium hover:bg-slate-100 w-full px-4 py-2"
              >
                Register
              </Link>
            </>
          )}
        </div>

        {token && user.role !== "admin" ? (
          <div className="hidden lg:flex items-center gap-x-7 ml-6 ">
            <Link
              to={"/cart"}
              className="relative cursor-pointer hover:bg-red-400/70 p-1 rounded-full duration-300"
            >
              <ShoppingCart />
              <span className="absolute z-10 -top-2 -right-2 bg-white font-medium text-black size-4 flex items-center justify-center text-xs rounded-full p-2">
                {carts ? carts.length : 0}
              </span>
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div
                  className={`cursor-pointer hover:bg-red-400/70 p-1 rounded-full duration-300`}
                >
                  <UserRound />
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="mt-2">
                <DropdownMenuLabel>Hi {user.user_name}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => navigate("/user")}>
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigate("/user/orders")}>
                  My Orders
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigate("/user/products")}>
                  My Products
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => handleLogout()}>
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Navbar;
