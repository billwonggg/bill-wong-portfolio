import React from "react";
import { Link } from "react-router-dom";
import styles from "./AboutLink.module.scss";

const AboutLink = (style: React.CSSProperties) => {
  return (
    <Link className={styles.aboutlink} to="/about" style={style}>
      About
    </Link>
  );
};

export default AboutLink;
