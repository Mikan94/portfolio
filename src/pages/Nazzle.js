import React, { useState, useEffect } from 'react';
import './Nazzle.css';
import nazzle from '../assets/nazzle.png';
import x from '../assets/x.svg';

import { Link, useHistory } from 'react-router-dom';

function Nazzle() {
  const history = useHistory();

  const [scrollPos, setScrollPos] = useState(false);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;

    if (currentScrollPos < 100) {
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

      <div class='hero-bg-n flex flex-row justify-center py-32'>
        <div class='flex flex-col pt-16'>
          <h2>Nazzle</h2>
          <p>Here is a fucking description</p>
        </div>
        <img src={nazzle} class='pl-32' />
        <section class='fixed bottom-8 mx-auto'>
          <p class={visible ? 'scroll-ani bounce' : 'hidden'}>Scroll 👇</p>
        </section>
      </div>

      <div class='flex flex-col lg:flex-row'>
        <div class='flex flex-row'>
          <div class='flex-col'>
            <h2 class='color-y'>Overview</h2>
            <p>
              !!!!NEEDS DESCRIPTION!!!! ist ein mobiler Outfit-Berater, der den
              Nutzenden Outfits anhand der eigenen Kleidungsstücken empfiehlt.
              Sie soll den Nutzenden täglich bei der Beantwortung der Fragen
              „Was ziehe ich heute an?“
            </p>
          </div>
          <div class='flex flex-col'>
            <img src={nazzle} />
          </div>
        </div>
      </div>

      <div class='flex flex-row'>
        <div class='flex flex-col'>
          <h3>Project</h3>
          <p>Fictitious university project of the course Mobile Interaction</p>
        </div>
        <div class='flex flex-col'>
          <h3>Time</h3>
          <p>
            Develop in 8 weeks an application with integrated augmented reality
          </p>
        </div>
        <div class='flex flex-col'>
          <h3>Team</h3>
          <p>Team of 4 Human-machine-Interaction Students</p>
        </div>
        <div class='flex flex-col'>
          <h3>Role</h3>
          <p>UX Designer</p>
          <p>UI Designer</p>
        </div>
      </div>

      <div>
        <h2>!!!!Needs Question</h2>
        <div class='flex flex-row'>
          <div class='flex flex-col'>
            <h3>Problem</h3>
            <p>
              In the past, children only played outside and only played indoors
              when there was bad weather outside. Today, things look very
              different. Primarily, children stay indoors and sit in front of
              their game consoles.
              <p>How might we get young people to spend more time in nature?</p>
            </p>
          </div>
          <div class='flex flex-col'>
            <h3>Ziel</h3>
            <p>
              We developed a mobile application in which the users have to solve
              puzzles in nature. The technology used is augmented reality, which
              allows users to solve the puzzle. To do this, they see the puzzle
              on the smartphone screen used and can interact with elements of
              the game on it.
            </p>
          </div>
        </div>
      </div>

      <div class='flex flex-col'>
        <div class='flex flex-col'>
          <h3>Sneak Peek solution</h3>
        </div>
        <div class='flex flex-row w-screen'>
          <img src={nazzle} />
          <img src={nazzle} />
          <img src={nazzle} />
          <img src={nazzle} />
        </div>
        <button>bring me to solution</button>
      </div>

      <div class='flex flex-col'>
        <h2>Research</h2>
        <div class='flex flex-col'>
          <h3>User research</h3>
          <p>
            What are the characteristics of people who spend a lot of time
            playing smartphone games? We wanted to find out in the target group
            analysis and looked at some mobile games. Further research into the
            games, such as Pokemon Go, was able to provide us with information
            about which target group spends a lot of time behind the smartphone
            screen.
          </p>
        </div>
        <div class='flex flex-row'>
          <div class='flex'>
            <img src={nazzle} />
          </div>
          <div class='flex flex-row flex-wrap'>
            <div class='flex flex-col'>
              <p>14 years</p>
              <p>Age</p>
            </div>
            <div class='flex flex-col'>
              <p>Student</p>
              <p>Living situation</p>
            </div>
            <div class='flex flex-col'>
              <p>Soccer, Fifa</p>
              <p>Hobbies</p>
            </div>
            <div class='flex flex-col'>
              <p>1 hours</p>
              <p>Playing time (Smartphone)</p>
            </div>
            <div class='flex flex-col'>
              <p>3 hours</p>
              <p>Playing time (Computer)</p>
            </div>
            <div class='flex flex-col'>
              <p>Pokemon Go</p>
              <p>Favorite game (Smartphone)</p>
            </div>
            <div class='flex flex-col'>
              <p>Fifa 19</p>
              <p>Favorite game (Computer)</p>
            </div>
          </div>
          <p>
            These information we gain it over some interviews with our younger
            siblings and statistics from statista.
          </p>
        </div>
        <div class='flex flex-col'>
          <h3>Market analysis</h3>
          <p>
            The market analysis shows that many applications make good use of
            the technology. Nevertheless, the analysis showed that the virtual
            objects displayed often had no direct connection to the context. It
            was therefore important to ensure that the virtual objects were
            significantly integrated into the game.{' '}
          </p>
          <img class='marktanalyse bild von smartdress' src={nazzle} />
        </div>
      </div>
    </div>
  );
}

export default Nazzle;
