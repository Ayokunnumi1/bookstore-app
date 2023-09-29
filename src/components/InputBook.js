import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { addBookToServer } from '../redux/books/bookSlice';

const FormInput = () => {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
  });
  const dispatch = useDispatch();
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { title, author } = formData;
    if (title && author) {
      dispatch(addBookToServer({
        item_id: nanoid(), title, author, category: 'fiction',
      }));
      setFormData({
        title: '',
        author: '',
      });
    }
  };
  return (
    <form action="">
      <input type="text" name="title" placeholder="Book title" className="" value={formData.title} onChange={handleInputChange} />
      <input type="text" name="author" placeholder="author" className="" value={formData.author} onChange={handleInputChange} />
      <button type="submit" className="" onClick={handleSubmit}>ADD BOOK</button>
    </form>
  );
};

export default FormInput;
