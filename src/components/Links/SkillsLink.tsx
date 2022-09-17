import React from "react";
import { Link } from "react-router-dom";
import styles from "./SkillsLink.module.scss";

const SkillsLink = (style: React.CSSProperties) => {
  return (
    <Link className={styles.skillslink} to="/skills" style={style}>
      Skills
    </Link>
  );
};

export default SkillsLink;
