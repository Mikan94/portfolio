import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Controller, Thumbs } from 'swiper';
import 'swiper/swiper-bundle.css';
import CardItems from './CardItems';
import nazzle from '../assets/nazzle.png';
import smartdress from '../assets/smartdress.png';
import storyline from '../assets/2.png';
import hel from '../assets/hel.png';

SwiperCore.use([Navigation, Pagination, Controller, Thumbs]);

function Cards() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [controlledSwiper, setControlledSwiper] = useState(null);

  return (
    <div className='container mx-auto'>
      <h1 className='line absolute ml-8 -mt-2 z-0 text-xl'>Projects</h1>
      <Swiper
        className='z-10'
        id='main'
        thumbs={{ swiper: thumbsSwiper }}
        controller={{ control: controlledSwiper }}
        tag='section'
        wrapperTag='ul'
        navigation
        pagination
        effect='fade'
        spaceBetween={0}
        slidesPerView={1}
        onInit={(swiper) => console.log('Swiper initialized!', swiper)}
        onSlideChange={(swiper) => {
          console.log('Slide index changed to: ', swiper.activeIndex);
        }}
        onReachEnd={() => console.log('Swiper end reached')}
      >
        <SwiperSlide>
          <CardItems
            bg='bg-smartdress'
            text='SmartDress'
            subtitle='Bachelor Thesis'
            description='Dein persönlicher Outfit-Berater mit
dem du immer weißt was du heute
anziehen kannst'
            src={smartdress}
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardItems
            bg='bg-nazzle'
            text='Nazzle'
            subtitle='Project (Studium)'
            description='Spielerisch die Natur erkunden und
spannende Rätsel mit Augmented
Reality lösen'
            src={nazzle}
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardItems
            bg='bg-storyline'
            text='Storyline'
            subtitle='Forschungsprojekt (Studium)'
            description='Companion für Schüler zur 
spielerischen Prävention von
Fake News und Cyber Mobbing
in sozialen Netzwerken'
            src={storyline}
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardItems
            bg='bg-hel'
            text='Hygiene Lab'
            subtitle='Client work'
            description='Schaffen eines erzählenswertens
Erlebnis vom Besuch öffentlicher
Toiletten mit kontaktlosen Produkten'
            src={hel}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Cards;
