import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <nav className='container'>
      <div className='fixed bg-primary shadow-md flex-row flex-wrap justify-between z-50 w-full py-2 flex items-center px-8 md:px-48'>
        <Link className='flex' onClick={closeMobileMenu}>
          Anne Minkenberg
        </Link>
        <div className='md:hidden relative' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul
          className={
            click
              ? 'flex flex-col top-16 w-full bg-red-500 items-center md:w-auto md:top-0 md:flex md:flex-row md:bg-transparent'
              : 'hidden md:flex md:flex-row'
          }
        >
          <li className='flex justify-between my-4'>
            <Link className='nav-links' onClick={closeMobileMenu}>
              Projecs
            </Link>
          </li>
          <li className='flex justify-between mx-8 my-4'>
            <Link className='nav-links' onClick={closeMobileMenu}>
              About
            </Link>
          </li>
          <li className='flex justify-between my-4'>
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
