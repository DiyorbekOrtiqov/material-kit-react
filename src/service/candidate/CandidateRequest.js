import axiosInstance from '..';

export const creteCandidate = async (data) => {
  const response = await axiosInstance.post(`/register/candidate`, data);
  return response.data;
};
