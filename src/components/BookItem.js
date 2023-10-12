import PropTypes from 'prop-types';
import '../modules/BookItem.css';
import { useDispatch } from 'react-redux';
// import { useState, useEffect } from 'react';
import { deleteBookFromServer } from '../redux/books/bookSlice';

const BookItem = ({ bookListProp }) => {
  const dispatch = useDispatch();
  // const [progress, setProgress] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (progress < 85) {
  //       setProgress((prevProgress) => prevProgress + 1);
  //     } else {
  //       clearInterval(interval);
  //     }
  //   }, 20);

  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, [progress]);
  const handleDeleteBook = (id) => {
    dispatch(deleteBookFromServer({ item_id: id }));
  };

  const capitalizeFirstLetter = (str) => {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  return (
    <li className="list-container">
      <div className="list-block">
        <div className="left-section">
          <p className="category">{capitalizeFirstLetter(bookListProp.category)}</p>
          <p className="book-title">{bookListProp.title}</p>
          <p className="book-author">{bookListProp.author}</p>
          <nav className="list-actions">
            <button type="button">Comments</button>
            <span>|</span>
            <button type="button" onClick={() => handleDeleteBook(bookListProp.item_id)}>Remove</button>
            <span>|</span>
            <button type="button">Edit</button>
          </nav>
        </div>
        <div className="right-section">
          <div className="progressed-container">
            <div className="progress" />
            <div className="progress-stat">
              <p className="percent-complete">64%</p>
              <p className="completed-complete">Completed</p>
            </div>
          </div>
          <span className="div" />
          <div className="chapter">
            <h4 className="current-chapter">CURRENT CHAPTER</h4>
            <h4 className="chapter-number">
              {/* Display 'No Chapter' if chapter is missing */}
              {bookListProp.currentChapter || 'No Chapter'}
              {' '}
            </h4>
            <button type="button" className="update-progress">UPDATE PROGRESS</button>
          </div>
        </div>
      </div>
    </li>

  );
};

BookItem.propTypes = {
  bookListProp: PropTypes.shape({
    title: PropTypes.string,
    author: PropTypes.string,
    item_id: PropTypes.number,
    currentChapter: PropTypes.string,
    category: PropTypes.string,
  }).isRequired,
};

export default BookItem;
