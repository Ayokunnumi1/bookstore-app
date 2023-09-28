import { useSelector } from 'react-redux';
import FormInput from './InputBook';
import BookList from './BookList';

const Books = () => {
  const booksArray = useSelector((state) => state.books.numOfBooks);
  return (
    <div>
      <BookList booksProps={booksArray} />
      <h3>ADD NEW BOOK</h3>
      <FormInput />
    </div>
  );
};

export default Books;
