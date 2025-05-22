import React from 'react';
import { Box, Typography, Button, IconButton, styled } from '@mui/material';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';

const CategoryItem = styled(Box)(({ theme, color }) => ({
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(2),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  minWidth: 120,
}));

const CategoryCount = styled(Box)(({ color }) => ({
  backgroundColor: color,
  color: '#fff',
  borderRadius: 4,
  padding: '4px 8px',
  fontWeight: 'bold',
  fontSize: '0.875rem',
}));

const StatCard = () => {
  const categories = [
    { name: 'Laptop Issues', count: '65', color: '#1E856E' },
    { name: 'Finance', count: '09', color: '#F2994A' },
    { name: 'Admin', count: '11', color: '#8CC042' },
  ];

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, padding: 2 }}>
      <Typography fontWeight="bold">Top Categories</Typography>
      <Box sx={{ display: 'flex', gap: 1 }}>
        {categories.map((category) => (
          <CategoryItem key={category.name}>
            <Typography>{category.name}</Typography>
            <CategoryCount color={category.color}>{category.count}</CategoryCount>
          </CategoryItem>
        ))}
      </Box>
      <Box sx={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 1 }}>
        <IconButton size="small">
          <ArrowBackIosNewRoundedIcon fontSize="small" />
        </IconButton>
        <IconButton size="small">
          <ArrowForwardIosRoundedIcon fontSize="small" />
        </IconButton>
        <Button size="small" color="inherit">
          View All
        </Button>
      </Box>
    </Box>
  );
};

export default StatCard;