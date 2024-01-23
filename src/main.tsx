import React from "react";
import ReactDOM from "react-dom/client";
import App from "./routes/App.tsx";
import "./styles/index.css";
import { AuthProvider } from "./utils/contexts/auth.tsx";
import { Toaster } from "./components/ui/toaster.tsx";
import { DataProvider } from "./utils/contexts/cartContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <DataProvider>
        <App />
        <Toaster />
      </DataProvider>
    </AuthProvider>
  </React.StrictMode>
);
