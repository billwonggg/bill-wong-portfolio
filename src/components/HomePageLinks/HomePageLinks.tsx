import React from "react";
import styles from "./HomePageLinks.module.scss";
import AboutLink from "../Links/AboutLink";
import ProjectsLink from "../Links/ProjectsLink";
import SkillsLink from "../Links/SkillsLink";

const HomePageLinks = () => {
  const linkStyles: React.CSSProperties = {
    position: "relative",
    bottom: "4px",
    margin: "0px 20px",
  };

  return (
    <div className={styles.linkcontainer}>
      <div className={styles.linksInner}>
        <AboutLink {...linkStyles} />
        <ProjectsLink {...linkStyles} />
        <SkillsLink {...linkStyles} />
      </div>
    </div>
  );
};

export default HomePageLinks;
