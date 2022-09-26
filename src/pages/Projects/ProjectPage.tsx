import { motion } from "framer-motion";
import ExperienceLink from "../../components/Links/ExperienceLink";
import HomeLink from "../../components/Links/HomeLink";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import MyProjects from "../../content/MyProjects";
import styles from "./ProjectPage.module.scss";

const ProjectPage = () => {
  return (
    <div className={styles.projectspage}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className={styles.projectsInner}
      >
        <HomeLink {...{ position: "absolute", top: "20px", left: "20px" }} />
        <ExperienceLink {...{ position: "absolute", top: "20px", right: "20px" }} />
        <div className={styles.projectsText}>
          <h1>Projects</h1>
          <p>
            These are some projects that I have built. Read about the project in the GitHub link, or
            visit the website to explore more.
          </p>
          {MyProjects.map((project, i) => (
            <ProjectCard key={i} {...project} />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectPage;
