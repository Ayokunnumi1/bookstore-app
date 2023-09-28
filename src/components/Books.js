import { useSelector, useDispatch } from 'react-redux';
import { addedBook } from '../redux/books/bookSlice';
import FormInput from './InputBook';
import BookList from './BookList';

const Books = () => {
  const booksArray = useSelector((state) => state.books.numOfBooks);
  const dispatch = useDispatch();
  const handleUserInput = (title, author) => {
    dispatch(addedBook(booksArray, { title, author }));
  };

  return (
    <div>
      <BookList booksProps={booksArray} />
      <h3>ADD NEW BOOK</h3>
      <FormInput handleUserInput={handleUserInput} />
    </div>
  );
};

export default Books;
