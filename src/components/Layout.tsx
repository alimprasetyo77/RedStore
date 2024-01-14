import { ReactNode } from "react";
import Navbar from "./Navbar";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen overflow-hidden">
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
