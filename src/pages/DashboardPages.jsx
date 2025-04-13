import React from "react";
import { motion } from "framer-motion";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import LineChartDashboard from "../components/dashboardComponent/LineChartDashboard";
import BoxOne from "../components/dashboardComponent/BoxOne";
import BoxTwo from "../components/dashboardComponent/BoxTwo";
import BoxThree from "../components/dashboardComponent/BoxThree";
import BoxFour from "../components/dashboardComponent/BoxFour";
import TableRank from "../components/dashboardComponent/TableRank";
import TableBottom from "../components/dashboardComponent/TableBottom";
import FilterButtons from "../components/dashboardComponent/FilterButtons";

const DashboardPages = () => {

   const [activeFilter, setActiveFilter] = useState('minggu');
  
    const handleClick = (filter) => {
      setActiveFilter(filter);
    }
  return (
    <>
      <main className="w-full px-4">
        <motion.div
          className=""
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Grid
            bgcolor={""}
            pt={5}
            container
            spacing={4}
            sx={{ paddingLeft: 2, paddingRight: 2 }}
          >
            <Grid
              item
              md={12}
              xs={12}
              sx={{ display: "flex", justifyContent: "end", alignItems: "end" }}
            >
              <Box >
      <Stack direction="row" spacing={1}>
        <Button
          variant={activeFilter === 'minggu' ? 'contained' : 'outlined'}
          color={activeFilter === 'minggu' ? 'success' : 'inherit'}
          onClick={() => handleClick('minggu')}
        >
          Minggu Ini
        </Button>
        <Button
          variant={activeFilter === 'bulan' ? 'contained' : 'outlined'}
          color={activeFilter === 'bulan' ? 'success' : 'inherit'}
          onClick={() => handleClick('bulan')}
        >
          Bulan Ini
        </Button>
        <Button
          variant={activeFilter === 'tahun' ? 'contained' : 'outlined'}
          color={activeFilter === 'tahun' ? 'success' : 'inherit'}
          onClick={() => handleClick('tahun')}
        >
          Tahun Ini
        </Button>
      </Stack>
    </Box>
            </Grid>
            <Grid item md={3} xs={6}>
              <BoxOne></BoxOne>
            </Grid>
            <Grid item md={3} xs={6}>
              <BoxTwo></BoxTwo>
            </Grid>
            <Grid item md={3} xs={6}>
              <BoxThree></BoxThree>
            </Grid>
            <Grid item md={3} xs={6}>
              <BoxFour></BoxFour>
            </Grid>
          </Grid>
          <Grid
            container
            spacing={4}
            sx={{ paddingLeft: 2, paddingTop: 4, paddingRight: 2 }}
          >
            <Grid item md={8} xs={6}>
              <Card sx={{ minWidth: 275 }}>
                <LineChartDashboard></LineChartDashboard>
              </Card>
            </Grid>
            <Grid item md={4} xs={6}>
              <Card sx={{ minWidth: 75 }}>
                <CardContent>
                  <Typography
                    mb={2}
                    gutterBottom
                    sx={{ color: "text.secondary", fontSize: 14 }}
                  >
                    Jumlah Aktivitas Kinerja Pegawai
                  </Typography>
                  <TableRank></TableRank>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <Grid
            container
            spacing={4}
            sx={{ paddingLeft: 2, paddingTop: 4, paddingRight: 2 }}
          >
            <Grid item md={12}>
              <Card sx={{ minWidth: 75, marginBottom: 5 }}>
                <CardContent>
                  <Typography
                    mb={2}
                    gutterBottom
                    sx={{ color: "text.secondary", fontSize: 14 }}
                  >
                    Pelaksanaan Kinerja Pegawai
                  </Typography>
                  <TableBottom></TableBottom>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </motion.div>
      </main>
    </>
  );
};

export default DashboardPages;
