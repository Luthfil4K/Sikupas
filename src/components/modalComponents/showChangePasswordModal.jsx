// ChangePasswordModal.js
import React, { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import {
  Typography,
  TextField,
  Box,
  Button,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { Visibility, VisibilityOff, LockOutlined } from "@mui/icons-material";
import { Unlock } from "lucide-react";

import { changePasswordPegawai } from "../../services/pegawaiServices";

// req user login infor

const MySwal = withReactContent(Swal);

export const showChangePasswordModal = () => {
  const ModalContent = () => {
    const [showOld, setShowOld] = useState(false);
    const [showNew, setShowNew] = useState(false);
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const nip = localStorage.getItem("nip");

    const handleSubmit = async () => {
      if (newPassword !== confirmPassword) {
        Swal.fire({
          icon: "error",
          title: "Passwords do not match",
        });
        return;
      }

      try {
        await changePasswordPegawai({
          nip,
          oldPassword,
          newPassword,
        });

        Swal.fire({
          icon: "success",
          title: "Password Changed",
          text: "Password updated successfully!",
          confirmButtonColor: "#f97316",
        });
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Failed",
          text: error.response?.data?.error || "Something went wrong",
        });
      }
    };

    return (
      <Box
        sx={{
          textAlign: "center",
          p: 2,
          maxWidth: 400,
          margin: "auto",
        }}
      >
        {/* Icon */}
        <Box
          sx={{
            backgroundColor: "#FFF7E7",
            borderRadius: "50%",
            width: 80,
            height: 80,
            mx: "auto",
            mb: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Unlock color="#FB8C00" size={40} />
        </Box>

        {/* Title */}
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          Change Password
        </Typography>

        {/* Description */}
        <Typography
          variant="body2"
          color="textSecondary"
          gutterBottom
          sx={{ mb: 2 }}
        >
          Masukkan kata sandi lama Anda dan buat kata sandi baru 
        </Typography>

        {/* Input Fields */}
        <TextField
          fullWidth
          label="Old Password"
          type={showOld ? "text" : "password"}
          value={oldPassword}
          onChange={(e) => setOldPassword(e.target.value)}
          margin="dense"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowOld(!showOld)} edge="end">
                  {showOld ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <TextField
          fullWidth
          label="New Password"
          type={showNew ? "text" : "password"}
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          margin="dense"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowNew(!showNew)} edge="end">
                  <LockOutlined />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <TextField
          fullWidth
          label="Confirm Password"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          margin="dense"
        />

        {/* Confirm Button */}
        <Button
          fullWidth
          variant="contained"
          sx={{
            mt: 3,
            backgroundColor: "#FB8C00",
            color: "#fff",
            fontWeight: "bold",
            "&:hover": {
              backgroundColor: "#F57C00",
            },
          }}
          onClick={async () => {
            if (newPassword !== confirmPassword) {
              Swal.fire("Error", "Passwords do not match!", "error");
              return;
            }

            try {
              await handleSubmit(); // tunggu hasil submit
              Swal.close(); // Tutup modal jika masih terbuka
              Swal.fire("Success", "Password successfully changed!", "success");
            } catch (error) {
              Swal.fire("Error", "Failed to change password!", "error");
            }
          }}
        >
          CONFIRM CHANGE
        </Button>
      </Box>
    );
  };

  MySwal.fire({
    showConfirmButton: false,
    showCancelButton: false,
    html: <ModalContent />,
    background: "#fff",
    customClass: {
      popup: "mui-sweetalert-modal",
    },
  });
};
