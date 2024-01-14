import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "../pages";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
