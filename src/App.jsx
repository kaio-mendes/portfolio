import './App.css';
import About from './components/About';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudMoon, faSun } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const tema = { backgroundColor: darkMode ? 'black' : 'white', color: darkMode ? 'white' : '#141c3a' };
  return (
    <div style={tema}>
      <Navbar />

      <div
        onClick={() => setDarkMode(!darkMode)}
        className="change"
        style={{
          backgroundColor: darkMode ? '#f79354' : '#f79354',
          justifyContent: darkMode ? 'start' : 'end',
        }}
      >
        <FontAwesomeIcon
          icon={darkMode ? faSun : faCloudMoon}
          style={{ color: darkMode ? '#ffff' : '#2c334e' }}
          className="darkMode"
          onClick={() => setDarkMode(!darkMode)}
        />
      </div>

      <About />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
