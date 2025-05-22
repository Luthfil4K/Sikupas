import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
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
  {
    field: "tanggal",
    headerName: "Periode SKP",
    width: 200,
  },
  {
    field: "sasaran_kinerja",
    headerName: "Sasaran Kinerja",
    width: 1000,
    renderCell: (params) => <div style={cellStyle}>{params.value}</div>,
  },
  {
    field: "capaian_kinerja",
    headerName: "Capaian Kinerja",
    width: 1000,
    renderCell: (params) => <div style={cellStyle}>{params.value}</div>,
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
  const [selectedYear, setSelectedYear] = useState("");
  const today = new Date();


  console.log(pegawai)
  const [selectedMonth, setSelectedMonth] = useState(
    bulanIndonesia[today.getMonth()]
  );
  const [filteredRows, setFilteredRows] = useState([]);
  const [allRows, setAllRows] = useState([]);
  const [years, setYears] = useState([]);

  useEffect(() => {
    if (pegawai?.tbl_skp?.length > 0) {
      const data = pegawai.tbl_skp.map((item, index) => {
        return {
          id: item.skp_id?.toString() || `${index}`,
          sasaran_kinerja: item.skp_rencana_kinerja,
          tanggal: `${item.skp_periode}/${item.skp_tahun}`,
          bulan: item.skp_periode, 
          tahun: item.skp_tahun?.toString(),
        };
      });
  
      setAllRows(data);
  
      const uniqueYears = Array.from(new Set(data.map((r) => r.tahun))).sort(
        (a, b) => b - a
      );
      setYears(uniqueYears);
  
      if (uniqueYears.length > 0 && !selectedYear) {
        setSelectedYear(uniqueYears[0]);
      }
      
    }
  }, [pegawai]);
  

  useEffect(() => {
    if (selectedYear && selectedMonth) {
      const filtered = allRows.filter(
        (item) => item.tahun === selectedYear && item.bulan === selectedMonth
      );
      setFilteredRows(filtered);
    }
  }, [allRows, selectedYear, selectedMonth]);

  if (!pegawai || !pegawai.tbl_skp) {
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

        <FormControl size="small" sx={{ minWidth: 150 }}>
          <InputLabel id="filter-bulan">Periode SKP</InputLabel>
          <Select
            labelId="filter-bulan"
            value={selectedMonth}
            label="Filter Bulan"
            onChange={(e) => setSelectedMonth(e.target.value)}
          >
            {bulanIndonesia.map((bulan, index) => (
              <MenuItem key={index} value={bulan}>
                {bulan}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={filteredRows}
          columns={columns}
          rowHeight={45}
          pageSize={5}
          rowsPerPageOptions={[5]}
          disableSelectionOnClick
        />
      </div>
    </Box>
  );
};

export default TableIdentity;
