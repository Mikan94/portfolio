import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className='nav'>
      <div className='nav-container'>
        <Link className='nav-logo'>Anne Minkenberg</Link>
        <ul className='nav-menu'>
          <li className='nav-item'>
            <Link className='nav-links'>Projecs</Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-links'>About</Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-links'>Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
