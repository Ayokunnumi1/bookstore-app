import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  numOfBooks: // Initial state:
[
  {
    item_id: 'item1',
    title: 'The Great Gatsby',
    author: 'John Smith',
    category: 'Fiction',
  },
  {
    item_id: 'item2',
    title: 'Anna Karenina',
    author: 'Leo Tolstoy',
    category: 'Fiction',
  },
  {
    item_id: 'item3',
    title: 'The Selfish Gene',
    author: 'Richard Dawkins',
    category: 'Nonfiction',
  },
],
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
