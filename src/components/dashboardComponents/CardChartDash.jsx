import React, { useState } from "react";
import { Tabs, Tab, Box } from "@mui/material";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import ReactWordcloud from "react-wordcloud";

// Dummy data dengan angka desimal
const lineData = [
  { week: "Minggu 1", TimA: 5.6, TimB: 7.2, TimC: 4.4, TimD: 6.1 },
  { week: "Minggu 2", TimA: 6.3, TimB: 8.1, TimC: 5.0, TimD: 7.5 },
  { week: "Minggu 3", TimA: 4.8, TimB: 6.9, TimC: 3.7, TimD: 5.2 },
  { week: "Minggu 4", TimA: 7.1, TimB: 9.3, TimC: 6.6, TimD: 8.0 },
];

// Dummy untuk Word Cloud
const words = [
  { text: "rapat", value: 20 },
  { text: "koordinasi", value: 15 },
  { text: "input", value: 10 },
  { text: "monitoring", value: 25 },
  { text: "survey", value: 18 },
];

// Custom Tooltip untuk menampilkan rentang aktivitas
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <Box sx={{ backgroundColor: "#fff", border: "1px solid #ccc", p: 1, borderRadius: 1 }}>
        <strong>{label}</strong>
        <ul style={{ paddingLeft: 12 }}>
          {payload.map((entry, index) => {
            const value = entry.value;
            const min = Math.floor(value);
            const max = Math.ceil(value);
            return (
              <li key={index} style={{ color: entry.color }}>
                {entry.name}: {min}-{max} aktivitas
              </li>
            );
          })}
        </ul>
      </Box>
    );
  }

  return null;
};

const CardChartDash = () => {
  const [value, setValue] = useState(0);
  const handleChange = (_, newValue) => setValue(newValue);

  return (
    <Box sx={{ color: "white", height: "100%", display: "flex", flexDirection: "column" }}>
      <Tabs value={value} onChange={handleChange} textColor="primary" indicatorColor="primary">
        <Tab label="Rata-rata Aktivitas Tiap Minggu" />
        <Tab label="Word Cloud Aktivitas" />
      </Tabs>

      <Box sx={{ flex: 1, p: 2 }}>
        {value === 0 && (
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={lineData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="week" />
              <YAxis />
              <Tooltip content={<CustomTooltip />} />
              <Legend />
              <Line type="monotone" dataKey="TimA" stroke="#8884d8" name="Tim A" />
              <Line type="monotone" dataKey="TimB" stroke="#82ca9d" name="Tim B" />
              <Line type="monotone" dataKey="TimC" stroke="#ffc658" name="Tim C" />
              <Line type="monotone" dataKey="TimD" stroke="#ff7300" name="Tim D" />
            </LineChart>
          </ResponsiveContainer>
        )}

        {value === 1 && (
          <Box sx={{ height: "100%", width: "100%" }}>
            <ReactWordcloud
              options={{
                rotations: 2,
                rotationAngles: [0, 90],
                fontSizes: [12, 40],
              }}
              words={words}
            />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default CardChartDash;
