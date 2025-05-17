import { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import ProfilePages from "./pages/ProfilePages";
import OrganisasiPages from "./pages/OrganisasiPages";
import ApiTest from "./pages/ApiTest";
import LoginPage from "./pages/LoginPage";
import PrivateRoute from "./components/PrivateRoute";

import Sidebar from "./components/Sidebar";
import MobileSidebarDrawer from "./components/MobileSidebarDrawer";
import Header from "./components/Header";

import { UserProvider } from "./context/UserContext";
import "./App.css";

import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./theme";
import ForbiddenPage from "./pages/ForbiddenPage";

function App() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleBurgerClick = () => {
    setMobileOpen(true);
  };

  const handleDrawerClose = () => {
    setMobileOpen(false);
  };

  const title =
    location.pathname === "/" ? "dashboard" : location.pathname.split("/")[1];

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div>
        {location.pathname === "/login" ? (
          <Routes>
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        ) : (
          <UserProvider>
            <div className="flex h-screen bg-gray-800 text-gray-100 overflow-hidden">
              <div className="fixed inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-80"></div>
                <div className="absolute inset-0 backdrop-blur-sm"></div>
              </div>

              {/* Sidebar Desktop */}
              <div className="hidden md:block">
                <Sidebar />
              </div>

              {/* Sidebar Mobile Drawer */}
              <MobileSidebarDrawer
                open={mobileOpen}
                onClose={handleDrawerClose}
              />

              {/* Konten utama */}
              <div className="flex-1 overflow-auto relative z-10 bg-gray-800">
                <Header title={title} onBurgerClick={handleBurgerClick} />

                <Routes>
                  <Route
                    path="/"
                    element={
                      <PrivateRoute>
                        <OrganisasiPages />
                      </PrivateRoute>
                    }
                  />
                 
                  <Route
                    path="/profile/:id"
                    element={
                      <PrivateRoute>
                        <ProfilePages />
                      </PrivateRoute>
                    }
                  />
                  <Route
                    path="/organisasi"
                    element={
                      <PrivateRoute>
                        <OrganisasiPages />
                      </PrivateRoute>
                    }
                  />
                  <Route
                    path="/api"
                    element={
                      <PrivateRoute>
                        <ApiTest />
                      </PrivateRoute>
                    }
                  />
                  <Route
                    path="/forbidden"
                    element={
                      <PrivateRoute>
                        <ForbiddenPage />
                      </PrivateRoute>
                    }
                  />
                </Routes>
              </div>
            </div>
          </UserProvider>
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;
