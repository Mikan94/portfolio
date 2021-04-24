import React, { useState, useEffect } from 'react';
import './Smartdress.css';
import smartdress from '../assets/smartdress.png';
import x from '../assets/x.svg';

import { Link, useHistory } from 'react-router-dom';

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

      <div class='hero-bg-sd flex flex-row justify-center py-32'>
        <div class='flex flex-col pt-16'>
          <h2>SmartDress</h2>
          <p>
            Your personal outfit advisor with whom you always know what to wear
            today
          </p>
        </div>
        <img src={smartdress} class='pl-32' />
        <section class='fixed bottom-8 mx-auto'>
          <p class={visible ? 'scroll-ani bounce' : 'hidden'}>Scroll 👇</p>
        </section>
      </div>

      <div class='flex flex-col lg:flex-row'>
        <div class='flex flex-row'>
          <div class='flex-col'>
            <h2 class='color-y'>Overview</h2>
            <p>
              SmartDress is a mobile outfit advisor that recommends outfits to
              users based on their own clothes. It is designed to help users
              answer the questions "What do I wear today?" on a daily basis. The
              Outfit Advisor takes the user's current needs into account when
              putting together outfits. The integration of the user's own items
              of clothing is done by means of a photo and brief details.
            </p>
          </div>
          <div class='flex flex-col'>
            <img src={smartdress} />
          </div>
        </div>
      </div>

      <div class='flex flex-row'>
        <div class='flex flex-col'>
          <h3>Project type</h3>
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
          <p>Marktanalyse</p>
          <p>Interviews</p>
          <p>Personas</p>
          <p>Mockups</p>
        </div>
      </div>

      <div>
        <h2>What am I going to wear today? 🤔</h2>
        <div class='flex flex-col'>
          <div class='flex flex-col'>
            <h3>Problem</h3>
            <p>
              Every day people stand in front of their closet and do not know
              what to wear. In this day and age, people have enough clothes to
              wear. But they lack creativity and landmarks to skillfully combine
              individual items of clothing. So how can the dilemma be
              eliminated?
            </p>
          </div>
          <div class='flex flex-col'>
            <h3>Solution</h3>
            <p>
              My goal was to find out how people proceed step-by-step in
              creating an outfit, which indicators are relevant and whether a
              mobile application can help as a possible solution.
            </p>
          </div>
        </div>
      </div>

      <div class='flex flex-col'>
        <div class='flex flex-col'>
          <h3>Sneak Peek of the solution</h3>
        </div>
        <div class='flex flex-row w-screen'>
          <img src={smartdress} />
          <img src={smartdress} />
          <img src={smartdress} />
          <img src={smartdress} />
        </div>
        <button>bring me to detailed solution</button>
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

      <div>
        <h2>🚀 Who doesn't have the dilemma?</h2>
        <div class='flex flex-col'>
          <p>
            It all started in 2017 in front of my closet, Where I asked myself,
            "What am I going to wear?"
          </p>

          <p>
            As a student and weekend homebody, I was always faced with the
            dilemma of packing my travel backpack efficiently. I was annoyed
            that this endeavor always involved a lot of time and planning. So
            how cool would it be if a smart assistant could help me with this?
            And even show me what clothes I should pack for several days?
          </p>

          <p>
            I quickly told a few friends about this idea. It turned out that
            most of them also face the same dilemma every day. Over the next few
            weeks, I frequently received the feedback "Anne, when will the app
            be ready? I could have used it so much this morning". And so began
            the journey of SmartDress and now written down in my Bachelor
            Thesis.
          </p>
        </div>
      </div>

      <div>
        <h2>📚 And what is behind the dilemma?</h2>
        <div class='flex flex-col'>
          <div class='flex flex-col'>
            <p>
              Before I started working, I wanted to know more about fashion. I
              think it's important to look at the subject in theory first. This
              gives me an overview that helps me make more prudent decisions.
            </p>
          </div>
          <div class='flex flex-col'>
            <p>
              I asked myself the following questions:
              <li>- why we actually dress and not walk around naked</li>
              <li>- if and what we communicate with our clothes</li>
              <li>
                - and why is it so difficult for us to dress appropriately?
              </li>
            </p>
          </div>
        </div>

        <div class='flex flex-col'>
          <div class='flex flex-col'>
            <h4>Intension of the dressing</h4>
            <p>
              in the past, people dressed more for protection from the weather
              and external conditions
            </p>
            <p>
              today the intention of dressing is to make a statement in society
              and to visualize the personality overtly
            </p>
          </div>
          <div class='flex flex-col'>
            <h4>Possession clothing</h4>
            <p>In the past - ca. 36 pieces</p>
            <p>Today - ca. 120 pieces</p>
          </div>
          <div class='flex flex-col'>
            <h3>Dressing problems</h3>
            <p>
              These criteria make it difficult to answer the question. "What am
              I going to wear today?"
            </p>
            <li>change of the intention of dressing</li>
            <li>constant change of fashion trends</li>
            <li>quantity of owning clothes</li>
            <li>
              the lack of a set of rules for combining clothes with each other
            </li>
          </div>
        </div>

        <div class=''>
          <div class='flex flex-col'>
            <h3>🔎 Market research</h3>
            <p>
              Next, I conducted market research to identify the need for a
              solution to the dressing problem and whether there are already
              initial solutions on the market. At the same time, I was
              interested in what the target group might be that most often
              encounters the dressing dilemma.
            </p>
          </div>
          <div class='flex flex-col'>
            <h4>Market analysis</h4>
            <p>
              Increase in fashion consumption in the next 5 years according to
              Statista (2020) by 20%.
            </p>
          </div>
          <div class='flex flex-col'>
            <h4>Target group analysis</h4>
            <p>Female, 18 - 34 years (Facebook Audience, Greenpeace studies)</p>
          </div>
          <div class='flex flex-col'>
            <h4>Competitor analysis</h4>
            <p>
              The competitor analysis showed that few companies deal with the
              problem of dressing. Here I wanted to find out how others try to
              solve the problem and consider the clothing/needs.
            </p>
            <img src={smartdress} />
          </div>
        </div>

        <div class=''>
          <div class='flex flex-col'>
            <h3>User research</h3>
            <p>12 participants aged 18 - 34 years invited</p>
            <p>
              In a casual conversation, I wanted to learn more about how the
              people escape the daily dilemma. For the selection of the persons
              I oriented myself at the target group analysis and selected these
              from remove circles of friends, in order to receive here an
              unfiltered opinion/narrative. Before each interview, the persons
              received a questionnaire to record demographic characteristics,
              since the target group analysis had only little information.
            </p>
          </div>
          <div class='flex flex-col'>
            <h4>User surveys</h4>
            <p>10 participants</p>
            <p>
              The questionnaire contained questions about income and fashion
              consumption. The information obtained from this will later be used
              to create the persona.
            </p>
            <div class='list-none flex flex-row'>
              <div class='flex flex-col'>
                <li>Income:</li>
                <li>Possession Clothing:</li>
                <li>Of which regular wear:</li>
                <li>Monthly expenditure on fashion:</li>
              </div>
              <div class='flex flex-col'>
                <li>2.000 - 2.500 €</li>
                <li>100 - 200 clothing</li>
                <li>40 -60 %</li>
                <li>ca. 100 €</li>
              </div>
            </div>
          </div>
          <div class='flex flex-col'>
            <h4>User interviews</h4>
            <p>10 participants</p>
            <p>
              In order to learn more about what problems arise when dressing and
              how people proceed step by step, I conducted a semi-structured
              interview with ten female persons. In addition, the identification
              of relevant indicators to the garment and create an outfit for
              later implementation was necessary.{' '}
            </p>
            <div class='flex flex-col'>
              <p class='font-bold'>
                "Why is it so hard for you to put together an outfit quickly?"
              </p>
              <li>
                too little time to try different combinations of clothes, no
                understanding, too uncreative
              </li>
              <li>therefore reaching for already worn outfits, routine</li>
            </div>
            <div class='flex flex-col'>
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
            <div class='flex flex-col'>
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
                in the interviews, the selection of the foundation could be
                divided into two types
                <li>
                  there was the practical way, in which people chose as
                  foundation first a bottom and then the top
                </li>
                <li>
                  Person guided by their feelings chose as foundation first the
                  top and then the pants
                </li>
              </li>
              <img src={smartdress} />
            </div>
          </div>
        </div>
      </div>

      <div class='flex flex-col'>
        <h2>✏️ Who and how is the product used?</h2>
        <p>
          After the interviewees gave me an insight into their dressing process,
          the abstract information was methodically simplified. For better
          understanding and emphatic development of a first design solution, I
          developed a representative person (persona) of the target group. In
          addition, I noted down user stories and user scenarios from the
          persona's point of view, which I then drew in storyboards.
        </p>
        <div class='flex flex-col'>
          <h3>Persona</h3>
          <p>
            The information about the persona comes from the target group
            analysis and the questionnaires from the user research. The result
            was Lea, who is 28 years old and likes to spend time in nature and
            take photographs.
          </p>
          <div class='flex flex-row'>
            <div class='flex'>
              <img src={smartdress} />
            </div>
            <div class='flex flex-row flex-wrap'>
              <div class='flex flex-col'>
                <p>28 years</p>
                <p>Age</p>
              </div>
              <div class='flex flex-col'>
                <p>Student</p>
                <p>Living situation</p>
              </div>
              <div class='flex flex-col'>
                <p>Photography, hiking</p>
                <p>Hobbies</p>
              </div>
              <div class='flex flex-col'>
                <p>2.000 - 2.500 €</p>
                <p>Monthly income (Netto)</p>
              </div>
              <div class='flex flex-col'>
                <p>ca. 100 €</p>
                <p>monthly expenses (Mode)</p>
              </div>
              <div class='flex flex-col'>
                <p>150 - 200 pieces</p>
                <p>Number owning clothes</p>
              </div>
              <div class='flex flex-col'>
                <p>40 - 60%</p>
                <p>Carries from it regularly</p>
              </div>
              <div class='flex flex-col'>
                <p>Nike, Adidas</p>
                <p>Favorite brands</p>
              </div>
              <div class='flex flex-col'>
                <p>Average 5 Min.</p>
                <p>Time for outfit creation</p>
              </div>
            </div>
          </div>

          <div class='flex flex-col'>
            <h3>User stories</h3>
            <p>
              The user stories will now present the needs and wants of the
              persona Lea.
            </p>
            <div class='flex flex-row flex-wrap'>
              <div class='flex'>
                As a user, I want to quickly display several random outfits
                because I got up too late and don't have time to create one of
                my own
              </div>
              <div class='flex'>
                As a user, I would like to have several outfits suggested with
                my favorite pants because I don't know what to combine with them
                right now.
              </div>
              <div class='flex'>
                As a user, I would like to have outfits suggested to me
                according to my own specifications, as I am in the mood for
                something colorful today.
              </div>
              <div class='flex'>
                As a user, I want the app to know what outfit I've worn over the
                days so it doesn't suggest the same outfit the next day.
              </div>
              <div class='flex'>
                As a user, I want to be able to view my clothes in the app so
                that I don't accidentally buy the T-shirt twice when I'm
                shopping.
              </div>
              <div class='flex'>
                As a user, I would like to be able to see when I put on which
                outfit so that I don't put on the same thing again for an
                important meeting.
              </div>
            </div>
          </div>
          <div class='flex flex-col'>
            <h3>Storyboards</h3>
            <p>
              In this context, the drawing of the storyboard served to give even
              uninformed people a quick and easy overview of Lea's usage
              behavior.
            </p>
            <img src={smartdress} />
          </div>
        </div>
      </div>

      <div class='flex flex-col'>
        <h2>👷🏼‍♀️ Creation of the Outfit Advisor</h2>
        <p>
          Building on the previous phases, I selected the most important
          requirements for the design solution from the user stories.{' '}
        </p>
        <div class='list-none'>
          <li>Get random outfit recommendation</li>
          <li>Get outfit recommendation according to own needs</li>
          <li>Upload garments to application</li>
          <li>Be able to provide information about the garment</li>
          <li>View worn outfits</li>
          <li>Save outfits</li>
        </div>
        <div class='flex flex-col'>
          <h3>User flow</h3>
          <p>
            Based on this, I created a user flow of the application to sketch
            out the initial design ideas. This helps me to set up a rough
            concept of the application. Not only from the identified
            requirements but also from the interviews it was clear that the
            respondents see the outfit creation and the closet as separate
            areas.
          </p>
          <img src={smartdress} />
        </div>
        <div class='flex flex-col'>
          <h3>Sketches</h3>
          <p>
            The first ideas of the design solution were created by pen and
            paper. This is always an efficient method to quickly transfer ideas
            from the head.
          </p>
          <img src={smartdress} />
        </div>
        <div class='flex flex-col'>
          <h3>Wireframes</h3>
          <p>In the next step, I fleshed out some sketches into wireframes.</p>
          <img src={smartdress} />
        </div>
        <div class='flex flex-col'>
          <h3>Prototyp</h3>
          <p>
            Based on the user flow and wireframes, the first design solution for
            the dressing problem was created. The features listed here represent
            the core elements of the prototype and were subsequently subjected
            to a usability test.
          </p>
          <div class='flex flex-col'>
            <p>Function 1 and a fucking description</p>
            <div class='video'></div>
          </div>
          <div class='flex flex-col'>
            <p>Function 2 and a fucking description</p>
            <div class='video'></div>
          </div>
          <div class='flex flex-col'>
            <p>Function 2 and a fucking description</p>
            <div class='video'></div>
          </div>
          <img src={smartdress} />
        </div>
      </div>
      <div class='flex flex-col'>
        <h2>Usability Test</h2>
        <p>
          The first high-fidelity prototype was tested via remote usability test
          with the program maze. For this purpose, 11 test persons participated.
          Three tasks were tested within the prototype:
        </p>
        <div class='list-none'>
          <li>Add new garment to your closet</li>
          <li>Have random outfits suggested to you</li>
          <li>Create an outfit according to your needs</li>
        </div>
        <p>
          An den Aufgaben knüpften acht Fragen hinsichtlich der Benutzbarkeit
          und Benutzererfahrung an. Hierzu wurde die Kurzversion des User
          Experience Questionnaires verwendet. Der gesamte Test schloß mit einem
          kurzen Feedbackgespräch (5 - 10min) mit den Testenden ab.
        </p>
        <div class='flex flex-col'>
          <h3>Results</h3>
          <p>
            After evaluating all the data and information from the maze program,
            the usability questions and feedback discussions showed:
          </p>
          <div class='flex flex-row flex-wrap'>
            <div class='flex flex-col'>
              <p>General</p>
              <p>Positive usability and user experience</p>
            </div>
            <div class='flex flex-col'>
              <p>Design</p>
              <p>Clear and tidy</p>
            </div>
            <div class='flex flex-col'>
              <p>Accessibility</p>
              <p>Pleasant and intuitive</p>
            </div>
            <div class='flex flex-col'>
              <p>Improvments</p>
              <p>
                be able to assign other attributes to the garment (special
                color, season, occasion)
              </p>
            </div>
            <div class='flex flex-col'>
              <p>Settings</p>
              <p>
                Be able to set yourself when application will suggest worn
                clothes again
              </p>
            </div>
          </div>
        </div>
        <div class='flex flex-col'>
          <h3>Update</h3>
          <div class='flex flex-col'>
            <p>
              Users can now set the reconsideration via the navigation item
              "Outfit". The interviews showed that the users saw this item
              metaphorically as laundry.
            </p>
            <img src={smartdress} />
          </div>
          <div class='flex flex-col'>
            <p>
              The form was extended, since some test persons had difficulty
              assigning feelings to their items of clothing and simply felt it
              with occasions. In addition, the desire was to be able to classify
              for themselves which article of clothing is worn at which time of
              year.
            </p>
            <img src={smartdress} />
          </div>
        </div>
      </div>
      <div class='flex flex-col'>
        <h2>Conclusion</h2>
      </div>
    </div>
  );
}

export default Smartdress;
