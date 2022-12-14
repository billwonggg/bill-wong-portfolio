import React from "react";
import { MdPersonPin } from "react-icons/md";
import { Link } from "react-router-dom";
import styles from "./Link.module.scss";

const AboutLink = (style: React.CSSProperties) => {
  return (
    <Link className={styles.link} to="/about" style={style}>
      <MdPersonPin size="1.05em" style={{ position: "relative", top: "4px" }} />
      &nbsp;About
    </Link>
  );
};

export default AboutLink;
