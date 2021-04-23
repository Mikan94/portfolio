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
    <section id='about' className='container mx-auto'>
      <h1 className='text-center text-4xl lg:text-6xl mx-8 sm:mx-16 lg:mx-32 xl:mx-48 lg:-mt-24 2xl:mx-80 '>
        Who I am 👷🏼‍♀️
      </h1>

      <div className='flex flex-col md:flex-row md:justify-around mx-8 sm:mx-16 lg:mx-32 xl:mx-48 2xl:mx-80 mt-16 md:mt-24'>
        <div className='flex justify-center items-center'>
          <img
            className='img-change relative w-80 sm:w-80 md:mx-32 2xl:w-full z-10 self-center shadow-lg order-1'
            alt='img'
          />
        </div>
        <div className='flex flex-col order-2 text-center items-center md:my-auto md:z-10 mt-8 px-2 md:ml-8 xl:pr-16'>
          <p className=''>Do you want to know more about me?</p>
          <p> Then I prepared 19 snippets about me for you.</p>
          <p class='mt-4'>Little sneak peek: 👩‍💻🚴‍♀️🎧</p>

          <Link to='/whoiam'>
            <button
              class='btn-4-y mt-8'
              onClick={() => {
                history.goForward();
              }}
            >
              Get more
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default About;
