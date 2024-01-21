import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Profile from "../pages/users";
import Orders from "../pages/admin/Orders";
import Users from "../pages/admin/Users";
import Home from "../pages/home";
import ProductDetail from "../pages/products/productsDetail";
import OrderProducts from "../pages/order";
import ProductsSearch from "../pages/products/productsSearch";
import Cart from "../pages/cart";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/user" element={<Profile />} />
        <Route path="/admin/orders" element={<Orders />} />
        <Route path="/admin/users" element={<Users />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/orderproducts" element={<OrderProducts />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/products/search/:search" element={<ProductsSearch />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
