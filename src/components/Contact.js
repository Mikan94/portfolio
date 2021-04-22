import React from 'react';
import '../index.css';

function Contact() {
  return (
    <section id='contact' className='container mx-auto pt-64'>
      <h1 className='line h1-copy mx-8 sm:mx-16 lg:mx-32 xl:mx-48 lg:-mt-24 2xl:mx-80 text-3xl sm:text-4xl lg:text-5xl'>
        Contact 💬
      </h1>
      <div className='flex flex-col mx-8 sm:mx-16 items-center mt-32 lg:px-32 text-center leading-normal'>
        <h2 class='text-3xl'>You like what you have seen?</h2>
        <h2 class='text-3xl'>
          Then let's talk and create digital homes together
        </h2>
        <p class='mt-8 md:px-16'>
          You also have the choice: Send my a mail per carrier pigeon or have a
          chat with me on LinkedIn
        </p>

        <div className='flex flex-col lg:flex-row items-center mt-8 mx-12'>
          <button
            className='btn-3 mb-4 lg:mb-0 lg:mr-4 rounded shadow-md'
            onClick={() =>
              window.open('mailto:minkenberg-anne@web.de', '_blank')
            }
          >
            Send carrier pigeon
          </button>
          <button
            className='btn-2 lg:ml-4 rounded shadow-md'
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
