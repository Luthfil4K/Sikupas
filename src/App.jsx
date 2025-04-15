import { useState } from "react";

import { Route, Routes, useLocation } from "react-router-dom";
import DashboardPages from "./pages/DashboardPages";
import ProfilePages from "./pages/ProfilePages";
import OrganisasiPages from "./pages/OrganisasiPages";
import LoginPage from "./pages/LoginPage";

import Sidebar from "./components/Sidebar";
import reactLogo from "./assets/react.svg";
import Header from "./components/Header";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const location = useLocation();

  return (
    <div>
      {location.pathname === "/login" ? (
        // Halaman Login tanpa Sidebar dan Header
        <div className="">
         
          <Routes>
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </div>
      ) : (
        // Layout dengan Sidebar dan Header untuk halaman selain Login
        <div className="flex h-screen bg-gray-800 text-gray-100 overflow-hidden">
          <div className="fixed inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-80"></div>
            <div className="absolute inset-0 backdrop-blur-sm"></div>
          </div>

          {/* Sidebar */}
          <Sidebar />

          {/* Konten utama dengan Header */}
          <div className="flex-1 overflow-auto relative z-10 bg-gray-800">
            <Header
              title={
                location.pathname === "/"
                  ? "dasboard"
                  : location.pathname.split("/")[1]
              }
            />

            {/* Routes untuk halaman lainnya */}
            <Routes>
              <Route path="/" element={<OrganisasiPages />} />
              <Route path="/dashboard" element={<DashboardPages />} />
              <Route path="/profile/:id" element={<ProfilePages />} />
              <Route path="/organisasi" element={<OrganisasiPages />} />
            </Routes>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
