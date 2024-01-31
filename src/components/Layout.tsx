import { ReactNode } from "react";
import Navbar from "./Navbar";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full min-h-screen">
      <Navbar />
<<<<<<< HEAD
      <div className="flex overflow-hidden">{children}</div>
=======
      <div className="overflow-hidden">{children}</div>
>>>>>>> a9fbb1d87b4849aef3064936b00682468d9a85b6
    </div>
  );
};

export default Layout;
