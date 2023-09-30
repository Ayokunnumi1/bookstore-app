import { useSelector } from 'react-redux';
import BookItem from './BookItem';
import '../modules/BookList.css';

const BookList = () => {
  const { books } = useSelector((state) => state.books);
  return (
    <ul className="booklist-container">
      {
        books.map((book) => (
          <BookItem key={book.item_id} bookListProp={book} />
        ))
      }
    </ul>
  );
};

export default BookList;
