import React from "react";
import { Card, CardContent, Typography, Button, Box } from "@mui/material";
import GroupIcon from "@mui/icons-material/Group";
import { Link } from "react-router-dom";

const CardPegawai = ({ namaPegawai, jumlahTim,nipPegawai }) => {
  return (
    <Card
      sx={{
        minHeight: 200,
        height: 200,
        paddingLeft: 2,
        paddingTop: 1,
        boxShadow: "0 1px 15px rgba(0,0,0,0.15)",
      }}
    >
      <CardContent>
        {/* Icon dan Nama Tim */}
        <Box sx={{ height: 100, minHeight: 100 }}>
          <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
            <GroupIcon sx={{ color: "#1DA57A", mr: 1 }} />
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              {namaPegawai}
            </Typography>
          </Box>
          {/* Jumlah Anggota */}
          <Typography sx={{ color: "text.secondary", fontSize: 14, mb: 2 }}>
            Jumlah Tim yang Diampu: {jumlahTim} Tim Kerja
          </Typography>
        </Box>

        <Box
          sx={{
            heigth: 50,
            minHeight: 50,
            display: "flex",
            justifyContent: "end",
            alignItems: "end",
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
        {/* Tombol */}
      </CardContent>
    </Card>
  );
};

export default CardPegawai;
