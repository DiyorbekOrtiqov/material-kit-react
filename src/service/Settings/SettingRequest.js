import axiosInstance from "..";

export const useUserChengePassword = async (data) => {
  const response = await axiosInstance.put("/user/changePassword", data);
  return response.data;
};
export const useUserSkill = async () => {
  const response = await axiosInstance.get("/skills");
  return response.data;
};
export const UseJobGet = async () => {
  const response = await axiosInstance.get("/jobs");
  return response.data;
};
export const UseJob = async (data) => {
  const response = await axiosInstance.post("/jobs", data);
  return response.data;
};

export const useUseJobPut = async (data) => {
  const response = await axiosInstance.put("/jobs", data);
  return response.data;
};
export const useUseJobDel = async (id) => {
  const response = await axiosInstance.delete(`/jobs?id=${id}`);
  return response.data;
};
export const useUseJobConfirmDel = async (id) => {
  const response = await axiosInstance.delete(`/jobs?id=${id}&confirm=true`);
  return response.data;
};

export const useSettingSkill = async (data) => {
  const response = await axiosInstance.post("/skills", data);
  return response.data;
};
export const useSettingSkillDel = async (data) => {
  console.log(data);
  const response = await axiosInstance.delete(`/skills?id=${data}`);
  return response.data;
};
export const useSettingSkillDelConfirm = async (data) => {
  console.log(data);
  const response = await axiosInstance.delete(
    `/skills?id=${data}&confirm=true`
  );
  return response.data;
};
export const useSettingSkillGet = async () => {
  const response = await axiosInstance.get("/skills");
  return response.data;
};

export const useSettingSkillPut = async (data) => {
  const response = await axiosInstance.put("/skills", data);
  return response.data;
};
