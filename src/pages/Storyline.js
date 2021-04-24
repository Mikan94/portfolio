import React, { useState, useEffect } from 'react';
import './Storyline.css';
import storyline from '../assets/storyline.png';
import x from '../assets/x.svg';

import { useHistory } from 'react-router-dom';

function Storyline() {
  const history = useHistory();

  const [scrollPos, setScrollPos] = useState(false);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;

    if (currentScrollPos < 200) {
      setVisible(true);
    } else {
      setVisible(false);
    }

    setScrollPos(currentScrollPos);
  };

  useEffect(
    () => {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    },
    handleScroll,
    visible,
    setScrollPos
  );

  return (
    <div>
      <div>
        <button
          class='btn fixed z-40 top-4 right-4 sm:top-8 sm:right-8 bg-white transform hover:scale-110 transition duration-500 ease-in-out'
          onClick={() => {
            history.push('/');
          }}
        >
          <img src={x} />
        </button>
      </div>

      <div class='hero-bg-sl flex flex-row justify-center py-32'>
        <div class='flex flex-col pt-16'>
          <h2>SmartDress</h2>
          <p>Here is a fucking description</p>
        </div>
        <img src={storyline} class='pl-32' />
        <section class='fixed bottom-8 mx-auto'>
          <p class={visible ? 'scroll-ani bounce' : 'hidden'}>Scroll 👇</p>
        </section>
      </div>

      <div class='flex flex-col lg:flex-row'>
        <div class='flex flex-row'>
          <div class='flex-col'>
            <h2 class='color-y'>Beschreibung</h2>
            <p>
              SmartDress ist ein mobiler Outfit-Berater, der den Nutzenden
              Outfits anhand der eigenen Kleidungsstücken empfiehlt. Sie soll
              den Nutzenden täglich bei der Beantwortung der Fragen „Was ziehe
              ich heute an?“ helfen. Der Outfit-Berater berücksichtigt die
              aktuellen Bedürfnisse der Nutzenden bei der
              Outfitszusammenstellung. Das Integrieren der eigenen
              Kleidungsstücke erfolgt durch ein Foto und kurze Angaben.
            </p>
          </div>
          <div class='flex flex-col'>
            <img src={storyline} />
          </div>
        </div>
      </div>

      <div class='flex flex-row'>
        <div class='flex flex-col'>
          <h3>Project</h3>
          <p>Bachelor Thesis</p>
        </div>
        <div class='flex flex-col'>
          <h3>Time</h3>
          <p>10 weeks (2021)</p>
        </div>
        <div class='flex flex-col'>
          <h3>Role</h3>
          <p>UX Researcher</p>
          <p>UX Designer</p>
          <p>UI Designer</p>
        </div>
        <div class='flex flex-col'>
          <h3>Used methods</h3>
          <p>Interviews</p>
          <p>Marktanalyse</p>
          <p>Person</p>
          <p>Mockups</p>
        </div>
      </div>

      <div>
        <h2>Was ziehe ich heute an?</h2>
        <div class='flex flex-row'>
          <div class='flex flex-col'>
            <h3>Problem</h3>
            <p>
              Täglich stehen die Menschen vor ihrem Kleiderschrank und wissen
              nicht was sie anziehen sollen. In der heutigen Zeit haben die
              Menschen ausreichend Kleidungsstücke zum anziehen. Doch fehlt es
              ihnen an Kreativität und Orientierungspunkten zum geschickten
              kombinieren einzelner Kleidungsstücke. Also wie kann das Dilemma
              beseitigt werden?
            </p>
          </div>
          <div class='flex flex-col'>
            <h3>Ziel</h3>
            <p>
              Mein Ziel war es herauszufinden wie der Mensch schrittweise bei
              der Outfiterstellung vorgeht welche Indikatoren dabei relevant
              sind und ob eine mobile Anwendung als möglicher Lösungsansatz
              helfen kann.
            </p>
          </div>
        </div>
      </div>

      <div class='flex flex-col'>
        <h3>Pre Story</h3>
        <p>
          Nach den ersten Gehversuchen 2017 entschloss ich mich diesem Projekt
          in meiner Bachelor Thesis ausführlicher und vor allem strukturierter
          zu widmen. Es entstand eine mobile Anwendung mit dem Namen SmartDress,
          die als Outfit-Berater den Nutzenden zur Seite stehen soll. Sie
          schlägt den Nutzenden Outfits anhand ihrer eigenen Kleidungsstücke
          vor.
        </p>
      </div>

      <div class='flex flex-col'>
        <div class='flex flex-col'>
          <h3>Sneak Peek solution</h3>
        </div>
        <div class='flex flex-row w-screen'>
          <img src={storyline} />
        </div>
        <button>bring me to solution</button>
      </div>

      <div class='flex flex-row'>
        <div class='flex flex-col'>
          <h2>10</h2>
          <p>User surveys</p>
        </div>
        <div class='flex flex-col'>
          <h2>10</h2>
          <p>User interviews</p>
        </div>
        <div class='flex flex-col'>
          <h2>11</h2>
          <p>Usability test</p>
        </div>
        <div class='flex flex-col'>
          <h2>44</h2>
          <p>Screens</p>
        </div>
      </div>
    </div>
  );
}

export default Storyline;
