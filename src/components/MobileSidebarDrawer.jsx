import React from "react";
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { Users, LogOut } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const MobileSidebarDrawer = ({ open, onClose }) => {
  const navigate = useNavigate();

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
          <Link to="/organisasi" onClick={onClose}>
            <ListItem button>
              <ListItemIcon>
                <Users color="#EC4899" />
              </ListItemIcon>
              <ListItemText primary="Organisasi" />
            </ListItem>
          </Link>
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
