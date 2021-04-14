import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import linked from '../assets/linkedin.svg';

function Sidebar() {
  return (
    <section className='fixed hidden md:flex bottom-0 right-12 z-50'>
      <div className='flex flex-col'>
        <ul className='content-center text-2xl'>
          <li className='flex'>
            <Link className=''>
              <i class='far fa-paper-plane'></i>
            </Link>
          </li>
          <li className='flex'>
            <Link className=''>
              <img src={linked} />
            </Link>
          </li>
          <li className='line-vert'></li>
        </ul>
      </div>
    </section>
  );
}

export default Sidebar;
