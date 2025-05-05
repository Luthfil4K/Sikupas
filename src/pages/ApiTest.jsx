import axios from "axios";
import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, CircularProgress, Typography } from "@mui/material";

const ApiTest = () => {
  const [rows, setRows] = useState([]);
  const [data, setData] = useState(null); // untuk simpan hasil
  const [rowsSdsn, setRowsSdsn] = useState([]);
  const [sdsn, setSdsn] = useState(null); // untuk simpan hasil
  const [rowsMsind, setRowsMsind] = useState([]);
  const [msind, setMsind] = useState(null); // untuk simpan hasil
  const [token] = useState(
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiYWY4N2U1ZjBmODBlNWVkNzMxYzhjNDE2Y2IxZTNjODI0NTdiMWY2YzhjNGFhMTFlNjc4YTUwMzQxYjEyMmJkZjRiMmMwYWYyNGY5NTk2ODYiLCJpYXQiOjE3NDUzMTUyNDguMTcwNjI3LCJuYmYiOjE3NDUzMTUyNDguMTcwNjMyLCJleHAiOjE3NzY4NTEyNDguMTUzMTIyLCJzdWIiOiIzMDAiLCJzY29wZXMiOltdfQ.LgegRloRfZL7tm3_ICYhrNHQOWTkx48aMcDvidgFe7fxjIGxi0nr_qD1XUs3npsJ0mG6tsV9f3LcMlEQtQj4nbMQ78mRNELXMTnJY3U_gf7cRjH6V_I-FUcq9jbtHGiylJD5HOzRm2ovaCySGGkH4VyL1-rtBGOVd-hr9AKXlTWcgyE1qsuSKTOdnLKypeLNG2taWOmWEr5Fs3frlxhUMUOq53Jpco1PAxAjEJyNcNKlWGw6oa3lR4Mr6W-VvYDddf60b8_WSsrFUfCMViu5dq4CrNTlOTx7Ae0MQ6Mi75htiH0iQXNWX-z9DVWJmB1AO_5BHfwK0eXFh_v8YZYEpQ"
  );
  const [loading, setLoading] = useState(true); // loading state
  const [error, setError] = useState(null); // error state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://dna.web.bps.go.id/api/metadata/msvar/list?length=10&page=1",
          {
            headers: {
              Authorization: `Bearer ${token}`,
              Accept: "*/*",
              // 'X-CSRF-TOKEN': 'jika ada'
            },
          }
        );
        setData(response.data);

        if (response.data?.status && response.data?.result?.data) {
          setRows(response.data.result.data);
        }
      } catch (error) {
        console.error("Error fetching metadata:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [token]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://dna.web.bps.go.id/api/sdsn/list?length=99&page=1",
          {
            headers: {
              Authorization: `Bearer ${token}`,
              Accept: "*/*",
              // 'X-CSRF-TOKEN': 'jika ada'
            },
          }
        );
        setSdsn(response.data);

        if (response.data?.status && response.data?.result?.data) {
          setRowsSdsn(response.data.result.data);
        }
      } catch (error) {
        console.error("Error fetching metadata:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [token]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://dna.web.bps.go.id/api/metadata/msind/list?length=10&page=1",
          {
            headers: {
              Authorization: `Bearer ${token}`,
              Accept: "*/*",
              // 'X-CSRF-TOKEN': 'jika ada'
            },
          }
        );
        setMsind(response.data);

        // if (response.data?.status && response.data?.result?.data) {
        //   setRowsSdsn(response.data.result.data);
        // }


      } catch (error) {
        console.error("Error fetching metadata:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [token]);

  if (loading) return <div>Loading data...</div>;
  if (error) return <div>Error: {error}</div>;
  console.log(rows);

  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "id_mskeg", headerName: "ID Mskeg", width: 120 },
    { field: "nama", headerName: "Nama", width: 200 },
    { field: "konsep", headerName: "Konsep", width: 250 },
    { field: "definisi", headerName: "Definisi", width: 250 },
    { field: "produsen_data_name", headerName: "Produsen Data", width: 200 },
    {
      field: "produsen_data_province_code",
      headerName: "Kode Provinsi",
      width: 150,
    },
    { field: "produsen_data_city_code", headerName: "Kode Kota", width: 130 },
    { field: "last_sync", headerName: "Last Sync", width: 100 },
    { field: "created_at", headerName: "Dibuat Pada", width: 150 },
    { field: "updated_at", headerName: "Update Terakhir", width: 150 },
    { field: "status", headerName: "Status", width: 120 },
    { field: "submission_period", headerName: "Periode", width: 130 },
  ];
  const columnsSdsn = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "kodeSds", headerName: "Kode SDS", width: 150 },
    { field: "namaData", headerName: "Nama Data", width: 200 },
    { field: "konsep", headerName: "Konsep", width: 200 },
    { field: "definisi", headerName: "Definisi", width: 200 },
    {
      field: "klasifikasiPenyajian",
      headerName: "Klasifikasi Penyajian",
      width: 200,
    },
    { field: "klasifikasiIsian", headerName: "Klasifikasi Isian", width: 200 },
    { field: "ukuran", headerName: "Ukuran", width: 150 },
    { field: "satuan", headerName: "Satuan", width: 150 },
  ];
  const columnsMsind = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "kodeSds", headerName: "Kode SDS", width: 150 },
    { field: "namaData", headerName: "Nama Data", width: 200 },
    { field: "konsep", headerName: "Konsep", width: 200 },
    { field: "definisi", headerName: "Definisi", width: 200 },
    {
      field: "klasifikasiPenyajian",
      headerName: "Klasifikasi Penyajian",
      width: 200,
    },
    { field: "klasifikasiIsian", headerName: "Klasifikasi Isian", width: 200 },
    { field: "ukuran", headerName: "Ukuran", width: 150 },
    { field: "satuan", headerName: "Satuan", width: 150 },
  ];

  return (
    <Box sx={{ height: 600, width: "100%", padding: 4 }}>
      {/* <div>
        <h2>Hasil API Eksternal:</h2>
        <pre>{JSON.stringify(msind, null, 2)}</pre>
      </div> */}

      {loading ? (
        <CircularProgress />
      ) : (
        <>
         <Box sx={{ marginBottom: 4 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              GET SDSN - Standar Data Statistik Nasional
            </Typography>
            <DataGrid
              sx={{ backgroundColor: "white",height:400 }}
              rows={rowsSdsn}
              columns={columnsSdsn}
              getRowId={(row) => row.id}
              pageSize={10}
              rowsPerPageOptions={[10, 25, 50]}
            />
          </Box>

          <Box sx={{ marginBottom: 4 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              GET MSVAR - Metadata Statistik Variabel
            </Typography>
            <DataGrid
              sx={{ backgroundColor: "white",height:400 }}
              rows={rows}
              columns={columns}
              getRowId={(row) => row.id}
              pageSize={10}
              rowsPerPageOptions={[10, 25, 50]}
            />
          </Box>

          <Box sx={{ marginBottom: 4 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              GET MSIND - Metadata Statistik Indikator
            </Typography>
            <DataGrid
              sx={{ backgroundColor: "white",height:400 }}
              rows={rowsMsind}
              columns={columnsMsind}
              getRowId={(row) => row.id}
              pageSize={10}
              rowsPerPageOptions={[10, 25, 50]}
            />
          </Box>
        </>
      )}
    </Box>
  );
};

export default ApiTest;
