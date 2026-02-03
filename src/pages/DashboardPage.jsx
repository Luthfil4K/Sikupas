import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Box, Card, CardMedia, Grid, Typography, Button } from "@mui/material";
import { getMetabaseUrl } from "../services/metabaseServices";
import { Link, useNavigate } from "react-router-dom";

import { Navigate } from "react-router-dom";

// req user login infor
import { useUser } from "../context/UserContext";

// utils/types
import Role from "../types/roles"; // sesuain pathnya
import { useTheme } from '@mui/material/styles';

const DashboardPages = () => {
  const theme = useTheme()
  const navigate = useNavigate();
  const [iframeUrl, setIframeUrl] = useState("");
  const { userData, loadingUser } = useUser();
  const role = localStorage.getItem("role");
  const [isAllowed, setIsAllowed] = useState(true);
  const nip = localStorage.getItem("nip");
  const cleanedNip = nip?.replace(/^"+|"+$/g, "");

  console.log(userData);
  console.log(userData);

 


  useEffect(() => {
    const fetchUrl = async () => {
       
      if (userData) {

        try {
          const url = await getMetabaseUrl(
            userData?.role.id,
            userData?.satker.kode_satker,
            userData?.jabatan
          );
          setIframeUrl(url);
        } catch (err) {
          console.error("Gagal load iframe:", err);
        }
      }
    };
    fetchUrl();
  }, [userData]);

  useEffect(() => {
    if (userData) {
      let isMadya = false;

      if (userData?.jabatan?.toLowerCase().includes("madya")) {
        isMadya = true;
      }
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
        ||
        ([
          Role.KETUA_TIM_PROVINSI,
          Role.ANGGOTA_TIM_PROVINSI
        ].includes(userData.role.id)&&isMadya)
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
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          mb: 2,
        }}
      />
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      />
      <Card sx={{ width: "100%", height: "830px" }}>
        <Grid sx={{ backgroundColor: "white" }} container>
          <Grid
            item
            md={12}
            sx={{
              height: 140,
              backgroundColor: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                color: "#42454d",
                fontWeight: 700,
                fontSize: 24,
                fontFamily: "Poppins, sans-serif",
              }}
            >
              Closed For Maintenance
            </Typography>
          </Grid>
          <Grid
            item
            md={12}
            sx={{
              height: 450,
              justifyContent: "center",
              display: "flex",
              alignItems: "center",
              paddingTop: 0,
            }}
          >
            <CardMedia
              component="img"
              sx={{ height: "400px", width: "100%", objectFit: "contain" }}
              image={`/assets/1x/Maintenance_1-8.png`}
              title="Maintenance"
            />
          </Grid>
          <Grid
            item
            md={12}
            xs={12  }
            sx={{
              height: 30,
              backgroundColor: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "start",
            }}
          >
            <Typography
              sx={{
                color: "#42454d",
                fontWeight: 400,
                fontSize: 14,
                fontFamily: "Poppins, sans-serif",
              }}
            >
              Halaman ini sedang dalam perbaikan dan akan kembali{" "}
              <em>online</em> dalam beberapa hari.
            </Typography>
          </Grid>
          <Grid
            item
            md={12}
            sx={{
              height: 80,
              backgroundColor: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "start",
            }}
          >
            <Button
              variant="contained"
              sx={{ marginTop: 2, backgroundColor: theme.palette.primary.dark,color:"white" }}
              onClick={() => navigate("/rekapPegawai")}
            >
              Pergi ke Halaman Lain
            </Button>
          </Grid>
        </Grid>

        {/* <iframe src={iframeUrl} frameBorder={0} width="100%" height="100%" /> */}
      </Card>
    </main>
  );
};

export default DashboardPages;
