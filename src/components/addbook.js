import React from 'react';

export default function AddBook() {
  return (
    <div id="form-container">
      <h3 id="form-title">ADD NEW BOOK</h3>
      <form id="add-form">
        <input type="text" id="input-book-title" placeholder="Book Title" />
        <input type="text" id="input-book-author" placeholder="Book Author" />

        <button id="add-btn" type="submit">ADD BOOK</button>
      </form>
    </div>
  );
}
