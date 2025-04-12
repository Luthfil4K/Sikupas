import { useState, useEffect } from "react";
import * as React from "react";
import {
  Box,
  Tab,
  Tabs,
  Typography,
  Grid,
  Card,
  Divider,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Pagination,
} from "@mui/material";
import { motion } from "framer-motion";
import CardTimKerja from "../components/organisasiComponent/CardTimKerja";
import CardPegawai from "../components/organisasiComponent/CardPegawai";

// req data
import { getAllTimKerja } from "../services/timKerjaServices";
import { getAllPegawai } from "../services/pegawaiServices";

const OrganisasiPages = () => {
  const [timKerja, setTimKerja] = useState([]);
  const [pegawai, setPegawai] = useState([]);

  useEffect(() => {
    const fetchTimKerja = async () => {
      try {
        const data = await getAllTimKerja();
        setTimKerja(data);
      } catch (err) {
        setError("Gagal mengambil data tim kerja");
      } finally {
        console.log("final");
      }
    };

    fetchTimKerja();
  }, []);

  useEffect(() => {
    const fetchPegawai = async () => {
      try {
        const data = await getAllPegawai();
        console.log(data); // Menggunakan service yang sudah dibuat
        setPegawai(data); // Simpan data tim kerja di state
      } catch (err) {
        console.log(err);
      } finally {
        console.log(pegawai);
      }
    };

    fetchPegawai(); // Panggil fungsi untuk mengambil data
  }, []);

  const [tabIndex, setTabIndex] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchTerm2, setSearchTerm2] = useState("");
  const [selectedYear, setSelectedYear] = useState("2024");

  const handleChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  const handleSearchStaff = (e) => setSearchTerm2(e.target.value);
  const handleSearchChange = (e) => setSearchTerm(e.target.value);

  const staffs = [
    { namaPegawai: "Luthfil Kasyful Azhim", jumlahTim: 10 },
    { namaPegawai: "I Gede Dewangga Jati Suma", jumlahTim: 8 },
    { namaPegawai: "Ni Made Desy Parwati Utami", jumlahTim: 15 },
    { namaPegawai: "Azarine Zada Kalonica Widyadhana", jumlahTim: 6 },
    { namaPegawai: "Anak Agung Gede Dirga Kardita", jumlahTim: 10 },
  ];

  // Filter berdasarkan search
  const filteredTeams = timKerja.filter((team) =>
    team.tim_nama.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredStaffs = pegawai.filter((team) =>
    team.nama.toLowerCase().includes(searchTerm2.toLowerCase())
  );

  const TabPanel = ({ children, value, index }) => {
    return (
      <div role="tabpanel" hidden={value !== index}>
        {value === index && (
          <Box sx={{ p: 2 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  };


  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  // Ambil data sesuai halaman saat ini
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const paginatedTeams = filteredTeams.slice(indexOfFirstItem, indexOfLastItem);
  const paginatedStaffs = filteredStaffs.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  return (
    <main className="w-full px-4">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card
          sx={{
            marginTop: 4,
            marginLeft: 2,
            marginRight: 2,
            height: 800,
            overflowY: "scroll",
          }}
        >
          <Grid container sx={{ padding: 4 }}>
            <Grid item md={12}>
              <Typography variant="h5">Struktur Organisasi</Typography>
            </Grid>
          </Grid>
          <Divider />

          <Grid container pt={5} spacing={4} sx={{ px: 2 }}>
            <Grid item md={12}>
              <Box sx={{ width: "100%", backgroundColor: "white" }}>
                {/* Tabs Header */}
                <Tabs
                  value={tabIndex}
                  onChange={handleChange}
                  TabIndicatorProps={{
                    style: { backgroundColor: "#1DA57A" },
                  }}
                  textColor="inherit"
                >
                  <Tab
                    label="Tim Kerja"
                    sx={{
                      color: tabIndex === 0 ? "#1DA57A" : "gray",
                      fontWeight: tabIndex === 0 ? "bold" : "normal",
                    }}
                  />
                  <Tab
                    label="Individu"
                    sx={{
                      color: tabIndex === 1 ? "#1DA57A" : "gray",
                      fontWeight: tabIndex === 1 ? "bold" : "normal",
                    }}
                  />
                </Tabs>

                <Divider sx={{ mb: 2 }} />

                {/* 🔍 Filter Search & Tahun */}
                <Grid container spacing={2} sx={{ mb: 2 }}>
                  <Grid item xs={12} md={6}>
                    {tabIndex == 0 ? (
                      <TextField
                        size="small"
                        label="Cari Tim"
                        fullWidth
                        value={searchTerm}
                        onChange={handleSearchChange}
                      ></TextField>
                    ) : (
                      <TextField
                        size="small"
                        label="Cari Pegawai"
                        fullWidth
                        value={searchTerm2}
                        onChange={handleSearchStaff}
                      />
                    )}
                  </Grid>
                  <Grid item xs={12} md={3}></Grid>
                </Grid>

                {/* Tabs Content */}
                <TabPanel value={tabIndex} index={0}>
                  <Grid container spacing={4}>
                    {paginatedTeams.map((team, index) => (
                      <Grid item xs={12} md={3} key={index}>
                        <CardTimKerja
                          namaTim={team.tim_nama}
                          jumlahAnggota={team.timKerja?.length}
                          anggotaTim={["Budi", "Ani", "Joko"]}
                        />
                      </Grid>
                    ))}
                  </Grid>
                  <Grid
                    container
                    justifyContent="end"
                    alignItems="end"
                    spacing={1}
                    sx={{ mb: 2 }}
                  >
                    <Grid item>
                      <FormControl sx={{ minWidth: 120 }}>
                        <InputLabel id="items-per-page-label">
                          Tampilkan
                        </InputLabel>
                        <Select
                          labelId="items-per-page-label"
                           label="Tampilkan"
                          value={itemsPerPage}
                          onChange={(e) => {
                            setItemsPerPage(Number(e.target.value));
                            setCurrentPage(1);
                          }}
                          size="small"
                        >
                          <MenuItem value={5}>5</MenuItem>
                          <MenuItem value={10}>10</MenuItem>
                          <MenuItem value={15}>15</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item>
                      <Pagination
                        count={Math.ceil(tabIndex==0?filteredTeams.length:paginatedStaffs / itemsPerPage)}
                        page={currentPage}
                        onChange={handlePageChange}
                        color="primary"
                      />
                    </Grid>
                  </Grid>
                </TabPanel>
                <TabPanel value={tabIndex} index={1}>
                  <Grid container spacing={2} sx={{ mb: 2 }}></Grid>
                  <Grid container spacing={4}>
                    {paginatedStaffs.map((staff, index) => (
                      <Grid item xs={12} md={3} key={index}>
                        <CardPegawai
                          namaPegawai={staff.nama}
                          jumlahTim={staff.timkerja?.length}
                          nipPegawai={staff.nip}
                        />
                      </Grid>
                    ))}
                  </Grid>
                  <Grid
                    container
                    justifyContent="end"
                    alignItems="end"
                    spacing={1}
                    sx={{ mb: 2 }}
                  >
                    <Grid item>
                      <FormControl sx={{ minWidth: 120 }}>
                        <InputLabel id="items-per-page-label">
                          Tampilkan
                        </InputLabel>
                        <Select
                          labelId="items-per-page-label"
                           label="Tampilkan"
                          value={itemsPerPage}
                          onChange={(e) => {
                            setItemsPerPage(Number(e.target.value));
                            setCurrentPage(1);
                          }}
                          size="small"
                        >
                          <MenuItem value={5}>5</MenuItem>
                          <MenuItem value={10}>10</MenuItem>
                          <MenuItem value={15}>15</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item>
                      <Pagination
                        count={Math.ceil(filteredStaffs / itemsPerPage)}
                        page={currentPage}
                        onChange={handlePageChange}
                        color="primary"
                      />
                    </Grid>
                  </Grid>
                </TabPanel>
              </Box>
            </Grid>
          </Grid>
        </Card>
      </motion.div>
    </main>
  );
};

export default OrganisasiPages;
