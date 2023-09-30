import { useEffect } from 'react';
import '../modules/Book.css';

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
    <div className="books-display-container">
      <div className="books-display">
        {loading && <p>Loading</p>}
        {error && <p>Error</p>}
        {!loading && <BookList />}
        <div className="form-input-main-container">
          <h3>ADD NEW BOOK</h3>
          <FormInput />
        </div>
      </div>
    </div>
  );
};

export default Books;
