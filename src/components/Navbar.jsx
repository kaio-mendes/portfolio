import React, { useState } from 'react';
import styles from '../assets/styles/Navbar.module.css';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudMoon, faSun } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const tema = { backgroundColor: darkMode ? 'black' : 'white', color: darkMode ? 'white' : '#141c3a' };
  //para poder passar a variavel tema para o app é necessário usar um react context por conta do app ser superior em niveis comparado a navbar entao para evitar passar de item em item ate chegar em app crie um context para lidar com a variavel tema - é muito usado em react
  return (
    <nav>
      <div className={styles.logo}>
        <h3>
          <span>K</span>aio <span>M</span>endes
        </h3>
      </div>
      <div className={styles.items}>
        <Link to="about" spy={true} smooth={true} offset={-50} duration={100}>
          About
        </Link>
        <Link to="projects" spy={true} smooth={true} offset={-50} duration={100}>
          Projects
        </Link>
        <a href="https://wa.me/5514988104457?text=Ol%C3%A1%2C%20vim%20pelo%20seu%20portf%C3%B3lio.">Let's talk</a>
      </div>

      <div
        onClick={() => setDarkMode(!darkMode)}
        className="change"
        style={{
          backgroundColor: darkMode ? '#f79354' : '#f79354',
          justifyContent: darkMode ? 'start' : 'end',
          display: 'none',
        }}
      >
        <FontAwesomeIcon
          icon={darkMode ? faSun : faCloudMoon}
          style={{ color: darkMode ? '#ffff' : '#2c334e' }}
          className="darkMode"
          onClick={() => setDarkMode(!darkMode)}
        />
      </div>
    </nav>
  );
};

export default Navbar;
