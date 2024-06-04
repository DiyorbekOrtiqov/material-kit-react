import React from 'react';
import PropTypes from 'prop-types';

import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import LoadingButton from '@mui/lab/LoadingButton';
import InputAdornment from '@mui/material/InputAdornment';

import Iconify from 'src/components/iconify';

import ErrorMessage from '../Error/ErrorMessage';

export default function LoginForm({
  email,
  password,
  handleClick,
  isLoading,
  handleEmailChange,
  handlePasswordChange,
  clickshowPassword,
  showPassword,
  errorMessage,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    handleClick();
  };
  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={3}>
        <TextField name="email" label="Email" value={email} onChange={handleEmailChange} />
        <TextField
          name="password"
          label="Password"
          type={showPassword ? 'text' : 'password'}
          value={password}
          onChange={handlePasswordChange}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={clickshowPassword} edge="end">
                  <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Stack>

      <ErrorMessage errorMessage={errorMessage} />

      <Stack direction="row" alignItems="center" justifyContent="flex-end" sx={{ my: 1 }} />

      <LoadingButton
        fullWidth
        size="large"
        type="submit"
        variant="contained"
        color="inherit"
        onClick={handleClick}
        disabled={isLoading}
      >
        Login
      </LoadingButton>
    </form>
  );
}

LoginForm.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  showPassword: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  handleEmailChange: PropTypes.func.isRequired,
  handlePasswordChange: PropTypes.func.isRequired,
  clickshowPassword: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
};
