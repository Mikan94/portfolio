import React from 'react';
import nazzle from '../assets/nazzle.png';

function CardItems(props) {
  return (
    <div className='container mx-auto antialiased'>
      <div className='flex'>
        <div className='mx-40 my-12'>
          <div
            className={`shadow-xl rounded-lg overflow-hidden md:flex ${props.bg}`}
          >
            <div className='flex flex-col justify-around'>
              <div className='ml-24'>
                <p className='font-bold text-xl md:text-2xl'>{props.text}</p>
                <p className='text-gray-700 md:text-lg'>
                  sDein persönlicher Outfit-Berater mit dem du immer weißt was
                  du heute anziehen kannst props.description- description=""
                </p>
              </div>
              <div className=''>
                <div className='ml-24'>
                  <button className='btn bg-indigo-700 hover:bg-indigo-300 font-bold text-white md:text-lg rounded-lg shadow-md'>
                    Read more
                  </button>
                </div>
              </div>
            </div>
            <img
              className='mx-32 my-16 bg-cover max-h-auto w-96'
              src={props.src}
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CardItems;
