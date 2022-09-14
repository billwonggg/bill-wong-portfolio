import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styles from "./HomePage.module.scss";

const HomePage = () => {
  return (
    <div className={styles.homepage}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <a href="/" className={styles.logo}>
          Bill
          <br />
          Wong
        </a>
        <Link to="/about">About</Link>
        <br />
        Second Year Software Engineering Student at UNSW
      </motion.div>
    </div>
  );
};

export default HomePage;
