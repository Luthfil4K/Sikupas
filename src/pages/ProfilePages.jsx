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
} from "@mui/material";
import { useParams } from "react-router-dom";

import Identity from "../components/profileComponent/Identity";
import TableIdentity from "../components/profileComponent/TableIdentity";
import LineChartIdentity from "../components/profileComponent/LineChartIdentity";
import SKPDragDrop from "../components/profileComponent/SKPDragDrop";
import CardTimKerja from "../components/organisasiComponent/CardTimKerja";

import { getPegawaiById } from "../services/pegawaiServices";

const ProfilePages = () => {
  const { id } = useParams(); // dapetin id dari URL
  const [pegawai, setPegawai] = useState(null);
  const [jumlahAktivitas, setJumlahAktivitas] = useState(0);

  useEffect(() => {
    const fetchPegawai = async () => {
      try {
        const data = await getPegawaiById(id);
        setPegawai(data);
      } catch (err) {
        console.error("Gagal mengambil data pegawai", err);
      } finally {
        console.log("final");
      }
    };

    fetchPegawai();
  }, [id]);

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => setSearchTerm(e.target.value);



  // const filteredTeams = teams.filter((team) =>
  //   team.namaTim.toLowerCase().includes(searchTerm.toLowerCase())
  // );
  const filteredTeams =
  pegawai && pegawai.timkerja
    ? pegawai.timkerja.filter((staff) =>
        staff.tim?.tim_nama?.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];
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
            <Grid  item md={3} xs={12} >
              <Identity
                nama={pegawai?.nama}
                jabatan={pegawai?.jabatan}
                wilayah={pegawai?.wilayah}
                pegawai={pegawai}
              ></Identity>
            </Grid>
            <Grid item md={9} xs={6} >
              {/* <Grid container spacing={4}>
                <Grid item md={12} xs={6}>
                  <LineChartIdentity></LineChartIdentity>
                </Grid>
                <Grid item md={12} xs={6}>
                  <SKPDragDrop></SKPDragDrop>
                </Grid>
              
              </Grid> */}
              <Grid
                bgcolor={""}
                container
                spacing={4}
              >
                <Grid item md={12} >
                  <Card sx={{ height: 537, overflowY: "scroll" }}>
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
                      sx={{ margin: 2, width: 900 }}
                    />
                    <Grid item md={12} xs={6}>
                      <Grid container spacing={4} sx={{ padding: 2 }}>
                        <Divider></Divider>
                        {filteredTeams.map((team, index) => {
                          return (
                            <Grid item sm={12} xs={12} md={4} key={index}>
                              <CardTimKerja
                                namaTim={team.tim.tim_nama}
                                jumlahAnggota={team?.tim?.timKerja?.length}
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
            <Grid item md={12}>
              <Card sx={{ minWidth: 75, height: 500, marginBottom: 5,overflowY:"scroll" }}>
                <CardContent>
                  <Typography variant="h5" component="div">
                    <TableIdentity pegawai={pegawai} setJumlahAktivitas={setJumlahAktivitas} ></TableIdentity>
                  </Typography>
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
