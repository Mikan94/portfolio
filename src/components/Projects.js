import React, { useState } from 'react';
import CardItems from './CardItems';
import nazzle from '../assets/nazzle.png';
import smartdress from '../assets/smartdress.png';
import storyline from '../assets/storyline.png';
import hel from '../assets/hel.png';

function Projects() {
  return (
    <div id='projects' className='container mx-auto'>
      <h1 className='text-center text-4xl lg:text-6xl mx-8 sm:mx-16 lg:mx-32 xl:mx-48 2xl:mx-80'>
        Digital 🏠
      </h1>
      <div class='mt-16 md:mt-24'>
        <CardItems
          bg='bg-smartdress'
          text='Smartdress'
          subtitle='Bachelor Thesis'
          description='Your personal outfit advisor with whom you always know what to wear today'
          src={smartdress}
          link='/project/smartdress'
        />
        <div class='card-spacing' />
        <CardItems
          bg='bg-nazzle'
          text='Nazzle'
          subtitle='Project (Study)'
          description='Playfully explore nature and solve exciting puzzles with augmented reality'
          src={nazzle}
          link='/project/nazzle'
        />
        <div class='card-spacing' />
        <CardItems
          bg='bg-storyline'
          text='Storyline'
          subtitle='Foundation project (Study)'
          description='Companion for students for the playful prevention of fake news and cyber bullying in social networks'
          src={storyline}
          link='/project/storyline'
        />
        <div class='card-spacing' />
        <CardItems
          bg='bg-hel'
          text='Hygiene Lab'
          subtitle='Client work'
          description='Creating a storytelling experience of visiting public restrooms with contactless products'
          src={hel}
          link='/project/hygienelab'
        />
      </div>
    </div>
  );
}

export default Projects;
