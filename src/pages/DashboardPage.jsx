import React, { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Box, Card } from "@mui/material";

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
        ></Box>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        ></motion.div>
        <Card sx={{width:'100%',height:'730px' // height:'auto'
        
        
        }}>
        </Card>
      </main>
    </>
  );
};

export default DashboardPages;
