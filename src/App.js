import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Hero from './components/Hero';
import About from './components/About';
import Cards from './components/Cards';
import Swiper from './components/Swiper';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Hero />
        <div className='spacing'></div>
        <Cards />
        <div className='spacing'></div>
        <About />
        <div className='spacing'></div>
        <Contact />
        <div className='spacing'></div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
