import axiosInstance from '..';

export const getUserData = async (id) => {
  const response = await axiosInstance.get(`/user/${id}`);
  return response.data;
};

export const getUserTableData = async (page, rowsPerPage) => {
  const response = await axiosInstance.get(`/user?page=${page + 1}&limit=${rowsPerPage}`);
  return response.data;
};
export const getUserTableDataEmpoloyee = async (page, rowsPerPage) => {
  const response = await axiosInstance.get(
    `/user?page=${page + 1}&limit=${rowsPerPage}&type="USER`
  );
  console.log(response);
  return response.data;
};
export const getUserTableDataEmpoloyeeData = async (page, rowsPerPage) => {
  const response = await axiosInstance.get(`/user?page=${1}&limit=${100}&type=EMPLOYEE`);
  return response.data;
};

export const getUsertableFilter = async (filterName, page, rowsPerPage) => {
  const response = await axiosInstance.get(
    `/user?page=${page + 1}&limit=${rowsPerPage}&search=${filterName}`
  );
  return response.data;
};

export const getyUserBithday = async () => {
  const response = await axiosInstance.get(`/user/birthday`);
  return response?.data?.data;
};
export const UserDataUpdate = async (data) => {
  const response = await axiosInstance.put(`/user `, data);
  return response.data.data;
};
export const UserDataDel = async (id) => {
  const response = await axiosInstance.delete(`/user/${id} `);
  return response.data.data;
};
