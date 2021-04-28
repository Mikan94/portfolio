import React, { useState, useEffect } from 'react';
import './pages.css';
import nazzle from '../assets/nazzle.png';
import x from '../assets/x.svg';
import s1 from '../assets/nazzle/1.png';
import s2 from '../assets/nazzle/2.png';
import s3 from '../assets/nazzle/3.png';
import s4 from '../assets/nazzle/4.png';
import color from '../assets/nazzle/color.png';
import f1 from '../assets/nazzle/f1.png';
import f2 from '../assets/nazzle/f2.png';
import f4 from '../assets/nazzle/f4.png';
import f5 from '../assets/nazzle/f5.png';
import f6 from '../assets/nazzle/f6.png';
import flow from '../assets/nazzle/flow.png';
import market from '../assets/nazzle/market.png';
import name from '../assets/nazzle/name.png';
import persona from '../assets/nazzle/persona.png';
import sketches from '../assets/nazzle/sketches.png';
import typo from '../assets/nazzle/typo.png';
import wire from '../assets/nazzle/wire.png';
import preview from '../assets/nazzle/preview.png';

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

      <div class='hero-bg-n flex flex-col py-32 md:px-8 lg:px-16'>
        <div class='flex flex-col order-1 mx-8 mb-8 sm:mx-32 md:mx-48 lg:mx-72 xl:mx-96 2xl:pl-32 2xl:pt-16'>
          <h2 class='text-4xl mb-2'>Nazzle</h2>
          <p class='text-md'>
            Playfully explore nature and solve exciting puzzles with augmented
            reality
          </p>
        </div>
        <img
          src={nazzle}
          class='order-2 px-8 sm:px-32 md:px-48 lg:px-64 xl:px-96 2xl:mx-32'
        />
        <section class='container mx-auto fixed bottom-8'>
          <p class={visible ? 'scroll-ani bounce text-center' : 'hidden'}>
            Scroll 👇
          </p>
        </section>
      </div>

      <div class='flex flex-col lg:flex-row mx-8 sm:mx-16 md:mx-24 lg:mx-40 xl:mx-72 2xl:mx-96'>
        <div class='flex flex-col'>
          <div class='flex-col'>
            <h2 class='color-y mb-2 mt-16'>Overview</h2>
            <p>
              Nazzle is a playful application for children, which is experienced
              in nature. It is designed to lure children into nature through
              play. In doing so, they find themselves in a safe city park and
              can solve puzzles in it. Solving a puzzle is done with the
              interaction of the environment and the displayed objects on the
              smartphone screen. Augmented reality technology is used to combine
              both interaction elements.
            </p>
          </div>
        </div>
      </div>

      <div class='flex flex-col mx-8 sm:mx-16 md:mx-24 lg:mx-40 xl:mx-72 2xl:mx-8 '>
        <div class='flex flex-col mt-32 '>
          <h5 class='text-white'>Project type</h5>
          <p class='mr-24'>
            Fictitious university project of the course Mobile Interaction
          </p>
        </div>
        <div class='flex flex-col mt-8'>
          <h5 class='text-white'>Time</h5>
          <p>8 weeks (2019)</p>
        </div>
        <div class='flex flex-col mt-8'>
          <h5 class='text-white'>Team</h5>
          <p class='mr-32'>Team of 4 Human-machine-Interaction Students</p>
        </div>

        <div class='flex flex-col mt-8'>
          <h5 class='text-white'>My Role</h5>
          <p>UX Designer</p>
          <p>UI Designer</p>
        </div>
        <div class='flex flex-col mt-8'>
          <h5 class='text-white'>What I've done</h5>
          <p>Interviews</p>
          <p>Persona</p>
          <p>Market analysis</p>
          <p>Concept</p>
          <p>Game Design</p>
          <p>Prototype</p>
        </div>
      </div>

      <div class='flex flex-col mx-8 mt-96 sm:mx-16 md:mx-24 lg:mx-40 xl:mx-72 2xl:mx-96'>
        <h3 class='color-y'>
          How might we get young people to spend more time in nature?
        </h3>
        <div class='flex flex-col'>
          <div class='flex flex-col mt-8'>
            <h4>Problem</h4>
            <p>
              In the past, children always played outside and only played
              indoors when there was bad weather outside. Today, things look
              very different. Primarily, children stay indoors and sit in front
              of their game consoles.
            </p>
          </div>
          <div class='flex flex-col mt-48'>
            <h4>Solution</h4>
            <p>
              We developed a mobile application in which the users have to solve
              puzzles in nature. We've used the technology augmented reality to
              make it more attractive for the kids. The technology allows users
              to solve puzzles on their smartphone displays which also interacts
              with the real enviroment. To do this, they see the puzzle on the
              smartphone screen used and can interact with elements of the game
              on it.
            </p>
          </div>
        </div>
      </div>

      <div class='flex flex-col mt-8 mx-8 sm:mx-16 md:mx-24 lg:mx-40 xl:mx-72 2xl:mx-96 items-center'>
        <div class='flex flex-col'>
          <img src={preview} />
        </div>
        <Link
          class=''
          to='solution'
          smooth={true}
          duration={1000}
          spy={true}
          exact={true}
          offset={-50}
        >
          <div class='btn-j text-center mt-8'>Jump to solution</div>
        </Link>
      </div>

      <div class='flex flex-col mt-96 mx-8 sm:mx-16 md:mx-24 lg:mx-40 xl:mx-72 2xl:mx-96'>
        <h2 class='color-y'>Research</h2>
        <div class='flex flex-col mt-8'>
          <h3>User research</h3>
          <p>
            At the beginning we asked us: What are the characteristics of people
            who spend a lot of time playing smartphone or computer games?
            Therefore we have made a user research and after that some
            interviews with some kids of the target group. Also we looked at the
            market and how other games play with the technology augmented
            reality.
          </p>
        </div>
        <div class='flex flex-col mt-48'>
          <h4>Persona</h4>
          <p>
            After the user reasearch and some interviews we created Leon our
            Persona. This is Leon our Persona. He is 14 years old and played a
            lot of games. Leon is sporty and play soccer. Sometimes he prefer
            playing soccer on the console. He likes the connection with his
            friends when they are playing fifa.
          </p>
          <div class='flex mt-8'>
            <img src={persona} />
          </div>
        </div>
        <div class='flex flex-col mt-48'>
          <h3>Market analysis</h3>
          <p>
            The market analysis shows that many applications make good use of
            the technology. Nevertheless, the analysis showed that the virtual
            objects displayed often had no direct connection to the context. It
            was therefore important to ensure that the virtual objects were
            significantly integrated into the game.
          </p>
          <img class='mt-4 marktanalyse bild von smartdress' src={market} />
        </div>
      </div>

      <div class='flex flex-col mt-96 mx-8 sm:mx-16 md:mx-24 lg:mx-40 xl:mx-72 2xl:mx-96'>
        <h2 class='color-y'>Creating a solution</h2>
        <div class='flex flex-col mt-4'>
          <h3>Concept</h3>
          <p class=''>
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

          <div class='flex flex-col mt-48'>
            <h3>Sketches</h3>
            <p>
              To quickly capture initial ideas regarding the concept of the
              application, I drew them down on paper. After that, we went
              through two rounds of discussion as a team and discussed them. The
              result was that the presentation with a cartoon-like character
              could be most suitable for the children to develop a trustworthy
              and friendly basis. The rough draft of the interaction concept
              proved intuitive for us as a team and was further developed later
              on. Translated with www.DeepL.com/Translator (free version)
            </p>
            <img class='mt-4' src={sketches} />
          </div>
        </div>
        <div class='flex flex-col mt-48'>
          <h3>User Flow</h3>
          <p>
            In order to capture as many interaction points of the user as
            possible, I developed a user flow of the application as a basis. It
            was important to me that the flow is intuitive and has no dead end.
          </p>
          <img class='mt-8 sm:w-96' src={flow} />
        </div>
        <div class='flex flex-col mt-48'>
          <h3>Wireframes</h3>
          <p>
            The wireframes also served as preliminary work for the final
            prototype. These were discussed again in the team to make wording
            suitable for children and to check the logic of the application.
          </p>
          <img class='mt-8' src={wire} />
        </div>
        <div class='flex flex-col mt-48'>
          <h3>Styleguide</h3>
          <div class='flex flex-col mt-4'>
            <h4>Name definition</h4>
            <p>
              In fact, the name of the application came to us very quickly. It
              is a combination of the word "nature" and "puzzle". This is to
              reflect the aspect that this is an outdoor game and it's about
              solving puzzles.
            </p>
            <img class='mt-8 w-96' src={name} />
          </div>
          <div class='flex flex-col mt-48'>
            <h4>Choosing colors</h4>
            <p>
              Due to the fact that the application is primarily played by
              children, we decided to use slightly eye-catching colors.
            </p>
            <img class='mt-8 sm:w-96' src={color} />
          </div>
          <div class='flex flex-col mt-48'>
            <h4>The right font</h4>
            <p>
              Renogare is an elegant geometric font that reflects the use of
              technological innovation. The straight and rounded shape of the
              letters ensures high legibility on the smartphone display even on
              sunny days.
            </p>
            <img class='mt-8 sm:w-96' src={typo} />
          </div>
        </div>
        <div class='flex flex-col mt-96'>
          <h2 id='solution' class='color-y'>
            Final product
          </h2>
          <div class='flex flex-col mt-4'>
            <h4>Game character</h4>
            <p>
              From the beginning, a spherical fantasy figure accompanies the
              user through the various processes, which the user can personalize
              by entering a name. The figure is used to help the player get
              started and to assist in navigation or even within a puzzle.
            </p>
            <div class='flex flex-col lg:flex-row'>
              <img class='mt-4' src={f1} />
            </div>
          </div>
          <div class='flex flex-col mt-48'>
            <h4>Onboarding</h4>
            <p>
              Here the player is shown hints that the game can only be played in
              certain areas. For this purpose, permission to use the GPS sensor
              and camera, which are essential for using the application, is
              requested.
            </p>
            <div class='flex flex-col lg:flex-row'>
              <img class='mt-4' src={f2} />
            </div>
          </div>
          <div class='flex flex-col mt-48'>
            <h4>Navigation</h4>
            <p>
              A navigation system is integrated into the game, which guides the
              player to a terrain where the game can be played without danger.
              During the development of the concept it became clear that it is
              important to protect the players and not to offer them the
              possibility to play in dangerous places.
            </p>
            <div class='flex flex-col'>
              <img class='mt-4' src={f4} />
            </div>
          </div>
          <div class='flex flex-col mt-48'>
            <h4>Menu</h4>
            <p>
              As soon as the user has reached a safe terrain, all available
              puzzles are displayed in the menu window. These are distinguished
              in the display in: unlocked not yet played, unlocked and played or
              not yet unlocked. By clicking on the desired puzzle and then
              „Start game“ the player is led directly into the puzzle.
            </p>
            <div class='flex flex-col'>
              <img class='mt-4 pr-32 md:w-80' src={f5} />
            </div>
          </div>
          <div class='flex flex-col mt-48'>
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
              <img class='mt-4' src={f6} />
            </div>
          </div>
        </div>
      </div>
      {/* <div class='flex flex-col mt-48 mx-8 sm:mx-16 md:mx-24 lg:mx-40 xl:mx-72 2xl:mx-96'>
        <h2 class='color-y'>Conclusion</h2>
        <p>TBD</p>
      </div> */}
    </div>
  );
}

export default Nazzle;
