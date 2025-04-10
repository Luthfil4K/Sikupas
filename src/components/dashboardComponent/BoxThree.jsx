import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {useState,useEffect} from "react";
const BoxThree = () => {
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
    
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
        console.log(size)
    }, []);
    console.log(size)


  return (
    <Card sx={{ minWidth: 75,minHeight:size<800 ? 200:100 }}>
      <CardContent>
        <Typography gutterBottom sx={{ color: "text.secondary", fontSize: 14 }}>
          Jumlah Pegawai yang Sudah Isi Aktivitas
        </Typography>
        <Typography variant="h5" component="div">
          37 Pegawai
        </Typography>
      </CardContent>
      <CardActions>
       <Button color="success" size="small" variant="outlined">
                 Lihat Detail
               </Button>
      </CardActions>
    </Card>
  );
};

export default BoxThree;
