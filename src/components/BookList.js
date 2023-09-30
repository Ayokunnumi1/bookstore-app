import { useSelector } from 'react-redux';
import BookItem from './BookItem';

const BookList = () => {
  const { books } = useSelector((state) => state.books);
  return (
    <ul>
      {
        books.map((book) => (
          <BookItem key={book.item_id} bookListProp={book} />
        ))
      }
    </ul>
  );
};

export default BookList;
