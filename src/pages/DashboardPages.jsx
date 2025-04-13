import React, { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import LineChartDashboard from "../components/dashboardComponent/LineChartDashboard";
import BoxOne from "../components/dashboardComponent/BoxOne";
import BoxTwo from "../components/dashboardComponent/BoxTwo";
import BoxThree from "../components/dashboardComponent/BoxThree";
import BoxFour from "../components/dashboardComponent/BoxFour";
import TableRank from "../components/dashboardComponent/TableRank";
import TableBottom from "../components/dashboardComponent/TableBottom";
import FilterButtons from "../components/dashboardComponent/FilterButtons";
import { getAllSKP } from "../services/dashboardServices";



const DashboardPages = () => {
  const [skp, setSKP] = useState([]);

  useEffect(() => {
    const fetchPegawai = async () => {
      try {
        const data = await getAllSKP();
        console.log(data); // Menggunakan service yang sudah dibuat
        setSKP(data); // Simpan data tim kerja di state

        console.log(skp);
      } catch (err) {
        console.log(err);
      } finally {
        console.log("final");
      }
    };

    fetchPegawai(); // Panggil fungsi untuk mengambil data
  }, []);

  const aktivitasTerurai = useMemo(() => {
    if (!skp || skp.length === 0) return [];
  
    const bulanIndonesia = [
      "Januari",
      "Februari",
      "Maret",
      "April",
      "Mei",
      "Juni",
      "Juli",
      "Agustus",
      "September",
      "Oktober",
      "November",
      "Desember",
    ];
  
    return skp.flatMap((item) => {
      const aktivitasList = item.realisasi
        ?.split("•")
        .map((a) => a.trim())
        .filter((a) => a !== "");
  
      const bulanIndex = bulanIndonesia.findIndex(
        (namaBulan) =>
          namaBulan.toLowerCase() === (item.bulan || "").toLowerCase()
      );
  
      return aktivitasList.map((aktivitas, index) => ({
        id: `${item.id}-${index}`,
        namaAktivitas: aktivitas,
        namaPegawai: item.pegawai_nama,
        tanggal: new Date(item.tahun, bulanIndex !== -1 ? bulanIndex : 0, 13),
      }));
    });
  }, [skp]);
  

  // button active
  const [activeFilter, setActiveFilter] = useState("minggu");

  const handleClick = (filter) => {
    setActiveFilter(filter);
  };

  const filterByDateRange = (data, filter) => {
    const now = new Date();

    return data.filter(({ tanggal }) => {
      const activityDate = new Date(tanggal);

      if (filter === "minggu") {
        const startOfWeek = new Date(now);
        startOfWeek.setDate(now.getDate() - now.getDay());
        startOfWeek.setHours(0, 0, 0, 0);

        const endOfWeek = new Date(startOfWeek);
        endOfWeek.setDate(startOfWeek.getDate() + 6);
        endOfWeek.setHours(23, 59, 59, 999);

        return activityDate >= startOfWeek && activityDate <= endOfWeek;
      }

      if (filter === "bulan") {
        return (
          activityDate.getMonth() === now.getMonth() &&
          activityDate.getFullYear() === now.getFullYear()
        );
      }

      if (filter === "tahun") {
        return activityDate.getFullYear() === now.getFullYear();
      }

      return false;
    });
  };

  const dashboardStats = useMemo(() => {
    const filtered = filterByDateRange(aktivitasTerurai, activeFilter);

    const pegawaiAktifSet = new Set();
    const aktivitasPerPegawai = {};

    filtered.forEach(({ namaPegawai }) => {
      pegawaiAktifSet.add(namaPegawai);
      aktivitasPerPegawai[namaPegawai] =
        (aktivitasPerPegawai[namaPegawai] || 0) + 1;
    });

    const semuaNamaPegawai = Array.from(
      new Set(skp.map((item) => item.pegawai_nama))
    );

    const pegawaiBelumIsi = semuaNamaPegawai.filter(
      (nama) => !pegawaiAktifSet.has(nama)
    );

    const pegawaiTeraktif =
      Object.entries(aktivitasPerPegawai).sort((a, b) => b[1] - a[1])[0] || [];

    const totalAktivitasHariIni = filtered.filter((item) => {
      const today = new Date().toISOString().split("T")[0];
      return item.tanggal === today;
    }).length;

    return {
      totalAktivitasHariIni,
      pegawaiTeraktif: {
        nama: pegawaiTeraktif[0] || "-",
        jumlah: pegawaiTeraktif[1] || 0,
      },
      jumlahSudahIsi: pegawaiAktifSet.size,
      jumlahBelumIsi: pegawaiBelumIsi.length,
    };
  }, [aktivitasTerurai, activeFilter, skp]);

  // console.log("dashboardStats")
  // console.log(dashboardStats)
  // console.log("dashboardStats")
  console.log("aktivitasTerurai")
  console.log(aktivitasTerurai)
  console.log("aktivitasTerurai")

  return (
    <>
      <main className="w-full px-4">
        <motion.div
          className=""
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Grid
            bgcolor={""}
            pt={5}
            container
            spacing={4}
            sx={{ paddingLeft: 2, paddingRight: 2 }}
          >
            <Grid
              item
              md={12}
              xs={12}
              sx={{ display: "flex", justifyContent: "end", alignItems: "end" }}
            >
              <Box>
                <Stack direction="row" spacing={1}>
                  <Button
                    variant={
                      activeFilter === "minggu" ? "contained" : "outlined"
                    }
                    color={activeFilter === "minggu" ? "success" : "inherit"}
                    onClick={() => handleClick("minggu")}
                  >
                    Minggu Ini
                  </Button>
                  <Button
                    variant={
                      activeFilter === "bulan" ? "contained" : "outlined"
                    }
                    color={activeFilter === "bulan" ? "success" : "inherit"}
                    onClick={() => handleClick("bulan")}
                  >
                    Bulan Ini
                  </Button>
                  <Button
                    variant={
                      activeFilter === "tahun" ? "contained" : "outlined"
                    }
                    color={activeFilter === "tahun" ? "success" : "inherit"}
                    onClick={() => handleClick("tahun")}
                  >
                    Tahun Ini
                  </Button>
                </Stack>
              </Box>
            </Grid>
            <Grid item md={3} xs={6}>
              <BoxOne total={dashboardStats.totalAktivitasHariIni} />
            </Grid>
            <Grid item md={3} xs={6}>
              <BoxTwo
                nama={dashboardStats.pegawaiTeraktif.nama}
                jumlah={dashboardStats.pegawaiTeraktif.jumlah}
              />
            </Grid>
            <Grid item md={3} xs={6}>
              <BoxThree jumlah={dashboardStats.jumlahSudahIsi} />
            </Grid>
            <Grid item md={3} xs={6}>
              <BoxFour jumlah={Math.ceil(69-dashboardStats.jumlahSudahIsi)} />
            </Grid>
          </Grid>
          <Grid
            container
            spacing={4}
            sx={{ paddingLeft: 2, paddingTop: 4, paddingRight: 2 }}
          >
            <Grid item md={8} xs={6}>
              <Card sx={{ minWidth: 275 }}>
                <LineChartDashboard></LineChartDashboard>
              </Card>
            </Grid>
            <Grid item md={4} xs={6}>
              <Card sx={{ minWidth: 75 }}>
                <CardContent>
                  <Typography
                    mb={2}
                    gutterBottom
                    sx={{ color: "text.secondary", fontSize: 14 }}
                  >
                    Jumlah Aktivitas Kinerja Pegawai
                  </Typography>
                  <TableRank></TableRank>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <Grid
            container
            spacing={4}
            sx={{ paddingLeft: 2, paddingTop: 4, paddingRight: 2 }}
          >
            <Grid item md={12}>
              <Card sx={{ minWidth: 75, marginBottom: 5 }}>
                <CardContent>
                  <Typography
                    mb={2}
                    gutterBottom
                    sx={{ color: "text.secondary", fontSize: 14 }}
                  >
                    Pelaksanaan Kinerja Pegawai
                  </Typography>
                  <TableBottom></TableBottom>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </motion.div>
      </main>
    </>
  );
};

export default DashboardPages;
