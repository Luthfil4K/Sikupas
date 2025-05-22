import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Grid,
  Box,
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  Divider,
  TextField,
  Tab,
  Tabs,
  Autocomplete,
} from "@mui/material";
import { useParams } from "react-router-dom";

import Identity from "../components/profileComponent/Identity";
import TableIdentity from "../components/profileComponent/TableIdentity";
import TableActivity from "../components/profileComponent/TableActivity";
import LineChartIdentity from "../components/profileComponent/LineChartIdentity";
import SKPDragDrop from "../components/profileComponent/SKPDragDrop";
import CardTimKerja from "../components/organisasiComponent/CardTimKerja";

import LoadingPage from "./LoadingPage";

import { getPegawaiById } from "../services/pegawaiServices";
import { getAllPegawai } from "../services/pegawaiServices";

import { useTheme } from "@mui/material/styles";

// router
import { Navigate } from "react-router-dom";

// req user login infor
import { useUser } from "../context/UserContext";

// utils/types
import Role from "../types/roles"; // sesuaikan pathnya

const ProfilePages = () => {
  const [loading, setLoading] = useState(true);
  const { userData, loadingUser } = useUser();
  const { id } = useParams();
  const role = localStorage.getItem("role");
  const nip = localStorage.getItem("nip");
  const rawNip = localStorage.getItem("nip");
  const cleanedNip = nip?.replace(/^"+|"+$/g, "");

  const [isAllowed, setIsAllowed] = useState(null);
  const [isAllowedSearch, setIsAllowedSearch] = useState(null);

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
      } else if (cleanedNip === id) {
        setIsAllowed(true);
      } else {
        setIsAllowed(false);
      }
    }
  }, [role, cleanedNip, id, userData]);

  useEffect(() => {
    if (userData) {
      if (
        role === "ketua_tim" ||
        role === "admin" ||
        role === "pimpinan" ||
        [
          Role.PIMPINAN_PROVINSI,
          Role.KEPALA_KABKO,
          Role.KEPALA_BAGIAN_UMUM_KABKO,
          Role.KEPALA_BAGIAN_UMUM_PROVINSI,
        ].includes(userData.role.id)
      ) {
        setIsAllowedSearch(true);
      } else if (cleanedNip === id) {
        setIsAllowedSearch(false);
      } else {
        setIsAllowedSearch(false);
      }
    }
  }, [role, cleanedNip, id, userData]);

  const theme = useTheme();

  const [pegawai, setPegawai] = useState(null);
  const [jumlahAktivitas, setJumlahAktivitas] = useState(0);
  const [semuaPegawai, setSemuaPegawai] = useState([]);

  useEffect(() => {
    const fetchPegawai = async () => {
      try {
        const data = await getPegawaiById(id);
        setPegawai(data);
      } catch (err) {
        console.error("Gagal mengambil data pegawai", err);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 1000); // matikan loading setelah fetch
      }
    };
    fetchPegawai();
  }, [id]);

  useEffect(() => {
    const fetchPegawai = async () => {
      try {
        const data = await getAllPegawai();
        setSemuaPegawai(data);
      } catch (err) {
        console.log(err);
      } finally {
        console.log("final");
      }
    };

    fetchPegawai();
  }, []);

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => setSearchTerm(e.target.value);

  // tabpanel
  const [tabIndex, setTabIndex] = useState(0);

  const handleChange = (event, newValue) => {
    setTabIndex(newValue);
  };

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

  const anggota = pegawai?.anggota_pegawai ?? [];

  const lead = (pegawai?.pegawai_is_lead ?? []).map((item) => ({
    ...item,
    tim_which: {
      tim_nama: item.tim_nama,
      tim_member: item.tim_member,
    },
  }));

  const combinedPegawai = [...anggota, ...lead];

  const filteredTeams = combinedPegawai.filter((staff) =>
    staff.tim_which?.tim_nama?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const onPilihPegawai = (pegawai) => {
    const fetchPegawai = async () => {
      try {
        const data = await getPegawaiById(pegawai.nip);
        setPegawai(data);
      } catch (err) {
        console.error("Gagal mengambil data pegawai", err);
      } finally {
        console.log("final");
      }
    };
    fetchPegawai();
  };



  if (loading) {
    return <LoadingPage />
  }

  if (!isAllowed) {
    return <Navigate to="/forbidden" replace />;
  }

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
            sx={{ paddingLeft: 2, paddingTop: 4, paddingRight: 2 }}
          >
            {isAllowedSearch && (
              <>
                <Grid item xs={12} md={12} sx={{ height: 100 }}>
                  <Autocomplete
                    options={semuaPegawai ? semuaPegawai : []}
                    getOptionLabel={(option) => option?.nama?.trim() || ""}
                    sx={{ width: "100%", backgroundColor: "white" }}
                    value={
                      semuaPegawai
                        ? semuaPegawai
                        : [].find((p) => p.nama.trim() === nama.trim()) || null
                    }
                    onChange={(event, value) => {
                      if (value) {
                        onPilihPegawai(value);
                      }
                    }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Cari Pegawai"
                        variant="outlined"
                      />
                    )}
                  />
                </Grid>
              </>
            )}

            <Grid item md={3} sm={12} xs={12}>
              <Identity
                nama={pegawai?.nama}
                nip={pegawai?.nip}
                jabatan={pegawai?.jabatan}
                wilayah={pegawai?.wilayah}
                pegawai={pegawai}
              ></Identity>
            </Grid>
            <Grid item md={9} xs={12}>
              {/* <Grid container spacing={4}>
                <Grid item md={12} xs={6}>
                  <LineChartIdentity></LineChartIdentity>
                </Grid>
              </Grid> */}
              <Grid bgcolor={""} container spacing={4}>
                <Grid item md={12} xs={12}>
                  <Card sx={{ height: 537, overflow: "auto" }}>
                    <Typography
                      variant="h5"
                      sx={{ marginTop: 3, marginLeft: 2, mb: 2 }}
                    >
                      Tim Kerja Pegawai
                    </Typography>
                    <Divider></Divider>
                    <TextField
                      size="small"
                      label="Cari Tim Kerja"
                      fullWidth
                      value={searchTerm}
                      onChange={handleSearchChange}
                      sx={{ margin: 2, width: "97%" }}
                    />
                    <Grid item md={12} xs={12}>
                      <Grid container spacing={4} sx={{ padding: 2 }}>
                        <Divider></Divider>
                        {filteredTeams.map((team, index) => {
                          return (
                            <Grid item sm={12} xs={12} md={4} key={index}>
                              <CardTimKerja
                                allowClick={isAllowedSearch}
                                namaTim={team.tim_which.tim_nama}
                                jumlahAnggota={
                                  team?.tim_which?.tim_member?.length
                                }
                                anggotaTim={team?.tim_which?.tim_member}
                              />
                            </Grid>
                          );
                        })}
                      </Grid>
                    </Grid>
                  </Card>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            container
            spacing={4}
            sx={{ paddingLeft: 2, paddingTop: 4, paddingRight: 2 }}
          ></Grid>
          <Grid
            container
            spacing={4}
            sx={{ paddingLeft: 2, paddingTop: 4, paddingRight: 2 }}
          >
            <Grid item xs={12} md={12}>
              <Card
                sx={{
                  minWidth: 75,
                  height: 600,
                  marginBottom: 5,
                  overflowY: 'hidden'
                }}
              >
                <Tabs
                  value={tabIndex}
                  onChange={handleChange}
                  TabIndicatorProps={{
                    style: { backgroundColor: theme.palette.primary.dark },
                  }}
                  textColor="inherit"
                >
                  <Tab
                    label="CKP Harian"
                    sx={{
                      color:
                        tabIndex === 0 ? theme.palette.primary.dark : "gray",
                      fontWeight: tabIndex === 0 ? "bold" : "normal",
                    }}
                  />
                  <Tab
                    label="SKP Bulanan"
                    sx={{
                      color:
                        tabIndex === 1 ? theme.palette.primary.dark : "gray",
                      fontWeight: tabIndex === 1 ? "bold" : "normal",
                    }}
                  />
                </Tabs>
                <Divider></Divider>
                <CardContent>
                  <TabPanel value={tabIndex} index={0}>
                    <TableActivity pegawai={pegawai}></TableActivity>
                  </TabPanel>
                  <TabPanel value={tabIndex} index={1}>
                    <TableIdentity
                      pegawai={pegawai}
                      setJumlahAktivitas={setJumlahAktivitas}
                    ></TableIdentity>
                  </TabPanel>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </motion.div>
      </main>
    </>
  );
};

export default ProfilePages;
