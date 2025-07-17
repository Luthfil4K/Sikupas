import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Box, Card } from "@mui/material";
import { getMetabaseUrl } from "../services/metabaseServices";


import { Navigate } from "react-router-dom";

// req user login infor
import { useUser } from "../context/UserContext";

// utils/types
import Role from "../types/roles"; // sesuaikan pathnya


const DashboardPages = () => {
  const [iframeUrl, setIframeUrl] = useState("");
  const {userData, loadingUser } = useUser();
  const role = localStorage.getItem("role");
  const [isAllowed, setIsAllowed] = useState(true);
  const nip = localStorage.getItem("nip");
  const cleanedNip = nip?.replace(/^"+|"+$/g, "");

  useEffect(() => {
  const fetchUrl = async () => {
    try {
      const url = await getMetabaseUrl();
      setIframeUrl(url);
    } catch (err) {
      console.error("Gagal load iframe:", err);
    }
  };
  fetchUrl();
}, []);



  useEffect(() => {
      if (userData) {
        if (
          role === "ketua_tim" ||
          role === "admin" ||
          role == "pimpinan" ||
          [
            Role.PIMPINAN_PROVINSI,
            Role.KEPALA_KABKO,
            Role.KEPALA_BAGIAN_UMUM_KABKO,
            Role.KEPALA_BAGIAN_UMUM_PROVINSI,
          ].includes(userData.role.id)
        ) {
          setIsAllowed(true);
        } else {
          setIsAllowed(false);
        }
      }
    }, [role, cleanedNip, userData]);

  if (!isAllowed) {
      return <Navigate to="/forbidden" replace />;
    }

  return (
    <main className="w-full p-6">
      <Box sx={{ display: "flex", justifyContent: "flex-end", alignItems: "center", mb: 2 }} />
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} />
      <Card sx={{ width: "100%", height: "730px" }}>
       
          <iframe
            src={iframeUrl}
            frameBorder={0}
            width="100%"
            height="100%"
          />
       
      </Card>
    </main>
  );
};

export default DashboardPages;
