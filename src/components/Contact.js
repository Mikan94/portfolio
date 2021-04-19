import React from 'react';
import '../index.css';

function Contact() {
  return (
    <section id='contact' className='container mx-auto'>
      <h1 className='line outline absolute -mt-14 z-0 text-xl'>Get in touch</h1>
      <div className='flex flex-col items-center text-base'>
        <div className='flex flex-col mx-8 mt-16'>
          <p>Servus Interessiert an der Zukunft zu schrauben? 🪛</p>
          <p>Dann lass uns gerne Unterhalten :)</p>
        </div>
        <div className='flex flex-col lg:flex-row items-center mx-12'>
          <button className='btn-3 mb-4 lg:mb-0 lg:mr-4 text-white rounded shadow-md'>
            Brieftaube losschicken
          </button>
          <button className='btn-2 lg:ml-4 text-white rounded shadow-md'>
            Flotter Schnack
          </button>
        </div>
      </div>
    </section>
  );
}

export default Contact;
