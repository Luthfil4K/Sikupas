import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Box, Card } from "@mui/material";
import { getMetabaseUrl } from "../services/metabaseServices";




const DashboardPages = () => {
  const [iframeUrl, setIframeUrl] = useState("");

  useEffect(() => {
  const fetchUrl = async () => {
    try {
      const url = await getMetabaseUrl();
      setIframeUrl(url);
    } catch (err) {
      console.error("Gagal load iframe:", err);
    }
  };

  fetchUrl();
}, []);

  console.log(iframeUrl)
  console.log(iframeUrl)
  console.log(iframeUrl)
  console.log(iframeUrl)

  

  return (
    <main className="w-full p-6">
      <Box sx={{ display: "flex", justifyContent: "flex-end", alignItems: "center", mb: 2 }} />
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} />
      <Card sx={{ width: "100%", height: "730px" }}>
       
          <iframe
            src={iframeUrl}
            frameBorder={0}
            width="100%"
            height="100%"
          />
       
      </Card>
    </main>
  );
};

export default DashboardPages;
