import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../utils/contexts/auth";
import { ReactNode } from "react";

const ProtectedRoute = ({ children }: { children?: ReactNode }) => {
  const { token } = useAuth();
  const { pathname } = useLocation();

  const authProtected = ["/login", "/register"];
  const protectedByToken = [
    "/user",
    "/user/orders",
    "/user/products",
    "/admin/orders",
    "/admin/users",
  ];
  // const adminProtected = ["/admin/orders", "/admin/users"];

  if (authProtected.includes(pathname)) {
    if (token) return <Navigate to={"/"} />;
  }

  if (protectedByToken.includes(pathname)) {
    if (!token) return <Navigate to="/login" />;

    // if (adminProtected.includes(pathname)) {
    //   if (role === "user") return <Navigate to="/" />;
    // }
  }

  return children ? children : <Outlet />;
};

export default ProtectedRoute;
