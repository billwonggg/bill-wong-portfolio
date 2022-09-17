import { motion } from "framer-motion";
import styles from "./HomePage.module.scss";
import ProfileCard from "../../components/HomeProfileCard/ProfileCard";
import HomePageLinks from "../../components/HomePageLinks/HomePageLinks";
import SocialLinks from "../../components/Socials/SocialLinks";

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
        <HomePageLinks />
        <SocialLinks />
      </motion.div>
    </div>
  );
};

export default HomePage;
