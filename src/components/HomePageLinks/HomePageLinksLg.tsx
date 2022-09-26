import React from "react";
import AboutLink from "../Links/AboutLink";
import ExperienceLink from "../Links/ExperienceLink";
import ProjectsLink from "../Links/ProjectsLink";
import SkillsLink from "../Links/SkillsLink";
import styles from "./HomePageLinksLg.module.scss";

const HomePageLinksLg = () => {
  const linkStyles: React.CSSProperties = {
    position: "relative",
    bottom: "6px",
    margin: "0px 2rem",
  };

  return (
    <div className={styles.linkcontainer}>
      <div className={styles.linksInner}>
        <AboutLink {...linkStyles} />
        <ProjectsLink {...linkStyles} />
        <ExperienceLink {...linkStyles} />
        <SkillsLink {...linkStyles} />
      </div>
    </div>
  );
};

export default HomePageLinksLg;
