import { motion } from "framer-motion";
import ExperienceCard from "../../components/ExperienceCard/ExperienceCard";
import HomeLink from "../../components/Links/HomeLink";
import SkillsLink from "../../components/Links/SkillsLink";
import MyExperience from "../../content/MyExperience";
import styles from "./ExpPage.module.scss";

const ExpPage = () => {
  return (
    <div className={styles.expPage}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className={styles.expInner}
      >
        <HomeLink {...{ position: "absolute", top: "20px", left: "20px" }} />
        <SkillsLink {...{ position: "absolute", top: "20px", right: "20px" }} />
        <div className={styles.experienceText}>
          <h1>Experience</h1>
          {MyExperience.map((experience, i) => (
            <ExperienceCard key={i} {...experience} />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ExpPage;
