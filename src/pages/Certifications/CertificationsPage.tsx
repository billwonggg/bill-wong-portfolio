import { motion } from "framer-motion";
import CertificationList from "../../components/CertificationList/CertificationList";
import AboutLink from "../../components/Links/AboutLink";
import HomeLink from "../../components/Links/HomeLink";
import styles from "./CertificationsPage.module.scss";

const CertificationsPage = () => {
  return (
    <div className={styles.certificationsPage}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className={styles.certificationsInner}
      >
        <HomeLink {...{ position: "absolute", top: "20px", left: "20px" }} />
        <AboutLink {...{ position: "absolute", top: "20px", right: "20px" }} />
        <div className={styles.certificationsText}>
          <h1>Certifications</h1>
          <CertificationList />
        </div>
      </motion.div>
    </div>
  );
};

export default CertificationsPage;
