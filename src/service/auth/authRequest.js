import axiosInstance from '..';

export const postAuthLogin = async (data) => {
  const response = await axiosInstance.post('/auth/login', data);
  return response.data;
};
export const postAuthRegister = async (data) => {
  const response = await axiosInstance.post('/register', data);
  return response.data;
};
