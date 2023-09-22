import PropTypes from 'prop-types';

const BookItem = ({ bookListProp }) => (
  <>
    <li>{bookListProp.title}</li>
    <li>{bookListProp.author}</li>
  </>
);

export default BookItem;
