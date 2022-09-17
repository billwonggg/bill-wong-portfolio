import React from "react";
import { Link } from "react-router-dom";
import styles from "./HomeLink.module.scss";

const HomeLink = (style: React.CSSProperties) => {
  return (
    <Link className={styles.homelink} to="/" style={style}>
      Home
    </Link>
  );
};

export default HomeLink;
