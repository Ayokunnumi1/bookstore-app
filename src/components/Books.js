import FormInput from './InputBook';
import BookList from './BookList';

const Books = () => {
  const booksArray = [
    {
      id: 1,
      title: 'The Hunger Games',
      author: 'Suzanne Collins',
      completed: false,
    },
    {
      id: 2,
      title: 'Dune',
      author: 'Frank Herbert',
      completed: false,
    },
    {
      id: 3,
      title: 'Capital in the Twenty-First Century',
      author: 'Suzanne Collins',
      completed: false,
    },
  ];
  return (
    <div>
      <BookList key={booksArray.id} booksProps={booksArray} />
      <h3>ADD NEW BOOK</h3>
      <FormInput />
    </div>
  );
};

export default Books;
