import React, { useState } from "react";
import {
  Card, CardContent, Typography, Button,
  CardActions, Popover, List, ListItem, ListItemText
} from "@mui/material";

const BoxFour = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const pegawaiBelumIsi = ["Ani", "Budi", "Citra"];

  return (
    <>
      <Card sx={{ minWidth: 75 }}>
        <CardContent>
          <Typography gutterBottom sx={{ color: "text.secondary", fontSize: 14 }}>
            Jumlah Pegawai yang Sudah Isi Aktivitas
          </Typography>
          <Typography variant="h5">8 Pegawai</Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: "space-between" }}>
          <Button
            color="success"
            size="small"
            variant="outlined"
            onClick={handleClick}
          >
            Lihat Detail
          </Button>
        </CardActions>
      </Card>

      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        PaperProps={{
          sx: { p: 2, minWidth: 200 },
        }}
      >
        <Typography sx={{ fontWeight: 500, mb: 1 }}>
          Daftar Pegawai
        </Typography>
        <List dense>
          {pegawaiBelumIsi.map((nama, idx) => (
            <ListItem key={idx}>
              <ListItemText primary={nama} />
            </ListItem>
          ))}
        </List>
      </Popover>
    </>
  );
};

export default BoxFour;
