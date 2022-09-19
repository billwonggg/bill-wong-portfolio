import React, { useState } from "react";
import styles from "./HomePageLinksMd.module.scss";
import AboutLink from "../Links/AboutLink";
import ProjectsLink from "../Links/ProjectsLink";
import SkillsLink from "../Links/SkillsLink";
import ExperienceLink from "../Links/ExperienceLink";
import { HiMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";

const HomePageLinksMd = () => {
  const linkStyles: React.CSSProperties = {
    position: "relative",
    bottom: "6px",
    margin: "0px 40px",
    fontSize: "1.7rem",
    fontWeight: 700,
  };
  const [open, setOpen] = useState<boolean>(false);

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
            <div className={styles.linksInner}>
              <AboutLink {...linkStyles} />
              <ProjectsLink {...linkStyles} />
              <ExperienceLink {...linkStyles} />
              <SkillsLink {...linkStyles} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default HomePageLinksMd;
