import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  status: [],
};
const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    addedStatus: (state) => {
      state.status = 'Under Construction';
    },
  },
});

export default categoriesSlice.reducer;
export const { addedStatus } = categoriesSlice.actions;
