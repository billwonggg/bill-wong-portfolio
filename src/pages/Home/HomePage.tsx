import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <Link to="/about">About</Link>
      <br />
      Second Year Software Engineering Student at UNSW
    </motion.div>
  );
};

export default HomePage;
