import React from 'react';
import x from '../assets/x.svg';

import { Link, useHistory, ScrollRestoration } from 'react-router-dom';

function Who() {
  const history = useHistory();

  return (
    <section class='container mx-auto'>
      <div>
        <button
          class='btn fixed z-40 top-4 right-4 sm:top-8 sm:right-8'
          onClick={() => {
            history.push('/');
          }}
        >
          <img src={x} />
        </button>
      </div>
      <div className='flex flex-col lg:flex-row mx-8 sm:mx-16 md:mx-28 xl:mx-48 2xl:mx-80 mt-16 md:mt-24 lg:mt-8'>
        <div className='flex mt-8 justify-center items-center'>
          <img
            className='img-change relative w-80 sm:w-80 lg:w-96 2xl:ml-64 z-10 self-center shadow-lg order-1 lg:ml-40 lg:mr-16 xl:ml-64 xl:mr-16'
            alt='img'
          />
        </div>
        <div className='flex flex-col items-center sm:items-start order-2 z-10 mt-8 sm:mx-4 lg:ml-24 lg:mr-8 xl:ml-40 md:mt-16 lg:mt-20 xl:mt-8'>
          <p className=''>I’m a creative solution seeker based in Heinsberg.</p>
          <p className='mb-8'>
            My focus goes to creating a smart product usage for people.
          </p>
          <p className='mb-8'>
            Currently I got my sciene-degree in human-machine-interaction or
            more simply said psychology-computer sciene-design.
          </p>
          <p className=''>
            With a 6 years of work experience in business and design as rookie
            as Trainee/ working student, I’m now looking for my first full-time
            adventure.
          </p>
        </div>
      </div>
      <div className='flex flex-col items-center order-2 text-base z-10 mt-32 sm:mx-12 md:mx-24 lg:mx-32 xl:mx-64 2xl:mx-96'>
        <ul class='list-none list-outside text-white'>
          <h2 class='mx-8 color-y'>How I think about design 👩‍💻</h2>
          <li class='mt-8 ml-8 mr-8'>
            UX/ UI Design is like architecture for digital products
          </li>
          <li class='mt-8 ml-8 mr-8'>
            Users should feel comfortable and lighthearted during use
          </li>
          <li class='mt-8 ml-8 mr-8'>
            The use of a product should give the feeling of coming home to your
            own four walls
          </li>
          <li class='mt-8 ml-8 mr-8'>
            And it all started when I discovered more and more inefficient
            processes that needed a smart update to be more resource saving
          </li>
        </ul>
      </div>

      <div className='flex flex-col order-2 z-10 sm:mx-12 mt-32 md:mx-24 lg:mx-32 xl:mx-64 2xl:mx-96'>
        <h2 class='mx-8 color-y'>What I've done before 👷🏼‍♀️</h2>
        <ul class='list-none list-outside text-white'>
          <li class='flex flex-col lg:flex-row mt-8 mx-8'>
            <li>1 year (2020 - 2021)</li>
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
          <li class='flex flex-col lg:flex-row mt-8 mx-8'>
            <li>2,5 years (2017 - 2020)</li>
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
          <li class='flex flex-col lg:flex-row mt-8 mx-8'>
            <li>3 years (2013 - 2016)</li>
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

      <div className='flex flex-col order-2 z-10 sm:mx-12 mt-32 md:mx-24 lg:mx-32 xl:mx-64 2xl:mx-96'>
        <h2 class='mx-8 color-y'>Getting my first knowledge 👩‍🏫</h2>
        <ul class='list-none list-outside text-white'>
          <li class='flex flex-col lg:flex-row mt-8 mx-8 sm:mx-8'>
            <li>Hochschule Ruhr West (2016 - 2021)</li>
            <text class='lg:pl-2'>// Bachelor of Science</text>
            <text class='lg:pl-2'>// Human-machine-interaction</text>
          </li>
          <li class='flex flex-col lg:flex-row mt-8 mx-8 sm:mx-8'>
            <li>Gesamtschule (2011 - 2012)</li>
            <text class='lg:pl-2'>// without degree</text>
          </li>
          <li class='flex flex-col lg:flex-row mt-8 mx-8 sm:mx-8'>
            <li>Hauptschule (2006 - 2011)</li>
            <text class='lg:pl-2'>// Fachoberschulreife</text>
          </li>
        </ul>
      </div>
      <div className='flex flex-col order-2 z-10 sm:mx-12 mt-32 md:mx-24 lg:mx-32 xl:mx-64 2xl:mx-96'>
        <ul class='list-none list-outside text-white'>
          <h2 class='mx-8 color-y'>Outside of work 🎁</h2>

          <li class='mt-8 ml-8 mr-8'>
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

          <li class='mt-4 ml-8 mr-8'>
            <li>
              I lose my mind to
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
          <li class='list-none mt-4 ml-8 mr-8'>
            Currently learning frontend dev (react.js) to be finally able to
            realize some ideas of mine
          </li>
          <li class='list-none mt-4 ml-8 mr-8'>
            Like you have read before - I also inspired by the smart
            architecture of tiny houses
          </li>

          <li class='font-bold text-md mt-12 ml-8 mr-8'>
            Bonus and funniest facts about me 🥳
          </li>
          <li class='mt-4 ml-8 mr-8'>
            I can't really smell and taste, so cooking with me is a lot of fun
          </li>
          <li class='mt-4 ml-8 mr-8'>
            I am so small that I can walk under a volleyball net without bending
            down
          </li>
          {/* <li class='list-disc mt-8 ml-8 mr-8'>
            Can play a bit soccer and table tennis and it's enough to beat some
            guys
          </li> */}
        </ul>
      </div>
    </section>
  );
}

export default Who;
