import { useState, useMemo, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import {
  Box,
  Typography,
  IconButton,
  Popover,
  MenuItem,
  Button,
  Select,
  Grid,
  FormControl,
  InputLabel,
  Divider,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";

dayjs.extend(isBetween);
dayjs.extend(isSameOrAfter);

// extend dulu sebelum dipakai
dayjs.extend(isSameOrAfter);

//get data
import { getKegDeskripsiPegawai } from "../../services/kegiatanServices";
import { getAllStatus } from "../../services/kegiatanServices";

// router
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";

// export
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import ExcelJS from "exceljs";

const TableRekap = ({
  dataPegawaiKegiatan,
  allowedFilterWilayah,
  wilayah,
  bulan,
  tahun,
  setBulan,
  setTahun,
  setSelectedWilayah,
  selectedWilayah,
  satkerWilayah,
}) => {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);
  const [popoverContent, setPopoverContent] = useState({});
  const [popoverDate, setPopoverDate] = useState(null);
  const [popoverNip, setPopoverNip] = useState(null);
  const [sortModel, setSortModel] = useState([{ field: "role", sort: "asc" }]);

  const handlePopoverOpen = async (event, nip, tanggal) => {
    setAnchorEl(event.currentTarget);
    setPopoverContent("loading");
    setPopoverDate(tanggal);
    setPopoverNip(nip);

    try {
      const response = await getKegDeskripsiPegawai(nip, tanggal);
      const response3 = await getAllStatus();
   

      setPopoverContent(response);
    } catch (error) {
      console.error("Gagal mengambil kegiatan:", error);
      setPopoverContent([]);
    }
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
    setPopoverContent({});
  };

  const open = Boolean(anchorEl);

  const daysInMonth = useMemo(() => {
    return dayjs(`${tahun}-${bulan + 1}-01`).daysInMonth();
  }, [bulan, tahun]);

  const wilayahOptions = [
    { label: "BPS Provinsi Bali", value: "5100" },
    { label: "BPS Kab Jembrana", value: "5101" },
    { label: "BPS Kab Tabanan", value: "5102" },
    { label: "BPS Kab Badung", value: "5103" },
    { label: "BPS Kab Klungkung", value: "5105" },
    { label: "BPS Kab Buleleng", value: "5108" },
    { label: "BPS Kab Bangli", value: "5106" },
    { label: "BPS Kota Denpasar", value: "5171" },
    { label: "BPS Kab Karangasem", value: "5107" },
    { label: "BPS Kab Gianyar", value: "5104" },
  ];

  const handleExportWithStyle = async () => {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Rekap");

    // Header
    const header = ["Nama Pegawai", "Satuan Kerja"];
    for (let i = 1; i <= daysInMonth; i++) {
      header.push(`Tgl ${i}`);
    }
    worksheet.addRow(header);

    // Data rows
    rows.forEach((row) => {
      const rowData = [row.nama, row.wilayah];

      for (let i = 1; i <= daysInMonth; i++) {
        const tanggal = dayjs(`${tahun}-${bulan + 1}-${i}`);
        const dayOfWeek = tanggal.day();
        const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
        const value = row[`day_${i}`];

        if (value) {
          rowData.push("✅");
        } else if (tanggal.isAfter(dayjs().startOf("day"))) {
          rowData.push("");
        } else if (isWeekend) {
          rowData.push("");
        } else {
          rowData.push("❌");
        }
      }

      const addedRow = worksheet.addRow(rowData);

      // Warnai ijo sel ceklis
      addedRow.eachCell((cell, colNumber) => {
        if (cell.value === "✅") {
          cell.font = {
            color: { argb: "FF2E7D32" }, 
          };
        }
      });
    });

    // warna kolom weekend
    for (let i = 1; i <= daysInMonth; i++) {
      const tanggal = dayjs(`${tahun}-${bulan + 1}-${i}`);
      const dayOfWeek = tanggal.day();
      const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;

      if (isWeekend) {
        const colIndex = i + 2;
        worksheet.getColumn(colIndex).eachCell((cell) => {
          cell.fill = {
            type: "pattern",
            pattern: "solid",
            fgColor: { argb: "FFF3E5F5" },
          };
        });
      }
    }

    // Export
    const buffer = await workbook.xlsx.writeBuffer();
    const blob = new Blob([buffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });
    saveAs(
      blob,
      `Rekap_Kegiatan_${tahun}_${bulan + 1}_${selectedWilayah}.xlsx`
    );
  };

  const hariLiburBali = [
    "12-02-2025",
    "22-04-2025",
    "23-04-2025",
    "24-04-2025",
    "10-09-2025",
    "18-11-2025",
    "19-11-2025",
    "20-11-2025",
  ];

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

  const columns = useMemo(() => {
    const dayColumns = Array.from({ length: daysInMonth }, (_, i) => {
      const day = i + 1;
      const currentDate = dayjs(`${tahun}-${bulan + 1}-${day}`);
      const dayOfWeek = currentDate.day(); // 0 = Minggu, 6 = Sabtu
      const tanggalStr = currentDate.format("DD-MM-YYYY");
      const semuaHariLibur = [...hariLiburNasional, ...hariLiburBali];

      const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
      const isHariLibur = semuaHariLibur.includes(tanggalStr);
      const isLiburTotal = isWeekend || isHariLibur;

      return {
        field: `day_${day}`,
        headerName: `${day}`,
        minWidth: 20,
        width: 40,
        disableColumnMenu: true,
        sortable: false,

        cellClassName: isWeekend
          ? "weekend-cell"
          : isHariLibur
          ? "holiday-cell"
          : "",
        headerClassName: isWeekend
          ? "weekend-header"
          : isHariLibur
          ? "holiday-header"
          : "",

        renderCell: (params) => {
          const value = params.value;
          const tanggal = dayjs(`${tahun}-${bulan + 1}-${day}`);
          const sekarang = dayjs().startOf("day");

          // kalo tb icon 
          if (value === "TB") {
            return (
              <Box
                onClick={(e) =>
                  handlePopoverOpen(
                    e,
                    params.row.id,
                    tanggal.format("YYYY-MM-DD")
                  )
                }
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  transition: "all 0.2s ease-in-out",
                  fontSize: 16,
                  borderRadius: 1,
                  "&:hover": {
                    transform: "scale(1.6)",
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                  },
                }}
              >
                🎓
              </Box>
            );
          }

          // 
          if (typeof value === "string") {
            return (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                  fontSize: 12,
                  fontWeight: "bold",
                }}
              >
                {value}
              </Box>
            );
          }

          // kalo true ✅
          if (value === true) {
            return (
              <Box
                onClick={(e) =>
                  handlePopoverOpen(
                    e,
                    params.row.id,
                    tanggal.format("YYYY-MM-DD")
                  )
                }
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  transition: "all 0.2s ease-in-out",
                  fontSize: 12,
                  borderRadius: 1,
                  "&:hover": {
                    transform: "scale(1.6)",
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                  },
                }}
              >
                ✅
              </Box>
            );
          }

          //  kalo setelah hari ini  kosong
          if (tanggal.isAfter(sekarang)) return null;

          // kalo  weekend ataulibur atau kosong
          if (isLiburTotal) return null;

          // kalo selain itu  ❌
          return (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
                fontSize: 12,
              }}
            >
              <span>❌</span>
            </Box>
          );
        },
      };
    });

    return [
      {
        field: "nama",
        headerName: "Nama Pegawai",
        width: 200,
        renderCell: (params) => (
          <Link
            to={`/rekapIndividu/${params.row.id}`}
            style={{
              color: "#1E40AF",
              cursor: "pointer",
            }}
          >
            {params.value}
          </Link>
        ),
      },

      { field: "role", headerName: "Role ID", width: 200, hide: true },
      { field: "wilayah", headerName: "Satuan Kerja", width: 200, hide: true },
      ...dayColumns,
    ];
  }, [bulan, tahun, daysInMonth]);

  const rows = useMemo(() => {
    if (!dataPegawaiKegiatan) return [];

    return dataPegawaiKegiatan.map((pegawai) => {
      const row = {
        id: pegawai.nip,
        nama: pegawai.nama,
        wilayah: pegawai.satker.nama_satker,
        kegiatan: pegawai.kegiatan,
        role: pegawai.role_id,
        status: pegawai.status,
        tbl_status: pegawai.tbl_status
      };

      

      const tanggalMulaiTB = row.tbl_status ? dayjs(row.tbl_status.pegawai_tgl_start).startOf("day"):'';
      const semuaHariLibur = [...hariLiburNasional, ...hariLiburBali];

      for (let i = 1; i <= daysInMonth; i++) {
        const currentDate = dayjs(`${tahun}-${bulan + 1}-${i}`).startOf("day");
        const dayOfWeek = currentDate.day(); // 0 = Minggu, 6 = Sabtu
        const tanggalStr = currentDate.format("DD-MM-YYYY");

        // kalo pegawai TB dan tanggal >= 1 Agustus → isi TB hanya di hari kerja
        if (
          pegawai.status === "TB" &&
          currentDate.isSameOrAfter(tanggalMulaiTB)
        ) {
          const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
          const isHariLibur = semuaHariLibur.includes(tanggalStr);

          if (!isWeekend && !isHariLibur) {
            row[`day_${i}`] = "TB"; // 🎓 hanya hari kerja
          } else {
            row[`day_${i}`] = null; // kosong di weekend/libur
          }
          continue;
        }

        // 👉 Logika normal untuk pegawai biasa
        const aktivitasHariIni = pegawai.kegiatan.some((keg) => {
          const awal = dayjs(keg.keg_tanggal_awal).startOf("day");
          return currentDate.isSame(awal);
        });

        row[`day_${i}`] = aktivitasHariIni;
      }

      return row;
    });
  }, [dataPegawaiKegiatan, bulan, tahun, daysInMonth, selectedWilayah]);

  const selectedWilayahLabel =
    wilayahOptions.find((opt) => opt.value === selectedWilayah)?.label || "";

  useEffect(() => {
    if (selectedWilayah != "5100") {
      setSortModel([{ field: "role", sort: "asc" }]);
    } else {
      setSortModel([{ field: "role", sort: "asc" }]);
    }
  }, [selectedWilayah]);

  return (
    <Box>
      <Grid container sx={{ mt: 2, mb: 2 }}>
        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            display: "flex",
            alignItems: "start",
            justifyContent: "start",
            flexDirection: "row",
          }}
        >
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              Rekap Pegawai - {selectedWilayahLabel}
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            display: "flex",
            alignItems: "end",
            justifyContent: "end",
            flexDirection: "row",
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: 2,

              alignItems: "end",
              justifyContent: "end",
              flexDirection: "row",
            }}
          >
            <FormControl>
              <InputLabel>Bulan</InputLabel>
              <Select
                value={bulan}
                label="Bulan"
                onChange={(e) => setBulan(e.target.value)}
                sx={{ width: 120 }}
                size="small"
              >
                {Array.from({ length: 12 }, (_, i) => (
                  <MenuItem key={i} value={i}>
                    {dayjs().month(i).format("MMMM")}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl>
              <InputLabel>Tahun</InputLabel>
              <Select
                value={tahun}
                label="Tahun"
                size="small"
                onChange={(e) => setTahun(e.target.value)}
                sx={{ width: 120 }}
              >
                {[2024, 2025, 2026].map((year) => (
                  <MenuItem key={year} value={year}>
                    {year}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            {allowedFilterWilayah && (
              <FormControl>
                <InputLabel>Wilayah</InputLabel>
                <Select
                  value={selectedWilayah}
                  label="Wilayah"
                  size="small"
                  onChange={(e) => setSelectedWilayah(e.target.value)}
                >
                  {wilayahOptions.map((option, idx) => (
                    <MenuItem key={idx} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            )}
          </Box>
        </Grid>
      </Grid>

      <Divider></Divider>
      <Grid container sx={{ marginTop: 2 }}>
        <Grid
          item
          md={12}
          xs={12}
          sx={{ display: "flex", aligntItems: "end", justifyContent: "end" }}
        >
          <Button
            onClick={handleExportWithStyle}
            variant="contained"
            sx={{ mb: 2, color: "white" }}
          >
            Export
          </Button>
        </Grid>
      </Grid>
      <DataGrid
        rows={rows}
        columns={columns}
        sortModel={sortModel}
        onSortModelChange={(model) => setSortModel(model)}
        disableSelectionOnClick
        rowHeight={32}
        pagination
        pageSizeOptions={[15, 50, 100]}
        initialState={{
          pagination: {
            paginationModel: { pageSize: 15, page: 0 },
          },
          columns: {
            columnVisibilityModel: {
              wilayah: false,
              role: false,
            },
          },
        }}
        sx={{
          maxHeight: 550,
          minHeight: 550,
          "& .weekend-cell": {
            backgroundColor: "#f3e5f5",
          },
          "& .weekend-header": {
            backgroundColor: "#ce93d8",
            fontWeight: "bold",
          },
          "& .holiday-cell": {
            backgroundColor: "#fff0ff",
          },
          "& .holiday-header": {
            backgroundColor: "#edd6f2",
            fontWeight: "bold",
          },
        }}
      />

      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handlePopoverClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "left", maxWidth: 300 }}
      >
        <Box sx={{ p: 2 }}>
          <Typography variant="subtitle1" fontWeight="bold">
            Aktivitas {popoverDate && `(${popoverDate})`}:
          </Typography>

          {popoverContent === "loading" ? (
            <Typography variant="body2">Memuat...</Typography>
          ) : popoverContent?.dataPegawai?.status === "TB" &&
            dayjs(popoverDate).isSameOrAfter(dayjs("2025-08-01")) ? (
            <Typography variant="body2">Tugas Belajar</Typography>
          ) : popoverContent.kegiatan?.length > 0 ? (
            popoverContent.kegiatan.map((k, i) => (
              <Typography key={i} variant="body2">
                • {k.keg_deskripsi}{" "}
                <Box
                  component="span"
                  sx={{ color: theme.palette.primary.main }}
                >
                  {(() => {
                    const awal = new Date(k.keg_tanggal_awal);
                    const akhir = new Date(k.keg_tanggal_akhir);

                    const formatTanggal = (tanggal) => tanggal.getDate();
                    const formatBulanTahun = (tanggal) =>
                      tanggal.toLocaleDateString("id-ID", {
                        month: "long",
                        year: "numeric",
                      });

                    if (awal.getTime() !== akhir.getTime()) {
                      return `(${formatTanggal(awal)}–${formatTanggal(
                        akhir
                      )}) ${formatBulanTahun(akhir)}`;
                    } else {
                      return ``;
                    }
                  })()}
                </Box>
              </Typography>
            ))
          ) : (
            <Typography variant="body2">Tidak Ada Aktivitas</Typography>
          )}
        </Box>
      </Popover>
    </Box>
  );
};

export default TableRekap;
