import React from 'react';
import Proptypes from 'prop-types';

export default function Book({ id, title, author }) {
  return (
    <li id={id}>
      <p className="book-title">{title}</p>
      <p className="book-author">{author}</p>
      <button type="submit" className="remove-btn">REMOVE</button>
    </li>
  );
}

Book.propTypes = {
  id: Proptypes.string.isRequired,
  title: Proptypes.string.isRequired,
  author: Proptypes.string.isRequired,
};
