import { useState, useEffect, useMemo } from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Typography from "@mui/material/Typography";
import Popover from "@mui/material/Popover";

import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween";
dayjs.extend(isBetween);

const TableRekapSkpTahunan = ({ dataRekap }) => {
  // popover keperluan
  const [anchorEl, setAnchorEl] = useState(null);
  const [popoverContent, setPopoverContent] = useState({});
  const [popoverDate, setPopoverDate] = useState(null);

  const dataRekapTahunan = [
    {
      skp_id: 1,
      skp_rencana_kinerja: "RK 1",
      kegiatan: [
        {
          keg_id: 123,
          keg_deskripsi: "aktivitas a11121 ",
          keg_tanggal_awal: "2025-06-22T00:00:00.000Z",
          keg_tanggal_akhir: "2025-06-23T23:00:00.000Z",
        },
        {
          keg_id: 122,
          keg_deskripsi: "aktivitas a123 ",
          keg_tanggal_awal: "2025-05-22T00:00:00.000Z",
          keg_tanggal_akhir: "2025-05-22T23:00:00.000Z",
        },
        {
          keg_id: 121,
          keg_deskripsi: "aktivitas a133 ",
          keg_tanggal_awal: "2025-05-22T00:00:00.000Z",
          keg_tanggal_akhir: "2025-05-22T23:00:00.000Z",
        },
        {
          keg_id: 124,
          keg_deskripsi: "aktivitas a4 ",
          keg_tanggal_awal: "2025-06-22T00:00:00.000Z",
          keg_tanggal_akhir: "2025-06-22T23:00:00.000Z",
        },
      ],
    },
    {
      skp_id: 2,
      skp_rencana_kinerja: "RK 2",
      kegiatan: [
        {
          keg_id: 212,
          keg_deskripsi: "aktivitas b11 ",
          keg_tanggal_awal: "2025-05-22T00:00:00.000Z",
          keg_tanggal_akhir: "2025-05-23T00:00:00.000Z",
        },
        {
          keg_id: 222,
          keg_deskripsi: "aktivitas b22 ",
          keg_tanggal_awal: "2025-06-22T00:00:00.000Z",
          keg_tanggal_akhir: "2025-06-22T00:00:00.000Z",
        },
        {
          keg_id: 232,
          keg_deskripsi: "aktivitas b33 ",
          keg_tanggal_awal: "2025-05-22T00:00:00.000Z",
          keg_tanggal_akhir: "2025-05-22T10:00:00.000Z",
        },
        {
          keg_id: 242,
          keg_deskripsi: "aktivitas b44 ",
          keg_tanggal_awal: "2025-06-22T00:00:00.000Z",
          keg_tanggal_akhir: "2025-06-23T10:00:00.000Z",
        },
      ],
    },
    {
      skp_id: 3,
      skp_rencana_kinerja: "RK 3",
      kegiatan: [
        {
          keg_id: 323,
          keg_deskripsi: "aktivitas c11 ",
          keg_tanggal_awal: "2025-06-22T00:00:00.000Z",
          keg_tanggal_akhir: "2025-06-22T00:00:00.000Z",
        },
        {
          keg_id: 322,
          keg_deskripsi: "aktivitas c22 ",
          keg_tanggal_awal: "2025-06-22T00:00:00.000Z",
          keg_tanggal_akhir: "2025-06-22T00:00:00.000Z",
        },
        {
          keg_id: 321,
          keg_deskripsi: "aktivitas c33 ",
          keg_tanggal_awal: "2025-06-22T00:00:00.000Z",
          keg_tanggal_akhir: "2025-06-22T00:00:00.000Z",
        },
        {
          keg_id: 324,
          keg_deskripsi: "aktivitas c44 ",
          keg_tanggal_awal: "2025-05-22T00:00:00.000Z",
          keg_tanggal_akhir: "2025-05-22T00:00:00.000Z",
        },
        {
          keg_id: 324,
          keg_deskripsi: "aktivitas c44 ",
          keg_tanggal_awal: "2025-02-22T00:00:00.000Z",
          keg_tanggal_akhir: "2025-02-22T00:00:00.000Z",
        },
        {
          keg_id: 324,
          keg_deskripsi: "aktivitas c44 ",
          keg_tanggal_awal: "2025-02-22T00:00:00.000Z",
          keg_tanggal_akhir: "2025-02-22T00:00:00.000Z",
        },
        {
          keg_id: 324,
          keg_deskripsi: "aktivitas c44 ",
          keg_tanggal_awal: "2025-02-22T00:00:00.000Z",
          keg_tanggal_akhir: "2025-02-22T00:00:00.000Z",
        },
        {
          keg_id: 324,
          keg_deskripsi: "aktivitas c44 ",
          keg_tanggal_awal: "2025-02-22T00:00:00.000Z",
          keg_tanggal_akhir: "2025-02-22T00:00:00.000Z",
        },
        {
          keg_id: 324,
          keg_deskripsi: "aktivitas c44 ",
          keg_tanggal_awal: "2025-02-22T00:00:00.000Z",
          keg_tanggal_akhir: "2025-02-22T00:00:00.000Z",
        },
      ],
    },
  ];
  const bulanIndonesia = [
    { no: 1, nama: "Januari" },
    { no: 2, nama: "Februari" },
    { no: 3, nama: "Maret" },
    { no: 4, nama: "April" },
    { no: 5, nama: "Mei" },
    { no: 6, nama: "Juni" },
    { no: 7, nama: "Juli" },
    { no: 8, nama: "Agustus" },
    { no: 9, nama: "September" },
    { no: 10, nama: "Oktober" },
    { no: 11, nama: "November" },
    { no: 12, nama: "Desember" },
  ];
  const handlePopoverOpen = async (event, kegiatan, bulan) => {
    setAnchorEl(event.currentTarget);

    // Filter kegiatan berdasarkan nama bulan
    const filteredKegiatan = kegiatan.kegiatan.filter((item) => {
      const date = new Date(item.keg_tanggal_awal);
      const monthNumber = date.getMonth() + 1; // getMonth() hasilnya 0-11

      const monthName = bulanIndonesia.find((b) => b.no === monthNumber)?.nama;

      console.log(monthName);
      return monthName === bulan;
    });
    console.log(filteredKegiatan);

    setPopoverContent(filteredKegiatan);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
    setPopoverContent({});
  };

  const open = Boolean(anchorEl);

  // demo data

  // rows sama column datagrid
  const rows = useMemo(() => {
    if (!dataRekap) return dataRekapTahunan;

    return dataRekap.map((skp) => {
      const row = {
        id: skp.skp_id,
        skp_rencana_kinerja: skp.skp_rencana_kinerja,
        kegiatan: skp.kegiatan,
      };

      const aktivitasPerBulan = Array(12).fill(0); // index 0 = Jan, index 11 = Des

      skp.kegiatan.forEach((keg) => {
        const tanggal = dayjs(keg.keg_tanggal_awal); // pastikan ini valid

        const bulanIndex = tanggal.month(); // month: 0 (Jan) - 11 (Des)
        aktivitasPerBulan[bulanIndex]++;
      });

      // Simpan ke dalam row (misalnya row.month_1, month_2, dst)
      for (let i = 0; i < 12; i++) {
        row[`month_${i + 1}`] = aktivitasPerBulan[i]; // misalnya: row.month_1 = 3 kegiatan
      }

      return row;
    });
  }, [dataRekap]);

  const columns = useMemo(() => {
    const monthColumns = bulanIndonesia.map((bulan) => {
      return {
        field: `month_${bulan.no}`,
        headerName: bulan.nama,
        minWidth: 55,
        width: 75,
        disableColumnMenu: true,
        sortable: false,
        renderCell: (params) => {
          if (params.value) {
            return (
              <Box
                onClick={(e) =>
                  handlePopoverOpen(e, params.row, params.colDef.headerName)
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
                    transform: "scale(1.2)",
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                  },
                }}
              >
                <Box
                  sx={{
                    alignItems: "center",
                    display: "flex",
                    marginTop: 1,
                    backgroundColor: "#67ce5b",
                    borderRadius: 1,
                    color: "whitesmoke",
                    justifyContent: "center",
                    textAlign: "center",
                    width: 25,
                    height: 25,
                    boxShadow: "0 1px 8px rgba(0,0,0,0.15)",
                  }}
                >
                  {params.value}
                </Box>
              </Box>
            );
          }

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
        field: "skp_rencana_kinerja",
        headerName: "Rencana Kinerja",
        width: 450,
        renderCell: (params) => (
          <Typography
            sx={{
              fontSize: 12,
              whiteSpace: "normal", // agar teks bisa wrap
              wordBreak: "break-word", // agar kata panjang terpecah bila perlu
              lineHeight: 1.4,
              maxWidth: 440, // batas maksimum untuk wrap
            }}
          >
            {params.value}
          </Typography>
        ),
      },
      ...monthColumns,
    ];
  }, []);

  return (
    <>
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
          {/* <FormControl size="small" sx={{ minWidth: 150 }}>
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
          */}
        </Box>

        <div style={{ height: 400, width: "100%" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            rowHeight={45}
            pageSize={5}
            rowsPerPageOptions={[5]}
            disableSelectionOnClick
          />
        </div>

        <Popover
          open={open}
          anchorEl={anchorEl}
          onClose={handlePopoverClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
            maxWidth: 300,
          }}
        >
          <Box sx={{ p: 2 }}>
            <Typography variant="subtitle1" fontWeight="bold">
              Aktivitas {popoverDate && `(${popoverDate})`}:
            </Typography>

            {popoverContent === "loading" ? (
              <Typography variant="body2">Memuat...</Typography>
            ) : popoverContent?.length > 0 ? (
              popoverContent.map((k, i) => (
                <Typography sx={{ mb: 1 }} key={i} variant="body2">
                  • {k.keg_deskripsi}{" "}
                  <Box component="span">
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
                        // return ``;
                        return `(${formatTanggal(awal)} ${formatBulanTahun(
                          awal
                        )})`;
                      }
                    })()}
                  </Box>
                </Typography>
              ))
            ) : (
              <Typography variant="body2">Tidak ada aktivitas</Typography>
            )}
          </Box>
        </Popover>
      </Box>
    </>
  );
};

export default TableRekapSkpTahunan;
