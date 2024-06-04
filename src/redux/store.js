import { configureStore } from '@reduxjs/toolkit';

import idReducer from './idSlice';
import authReducer from './authSlice';
// eslint-disable-next-line import/no-named-as-default
import profil from './profileActions';

export default configureStore({
  reducer: {
    auth: authReducer,
    profil,
    id: idReducer,
  },
});
