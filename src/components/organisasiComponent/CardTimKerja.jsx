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

const CardTimKerja = ({ namaTim, jumlahAnggota, anggotaTim }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  console.log("anggotaTim");
  console.log(anggotaTim);
  console.log(anggotaTim);
  console.log("anggotaTim");

  const open = Boolean(anchorEl);
  const id = open ? `popover-${namaTim}` : undefined;

  return (
    <Card
      sx={{
        p: 2,
        boxShadow: "0 1px 15px rgba(0,0,0,0.15)",
        maxHeight: 200,
        height: 200,
      }}
    >
      <CardContent>
        {/* Icon dan Nama Tim */}
        <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
          <GroupIcon sx={{ color: "#1DA57A", mr: 1 }} />
          <Typography variant="body1" sx={{ fontWeight: 600 }}>
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
            color: "#1DA57A",
            borderColor: "#1DA57A",
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
                            color: "primary.main",
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
