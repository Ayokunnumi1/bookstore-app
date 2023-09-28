/* eslint-disable camelcase */
import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  numOfBooks: // Initial state:
[
  {
    item_id: uuidv4(),
    title: 'The Great Gatsby',
    author: 'John Smith',
    category: 'Fiction',
  },
  {
    item_id: uuidv4(),
    title: 'Anna Karenina',
    author: 'Leo Tolstoy',
    category: 'Fiction',
  },
  {
    item_id: uuidv4(),
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
      const { title, author } = action.payload;
      const item_id = uuidv4();
      state.numOfBooks.push({ item_id, title, author });
    },
    removedBook: (state, action) => {
      const item_id = action.payload;
      state.numOfBooks = state.numOfBooks.filter((book) => book.item_id !== item_id);
    },

  },
});

export default bookSlice.reducer;
export const { addedBook, removedBook } = bookSlice.actions;
