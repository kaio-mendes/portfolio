import styles from '../assets/styles/About.module.css';
import Kaio from '../assets/images/KaioMendes.png';
const About = () => {
  return (
    <article className={styles.article}>
      <h1 id="about">Web Developer</h1>
      <h3>I create and develop simple and functional solutions with focus and precision.</h3>
      <img src={Kaio} />

      <div className={styles.aboutme}>
        <h2>
          Hi, I'm <span>Kaio</span>. Nice to meet you.
        </h2>
        <p>
          I am a developer with 5 years of experience in TypeScript, JavaScript, and React, focused on building
          efficient, high-performance web solutions. I am passionate about turning ideas into innovative digital
          products, always striving to learn and grow. My goal is to contribute to projects that make a difference in
          the digital world.
        </p>
      </div>
    </article>
  );
};

export default About;
