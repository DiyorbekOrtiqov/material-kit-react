// idSlice.js
// eslint-disable-next-line import/no-unresolved
import { createSlice } from '@reduxjs/toolkit';

const idSlice = createSlice({
  name: 'id',
  initialState: null,
  reducers: {
    setId: (state, action) => action.payload,
  },
});

export const { setId } = idSlice.actions;
export default idSlice.reducer;
