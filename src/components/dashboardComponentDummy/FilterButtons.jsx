import React, { useState } from 'react';
import { Box, Button, Stack } from '@mui/material';

const FilterButtons = () => {
  const [activeFilter, setActiveFilter] = useState('minggu');

  const handleClick = (filter) => {
    setActiveFilter(filter);
    // Aksi filter data bisa ditambahkan di sini
  };

  return (
    <Box >
      <Stack direction="row" spacing={1}>
        <Button
          variant={activeFilter === 'minggu' ? 'contained' : 'outlined'}
          color={activeFilter === 'minggu' ? 'success' : 'inherit'}
          onClick={() => handleClick('minggu')}
        >
          Minggu Ini
        </Button>
        <Button
          variant={activeFilter === 'bulan' ? 'contained' : 'outlined'}
          color={activeFilter === 'bulan' ? 'success' : 'inherit'}
          onClick={() => handleClick('bulan')}
        >
          Bulan Ini
        </Button>
        <Button
          variant={activeFilter === 'tahun' ? 'contained' : 'outlined'}
          color={activeFilter === 'tahun' ? 'success' : 'inherit'}
          onClick={() => handleClick('tahun')}
        >
          Tahun Ini
        </Button>
      </Stack>
    </Box>
  );
};

export default FilterButtons;
