import React, { useState } from "react";
import {
  TextField,
  IconButton,
  Button,
  Box,
  Typography,
  Paper,
  Grid,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { login } from "../services/login";

import { useTheme } from '@mui/material/styles';

const LoginPage = () => {
  const theme = useTheme()
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { token, user } = await login(username, password);
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("nip", JSON.stringify(user.nip));
      localStorage.setItem("nipLama", JSON.stringify(user.nip_bps));
      localStorage.setItem("role", user.role);
      localStorage.setItem("timKode",  JSON.stringify(user.tim_kode));
     
      window.location.href = "/organisasi";

      window.location.href = `${user.role != "anggota" ? "/organisasi" : "/profile/" + user.nip}`;

    } catch (err) {
      setError("Login gagal. Cek username/password.");
    }
  };
  

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f4f4f4",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          padding: 4,
          width: 400,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h5" sx={{ marginBottom: 3 }}>
          Login
        </Typography>

        {error && (
          <Typography color="error" variant="body2" sx={{ marginBottom: 2 }}>
            {error}
          </Typography>
        )}

        <form onSubmit={handleSubmit} style={{ width: "100%" }}>
          <TextField
            label="Username"
            variant="outlined"
            fullWidth
            margin="normal"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: theme.palette.primary.light },
                "&:hover fieldset": { borderColor: theme.palette.primary.light },
                "&.Mui-focused fieldset": { borderColor: theme.palette.primary.dark },
              },
            }}
          />
          <TextField
            label="Password"
            variant="outlined"
            fullWidth
            type={showPassword ? "text" : "password"}
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: theme.palette.primary.light },
                "&:hover fieldset": { borderColor: theme.palette.primary.light },
                "&.Mui-focused fieldset": { borderColor: theme.palette.primary.dark },
              },
            }}
            InputProps={{
              endAdornment: (
                <IconButton
                  position="end"
                  onClick={handleClickShowPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              ),
            }}
          />

          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{ marginTop: 2, backgroundColor: theme.palette.primary.dark,color:"white" }}
          >
            Login
          </Button>
        </form>

        {/* <Grid container justifyContent="center" sx={{ marginTop: 2 }}>
          <Grid item>
            <Typography variant="body2" color="text.secondary">
              Forgot password?
            </Typography>
          </Grid>
        </Grid> */}
      </Paper>
    </Box>
  );
};

export default LoginPage;
