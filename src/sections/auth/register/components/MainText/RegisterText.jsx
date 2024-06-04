import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Box, Button, Typography } from '@mui/material';
// eslint-disable-next-line import/no-unresolved
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const RegisterText = () => {
  const navigate = useNavigate();
  const goback = () => {
    navigate('/login');
  };
  return (
    <Box sx={{ textAlign: 'center' }}>
      <Box onClick={goback} sx={{ position: 'absolute ', top: 10, left: 40 }}>
        <Button variant="contained">
          <ArrowBackIcon />
          goback
        </Button>
      </Box>
      <Typography variant="h3" gutterBottom>
        Create <br /> new account
      </Typography>
    </Box>
  );
};

export default RegisterText;
