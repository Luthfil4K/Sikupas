import React, { useEffect } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import {
  Menu,
  Users,
  LogOut,
  House,
  Network,
  CalendarDays,
  User,
} from "lucide-react";
import { useState } from "react";

// req user login infor
import { useUser } from "../context/UserContext";
import Role from "../types/roles";



const MobileSidebarDrawer = ({ open, onClose }) => {
  const { userData, loadingUser } = useUser();
  const navigate = useNavigate();

  const [nip, setNip] = useState(null);

  useEffect(() => {
    if (userData) {
      const cleanData = userData.nip.replace(/^"+|"+$/g, "");
      setNip(cleanData);
    }
  }, [userData]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    onClose();
    navigate("/login");
  };

  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      <div className="w-64 p-4 bg-gray-800 h-full text-white">
        <h2 className="text-xl font-bold mb-4">Menu</h2>
        <List>
          <Link to={`/profile/${nip}`} onClick={onClose}>
            <ListItem button>
              <ListItemIcon>
                <User color="#EC4899" />
              </ListItemIcon>
              <ListItemText primary="Aktivitas Saya" />
            </ListItem>
          </Link>
          <Link to="/organisasi" onClick={onClose}>
            <ListItem button>
              <ListItemIcon>
                <Network color="#FFAF76" />
              </ListItemIcon>
              <ListItemText primary="Organisasi" />
            </ListItem>
          </Link>
          {userData?.role.id === Role.PIMPINAN_PROVINSI ||
          userData?.role.id === Role.KEPALA_KABKO ||
          userData?.role.id ===Role.KEPALA_BAGIAN_UMUM_PROVINSI ? (
            <Link to="/rekapPegawai" onClick={onClose}>
              <ListItem button>
                <ListItemIcon>
                  <CalendarDays color="#6EE7B7" />
                </ListItemIcon>
                <ListItemText primary="Rekap Pegawai" />
              </ListItem>
            </Link>
          ) : (
            <Link to={`rekapIndividu/${nip}`} onClick={onClose}>
              <ListItem button>
                <ListItemIcon>
                  <CalendarDays color="#6EE7B7" />
                </ListItemIcon>
                <ListItemText primary="Rekap Individu" />
              </ListItem>
            </Link>
          )}
         
          <ListItem button onClick={handleLogout}>
            <ListItemIcon>
              <LogOut color="#3B82F6" />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItem>
        </List>
      </div>
    </Drawer>
  );
};

export default MobileSidebarDrawer;
