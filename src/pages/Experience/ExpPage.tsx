import { motion } from "framer-motion";
import HomeLink from "../../components/Links/HomeLink";
import SkillsLink from "../../components/Links/SkillsLink";
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
        <HomeLink {...{ position: "absolute", top: "20px", left: 0 }} />
        <SkillsLink {...{ position: "absolute", top: "20px", right: 0 }} />
        Hello
      </motion.div>
    </div>
  );
};

export default ExpPage;