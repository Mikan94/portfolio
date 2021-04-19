import React, { useState } from 'react';
import CardItems from './CardItems';
import nazzle from '../assets/nazzle.png';
import smartdress from '../assets/smartdress.png';
import storyline from '../assets/2.png';
import hel from '../assets/hel.png';

function Projects() {
  return (
    <div id='projects' className='container mx-auto'>
      <h1 className='line outline absolute ml-8 -mt-2 z-0 text-xl'>Projects</h1>

      <CardItems
        bg='bg-smartdress'
        text='Smartdress'
        subtitle='Project (Studium)'
        description='Spielerisch die Natur erkunden und
spannende Rätsel mit Augmented
Reality lösen'
        src={smartdress}
        link='/project/smartdress'
      />

      <CardItems
        bg='bg-nazzle'
        text='Nazzle'
        subtitle='Project (Studium)'
        description='Spielerisch die Natur erkunden und
spannende Rätsel mit Augmented
Reality lösen'
        src={nazzle}
        link='/project/nazzle'
      />

      <CardItems
        bg='bg-storyline'
        text='Storyline'
        subtitle='Forschungsprojekt (Studium)'
        description='Companion für Schüler zur 
spielerischen Prävention von
Fake News und Cyber Mobbing
in sozialen Netzwerken'
        src={storyline}
        link='/project/storyline'
      />

      <CardItems
        bg='bg-hel'
        text='Hygiene Lab'
        subtitle='Client work'
        description='Schaffen eines erzählenswertens
Erlebnis vom Besuch öffentlicher
Toiletten mit kontaktlosen Produkten'
        src={hel}
        link='/project/hygienelab'
      />

      <CardItems
        bg='bg-nazzle'
        text='Songstories'
        subtitle='Project (Studium)'
        description='Spielerisch die Natur erkunden und
spannende Rätsel mit Augmented
Reality lösen'
        src={nazzle}
        link='/project/songstories'
      />
    </div>
  );
}

export default Projects;
