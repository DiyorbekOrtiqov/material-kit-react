import axiosInstance from '..';

export const getData = async () => {
  const response = await axiosInstance.get('/dashboard/users');
  return response.data;
};

export const getProject = async () => {
  const response = await axiosInstance.get('/dashboard/projects');
  return response.data;
};

export const getDirectionsData = async () => {
  const response = await axiosInstance.get('/dashboard/jobs');
  return response.data;
};
