import React, { useState, useRef } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Hero from './components/Hero';
import About from './components/About';
import Sidebar from './components/Sidebar';
import Projects from './components/Projects';

import Smartdress from './pages/Smartdress';
import Nazzle from './pages/Nazzle';
import Storyline from './pages/Storyline';
import Hel from './pages/Hel';
import Songstories from './pages/Songstories';
import who from './pages/Who';
import oneline from './pages/oneline';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from 'react-router-dom';

function App() {
  return (
    <>
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path='/'>
            <Navbar />
            <Hero />
            <div class='spacing' />
            <Projects />
          </Route>
        </Switch>
        <Switch>
          <Route exact path='/project/smartdress' component={Smartdress} />
          <Route exact path='/project/nazzle' component={Nazzle} />
          <Route exact path='/project/storyline' component={Storyline} />
          <Route exact path='/project/hygienelab' component={Hel} />
          <Route exact path='/project/songstories' component={Songstories} />
          <Route exact path='/project/onelinecycling' component={oneline} />
          <Route exact path='/whoiam' component={who} />
        </Switch>
        <Switch>
          <Route exact path='/project/smartdress' />
          <Route exact path='/project/nazzle' />
          <Route exact path='/project/storyline' />
          <Route exact path='/project/hygienelab' />
          <Route exact path='/project/songstories' />
          <Route exact path='/project/onelinecycling' />
          <Route exact path='/whoiam' />
          <Route path='/'>
            <div class='spacing' />
            <About />
            <div class='spacing' />
            <Contact />
            <Sidebar />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
