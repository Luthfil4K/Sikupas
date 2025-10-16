"use client";

import { useState, useMemo, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import {
  Card,
  Box,
  Grid,
  TextField,
  Select,
  MenuItem,
  FormControl,
  Typography,
  Button,
  InputLabel,
} from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Swal from "sweetalert2";
import { motion } from "framer-motion";
import { useUser } from "../context/UserContext";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

import {
  getAllStatus,
  changePegawaiStatusById,
} from "../services/pegawaiServices";

// Mock employee data
const initialEmployees = [
  {
    id: 1,
    name: "Ahmad Rizki",
    workUnit: "Jakarta Pusat",
    status: "PNS",
    timeFrom: "2023-01-15",
    timeTo: "2024-12-31",
  },
  {
    id: 2,
    name: "Siti Nurhaliza",
    workUnit: "Bandung",
    status: "Tugas Belajar",
    timeFrom: "2023-03-01",
    timeTo: "2024-08-30",
  }
];

const statusOptions = ["PNS", "TB", "CPNS", "PPPK"];

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1976d2",
    },
  },
});

const PegawaiStatus = () => {
  const [filterRegion, setFilterRegion] = useState("Semua");
  const [pegawaiStatus, setPegawaiStatus] = useState(null);
  const { userData, loadingUser } = useUser();

  const handleStatus = (id, field, value) => {
    const fetchData = async () => {
      try {
        const res = await changePegawaiStatusById(id, field, value);
        console.log("Update berhasil:", res);
      } catch (err) {
        console.error("Gagal update:", err);
      }
    };
    fetchData();
  };

 useEffect(() => {
  const fetchData = async () => {
    const getPegawaiStatus = await getAllStatus(filterRegion);
    const withModifiedDates = getPegawaiStatus.map((pegawai) => {
   
      const newPegawai = {
        ...pegawai,
        id: pegawai.nip,
      };

      return newPegawai;
    });

  
    setPegawaiStatus(withModifiedDates);
    
  };

  fetchData();
}, [filterRegion]);

  const [employees, setEmployees] = useState(initialEmployees);
  const [searchTerm, setSearchTerm] = useState("");
  const [editRow, setEditRow] = useState(null); // track row yang sedang di-edit

  // Ambil daftar unik workUnit
  const regions = [
    { label: "Semua", value: "Semua" },
    { label: "BPS Provinsi Bali", value: "5100" },
    { label: "BPS Kab Jembrana", value: "5101" },
    { label: "BPS Kab Tabanan", value: "5102" },
    { label: "BPS Kab Badung", value: "5103" },
    { label: "BPS Kab Gianyar", value: "5104" },
    { label: "BPS Kab Klungkung", value: "5105" },
    { label: "BPS Kab Bangli", value: "5106" },
    { label: "BPS Kab Karangasem", value: "5107" },
    { label: "BPS Kab Buleleng", value: "5108" },
    { label: "BPS Kota Denpasar", value: "5171" },
  ];

  // Simpan perubahan
  const handleSave = (id) => {
    Swal.fire({
      icon: "success",
      title: "Data berhasil disimpan",
      showConfirmButton: false,
      timer: 1500,
    });
    setEditRow(null);
  };

  // Edit baris
  const handleEditClick = (id) => {
    setEditRow(id);
  };

  // Filter employees berdasarkan pencarian + filter daerah
  const filteredEmployees = useMemo(() => {
  
    return pegawaiStatus
      ? pegawaiStatus.filter((employee) => {
          const matchSearch =
            !searchTerm ||
            employee.nama.toLowerCase().includes(searchTerm.toLowerCase()) ||
            employee.wilayah.toLowerCase().includes(searchTerm.toLowerCase()) ||
            employee.status.toLowerCase().includes(searchTerm.toLowerCase());

          const matchRegion =
            filterRegion === "Semua" || employee.wilayah === filterRegion;

          return matchSearch && matchRegion;
        })
      : null;
  }, [pegawaiStatus, searchTerm, filterRegion]);

  // Define DataGrid columns
  const columns = [
    {
      field: "nama",
      headerName: "Nama",
      maxWidth: 400,
      minWidth: 200,
      headerAlign: "center",
      sortable: true,
    },
    {
      field: "wilayah",
      headerName: "Satuan Kerja",
      minWidth: 250,
      sortable: true,
      headerAlign: "center",
    },
    {
      field: "status",
      headerName: "Status",
      headerAlign: "center",
      minWidth: 200,
      renderCell: (params) => {
        const isEditing = editRow === params.row.id;
        return isEditing ? (
          <FormControl size="small" fullWidth>
            <Select
              value={params.value}
              onChange={(e) => {
                const newValue = e.target.value;

                handleStatus(params.row.id, "status", newValue);
                setPegawaiStatus((prev) =>
                  prev.map((emp) =>
                    emp.id === params.row.id
                      ? { ...emp, status: newValue }
                      : emp
                  )
                );
              }}
            >
              {statusOptions.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        ) : (
          params.value
        );
      },
    },
    {
      field: "timeInfo",
      headerName: "Time Information",
      minWidth: 500,
      headerAlign: "center",
      sortable: false,
      renderCell: (params) => {
        const employee = employees.find((emp) => emp.id === params.row.id);
        const isStudy =
          employee?.status?.includes("TB") ||
          employee?.status?.toLowerCase().includes("tb") ||
          employee?.status?.toLowerCase().includes("tugas belajar");
        const isEditing = editRow === params.row.id;

        // ambil data dari tbl_status kalau ada
        const startDate = params.row.tbl_status?.pegawai_tgl_start
          ? dayjs(params.row.tbl_status.pegawai_tgl_start)
          : null;
        const endDate = params.row.tbl_status?.pegawai_tgl_end
          ? dayjs(params.row.tbl_status.pegawai_tgl_end)
          : null;

        const handleDateChange = (id, field, value) => {
   

          handleStatus(id, field, value?.format("YYYY-MM-DD"));
          setPegawaiStatus((prev) =>
            prev.map((emp) =>
              emp.id === id
                ? {
                    ...emp,
                    tbl_status: {
                      ...emp.tbl_status,
                      [field]: value ? value.format("YYYY-MM-DD") : "",
                    },
                  }
                : emp
            )
          );
        };

        return (
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Box sx={{ display: "flex", gap: 1 }}>
              <DatePicker
                value={startDate}
                onChange={(newValue) =>
                  handleDateChange(params.row.id, "pegawai_tgl_start", newValue)
                }
                disabled={!isEditing}
                slotProps={{ textField: { size: "small" } }}
              />
              <DatePicker
                value={endDate}
                onChange={(newValue) =>
                  handleDateChange(params.row.id, "pegawai_tgl_end", newValue)
                }
                disabled={!isEditing}
                slotProps={{ textField: { size: "small" } }}
              />
            </Box>
          </LocalizationProvider>
        );
      },
    },
    {
      field: "actions",
      headerName: "Aksi",
      minWidth: 150,
      headerAlign: "center",
      renderCell: (params) => {
        const isEditing = editRow === params.row.id;
        return isEditing ? (
          <Button
            variant="contained"
            color="success"
            size="small"
            onClick={() => handleSave(params.row.id)}
          >
            Simpan
          </Button>
        ) : (
          <Button
            variant="outlined"
            color="primary"
            size="small"
            onClick={() => handleEditClick(params.row.id)}
          >
            Edit
          </Button>
        );
      },
    },
  ];

  return (
    <main className="w-full px-4">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <ThemeProvider theme={theme}>
          <Card
            sx={{
              marginTop: 4,
              marginLeft: 2,
              marginRight: 2,
              height: 800,
              overflowY: "scroll",
            }}
          >
            <Grid container sx={{ p: 4 }}>
              <Grid item md={12}>
                <Typography
                  variant="h4"
                  component="h1"
                  gutterBottom
                  sx={{ mb: 4 }}
                >
                  Status Pegawai
                </Typography>

                {/* Search & Filter Row */}
                <Box sx={{ mb: 3, display: "flex", gap: 2 }}>
                  <TextField
                    variant="outlined"
                    placeholder="Cari..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    sx={{ maxWidth: 400 }}
                  />
                  <FormControl sx={{ minWidth: 200 }}>
                    <InputLabel id="filter-region-label">
                      Filter Daerah
                    </InputLabel>
                    <Select
                      labelId="filter-region-label"
                      value={filterRegion}
                      label="Filter Daerah"
                      onChange={(e) => setFilterRegion(e.target.value)}
                    >
                      {regions.map((region) => (
                        <MenuItem key={region.value} label={region.label} value={region.value}>
                          {region.label}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Box>

                {/* DataGrid */}
                <Box sx={{ height: 600, width: "100%" }}>
                  <DataGrid
                    rows={filteredEmployees}
                    columns={columns}
                    initialState={{
                      pagination: {
                        paginationModel: { page: 0, pageSize: 10 },
                      },
                    }}
                    pageSizeOptions={[5, 10, 25]}
                    checkboxSelection={false}
                    disableRowSelectionOnClick
                    sx={{
                      "& .MuiDataGrid-cell": {
                        borderBottom: "1px solid #e0e0e0",
                      },
                      "& .MuiDataGrid-columnHeaders": {
                        backgroundColor: "#f5f5f5",
                        borderBottom: "2px solid #e0e0e0",
                      },
                    }}
                  />
                </Box>
              </Grid>
            </Grid>
          </Card>
        </ThemeProvider>
      </motion.div>
    </main>
  );
};

export default PegawaiStatus;
