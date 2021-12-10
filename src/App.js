import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import Navbar from './components/navbar';
import BookForm from './components/bookInput';
import Categories from './components/categories';
import Books from './components/displaybooks';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Books />} />
        <Route exact path="/categories" element={<Categories />} />
      </Routes>
      <BookForm />
    </Router>
  );
}

export default App;
