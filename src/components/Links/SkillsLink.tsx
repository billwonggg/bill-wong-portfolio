import React from "react";
import { Link } from "react-router-dom";
import styles from "./SkillsLink.module.scss";
import { HiOutlineLightBulb } from "react-icons/hi";

const SkillsLink = (style: React.CSSProperties) => {
  return (
    <Link className={styles.skillslink} to="/skills" style={style}>
      <HiOutlineLightBulb size="1.05em" style={{ position: "relative", top: "2px" }} />
      &nbsp;Skills
    </Link>
  );
};

export default SkillsLink;
