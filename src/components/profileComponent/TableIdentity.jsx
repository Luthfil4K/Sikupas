import { useState, useMemo, useEffect } from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Typography from "@mui/material/Typography";

const columns = [
  {
    field: "id",
    headerName: "No",
    width: 40,
    sortable: false,
    filterable: false,
    renderCell: (params) =>
      `${params.api.getAllRowIds().indexOf(params.id) + 1}`,
  },
  { field: "tanggal", headerName: "Periode SKP", width: 120,
    renderCell: (params) => {
      const [bulan, tahun] = params.value.split("/");
      return `${bulan} ${tahun}`;
    },
   },
  {
    field: "sasaran_kinerja",
    headerName: "Sasaran Kinerja",
    width: 400,
    renderCell: (params) => <div style={cellStyle}>{params.value}</div>,
  },
  {
    field: "indikator",
    headerName: "Indikator",
    width: 500,
    renderCell: (params) => {
      const cleanedText = params.value
        ?.replace(
          "Ukuran keberhasilan/ indikator kinerja individu dan Target:",
          ""
        )
        .trim();

      return (
        <div style={multiLineCellStyle}>
          {cleanedText
            .split("•")
            .filter((text) => text.trim() !== "")
            .map((part, i) => (
              <div key={i}>
                <strong>•</strong> {part.trim()}
              </div>
            ))}
        </div>
      );
    },
  },
  {
    field: "realisasi",
    headerName: "Realisasi",
    width: 400,
    flex: 1,
    renderCell: (params) => <div style={cellStyle}>{params.value}</div>,
  },
  {
    field: "buktiDukung",
    headerName: "Bukti Dukung",
    width: 150,
    renderCell: (params) =>
      params.value ? (
        <Button
          variant="contained"
          color="success"
          size="small"
          onClick={() => window.open(params.value, "_blank")}
        >
          Lihat
        </Button>
      ) : (
        <Typography variant="body2" color="textSecondary">
          -
        </Typography>
      ),
  },
];

const cellStyle = {
  whiteSpace: "normal",
  wordBreak: "break-word",
  lineHeight: 1.3,
  display: "flex",
  alignItems: "center",
  height: "100%",
};

const multiLineCellStyle = {
  whiteSpace: "normal",
  wordBreak: "break-word",
  lineHeight: 1.3,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  height: "100%",
};

