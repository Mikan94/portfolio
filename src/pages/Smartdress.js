import React, { useState, useEffect } from 'react';
import './pages.css';
import smartdress from '../assets/smartdress.png';
import x from '../assets/x.svg';
import presol from '../assets/smartdress/1.png';
import hero from '../assets/smartdress/hero.png';
import market from '../assets/smartdress/6.png';
import storyboard from '../assets/smartdress/7.png';
import type from '../assets/smartdress/type.png';
import persona from '../assets/smartdress/persona.png';
import flow from '../assets/smartdress/flow.png';
import sketches from '../assets/smartdress/sketches.png';
import u1 from '../assets/smartdress/u1.png';
import u2 from '../assets/smartdress/u2.png';
import u3 from '../assets/smartdress/u3.png';
import wire from '../assets/smartdress/wire.png';
import pro from '../assets/smartdress/pro.png';
import f1 from '../assets/smartdress/f1.mov';
import f2 from '../assets/smartdress/f2.mov';
import f3 from '../assets/smartdress/f2.mov';

import { useHistory } from 'react-router-dom';
import { Link } from 'react-scroll';

function Smartdress() {
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

      <div class='hero-bg-sd flex flex-col py-32 md:px-16 lg:px-16'>
        <div class='flex flex-col order-1 mx-8 mb-8 sm:mx-32 md:mx-48 lg:mx-72 xl:mx-96 2xl:pl-32 2xl:pt-16'>
          <h2 class='text-4xl mb-2'>Smartdress</h2>
          <p class='text-md'>
            Your personal outfit advisor with whom you always know what to wear
            today
          </p>
        </div>
        <img
          src={smartdress}
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
          <div class='flex-col order-2'>
            <h2 class='color-y mb-2'>Overview</h2>
            <p class=''>
              SmartDress is a mobile outfit advisor that recommends outfits to
              users based on their own clothes. It is designed to help users
              answer the questions "What do I wear today?" on a daily basis. The
              Outfit Advisor takes the user's current needs into account when
              putting together outfits. The integration of the user's own items
              of clothing is done by means of a photo and brief details.
            </p>
          </div>
          <div class='flex flex-col'>
            <img src={hero} class='order-1 px-8 my-8 sm:mx-16 lg:mx-32' />
          </div>
        </div>
      </div>

      <div class='flex flex-col sm:flex-row mx-8 mt-16 sm:mx-16 md:mx-24 lg:mx-40 xl:mx-72 2xl:mx-96'>
        <div class='flex flex-col'>
          <div class='flex flex-col mt-8'>
            <h5 class='text-white'>Project type</h5>
            <p class=''>Bachelor Thesis</p>
          </div>
          <div class='flex flex-col mt-8 sm:mt-24'>
            <h5 class='text-white'>Time</h5>
            <p>10 weeks (2021)</p>
          </div>
        </div>

        <div class='flex flex-col sm:ml-32'>
          <div class='flex flex-col mt-8'>
            <h5 class='text-white'>My Role</h5>
            <p>UX Researcher</p>
            <p>UX Designer</p>
            <p>UI Designer</p>
          </div>
          <div class='flex flex-col mt-8'>
            <h5 class='text-white'>Used methods</h5>
            <p>Marktanalyse</p>
            <p>Interviews</p>
            <p>Personas</p>
            <p>Conecept</p>
            <p>Prototype</p>
          </div>
        </div>
      </div>

      <div class='flex flex-col mx-8 mt-48 sm:mx-16 md:mx-24 lg:mx-40 xl:mx-72 2xl:mx-96'>
        <h3 class='color-y'>What am I going to wear today? 🤔</h3>
        <div class='flex flex-col'>
          <div class='flex flex-col mt-8'>
            <h4>Problem</h4>
            <p>
              Every day people stand in front of their closet and do not know
              what to wear. In this day and age, people have enough clothes to
              wear. But they lack creativity and landmarks to skillfully combine
              individual items of clothing. So how can the dilemma be
              eliminated?
            </p>
          </div>
          <div class='flex flex-col mt-16'>
            <h4>Solution</h4>
            <p>
              My goal was to find out how people proceed step-by-step in
              creating an outfit, which indicators are relevant and whether a
              mobile application can help as a possible solution.
            </p>
          </div>
        </div>
      </div>

      <div class='flex flex-col mt-8 mx-8 sm:mx-16 md:mx-24 lg:mx-40 xl:mx-72 2xl:mx-96 items-center'>
        <div class='flex flex-col'>
          <img src={presol} />
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

      <div class='flex flex-row mx-8 mt-24 justify-center'>
        <div class='flex flex-col mx-8 content-center'>
          <div class='flex flex-col text-center'>
            <h2 class=''>10</h2>
            <p>User surveys</p>
          </div>
          <div class='flex flex-col text-center mt-8'>
            <h2>11</h2>
            <p>Usability test</p>
          </div>
        </div>
        <div class='flex flex-col mx-8 content-center'>
          <div class='flex flex-col text-center'>
            <h2>10</h2>
            <p>User interviews</p>
          </div>
          <div class='flex flex-col text-center mt-8'>
            <h2>44</h2>
            <p>Screens</p>
          </div>
        </div>
      </div>

      <div class='flex flex-col mx-8 mt-48 sm:mx-16 md:mx-24 lg:mx-40 xl:mx-72 2xl:mx-96'>
        <h2 class='color-y'>🚀 Who doesn't have the dilemma?</h2>
        <div class='flex flex-col mt-8'>
          <p>
            It all started in 2017 in front of my closet, Where I asked myself,
            "What am I going to wear?"
          </p>

          <p class='mt-2'>
            As a student and weekend home traveler, I was always faced with the
            dilemma of packing my travel backpack efficiently. I was annoyed
            that this intention always involved a lot of time and planning. So
            how cool would it be if a smart assistant could help me with this?
            And even show me what clothes I should pack for several days?
          </p>

          <p class='mt-2'>
            I quickly told a few friends about this idea. It turned out that
            most of them also face the same dilemma every day. Over the next few
            weeks, I frequently received the feedback "Anne, when will the app
            be ready? I could have used it so much this morning". And so began
            the journey of SmartDress and now written down in my Bachelor
            Thesis.
          </p>
        </div>
      </div>

      <div class='flex flex-col mx-8 mt-48 sm:mx-16 md:mx-24 lg:mx-40 xl:mx-72 2xl:mx-96'>
        <h2 class='color-y'>📚 And what is behind the dilemma?</h2>
        <div class='flex flex-col'>
          <div class='flex flex-col mt-8'>
            <p>
              Before I started working, I wanted to know more about fashion. I
              think it's important to look at the subject in theory first. This
              gives me an overview that helps me make more prudent decisions.
            </p>
          </div>
          <div class='flex flex-col'>
            <p>
              I asked myself the following questions:
              <li>Why we actually dress and not walk around naked</li>
              <li>If and what we communicate with our clothes</li>
              <li>And why is it so difficult for us to dress appropriately?</li>
            </p>
          </div>
        </div>

        <div class='flex flex-col mt-16'>
          <div class='flex flex-col'>
            <h4>Intension of the dressing</h4>
            <p class=''>
              In the past, people dressed more for protection from the weather
              and external conditions
            </p>
            <p class=''>
              Today the intention of dressing is to make a statement in society
              and to visualize the personality overtly
            </p>
          </div>

          <div class='flex flex-col mt-12 content-center'>
            <h4>Possession clothing</h4>
            <p class=''>In the past - ca. 36 pieces</p>
            <p>Today - ca. 120 pieces</p>
          </div>
          <div class='flex flex-col mt-12'>
            <h4>Dressing problems</h4>
            <p class=''>
              These criteria make it difficult to answer the question. "What am
              I going to wear today?"
            </p>
            <li>Change of the intention of dressing</li>
            <li>Constant change of fashion trends</li>
            <li>Quantity of owning clothes</li>
            <li>
              The lack of a set of rules for combining clothes with each other
            </li>
          </div>
        </div>

        <div class='mt-32'>
          <div class='flex flex-col'>
            <h3>🔎 Market research</h3>
            <p class=''>
              Next, I conducted market research to identify the need for a
              solution to the dressing problem and whether there are already
              initial solutions on the market. At the same time, I was
              interested in what the target group might be that most often
              encounters the dressing dilemma.
            </p>
          </div>
          <div class='flex flex-col mt-16'>
            <h4>Market analysis</h4>
            <p>
              Increase in fashion consumption in the next 5 years according to
              Statista (2020) by 20%.
            </p>
          </div>
          <div class='flex flex-col mt-16'>
            <h4>Target group analysis</h4>
            <p>Female, 18 - 34 years (Facebook Audience, Greenpeace studies)</p>
          </div>
          <div class='flex flex-col mt-16'>
            <h4>Competitor analysis</h4>
            <p>
              The competitor analysis showed that few companies deal with the
              problem of dressing. Here I wanted to find out how others try to
              solve the problem and consider the clothing/needs.
            </p>
            <img class='mt-4' src={market} />
          </div>
        </div>

        <div class='mt-32'>
          <div class='flex flex-col'>
            <h3>👩‍💻 User research</h3>
            <p class='text-sm mt-2 text-gray-300'>
              12 participants aged 18 - 34 years invited
            </p>
            <p class='mt-4'>
              In a casual conversation, I wanted to learn more about how the
              people escape the daily dilemma. For the selection of the persons
              I oriented myself at the target group analysis and selected these
              from remove circles of friends, in order to receive here an
              unfiltered opinion/narrative. Before each interview, the persons
              received a questionnaire to record demographic characteristics,
              since the target group analysis had only little information.
            </p>
          </div>
          <div class='flex flex-col mt-16'>
            <h4>User surveys</h4>
            <p class='text-sm mt-2 text-gray-300'>10 participants</p>
            <p class='mt-4'>
              The questionnaire contained questions about income and fashion
              consumption. The information obtained from this will later be used
              to create the persona.
            </p>
            <div class='list-none flex flex-col sm:flex-row flex-wrap mt-8'>
              <div class='btn-p flex flex-col min-w-max'>
                <p class='color-g font-semibold'>Income:</p>
                <p class='color-g'>2.000 - 2.500 €</p>
              </div>
              <div class='btn-p flex flex-col mt-2 sm:mt-0 sm:ml-2 min-w-max'>
                <p class='color-g font-semibold'>Possession Clothing:</p>
                <p class='color-g'>100 - 200</p>
              </div>
              <div class='btn-p flex flex-col mt-2 lg:ml-2 lg:mt-0 min-w-max'>
                <p class='color-g font-semibold'>Of which regular wear:</p>
                <p class='color-g'>40 -60 %</p>
              </div>
              <div class='btn-p flex flex-col mt-2 sm:ml-2 md:ml-2 lg:ml-0 sm:min-w-max'>
                <p class='color-g font-semibold'>
                  Monthly expenditure on fashion:
                </p>
                <p class='color-g'>ca. 100 €</p>
              </div>
            </div>
          </div>
          <div class='flex flex-col mt-16'>
            <h4>User interviews</h4>
            <p class='text-sm text-gray-300 mt-2'>10 participants</p>
            <p class='mt-4'>
              In order to learn more about what problems arise when dressing and
              how people proceed step by step, I conducted a semi-structured
              interview with ten female persons. In addition, the identification
              of relevant indicators to the garment and create an outfit for
              later implementation was necessary.{' '}
            </p>
            <div class='flex flex-col'>
              <p class='mt-8 font-bold'>
                "Why is it so hard for you to put together an outfit quickly?"
              </p>
              <li>
                Too little time to try different combinations of clothes, no
                understanding, too uncreative
              </li>
              <li>Therefore reaching for already worn outfits, routine</li>
            </div>
            <div class='flex flex-col mt-8'>
              <p class='font-bold'>
                "What indicators do you attribute to a garment, and which are
                relevant?"
              </p>
              <li>Details of the garment: type, color, feelings</li>
              <li>
                Dependencies before outfit formation: Weather, situation,
                emotional state, availability
              </li>
            </div>
            <div class='flex flex-col mt-8'>
              <p class='font-bold'>
                "Imagine you're standing in front of your closet right now. How
                would you now proceed step by step to create the one outfit for
                work?"
              </p>
              <li>
                Outfit consists of a top and bottom, depending on the
                circumstance another top is added to the top, outfit formation
                concludes with the addition of shoes and accessories
              </li>
              <li>
                People choose one piece of clothing as a foundation around which
                they then build the rest of the outfit
              </li>
              <li>
                In the interviews, the selection of the foundation could be
                divided into two types
                <li>
                  there was the practical way, in which people chose as
                  foundation first a bottom and then the top
                </li>
                <li>
                  Persons guided by their feelings chose as foundation first the
                  top and then the pants
                </li>
              </li>
              <img class='mt-16 w-80' src={type} />
            </div>
          </div>
        </div>
      </div>

      <div class='flex flex-col mx-8 mt-48 sm:mx-16 md:mx-24 lg:mx-40 xl:mx-72 2xl:mx-96'>
        <h2 class='color-y'>✏️ Who and how is the product used?</h2>
        <p class='mt-4'>
          The interviews gave me an insight into their dressing process, the
          abstract information was methodically simplified. For better
          understanding and emphatic development of a first design solution, I
          developed a representative person (persona) of the target group. In
          addition, I noted down user stories and user scenarios from the
          persona's point of view, which I then drew in storyboards.
        </p>
        <div class='flex flex-col mt-16'>
          <h3>Persona</h3>
          <p>
            The information about the persona comes from the target group
            analysis and the questionnaires from the user research. The result
            was Lea, who is 28 years old and likes to spend time in nature and
            take photographs.
          </p>
          <div class='flex flex-col'>
            <div class='flex flex-col'>
              <img class='my-4' src={persona} />
            </div>
          </div>

          <div class='flex flex-col mt-36'>
            <h3>User stories</h3>
            <p>
              The user stories will now present the needs and wants of the
              persona Lea.
            </p>
            <div class='flex flex-row flex-wrap'>
              <div class='btn-p mt-2 flex '>
                As a user, I want to quickly display several random outfits
                because I got up too late and don't have time to create one of
                my own
              </div>
              <div class='btn-p mt-2 flex'>
                As a user, I would like to have several outfits suggested with
                my favorite pants because I don't know what to combine with them
                right now.
              </div>
              <div class='btn-p mt-2 flex'>
                As a user, I would like to have outfits suggested to me
                according to my own specifications, as I am in the mood for
                something colorful today.
              </div>
              <div class='btn-p mt-2 flex'>
                As a user, I want the app to know what outfit I've worn over the
                days so it doesn't suggest the same outfit the next day.
              </div>
              <div class='btn-p mt-2 flex'>
                As a user, I want to be able to view my clothes in the app so
                that I don't accidentally buy the T-shirt twice when I'm
                shopping.
              </div>
              <div class='btn-p mt-2 flex'>
                As a user, I would like to be able to see when I put on which
                outfit so that I don't put on the same thing again for an
                important meeting.
              </div>
            </div>
          </div>
          <div class='flex flex-col mt-36'>
            <h3>Storyboards</h3>
            <p>
              In this context, the drawing of the storyboard served to give even
              uninformed people a quick and easy overview of Lea's usage
              behavior.
            </p>
            <img class='mt-8' src={storyboard} />
          </div>
        </div>
      </div>

      <div class='flex flex-col mx-8 mt-48 sm:mx-16 md:mx-24 lg:mx-40 xl:mx-72 2xl:mx-96'>
        <h2 class='color-y'>👷🏼‍♀️ Creation of the Outfit Advisor</h2>
        <p class='mt-4'>
          Building on the previous phases, I selected the most important
          requirements for the design solution from the user stories.{' '}
        </p>
        <div class='mt-4'>
          <li>Get random outfit recommendation</li>
          <li>Get outfit recommendation according to own needs</li>
          <li>Upload garments to application</li>
          <li>Be able to provide information about the garment</li>
          <li>View worn outfits</li>
          <li>Save outfits</li>
        </div>
        <div class='flex flex-col mt-36'>
          <h3>User flow</h3>
          <p class=''>
            Based on this, I created a user flow of the application to sketch
            out the initial design ideas. This helps me to set up a rough
            concept of the application. Not only from the identified
            requirements but also from the interviews it was clear that the
            respondents see the outfit creation and the closet as separate
            areas.
          </p>
          <img class='mt-16 sm:w-96' src={flow} />
        </div>
        <div class='flex flex-col mt-36'>
          <h3>Sketches</h3>
          <p class=''>
            The first ideas of the design solution were created by pen and
            paper. This is always an efficient method to quickly transfer ideas
            from the head.
          </p>
          <img class='mt-8' src={sketches} />
        </div>
        <div class='flex flex-col mt-36'>
          <h3>Wireframes</h3>
          <p class=''>
            In the next step, I fleshed out some sketches into wireframes.
          </p>
          <img class='mt-8' src={wire} />
        </div>
        <div id='solution' class='flex flex-col mt-16'>
          <h3>Prototyp</h3>
          <p class=''>
            Based on the user flow and wireframes, the first design solution for
            the dressing problem was created. The features listed here represent
            the core elements of the prototype and were subsequently subjected
            to a usability test.
          </p>
          <div class='flex flex-col mt-24'>
            <h4 class='font-semibold'>Outfit proposal according to needs</h4>
            <p class=''>
              When users wanted to dress for a certain situation or wear
              something specific, they most often encountered the dressing
              problem. Therefore, in the application users have the possibility
              to have outfits recommended according to their own needs.
            </p>

            <video
              class='rounded-md mt-8 h-96'
              src={f1}
              width='600'
              height='300'
              controls='controls'
              autoplay='true'
            />
          </div>
          <div class='flex flex-col mt-24'>
            <h4 class='font-semibold'>Random outfit recommendation</h4>
            <p class=''>
              The random outfit recommendation is intended to allow users to
              quickly receive recommendations without having to select their own
              details.
            </p>

            <video
              class='rounded-md mt-8 h-96'
              src={f2}
              width='600'
              height='300'
              controls='controls'
              autoplay='true'
            />
          </div>
          <div class='flex flex-col mt-24'>
            <h4 class='font-semibold'>Upload clothes</h4>
            <p class=''>
              The uploading of a garment was criticized most often in the user
              interviews, as it takes a lot of time. In fact, the application is
              supposed to save time. Therefore, the process was reduced to three
              steps and the information form was kept as short as possible. The
              formation of the information form also emerged from the
              interviews. Here it became clear that the users rather assign
              feelings/moods to the garments. Translated with
            </p>

            <video
              class='rounded-md mt-8 h-96'
              src={f3}
              width='600'
              height='300'
              controls='controls'
              autoplay='true'
            />
          </div>
          <img class='mt-8' src={pro} />
        </div>
      </div>

      <div class='flex flex-col mx-8 mt-48 sm:mx-16 md:mx-24 lg:mx-40 xl:mx-72 2xl:mx-96'>
        <h2 class='color-y'>Usability Test</h2>
        <p class=''>
          The first high-fidelity prototype was tested via remote usability test
          with the program maze. For this purpose, 11 test persons participated.
          Three tasks were tested within the prototype:
        </p>
        <div class=''>
          <li>Add new garment to your closet</li>
          <li>Have random outfits suggested to you</li>
          <li>Create an outfit according to your needs</li>
        </div>
        <p class='mt-4'>
          The tasks were linked to eight questions regarding usability and user
          experience. The short version of the User Experience Questionnaire was
          used for this purpose. The entire test concluded with a short feedback
          discussion (5 - 10min) with the testers.
        </p>
        <div class='flex flex-col mt-24'>
          <h3>Results</h3>
          <p>
            After evaluating all the data and information from the maze program,
            the usability questions and feedback discussions showed:
          </p>
          <div class='flex flex-col md:flex-row flex-wrap'>
            <div class='btn-p flex flex-col mt-4 sm:min-w-max'>
              <p class='color-g font-semibold'>General</p>
              <p class='color-g'>Positive usability and user experience</p>
            </div>
            <div class='btn-p flex flex-col mt-2 md:ml-2 md:mt-4'>
              <p class='color-g font-semibold'>Design</p>
              <p class='color-g'>Clear and tidy</p>
            </div>
            <div class='btn-p flex flex-col mt-2 2xl:mt-4 2xl:ml-2 w-screen'>
              <p class='color-g font-semibold'>Accessibility</p>
              <p class='color-g'>Pleasant and intuitive</p>
            </div>
            <div class='btn-p flex flex-col mt-2 w-screen'>
              <p class='color-g font-semibold'>Improvments</p>
              <p class='color-g'>
                be able to assign other attributes to the garment (special
                color, season, occasion)
              </p>
            </div>
            <div class='btn-p flex flex-col mt-2 w-screen '>
              <p class='color-g font-semibold'>Settings</p>
              <p class='color-g'>
                Be able to set yourself when application will suggest worn
                clothes again
              </p>
            </div>
          </div>
        </div>
        <div class='flex flex-col mt-24'>
          <h3>Update</h3>
          <div class='flex flex-col'>
            <p class='font-semibold mt-4 '>Setting laundry interval</p>
            <p>
              Users can now set the reconsideration via the navigation item
              "Outfit". The interviews showed that the users saw this item
              metaphorically as laundry.
            </p>
            <div class='flex flex-col'>
              <img class='mt-8' src={u1} />
            </div>
          </div>
          <div class='flex flex-col mt-16'>
            <p class='font-semibold'>Adding more attributs for clothes</p>
            <p>
              The form was extended, since some test persons had difficulty
              assigning feelings to their items of clothing and simply felt it
              with occasions. In addition, the desire was to be able to classify
              for themselves which article of clothing is worn at which time of
              year.
            </p>
            <img class='mt-8' src={u3} />
          </div>
        </div>
      </div>
      {/* <div class='flex flex-col mx-8 mt-48 sm:mx-16 md:mx-24 lg:mx-40 xl:mx-72 2xl:mx-96'>
        <h2 class='color-y'>Conclusion</h2>
        <p class='mt-4'>text und so</p>
      </div> */}
    </div>
  );
}

export default Smartdress;
