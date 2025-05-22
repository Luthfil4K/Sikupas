import React, { useState } from "react";
import { Menu, Users, LogOut, House,Network ,CalendarDays  ,User} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

// req user login infor
import { useUser } from "../context/UserContext";

// utils/types
import Role from "../types/roles"; // sesuaikan pathnya




const Sidebar = () => {
  const { userData, loadingUser } = useUser();
  const role = localStorage.getItem('role');
  const nip = localStorage.getItem('nip'); // pastikan ini disimpan saat login
  const cleanedNip = nip.replace(/^"+|"+$/g, '');
  const SIDEBAR_ITEMS = [
    ...(userData?.role.id === Role.ANGGOTA_TIM_PROVINSI ||
      userData?.role.id === Role.ANGGOTA_TIM_KABKO
      ? [
          {
            name: 'Profil Saya',
            icon: User,
            color: '#EC4899',
            path: `/profile/${cleanedNip}`,
          },
          {
            name: 'Rekap Individu',
            icon: CalendarDays ,
            color: '#6EE7B7',
            path: `/rekapIndividu/${cleanedNip}`,
          },
        ]
        
      : 
      
        [
          {
            name: 'Profil Saya',
            icon: User,
            color: '#EC4899',
            path: `/profile/${cleanedNip}`,
          },
          {
            name: 'Organisasi',
            icon: Network,
            color: '#FFAF76',
            path: '/organisasi',
          },
          {
            name: 'Rekap Pegawai',
            icon: CalendarDays ,
            color: '#6EE7B7',
            path: '/rekapPegawai',
          },
        ]),
    {
      name: 'Logout',
      icon: LogOut,
      color: '#3B82F6',
      action: 'logout',
    },
  ];
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  // Fungsi logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    // Kalau pakai cookie, hapus juga
    // document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    navigate("/login");
  };

  return (
    <motion.div
    className={`relative z-10 transition-all duration-300 ease-in-out flex-shrink-0 ${isOpen ? "w-64" : "w-20"} h-screen`}
    animate={{ width: isOpen ? 256 : 100 }}
  >
      <div className="h-full bg-gray-700 bg-opacity-50 backdrop-blur-md flex p-4 flex-col border-r border-gray-600">
        {/* Tombol burger */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-full hover:bg-gray-600 transition-colors max-w-fit"
        >
          <Menu size={24} />
        </motion.button>

        {/* Menu */}
        <nav className="mt-8 flex-grow">
          {SIDEBAR_ITEMS.map((item) => {
            const Icon = item.icon;
            const handleClick = (e) => {
              if (item.action === "logout") {
                e.preventDefault();
                handleLogout();
              }
            };

            return (
              <Link to={item.path || "#"} key={item.name} onClick={handleClick}>
                <motion.div
                  className="mb-2 flex items-center p-4 text-sm font-medium rounded-lg hover:bg-gray-700 transition-colors"
                  whileHover={{ x: 4, scale: 1 }}
                >
                  <Icon
                    size={20}
                    style={{
                      color: item.color,
                      minWidth: "20px",
                      backgroundColor: "rgba(255, 255, 255, 0.9)",
                      padding: "4px",
                      width: "35px",
                      height: "35px",
                      borderRadius: "3px",
                    }}
                  />
                  <AnimatePresence>
                    {isOpen && (
                      <motion.span
                        className="ml-4 whitespace-nowrap"
                        initial={{ opacity: 0, width: 0 }}
                        animate={{ opacity: 1, width: "auto" }}
                        exit={{ opacity: 0, width: 0 }}
                        transition={{ duration: 0.2, delay: 0.3 }}
                      >
                        {item.name}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.div>
              </Link>
            );
          })}
        </nav>
      </div>
    </motion.div>
  );
};

export default Sidebar;
