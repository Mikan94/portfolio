import React from 'react';
import hero from '../assets/hero.svg';

function Hero() {
  return (
    <section className='container mx-auto'>
      <div className='flex flex-row flex-nowrap justify-center'>
        <img className='mt-40 h-36 md:h-64 flex-auto' src={hero} alt='hero' />
      </div>
      <div className='m-8 md:mx-32 text-base md:text-lg xl:px-64 font-sans justify-end'>
        <p>
          Als UX/ UI-Designer entwickle ich empathiegetriebene Lösungen, die
          Nutzenden Zeit zurück geben und ihnen ein Gefühl von „nach Hause
          kommen“ vermitteln 🏠❤️
        </p>
        <p className='mt-4'>
          Meine Geheimwaffen sind: Interesse an Frontend Entwicklung und viel
          Fahrrad fahren 🚴‍♀️ 💨
        </p>
      </div>
    </section>
  );
}

export default Hero;
