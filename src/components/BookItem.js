import PropTypes from 'prop-types';
import '../modules/BookItem.css';
// eslint-disable-next-line arrow-body-style
const BookItem = ({ bookListProp }) => {
  return (
    <li className="book-item-container">
      <p>{bookListProp.title}</p>
      <p>{bookListProp.author}</p>
      <button type="submit">Delete</button>
    </li>

  );
};

BookItem.propTypes = {
  bookListProp: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};

export default BookItem;
