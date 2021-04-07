import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Hero from './components/Hero';
import About from './components/About';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Hero />
        <About />
        <Contact />
        <Footer />
      </Router>
    </>
  );
}

export default App;
