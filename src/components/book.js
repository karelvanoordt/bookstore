import React from 'react';
import { useDispatch } from 'react-redux';
import Proptypes from 'prop-types';
import { removeBook } from '../redux/books/books';

const Book = ({ book }) => {
  const dispatch = useDispatch();
  const deleteBook = (id) => {
    dispatch(removeBook(id));
  };

  return (
    <li key={book.item_id}>
      <p className="book-title">{book.title}</p>
      <p className="book-category">{book.category}</p>
      <button type="submit" onClick={() => { deleteBook(book.item_id); }}>Remove</button>
    </li>
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
