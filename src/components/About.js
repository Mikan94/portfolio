import React from 'react';
import img from '../assets/img.jpg';
import blobAbout from '../assets/blobAbout.svg';

function About() {
  return (
    <section className='container mx-auto'>
      <div className='flex flex-col md:flex-row justify-center md:justify-around mx-8 md:mx-32'>
        <img
          className='w-1/3 self-center shadow-lg order-1'
          src={img}
          alt='img'
        />
        <div className='w-2/3 flex flex-col order-2 md:pl-8'>
          <p>
            Zum besseren Kennenlernen habe ich einfach 21 Fakten über mich raus
            gekramt :) Hier ein kleiner Teaser:
            <p>- Lorem ipsum lorem ipsum lorem</p>
            <p>- Lorem ipsum lorem ipsum lorem</p>
          </p>
          <div className=''>Mag du mehr erfahren?</div>
        </div>
      </div>
    </section>
  );
}

export default About;
