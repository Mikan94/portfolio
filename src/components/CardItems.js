import React from 'react';
import '../index.css';
import nazzle from '../assets/nazzle.png';

function CardItems(props) {
  return (
    <div className='container mx-auto'>
      <div className='flex flex-row bg-white md:mx-32'>
        <div className='flex flex-col'>
          <h1 className=''>SmartDress</h1>
          <p>
            Dein persönlicher Outfit-Berater mit dem du immer weißt was du heute
            anziehen kannst
          </p>
          <div className='btn object-center'>Siehe Case Study</div>
        </div>
        <div className='rechts'>
          <img className='h-1/4' src={nazzle}></img>
        </div>
      </div>
    </div>
  );
}

export default CardItems;
