import React from "react";
import { Link } from "react-router-dom";
import styles from "./ProjectsLink.module.scss";

const ProjectsLink = (style: React.CSSProperties) => {
  return (
    <Link className={styles.projectslink} to="/projects" style={style}>
      Projects
    </Link>
  );
};

export default ProjectsLink;
