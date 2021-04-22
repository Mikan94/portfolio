import React from 'react';
import x from '../assets/x.svg';

import { Link, useHistory, ScrollRestoration } from 'react-router-dom';

function Who() {
  const history = useHistory();

  return (
    <section class='container mx-auto'>
      <div>
        <button
          class='btn fixed z-40 top-4 right-4'
          onClick={() => {
            history.goBack();
          }}
        >
          <img src={x} />
        </button>
      </div>
      <div className='flex flex-col lg:flex-row md:items-center mx-8 sm:mx-16 md:mx-28 lg:mx-16 xl:mx-48 2xl:mx-80 mt-16 md:mt-24'>
        <div className='flex mt-8 justify-center md:mx-32 items-center'>
          <img
            className='img-change relative w-80 sm:w-80 md:mx-32 2xl:w-full z-10 self-center shadow-lg order-1'
            alt='img'
          />
        </div>
        <div className='flex flex-col items-center text-center lg:text-left order-2 z-10 mt-8 sm:mx-12 lg:-ml-16 md:mt-16'>
          <p className='leading-relaxed'>
            I’m a creative solution seeker based in Heinsberg.
          </p>
          <p className='mb-4 leading-relaxed'>
            My focus goes to creating a smart product usage for people.
          </p>
          <p className='mb-4 leading-relaxed'>
            Currently I got my sciene-degree in human-machine-interaction or
            more simply said psychology-computer sciene-design.
          </p>
          <p className='mb-4 leading-relaxed'>
            With a 6 years of experience in business and design as rookie as
            Trainee/ working student, I’m now looking for my first full-time
            adventure.
          </p>
        </div>
      </div>
      <div className='flex flex-col items-center lg:items-start order-2 text-base z-10 mt-32 sm:mx-12 md:mx-24 lg:mx-32 xl:mx-64 2xl:mx-96'>
        <ul class='list-disc list-outside text-white'>
          <h2 class='leading-normal text-center mx-8 text-2xl color-y'>
            How I think about design 👩‍💻
          </h2>
          <li class='font-thin mt-8 ml-16 mr-8'>
            UX/ UI Design is like architecture for digital products
          </li>
          <li class='font-thin mt-4 ml-16 mr-8'>
            Users should feel comfortable and lighthearted during use
          </li>
          <li class='font-thin mt-4 ml-16 mr-8'>
            The use of a product should give the feeling of coming home to your
            own four walls
          </li>
          <li class='font-thin mt-4 ml-16 mr-8'>
            and it all started when I discovered more and more inefficient
            processes that needed a smart update to be more resource saving
          </li>
        </ul>
      </div>

      <div className='flex flex-col order-2 text-base z-10 sm:mx-12 mt-32 md:mx-24 lg:mx-32 xl:mx-64 2xl:mx-96'>
        <h2 class='leading-normal text-center lg:items-center mx-8 text-2xl color-y'>
          What I've done before 👷🏼‍♀️
        </h2>
        <ul class='list-disc list-outside text-white'>
          <li class='flex flex-col lg:flex-row font-thin mt-8 ml-16 md:mx-16 sm:ml-0 sm:mr-0 lg:ml-16'>
            <text>1 year (2020 - 2021)</text>
            <text>
              <span
                class='lg:pl-2 link-ex'
                onClick={() => window.open('https://convidera.com/', '_blank')}
              >
                // Convidera GmbH
              </span>
            </text>
            <text class='lg:pl-2 '>// Produtct designer</text>
          </li>
          <li class='flex flex-col lg:flex-row font-thin mt-8 ml-16 md:mx-16 sm:ml-0 sm:mr-0 lg:ml-16'>
            <text>2,5 years (2017 - 2020)</text>
            <text>
              <span
                class='lg:pl-2 link-ex'
                onClick={() =>
                  window.open('https://www.schacht.one/', '_blank')
                }
              >
                // Schacht One GmbH
              </span>
            </text>
            <text class='lg:pl-2'>// Product designer</text>
          </li>
          <li class='flex flex-col lg:flex-row font-thin mt-8 ml-16 md:mx-16 sm:ml-0 sm:mr-0 lg:ml-16'>
            <text>3 years</text>
            <text>
              <span
                class='lg:pl-2 link-ex'
                onClick={() =>
                  window.open('https://www.otto-gourmet.de/', '_blank')
                }
              >
                // Otto Gourmet GmbH
              </span>
            </text>
            <text class='lg:pl-2'>// Apprenticeship businesswomen</text>
          </li>
        </ul>
      </div>

      <div className='flex flex-col order-2 text-base z-10 sm:mx-12 mt-32 md:mx-24 lg:mx-32 xl:mx-64 2xl:mx-96'>
        <h2 class='leading-normal text-center lg:items-center mx-8 text-2xl color-y'>
          Getting my first knowledge 👩‍🏫
        </h2>
        <ul class='list-disc list-outside text-white'>
          <li class='flex flex-col font-thin mt-8 ml-16 mr-8 sm:ml-0 sm:mr-0 md:mx-16 lg:ml-16'>
            <text>Hochschule Ruhr West (2016 - 2021)</text>
            <text>// Bachelor of Science</text>
            <text>// Human-machine-interaction</text>
          </li>
          <li class='flex flex-col lg:flex-row font-thin mt-8 ml-16 mr-8 sm:ml-0 sm:mr-0 md:mx-16 lg:ml-16'>
            <text>Gesamtschule (2011 - 2012)</text>
            <text class='lg:pl-2'>// without degree</text>
          </li>
          <li class='flex flex-col lg:flex-row font-thin mt-8 ml-16 mr-8 sm:ml-0 sm:mr-0 md:mx-16 lg:ml-16'>
            <text>Hauptschule (2006 - 2011)</text>
            <text class='lg:pl-2'>// Fachoberschulreife</text>
          </li>
        </ul>
      </div>
      <div className='flex flex-col items-center lg:items-start order-2 text-base z-10 sm:mx-12 mt-32 md:mx-24 lg:mx-32 xl:mx-64 2xl:mx-96'>
        <ul class='list-none list-outside text-white'>
          <h2 class='leading-normal text-center mx-8 text-2xl color-y'>
            Outside of work
          </h2>

          <li class='list-disc font-thin mt-4 ml-16 mr-8'>
            If it's sunny outside, I'm most likely on an adventure with my bike
            right now - capturing and pedaling as many sun
            <span
              class='mx-1 link-ex'
              onClick={() =>
                window.open('https://www.strava.com/athletes/7574226', '_blank')
              }
            >
              hours/ kilometers
            </span>
            for a year 🚴‍♀️💨
          </li>

          <li class='list-disc font-thin mt-4 ml-16 mr-8'>
            <li>
              I lose my mind on
              <span
                class='ml-1 link-ex'
                onClick={() =>
                  window.open(
                    'https://www.last.fm/user/minkmountainjr',
                    '_blank'
                  )
                }
              >
                music
              </span>
              , the composition and the technology behind it 🎧
            </li>
            <li class='list-none'>
              and a 5-second dance may also not be missing
            </li>
          </li>
          <li class='list-disc font-thin mt-4 ml-16 mr-8'>
            Currently learning frontend dev (react.js) to be finally able to
            realize some ideas of mine
          </li>
          <li class='list-disc font-thin mt-4 ml-16 mr-8'>
            Like you have read before - I also inspired by the smart
            architecture of tiny houses
          </li>

          <li class='font-semibold mt-16 ml-16 mr-8'>
            Bonus and funniest facts about me 🥳
          </li>
          <li class='list-disc font-thin mt-4 ml-16 mr-8'>
            I can't really smell and taste, so cooking with me is a lot of fun
          </li>
          <li class='list-disc font-thin mt-4 ml-16 mr-8'>
            I am so small that I can walk under a volleyball net without bending
            down
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Who;
