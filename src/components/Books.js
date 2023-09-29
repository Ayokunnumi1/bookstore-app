import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import FormInput from './InputBook';
import { getBookFromServer } from '../redux/books/bookSlice';
import BookList from './BookList';

const Books = () => {
  const { loading, error } = useSelector((state) => state.books);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBookFromServer());
  }, [dispatch]);

  return (
    <div>
      {loading && <p>Loading</p>}
      {error && <p>Error</p>}
      {!loading && <BookList />}
      <h3>ADD NEW BOOK</h3>
      <FormInput />
    </div>
  );
};

export default Books;
