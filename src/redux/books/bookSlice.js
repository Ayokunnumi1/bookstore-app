import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  numOfBooks: [],
};
const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addedBook: (state, action) => {
      state.numOfBooks.push(action.payload);
    },
    removedBook: (state, action) => {
      state.numOfBooks = state.numOfBooks.filter((book) => book.id !== action.payload);
    },
  },
});

export default bookSlice.reducer;
export const { addedBook, removedBook } = bookSlice.actions;
