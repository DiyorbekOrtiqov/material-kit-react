import { useQuery, useMutation } from 'react-query';

import {
  UseJob,
  UseJobGet,
  useUserSkill,
  useUseJobPut,
  useUseJobDel,
  useSettingSkill,
  useSettingSkillDel,
  useSettingSkillGet,
  useSettingSkillPut,
  useUseJobConfirmDel,
  useUserChengePassword,
  useSettingSkillDelConfirm,
} from './SettingRequest';

export const UserChengePassword = () => useMutation('ProfielImg', useUserChengePassword);

export const SetiiUserSkills = () => useQuery('UserSkills', useUserSkill);

export const SetingUserJobGet = () => useQuery('UserJob', UseJobGet);

export const SetingUserJob = () => useMutation('UserJobPost', UseJob);

export const SetingUserJobPut = () => useMutation('UserJobPut', useUseJobPut);

export const SetingUserJobDel = () => useMutation('UserJobDel', useUseJobDel);

export const SetingUserJobConfirmDel = () => useMutation('UserJobConfirmDel', useUseJobConfirmDel);

export const AddUserSkill = () => useMutation('settingSkillAdd', useSettingSkill);

export const DellUserSkill = () => useMutation('settingSkillAdd', useSettingSkillDel);

export const ConfirmDellUserSkill = () => useMutation('settingSkillAdd', useSettingSkillDelConfirm);

export const GetUserSkill = () => useQuery('SettingSkills', useSettingSkillGet);

export const PutUserSkill = () => useMutation('SettingSkillsPut', useSettingSkillPut);
