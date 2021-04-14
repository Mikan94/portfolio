import React from 'react';
import img from '../assets/aboutimg.jpg';
import blobAbout from '../assets/blobAbout.svg';

function About() {
  return (
    <section className='container mx-auto'>
      <h1 className='line absolute ml-48 -mt-14 z-0 text-xl'>About</h1>

      <div className='flex flex-col md:flex-row md:justify-around mx-8 sm:mx-16 lg:mx-32 xl:mx-48 2xl:mx-80'>
        <div className='flex justify-center items-center'>
          <img
            className='relative h-64 sm:h-80 md:mx-32 2xl:h-full z-10 self-center shadow-lg order-1'
            src={img}
            alt='img'
          />
        </div>
        <div className='flex flex-col items-center lg:items-start order-2 text-base z-10 mt-8 md:ml-8 xl:pr-16'>
          <p className=''>
            Zum besseren Kennenlernen habe ich einfach 21 Fakten über mich raus
            gekramt :) Hier ein kleiner Teaser:
            <p>- Lorem ipsum lorem ipsum lorem</p>
            <p>- Lorem ipsum lorem ipsum lorem</p>
          </p>
          <button className='btn shadow-md text-white rounded'>
            Mag du mehr erfahren?
          </button>
        </div>
      </div>
    </section>
  );
}

export default About;
