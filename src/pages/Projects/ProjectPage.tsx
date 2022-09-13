import { motion } from "framer-motion";

const ProjectPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      MessageSpace
    </motion.div>
  );
};

export default ProjectPage;
