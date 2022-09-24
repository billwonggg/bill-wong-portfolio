import { motion } from "framer-motion";
import AboutLink from "../../components/Links/AboutLink";
import HomeLink from "../../components/Links/HomeLink";
import CertificationList from "../../components/CertificationList/CertificationList";
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
        <AboutLink {...{ position: "absolute", top: "20px", right: "20px" }} />
        <div className={styles.skillsText}>
          <h1>Skills & Certfications</h1>
          <p>Here are some of my certifications and technical skills.</p>
          <CertificationList />
          <br />
          <SkillCloud />
          <p className={styles.tip}>Tip: Feel free to drag around!</p>
        </div>
      </motion.div>
    </div>
  );
};

export default SkillsPage;
