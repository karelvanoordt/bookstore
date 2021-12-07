import React from 'react';

export default function AddBook() {
  return (
    <div id="form-container">
      <h3 id="form-title">ADD NEW BOOK</h3>
      <form id="add-form">
        <input type="text" id="input-book-title" placeholder="Book Title" />
        <input type="text" list="data" placeholder="Categories" />

        <datalist id="data">
          <option key="Thriller" value="Thriller" aria-label="Thriller" />
          <option key="Romance" value="Romance" aria-label="Romance" />
          <option key="Self Development" value="Self Development" aria-label="Self Development" />
        </datalist>

        <button id="add-btn" type="submit">ADD BOOK</button>
      </form>
    </div>
  );
}
