import React from "react";
import { motion } from "framer-motion";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
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
            <Grid item md={12} xs={12} sx={{display:"flex",justifyContent:'end',alignItems:"end"}}>
              <FilterButtons></FilterButtons>
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
              <TableRank></TableRank>
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
                  <Typography variant="h5" component="div">
                    <TableBottom></TableBottom>
                  </Typography>
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
