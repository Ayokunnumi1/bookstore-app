import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { addBookToServer } from '../redux/books/bookSlice';
import '../modules/FormInput.css';

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
        item_id: nanoid(), title, author, category: 'Science fiction',
      }));
      setFormData({
        title: '',
        author: '',
      });
    }
  };
  return (
    <form action="" className="form-input">
      <input type="text" name="title" placeholder="Book title" className="input-title" value={formData.title} onChange={handleInputChange} required />
      <input type="text" name="author" placeholder="Author" className="input-author" value={formData.author} onChange={handleInputChange} required />
      <button type="submit" className="add-book-btn" onClick={handleSubmit}>ADD BOOK</button>
    </form>
  );
};

export default FormInput;
