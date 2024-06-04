// eslint-disable-next-line import/no-unresolved
import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    id: sessionStorage.getItem('HRId') ? sessionStorage.getItem('HRId') : '',
    token: sessionStorage.getItem('HRToken') ? sessionStorage.getItem('HRToken') : '',
    refresh: 0,
  },
  reducers: {
    signin: (state, action) => {
      state.id = action.payload.id;
      state.token = action.payload.token;
      state.userData = action.payload.userData;
      sessionStorage.setItem('HRId', action.payload.id);
      sessionStorage.setItem('HRToken', action.payload.token);
    },
    handleRefresh: (state) => {
      state.refresh = state.refresh === 0 ? 1 : 0;
    },
    logout: (state) => {
      state.id = '';
      state.token = '';
      sessionStorage.clear();
    },
  },
});

export const { signin, logout, handleRefresh } = authSlice.actions;

export default authSlice.reducer;
