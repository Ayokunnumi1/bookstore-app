import BookItem from './BookItem';

const BookList = ({ booksProps }) => (
  <ul>
    {
                booksProps.map((booksArray) => (
                  <BookItem bookListProp={booksArray} />
                ))
            }
  </ul>
);

export default BookList;
