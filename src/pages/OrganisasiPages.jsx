import { useState } from "react";
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
} from "@mui/material";
import { motion } from "framer-motion";
import CardTimKerja from "../components/organisasiComponent/CardTimKerja";
import CardPegawai from "../components/organisasiComponent/CardPegawai";

const OrganisasiPages = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchTerm2, setSearchTerm2] = useState("");
  const [selectedYear, setSelectedYear] = useState("2024");

  const handleChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  const handleSearchStaff = (e) => setSearchTerm2(e.target.value);
  const handleSearchChange = (e) => setSearchTerm(e.target.value);
  const handleYearChange = (e) => setSelectedYear(e.target.value);

  const teams = [
    { namaTim: "Tim Statistik Harga", jumlahAnggota: 10 },
    { namaTim: "Tim Humas", jumlahAnggota: 8 },
    { namaTim: "Tim Bagian Umum", jumlahAnggota: 15 },
    { namaTim: "Tim Tim Neraca Wilayah", jumlahAnggota: 6 },
    { namaTim: "Tim Statistik Harga", jumlahAnggota: 6 },
  ];

  const staffs = [
    { namaPegawai: "Luthfil Kasyful Azhim", jumlahTim: 10 },
    { namaPegawai: "I Gede Dewangga Jati Suma", jumlahTim: 8 },
    { namaPegawai: "Ni Made Desy Parwati Utami", jumlahTim: 15 },
    { namaPegawai: "Azarine Zada Kalonica Widyadhana", jumlahTim: 6 },
    { namaPegawai: "Anak Agung Gede Dirga Kardita", jumlahTim: 10 },
  ];

  // Filter berdasarkan search
  const filteredTeams = teams.filter((team) =>
    team.namaTim.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredStaffs = staffs.filter((team) =>
    team.namaPegawai.toLowerCase().includes(searchTerm2.toLowerCase())
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

  return (
    <main className="w-full px-4">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card sx={{ marginTop: 4, marginLeft: 2, marginRight: 2, height: 800 }}>
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
                  <Grid item xs={12} md={3}>
                    {/* <FormControl fullWidth size="small">
                      <InputLabel id="tahun-label">Tahun</InputLabel>
                      <Select
                        labelId="tahun-label"
                        value={selectedYear}
                        label="Tahun"
                        onChange={handleYearChange}
                      >
                        <MenuItem value="2022">2022</MenuItem>
                        <MenuItem value="2023">2023</MenuItem>
                        <MenuItem value="2024">2024</MenuItem>
                      </Select>
                    </FormControl> */}
                  </Grid>
                </Grid>

                {/* Tabs Content */}
                <TabPanel value={tabIndex} index={0}>
                  <Grid container spacing={4}>
                    {filteredTeams.map((team, index) => (
                      <Grid item xs={12} md={3} key={index}>
                        <CardTimKerja
                          namaTim={team.namaTim}
                          jumlahAnggota={team.jumlahAnggota}
                          anggotaTim={["Budi", "Ani", "Joko"]}
                        />
                      </Grid>
                    ))}
                  </Grid>
                </TabPanel>
                <TabPanel value={tabIndex} index={1}>
                  <Grid container spacing={2} sx={{ mb: 2 }}></Grid>
                  <Grid container spacing={4}>
                    {filteredStaffs.map((team, index) => (
                      <Grid item xs={12} md={3} key={index}>
                        <CardPegawai
                          namaPegawai={team.namaPegawai}
                          jumlahTim={team.jumlahTim}
                        />
                      </Grid>
                    ))}
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
