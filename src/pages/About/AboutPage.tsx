import { motion } from "framer-motion";
import HomeLink from "../../components/Links/HomeLink";
import ProjectsLink from "../../components/Links/ProjectsLink";
import styles from "./AboutPage.module.scss";

const AboutPage = () => {
  return (
    <div className={styles.aboutpage}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className={styles.aboutInner}
      >
        <HomeLink {...{ position: "absolute", top: "20px", left: 0 }} />
        <ProjectsLink {...{ position: "absolute", top: "20px", right: 0 }} />
        <div>
          <br />
          Welcome! 😊 I'm Bill, a second year Software Engineering student at UNSW. I have been
          programming since high school and I love it! I like to compete in programming
          competitions, such as the ICPC and Google Kick Start. I competed in the 2021 ICPC South
          Pacific Division and won the Auckland Site Second Prize. I enjoy spending my spare time
          learning new technologies and developing new skills. I always try and apply the knowledge
          I learned to real life projects. In fact, I completely self-learned Front-End Programming
          in my spare time, and built the website that you are looking at right now! 😄
        </div>
      </motion.div>
    </div>
  );
};

export default AboutPage;
