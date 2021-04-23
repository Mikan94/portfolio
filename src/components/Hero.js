import React, { useState, useEffect } from 'react';

function Hero() {
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
          <h3 class='color-y'>Hello, I'm Anne</h3>
          <h2 class='color-y'>
            and transform problems into digital sweet homes 🏠
          </h2>
        </div>

        <div className='mx-8 mt-8 px-4 sm:mx-16 lg:mx-32 xl:mx-80 2xl:mx-80'>
          <p>
            As a solution seeker aka UX/UI Designer with a background in
            business. Now I create digital products to people problems that give
            their back time and a sense of "coming home".
          </p>
          <p className='mt-4'>
            Secret weapons: I'm also a React.js Rookie and adventure cyclist.
            🚴‍♀️💨
          </p>
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
          <p class='scroll-ani bounce pl-6'>Scroll 👇</p>
        </div>
      </section>
    </section>
  );
}

export default Hero;
