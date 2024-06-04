import { useSelector } from 'react-redux';
import { useQuery, useMutation } from 'react-query';

import { getUserData, UserDataUpdate } from './UserRequest';

export const useUserData = () => {
  const user = useSelector((state) => state.auth);
  const { id } = user;
  return useQuery('UserData', () => getUserData(id));
};

export const useUserDataPut = () => useMutation(UserDataUpdate);
