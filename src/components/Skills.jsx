import styles from '../assets/styles/Skills.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faScrewdriver, faCode } from '@fortawesome/free-solid-svg-icons';
const Skills = () => {
  return (
    <div className={styles.skills}>
      <div className={styles.items}>
        <i>
          <FontAwesomeIcon icon={faCode} className={styles.icon} />
        </i>
        <h3>Full Stack Developer</h3>
        <ul>
          <li>React.js</li>
          <li>Next.js</li>
          <li>Redux</li>
          <li>Node.js</li>
          <li>MySQL</li>
          <li>PHP</li>
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>Styled Components</li>
          <li>Material UI</li>
          <li>APIs REST</li>
        </ul>
      </div>

      <div className={styles.items}>
        <i>
          <FontAwesomeIcon icon={faScrewdriver} className={styles.icon} />
        </i>
        <h3>Tools</h3>
        <ul>
          <li>Visual Studio Code</li>
          <li>Pycharm</li>
          <li>Figma</li>
          <li>DBeaver</li>
          <li>Android Studio</li>
          <li>MySQL</li>
          <li>Git/Github</li>
          <li>Docker</li>
          <li>Postman</li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
