import { motion } from "framer-motion";
import SkillCloud from "../../components/Skills/SkillCloud";
import styles from "./SkillsPage.module.scss";

const SkillsPage = () => {
  return (
    <div className={styles.skillspage}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <h1>Skills</h1>
        <SkillCloud />
      </motion.div>
    </div>
  );
};

export default SkillsPage;
