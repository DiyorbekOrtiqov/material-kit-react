import React, { useState } from 'react';
import { useTheme } from '@emotion/react';
import { useNavigate } from 'react-router-dom';

import { Box, Card, Stack } from '@mui/material';

// eslint-disable-next-line import/no-unresolved
import { useAuthRegisterMutation } from 'src/service/auth/authServices';

import { notifyError, notifySuccess } from 'src/components/natificatiions/toastify';

import RegistrationForm from './RegistrationForm';
import RegisterText from '../MainText/RegisterText';
import { loginViewStyles } from '../../../Login/components/Form/loginViewStyles';

const Registration = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const navigate = useNavigate();

  const { mutateAsync } = useAuthRegisterMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setPasswordError('Passwords do not match');
      return;
    }
    const data = { email, password };

    mutateAsync(data, {
      onSuccess: () => {
        notifySuccess("Muvoffaqiyatli royhatdan o'tdi!");
        navigate('/login');
      },
      onError: (error) => {
        notifyError(error?.response?.data?.message);
      },
    });
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError('');
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    setPasswordError('');
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const theme = useTheme();

  return (
    <Box
      sx={{
        ...loginViewStyles(theme),
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Stack alignItems="center" justifyContent="center">
        <Card sx={{ p: 5, width: 1, maxWidth: 450, maxHeight: 500 }}>
          <Box>
            <RegisterText />
            <RegistrationForm
              email={email}
              password={password}
              confirmPassword={confirmPassword}
              passwordError={passwordError}
              showPassword={showPassword}
              showConfirmPassword={showConfirmPassword}
              setEmail={setEmail}
              setPassword={setPassword}
              setConfirmPassword={setConfirmPassword}
              setPasswordError={setPasswordError}
              setShowPassword={setShowPassword}
              setShowConfirmPassword={setShowConfirmPassword}
              handleSubmit={handleSubmit}
              handlePasswordChange={handlePasswordChange}
              handleConfirmPasswordChange={handleConfirmPasswordChange}
              togglePasswordVisibility={togglePasswordVisibility}
              toggleConfirmPasswordVisibility={toggleConfirmPasswordVisibility}
            />
          </Box>
        </Card>
      </Stack>
    </Box>
  );
};

export default Registration;
