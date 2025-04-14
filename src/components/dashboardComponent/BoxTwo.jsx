import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState, useEffect } from "react";
const BoxTwo = ({ nama, jumlah }) => {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
    console.log(size);
  }, []);
  console.log(size);

  return (
    <Card sx={{ minWidth: 75, minHeight: size < 800 ? 200 : 170 }}>
      <CardContent>
        <Typography gutterBottom sx={{ color: "text.secondary", fontSize: 14 }}>
          Pegawai Paling Aktif
        </Typography>
        <Typography variant="h6" component="div">
          {nama}
        </Typography>
        {/* <Typography variant="h6" component="div">
          {jumlah} aktivitas
        </Typography> */}
         <Typography gutterBottom sx={{ color: "text.secondary", fontSize: 14 }}>
         {jumlah} aktivitas
        </Typography>
      </CardContent>
      <CardActions>
        
      </CardActions>
    </Card>
  );
};

export default BoxTwo;
