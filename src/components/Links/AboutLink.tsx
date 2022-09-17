import React from "react";
import { Link } from "react-router-dom";
import styles from "./AboutLink.module.scss";
import { MdPersonPin } from "react-icons/md";

const AboutLink = (style: React.CSSProperties) => {
  return (
    <Link className={styles.aboutlink} to="/about" style={style}>
      <MdPersonPin size="1.05em" style={{ position: "relative", top: "4px" }} />
      &nbsp;About
    </Link>
  );
};

export default AboutLink;
