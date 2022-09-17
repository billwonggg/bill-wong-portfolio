import React from "react";
import { Link } from "react-router-dom";
import styles from "./HomeLink.module.scss";
import { FaHome } from "react-icons/fa";

const HomeLink = (style: React.CSSProperties) => {
  return (
    <Link className={styles.homelink} to="/" style={style}>
      <FaHome size="0.9em" style={{ position: "relative", top: "2px" }} />
      &nbsp;Home
    </Link>
  );
};

export default HomeLink;
