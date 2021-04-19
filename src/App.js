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

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
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
        </Switch>
        <Switch>
          <Route exact path='/project/smartdress' />
          <Route exact path='/project/nazzle' />
          <Route exact path='/project/storyline' />
          <Route exact path='/project/hygienelab' />
          <Route exact path='/project/songstories' />
          <Route path='/'>
            <div class='spacing' />
            <About />
            <div class='spacing' />
            <div class='spacing' />
            <Contact />

            <Sidebar />
          </Route>
        </Switch>
        <div class='spacing' />
        <Footer />
      </Router>
    </>
  );
}

export default App;
