import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { useTheme } from '@mui/material/styles';
import { Box, Card, Stack } from '@mui/material';

// eslint-disable-next-line import/no-unresolved
import { signin } from 'src/redux/authSlice';
// eslint-disable-next-line import/no-unresolved
import { useAuthLoginMutation } from 'src/service/auth/authServices';

// eslint-disable-next-line import/no-unresolved
import { notifyError } from 'src/components/natificatiions/Toastify';

import LoginForm from './components/Form/LoginView';
import { loginViewStyles } from './components/Form/loginViewStyles';
import { LoginFormBody, LoginFormHeader } from './components/Register/LoginFormBody';

const LoginView = () => {
  const theme = useTheme();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { mutate } = useAuthLoginMutation();

  const handleClick = async () => {
    const data = { email, password };

    mutate(data, {
      onSuccess: (res) => {
        dispatch(
          signin({
            id: res?.data?.id,
            token: res?.data?.token,
            userData: res?.data,
          })
        );
        navigate('/');
      },
      onError: (error) => {
        setErrorMessage(error?.response?.data?.message);
        notifyError(error?.response?.data?.message);
      },
    });
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const clickshowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Box sx={loginViewStyles(theme)}>
      <Stack alignItems="center" justifyContent="center" sx={{ height: 1 }}>
        <Card sx={{ p: 5, width: 1, maxWidth: 420 }}>
          <LoginFormHeader />
          <LoginFormBody sx={{ marginBottom: 15, marginTop: 4, color: 'red' }} />

          <LoginForm
            email={email}
            password={password}
            showPassword={showPassword}
            handleClick={handleClick}
            handleEmailChange={handleEmailChange}
            handlePasswordChange={handlePasswordChange}
            errorMessage={errorMessage}
            showPasswordIcon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'}
            chectshowPassword={showPassword}
            clickshowPassword={clickshowPassword}
          />
        </Card>
      </Stack>
    </Box>
  );
};
export default LoginView;
