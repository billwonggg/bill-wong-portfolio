import { motion } from "framer-motion";
import HomeLink from "../../components/Links/HomeLink";
import SkillsLink from "../../components/Links/SkillsLink";
import styles from "./ProjectPage.module.scss";

const ProjectPage = () => {
  return (
    <div className={styles.projectspage}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className={styles.projectsInner}
      >
        <HomeLink {...{ position: "absolute", top: "20px", left: 0 }} />
        <SkillsLink {...{ position: "absolute", top: "20px", right: 0 }} />
        Hello
      </motion.div>
    </div>
  );
};

export default ProjectPage;
