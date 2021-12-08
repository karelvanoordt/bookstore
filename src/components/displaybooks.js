import React from 'react';
import AddBook from './addbook';
import Book from './book';

const books = [
  {
    id: 1,
    title: 'The Great Gatsby',
    author: 'Scott Fitzgerald',
  },
  {
    id: 2,
    title: 'The catcher in the Rye',
    author: 'J.D. Salinger',
  },
  {
    id: 3,
    title: 'To kill a mockingbird',
    author: 'Harper Lee',
  },
  {
    id: 4,
    title: 'Walden',
    author: 'H.D. Thoureau',
  },
];

export default function Books() {
  return (
    <div id="book-page-container">
      <div id="books-container">
        {books.map((book) => (
          <Book
            id={book.id}
            key={book.id}
            title={book.title}
            author={book.author}
          />
        ))}
      </div>
      <AddBook />
    </div>
  );
}
