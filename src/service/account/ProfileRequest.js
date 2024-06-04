import axiosInstance from '..';

export const useProfileForm = async (data) => {
  const response = await axiosInstance.put('/user', data);
  return response.data;
};
export const useUserSkill = async () => {
  const response = await axiosInstance.get('/skills');
  return response.data;
};
export const UserResume = async (id) => {
  const response = await axiosInstance.get(`/resume/user/${id}`);

  return response.data;
};

export const useProfileMetaData = async (data) => {
  const response = await axiosInstance.post('/metadata', data);
  return response.data;
};
export const useProfileMetaDelete = async (profileId) => {
  const response = await axiosInstance.delete(`/metadata/${profileId}`);

  return response.data;
};
export const useProfileMetaEdite = async (mediaData) => {
  const response = await axiosInstance.put('/metadata', mediaData);
  return response?.data;
};
export const useProfileImg = async (formData) => {
  const response = await axiosInstance.post('/user/profileImage', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response?.data;
};
export const useUserResumeUplod = async (file) => {
  const formData = new FormData();
  formData.append('file', file);

  const response = await axiosInstance.post('/resume', formData);
  return response.data;
};
