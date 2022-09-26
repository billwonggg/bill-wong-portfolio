import { BsGithub, BsLinkedin } from "react-icons/bs";
import styles from "./SocialLinks.module.scss";

const SocialLinks = () => {
  return (
    <div className={styles.linkcontainer}>
      <div className={styles.linksInner}>
        <a
          href="https://github.com/billwonggg"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.github}
        >
          <BsGithub />
        </a>
      </div>
      <div className={styles.linksInner}>
        <a
          href="https://www.linkedin.com/in/bill-wong1"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.linkedin}
        >
          <BsLinkedin />
        </a>
      </div>
    </div>
  );
};

export default SocialLinks;
