import React from "react";
import { Card, CardContent, Typography, Button, Box } from "@mui/material";
import GroupIcon from "@mui/icons-material/Group";
import { Link } from "react-router-dom";

const CardPegawai = ({
  namaPegawai,
  jumlahCkp,
  nipPegawai,
  jabatanPegawai,
  wilayah,
}) => {
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
          <GroupIcon sx={{ color: "#1DA57A", mr: 1 }} />
          <Typography variant="body1" sx={{ fontWeight: 600 }}>
            {namaPegawai}
          </Typography>
        </Box>

        <Typography sx={{ color: "text.secondary", fontSize: 13, mt: 1 }}>
          <Box component="span" sx={{ fontWeight: "bold", color: "#1DA57A" }}>
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
              color: "#1DA57A",
              borderColor: "#1DA57A",
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
