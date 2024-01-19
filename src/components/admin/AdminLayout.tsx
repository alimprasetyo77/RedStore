import { ReactNode } from "react";
import Sidebar from "./Sidebar";

interface Props {
  children: ReactNode;
}

const AdminLayout = (props: Props) => {
  const { children } = props;
  return (
    <div className="min-h-screen flex bg-slate-300">
      <Sidebar />
      <div className="flex-1 mr-7 mt-10 bg-white rounded-xl">{children}</div>
    </div>
  );
};

export default AdminLayout;
