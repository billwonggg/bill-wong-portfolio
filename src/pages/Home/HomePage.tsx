import { motion } from "framer-motion";
import styles from "./HomePage.module.scss";
import ProfileCard from "../../components/HomeProfileCard/ProfileCard";

const HomePage = () => {
  return (
    <div className={styles.homepage}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <ProfileCard />
      </motion.div>
    </div>
  );
};

export default HomePage;
