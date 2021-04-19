import React from 'react';

import { Link } from 'react-router-dom';

function CardItems(props) {
  return (
    <div className='container'>
      <div className='card-grow hover:shadow-xl my-12 mx-8 sm:mx-16 lg:mx-32 xl:mx-48 2xl:mx-80'>
        <div
          className={`shadow-md rounded overflow-hidden flex flex-col lg:flex-row ${props.bg}`}
        >
          <img
            className='z-0 max-h-64 px-4 sm:max-h-80 order-1 lg:order-2 mx-auto my-12 sm:my-16 lg:mr-8 lg:max-h-96 xl:mr-16'
            src={props.src}
          ></img>
          <div className='flex flex-col justify-around order-2 lg:order-1 mb-12 sm:mb-12 mx-8 sm:mx-16'>
            <h1 className='outline mb-64 z-30 absolute'>{props.text}</h1>
            <div className='mt-32'>
              <h3>{props.subtitle}</h3>
              <p className='text-gray-700'>{props.description}</p>
            </div>
            <div className='mt-4'>
              <div className='justify-center flex mt-2 lg:justify-start'>
                <Link to={props.link} className=''>
                  <button class='btn-4'>Learn more</button>
                  {/* <button class='learn-more'>
                    <span class='circle' aria-hidden='true'>
                      <span class='icon arrow'></span>
                    </span>
                    <span class='button-text'>Learn More</span>
                  </button> */}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CardItems;
