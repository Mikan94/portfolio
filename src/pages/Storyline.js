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

      <div class='hero-bg-sl flex flex-row justify-center py-32'>
        <div class='flex flex-col pt-16'>
          <h2>Storyline</h2>
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
            <h2 class='color-y'>Overview</h2>
            <p>
              Storyline is an application to be used specifically in schools to
              sensitize students to toxic content distributed via the Internet.
              For this a playful concept was used, which is based on principle
              of storytelling and involves the students interactively in the
              stories.
            </p>
          </div>
          <div class='flex flex-col'>
            <img src={storyline} />
          </div>
        </div>
      </div>

      <div class='flex flex-row'>
        <div class='flex flex-col'>
          <h3>Project type</h3>
          <p>Research project COURAGE 4er Team</p>
        </div>
        <div class='flex flex-col'>
          <h3>Time</h3>
          <p>8 weeks (2019)</p>
        </div>
        <div class='flex flex-col'>
          <h3>Team</h3>
          <p>Team of 4 Human-machine-Interaction Students</p>
        </div>
        <div class='flex flex-col'>
          <h3>Role</h3>
          <p>UI Designer</p>
        </div>
        <div class='flex flex-col'>
          <h3>What I've done</h3>
          <p>Branding</p>
          <p>Game Design</p>
          <p>UI Design</p>
          <p>Mockups</p>
        </div>
      </div>

      <div>
        <h2>Was ziehe ich heute an?</h2>
        <div class='flex flex-row'>
          <div class='flex flex-col'>
            <h3>Problem</h3>
            <p>TBD!!!!!!!</p>
          </div>
          <div class='flex flex-col'>
            <h3>Solution</h3>
            <p>TBD!!!!!!</p>
          </div>
        </div>
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

      <div class='flex flex-col'>
        <h2>Conecept</h2>
        <p>
          The sensitizing takes place through interactive storytelling, where
          individual stories are told and the students can influence the further
          course. Stories are more memorable than sober facts. Active action in
          the strands contributes to this and leads to more conscious learning.
        </p>
      </div>

      <div class='flex flex-col'>
        <h2>Challenges and solution</h2>
        <p>
          There were two challenges during the conception of the application.
          The first was that a registration process should be considered in
          which the user logs in anonymously, but in later re-tests, data is
          assigned exactly to this user. The second challenge was that the
          design should be as neutral as possible and not too specific to age
          groups, as the age of the user groups varies widely.
        </p>
        <p>
          In the first challenge, it was decided that the user should first
          select an avatar and then select exactly the same avatar again in the
          next test. In order to create a neutral design for different age
          groups, the focus was placed on a few colours. Mainly call to action
          buttons were given a bright color and the menu was equipped with
          theme-specific colors.
        </p>
      </div>

      <div class='flex flex-col'>
        <h3>Styleguide</h3>
        <div class='flex flex-col'>
          <p>description of name/logo</p>
          <img src={storyline} />
        </div>
        <div class='flex flex-col'>
          <p>description of color</p>
          <img src={storyline} />
        </div>
        <div class='flex flex-col'>
          <div class='flex flex-col'>
            <p>description of typographo 1</p>
            <img src={storyline} />
          </div>
          <div class='flex flex-col'>
            <p>description of typographo 2</p>
            <img src={storyline} />
          </div>
        </div>
      </div>

      <div class='flex flex-col'>
        <h2>UI Concept</h2>
        <p>here are missing a description</p>
        <div class='flex flex-col'>
          <h3>User Flow</h3>
          <p>
            The guidance through the application is linear up to the execution
            of the chapters. The user is guided through each process in an
            explanatory manner.
          </p>
          <img src={storyline} />
        </div>
        <div class='flex flex-col'>
          <h3>Wireframes</h3>
          <p>Description missing</p>
          <img src={storyline} />
        </div>
        <div class='flex flex-col'>
          <h3>Final product</h3>
          <p>MISSING DESCRIPTION</p>
          <div class='flex flex-col'>
            <h4>Login</h4>
            <p>
              The registration process has been reduced to a minimum so that the
              student does not have to provide any personal information. Only
              his avatar can be chosen. Tracing back to the student is therefore
              not possible.
            </p>
            <img src={storyline} />
            <img src={storyline} />
            <img src={storyline} />
          </div>
          <div class='flex flex-col'>
            <h4>System errors</h4>
            <p>
              Two hints are displayed during the logon process. The first is
              when the avatar is selected, as it must be reused in later tests
              if the student is to remember it. The other notification is when a
              Student wishes to start the game early if he or she has not
              submitted all the information.
            </p>
            <img src={storyline} />
            <img src={storyline} />
            <img src={storyline} />
          </div>
          <div class='flex flex-col'>
            <h4>Onboarding</h4>
            <p>
              Onboarding has only three explanations to the game. Below three
              points are displayed, giving the user an overview of the process.
              The user also has the option to leave the process prematurely via
              „Skip“. However, this has been positioned in such a way that it is
              not a faster-action option.
            </p>
            <img src={storyline} />
            <img src={storyline} />
            <img src={storyline} />
          </div>
          <div class='flex flex-col'>
            <h4>Overview game capitle</h4>
            <p>
              The overview of the chapters is represented in a map form with a
              teaser text. A click opens the map and gives a deeper insight into
              the chapter.
            </p>
            <img src={storyline} />
            <img src={storyline} />
          </div>
          <div class='flex flex-col'>
            <h4>Inside story</h4>
            <p>
              The chapter is presented in video form and then summarized by
              text. The user then has three choices or can influence the events
              of the chapter with his selection.
            </p>
            <img src={storyline} />
            <img src={storyline} />
          </div>
        </div>
      </div>

      <div class='flex flex-col'>
        <h2>Conlusion</h2>
        <p>MISSING DESCRIPTION</p>
      </div>
    </div>
  );
}

export default Storyline;
