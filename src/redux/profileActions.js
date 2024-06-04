// eslint-disable-next-line import/no-unresolved
import { createSlice } from '@reduxjs/toolkit';

export const profil = createSlice({
  name: 'profil',
  initialState: {
    mediaLink: [],
  },
  reducers: {
    setMediaLink: (state, action) => {
      state.mediaLink = action.payload;
    },
  },
});

export const { setMediaLink } = profil.actions;

export default profil.reducer;
