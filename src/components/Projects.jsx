import styles from '../assets/styles/Projects.module.css';
import projeto1 from '../assets/images/github_finder.jpg';
import projeto2 from '../assets/images/projeto_bookshelf.jpg';

const Projects = () => {
  return (
    <div className={styles.projects}>
      <h2 id="projects">Some of my projects!</h2>
      <div className={styles.items}>
        {/*card do projeto */}
        <div className={styles.myprojects}>
          <div className={styles.img_box}>
            <img src={projeto1} alt="Bookshelf project" />
          </div>
          <div className={styles.content}>
            <p>Github finder</p>
            <a href="https://github-finderproject.netlify.app/" className={styles.readmore}>
              See more
            </a>
          </div>
        </div>
        {/*card do projeto */}
        <div className={styles.myprojects}>
          <div className={styles.img_box}>
            <img src={projeto2} alt="Bookshelf project" />
          </div>
          <div className={styles.content}>
            <p>Project with Google Books</p>
            <a href="https://projectgooglebooksapi.netlify.app/" className={styles.readmore}>
              See more
            </a>
          </div>
        </div>
        {/*card do projeto */}
      </div>
    </div>
  );
};

export default Projects;
