import axiosInstance from "..";

export const getResumeJob = async () => {
  const response = await axiosInstance.get(`/jobs`);
  return response.data;
};
export const getResumeSkill = async () => {
  const response = await axiosInstance.get(`/skills`);
  return response.data;
};
export const getResumeRole = async () => {
  const response = await axiosInstance.get(`/role`);
  return response.data;
};
