import PropTypes from 'prop-types';
import '../modules/BookItem.css';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { deleteBookFromServer } from '../redux/books/bookSlice';

const BookItem = ({ bookListProp }) => {
  const dispatch = useDispatch();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (progress < 85) {
        setProgress((prevProgress) => prevProgress + 1);
      } else {
        clearInterval(interval);
      }
    }, 20);

    return () => {
      clearInterval(interval);
    };
  }, [progress]);
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
          {/* <div><button onClick={() => handleDeleteBook(bookListProp.item_id)}
           type="submit">Delete</button></div> */}
          <nav className="list-actions">
            <button type="button">Comments</button>
            <span>|</span>
            <button type="button" onClick={() => handleDeleteBook(bookListProp.item_id)}>Remove</button>
            <span>|</span>
            <button type="button">Edit</button>
          </nav>
        </div>
        <div className="right-section">
          <div className="progess-container">
            <div className="progress-sign">
              <span className="title timer" data-from="0" data-to="85" data-speed="1800" />
              <div className="overlay" />
              <div className="left" />
              <div className="right" />
            </div>
            <div className="progress">
              <span className="progress-percent">
                {/* Display '0%' if progress is missing */}
                {/* {book.progress || '90%'}
                  {' '} */}
                {progress}
              </span>
              <span className="progress-completed">Completed</span>
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
