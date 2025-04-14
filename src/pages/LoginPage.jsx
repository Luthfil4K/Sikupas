import React, { useState } from "react";
import { TextField, Button, Box, Typography, Paper, Grid } from "@mui/material";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validasi sederhana untuk login
    if (username === "" || password === "") {
      setError("Username and password are required.");
    } else {
      setError("");
      console.log("Logging in with", { username, password });
      // Lakukan logika login di sini
    }
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
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#1DA57A",
                },
                "&:hover fieldset": {
                  borderColor: "#1DA57A",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#1DA57A",
                },
              },
            }}
            required
          />
          <TextField
            label="Password"
            variant="outlined"
            fullWidth
            type="password"
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#1DA57A",
                },
                "&:hover fieldset": {
                  borderColor: "#1DA57A",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#1DA57A",
                },
              },
            }}
          />

          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{ marginTop: 2,backgroundColor:'#1DA57A' }}
            component={Link}
            to="/organisasi"
          >
            Login
          </Button>
        </form>

        <Grid container justifyContent="center" sx={{ marginTop: 2 }}>
          <Grid item>
            <Typography variant="body2" color="text.secondary">
              Forgot password?
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default LoginPage;
