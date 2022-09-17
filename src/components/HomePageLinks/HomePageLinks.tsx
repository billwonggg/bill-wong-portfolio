import styles from "./HomePageLinks.module.scss";
import { Link } from "react-router-dom";

const HomePageLinks = () => {
  return (
    <div className={styles.linkcontainer}>
      <div className={styles.linksInner}>
        <Link to="/about" className={styles.link}>
          About
        </Link>
        <Link to="/projects" className={styles.link}>
          Projects
        </Link>
        <Link to="/skills" className={styles.link}>
          Skills
        </Link>
      </div>
    </div>
  );
};

export default HomePageLinks;
