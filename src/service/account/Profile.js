import { useMutation, useQuery } from 'react-query';

import {
  UserResume,
  useUserSkill,
  useProfileImg,
  useProfileForm,
  useProfileMetaData,
  useUserResumeUplod,
  useProfileMetaEdite,
  useProfileMetaDelete,
} from './ProfileRequest';

export const ProfilForm = () => useMutation('ProfielDataPut', useProfileForm);

export const ProfilImg = () => useMutation('ProfielImg', useProfileImg);

export const UserSkill = () => useQuery('UserSkills', useUserSkill);

export const UseResume = (id) => useQuery(['UserResumeData', id], () => UserResume(id));

export const UserMedia = () =>
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useMutation((data) => useProfileMetaData(data));

export const MetadataDelete = () => useMutation('ProfileMediaDelete', useProfileMetaDelete);

export const MetadataEdite = () => useMutation('ProfileMediaEdite', useProfileMetaEdite);

export const UserResumeUplod = () => useMutation('ProfileResumeUpload', useUserResumeUplod);
