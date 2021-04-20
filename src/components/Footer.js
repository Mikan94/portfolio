import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='container mx-auto mt-64 py-4'>
      <div className='flex flex-col mx-8 md:flex-row md:justify-around md:mx-16'>
        <section className='flex justify-center order-2 md:order-1'>
          <p>Designed and built by Anne Minkenberg - 2021 </p>
        </section>
        <section className='flex justify-center order-1 md:order-2'>
          <p>See ya in the future 👋</p>
        </section>
      </div>
    </div>
  );
}

export default Footer;
