import React from 'react';
import '../index.css';

function Contact() {
  return (
    <section id='contact' className='container mx-auto'>
      <h1 className='line ml-28 z-0'>Contact 💬</h1>
      <div className='flex flex-col items-center mt-32 px-32 text-center'>
        <h2>You like what you have seen?</h2>
        <h2>Then let's talk and create digital homes together</h2>
        <p class='mt-8'>
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
