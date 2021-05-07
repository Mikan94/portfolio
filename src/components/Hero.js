import React, { useState, useEffect } from 'react';
import data from '../content/hero.json';

function Hero(props) {
  let content = data;
  props.language === 'Deutsch'
    ? (content = data.Deutsch)
    : (content = data.English);

  const [scrollPos, setScrollPos] = useState(false);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;

    if (currentScrollPos < 200) {
      setVisible(true);
    } else {
      setVisible(false);
    }

    setScrollPos(currentScrollPos);
  };

  useEffect(
    () => {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    },
    handleScroll,
    visible,
    setScrollPos
  );
  return (
    <section id='hero' className='container mx-auto'>
      <div className='flex flex-col text-center'>
        <div class='mx-8 sm:mx-16 lg:mx-32 xl:mx-80 2xl:mx-80 pt-36'>
          <h2 class='color-y'>{content.title1}</h2>
          <h2 class='color-y'>{content.title2}</h2>
        </div>

        <div className='mx-8 mt-8 px-4 sm:mx-16 lg:mx-32 xl:mx-80 2xl:mx-80'>
          <p>{content.description1}</p>
          <p className='mt-4'>{content.description2}</p>
        </div>
      </div>
      <section class='container fixed bottom-0 mx-auto'>
        <div
          className={
            visible
              ? 'hidden md:flex md:flex-col md:items-center md:mb-4 lg:mb-16 '
              : 'hidden'
          }
        >
          <p class='scroll-ani bounce'>Scroll</p>
        </div>
      </section>
    </section>
  );
}

export default Hero;
