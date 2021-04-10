import React from 'react';
import img from '../assets/img.jpg';
import blobAbout from '../assets/blobAbout.svg';

function About() {
  return (
    <section className='container mx-auto'>
      <div className='flex flex-col md:flex-row md:justify-around mx-8 md:mx-32'>
        <div className='flex justify-center items-center'>
          <img
            className='relative z-10 w-2/4 self-center shadow-lg order-1'
            src={img}
            alt='img'
          />
          <img
            className='w-1/3 ml-8 mt-24 absolute z-0'
            src={blobAbout}
            alt='blob'
          />
        </div>
        <div className='w-2/3 flex flex-col order-2 text-base'>
          <p className=''>
            Zum besseren Kennenlernen habe ich einfach 21 Fakten über mich raus
            gekramt :) Hier ein kleiner Teaser:
            <p>- Lorem ipsum lorem ipsum lorem</p>
            <p>- Lorem ipsum lorem ipsum lorem</p>
          </p>
          <div className='btn'>Mag du mehr erfahren?</div>
        </div>
      </div>
    </section>
  );
}

export default About;
