import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <Link to="/">Home</Link>
      <br />
      I'm Bill, a second year Software Engineering student at UNSW. I have been programming since
      high school and I love it!
    </motion.div>
  );
};

export default AboutPage;
