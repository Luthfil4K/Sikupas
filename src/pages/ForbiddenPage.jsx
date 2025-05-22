import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { ArrowLeft, User } from 'lucide-react';
import { motion } from 'framer-motion';

const ForbiddenPage = () => {
  return (
    <Box
      sx={{
        height: '100vh',
        width: '100%',
        bgcolor: '#f9f9f9',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        px: 2,
      }}
    >
      {/* Large Background "403" */}
      {['4', '0', '3'].map((char, idx) => (
        <Typography
          key={idx}
          sx={{
            position: 'absolute',
            top: '2%',
            left: `${25 * idx + 21}%`,
            fontSize: { xs: 100, md: 200 },
            fontWeight: 800,
            color: '#BBB9B3',
            opacity: 0.2,
            zIndex: 0,
            pointerEvents: 'none',
          }}
        >
          {char}
        </Typography>
      ))}

      {/* Door Illustration */}
      {/* <Box
        sx={{
            marginTop:20,
          position: 'relative',
          width: 120,
          height: 180,
          bgcolor: '#d7ccc8',
          borderRadius: 2,
          boxShadow: 3,
          zIndex: 1,
          mb: 4,
        }}
      >
    
        <Box
          sx={{
            position: 'absolute',
            top: '20%',
            left: '15%',
            width: '70%',
            height: '60%',
            bgcolor: '#bcaaa4',
            borderRadius: 1,
          }}
        />
   
        <Box
          sx={{
            position: 'absolute',
            right: 10,
            top: '50%',
            width: 10,
            height: 10,
            bgcolor: '#6d4c41',
            borderRadius: '50%',
          }}
        />
       
        <Box
          sx={{
            position: 'absolute',
            top: -30,
            left: '50%',
            transform: 'translateX(-50%)',
            bgcolor: '#ef5350',
            color: 'white',
            px: 1.5,
            py: 0.5,
            borderRadius: 1,
            fontSize: 12,
            fontWeight: 600,
            boxShadow: 1,
          }}
        >
          CLOSE
        </Box>
      </Box> */}

      {/* Figure using Lucide icon with subtle animation */}
      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{ zIndex: 1 }}
      >
        <User size={40} color="#90a4ae" />
      </motion.div>

      {/* Text Content */}
      <Box sx={{ textAlign: 'center', mt: 2, zIndex: 1 }}>
        <Typography color='text.secondary' variant="h4" fontWeight="bold" gutterBottom>
          We are Sorry...
        </Typography>
        <Typography variant="body2" color="text.secondary" maxWidth={300} mx="auto">
          The page you're trying to access has restricted access. Please refer to your system administrator.
        </Typography>
      </Box>

      {/* Go Back Button */}
      <Button
        variant="contained"
        startIcon={<ArrowLeft />}
        sx={{ mt: 4, zIndex: 1, bgcolor: "#FF9040", '&:hover': { bgcolor: '#FFAF76' } }}
        onClick={() => window.history.back()}
      >
        Go Back
      </Button>
    </Box>
  );
};

export default ForbiddenPage;
