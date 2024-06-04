import axiosInstance from '..';

export const getBirthdayData = async () => {
  const response = await axiosInstance.get('/user/birthday');
  return response.data;
};
