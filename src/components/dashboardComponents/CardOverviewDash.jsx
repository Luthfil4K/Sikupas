import React from 'react';
import { Card, CardContent, Typography, AvatarGroup, Avatar, Box, styled } from '@mui/material';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';

const TicketCard = styled(Card)(({ backgroundColor }) => ({
  backgroundColor: backgroundColor,
  color: '#fff',
  borderRadius: 8,
}));

const StyledAvatarGroup = styled(AvatarGroup)(({ theme }) => ({
  '& .MuiAvatar-root': {
    width: 32,
    height: 32,
    fontSize: '0.875rem',
  },
}));

const TicketOverviewCard = ({ title, count, icon, backgroundColor, avatars }) => {
  return (
    <TicketCard backgroundColor={backgroundColor}>
      <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
          {icon}
          <Typography variant="subtitle1">{title}</Typography>
        </Box>
        <Typography variant="h3" fontWeight="bold" sx={{ mb: 2 }}>
          {count}
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <StyledAvatarGroup max={4}>
            {avatars.map((avatar, index) => (
              <Avatar key={index} alt={`User ${index + 1}`} src={avatar} />
            ))}
          </StyledAvatarGroup>
        </Box>
      </CardContent>
    </TicketCard>
  );
};

const TicketOverviewGrid = () => {
  const cardData = [
    {
      title: 'Pegawai yang Belum Isi Aktivitas',
      count: '189',
      icon: <ChatBubbleOutlineIcon sx={{ color: '#fff', fontSize: '1.5rem' }} />,
      backgroundColor: '#F9A825',
      avatars: [
        'https://i.pravatar.cc/150?img=1',
        'https://i.pravatar.cc/150?img=2',
        'https://i.pravatar.cc/150?img=3',
        'https://i.pravatar.cc/150?img=4',
        'https://i.pravatar.cc/150?img=5',
      ],
    },
    {
      title: 'Pegawai yang Sudah Isi Aktivitas',
      count: '76',
      icon: <HourglassEmptyIcon sx={{ color: '#fff', fontSize: '1.5rem' }} />,
      backgroundColor: '#8BC34A',
      avatars: [
        'https://i.pravatar.cc/150?img=6',
        'https://i.pravatar.cc/150?img=7',
        'https://i.pravatar.cc/150?img=8',
        'https://i.pravatar.cc/150?img=9',
      ],
    },
    
  ];

  return (
    <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))', gap: 2, padding: 3 }}>
      {cardData.map((card, index) => (
        <TicketOverviewCard key={index} {...card} />
      ))}
    </Box>
  );
};

export default TicketOverviewGrid;