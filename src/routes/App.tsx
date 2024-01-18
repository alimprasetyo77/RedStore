import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "../pages";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Profile from "../pages/users";
import Orders from "../pages/admin/Orders";
import Users from "../pages/admin/Users";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/admin/orders" element={<Orders />} />
        <Route path="/admin/users" element={<Users />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
