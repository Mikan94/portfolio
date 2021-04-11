import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Controller, Thumbs } from 'swiper';
import 'swiper/swiper-bundle.css';
import CardItems from './CardItems';
import nazzle from '../assets/nazzle.png';
import smartdress from '../assets/smartdress.png';
import storyline from '../assets/storyline.png';
import hel from '../assets/hel.png';

SwiperCore.use([Navigation, Pagination, Controller, Thumbs]);

function Cards() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [controlledSwiper, setControlledSwiper] = useState(null);

  return (
    <div className='container mx-auto'>
      <Swiper
        className='md:mx-32'
        id='main'
        thumbs={{ swiper: thumbsSwiper }}
        controller={{ control: controlledSwiper }}
        tag='section'
        wrapperTag='ul'
        navigation
        pagination
        spaceBetween={0}
        slidesPerView={1}
        onInit={(swiper) => console.log('Swiper initialized!', swiper)}
        onSlideChange={(swiper) => {
          console.log('Slide index changed to: ', swiper.activeIndex);
        }}
        onReachEnd={() => console.log('Swiper end reached')}
      >
        <SwiperSlide>
          <CardItems bg='bg-smartdress' text='SmartDress' src={smartdress} />
        </SwiperSlide>
        <SwiperSlide>
          <CardItems bg='bg-nazzle' text='Nazzle' src={nazzle} />
        </SwiperSlide>
        <SwiperSlide>
          <CardItems bg='bg-storyline' text='Storyline' src={storyline} />
        </SwiperSlide>
        <SwiperSlide>
          <CardItems bg='bg-hel' text='Hygiene Lab' src={hel} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Cards;
