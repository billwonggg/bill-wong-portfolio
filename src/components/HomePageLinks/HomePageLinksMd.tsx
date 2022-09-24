import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import AboutLink from "../Links/AboutLink";
import ExperienceLink from "../Links/ExperienceLink";
import ProjectsLink from "../Links/ProjectsLink";
import SkillsLink from "../Links/SkillsLink";
import styles from "./HomePageLinksMd.module.scss";

const HomePageLinksMd = () => {
  const [open, setOpen] = useState<boolean>(false);

  const linkStyles: React.CSSProperties = {
    width: "fit-content",
    bottom: "6px",
    fontSize: "1.7rem",
    fontWeight: 700,
  };

  return (
    <>
      <div
        className={`${styles.menu} ${open ? styles.open : styles.closed}`}
        onClick={() => setOpen(!open)}
        style={{
          transform: open ? "rotate(90deg)" : "rotate(0deg)",
          transition: "all 0.2s linear",
        }}
      >
        {open ? <IoClose /> : <HiMenu />}
      </div>
      <AnimatePresence mode="wait">
        {open && (
          <motion.div
            className={styles.linksInner}
            initial={{ y: "-100vh" }}
            animate={{ y: 0 }}
            exit={{ y: "-100vh" }}
            transition={{ duration: 0.8 }}
          >
            <AboutLink {...linkStyles} />
            <ProjectsLink {...linkStyles} />
            <ExperienceLink {...linkStyles} />
            <SkillsLink {...linkStyles} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default HomePageLinksMd;
