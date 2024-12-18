// Navbar.jsx
import React, { useContext } from 'react';
import styles from '../assets/styles/Navbar.module.css';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { Theme } from './Theme';

const Navbar = () => {
  const { tema, setDarkMode } = useContext(Theme); // Acessa tema e setDarkMode do Contexto

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
        onClick={() => setDarkMode(prevMode => !prevMode)} // Alterna o modo
        className={styles.change}
        style={{
          backgroundColor: tema.backgroundColor ? '#f79354' : '#f79354', // Usa o tema do contexto
          justifyContent: tema.backgroundColor === 'black' ? 'start' : 'end',
        }}
      >
        <i className={styles.i_darkMode}>
          <FontAwesomeIcon
            icon={tema.backgroundColor === 'black' ? faSun : faCloudMoon}
            style={{ color: tema.backgroundColor === 'black' ? '#f79354' : '#2c334e' }}
            className="darkMode"
          />
        </i>
      </div>
    </nav>
  );
};

export default Navbar;
