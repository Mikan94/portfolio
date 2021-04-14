import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <nav className='container'>
      <div className='fixed bg-primary shadow-md flex-row flex-wrap justify-between z-40 w-full py-4 md:py-2 flex items-center px-8 sm:px-16 lg:px-32 xl:px-48 2xl:px-80'>
        <Link className='flex z-50' onClick={closeMobileMenu}>
          nAnne Minkenberg
        </Link>
        <div className='md:hidden relative z-50' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul
          className={
            click
              ? 'nav-menu active flex flex-col w-full items-center md:w-auto md:top-0 md:flex md:flex-row md:bg-transparent'
              : 'nav-menu hidden md:flex md:flex-row'
          }
        >
          <li className='flex justify-between pt-10 md:pt-0 my-8 md:my-4'>
            <Link className='link nav-link' onClick={closeMobileMenu}>
              Projecs
            </Link>
          </li>
          <li className='flex justify-between mx-8 my-8 md:my-4'>
            <Link className='link nav-link' onClick={closeMobileMenu}>
              About
            </Link>
          </li>
          <li className='flex justify-between my-8 md:my-4'>
            <Link className='link nav-link' onClick={closeMobileMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
