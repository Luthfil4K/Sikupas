import { createContext, useContext, useState, useEffect } from "react";
import api from "../services/api"; // sesuaikan path

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const [loadingUser, setLoadingUser] = useState(true);
  const [errorUser, setErrorUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) throw new Error("Token tidak ditemukan");

        const res = await api.get("/pegawai/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        });

        setUserData(res.data);
      } catch (err) {
        console.error("Gagal mengambil data user:", err);
        setErrorUser(err);

        
        if (err.response?.status === 401 || err.response?.status === 403  ) {
          localStorage.removeItem("token");
          setTimeout(() => {
            window.location.href = "/login";
          }, 150);
          
        }
      } finally {
        setLoadingUser(false);
      }
    };

    fetchUser();
  }, []);

  return (
    <UserContext.Provider value={{ userData, loadingUser, errorUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
