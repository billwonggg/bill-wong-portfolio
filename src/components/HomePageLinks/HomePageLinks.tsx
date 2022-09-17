import styles from "./HomePageLinks.module.scss";

const HomePageLinks = () => {
  return (
    <div className={styles.linkcontainer}>
      <div className={styles.linksInner}>
        <a href="/about" className={styles.link}>
          About
        </a>
        <a href="/projects" className={styles.link}>
          Projects
        </a>
        <a href="/skills" className={styles.link}>
          Skills
        </a>
      </div>
    </div>
  );
};

export default HomePageLinks;
