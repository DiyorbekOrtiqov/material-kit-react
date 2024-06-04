import { useMutation } from 'react-query';

import axiosInstance from '..';

export const getProjectsData = async (currentPage, pages) => {
  if (pages === 0) {
    return [];
  }
  const response = await axiosInstance.get(`/projects?page=${currentPage}&limit=${pages}`);
  return response.data;
};
export const useProjectMutation = () =>
  useMutation((data) => axiosInstance.post('/projects', data).then((response) => response.data));

export const useProjectDelete = () => {
  const mutation = useMutation((id) => axiosInstance.delete(`/projects?id=${id}`));
  return mutation;
};

export const useProjectConfirmDelete = async (id) => {
  const response = await axiosInstance.delete(`/projects?id=${id}&confirm=true`);
  return response.data;
};

export const useProjectEditNeme = async (Projectdata) => {
  const response = await axiosInstance.put('/projects', Projectdata);
  return response.data;
};

export const ProjectInfo = async (id) => {
  const response = await axiosInstance.get(`/projects/${id}`);
  return response.data;
};
export const ProjectUser = async (Projectid) => {
  const response = await axiosInstance.get(`/projects/workers/${Projectid}`);
  return response.data;
};

export const useProjectAddUser = async (data) => {
  const response = await axiosInstance.put(`/projects/workers ${data}`);
  return response.data;
};
export const useCreateTeam = async (data) => {
  const response = await axiosInstance.post(`/projects/addUser `, data);
  return response.data;
};
