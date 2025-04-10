import React, { useState } from "react";
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
import {
  Box,
  Card,
  CardContent,
  Typography,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";

const LineChartIdentity = () => {
  const allData = {
    Januari: [
      { name: "Minggu 1", Rerata: 4000, Budi: 2400 },
      { name: "Minggu 2", Rerata: 3000, Budi: 1398 },
      { name: "Minggu 3", Rerata: 2000, Budi: 9800 },
      { name: "Minggu 4", Rerata: 2780, Budi: 3908 },
    ],
    Februari: [
      { name: "Minggu 1", Rerata: 1890, Budi: 4800 },
      { name: "Minggu 2", Rerata: 2390, Budi: 3800 },
      { name: "Minggu 3", Rerata: 3490, Budi: 4300 },
      { name: "Minggu 4", Rerata: 3000, Budi: 3200 },
    ],
    Maret: [
      { name: "Minggu 1", Rerata: 2200, Budi: 2100 },
      { name: "Minggu 2", Rerata: 2900, Budi: 2500 },
      { name: "Minggu 3", Rerata: 3100, Budi: 3700 },
      { name: "Minggu 4", Rerata: 4000, Budi: 4500 },
    ],
  };

  const [selectedMonth, setSelectedMonth] = useState("Januari");
  const [mode, setMode] = useState("Mingguan");

  // Gabungkan semua data mingguan dari semua bulan
  const allWeeksData = Object.entries(allData).flatMap(([month, weeks]) =>
    weeks.map((item, index) => ({
      ...item,
      name: `${month} - ${item.name}`,
    }))
  );

  // Tentukan data yang ditampilkan berdasarkan mode
  const chartData =
    mode === "Mingguan" ? allWeeksData : allData[selectedMonth] || [];

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        {/* Header & Filters */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 2,
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          <Typography variant="h6">Statistik Aktivitas</Typography>

          <Box sx={{ display: "flex", gap: 2 }}>
            {/* Mode Filter */}
            <FormControl size="small" sx={{ minWidth: 120 }}>
              <InputLabel>Mode</InputLabel>
              <Select
                value={mode}
                label="Mode"
                onChange={(e) => setMode(e.target.value)}
              >
                <MenuItem value="Mingguan">Mingguan</MenuItem>
                <MenuItem value="Bulanan">Bulanan</MenuItem>
              </Select>
            </FormControl>

            {/* Bulan Filter */}
            <FormControl size="small" sx={{ minWidth: 150 }} disabled={mode === "Mingguan"}>
              <InputLabel>Bulan</InputLabel>
              <Select
                value={selectedMonth}
                label="Bulan"
                onChange={(e) => setSelectedMonth(e.target.value)}
              >
                {Object.keys(allData).map((month) => (
                  <MenuItem key={month} value={month}>
                    {month}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        </Box>

        {/* Chart */}
        <Box sx={{ width: "100%", height: 300 }}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={chartData}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="Budi"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
                isAnimationActive={true}
              />
              <Line
                type="monotone"
                dataKey="Rerata"
                stroke="#82ca9d"
                isAnimationActive={true}
              />
            </LineChart>
          </ResponsiveContainer>
        </Box>
      </CardContent>
    </Card>
  );
};

export default LineChartIdentity;
