import { Search, ShoppingCart, UserRound } from "lucide-react";
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

const Navbar = () => {
  const { user, token, changeToken } = useAuth();
  const { toast } = useToast();

  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState<string>("");
  const navigate = useNavigate();

  const handleSearchTerm = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearchTerm(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      navigate(`/products/search/${searchTerm}`);
    }
  };
  const handleLogout = () => {
    changeToken();
    toast({
      description: "Logout successfully",
    });
  };

  return (
    <div className="w-full shadow py-4 bg-red-500 text-white sticky top-0">
      <div className="container flex items-center mx-auto ">
        <Link to={"/"}>
          <img src="/src/assets/logo-brand.png" alt="logo-brand" width={80} height={80} />
        </Link>
        <ul className="flex items-center flex-grow justify-center gap-x-8">
          <Link
            to={"/"}
            className={`${location.pathname === "/" && "font-semibold"} cursor-pointer`}
          >
            <li>Home</li>
          </Link>
          <li className="hover:font-semibold cursor-pointer">Contact</li>
          <li className="hover:font-semibold cursor-pointer">About</li>
          {!token ? (
            <Link to={"/register"}>
              <li className={`${location.pathname === "/register" && "font-semibold "} `}>
                Sign Up
              </li>
            </Link>
          ) : null}
        </ul>
        <div className="flex items-center bg-[#F5F5F5] px-3 py-1 h-8 overflow-hidden rounded-lg text-sm border">
          <input
            className="px-5 py-1 outline-none border-none bg-transparent text-zinc-800"
            placeholder="Search"
            onChange={(e) => handleSearchTerm(e)}
            onKeyDown={handleKeyDown}
          />
          <Link to={`/products/search?search=${searchTerm}`}>
            <Search className="text-red-500" />
          </Link>
        </div>
        {token ? (
          <div className="flex items-center gap-x-7 ml-6 ">
            <div className="relative cursor-pointer hover:bg-red-400/70 p-1 rounded-full duration-300">
              <ShoppingCart />
              <span className="absolute z-10 -top-2 -right-2 bg-white font-medium text-black size-4 flex items-center justify-center text-xs rounded-full p-2">
                6
              </span>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className={`cursor-pointer hover:bg-red-400/70 p-1 rounded-full duration-300`}>
                  <UserRound />
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="mt-2">
                <DropdownMenuLabel>Hi {user.user_name}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => navigate("/user")}>Profile</DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigate("/user/orders")}>
                  My Orders
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigate("/user/products")}>
                  My Products
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => handleLogout()}>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Navbar;
