import React from "react";
import { motion } from "framer-motion";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
const LineChartDashboard = () => {
  const bull = (
    <Box
      component="span"
      sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    >
      •
    </Box>
  );
  const data = [
    {
      name: "Minggu 1",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Minggu 2",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Minggu 3",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Minggu 4",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Minggu 5",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
  ];

  return (
    <div>
      <CardContent>
        <Typography mb={2} gutterBottom sx={{ color: "text.secondary", fontSize: 14 }}>
          Line Chart Aktivitas Kinerja Pegawai
        </Typography>

        <Box sx={{ width: "100%", height: 300 }}>
          <ResponsiveContainer key={data.length} width="100%" height="100%">
            <LineChart
              data={data}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="pv"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
                isAnimationActive={true}
              />
              <Line
                type="monotone"
                dataKey="uv"
                stroke="#82ca9d"
                isAnimationActive={true}
              />
            </LineChart>
          </ResponsiveContainer>
        </Box>
      </CardContent>
    </div>
  );
};

export default LineChartDashboard;
