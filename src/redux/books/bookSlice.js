import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  numOfBooks: [],
};
const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addedBook: (state, action) => {
      state.numOfBooks += action.payload;
    },
    removedBook: (state) => {
      state.numOfBooks -= 1;
    },
  },
});

export default bookSlice.reducer;
export const { addedBook, removedBook } = bookSlice.actions;
