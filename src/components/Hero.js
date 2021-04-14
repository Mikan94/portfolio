import React from 'react';
import hero from '../assets/hero.svg';

function Hero() {
  return (
    <section className='container mx-auto'>
      <div className='flex flex-col justify-center'>
        <img
          className='mt-32 mx-8 sm:mx-32 md:mx-48 lg:mx-72 xl:mx-96 2xl:px-32 '
          src={hero}
          alt='hero'
        />
        <div className='mx-8 mt-8 sm:mx-16 lg:mx-32 xl:mx-48 2xl:mx-80 text-base md:text-lg font-sans'>
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
      </div>
    </section>
  );
}

export default Hero;
