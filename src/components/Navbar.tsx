import { Search, ShoppingCart, UserRound } from "lucide-react";
import { KeyboardEvent, useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const Navbar = () => {
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState<string>("");
  const navigate = useNavigate();

  const handleSearchTerm = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      navigate(`/products/search?search=${searchTerm}`);
    }
  };
  return (
    <div className="w-full border-b shadow-md py-4">
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
          <Link to={"/register"}>
            <li className={`${location.pathname === "/register" && "font-semibold "} `}>Sign Up</li>
          </Link>
        </ul>
        <div className="flex items-center bg-[#F5F5F5] px-3 py-1 h-8 overflow-hidden rounded-xl  text-sm border">
          <input
            className="px-5 py-1 outline-none border-none bg-transparent"
            placeholder="Search"
            onChange={(e) => handleSearchTerm(e)}
            onKeyDown={handleKeyDown}
          />
          <Link to={`/products/search?search=${searchTerm}`}>
            <Search />
          </Link>
        </div>
        <div className="flex items-center gap-x-7 ml-6 ">
          <div className="relative cursor-pointer">
            <ShoppingCart />
            <span className="absolute -top-3 -right-3 bg-red-500 font-medium text-white size-4 flex items-center justify-center text-xs rounded-full p-2">
              6
            </span>
          </div>
          <Link to={"/profile"}>
            <UserRound />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
