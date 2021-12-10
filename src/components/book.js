import React from 'react';
import { useDispatch } from 'react-redux';
import './react-circular-progressbar.css';
import Proptypes from 'prop-types';
import { CircularProgressbar } from 'react-circular-progressbar';
import { removeBook } from '../redux/books/books';
import './book.css';

const Book = ({ book }) => {
  const percnt = 33;
  const dispatch = useDispatch();
  const deleteBook = (id) => {
    dispatch(removeBook(id));
  };

  return (
    <div className="book-container" key={book.item_id}>
      <div className="col-1">
        <div className="col-1-top">
          <p className="book-category">{book.category}</p>
          <h2 className="book-title">{book.title}</h2>
          <p className="book-author">Mr. Author</p>
        </div>

        <div className="col-1-bot">
          <button type="submit" className="actions-btn">Comments</button>
          <button type="submit" className="mid-btn" onClick={() => { deleteBook(book.item_id); }}>Remove</button>
          <button type="submit" className="actions-btn">Edit</button>
        </div>
      </div>

      <div className="col-2">
        <div className="prog-pie">
          <CircularProgressbar value={percnt} />
        </div>
        <div className="prog-info">
          <h2 className="prog-num">
            {percnt}
            %
          </h2>
          <p className="prog-comp">Completed</p>
        </div>
      </div>

      <div className="col-3">
        <p className="chap-curr">CURRENT CHAPTER</p>
        <p className="chap">Chapter 13</p>
        <button type="submit" className="update-btn">UPDATE PROGRESS</button>
      </div>
    </div>
  );
};

Book.propTypes = {
  book: Proptypes.shape({
    item_id: Proptypes.string.isRequired,
    title: Proptypes.string.isRequired,
    category: Proptypes.string.isRequired,
  }).isRequired,
};

export default Book;
