import React, { useState, useEffect } from "react";
import {
  Box,
  Card,
  CardActions,
  CardMedia,
  CardContent,
  Button,
  Typography,
  Grid,
} from "@mui/material";
import { CalendarDays, Calendar, BarChart3 } from "lucide-react"; // Import ikon dari lucide
import { BarChart, BarChart2, Menu, Users, Settings, File } from "lucide-react";
const Identity = () => {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Card
      sx={{
        height: "auto",
        minWidth: 275,
        minHeight: size.width < 800 ? 300 : 365,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <CardMedia
        sx={{ height: 200 }}
        image="/src/assets/image/Feels.png"
        title="Profile Photo"
      />
      <CardContent
      sx={{ height: 290 }}>
        {/* Info Pegawai */}
        <Typography variant="h6" component="div" gutterBottom>
          Budi Santoso
        </Typography>
        <Typography sx={{ fontSize: 14, color: "text.secondary" }}>
          Jabatan: Analis Kepegawaian
        </Typography>
        <Typography sx={{ fontSize: 14, color: "text.secondary" }}>
          Satuan Kerja: Kota Surabaya
        </Typography>

        {/* Ringkasan Jumlah Pekerjaan */}
        <Grid container spacing={2} sx={{ mt: 2 }}>
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                p: 2,
                borderRadius: 2,
                bgcolor: "#ffffff",
                boxShadow: "0 1px 15px rgba(0,0,0,0.15)",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start", // tetap rata kiri
                textAlign: "left",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  mb: 1,
                }}
              >
                <CalendarDays size={28} color="#6366f1" />
              </Box>
              <Typography variant="subtitle1">
                <Box component="span" sx={{ fontWeight: 600, mr: 1 }}>
                  14
                </Box>
                <Box
                  component="span"
                  sx={{
                    fontSize: 13,
                    color: "text.secondary",
                    fontWeight: 400,
                  }}
                >
                  Aktivitas
                </Box>
              </Typography>

              <Typography sx={{ fontSize: 13, color: "text.secondary" }}>
                Minggu Ini
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Box
              sx={{
                p: 2,
                borderRadius: 2,
                bgcolor: "#ffffff",
                boxShadow: "0 1px 15px rgba(0,0,0,0.15)",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start", // tetap rata kiri
                textAlign: "left",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  mb: 1,
                }}
              >
                <File size={28} color="#6366f1" />
              </Box>
              <Typography variant="subtitle1">
                <Box component="span" sx={{ fontWeight: 600, mr: 1 }}>
                  45
                </Box>
                <Box
                  component="span"
                  sx={{
                    fontSize: 13,
                    color: "text.secondary",
                    fontWeight: 400,
                  }}
                >
                  Aktivitas
                </Box>
              </Typography>

              <Typography sx={{ fontSize: 13, color: "text.secondary" }}>
                Bulan Ini
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Box
              sx={{
                p: 2,
                borderRadius: 2,
                bgcolor: "#ffffff",
                boxShadow: "0 1px 15px rgba(0,0,0,0.15)",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                textAlign: "left",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  mb: 1,
                }}
              >
                <BarChart3 size={28} color="#6366f1" />
              </Box>
              <Typography variant="subtitle1">
                <Box component="span" sx={{ fontWeight: 600, mr: 1 }}>
                  144
                </Box>
                <Box
                  component="span"
                  sx={{
                    fontSize: 13,
                    color: "text.secondary",
                    fontWeight: 400,
                  }}
                >
                  Aktivitas
                </Box>
              </Typography>

              <Typography sx={{ fontSize: 13, color: "text.secondary" }}>
                Tahun Ini
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </CardContent>

      <CardActions>
        <Button  color="success" size="small" fullWidth variant="outlined">
          Lihat Detail
        </Button>
      </CardActions>
    </Card>
  );
};

export default Identity;
