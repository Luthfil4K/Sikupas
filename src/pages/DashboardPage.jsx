import React, { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";
import {
  Grid,
  Box,
  Card,
  CardActions,
  CardContent,
  Button,
  Stack,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

import LineChartDashboard from "../components/dashboardComponent/LineChartDashboard";
import BoxOne from "../components/dashboardComponent/BoxOne";
import BoxTwo from "../components/dashboardComponent/BoxTwo";
import BoxThree from "../components/dashboardComponent/BoxThree";
import BoxFour from "../components/dashboardComponent/BoxFour";
import TableRank from "../components/dashboardComponent/TableRank";
import TableActivity from "../components/profileComponent/TableActivity";
import FilterButtons from "../components/dashboardComponent/FilterButtons";
import { getAllSKP, getAllCkp } from "../services/dashboardServices";
import CardTimKerjaDash from "../components/dashboardComponents/CardTimKerjaDash";
import CardOverviewDash from "../components/dashboardComponents/CardOverviewDash";
import CardTableDashboard from "../components/dashboardComponents/CardTableDashboard";
import CardChartDash from "../components/dashboardComponents/CardChartDash";
import StatCard from "../components/dashboardComponents/StatCard";

import api from "../services/api";

const DashboardPages = () => {
  return (
    <>
      <main className="w-full p-6">
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            mb: 2,
          }}
        >
          <FormControl
            size="small"
            sx={{
              minWidth: 180,
              "& .MuiOutlinedInput-root": {
                color: "white",
                "& fieldset": {
                  borderColor: "white",
                },
                "&:hover fieldset": {
                  borderColor: "white",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "white",
                },
              },
              "& .MuiInputLabel-root": {
                color: "white",
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "white",
              },
            }}
          >
            <InputLabel id="filter-label">Filter</InputLabel>
            <Select
              labelId="filter-label"
              id="filter-select"
              defaultValue="hari"
              label="Filter"
              sx={{ color: "white" }}
            >
              <MenuItem value="hari">Hari Ini</MenuItem>
              <MenuItem value="minggu">Minggu Ini</MenuItem>
              <MenuItem value="bulan">Bulan Ini</MenuItem>
              <MenuItem value="tahun">Tahun Ini</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        ></motion.div>

        <Grid container>
          <Grid item sm={12} md={8} xs={12} sx={{ padding: 1 }}>
            <Box
              sx={{ borderRadius: 1, height: 430, backgroundColor: "white" }}
            >
              {/* <datagridhere> */}
              <CardTableDashboard></CardTableDashboard>
            </Box>
          </Grid>
          <Grid item sm={12} md={4} xs={12} sx={{ padding: 1 }}>
            <Box
              sx={{
                borderRadius: 1,
                height: 430,
                overflowY: "auto",
                backgroundColor: "white",
              }}
            >
              <CardTimKerjaDash />
            </Box>
          </Grid>
          <Grid
            item
            sm={12}
            md={8}
            xs={12}
            sx={{ padding: 1 }}
          >
            <Box
              sx={{ borderRadius: 1, backgroundColor: "white", height: 330 }}
            >
              <CardChartDash></CardChartDash>
            </Box>
          </Grid>
          <Grid
            item
            sm={12}
            md={4}
            xs={12}
            sx={{ padding: 1 }}
          >
            <Box
              sx={{ borderRadius: 1, backgroundColor: "white", height: 330 }}
            >
                <CardOverviewDash></CardOverviewDash>
            </Box>
          </Grid>
        </Grid>
      </main>
    </>
  );
};

export default DashboardPages;
