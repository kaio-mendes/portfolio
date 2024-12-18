import './App.css';
import About from './components/About';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { Theme } from './components/Theme';

function App() {
  const { tema } = useContext(Theme);
  return (
    <div style={tema}>
      <Navbar />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
