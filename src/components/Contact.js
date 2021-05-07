import React from 'react';
import '../index.css';
import data from '../content/contact.json';

function Contact(props) {
  let content = data;
  props.language === 'Deutsch'
    ? (content = data.Deutsch)
    : (content = data.English);

  return (
    <section id='contact' className='container mx-auto'>
      <h1 className='text-center text-4xl lg:text-6xl mx-8 sm:mx-16 lg:mx-32 xl:mx-48 2xl:mx-80 '>
        {content.title}
      </h1>
      <div className='flex flex-col text-center px-4 mx-8 sm:mx-16 mt-16 md:mt-24 lg:px-32'>
        <h3 class=''>{content.text1}</h3>
        <h3 class=''>{content.text2}</h3>

        <div className='flex flex-col items-center md:justify-center md:flex-row mt-16'>
          <button
            className='btn-3 mb-4 md:mb-0 md:mr-4 rounded shadow-md'
            onClick={() =>
              window.open('mailto:minkenberg-anne@web.de', '_blank')
            }
          >
            {content.btnMail}
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
            {content.btnChat}
          </button>
        </div>
      </div>
    </section>
  );
}

export default Contact;
