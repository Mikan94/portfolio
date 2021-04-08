import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <nav className='container mx-auto'>
      <div className='flex flex-row flex-wrap justify-between items-center md:mx-32'>
        <Link
          className='flex mx-8 my-4 md:self-center items-center'
          onClick={closeMobileMenu}
        >
          Anne Minkenberg
        </Link>
        <div className='md:hidden relative mx-8' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul
          className={
            click
              ? 'flex flex-col top-16 w-full bg-red-500 items-center md:w-auto md:top-0 md:flex md:flex-row md:bg-transparent'
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
