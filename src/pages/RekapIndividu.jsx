import React, { useEffect, useRef, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { format, isBefore, startOfDay, addDays } from "date-fns";
import { useParams } from "react-router-dom";

import {
  Card,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { motion } from "framer-motion";
import Swal from "sweetalert2";

import { getPegawaiById } from "../services/pegawaiServices";

import LoadingPage from "./LoadingPage";

const RekapIndividu = () => {
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const [pegawai, setPegawai] = useState(null);
  const [events, setEvents] = useState([]);
  const [refreshKey, setRefreshKey] = useState(0);
  const calendarRef = useRef(null);

  useEffect(() => {
    const fetchPegawai = async () => {
      try {
        const data = await getPegawaiById(id);
        setPegawai(data);
      } catch (err) {
        console.error("Gagal mengambil data pegawai", err);
      }finally {
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
          const endDate = startOfDay(addDays(new Date(keg_tanggal_akhir), 1));
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

  const dayCellDidMount = (info) => {
    const today = startOfDay(new Date());
    const date = startOfDay(info.date);
    const isWeekend = date.getDay() === 0 || date.getDay() === 6;
    const hasEvents = events.some((e) => date >= e.startDate && date < e.endDate);
  
    if (!isWeekend && !hasEvents && isBefore(date, today)) {
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
        <small>${format(new Date(start), "dd MMM yyyy")} - ${format(
        new Date(end),
        "dd MMM yyyy"
      )}</small>
      `,
      icon: "info",
      confirmButtonText: "Tutup",
      customClass: {
        popup: "rounded-lg",
      },
    });
  };

  
    if (loading) {
      return <LoadingPage />
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
          <div className="p-4">
            <div className="flex gap-4 mb-4 justify-end">
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
