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
import { File } from "lucide-react";

const isToday = (date) => {
  const today = new Date();
  const targetDate = new Date(date);

  return (
    today.getFullYear() === targetDate.getFullYear() &&
    today.getMonth() === targetDate.getMonth() &&
    today.getDate() === targetDate.getDate()
  );
};

const isThisWeek = (date) => {
  const today = new Date();
  const currentWeekStart = new Date(
    today.setDate(today.getDate() - today.getDay())
  );
  const currentWeekEnd = new Date(currentWeekStart);
  currentWeekEnd.setDate(currentWeekStart.getDate() + 6);

  return date >= currentWeekStart && date <= currentWeekEnd;
};

const isThisMonth = (date) => {
  const today = new Date();
  return (
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
  );
};

const isThisYear = (date) => {
  const today = new Date();
  return date.getFullYear() === today.getFullYear();
};

const Identity = ({ nama, jabatan, wilayah, pegawai }) => {
  const [jumlahAktivitasHariIni, setJumlahAktivitasHariIni] = useState(0);
  const [jumlahAktivitasMingguIni, setJumlahAktivitasMingguIni] = useState(0);
  const [jumlahAktivitasBulanIni, setJumlahAktivitasBulanIni] = useState(0);
  const [jumlahAktivitasTahunIni, setJumlahAktivitasTahunIni] = useState(0);

  const [jumlahCkpHariIni, setJumlahCkpHariIni] = useState(0);
  const [jumlahCkpMingguIni, setJumlahCkpMingguIni] = useState(0);
  const [jumlahCkpBulanIni, setJumlahCkpBulanIni] = useState(0);
  const [jumlahCkpTahunIni, setJumlahCkpTahunIni] = useState(0);

  useEffect(() => {
    if (pegawai && pegawai.skp) {
      let hariIni = 0;
      let mingguIni = 0;
      let bulanIni = 0;
      let tahunIni = 0;

      pegawai.skp.forEach((skpItem, index) => {
        const bulan = skpItem.bulan;
        const tahun = skpItem.tahun;
        const date = new Date(`${tahun}-${bulan}-13`); // tanggal dummy untuk representasi bulan

        // Split realisasi dan filter yang kosong
        const aktivitasList =
          skpItem.realisasi?.split("•").filter((item) => item.trim() !== "") ||
          [];

        const aktivitasCount = aktivitasList.length;

        console.log(
          `(${index + 1}) ${skpItem.realisasi} ➜ ${aktivitasCount} aktivitas`
        );

        if (isToday(date)) {
          hariIni += aktivitasCount;
        }
        if (isThisWeek(date)) {
          mingguIni += aktivitasCount;
        }
        if (isThisMonth(date)) {
          bulanIni += aktivitasCount;
        }
        if (isThisYear(date)) {
          tahunIni += aktivitasCount;
        }
      });
      console.log("mingguini:" + mingguIni);
      console.log("bulan ini:" + bulanIni);

      setJumlahAktivitasHariIni(hariIni);
      setJumlahAktivitasMingguIni(mingguIni);
      setJumlahAktivitasBulanIni(bulanIni);
      setJumlahAktivitasTahunIni(tahunIni);
    }
  }, [pegawai]);


  useEffect(() => {
    if (pegawai && pegawai.ckp) {
      let hariIni = 0;
      let mingguIni = 0;
      let bulanIni = 0;
      let tahunIni = 0;

      const aktivitasCount =1
      pegawai.ckp.forEach((ckpItem, index) => {
      
        const date = new Date(ckpItem.tglMulai); 

        if (isToday(date)) {
          hariIni += aktivitasCount;
        }
        if (isThisWeek(date)) {
          mingguIni += aktivitasCount;
        }
        if (isThisMonth(date)) {
          bulanIni += aktivitasCount;
        }
        if (isThisYear(date)) {
          tahunIni += aktivitasCount;
        }
      });
    
      setJumlahCkpHariIni(hariIni);
      setJumlahCkpMingguIni(mingguIni);
      setJumlahCkpBulanIni(bulanIni);
      setJumlahCkpTahunIni(tahunIni);
      console.log("jumlahCkpHariIni");
      console.log("jumlahCkpMingguIni");
      console.log("jumlahCkpBulanIni");
      console.log("jumlahCkpTahunIni");
      console.log(jumlahCkpHariIni);
      console.log(jumlahCkpMingguIni);
      console.log(jumlahCkpBulanIni);
      console.log(jumlahCkpTahunIni);
      console.log("jumlahCkpHariIni");
      console.log("jumlahCkpMingguIni");
      console.log("jumlahCkpBulanIni");
      console.log("jumlahCkpTahunIni");

      
    }
  }, [pegawai]);


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
        minWidth: 330,
        paddingTop:1,
        minHeight: size.width < 800 ? 300 : 365,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Box sx={{ height: 240, width: "100%", overflow: "hidden", justifyContent:'center',alignItems:'center',display:'flex' }}>
        <CardMedia
          component="img"
          sx={{ height: "100%", width: "60%",objectFit:'fill' }}
          image="/Asset-2.png"
          title="Profile Photo"
        />
      </Box>

      <CardContent sx={{ height: 290 }}>
        {/* Info Pegawai */}
        <Typography sx={{fontSize:18, fontWeight:600}} component="div" gutterBottom>
          {nama}
        </Typography>
        <Typography sx={{ fontSize: 14, color: "text.secondary" }}>
          Jabatan: {jabatan}
        </Typography>
        <Typography sx={{ fontSize: 14, color: "text.secondary" }}>
          Satuan Kerja: {wilayah}
        </Typography>

        {/* Ringkasan Jumlah Pekerjaan */}
        <Grid container spacing={2} sx={{ mt: 2 }}>
          <Grid item xs={6} md={3}>
            <Box
              sx={{
                height: 120, // Atur tinggi sesuai kebutuhanmu
                width: "100%",
                borderRadius: 1,
                bgcolor: "#ffffff",
                boxShadow: "0 1px 15px rgba(0,0,0,0.15)",
                display: "flex",
                flexDirection: "column",
                overflow: "hidden", // Supaya radius rapi
              }}
            >
              {/* Bagian Angka (Atas - Putih) */}
              <Box
                sx={{
                  p: 1,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontWeight: 600,
                  fontSize: 24,
                  bgcolor: "#ffffff",
                  color: "#1DA57A",
                }}
              >
                {jumlahCkpHariIni}
              </Box>

              <Box
                sx={{
                  bgcolor: "#EFEFEF",
                  flex: 1, // Ini yang bikin bagian bawah isi seluruh sisa tinggi
                  display: "flex",

                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography sx={{ fontSize: 13, color: "text.secondary" }}>
                  Aktivitas
                </Typography>
                <Typography sx={{ fontSize: 13, color: "text.secondary" }}>
                  Hari Ini
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={6} md={3}>
            <Box
              sx={{
                height: 120, // Atur tinggi sesuai kebutuhanmu
                width: "100%",
                borderRadius: 1,
                bgcolor: "#ffffff",
                boxShadow: "0 1px 15px rgba(0,0,0,0.15)",
                display: "flex",
                flexDirection: "column",
                overflow: "hidden", // Supaya radius rapi
              }}
            >
              {/* Bagian Angka (Atas - Putih) */}
              <Box
                sx={{
                  p: 1,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontWeight: 600,
                  fontSize: 24,
                  bgcolor: "#ffffff",
                  color: "#1DA57A",
                }}
              >
                {jumlahCkpMingguIni}
              </Box>

              {/* Bagian Aktivitas (Bawah - Abu-Abu) */}
              <Box
                sx={{
                  bgcolor: "#EFEFEF",
                  flex: 1, // Ini yang bikin bagian bawah isi seluruh sisa tinggi
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography sx={{ fontSize: 13, color: "text.secondary" }}>
                  Aktivitas
                </Typography>
                <Typography sx={{ fontSize: 13, color: "text.secondary" }}>
                  Minggu Ini
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={6} md={3}>
            <Box
              sx={{
                height: 120, // Atur tinggi sesuai kebutuhanmu
                width: "100%",
                borderRadius: 1,
                bgcolor: "#ffffff",
                boxShadow: "0 1px 15px rgba(0,0,0,0.15)",
                display: "flex",
                flexDirection: "column",
                overflow: "hidden", // Supaya radius rapi
              }}
            >
              {/* Bagian Angka (Atas - Putih) */}
              <Box
                sx={{
                  p: 1,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontWeight: 600,
                  fontSize: 24,
                  bgcolor: "#ffffff",
                  color: "#1DA57A", // Warna putih eksplisit
                }}
              >
                {jumlahCkpBulanIni}
              </Box>

              {/* Bagian Aktivitas (Bawah - Abu-Abu) */}
              <Box
                sx={{
                  bgcolor: "#EFEFEF",
                  flex: 1, // Ini yang bikin bagian bawah isi seluruh sisa tinggi
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography sx={{ fontSize: 13, color: "text.secondary" }}>
                  Aktivitas
                </Typography>
                <Typography sx={{ fontSize: 13, color: "text.secondary" }}>
                  Bulan Ini
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={6} md={3}>
            <Box
              sx={{
                height: 120, // Atur tinggi sesuai kebutuhanmu
                width: "100%",
                borderRadius: 1,
                bgcolor: "#ffffff",
                boxShadow: "0 1px 15px rgba(0,0,0,0.15)",
                display: "flex",
                flexDirection: "column",
                overflow: "hidden", // Supaya radius rapi
              }}
            >
              {/* Bagian Angka (Atas - Putih) */}
              <Box
                sx={{
                  p: 1,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontWeight: 600,
                  fontSize: 24,
                  bgcolor: "#ffffff",
                  color: "#1DA57A", // Warna putih eksplisit
                }}
              >
                {jumlahCkpTahunIni}
              </Box>

              {/* Bagian Aktivitas (Bawah - Abu-Abu) */}
              <Box
                sx={{
                  bgcolor: "#EFEFEF",
                  flex: 1, // Ini yang bikin bagian bawah isi seluruh sisa tinggi
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography sx={{ fontSize: 13, color: "text.secondary" }}>
                  Aktivitas
                </Typography>
                <Typography sx={{ fontSize: 13, color: "text.secondary" }}>
                  Tahun Ini
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </CardContent>

      {/* <CardActions>
        <Button  color="success" size="small" fullWidth variant="outlined">
          Lihat Detail
        </Button>
      </CardActions> */}
    </Card>
  );
};

export default Identity;
