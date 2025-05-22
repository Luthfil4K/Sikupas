import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Grid, Card } from "@mui/material";

// req user login infor
import { useUser } from "../context/UserContext";

// theme
import { useTheme } from "@mui/material/styles";

// router
import { Navigate } from "react-router-dom";

// component Load
import TableRekap from "../components/rekapHarian/tableRekap";
import LoadingPage from "./LoadingPage";

// services
import { getPegawaiKegiatan } from "../services/kegiatanServices"; // pimpinan
import { getPegawaiKegiatanKabKo } from "../services/kegiatanServices";

// utils/types
import Role from "../types/roles"; // sesuaikan pathnya

// dayjs
import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween";
dayjs.extend(isBetween);



const TestingComponent = () => {
  const { userData, loadingUser } = useUser();

  const [bulan, setBulan] = useState(dayjs().month());
  const [tahun, setTahun] = useState(dayjs().year());
  const [selectedWilayah, setSelectedWilayah] = useState("5100");

  const [loading, setLoading] = useState(true);
  const [isAllowedPage, setIsAllowedPage] = useState(null);
  const [dataPegawaiKegiatan, setDataPegawaiKegiatan] = useState(null);
  const [roleLogin, setRoleLogin] = useState(null);
  const [isAllowedFilter, setIsAllowedFilter] = useState(null);

  const theme = useTheme();

  useEffect(() => {
    const fetchData = async () => {
      if (!userData) return;

      try {
        if (userData.role === Role.PIMPINAN_PROVINSI) {
          // const pegawaiKegiatan = await getPegawaiKegiatan();
          // setDataPegawaiKegiatan(pegawaiKegiatan);
        } else if (
          [Role.KETUA_TIM_PROVINSI, Role.KETUA_TIM_KABKO].includes(
            userData.role
          )
        ) {
          // ...
        } else if (
          [Role.ANGGOTA_TIM_PROVINSI, Role.ANGGOTA_TIM_KABKO].includes(
            userData.role
          )
        ) {
          // ...
        } else if (
          [Role.KEPALA_KABKO, Role.KEPALA_BAGIAN_UMUM_KABKO].includes(
            userData.role
          )
        ) {
          const pegawaiKegiatan = await getPegawaiKegiatanKabKo(
            userData.wilayah
          );
          setDataPegawaiKegiatan(pegawaiKegiatan);
        }
      } catch (error) {
        console.error("Gagal mengambil data:", error);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }
    };

    fetchData();
  }, [userData]);

  if (!loadingUser && userData) {
    // console.log("Role pengguna:", userData.role.nama_role);
    // console.log("pengguna: ", userData);
  }

  const role = localStorage.getItem("role");

  const nipLama = localStorage.getItem("nipLama");

  //  api get dsini
  useEffect(() => {
    const fetchData = async () => {
      if (!loadingUser && userData) {
        console.log("UserData: ", userData);
        console.log("Pimpinan: ", Role.PIMPINAN_PROVINSI);
        try {
          if (userData.role.id === Role.PIMPINAN_PROVINSI) {
          
            const response = await getPegawaiKegiatan({
              wilayah: selectedWilayah,
              bulan,
              tahun,
            });

            console.log("response")
            console.log(response)
            setDataPegawaiKegiatan(response);
            setIsAllowedFilter(true);
          } else if (
            userData.role.id === Role.KETUA_TIM_PROVINSI ||
            userData.role.id === Role.KETUA_TIM_KABKO
          ) {
            console.log("role ketua tim");
          } else if (
            userData.role.id === Role.ANGGOTA_TIM_PROVINSI ||
            userData.role.id === Role.ANGGOTA_TIM_KABKO
          ) {
            console.log("role pegawai");
          } else if (
            userData.role.id === Role.KEPALA_KABKO ||
            userData.role.id === Role.KEPALA_BAGIAN_UMUM_KABKO
          ) {
            console.log("role pimpinan kabko");
            const pegawaiKegiatan = await getPegawaiKegiatanKabKo(
              userData.wilayah
            );

            console.log(pegawaiKegiatan)
            const filteredPegawai = pegawaiKegiatan.dataPegawai.filter(
              (pegawai) => pegawai.nip !== userData.nip
            );
            setIsAllowedFilter(false)
            setDataPegawaiKegiatan(filteredPegawai);
          } else {
            console.log("gamasuk mana mana ");
          }
        } catch (error) {
          console.error("Gagal mengambil data:", error);
        } finally {
          setTimeout(() => {
            setLoading(false);
          }, 1000);
        }
      }
    };

    fetchData();
  }, [userData, bulan, tahun, selectedWilayah]);

  return loading ? (
    <LoadingPage />
  ) : (
    <main className="w-full px-4">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card sx={{ height: 750, marginTop: 4, padding: 4 }}>
          <Grid container>
            <Grid item md={12} xs={12}>
              <TableRekap
                wilayah={selectedWilayah}
                allowedFilterWilayah={isAllowedFilter}
                dataPegawaiKegiatan={dataPegawaiKegiatan}
                bulan={bulan}
                tahun={tahun}
                selectedWilayah={selectedWilayah}
                setBulan={setBulan}
                setTahun={setTahun}
                setSelectedWilayah={setSelectedWilayah}
                satkerWilayah={userData?.satker.nama_satker}
              ></TableRekap>
            </Grid>
          </Grid>
        </Card>
      </motion.div>
    </main>
  );
};

export default TestingComponent;
