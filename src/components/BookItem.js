import PropTypes from 'prop-types';
import '../modules/BookItem.css';
import { useDispatch } from 'react-redux';
import { removedBook } from '../redux/books/bookSlice';

const BookItem = ({ bookListProp }) => {
  const dispatch = useDispatch();
  const handleDeleteBook = (id) => {
    dispatch(removedBook(id));
  };

  return (
    <li className="book-item-container">
      <p>{bookListProp.title}</p>
      <p>{bookListProp.author}</p>
      <button onClick={() => handleDeleteBook(bookListProp.id)} type="submit">Delete</button>
    </li>

  );
};

BookItem.propTypes = {
  bookListProp: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};

export default BookItem;
