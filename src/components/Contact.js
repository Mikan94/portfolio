import React from 'react';
import '../index.css';

function Contact() {
  return (
    <section id='contact' className='container mx-auto'>
      <h1 className='text-center text-4xl mx-8 sm:mx-16 lg:mx-32 xl:mx-48 2xl:mx-80 '>
        Contact 💬
      </h1>
      <div className='flex flex-col text-center px-4 mx-8 sm:mx-16 mt-16 md:mt-24 lg:px-32'>
        <h3 class=''>You like what you have seen?</h3>
        <h3 class=''>Then let's talk and create digital homes together</h3>
        <p class='mt-8'>
          You also have the choice: Send me a mail per carrier pigeon or have a
          chat with me on LinkedIn
        </p>

        <div className='flex flex-col items-center md:justify-center md:flex-row mt-16'>
          <button
            className='btn-3 mb-4 md:mb-0 md:mr-4 rounded shadow-md'
            onClick={() =>
              window.open('mailto:minkenberg-anne@web.de', '_blank')
            }
          >
            Send carrier pigeon
          </button>
          <button
            className='btn-2 md:ml-4 rounded shadow-md'
            onClick={() =>
              window.open(
                'https://www.linkedin.com/in/anne-minkenberg-4a5961161/',
                '_blank'
              )
            }
          >
            Have a chat
          </button>
        </div>
      </div>
    </section>
  );
}

export default Contact;
