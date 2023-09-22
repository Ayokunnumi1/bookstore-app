import BookItem from './BookItem';

const BookList = ({ booksProps }) => {
    return (
        <ul>
            {
                booksProps.map((booksArray) => (
                    <BookItem bookListProp={booksArray} />
                ))
            }
        </ul>
    );
}

export default BookList;