import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='container mx-auto'>
      <div className='flex flex-col mx-8 md:flex-row md:justify-around md:mx-32 text-sm'>
        <section className='flex justify-center order-2 md:order-1'>
          <p>Anne Minkenberg - 2021</p>
        </section>
        <section className='flex justify-center order-2 md:order-1'>
          <p>Designed and built by Anne Minkenberg</p>
        </section>
      </div>
    </div>
  );
}

export default Footer;
