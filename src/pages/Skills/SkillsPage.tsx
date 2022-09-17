import { motion } from "framer-motion";
import { Link } from "react-router-dom";
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
        <Link to="/" className={styles.homelink}>
          Home
        </Link>
        <div className={styles.skillsText}>
          <h1>Skills</h1>
          <p>Here are some of the skills that I can bring to the table.</p>
        </div>
        <SkillCloud />
      </motion.div>
    </div>
  );
};

export default SkillsPage;
