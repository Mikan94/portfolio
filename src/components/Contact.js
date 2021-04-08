import React from 'react';
import '../index.css';

function Contact() {
  return (
    <section className='container mx-auto'>
      <div className='flex flex-col items-center mx-8 md:mx-32'>
        <div className='flex flex-col items-center'>
          <p>Servus Interessiert an der Zukunft zu schrauben? 🪛</p>
          <p>Dann lass uns gerne Unterhalten :)</p>
        </div>
        <div className='flex flex-row'>
          <div className='btn mr-4'>Brieftaube losschicken</div>
          <div className='btn ml-4'>Flotter Schnack</div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
