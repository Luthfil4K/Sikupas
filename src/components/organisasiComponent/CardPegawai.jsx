import React from 'react'
import {
  Card,
  CardContent,
  Typography,
  Button,
  Box
} from "@mui/material";
import GroupIcon from "@mui/icons-material/Group";

const CardPegawai = ({namaPegawai,jumlahTimKerja}) => {
  return (
    <Card sx={{ minWidth: 275, p: 2,  boxShadow: "0 1px 15px rgba(0,0,0,0.15)"}}>
    <CardContent>
      {/* Icon dan Nama Tim */}
      <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
        <GroupIcon sx={{ color: "#1DA57A", mr: 1 }} />
        <Typography variant="h6" sx={{ fontWeight: 600 }}>
          {namaPegawai}
        </Typography>
      </Box>

      {/* Jumlah Anggota */}
      <Typography sx={{ color: "text.secondary", fontSize: 14, mb: 2 }}>
        Jumlah Tim yang Diampu: {jumlahTimKerja} Tim Kerja
      </Typography>

      {/* Tombol */}
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
    </CardContent>
  </Card>
  )
}

export default CardPegawai