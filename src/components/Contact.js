import React from 'react';
import '../index.css';

function Contact() {
  return (
    <section className='container mx-auto'>
      <h1 className='absolute ml-48 -mt-14 z-0 text-7xl'>Get in touch</h1>
      <div className='flex flex-col items-center mx-8 md:mx-32 text-base'>
        <div className='flex flex-col items-center'>
          <p>Servus Interessiert an der Zukunft zu schrauben? 🪛</p>
          <p>Dann lass uns gerne Unterhalten :)</p>
        </div>
        <div className='flex flex-row'>
          <button className='btn mr-4'>Brieftaube losschicken</button>
          <button className='btn ml-4'>Flotter Schnack</button>
        </div>
      </div>
    </section>
  );
}

export default Contact;
