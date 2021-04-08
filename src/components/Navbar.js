import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <nav>
      <div className='container mx-auto px-8 flex flex-row flex-wrap justify-between items-center'>
        <Link
          className='flex md:self-center items-center m-4'
          onClick={closeMobileMenu}
        >
          Anne Minkenberg
        </Link>
        <div className='md:hidden relative' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul
          className={
            click
              ? 'flex flex-col absolute top-16 w-full bg-red-500 items-center'
              : 'hidden md:flex md:flex-row'
          }
        >
          <li className='flex justify-between m-4'>
            <Link className='nav-links' onClick={closeMobileMenu}>
              Projecs
            </Link>
          </li>
          <li className='flex justify-between m-4'>
            <Link className='nav-links' onClick={closeMobileMenu}>
              About
            </Link>
          </li>
          <li className='flex justify-between m-4'>
            <Link className='nav-links' onClick={closeMobileMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
