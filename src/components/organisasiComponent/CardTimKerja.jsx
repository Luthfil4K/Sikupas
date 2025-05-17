import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  Popover,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { Link } from "react-router-dom";
import GroupIcon from "@mui/icons-material/Group";

import { useTheme } from '@mui/material/styles';


const CardTimKerja = ({ namaTim, jumlahAnggota, anggotaTim }) => {

  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? `popover-${namaTim}` : undefined;

  const [cabang, setCabang] = React.useState("");

  const handleChange = (event) => {
    setCabang(event.target.value);
  };

  return (
    <Card
      sx={{
        p: 2,
        boxShadow: "0 1px 15px rgba(0,0,0,0.15)",
        height: "auto", // tinggi fleksibel
        minHeight: 200, // biar tetap stabil di desktop
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <CardContent>
        {/* Icon dan Nama Tim */}
        <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
          <GroupIcon sx={{ color: theme.palette.primary.main, mr: 1 }} />
          <Typography variant="body1" sx={{ fontSize: 15, fontWeight: 600 }}>
            {namaTim}
          </Typography>
        </Box>

        {/* Jumlah Anggota */}
        <Typography sx={{ color: "text.secondary", fontSize: 14, mb: 2 }}>
          Jumlah Anggota Tim: {jumlahAnggota} Orang
        </Typography>

        {/* Tombol */}
        <Button
          variant="outlined"
          size="small"
          sx={{
            color: theme.palette.primary.main,
            borderColor: theme.palette.primary.main,
            textTransform: "none",
            fontWeight: 500,
          }}
          onClick={handleClick}
        >
          Lihat Anggota
        </Button>

        {/* Popover */}
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
        >
          <Box sx={{ p: 2, minWidth: 200 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
              Anggota Tim:
            </Typography>

            <List dense>
              {anggotaTim && anggotaTim.length > 0 ? (
                anggotaTim.map((anggota, idx) => (
                  <ListItem key={idx} disablePadding>
                    <Link
                      to={`/profile/${anggota.pegawai?.nip}`}
                      style={{ textDecoration: "none" }} // ini biar linknya ga underline default
                    >
                      <ListItemText
                        primary={anggota.pegawai?.nama || "Tanpa Nama"}
                        primaryTypographyProps={{
                          sx: {
                            textDecoration: "underline",
                            color: "primary.dark",
                          },
                        }}
                      />
                    </Link>
                  </ListItem>
                ))
              ) : (
                <Typography variant="body2" color="text.secondary">
                  Tidak ada anggota.
                </Typography>
              )}
            </List>
          </Box>
        </Popover>
      </CardContent>
    </Card>
  );
};

export default CardTimKerja;
