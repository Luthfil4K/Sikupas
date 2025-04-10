import React from "react";
import { useDropzone } from "react-dropzone";
import {
  Card,
  CardContent,
  Typography,
  Box,
  Button,
  Grid,
} from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const SKPDragDrop = () => {
  const { getRootProps, getInputProps, acceptedFiles } = useDropzone();

  return (
    <Card sx={{ minWidth: 275, maxHeight: 210 }}>
      <CardContent>
        <Box
          {...getRootProps()}
          sx={{
            border: "2px dashed #82ca9d", // Warna border diganti
            borderRadius: 2,
            p: 4,
            textAlign: "center",
            backgroundColor: "#f8fdf9", // Warna latar belakang lembut
            cursor: "pointer",
            transition: "border-color 0.2s ease-in-out",
            "&:hover": {
              borderColor: "#66b98b", // Warna hover
            },
          }}
        >
          <input {...getInputProps()} />
          {acceptedFiles.length > 0 ? (
            <Button variant="contained" color="success">
              Upload
            </Button>
          ) : (
            <>
              <CloudUploadIcon sx={{ fontSize: 40, color: "#82ca9d" }} />
            </>
            //   {/* Icon hijau */}
          )}

          <Typography variant="subtitle1" sx={{ mt: 1 }}>
            {acceptedFiles.length > 0
              ? "File yang diunggah: "
              : "Tarik dan lepas file di sini, atau klik untuk memilih"}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            {acceptedFiles.length > 0 ? (
              <ul style={{ paddingLeft: 20 }}>
                {acceptedFiles.map((file) => (
                  <li key={file.path}>
                    {file.path} - {(file.size / 1024).toFixed(2)} KB
                  </li>
                ))}
              </ul>
            ) : (
              "Hanya file PDF, DOCX, atau JPG yang diperbolehkan"
            )}
          </Typography>
        </Box>

        {/* {acceptedFiles.length > 0 && (
          <Box mt={2}>
            <Typography variant="body2" fontWeight={500}>
              File yang diunggah:
            </Typography>
            <ul style={{ paddingLeft: 20 }}>
              {acceptedFiles.map((file) => (
                <li key={file.path}>
                  {file.path} - {(file.size / 1024).toFixed(2)} KB
                </li>
              ))}
            </ul>
            <Grid container>
              <Grid
                item
                md={12}
                sx={{
                  display: "flex",
                  justifyContent: "end",
                  alignItems: "end",
                }}
              >
                <Button variant="contained" color="success">
                  Upload
                </Button>
              </Grid>
            </Grid>
          </Box>
        )} */}
      </CardContent>
    </Card>
  );
};

export default SKPDragDrop;
