import React from 'react';

function About() {
  return (
    <section id='about' className='container mx-auto'>
      <div className='line h1-copy mx-8 sm:mx-16 lg:mx-32 xl:mx-48 lg:-mt-24 2xl:mx-80 text-3xl sm:text-4xl lg:text-5xl'>
        Who I am 👷🏼‍♀️
      </div>

      <div className='flex flex-col md:flex-row md:justify-around mx-8 sm:mx-16 lg:mx-32 xl:mx-48 2xl:mx-80 mt-16 md:mt-24'>
        <div className='flex justify-center items-center'>
          <img
            className='img-change relative h-64 sm:h-80 md:mx-32 2xl:h-full z-10 self-center shadow-lg order-1'
            alt='img'
          />
        </div>
        <div className='flex flex-col items-center lg:items-start osrder-2 text-base z-10 mt-8 md:ml-8 xl:pr-16'>
          <p className=''>
            Zum besseren Kennenlernen habe ich einfach 21 Fakten über mich raus
            gekramt :) Hier ein kleiner Teaser:
            <p>- Lorem ipsum lorem ipsum lorem</p>
            <p>- Lorem ipsum lorem ipsum lorem</p>
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
