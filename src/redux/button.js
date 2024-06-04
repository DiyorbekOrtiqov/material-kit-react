// eslint-disable-next-line import/no-unresolved
import { createSlice } from '@reduxjs/toolkit';

export const buttonSlice = createSlice({
  name: 'button',
  initialState: {
    open: false,
  },
  reducers: {
    handleClickOpen: (state) => {
      state.open = true;
    },
  },
});

export const { handleClickOpen } = buttonSlice.actions;

export default buttonSlice.reducer;
