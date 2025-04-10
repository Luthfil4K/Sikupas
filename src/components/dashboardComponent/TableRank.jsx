import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'No', width: 50 },
  {
    field: 'namaPegawai',
    headerName: 'Nama Pegawai',
    width: 250,
    editable: true,
  },
 
  {
    field: 'jumlahAktivitas',
    headerName: 'Jumlah Aktivitas',
    width: 150,
    editable: true,
  },
 
];

const rows = [
  { id: 1, namaPegawai: 'Jon', jumlahAktivitas: 14 },
  { id: 2, namaPegawai: 'Cersei', jumlahAktivitas: 31 },
  { id: 3, namaPegawai: 'Jaime', jumlahAktivitas: 31 },
  { id: 4, namaPegawai: 'Arya', jumlahAktivitas: 11 },
];

export default function TableRank() {
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
        disableRowSelectionOnClick
      />
    </Box>
  );
}
