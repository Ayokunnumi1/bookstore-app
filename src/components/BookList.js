import PropTypes from 'prop-types';
import BookItem from './BookItem';

const BookList = ({ booksProps }) => (
  <ul>
    {
                booksProps.map((booksArray) => (
                  <BookItem key={booksArray.id} bookListProp={booksArray} />
                ))
            }
  </ul>
);

BookList.propTypes = {
  booksProps: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default BookList;
