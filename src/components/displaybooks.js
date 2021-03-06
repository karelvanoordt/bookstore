import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllBooks } from '../redux/books/books';
import Book from './book';

const BookList = () => {
  const dispatch = useDispatch();

  const { booksReducer } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getAllBooks());
  }, [dispatch]);

  return (

    <div>
      {booksReducer.map((book) => (
        <Book
          key={book.item_id}
          book={book}
        />
      ))}
    </div>

  );
};

export default BookList;