// Array bulan dalam Bahasa Indonesia
const bulanIndonesia = [
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

const TableIdentity = ({ pegawai }) => {
  const today = new Date();
  // Set default values directly in state
  const [selectedYear, setSelectedYear] = useState("2025");
  const [selectedMonth, setSelectedMonth] = useState(today.getMonth() + 1);
  const [selectedWeek, setSelectedWeek] = useState(Math.ceil((today.getDate() / 7)+1));

  // Menentukan minggu berdasarkan tanggal
  const getWeekOfMonth = (tanggal) => {
    const [monthName, year] = tanggal.split("/");
    const monthIndex = bulanIndonesia.indexOf(monthName);
    const date = new Date(year, monthIndex, 1); // Tanggal pertama bulan tersebut
    const firstDay = date.getDay();
    const day = new Date(year, monthIndex, 13).getDate(); // Tanggal tengah bulan
    return Math.ceil((day + firstDay) / 7); // Hitung minggu keberapa
  };

  // Ambil tahun yang ada dalam data untuk populasi filter tahun
  const years = useMemo(() => {
    const uniqueYears = new Set();
    if (pegawai && pegawai.skp) {
      pegawai.skp.forEach((item) => {
        uniqueYears.add(item.tahun); // Menambahkan tahun dari data
      });
    }
    return Array.from(uniqueYears).sort((a, b) => b - a); // Urutkan tahun secara descending
  }, [pegawai]);

  // Memformat data pegawai
  const rows = useMemo(() => {
    if (!pegawai || !pegawai.skp) return [];

    const formatted = [];

    pegawai.skp.forEach((item) => {
      const realisasiList = item.realisasi
        ?.split("•")
        .filter((val) => val.trim() !== "");

      realisasiList?.forEach((realisasi, idx) => {
        const buktiMatch = realisasi.match(
          /\(Bukti dukung:\s*(https?:\/\/[^\s)]+)\)/
        );
        const buktiLink = buktiMatch ? buktiMatch[1] : "";
        const cleanedRealisasi = realisasi
          .replace(/\(Bukti dukung:\s*https?:\/\/[^\s)]+\)/, "")
          .trim();

        formatted.push({
          id: `${item.id}-${idx}`,
          sasaran_kinerja: item.sasaran_kinerja,
          indikator: item.indikator,
          realisasi: cleanedRealisasi,
          tanggal: `${item.bulan}/${item.tahun}`,
          buktiDukung: buktiLink,
          tahun: item.tahun, // Menambahkan tahun di data
        });
      });
    });

    return formatted;
  }, [pegawai]);

  // Filter bulan, tahun, dan minggu
  const filteredRows = useMemo(() => {
    return rows.filter((row) => {
      const [monthName] = row.tanggal.split("/"); // Ambil nama bulan dari tanggal
      const monthIndex = bulanIndonesia.indexOf(monthName); // Dapatkan index bulan dalam bahasa Indonesia

      const isYearMatch = selectedYear === "" || row.tahun === selectedYear; // Filter berdasarkan tahun
      const isMonthMatch =
        selectedMonth === "" || monthIndex === selectedMonth - 1; // Filter berdasarkan bulan
      const isWeekMatch =
        selectedWeek === "" ||
        getWeekOfMonth(row.tanggal) === parseInt(selectedWeek); // Filter berdasarkan minggu

      return isYearMatch && isMonthMatch && isWeekMatch;
    });
  }, [rows, selectedYear, selectedMonth, selectedWeek]);

  // Update selectedYear if 2025 is not available in years
  useEffect(() => {
    if (years.length > 0 && !years.includes("2025")) {
      setSelectedYear(years[0]);
    }
  }, [years]);

  if (!pegawai || !pegawai.skp) {
    return <Typography variant="body2">Memuat data SKP...</Typography>;
  }

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
          display: "flex",
          flexWrap: "wrap",
          gap: 2,
          justifyContent: "flex-end",
          mb: 2,
        }}
      >
        {/* Filter Tahun */}
        <FormControl size="small" sx={{ minWidth: 150 }}>
          <InputLabel id="filter-tahun">Tahun</InputLabel>
          <Select
            labelId="filter-tahun"
            value={selectedYear}
            label="Filter Tahun"
            onChange={(e) => setSelectedYear(e.target.value)}
          >
            {years.map((year) => (
              <MenuItem key={year} value={year}>
                {year}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {/* Filter Bulan */}
        <FormControl size="small" sx={{ minWidth: 150 }}>
          <InputLabel id="filter-bulan">Periode SKP</InputLabel>
          <Select
            labelId="filter-bulan"
            value={selectedMonth}
            label="Filter Bulan"
            onChange={(e) => setSelectedMonth(e.target.value)}
          >
            {bulanIndonesia.map((bulan, index) => (
              <MenuItem key={index} value={index + 1}>
                {bulan}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {/* Filter Minggu */}
        <FormControl size="small" sx={{ minWidth: 120 }}>
          <InputLabel id="filter-week">Minggu</InputLabel>
          <Select
            labelId="filter-week"
            value={selectedWeek}
            label="Minggu"
            onChange={(e) => setSelectedWeek(e.target.value)}
          >
            {Array.from({ length: 4 }, (_, i) => (
              <MenuItem key={i} value={i + 1}>
                Minggu {i + 1}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={filteredRows}
          columns={columns}
          rowHeight={70}
          pageSize={5}
          rowsPerPageOptions={[5]}
          disableSelectionOnClick
        />
      </div>
    </Box>
  );
};

export default TableIdentity;