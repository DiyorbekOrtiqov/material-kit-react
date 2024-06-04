import { useMutation } from 'react-query';

import { postAuthLogin, postAuthRegister } from './authRequest';

export const useAuthLoginMutation = () => useMutation('AuthLogin', postAuthLogin);

export const useAuthRegisterMutation = () => useMutation('AuthRegister', postAuthRegister);
