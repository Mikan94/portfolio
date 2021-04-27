import React, { useState, useEffect } from 'react';
import './pages.css';
import storyline from '../assets/storyline.png';
import x from '../assets/x.svg';
import cb from '../assets/storyline/c-b.png';
import cg from '../assets/storyline/c-g.png';
import cy from '../assets/storyline/c-y.png';
import f1 from '../assets/storyline/f1.png';
import f2 from '../assets/storyline/f2.png';
import f3 from '../assets/storyline/f3.png';
import f4 from '../assets/storyline/f4.png';
import f5 from '../assets/storyline/f5.png';
import flow from '../assets/storyline/flow.png';
import logo from '../assets/storyline/logo.png';
import preview from '../assets/storyline/preview.png';
import story from '../assets/storyline/Story.mp4';
import typo1 from '../assets/storyline/typo1.png';
import typo2 from '../assets/storyline/typo2.png';
import wire from '../assets/storyline/wire.png';

import { useHistory } from 'react-router-dom';
import { Link } from 'react-scroll';

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

      <div class='hero-bg-sl flex flex-col py-32 md:px-8 lg:px-16'>
        <div class='flex flex-col order-1 mx-8 mb-8 sm:mx-32 md:mx-48 lg:mx-72 xl:mx-96 2xl:pl-32 2xl:pt-16'>
          <h2 class='text-4xl mb-2'>Storyline</h2>
          <p class='text-md'>
            Companion for students for the playful prevention of fake news and
            cyber bullying in social networks
          </p>
        </div>
        <img
          src={storyline}
          class='order-2 px-8 sm:px-32 md:px-48 lg:px-64 xl:px-96 2xl:mx-32'
        />
        <section class='container mx-auto fixed bottom-8'>
          <p class={visible ? 'scroll-ani bounce text-center' : 'hidden'}>
            Scroll 👇
          </p>
        </section>
      </div>

      <div class='flex flex-col mt-16 lg:flex-row mx-8 sm:mx-16 md:mx-24 lg:mx-40 xl:mx-72 2xl:mx-96'>
        <div class='flex flex-col'>
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
        </div>
      </div>

      <div class='flex flex-col sm:flex-row mx-8 mt-16 sm:mx-16 md:mx-24 lg:mx-40 xl:mx-72 2xl:mx-96'>
        <div class='flex flex-col'>
          <div class='flex flex-col mt-8'>
            <h5 class='text-white'>Project type</h5>
            <p>Research project COURAGE 4er Team</p>
          </div>
          <div class='flex flex-col mt-8'>
            <h5 class='text-white'>Time</h5>
            <p>8 weeks (2019)</p>
          </div>
          <div class='flex flex-col mt-8'>
            <h5 class='text-white'>Team</h5>
            <p class='mr-32'>Team of 4 Human-machine-Interaction Students</p>
          </div>
        </div>
        <div class='flex flex-col'>
          <div class='flex flex-col mt-8 '>
            <h5 class='text-white'>MyRole</h5>
            <p>UI Designer</p>
          </div>
          <div class='flex flex-col mt-8'>
            <h5 class='text-white'>What I've done</h5>
            <p>Concept</p>
            <p>Game Design</p>
            <p>Prototype</p>
          </div>
        </div>
      </div>

      <div class='flex flex-col mx-8 mt-48 sm:mx-16 md:mx-24 lg:mx-40 xl:mx-72 2xl:mx-96'>
        <h3 class='color-y'>
          How can we playfully sensitize students to fake news and cyber
          bullying?
        </h3>
        <div class='flex flex-col'>
          <div class='flex flex-col mt-8'>
            <h4>Problem</h4>
            <p>
              Nowadays, children grow up with social networks as if it were
              their daily bread. Social networks have positive and negative
              aspects. More and more, however, the negative points are
              mentioned. Children find it difficult to distinguish between
              posted information and whether it is true or false. Other
              children, in turn, experience a new form of bullying, namely cyber
              bullying.
              <text>
                The sponsored research project COURAGE wants to investigate
                these issues more intensively.
                <text class='px-2'>
                  <span
                    class=' link-ex'
                    onClick={() =>
                      window.open('https://www.upf.edu/web/courage', '_blank')
                    }
                  >
                    COURAGE
                  </span>
                </text>
                wants to explore a solution for making children aware of the
                dangers in social networks in the best possible and long-lasting
                way.
              </text>
            </p>
          </div>
          <div class='flex flex-col mt-8 '>
            <h4>Solution</h4>
            <p>
              For this purpose, we developed a mobile application for students
              that would serve as a companion for them. The companion
              specializes in introducing students to the dangers of social
              networks in a playful and interactive way. To do this, awareness
              is raised through interactive storytelling, in which individual
              stories are told and the student can influence the further course
              of the story. The active telling of the story and influencing of
              it by the student brings about an active form of learning.
            </p>
          </div>
        </div>
      </div>

      <div class='flex flex-col mt-8 items-center'>
        <div class='flex flex-col mx-8 sm:mx-16 md:mx-24 lg:mx-40 xl:mx-72 2xl:mx-96'>
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

      <div class='flex flex-col mx-8 mt-48 sm:mx-16 md:mx-24 lg:mx-40 xl:mx-72 2xl:mx-96'>
        <h2 class='color-y'>Challenges and how we mastered them</h2>
        <p>
          Before the project began, we received two challenges that guided the
          development of the Companion. The project required that students
          participate in the COURAGE study once a school year using the
          application/Companion. Therefore, we were given the requirement that
          the application must be anonymous. Furthermore, the students were
          supposed to compose their own code with characters/ symbols, which
          should be entered by them when using the application again. The code
          was used in the study to collect data on a student across school
          years, but not to know which student it was. Since the application was
          to be used across school years, it was important to design it in a way
          that was equally visually appealing to 5th and 10th grade students.
        </p>
        <p>
          Regarding the registration, we decided that each class received its
          own symbols. Due to the unique symbols that only one class received,
          the anonymous tracing of the study results could be guaranteed.
          Regarding the neutral design of the application, a style guide was
          specially created to ensure the recognition value of the
          application/study.
        </p>
      </div>

      <div class='flex flex-col mx-8 mt-48 sm:mx-16 md:mx-24 lg:mx-40 xl:mx-72 2xl:mx-96'>
        <h2 class='color-y'>UI Concept</h2>
        <p>
          My focus in this project was primarily on the visual design and the
          creation of an application concept. It was important to me that the
          application is logical and intuitive to use. This should enable the
          teachers to carry out the study in one lesson and not have to explain
          the application to the children in advance in a time-consuming way.
        </p>
        <div class='flex flex-col mt-24'>
          <h3>User Flow</h3>
          <p>
            The guidance through the application is linear up to the execution
            of the chapters. The user is guided through each process in an
            explanatory manner.
          </p>
          <img class='mt-8' src={flow} />
        </div>
        <div class='flex flex-col mt-24'>
          <h3>Wireframes</h3>
          <p>
            Creating wireframes helps me translate the user flow into an
            interaction concept and include initial visual aspects. The creation
            was based on the main points of the user flow.
          </p>
          <img class='mt-8' src={wire} />
        </div>

        <div class='flex flex-col mt-24'>
          <h3 class=''>Styleguide</h3>
          <p>
            The research project envisaged testing from year to year how
            students deal with toxic issues in the meantime. Therefore, the
            application should have a recognition value. For this reason, we
            planned to create a style guide for branding and uniform
            presentation of the application.{' '}
          </p>
          <div class='flex flex-col mt-8'>
            <h4>Name definition</h4>
            <p>
              The logo should first of all represent the S of „Story“ and L of
              „Line“. The dots on the lines should show the different storylines
              in the story where the user can influence them. The L has a slight
              „fade out“ at the end, this stands for the fact that the stories
              have an open end and are meant to inspire reflection.
            </p>
            <img class='mt-8 w-64' src={logo} />
          </div>
          <div class='flex flex-col mt-16'>
            <h4>Colors</h4>
            <p>
              The color choice was limited to a bright yellow to strongly convey
              the theme of "toxic content". The other colors, such as gray and
              gray-blue, were to remain in the background and represent more
              technical elements of the application.{' '}
            </p>

            <div class='flex flex-col'>
              <img class='mt-8 w-36' src={cy} />
              <p>Color for active CTA Feedback for interaction</p>
            </div>
            <div class='flex flex-col'>
              <img class='mt-8 w-36 ' src={cb} />
              <p>Color for inactive CTA</p>
            </div>
            <div class='flex flex-col'>
              <img class='mt-8 w-36' src={cg} />
              <p>
                Color for interaction possibility that should not necessarily be
                perceived e.g. „Skip“ - Onboarding
              </p>
            </div>
          </div>

          <div class='flex flex-col mt-16'>
            <h4>Font</h4>
            <p>
              The font of the logo should give a strong but playful impression.
              The sans serif font „A Pompadour Bold Sample“ was recommended as
              the rounded soft letters and the straight-line geometry of the
              letters convey this.
            </p>
            <img class='mt-4 lg:pr-96' src={typo1} />
            <p class='mt-16'>
              The font „Verlag“ is a font that brings with it an unmistakable
              personality and objectivity. This is exactly what the application
              for the students is supposed to be. On the one hand personal/
              familiar and on the other lens, because nothing in the application
              should influence the student to a decision.
            </p>
            <img class='mt-4 lg:pr-96' src={typo2} />
          </div>
        </div>

        <div id='solution' class='flex flex-col mt-48'>
          <h2 class='color-y'>Final product</h2>
          <div class='flex flex-col mt-4'>
            <h4>Login</h4>
            <p>
              The registration process has been reduced to a minimum so that the
              student does not have to provide any personal information. Only
              his avatar can be chosen. Tracing back to the student is therefore
              not possible.
            </p>
            <img class='mt-4' src={f1} />
          </div>
          <div class='flex flex-col mt-24'>
            <h4>System errors</h4>
            <p>
              Two hints are displayed during the logon process. The first is
              when the avatar is selected, as it must be reused in later tests
              if the student is to remember it. The other notification is when a
              Student wishes to start the game early if he or she has not
              submitted all the information.
            </p>
            <img class='mt-4' src={f2} />
          </div>
          <div class='flex flex-col mt-24'>
            <h4>Onboarding</h4>
            <p>
              Onboarding has only three explanations to the game. Below three
              points are displayed, giving the user an overview of the process.
              The user also has the option to leave the process prematurely via
              „Skip“. However, this has been positioned in such a way that it is
              not a faster-action option.
            </p>
            <img class='mt-4' src={f3} />
          </div>
          <div class='flex flex-col mt-24'>
            <h4>Overview game capitle</h4>
            <p>
              The overview of the chapters is represented in a map form with a
              teaser text. A click opens the map and gives a deeper insight into
              the chapter.
            </p>
            <img class='mt-4' src={f4} />
          </div>
          <div class='flex flex-col mt-24'>
            <h4>Inside story</h4>
            <p>
              The chapter is presented in video form and then summarized by
              text. The user then has three choices or can influence the events
              of the chapter with his selection.
            </p>
            <img class='mt-4' src={f5} />
            <video
              class='rounded-md mt-8 w-screen'
              src={story}
              width='600'
              height='300'
              controls='controls'
              autoplay='true'
            />
          </div>
        </div>
      </div>

      {/* <div class='flex flex-col mx-8 mt-48 sm:mx-16 md:mx-24 lg:mx-40 xl:mx-72 2xl:mx-96'>
        <h2 class='color-y'>Conlusion</h2>
        <p>TBD</p>
      </div> */}
    </div>
  );
}

export default Storyline;
