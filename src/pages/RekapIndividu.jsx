import React, { useEffect, useRef, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { format, isBefore, startOfDay, addDays } from "date-fns";
import { useParams } from "react-router-dom";
// router
import { Navigate } from "react-router-dom";
import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween";
dayjs.extend(isBetween);

import {
  Card,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";
import Swal from "sweetalert2";
import Role from "../types/roles"; // sesuaikan pathnya
import { getPegawaiById } from "../services/pegawaiServices";

import LoadingPage from "./LoadingPage";
// req user login infor
import { useUser } from "../context/UserContext";

const RekapIndividu = () => {
  const { userData, loadingUser } = useUser();
  const [isAllowed, setIsAllowed] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const [pegawai, setPegawai] = useState(null);
  const [events, setEvents] = useState([]);
  const nip = localStorage.getItem("nip");
  const [refreshKey, setRefreshKey] = useState(0);
  const calendarRef = useRef(null);
   const role = localStorage.getItem("role");
  const cleanedNip = nip?.replace(/^"+|"+$/g, "");

   useEffect(() => {
    if (userData) {
      if (
       
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
        console.log("ini di set true")
        console.log(isAllowed+": isAllowed")
      } else {
        setIsAllowed(false);
        console.log("id :"+id)
        console.log("nip :"+nip)
        console.log("cleanedNip:"+cleanedNip)
        console.log("cleanedNip :"+cleanedNip)
      }
    }
  }, [role, cleanedNip, id, userData]);

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

  const transformKegiatanToEvents = (data) => {
    const events = [];
    data.forEach(({ nama, kegiatan }) => {
      kegiatan.forEach(
        ({ keg_deskripsi, keg_tanggal_awal, keg_tanggal_akhir }) => {
          const startDate = startOfDay(new Date(keg_tanggal_awal));
          const endDate = startOfDay(addDays(new Date(keg_tanggal_awal), 1));
          events.push({
            title: `${keg_deskripsi}`,
            start: keg_tanggal_awal,
            end: format(endDate, "yyyy-MM-dd"),
            allDay: true,
            startDate,
            endDate,
          });
        }
      );
    });
    return events;
  };

  useEffect(() => {
    if (pegawai) {
      setEvents(transformKegiatanToEvents([pegawai]));
      setRefreshKey((prev) => prev + 1);
    }
  }, [pegawai]);

   const hariLiburBali = [
    "12-02-2025",
    "22-04-2025",
    "23-04-2025",
    "24-04-2025",
    "10-09-2025",
    "18-11-2025",
    "19-11-2025",
    "20-11-2025",
  ]

  const hariLiburNasional = [
    
    "01-01-2025",
    "27-01-2025",
    "28-01-2025",
    "29-01-2025",
    "28-03-2025",
    "29-03-2025",
    "31-03-2025",
    "01-04-2025",
    "02-04-2025",
    "03-04-2025",
    "04-04-2025",
    "07-04-2025",
    "18-04-2025",
    "20-04-2025",
    "01-05-2025",
    "12-05-2025",
    "13-05-2025",
    "29-05-2025",
    "30-05-2025",
    "01-06-2025",
    "06-06-2025",
    "09-06-2025",
    "27-06-2025",
    "17-08-2025",
    "05-09-2025",
    "25-12-2025",
    "26-12-2025",
  ];

  const dayCellDidMount = (info) => {
    const today = startOfDay(new Date());
    const date = startOfDay(info.date);
    const tanggal = new Date(info.date)
    
    const dd = String(tanggal.getDate()).padStart(2, "0");
    const mm = String(tanggal.getMonth() + 1).padStart(2, "0"); // bulan 0–11
    const yyyy = tanggal.getFullYear();

    const formatted = `${dd}-${mm}-${yyyy}`;

    const semuaHariLibur = [...hariLiburNasional, ...hariLiburBali];
    const isHariLibur = semuaHariLibur.includes(formatted);
    const isWeekend = date.getDay() === 0 || date.getDay() === 6;

    // const isHariLibur = semuaHariLibur.includes(tanggalStr);
    const hasEvents = events.some(
      (e) => date >= e.startDate && date < e.endDate
    );

    if (!isHariLibur && !isWeekend && !hasEvents && isBefore(date, today)) {
      const el = document.createElement("div");
      el.innerText = "×";
      el.style.color = "red";
      el.style.fontWeight = "bold";
      el.style.position = "absolute";
      el.style.top = "50%";
      el.style.left = "50%";
      el.style.transform = "translate(-50%, -50%)";
      el.style.fontSize = "28px"; // Ukuran lebih besar
      info.el.style.position = "relative";
      info.el.appendChild(el);
    }
  };

  const eventContent = (arg) => {
    return (
      <div
        style={{
          backgroundColor: "#DBEAFE",
          color: "#1E40AF",
          fontSize: "0.7rem",
          padding: "2px 4px",
          borderRadius: 4,
          overflow: "hidden",
          whiteSpace: "nowrap",
          textOverflow: "ellipsis",
          cursor: "pointer",
        }}
        title={arg.event.title}
      >
        {arg.event.title}
      </div>
    );
  };

  const handleEventClick = (clickInfo) => {
    const { title, start, end } = clickInfo.event;

    Swal.fire({
      title: "Detail Kegiatan",
      html: `
        <strong>${title}</strong><br/>
        <small>${format(new Date(start), "dd MMM yyyy")} 
      </small>
      `,
      // html: `
      //   <strong>${title}</strong><br/>
      //   <small>${format(new Date(start), "dd MMM yyyy")} - ${format(
      //   new Date(new Date(start).getTime() ), 
      //   "dd MMM yyyy"
      // )}</small>
      // `,
      icon: "info",
      confirmButtonText: "Tutup",
      customClass: {
        popup: "rounded-lg",
      },
    });
  };

 // sebelum return
if (loading || isAllowed === null || loadingUser) {
  return <LoadingPage />;
}

if (isAllowed === false) {
  return <Navigate to="/forbidden" replace />;
}


  if (loading) {
    return <LoadingPage />;
  }

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
            height: 730,
            overflowY: "auto",
          }}
        >
          <div className=" mt-4 p-4">
            <div className="flex mb-4 justify-between items-center gap-4">
              {/* Bagian kiri: tulisan */}
              <div>
                <Typography sx={{ fontSize: 22, fontWeight: 600 }}>
                  REKAP INDIVIDU{" "}
                </Typography>
                <Typography>
                  {pegawai?.nama} -{" "}
                  <span className="text-gray-500">
                    {pegawai?.satker?.nama_satker}
                  </span>
                </Typography>
              </div>

              {/* Bagian kanan: form controls */}
              <div className="flex gap-4">
                <FormControl size="small" sx={{ width: 200 }}>
                  <InputLabel id="bulan-label">Bulan</InputLabel>
                  <Select
                    labelId="bulan-label"
                    defaultValue={new Date().getMonth()}
                    label="Bulan"
                    onChange={(e) => {
                      const newMonth = parseInt(e.target.value);
                      const calendarApi = calendarRef.current.getApi();
                      const currentDate = calendarApi.getDate();
                      const newDate = new Date(currentDate);
                      newDate.setMonth(newMonth);
                      calendarApi.gotoDate(newDate);
                    }}
                  >
                    {Array.from({ length: 12 }, (_, i) => (
                      <MenuItem key={i} value={i}>
                        {new Date(0, i).toLocaleString("id-ID", {
                          month: "long",
                        })}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>

                <FormControl size="small" sx={{ width: 200 }}>
                  <InputLabel id="tahun-label">Tahun</InputLabel>
                  <Select
                    labelId="tahun-label"
                    defaultValue={new Date().getFullYear()}
                    label="Tahun"
                    onChange={(e) => {
                      const newYear = parseInt(e.target.value);
                      const calendarApi = calendarRef.current.getApi();
                      const currentDate = calendarApi.getDate();
                      const newDate = new Date(currentDate);
                      newDate.setFullYear(newYear);
                      calendarApi.gotoDate(newDate);
                    }}
                  >
                    {Array.from({ length: 5 }, (_, i) => {
                      const year = new Date().getFullYear() - 2 + i;
                      return (
                        <MenuItem key={year} value={year}>
                          {year}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </FormControl>
              </div>
            </div>

            <FullCalendar
              key={refreshKey}
              ref={calendarRef}
              plugins={[dayGridPlugin, interactionPlugin]}
              initialView="dayGridMonth"
              events={events}
              dayMaxEvents={3}
              eventContent={eventContent}
              eventClick={handleEventClick}
              dayCellDidMount={dayCellDidMount}
              headerToolbar={{
                left: "prev,next today",
                center: "title",
                right: "",
              }}
              height="auto"
            />
          </div>
        </Card>
      </motion.div>
    </main>
  );
};

export default RekapIndividu;
