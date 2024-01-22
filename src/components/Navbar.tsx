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
    <div className="w-full border-b shadow py-4 bg-red-500 text-white  ">
      <div className="container flex items-center mx-auto ">
        <Link to={"/"}>
          <h1 className="text-xl font-medium">Brand</h1>
        </Link>
        <ul className="flex items-center flex-grow justify-center gap-x-8">
          <Link to={"/"} className={`${location.pathname === "/" && "font-semibold"}`}>
            <li>Home</li>
          </Link>
          <li>Contact</li>
          <li>About</li>
          {!token ? (
            <Link to={"/register"}>
              <li className={`${location.pathname === "/register" && "font-semibold "} `}>
                Sign Up
              </li>
            </Link>
          ) : null}
        </ul>
        <div className="flex items-center bg-[#F5F5F5] px-3 py-1 h-8 overflow-hidden rounded-xl  text-sm border">
          <input
            className="px-5 py-1 outline-none border-none bg-transparent"
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
            <div className="relative cursor-pointer">
              <ShoppingCart />
              <span className="absolute -top-3 -right-3 bg-red-500 font-medium text-white size-4 flex items-center justify-center text-xs rounded-full p-2">
                6
              </span>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild className="cursor-pointer">
                <UserRound />
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
