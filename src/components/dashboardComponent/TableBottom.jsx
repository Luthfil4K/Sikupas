import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';

const columns = [
  { field: "id", headerName: "No", width: 90 },
  {
    field: "namaPegawai",
    headerName: "Nama Pegawai",
    width: 200,
  },
  {
    field: "tanggal",
    headerName: "Tanggal",
    width: 150,
  },
  {
    field: "rencanaKinerja",
    headerName: "Rencana Kinerja",
    width: 300,
  },
  {
    field: "kegiatan",
    headerName: "Kegiatan",
    width: 300,
  },
  {
    field: "capaian",
    headerName: "Capaian",
    width: 300,
  },
  {
    field: "buktiDukung",
    headerName: "Bukti Dukung",
    width: 150,
    renderCell: (params) => (
      <Button
        variant="contained"
        color="Success"
        size="small"
        onClick={() => handleButtonClick(params.row)}
      >
        Lihat
      </Button>
    ),
  },
];

const rows = [
  { id: 1, namaPegawai: 'Jon', tanggal: 14,rencanaKinerja:"a",kegiatan:"b", capaian:'c',buktiDukung:""  },
  { id: 2, namaPegawai: 'Jong', tanggal: 14,rencanaKinerja:"a",kegiatan:"b", capaian:'c',buktiDukung:""  },
  { id: 3, namaPegawai: 'Wong', tanggal: 14,rencanaKinerja:"a",kegiatan:"b", capaian:'c',buktiDukung:""  },
  { id: 4, namaPegawai: 'Don', tanggal: 14,rencanaKinerja:"a",kegiatan:"b", capaian:'c',buktiDukung:""  },
  { id: 5, namaPegawai: 'Son', tanggal: 14,rencanaKinerja:"a",kegiatan:"b", capaian:'c',buktiDukung:""  },
  
];
const TableBottom = () => {
  return (
    <Box bgColor={'white'} sx={{backgroundColor:'white', height: 365, width: '100%', borderRadius:2 }}>
    <DataGrid
    sx={{borderRadius:2}}
      rows={rows}
      columns={columns}
      initialState={{
        pagination: {
          paginationModel: {
            pageSize: 5,
          },
        },
      }}
      pageSizeOptions={[5]}
    //   checkboxSelection
      disableRowSelectionOnClick
      
    />
  </Box>
  )
}

export default TableBottom