import React from 'react';
import memoji from '../assets/memoji.svg';
import bubble from '../assets/bubble.svg';

function Hero() {
  return (
    <div>
      <img src={memoji} alt='memoji' />
      <img src={bubble} alt='bubble' />
      <p>
        Als UX/ UI-Designer entwickle ich empathiegetriebene Lösungen, die
        Nutzenden Zeit zurück geben und ihnen ein Gefühl von „nach Hause kommen“
        vermitteln 🏠❤️
      </p>
      <p>
        Meine Geheimwaffen sind: Interesse an Frontend Entwicklung und viel
        Fahrrad fahren 🚴‍♀️ 💨
      </p>
    </div>
  );
}

export default Hero;
