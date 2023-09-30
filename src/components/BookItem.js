import PropTypes from 'prop-types';
import '../modules/BookItem.css';
import { useDispatch } from 'react-redux';
import { deleteBookFromServer } from '../redux/books/bookSlice';

const BookItem = ({ bookListProp }) => {
  const dispatch = useDispatch();
  const handleDeleteBook = (id) => {
    dispatch(deleteBookFromServer({ item_id: id }));
  };
  return (
    <li className="book-item-container">
      <p>{bookListProp.title}</p>
      <p>{bookListProp.author}</p>
      <button onClick={() => handleDeleteBook(bookListProp.item_id)} type="submit">Delete</button>
    </li>

  );
};

BookItem.propTypes = {
  bookListProp: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    item_id: PropTypes.number.isRequired,
  }).isRequired,
};

export default BookItem;
