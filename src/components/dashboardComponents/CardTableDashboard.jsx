import { DataGrid } from "@mui/x-data-grid";
import { TextField, FormControl, InputLabel, Select, MenuItem, Box } from "@mui/material";
import { useState } from "react";

const CardTableDashboard = () => {
  const [searchText, setSearchText] = useState("");
  const [filterRole, setFilterRole] = useState("semua");

  const rows = [
    { id: 1, nama: "Ahmad", jabatan: "Ketua Tim", aktivitas: "Rapat Koordinasi" },
    { id: 2, nama: "Budi", jabatan: "Pegawai", aktivitas: "Input Data" },
    { id: 3, nama: "Citra", jabatan: "Pegawai", aktivitas: "Survey Lapangan" },
    { id: 4, nama: "Dina", jabatan: "Ketua Tim", aktivitas: "Monitoring" },
    { id: 5, nama: "Dina", jabatan: "Ketua Tim", aktivitas: "Monitoring" },
    { id: 6, nama: "Dina", jabatan: "Ketua Tim", aktivitas: "Monitoring" },
    { id: 7, nama: "Dina", jabatan: "Ketua Tim", aktivitas: "Monitoring" },
  ];

  const columns = [
    { field: "nama", headerName: "Nama", flex: 1 },
    { field: "jabatan", headerName: "Jabatan", flex: 1 },
    { field: "aktivitas", headerName: "Aktivitas", flex: 2 },
  ];

  const filteredRows = rows.filter((row) => {
    const matchesSearch =
      row.nama.toLowerCase().includes(searchText.toLowerCase()) ||
      row.aktivitas.toLowerCase().includes(searchText.toLowerCase());

    const matchesRole =
      filterRole === "semua" || row.jabatan.toLowerCase().includes(filterRole.toLowerCase());

    return matchesSearch && matchesRole;
  });

  return (
    <Box sx={{ height: 370, padding: 2, backgroundColor: "white", borderRadius: 1 }}>
      <Box sx={{ display: "flex", gap: 2, marginBottom: 2 }}>
        <TextField
          label="Cari aktivitas atau nama"
          variant="outlined"
          size="small"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          sx={{ flex: 1 }}
        />
        <FormControl size="small">
          <InputLabel>Role</InputLabel>
          <Select
            value={filterRole}
            label="Role"
            onChange={(e) => setFilterRole(e.target.value)}
            sx={{ minWidth: 150 }}
          >
            <MenuItem value="semua">Semua</MenuItem>
            <MenuItem value="pegawai">Pegawai</MenuItem>
            <MenuItem value="ketua tim">Ketua Tim</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <DataGrid
        rows={filteredRows}
        columns={columns}
        rowHeight={40}
        pageSize={5}
        rowsPerPageOptions={[5]}
        disableSelectionOnClick
      />
    </Box>
  );
};

export default CardTableDashboard;
