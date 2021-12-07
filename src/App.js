import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import AddBook from './components/addbook';
import Navbar from './components/navbar';
import Categories from './components/categories';
import Books from './components/books';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Books />} />
        <Route exact path="/categories" element={<Categories />} />
      </Routes>
    </Router>
  );
}

export default App;
