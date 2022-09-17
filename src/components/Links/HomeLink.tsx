import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import styles from "./Link.module.scss";

const HomeLink = (style: React.CSSProperties) => {
  return (
    <Link className={styles.link} to="/" style={style}>
      <FaHome size="0.9em" style={{ position: "relative", top: "2px" }} />
      &nbsp;Home
    </Link>
  );
};

export default HomeLink;
