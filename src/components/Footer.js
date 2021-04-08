import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='container mx-auto'>
      <div className='flex flex-col mx-8 md:flex-row md:justify-between md:mx-32'>
        <section className='flex justify-center order-2 md:order-1'>
          <p>Anne Minkenberg ® 2021</p>
        </section>
        <section className='flex justify-center order-1 md:order-2'>
          <div to='/' target='_blank' aria-label='Mail'>
            <i class='far fa-envelope' />
          </div>
          <div className='mx-8' to='/' target='_blank' aria-label='LinkedIn'>
            <i class='fab fa-linkedin-in' />
          </div>
          <div to='/' target='_blank' aria-label='Behance'>
            <i class='fab fa-behance'></i>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Footer;
