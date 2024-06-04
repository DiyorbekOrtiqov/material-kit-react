import { useQuery, useMutation } from 'react-query';

import {
  ProjectInfo,
  ProjectUser,
  useCreateTeam,
  getProjectsData,
  useProjectDelete,
  useProjectAddUser,
  useProjectEditNeme,
  useProjectConfirmDelete,
} from './ProjectRequest';

export const useProjectsData = (currentPage, pages) =>
  useQuery(['ProjectsData', currentPage, pages], () => getProjectsData(currentPage, pages));

export const ProjectDelete = () => useMutation('ProjectsDelete', useProjectDelete());

export const ProjectConfirmDelete = () =>
  useMutation('ProjectsconfirmDelete', useProjectConfirmDelete);

export const ProjectEditName = () => useMutation('ProjectsEdit', useProjectEditNeme);

export const ProjectTimeLider = (id) =>
  useQuery(['ProjectsTimliser', id], () => ProjectInfo(id), {
    enabled: !!id,
  });
export const ProjectUserList = (Projectid) =>
  useQuery(['ProjectsUserList', Projectid], () => ProjectUser(Projectid));

export const ProjectAddUser = (data) => useMutation(' ProjectAdduser', useProjectAddUser(data));

export const CreatTeam = () => useMutation(' CreateTeam', useCreateTeam);
