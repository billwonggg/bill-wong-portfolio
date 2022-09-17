import React from "react";
import { Link } from "react-router-dom";
import styles from "./ProjectsLink.module.scss";
import { HiOutlineClipboardList } from "react-icons/hi";

const ProjectsLink = (style: React.CSSProperties) => {
  return (
    <Link className={styles.projectslink} to="/projects" style={style}>
      <HiOutlineClipboardList size="1.1em" style={{ position: "relative", top: "4px" }} />
      &nbsp;Projects
    </Link>
  );
};

export default ProjectsLink;
