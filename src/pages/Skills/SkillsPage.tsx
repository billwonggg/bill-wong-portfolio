import { motion } from "framer-motion";
import CertificationsLink from "../../components/Links/CertificationsLink";
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
        <HomeLink {...{ position: "absolute", top: "20px", left: "20px" }} />
        <CertificationsLink {...{ position: "absolute", top: "20px", right: "20px" }} />
        <div className={styles.skillsText}>
          <h1>Skills</h1>
          <p>These are some of my technical skills.</p>
          <br />
          <SkillCloud />
          <p className={styles.tip}>Tip: Feel free to drag around!</p>
        </div>
      </motion.div>
    </div>
  );
};

export default SkillsPage;
