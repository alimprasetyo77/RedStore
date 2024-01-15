import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full border-b shadow-md py-4">
      <div className="container flex items-center mx-auto ">
        <Link to={"/"}>
          <h1 className="text-xl font-medium">Brand</h1>
        </Link>
        <ul className="flex items-center flex-grow justify-center gap-x-8">
          <Link to={"/"}>
            <li>Home</li>
          </Link>
          <li>Contact</li>
          <li>About</li>
          <Link to={"/register"}>
            <li>Sign Up</li>
          </Link>
        </ul>
        <div className="flex items-center bg-[#F5F5F5] px-3 py-1 h-8 overflow-hidden rounded-xl  text-sm border">
          <input
            className="px-5 py-1 outline-none border-none bg-transparent"
            placeholder="Search"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-search ">
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
