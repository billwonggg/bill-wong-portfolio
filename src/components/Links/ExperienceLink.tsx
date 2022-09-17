import React from "react";
import { Link } from "react-router-dom";
import styles from "./ExperienceLink.module.scss";
import { IoBriefcaseOutline } from "react-icons/io5";

const ExperienceLink = (style: React.CSSProperties) => {
  return (
    <Link className={styles.experienceLink} to="/experience" style={style}>
      <IoBriefcaseOutline size="0.95em" style={{ position: "relative", top: "3px" }} />
      &nbsp;Experience
    </Link>
  );
};

export default ExperienceLink;
