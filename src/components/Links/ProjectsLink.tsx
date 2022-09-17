import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineClipboardList } from "react-icons/hi";
import styles from "./Link.module.scss";

const ProjectsLink = (style: React.CSSProperties) => {
  return (
    <Link className={styles.link} to="/projects" style={style}>
      <HiOutlineClipboardList size="1.1em" style={{ position: "relative", top: "4px" }} />
      &nbsp;Projects
    </Link>
  );
};

export default ProjectsLink;
