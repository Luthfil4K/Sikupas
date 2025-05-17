import React from "react";
import { Card, CardContent, Typography, Button, Box } from "@mui/material";
import GroupIcon from "@mui/icons-material/Group";
import { Link } from "react-router-dom";
import { useTheme } from '@mui/material/styles';

const CardPegawai = ({
  namaPegawai,
  jumlahCkp,
  nipPegawai,
  jabatanPegawai,
  wilayah,
}) => {
  const theme = useTheme();
  return (
    <Card
      sx={{
        p: 2,
        boxShadow: "0 1px 15px rgba(0,0,0,0.15)",
        height: "auto",
        minHeight: 200,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      {/* Konten utama */}
      <CardContent sx={{ flexGrow: 1 }}>
        <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
          <GroupIcon sx={{ color: theme.palette.primary.main, mr: 1 }} />
          <Typography variant="body1" sx={{ fontWeight: 600 }}>
            {namaPegawai}
          </Typography>
        </Box>

        <Typography sx={{ color: "text.secondary", fontSize: 13, mt: 1 }}>
          <Box component="span" sx={{ fontWeight: "bold",}}>
            {wilayah}
          </Box>{" "}
          - {jabatanPegawai?.replace(/\b(Kabupaten\/Kota|BPS)\s*/gi, "").trim()}
        </Typography>

        <Typography
          sx={{
            color: "text.secondary",
            fontSize: 13,
            fontWeight: "500",
            mt: 1,
          }}
        >
          Aktivitas Bulan Sebelumnya: {jumlahCkp || "0"} Aktivitas
        </Typography>
      </CardContent>

      {/* Tombol di bagian bawah */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          px: 2,
          pb: 2,
        }}
      >
        <Link to={`/profile/${nipPegawai}`} style={{ textDecoration: "none" }}>
          <Button
            variant="outlined"
            size="small"
            sx={{
              color: theme.palette.primary.main,
              borderColor: theme.palette.primary.main,
              textTransform: "none",
              fontWeight: 500,
            }}
          >
            Lihat
          </Button>
        </Link>
      </Box>
    </Card>
  );
};

export default CardPegawai;
