import { ReactNode } from "react";
import Sidebar from "./Sidebar";
import BottomBar from "./BottomBar";

interface Props {
  children: ReactNode;
}

const AdminLayout = (props: Props) => {
  const { children } = props;
  return (
    <div className="min-h-screen flex md:flex-row flex-col bg-slate-300">
      <Sidebar />
      <div className="md:flex-1 mr-7 mt-10 md:flex-col grow bg-white rounded-xl">{children}</div>
      <BottomBar />
    </div>
  );
};

export default AdminLayout;
