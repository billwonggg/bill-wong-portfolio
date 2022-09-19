import React from "react";
import styles from "./HomePageLinksLg.module.scss";
import AboutLink from "../Links/AboutLink";
import ProjectsLink from "../Links/ProjectsLink";
import SkillsLink from "../Links/SkillsLink";
import ExperienceLink from "../Links/ExperienceLink";

const HomePageLinksLg = () => {
  const linkStyles: React.CSSProperties = {
    position: "relative",
    bottom: "6px",
    margin: "0px 50px",
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
