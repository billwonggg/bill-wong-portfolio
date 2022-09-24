import React from "react";
import { HiOutlineLightBulb } from "react-icons/hi";
import { Link } from "react-router-dom";
import styles from "./Link.module.scss";

const SkillsLink = (style: React.CSSProperties) => {
  return (
    <Link className={styles.link} to="/skills" style={style}>
      <HiOutlineLightBulb size="1.05em" style={{ position: "relative", top: "2.5px" }} />
      &nbsp;Skills
    </Link>
  );
};

export default SkillsLink;
