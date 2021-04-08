import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Hero from './components/Hero';
import About from './components/About';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className='bg-blue-700'>
      <Router>
        <Navbar />
        <Hero />
        <About />
        <Contact />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
