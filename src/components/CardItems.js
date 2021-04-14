import React from 'react';

function CardItems(props) {
  return (
    <div className='container'>
      <div className='my-12 mx-8 sm:mx-16 lg:mx-32 xl:mx-48 2xl:mx-80'>
        <div
          className={`shadow-md rounded overflow-hidden flex flex-col lg:flex-row ${props.bg}`}
        >
          <img
            className='z-0 max-h-64 px-4 sm:max-h-80 order-1 lg:order-2 mx-auto my-12 sm:my-16 lg:mr-8 lg:max-h-96 xl:mr-16'
            src={props.src}
          ></img>
          <div className='flex flex-col justify-around order-2 lg:order-1 mb-12 sm:mb-12 mx-8 sm:mx-16'>
            <div className=''>
              <h1 className='font-bold'>{props.text}</h1>
              <h3>{props.subtitle}</h3>
              <p className='text-gray-700'>{props.description}</p>
            </div>
            <div className='mt-4'>
              <div className='justify-center flex mt-2 lg:justify-start'>
                <button className='btn bg-indigo-700 hover:bg-indigo-300 font-bold text-white rounded shadow-md'>
                  Read more
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CardItems;
