import React from "react";
import { HiOutlineBriefcase } from "react-icons/hi";
import { Link } from "react-router-dom";
import styles from "./Link.module.scss";

const ExperienceLink = (style: React.CSSProperties) => {
  return (
    <Link className={styles.link} to="/experience" style={style}>
      <HiOutlineBriefcase size="0.95em" style={{ position: "relative", top: "3px" }} />
      &nbsp;Experience
    </Link>
  );
};

export default ExperienceLink;
