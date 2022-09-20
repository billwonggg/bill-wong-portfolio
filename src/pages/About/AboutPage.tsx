import { motion } from "framer-motion";
import Collapse from "../../components/Collapsable/Collapse";
import HomeLink from "../../components/Links/HomeLink";
import ProjectsLink from "../../components/Links/ProjectsLink";
import MyAbout from "../../content/MyAbout";
import MyInterests from "../../content/MyInterests";
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
        <HomeLink {...{ position: "absolute", top: "20px", left: "20px" }} />
        <ProjectsLink {...{ position: "absolute", top: "20px", right: "20px" }} />
        <div className={styles.aboutText}>
          <MyAbout />
          <h2>My Interests</h2>
          {MyInterests.map((interest, i) => (
            <Collapse key={i} {...interest} />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default AboutPage;
