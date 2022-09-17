import { motion } from "framer-motion";
import HomeLink from "../../components/Links/HomeLink";
import SkillCloud from "../../components/Skills/SkillCloud";
import styles from "./SkillsPage.module.scss";

const SkillsPage = () => {
  return (
    <div className={styles.skillspage}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className={styles.skillsInner}
      >
        <HomeLink {...{ position: "absolute", top: "20px", left: 0 }} />
        <div className={styles.skillsText}>
          <h1>Skills</h1>
          <p>Here are some skills that I can bring to the table! 😄</p>
        </div>
        <SkillCloud />
      </motion.div>
    </div>
  );
};

export default SkillsPage;
