import React from "react";
import {
  Card,
  CardContent,
  Avatar,
  Typography,
  Box,
  AvatarGroup,
  Button,
  Grid,
  Stack,
} from "@mui/material";
import { TrendingUp } from "@mui/icons-material"; // Or a similar icon from Material UI
import { styled } from "@mui/material/styles";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // jika pakai React Router
import { Users, Briefcase, BarChart3, FileBarChart2 } from "lucide-react";

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  width: theme.spacing(10),
  height: theme.spacing(10),
  margin: "0 auto",
  marginBottom: theme.spacing(2),
}));

const TrendLine = styled(Box)(({ color }) => ({
  width: "50px",
  height: "20px",
  // You would likely use an SVG or a library for drawing these lines dynamically
  // For this example, we'll use a placeholder background image or inline SVG
  backgroundImage: `url('data:image/svg+xml,%3Csvg width="50" height="20" viewBox="0 0 50 20" fill="none" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M2 18C10.5 2 24.5 15 33 7C41.5 -1 48 12 48 2" stroke="${color}" strokeWidth="2" strokeLinecap="round"/%3E%3C/svg%3E')`,
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
}));

const avatars = [
  "https://i.pravatar.cc/150?img=1",
  "https://i.pravatar.cc/150?img=2",
  "https://i.pravatar.cc/150?img=3",
  "https://i.pravatar.cc/150?img=4",
  "https://i.pravatar.cc/150?img=5",
];

const TicketCard = styled(Card)(({ backgroundColor }) => ({
  backgroundColor: backgroundColor,
  color: "#fff",
  borderRadius: 8,
}));

const StyledAvatarGroup = styled(AvatarGroup)(({ theme }) => ({
  "& .MuiAvatar-root": {
    width: 32,
    height: 32,
    fontSize: "0.875rem",
  },
}));

const TeamCard = ({
  name,
  title,
  ketuaTim,
  timKerja,
  aktivitas,
  avatarSrc,
  trendColor,
  deals,
}) => {
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate(); // Navigasi ke profil

  

  return (
    <Card
      sx={{
        width: "100%",
        display: "flex",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
        position: "relative",
        overflow: "hidden",
        alignItems: "center",
        minHeight: 120,
        padding: 2,
        borderRadius: 2,
        mb: 2,
        backgroundColor: "#fff",
      }}
    >
      <Avatar
        src={avatarSrc}
        sx={{
          width: 64,
          height: 64,
          mr: 2,
        }}
      />

      <CardContent sx={{ flex: 1, padding: 0 }}>
        <Grid container>
          <Grid item xs={6} md={6}>
            <Typography variant="subtitle1" fontWeight="bold">
              {timKerja}
            </Typography>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              Ketua: {ketuaTim}
            </Typography>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                width:"50%",
                gap: 1,
              }}
            >
              <Typography variant="subtitle2" fontWeight="bold">
                {aktivitas}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Aktivitas
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            xs={6}
            md={6}
            sx={{ display: "flex", flexDirection: "column", alignItems: "end" }}
          >
            <Box
              sx={{ height: 40 }}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              <motion.div
                layout
                animate={{ scale: hovered ? 1.1 : 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <StyledAvatarGroup max={hovered ? avatars.length : 4}>
                  {avatars.map((avatar, index) => (
                    <Avatar
                      key={index}
                      alt={`User ${index + 1}`}
                      src={avatar}
                      onClick={() => navigate(`/profil/${index + 1}`)}
                      sx={{
                        cursor: "pointer",
                        transition: "transform 0.2s",
                        "&:hover": {
                          transform: "scale(1.2)",
                        },
                      }}
                    />
                  ))}
                </StyledAvatarGroup>
              </motion.div>
            </Box>
            <Button size="small" variant="outlined" sx={{ width: 100 }}>
              Detail
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

const dummyData = [
  {
    timKerja: "Tim Statistik Sosial",
    ketuaTim: "Budi Santoso",
    aktivitas: 12,
    avatarSrc: "https://i.pravatar.cc/150?img=8",
    avatars: [
      "https://i.pravatar.cc/150?img=1",
      "https://i.pravatar.cc/150?img=2",
      "https://i.pravatar.cc/150?img=3",
    ],
  },
  {
    timKerja: "Tim Produksi",
    ketuaTim: "Rina Putri",
    aktivitas: 8,
    avatarSrc: "https://i.pravatar.cc/150?img=6",
    avatars: [
      "https://i.pravatar.cc/150?img=4",
      "https://i.pravatar.cc/150?img=5",
    ],
  },
  {
    timKerja: "Tim Produksi",
    ketuaTim: "Rina Putri",
    aktivitas: 8,
    avatarSrc: "https://i.pravatar.cc/150?img=6",
    avatars: [
      "https://i.pravatar.cc/150?img=4",
      "https://i.pravatar.cc/150?img=5",
    ],
  },
];

const iconMap = {
  "Tim Statistik Sosial": { icon: Users, color: "#1DA57A" },
  "Tim Produksi": { icon: Briefcase, color: "#1890FF" },
  "Tim Distribusi": { icon: BarChart3, color: "#F5222D" },
  "Tim Neraca": { icon: FileBarChart2, color: "#722ED1" },
};

const CardTimKerjaDash = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        p: 2,
        overflowY: "auto",
        height: "100%",
      }}
    >
      {dummyData.map((item, index) => (
        <TeamCard
          key={index}
          timKerja={item.timKerja}
          ketuaTim={item.ketuaTim}
          aktivitas={item.aktivitas}
          avatarSrc={item.avatarSrc}
          avatars={item.avatars}
          trendColor="#1DA57A"
        />
      ))}
    </Box>
  );
};

export default CardTimKerjaDash;
