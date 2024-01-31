import { ReactNode } from "react";
import Navbar from "./Navbar";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full min-h-screen">
      <Navbar />
      <div className="overflow-hidden">{children}</div>
    </div>
  );
};

export default Layout;
