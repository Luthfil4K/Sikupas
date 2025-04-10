import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

const columns = [
  { field: "id", headerName: "No", width: 90 },
  { field: "rkAtasan", headerName: "Rencana Kinerja Atasan", width: 300 },
  { field: "tanggal", headerName: "Tanggal", width: 150 },
  { field: "rencanaKinerja", headerName: "Rencana Kinerja", width: 300 },
  { field: "kegiatan", headerName: "Kegiatan", width: 300 },
  { field: "capaian", headerName: "Capaian", width: 300 },
  {
    field: "buktiDukung",
    headerName: "Bukti Dukung",
    width: 150,
    renderCell: (params) => (
      <Button variant="contained" color="success" size="small">
        Lihat
      </Button>
    ),
  },
];

const rows = [
  { id: 1, rkAtasan: 'Jon', tanggal: '2024-04-10', rencanaKinerja:"a", kegiatan:"b", capaian:'c', buktiDukung:""  },
  { id: 2, rkAtasan: 'Jong', tanggal: '2024-03-12', rencanaKinerja:"a", kegiatan:"b", capaian:'c', buktiDukung:""  },
  { id: 3, rkAtasan: 'Wong', tanggal: '2024-04-05', rencanaKinerja:"a", kegiatan:"b", capaian:'c', buktiDukung:""  },
  { id: 4, rkAtasan: 'Don', tanggal: '2024-02-15', rencanaKinerja:"a", kegiatan:"b", capaian:'c', buktiDukung:""  },
  { id: 5, rkAtasan: 'Son', tanggal: '2024-04-22', rencanaKinerja:"a", kegiatan:"b", capaian:'c', buktiDukung:""  },
];

// Fungsi menentukan minggu ke berapa dari suatu tanggal
const getWeekOfMonth = (dateString) => {
  const date = new Date(dateString);
  const day = date.getDate();
  const firstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  return Math.ceil((day + firstDay) / 7);
};

const TableIdentity = () => {
  const [selectedMonth, setSelectedMonth] = React.useState("");
  const [selectedWeek, setSelectedWeek] = React.useState("");

  const handleMonthChange = (e) => {
    setSelectedMonth(e.target.value);
    setSelectedWeek(""); // reset minggu ketika bulan berubah
  };

  const handleWeekChange = (e) => {
    setSelectedWeek(e.target.value);
  };

  // Filter berdasarkan bulan dan minggu
  const filteredRows = rows.filter((row) => {
    const rowDate = new Date(row.tanggal);
    const rowMonth = rowDate.getMonth() + 1;

    const isMonthMatch = selectedMonth === "" || rowMonth === parseInt(selectedMonth);
    const isWeekMatch = selectedWeek === "" || getWeekOfMonth(row.tanggal) === parseInt(selectedWeek);

    return isMonthMatch && isWeekMatch;
  });

  return (
    <Box sx={{ backgroundColor: 'white', minHeight: 400, width: '100%', borderRadius: 2, p: 2 }}>
      {/* Filter Header */}
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: 'flex-end', mb: 2 }}>
        {/* Filter Bulan */}
        <FormControl size="small" sx={{ minWidth: 150 }}>
          <InputLabel id="filter-bulan">Periode SKP</InputLabel>
          <Select
            labelId="filter-bulan"
            value={selectedMonth}
            label="Filter Bulan"
            onChange={handleMonthChange}
          >
            <MenuItem value="">Semua Bulan</MenuItem>
            <MenuItem value="1">Januari</MenuItem>
            <MenuItem value="2">Februari</MenuItem>
            <MenuItem value="3">Maret</MenuItem>
            <MenuItem value="4">April</MenuItem>
            <MenuItem value="5">Mei</MenuItem>
            <MenuItem value="6">Juni</MenuItem>
            <MenuItem value="7">Juli</MenuItem>
            <MenuItem value="8">Agustus</MenuItem>
            <MenuItem value="9">September</MenuItem>
            <MenuItem value="10">Oktober</MenuItem>
            <MenuItem value="11">November</MenuItem>
            <MenuItem value="12">Desember</MenuItem>
          </Select>
        </FormControl>

        {/* Filter Minggu */}
        <FormControl size="small" sx={{ minWidth: 150 }} disabled={!selectedMonth}>
          <InputLabel id="filter-minggu">Filter Mingguan</InputLabel>
          <Select
            labelId="filter-minggu"
            value={selectedWeek}
            label="Filter Mingguan"
            onChange={handleWeekChange}
          >
            <MenuItem value="">Semua Minggu</MenuItem>
            <MenuItem value="1">Minggu 1</MenuItem>
            <MenuItem value="2">Minggu 2</MenuItem>
            <MenuItem value="3">Minggu 3</MenuItem>
            <MenuItem value="4">Minggu 4</MenuItem>
            <MenuItem value="5">Minggu 5</MenuItem>
          </Select>
        </FormControl>
      </Box>

      {/* Table */}
      <DataGrid
        sx={{ borderRadius: 2 }}
        rows={filteredRows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        disableRowSelectionOnClick
      />
    </Box>
  );
};

export default TableIdentity;
