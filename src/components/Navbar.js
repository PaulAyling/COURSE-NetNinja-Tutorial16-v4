import React, { useContext } from 'react';
import { BookContext } from '../context/BookContext';

const Navbar = () => {
  const { books } = useContext(BookContext);
  return (
    <div className='navbar'>
      <h1>Ninja reading list</h1>
      <p>currently you have {books.length} books to get through ......</p>
    </div>
  );
};

export default Navbar;
