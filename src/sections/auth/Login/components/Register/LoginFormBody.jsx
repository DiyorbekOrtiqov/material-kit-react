import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { Link } from '@mui/material';
import Typography from '@mui/material/Typography';

export function LoginFormHeader() {
  return <Typography variant="h4">Sign in to Minimal</Typography>;
}

export function LoginFormBody() {
  return (
    <Typography variant="body2" sx={{ mt: 2, mb: 4 }}>
      Don’t have an account?
      <Link
        component={RouterLink}
        to="/register"
        variant="subtitle2"
        sx={{ ml: 0.5, cursor: 'pointer' }}
      >
        Get started
      </Link>
    </Typography>
  );
}
