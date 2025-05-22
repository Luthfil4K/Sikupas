import { useState, useMemo, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import {
  Box,
  Typography,
  IconButton,
  Popover,
  MenuItem,
  Select,
  Grid,
  FormControl,
  InputLabel,
  Divider,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween";
dayjs.extend(isBetween);

//get data
import { getKegDeskripsiPegawai } from "../../services/kegiatanServices";

// router
import { Link } from "react-router-dom";

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
  const [anchorEl, setAnchorEl] = useState(null);
  const [popoverContent, setPopoverContent] = useState({});
  const [popoverDate, setPopoverDate] = useState(null);
  const [popoverNip, setPopoverNip] = useState(null);

  const handlePopoverOpen = async (event, nip, tanggal) => {
    setAnchorEl(event.currentTarget);
    setPopoverContent("loading");
    setPopoverDate(tanggal);
    setPopoverNip(nip);

    try {
      const response = await getKegDeskripsiPegawai(nip, tanggal);
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

  // const wilayahOptions = useMemo(() => {
  //   if (!dataPegawaiKegiatan) return [];
  //   const wilayahSet = new Set(
  //     dataPegawaiKegiatan.map((p) => p.satker.nama_satker)
  //   );
  //   return ["Semua", ...Array.from(wilayahSet)];
  // }, [dataPegawaiKegiatan]);

  const columns = useMemo(() => {
    const dayColumns = Array.from({ length: daysInMonth }, (_, i) => {
      const day = i + 1;
      const currentDate = dayjs(`${tahun}-${bulan + 1}-${day}`);
      const dayOfWeek = currentDate.day(); // 0 = Minggu, 6 = Sabtu
      const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
      return {
        field: `day_${day}`,
        headerName: `${day}`,
        width: 55,
        disableColumnMenu: true,
        sortable: false,
        cellClassName: isWeekend ? "weekend-cell" : "",
        headerClassName: isWeekend ? "weekend-header" : "",
        renderCell: (params) => {
          const day = params.colDef.field.split("_")[1];
          const tanggal = dayjs(`${tahun}-${bulan + 1}-${day}`);
          const isWeekend = tanggal.day() === 6 || tanggal.day() === 0;
          const sekarang = dayjs().startOf("day");

          if (params.value) {
            return (
             
                <IconButton
                  size="small"
                
                  onClick={(e) =>
                    handlePopoverOpen(
                      e,
                      params.row.id,
                      tanggal.format("YYYY-MM-DD")
                    )
                  }
                >
                  ✅
                </IconButton>
             
            );
          }

          // Tanggal di masa depan, kosongkan saja
          if (tanggal.isAfter(sekarang)) return null;

          // Jika tidak ada kegiatan dan hari weekend, kosongkan
          if (isWeekend) return null;

          // Tidak ada kegiatan dan bukan weekend, tampilkan silang
          return (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
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
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            {params.value}
          </Link>
        ),
      },

      { field: "wilayah", headerName: "Satuan Kerja", width: 200, hide: true },
      ...dayColumns,
    ];
  }, [bulan, tahun, daysInMonth]);

  const rows = useMemo(() => {
    if (!dataPegawaiKegiatan) return [];

    // const filtered =
    //   selectedWilayah === "Semua"
    //     ? dataPegawaiKegiatan
    //     : dataPegawaiKegiatan.filter(
    //         (p) => p.satker.nama_satker === selectedWilayah
    //       );

    // console.log("filtered")
    // console.log(filtered)
    return dataPegawaiKegiatan.map((pegawai) => {
      const row = {
        id: pegawai.nip,
        nama: pegawai.nama,
        wilayah: pegawai.satker.nama_satker,
        kegiatan: pegawai.kegiatan,
      };

      for (let i = 1; i <= daysInMonth; i++) {
        const currentDate = dayjs(`${tahun}-${bulan + 1}-${i}`).startOf("day");

        const aktivitasHariIni = pegawai.kegiatan.filter((keg) => {
          const awal = dayjs(keg.keg_tanggal_awal).startOf("day");
          const akhir = dayjs(keg.keg_tanggal_akhir).startOf("day");
          return currentDate.isBetween(
            awal.subtract(1, "day"),
            akhir.add(1, "day")
          );
        });

        row[`day_${i}`] = aktivitasHariIni.length > 0;
      }

      return row;
    });
  }, [dataPegawaiKegiatan, bulan, tahun, daysInMonth, selectedWilayah]);

  // console.log("dataPegawaiKegiatan")
  // console.log(dataPegawaiKegiatan)

  // console.log("rows")
  // console.log(rows)

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
              Rekap Pegawai - {satkerWilayah}
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

      <DataGrid
        rows={rows}
        columns={columns}
        disableSelectionOnClick
        pagination
        pageSizeOptions={[15, 50, 100]}
        initialState={{
          pagination: {
            paginationModel: { pageSize: 15, page: 0 },
          },
          columns: {
            columnVisibilityModel: {
              wilayah: false, // Sembunyikan kolom "wilayah"
            },
          },
        }}
        sx={{
          maxHeight: 600,
          "& .weekend-cell": {
            backgroundColor: "#f3e5f5",
          },
          "& .weekend-header": {
            backgroundColor: "#ce93d8",
            fontWeight: "bold",
          },
        }}
      />

      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handlePopoverClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      >
        <Box sx={{ p: 2 }}>
          <Typography variant="subtitle1" fontWeight="bold">
            Aktivitas {popoverDate && `(${popoverDate})`}:
          </Typography>

          {popoverContent === "loading" ? (
            <Typography variant="body2">Memuat...</Typography>
          ) : popoverContent.kegiatan?.length > 0 ? (
            popoverContent.kegiatan.map((k, i) => (
              <Typography key={i} variant="body2">
                • {k.keg_deskripsi}
              </Typography>
            ))
          ) : (
            <Typography variant="body2">Tidak ada aktivitas</Typography>
          )}
        </Box>
      </Popover>
    </Box>
  );
};

export default TableRekap;
