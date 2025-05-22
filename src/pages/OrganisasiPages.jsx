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

// pages
import CardTimKerja from "../components/organisasiComponent/CardTimKerja";
import CardPegawai from "../components/organisasiComponent/CardPegawai";
import LoadingPage from "./LoadingPage";

// req data pimpinan
import { getAllTimKerja } from "../services/timKerjaServices";
import { getAllPegawai } from "../services/pegawaiServices";

// req data ketua
import { getTimKerjaKetua } from "../services/timKerjaServices";

// req data kabko
import { getPegawaiKabko } from "../services/pegawaiServices";
import { getTimKerjaKabko } from "../services/timKerjaServices";

// req user login infor
import { useUser } from "../context/UserContext";

// theme
import { useTheme } from "@mui/material/styles";

// router
import { Navigate } from "react-router-dom";

// utils/types
import Role from "../types/roles"; // sesuaikan pathnya

const OrganisasiPages = () => {
  const { userData, loadingUser } = useUser();
  const [loading, setLoading] = useState(true);
  const [isAllowed, setIsAllowed] = useState(null);
  const theme = useTheme();

  useEffect(() => {
    if (userData) {
      const role = localStorage.getItem("role");
      if (
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
  }, [userData]);

  const [filterRole, setFilterRole] = useState("all");
  const [timKerja, setTimKerja] = useState([]);
  const [pegawai, setPegawai] = useState([]);

  const role = localStorage.getItem("role");
  const timKode = localStorage.getItem("timKode");
  const nip = localStorage.getItem("nip");
  const nipLama = localStorage.getItem("nipLama");

  //  api get dsini
  useEffect(() => {
    const fetchData = async () => {
      if (userData) {
        try {
          if (userData.role.id === Role.PIMPINAN_PROVINSI) {
            const tim = await getAllTimKerja();
            const peg = await getAllPegawai();
            setTimKerja(tim);
            setPegawai(peg);
          } else if (userData.role.id === Role.KEPALA_KABKO) {
            console.log("role: kepala kabko");
            const peg = await getPegawaiKabko(userData?.wilayah);
            const tim = await getTimKerjaKabko(userData?.wilayah);
            setTimKerja(tim);
            setPegawai(peg);
          } else if (userData.role.id === "ketua_tim") {
            const tim = await getTimKerjaKetua(nipLama);
            setTimKerja(tim);

            const semuaPegawai = tim.flatMap((t) =>
              t.tim_member.map((m) => m.pegawai)
            );

            const uniquePegawai = semuaPegawai.filter(
              (p, i, self) => i === self.findIndex((x) => x.nip === p.nip)
            );

            setPegawai(uniquePegawai);
          }
        } catch (error) {
          console.error("Gagal mengambil data:", error);
        } finally {
          setTimeout(() => {
            setLoading(false);
          }, 1000); // matikan loading setelah fetch
        }
      }
    };

    fetchData();
  }, [role, nipLama, userData]);

  // fortabb
  const [tabIndex, setTabIndex] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchTerm2, setSearchTerm2] = useState("");
  const [selectedYear, setSelectedYear] = useState("2024");

  const handleChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  const handleSearchStaff = (e) => setSearchTerm2(e.target.value);
  const handleSearchChange = (e) => setSearchTerm(e.target.value);

  // Filter  search
  const filteredTeams = timKerja.filter((team) =>
    team.tim_nama.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredStaffs = pegawai
    .filter((team) =>
      team.nama.toLowerCase().includes(searchTerm2.toLowerCase())
    )
    .filter((team) => {
      if (filterRole === "ahli madya") {
        return team.jabatan?.toLowerCase().includes("ahli madya");
      }
      return true;
    });

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

  const sortedStaffs = [...filteredStaffs].sort((a, b) => {
    const aIsAhliMadya = a.jabatan?.toLowerCase().includes("ahli madya");
    const bIsAhliMadya = b.jabatan?.toLowerCase().includes("ahli madya");

    if (aIsAhliMadya && !bIsAhliMadya) return -1;
    if (!aIsAhliMadya && bIsAhliMadya) return 1;
    return 0;
  });

  // pagination disssini
  const [itemsPerPage, setItemsPerPage] = useState(15);
  const [itemsPerPageStaff, setItemsPerPageStaff] = useState(15);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentPageStaff, setCurrentPageStaff] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const paginatedTeams = filteredTeams.slice(indexOfFirstItem, indexOfLastItem);

  const indexOfLastItemStaff = currentPageStaff * itemsPerPageStaff;
  const indexOfFirstItemStaff = indexOfLastItemStaff - itemsPerPageStaff;
  const paginatedStaffs = sortedStaffs.slice(
    indexOfFirstItemStaff,
    indexOfLastItemStaff
  );

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };
  const handlePageChangeStaff = (event, value) => {
    setCurrentPageStaff(value);
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);
  useEffect(() => {
    setCurrentPageStaff((prev) => (prev !== 1 ? 1 : prev));
  }, [searchTerm2, filterRole]);

  if (isAllowed === false) {
    return <Navigate to="/forbidden" replace />;
  }

  return loading ? (
    <LoadingPage />
  ) : (
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
                <Tabs
                  value={tabIndex}
                  onChange={handleChange}
                  TabIndicatorProps={{
                    style: { backgroundColor: theme.palette.primary.main },
                  }}
                  textColor="inherit"
                >
                  <Tab
                    label="Daftar Pegawai"
                    sx={(theme) => ({
                      color:
                        tabIndex === 0 ? theme.palette.primary.main : "gray",
                      fontWeight: tabIndex === 0 ? "bold" : "normal",
                    })}
                  />
                  <Tab
                    label="Daftar Tim Kerja"
                    sx={(theme) => ({
                      color:
                        tabIndex === 1 ? theme.palette.primary.main : "gray",
                      fontWeight: tabIndex === 1 ? "bold" : "normal",
                    })}
                  />
                </Tabs>

                <Divider sx={{ mb: 2 }} />

                <Grid container spacing={2} sx={{ mb: 2 }}>
                  {tabIndex == 1 ? (
                    <>
                      <Grid item xs={12} md={6}>
                        <TextField
                          size="small"
                          label="Cari Tim"
                          fullWidth
                          value={searchTerm}
                          onChange={handleSearchChange}
                        />
                      </Grid>
                    </>
                  ) : (
                    <>
                      <Grid item xs={12} md={6}>
                        <TextField
                          size="small"
                          label="Cari Pegawai"
                          fullWidth
                          value={searchTerm2}
                          onChange={handleSearchStaff}
                        />
                      </Grid>
                      <Grid item xs={12} md={3}>
                        <FormControl fullWidth size="small">
                          <InputLabel id="filter-role-label">
                            Tampilkan
                          </InputLabel>
                          <Select
                            labelId="filter-role-label"
                            value={filterRole}
                            label="Tampilkan"
                            onChange={(e) => setFilterRole(e.target.value)}
                          >
                            <MenuItem value="all">Semua Pegawai</MenuItem>
                            <MenuItem value="ahli madya">Ahli madya</MenuItem>
                          </Select>
                        </FormControl>
                      </Grid>
                    </>
                  )}
                </Grid>

                <TabPanel value={tabIndex} index={1}>
                  <Grid container spacing={4}>
                    {paginatedTeams.map((team, index) => (
                      <Grid item xs={12} lg={3} md={4} sm={6} key={index}>
                        <CardTimKerja
                        wilayah={"s"}
                          namaTim={team.tim_nama}
                          jumlahAnggota={team.tim_member?.length}
                          anggotaTim={team.tim_member}
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
                          <MenuItem value={8}>8</MenuItem>
                          <MenuItem value={15}>15</MenuItem>
                          <MenuItem value={100}>Semua</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item>
                      <Pagination
                        count={Math.ceil(filteredTeams.length / itemsPerPage)}
                        page={currentPage}
                        onChange={handlePageChange}
                        color="primary"
                      />
                    </Grid>
                  </Grid>
                </TabPanel>
                <TabPanel value={tabIndex} index={0}>
                  <Grid container spacing={4} sx={{ mb: 2 }}>
                    {paginatedStaffs.map((staff, index) => (
                      <Grid item xs={12} lg={4} md={4} sm={6} key={index}>
                        <CardPegawai
                          namaPegawai={staff.nama}
                          // jumlahTim={staff.timkerja?.length}
                          jumlahCkp={staff.kegiatan?.length}
                          nipPegawai={staff.nip}
                          jabatanPegawai={staff.jabatan}
                          wilayah={staff.wilayah}
                        />
                      </Grid>
                    ))}
                  </Grid>
                  <Grid
                    container
                    justifyContent="end"
                    alignItems="end"
                    spacing={1}
                    sx={{ mt: 2 }}
                  >
                    <Grid item sx={{ mt: 2 }}>
                      <FormControl sx={{ minWidth: 120 }}>
                        <InputLabel id="items-per-page-label">
                          Tampilkan
                        </InputLabel>
                        <Select
                          labelId="items-per-page-label"
                          label="Tampilkan"
                          value={itemsPerPageStaff}
                          onChange={(e) => {
                            setItemsPerPageStaff(Number(e.target.value));
                            setCurrentPage(1);
                          }}
                          size="small"
                        >
                          <MenuItem value={8}>8</MenuItem>
                          <MenuItem value={15}>15</MenuItem>
                          <MenuItem value={100}>Semua</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item>
                      <Pagination
                        count={Math.ceil(
                          filteredStaffs.length / itemsPerPageStaff
                        )}
                        page={currentPageStaff}
                        onChange={handlePageChangeStaff}
                        color="primary"
                        sx={{ color: theme.palette.primary.dark }}
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
