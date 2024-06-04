import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line import/no-unresolved
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Box, Button, TextField, IconButton, InputAdornment } from '@mui/material';

const RegistrationForm = ({
  email,
  password,
  confirmPassword,
  passwordError,
  showPassword,
  showConfirmPassword,
  setEmail,
  handleSubmit,
  handlePasswordChange,
  handleConfirmPasswordChange,
  togglePasswordVisibility,
  toggleConfirmPasswordVisibility,
}) => (
  <Box>
    <form onSubmit={handleSubmit}>
      <TextField
        label="Email"
        variant="outlined"
        margin="normal"
        fullWidth
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <TextField
        label="Password"
        variant="outlined"
        margin="normal"
        fullWidth
        type={showPassword ? 'text' : 'password'}
        required
        value={password}
        onChange={handlePasswordChange}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={togglePasswordVisibility}>
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <TextField
        label="Confirm Password"
        variant="outlined"
        margin="normal"
        fullWidth
        type={showConfirmPassword ? 'text' : 'password'}
        required
        error={passwordError.length > 0}
        helperText={passwordError}
        value={confirmPassword}
        onChange={handleConfirmPasswordChange}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={toggleConfirmPasswordVisibility}>
                {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Register
      </Button>
    </form>
  </Box>
);

RegistrationForm.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  confirmPassword: PropTypes.string.isRequired,
  passwordError: PropTypes.string.isRequired,
  showPassword: PropTypes.bool.isRequired,
  showConfirmPassword: PropTypes.bool.isRequired,
  setEmail: PropTypes.func.isRequired,
  // eslint-disable-next-line react/no-unused-prop-types
  setPassword: PropTypes.func.isRequired,
  // eslint-disable-next-line react/no-unused-prop-types
  setConfirmPassword: PropTypes.func.isRequired,
  // eslint-disable-next-line react/no-unused-prop-types
  setPasswordError: PropTypes.func.isRequired,
  // eslint-disable-next-line react/no-unused-prop-types
  setShowPassword: PropTypes.func.isRequired,
  // eslint-disable-next-line react/no-unused-prop-types
  setShowConfirmPassword: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handlePasswordChange: PropTypes.func.isRequired,
  handleConfirmPasswordChange: PropTypes.func.isRequired,
  togglePasswordVisibility: PropTypes.func.isRequired,
  toggleConfirmPasswordVisibility: PropTypes.func.isRequired,
};

export default RegistrationForm;
