import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  books: [],
  loading: false,
  error: '',
};
const appId = 'xEU2P3EW7ZDOC4O4U6Sh';
const url = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${appId}`;
export const addBookToServer = createAsyncThunk('books/addToServer', async (obj, { rejectWithValue }) => {
  try {
    await axios.post(`${url}/books`, obj);
    return obj;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});
export const getBookFromServer = createAsyncThunk('books/getFromServer', async () => {
  try {
    const response = await axios.get(`${url}/books`);
    const { data } = response;
    return Object.entries(data).map((book) => {
      const [id] = book;
      book[1][0].item_id = id;
      return book[1][0];
    });
  } catch (error) {
    return error;
  }
});
export const deleteBookFromServer = createAsyncThunk('books/deleteFromServer', async (obj) => {
  const { item_id: id } = obj;
  try {
    await axios.delete(`${url}/books/${id}`, {
      data: obj,
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return id;
  } catch (error) {
    return error;
  }
});
const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBookFromServer.pending, (state) => {
        state.loading = true;
      })
      .addCase(getBookFromServer.fulfilled, (state, action) => {
        state.loading = false;
        state.books = action.payload;
      })
      .addCase(getBookFromServer.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(addBookToServer.fulfilled, (state, action) => {
        state.books.push(action.payload);
      })
      .addCase(deleteBookFromServer.fulfilled, (state, action) => {
        const id = action.payload;
        state.books = state.books.filter((book) => book.item_id !== id);
      });
  },
});

export default booksSlice.reducer;
