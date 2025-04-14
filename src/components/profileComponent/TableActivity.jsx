import React from "react";
import { useState, useMemo, useEffect } from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

const TableActivity = () => {
  const today = new Date();

  // Ambil tahun dan bulan sekarang
  const currentYear = today.getFullYear(); // 2025
  const currentMonth = today.getMonth(); // 3 (April, karena 0-index)
  const currentDate = today.getDate(); // 14

  // Hitung minggu keberapa dalam bulan
  const getWeekOfMonth = (date) => {
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay(); // hari pertama bulan (0-6)
    return Math.ceil((date.getDate() + firstDay) / 7);
  };

  const currentWeek = getWeekOfMonth(today); // 3

  // State untuk filter
  const [selectedYear, setSelectedYear] = useState(currentYear);
  const [selectedMonth, setSelectedMonth] = useState(currentMonth);
  const [selectedWeek, setSelectedWeek] = useState(currentWeek);

  // Nama bulan
  const monthNames = [
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

  const formatTanggal = (tglString) => {
    const [day, month, year] = tglString.split("/");
    const date = new Date(`${year}-${month}-${day}`);

    const options = { day: "2-digit", month: "short", year: "numeric" };
    return date.toLocaleDateString("en-GB", options).replace(/ /g, "/");
  };

  const columns = [
    // {
    //     field: "no",
    //     headerName: "No",
    //     width: 40,
    //     sortable: false,
    //     filterable: false,
    //     width: 40,
    //     renderCell: (params) => {
    //     return ${params.api.getRowIndexRelativeToVisibleRows(params.id) + 1};
    //   },

    // },
    {
      field: "tanggal",
      headerName: "Tanggal Kegiatan",
      width: 130,
      renderCell: (params) => formatTanggal(params.value),
    },
    {
      field: "kegiatan",
      headerName: "Kegiatan",
      width: 440,
    },
    {
      field: "capaian",
      headerName: "Capaian",
      width: 440,
    },
    {
      field: "bukti_dukung",
      headerName: "Bukti Dukung",
      width: 150,
      renderCell: (params) => (
        <Button
          variant="contained"
          color="primary"
          size="small"
          href={params.row.linkBuktiDukung}
          target="_blank"
          rel="noopener noreferrer"
          sx={{ backgroundColor: "#1DA57A" }}
        >
          Lihat
        </Button>
      ),
    },
  ];

  const rows = [
    {
      id: 1,
      no: 1,
      tanggal: "11/04/2025",
      capaian: "Terlaksananya Rapat koordinasi mingguan",
      kegiatan: "Rapat koordinasi mingguan",
      linkBuktiDukung: "https://google.com",
    },
    {
      id: 2,
      no: 2,
      tanggal: "12/04/2025",
      capaian: "Terselenggaranya Penyusunan laporan bulanan",
      kegiatan: "Penyusunan laporan bulanan",
      linkBuktiDukung: "https://google.com",
    },
    {
      id: 3,
      no: 3,
      tanggal: "13/04/2025",
      capaian: "Terselenggaranya Monitoring proyek A",
      kegiatan: "Monitoring proyek A",
      linkBuktiDukung: "https://google.com",
    },
    {
      id: 4,
      no: 4,
      tanggal: "14/04/2025",
      capaian: "Terlaksananya Pengumpulan data evaluasi",
      kegiatan: "Pengumpulan data evaluasi",
      linkBuktiDukung: "https://google.com",
    },
    {
      id: 5,
      no: 5,
      tanggal: "15/04/2025",
      capaian: "Terlaksananya Pelatihan internal tim",
      kegiatan: "Pelatihan internal tim",
      linkBuktiDukung: "https://google.com",
    },
    {
      id: 6,
      no: 6,
      tanggal: "16/04/2025",
      capaian: "Terselenggaranya Pengecekan progres kerja",
      kegiatan: "Pengecekan progres kerja",
      linkBuktiDukung: "https://google.com",
    },
    {
      id: 7,
      no: 7,
      tanggal: "17/04/2025",
      capaian: "Terlaksananya Review hasil kerja mingguan",
      kegiatan: "Review hasil kerja mingguan",
      linkBuktiDukung: "https://google.com",
    },
  ];

  const filteredRows = useMemo(() => {
    return rows.filter((row) => {
      const [day, month, year] = row.tanggal.split("/").map(Number);
      const rowDate = new Date(year, month - 1, day);
  
      const isSameYear = rowDate.getFullYear() === selectedYear;
      const isSameMonth = rowDate.getMonth() === selectedMonth;
  
      // Hitung minggu keberapa tanggal tersebut
      const getWeekOfMonth = (date) => {
        const firstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
        return Math.ceil((date.getDate() + firstDay) / 7);
      };
  
      const isSameWeek = getWeekOfMonth(rowDate) === selectedWeek;
  
      return isSameYear && isSameMonth && isSameWeek;
    });
  }, [rows, selectedYear, selectedMonth, selectedWeek]);
  

  return (
    <Box
      sx={{
        backgroundColor: "white",
        minHeight: 400,
        width: "100%",
        borderRadius: 2,
        p: 2,
      }}
    >
      <Box
        sx={{
          mb: 2,
        }}
      >
        <Grid container>
          <Grid
            item
            md={6}
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 2,
              justifyContent: "flex-start",
            }}
          >
            <Typography variant="h6">
              Tabel Capaian Kinerja Pegawai Harian
            </Typography>
          </Grid>
          <Grid
            item
            md={6}
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 2,
              justifyContent: "flex-end",
            }}
          >
            {/* Filter Tahun */}
            <FormControl size="small" sx={{ minWidth: 150 }}>
              <InputLabel id="filter-tahun">Tahun</InputLabel>
              <Select
                labelId="filter-tahun"
                value={selectedYear}
                label="Tahun"
                onChange={(e) => setSelectedYear(e.target.value)}
              >
                {[2023, 2024, 2025, 2026].map((year) => (
                  <MenuItem key={year} value={year}>
                    {year}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            {/* Filter Bulan */}
            <FormControl size="small" sx={{ minWidth: 150, ml: 2 }}>
              <InputLabel id="filter-bulan">Bulan</InputLabel>
              <Select
                labelId="filter-bulan"
                value={selectedMonth}
                label="Bulan"
                onChange={(e) => setSelectedMonth(e.target.value)}
              >
                {monthNames.map((month, index) => (
                  <MenuItem key={month} value={index}>
                    {month}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            {/* Filter Minggu */}
            <FormControl size="small" sx={{ minWidth: 120, ml: 2 }}>
              <InputLabel id="filter-week">Minggu</InputLabel>
              <Select
                labelId="filter-week"
                value={selectedWeek}
                label="Minggu"
                onChange={(e) => setSelectedWeek(e.target.value)}
              >
                {[1, 2, 3, 4, 5].map((week) => (
                  <MenuItem key={week} value={week}>
                    Minggu ke-{week}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </Box>

      <div style={{ width: "100%" }}>
        <DataGrid
          rows={filteredRows}
          columns={columns}
          rowHeight={70}
          pageSize={5}
          rowsPerPageOptions={[5]}
          disableSelectionOnClick
          initialState={{
            sorting: {
              sortModel: [{ field: "tanggal", sort: "desc" }], // 🔥 Urutkan dari tanggal terbaru
            },
          }}
        />
      </div>
    </Box>
  );
};

export default TableActivity;