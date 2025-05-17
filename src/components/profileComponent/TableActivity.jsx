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
import { useTheme } from '@mui/material/styles';

const TableActivity = ({ pegawai }) => {

  const theme = useTheme();
  const today = new Date();

  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth();
  const currentWeek = Math.ceil((today.getDate() + new Date(today.getFullYear(), today.getMonth(), 1).getDay()) / 7);

  const [selectedYear, setSelectedYear] = useState(currentYear);
  const [selectedMonth, setSelectedMonth] = useState(currentMonth);
  const [selectedWeek, setSelectedWeek] = useState("all");

  const monthNames = [
    "Januari", "Februari", "Maret", "April", "Mei", "Juni",
    "Juli", "Agustus", "September", "Oktober", "November", "Desember"
  ];

  const formatTanggal = (isoDate) => {
    const date = new Date(isoDate);
    return date.toLocaleDateString("id-ID", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  // Ambil daftar CKP dari pegawai
  const ckpList = pegawai?.kegiatan || [];

  // Ubah jadi rows
  const rows = ckpList.map((item, idx) => ({
    id: idx + 1,
    tanggal: item.keg_tanggal_awal,
    bulan: item.keg_bulan,
    tahun: item.keg_tahun,
    kegiatan: item.keg_deskripsi,
    capaian: item.keg_capaian,
    dataDukung: item.keg_data_dukung,
  }));

  // Filter berdasarkan tahun, bulan, minggu
  const filteredRows = useMemo(() => {
    return rows.filter((row) => {
      const date = new Date(row.tanggal);
      const isSameYear = date.getFullYear() === selectedYear;
      const isSameMonth = date.getMonth() === selectedMonth;

      const getWeekOfMonth = (date) => {
        const firstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
        return Math.ceil((date.getDate() + firstDay) / 7);
      };
       
      const isSameWeek = selectedWeek === "all" || getWeekOfMonth(date) === parseInt(selectedWeek);
      

      return isSameYear && isSameMonth && isSameWeek;
    });
  }, [rows, selectedYear, selectedMonth, selectedWeek]);

  const columns = [
    // { field: "id", headerName: "No", width: 60 },
    {
      field: "tanggal",
      headerName: "Tanggal Kegiatan",
      width: 200,
      renderCell: (params) => formatTanggal(params.value),
    },
    {
      field: "kegiatan",
      headerName: "Kegiatan",
      width: 450,
      renderCell: (params) => <div style={{ whiteSpace: "pre-wrap" }}>{params.value}</div>,
    },
    { field: "capaian", headerName: "Capaian", width: 450 },
    {
      field: "dataDukung",
      headerName: "Bukti Dukung",
      width: 150,
      renderCell: (params) => (
        <Button
          variant="contained"
          
          size="small"
          href={params.value}
          target="_blank"
          rel="noopener noreferrer"
          sx={{ backgroundColor: theme.palette.primary.dark,color:'white' }}
        >
          Lihat
        </Button>
      ),
    }
    
  ];

  return (
    <Box sx={{ backgroundColor: "white", minHeight: 400, width: "100%", borderRadius: 2, p: 2 }}>
      <Box sx={{ mb: 2 }}>
        <Grid container>
          <Grid item md={6} sx={{ display: "flex", flexWrap: "wrap", gap: 2, justifyContent: "flex-start" }}>
            <Typography variant="h6">
              Tabel Capaian Kinerja Pegawai Harian
            </Typography>
          </Grid>
          <Grid item md={6} sx={{ display: "flex", flexWrap: "wrap", gap: 2, justifyContent: "flex-end" }}>
            <FormControl size="small" sx={{ minWidth: 150 }}>
              <InputLabel id="filter-tahun">Tahun</InputLabel>
              <Select
                labelId="filter-tahun"
                value={selectedYear}
                label="Tahun"
                onChange={(e) => setSelectedYear(e.target.value)}
              >
                {[2023, 2024, 2025, 2026].map((year) => (
                  <MenuItem key={year} value={year}>{year}</MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl size="small" sx={{ minWidth: 150, ml: 2 }}>
              <InputLabel id="filter-bulan">Bulan</InputLabel>
              <Select
                labelId="filter-bulan"
                value={selectedMonth}
                label="Bulan"
                onChange={(e) => setSelectedMonth(e.target.value)}
              >
                {monthNames.map((month, index) => (
                  <MenuItem key={index} value={index}>{month}</MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl size="small" sx={{ minWidth: 120, ml: 2 }}>
              <InputLabel id="filter-week">Minggu</InputLabel>
              <Select
                labelId="filter-week"
                value={selectedWeek}
                label="Minggu"
                onChange={(e) => setSelectedWeek(e.target.value)}
              >
                <MenuItem key={6} value={"all"}>Semua Minggu</MenuItem>
                {[1, 2, 3, 4, 5].map((week) => (
                  <MenuItem key={week} value={week}>Minggu ke-{week}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </Box>

      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={filteredRows}
          columns={columns}
          rowHeight={45}
          pageSize={5}
          rowsPerPageOptions={[5]}
          disableSelectionOnClick
          initialState={{
            sorting: {
              sortModel: [{ field: "tanggal", sort: "desc" }],
            },
          }}
        />
      </div>
    </Box>
  );
};

export default TableActivity;
