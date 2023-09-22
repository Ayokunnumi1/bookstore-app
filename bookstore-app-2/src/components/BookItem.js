const BookItem = ({bookListProp}) => {
    return (
        <>
        <li>{bookListProp.title}</li>
        <li>{bookListProp.author}</li>
        </>
    );
}

export default BookItem;