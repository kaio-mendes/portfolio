import styles from '../assets/styles/Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faGithub, faWhatsapp } from '@fortawesome/free-brands-svg-icons'; // Use 'free-brands-svg-icons' para redes sociais

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.item}>
        <a href="https://www.linkedin.com/in/kaio-mendes-449685264/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} className={styles.icon} style={{ color: '#ffffff' }} />
        </a>

        <a href="https://www.instagram.com/mendes_kaio__/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} className={styles.icon} style={{ color: '#ffffff' }} />
        </a>

        <a href="https://github.com/kaio-mendes" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} className={styles.icon} style={{ color: '#ffffff' }} />
        </a>

        <a
          href="https://wa.me/5514988104457?text=Ol%C3%A1%2C%20vim%20pelo%20seu%20portf%C3%B3lio."
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faWhatsapp} className={styles.icon} style={{ color: '#ffffff' }} />
        </a>
      </div>
      <div className={styles.creator}>
        <p>
          <span>Kaio Vitor Couto Mendes</span> &copy;2025
        </p>
      </div>
    </footer>
  );
};

export default Footer;
