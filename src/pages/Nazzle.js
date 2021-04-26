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
          <h3>Project type</h3>
          <p>Fictitious university project of the course Mobile Interaction</p>
        </div>
        <div class='flex flex-col'>
          <h3>Time</h3>
          <p>
            Develop in 8 weeks an application with integrated augmented reality
            (2019)
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
        <div class='flex flex-col'>
          <h3>What I've done</h3>
          <p>Branding</p>
          <p>UI Design</p>
          <p>Mockups??????????</p>
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
            <h3>Solution</h3>
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
      <div class='flex flex-col'>
        <h2>Solution</h2>
        <div class='flex flex-col'>
          <h3>Concept</h3>
          <p>
            Using the information from the research process, a game for
            smartphones was developed in which the user tries to solve puzzles
            of any kind with virtual objects outdoors. The integrated technology
            Augmented Reality in combination with the game concept creates an
            immersive and unique gaming experience. In doing so, I paid special
            attention to the integration of the virtual objects in the game,
            where they are an essential part of the puzzle. In addition, the
            puzzles encourage an imaginative, creative and solution-oriented way
            of thinking.
          </p>

          <div class='flex flex-col'>
            <img src={nazzle} />
            <p>description of sketch</p>
          </div>
          <div class='flex flex-col'>
            <img src={nazzle} />
            <p>description of sketch</p>
          </div>
        </div>
        <div class='flex flex-col'>
          <h3>User Flow</h3>
          <p>description of user flow</p>
          <img src={nazzle} />
        </div>
        <div class='flex flex-col'>
          <h3>Wireframes</h3>
          <p>description of wireframes</p>
          <img src={nazzle} />
        </div>
        <div class='flex flex-col'>
          <h3>Styleguide</h3>
          <div class='flex flex-col'>
            <p>description of name</p>
            <img src={nazzle} />
          </div>
          <div class='flex flex-col'>
            <p>description of color</p>
            <img src={nazzle} />
          </div>
          <div class='flex flex-col'>
            <p>description of typography</p>
            <img src={nazzle} />
          </div>
        </div>
        <div class='flex flex-col'>
          <h3>Final product</h3>
          <div class='flex flex-col'>
            <h4>Game character</h4>
            <p>
              From the beginning, a spherical fantasy figure accompanies the
              user through the various processes, which the user can personalize
              by entering a name. The figure is used to help the player get
              started and to assist in navigation or even within a puzzle.
            </p>
            <div class='flex flex-col lg:flex-row'>
              <img src={nazzle} />
              <img src={nazzle} />
              <img src={nazzle} />
            </div>
          </div>
          <div class='flex flex-col'>
            <h4>Onboarding</h4>
            <p>
              Here the player is shown hints that the game can only be played in
              certain areas. For this purpose, permission to use the GPS sensor
              and camera, which are essential for using the application, is
              requested.
            </p>
            <div class='flex flex-col lg:flex-row'>
              <img src={nazzle} />
              <img src={nazzle} />
              <img src={nazzle} />
              <img src={nazzle} />
              <img src={nazzle} />
            </div>
          </div>
          <div class='flex flex-col'>
            <h4>Navigation</h4>
            <p>
              A navigation system is integrated into the game, which guides the
              player to a terrain where the game can be played without danger.
              During the development of the concept it became clear that it is
              important to protect the players and not to offer them the
              possibility to play in dangerous places.
            </p>
            <div class='flex flex-col lg:flex-row'>
              <img src={nazzle} />
              <img src={nazzle} />
              <img src={nazzle} />
            </div>
          </div>
          <div class='flex flex-col lg:flex-row'>
            <h4>Menu</h4>
            <p>
              As soon as the user has reached a safe terrain, all available
              puzzles are displayed in the menu window. These are distinguished
              in the display in: unlocked not yet played, unlocked and played or
              not yet unlocked. By clicking on the desired puzzle and then
              „Start game“ the player is led directly into the puzzle.
            </p>
            <div class='flex flex-col lg:flex-row'>
              <img src={nazzle} />
            </div>
          </div>
          <div class='flex flex-col'>
            <h4>In-Game</h4>
            <p>
              Basically, the puzzles are constructed in such a way that the
              Augmented Reality technology displays objects in the environment
              that help to solve the puzzle. The user has the possibility to
              combine different objects and create a new one or to use an object
              directly as a solution for the puzzle. If the user has no idea how
              to solve the puzzle, the figure from the onboarding appears as a
              support by clicking to the question mark right.
            </p>
            <div class='flex flex-col lg:flex-row'>
              <img src={nazzle} />
            </div>
          </div>
        </div>
      </div>
      <div class='flex flex-col'>
        <h2>Conclusion</h2>
        <p>MISSING DESCRIPTION</p>
      </div>
    </div>
  );
}

export default Nazzle;
