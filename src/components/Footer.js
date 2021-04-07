import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-text'>
        <p>Anne Minkenberg ® 2021</p>
      </section>
      <section className='contact'>
        <div className='contact-wrap'>
          <div className='contact-icons'>
            <Link
              class='contact-icon-link mail'
              to='/'
              target='_blank'
              aria-label='Mail'
            >
              <i class='far fa-envelope' />
            </Link>
            <Link
              class='contact-icon-link linkedin'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin-in' />
            </Link>
            <Link
              class='contact-icon-link behance'
              to='/'
              target='_blank'
              aria-label='Behance'
            >
              <i class='fab fa-behance'></i>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
