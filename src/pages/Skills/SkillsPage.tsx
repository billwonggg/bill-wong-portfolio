import { motion } from "framer-motion";

const SkillsPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      My most used programming languages and frameworks are:
    </motion.div>
  );
};

export default SkillsPage;
