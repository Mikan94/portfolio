import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import ProgressiveImage from 'react-progressive-image';
import img from '../assets/aboutimg.jpg';

function About() {
  const history = useHistory();

  function handleClick() {
    history.push('/whoiam');
  }

  return (
    <section id='about' className='container mx-auto pt-64'>
      <div className='line h1-copy mx-8 sm:mx-16 lg:mx-32 xl:mx-48 lg:-mt-24 2xl:mx-80 text-3xl sm:text-4xl lg:text-5xl'>
        Who I am 👷🏼‍♀️
      </div>

      <div className='flex flex-col md:flex-row md:justify-around mx-8 sm:mx-16 lg:mx-32 xl:mx-48 2xl:mx-80 mt-16 md:mt-24'>
        <div className='flex justify-center items-center'>
          <img
            className='img-change relative w-80 sm:w-80 md:mx-32 2xl:w-full z-10 self-center shadow-lg order-1'
            alt='img'
          />
        </div>
        <div className='flex flex-col items-center order-2 text-base text-center z-10 px-2 mt-16 md:ml-8 xl:pr-16'>
          <p className=''>
            Do you want to know more about me? Then I have prepared 17 facts
            about me for you.
            <p class='mt-4'>Little sneak peek: 👩‍💻🚴‍♀️🎧</p>
          </p>
          <Link to='/whoiam'>
            <button
              class='btn-4-y mt-8'
              onClick={() => {
                history.goForward();
              }}
            >
              Know more
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default About;
