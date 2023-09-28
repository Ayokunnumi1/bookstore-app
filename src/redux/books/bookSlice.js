import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  numOfBooks:
[
  {
    id: uuidv4(),
    title: 'The Great Gatsby',
    author: 'John Smith',
    category: 'Fiction',
  },
  {
    id: uuidv4(),
    title: 'Anna Karenina',
    author: 'Leo Tolstoy',
    category: 'Fiction',
  },
  {
    id: uuidv4(),
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
      const id = uuidv4();
      state.numOfBooks.push({ id, title, author });
    },
    removedBook: (state, action) => {
      const id = action.payload;
      state.numOfBooks = state.numOfBooks.filter((book) => book.id !== id);
    },

  },
});

export default bookSlice.reducer;
export const { addedBook, removedBook } = bookSlice.actions;
