import React, { useEffect, useState, useMemo } from "react";
import { Grid, Box } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link, useNavigate } from "react-router-dom";

import { showChangePasswordModal } from "./modalComponents/showChangePasswordModal";

import api from "../services/api";

import { User, Key, LogOut } from "lucide-react";

const Header = ({ title, onBurgerClick }) => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const [userData, setUserData] = useState(0);

  const role = localStorage.getItem("role");


  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          console.error("Token tidak ditemukan!");
          return;
        }

        const response = await api.get("/pegawai/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        });

        setUserData(response.data);
      } catch (error) {
        console.error("Gagal mengambil data pengguna:", error);
        // window.location.href = '/login';
      }
    };

    fetchUserData();
  }, []);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    setAnchorEl(null);
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <header className="bg-gray-800 bg-opacity-35 backdrop-blur-md shadow-lg border-b border-gray-700">
      <div className="bg-gray-700 mx-auto py-4 px-4 sm:px-8 lg:px-8">
        <Grid container spacing={4} sx={{ display: "flex" }}>
          <Grid item xs={6} sx={{ display: "flex", alignItems: "center" }}>
            <button
              onClick={onBurgerClick}
              className="mr-3 text-white md:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
            <h1 className="text mt-2 font-semibold text-gray-200 uppercase">
            {title.replace(/([A-Z])/g, ' $1').toUpperCase()}

            </h1>
          </Grid>
          <Grid
            item
            xs={6}
            sx={{ display: "flex", alignItems: "end", justifyContent: "end" }}
          >
            <Avatar
              alt="Profile"
              src={`/PNG/hasilRename/${
                userData.nip ? userData.nip : "Asset-2"
              }.png`}
              sx={{
                width: 36,
                height: 36,
                backgroundColor: "white",
                cursor: "pointer",
              }}
              onClick={handleClick}
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
            />
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              PaperProps={{
                sx: {
                  width: 300,
                },
              }}
            >
              <Link
                to={`/profile/${userData.nip ? userData.nip : 0}`}
                className="w-full block text-black no-underline"
              >
                <MenuItem
                  onClick={handleClose}
                  sx={{ gap: 1, display: "flex", alignItems: "center" }}
                >
                  <User size={18} style={{marginRight:16}} />
                  
                  Profile
                </MenuItem>
              </Link>

              <MenuItem
                onClick={showChangePasswordModal}
                sx={{ gap: 1, display: "flex", alignItems: "center" }}
              >
                <Key size={18} style={{marginRight:16}} />
                Ganti Password
              </MenuItem>

              <MenuItem
                onClick={handleLogout}
                sx={{ gap: 1, display: "flex", alignItems: "center" }}
              >
                <LogOut size={18} style={{marginRight:16}} />
                Logout
              </MenuItem>
            </Menu>
          </Grid>
        </Grid>
      </div>
    </header>
  );
};

export default Header;
