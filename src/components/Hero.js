import React, { useState, useEffect } from 'react';

function Hero() {
  const [scrollPos, setScrollPos] = useState(false);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;

    if (currentScrollPos < 300) {
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
      <div className='flex flex-col justify-center pr-72'>
        <div class='mx-48 pt-44 z-30'>
          <p class='text-xl color-y'>Hello I'm Anne</p>
          <h2 class='text-5xl color-y leading-normal'>
            and transform problems into digital sweet homes 🏠
          </h2>
        </div>

        <div className='mx-8 mt-8 sm:mx-16 lg:mx-32 xl:mx-48 2xl:mx-80 text-base md:text-lg font-sans'>
          <h3>
            As a solution seeker aka UX/UI Designer with a background in
            business. Now I create digital products to people problems that give
            their back time and a sense of "coming home".
          </h3>
          <h3 className='mt-4'>
            Secret weapons: I'm also a React.js Rookie and adventure cyclist
            🚴‍♀️💨
          </h3>
        </div>
      </div>
      <section class='container fixed bottom-0 mx-auto'>
        <div className={visible ? 'flex flex-col items-center mb-4' : 'hidden'}>
          <p class='mb-4'>Want to see how it looks like? </p>
          <p class='scroll-ani bounce pl-6 font-bold  '>Scroll 👇</p>
        </div>
      </section>
    </section>
  );
}

export default Hero;
