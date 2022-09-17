import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import styles from "./SocialLinks.module.scss";

const SocialLinks = () => {
  return (
    <div className={styles.linkcontainer}>
      <div className={styles.linksInner}>
        <a
          href="https://github.com/billwonggg"
          target="_blank"
          rel="noreferrer"
          className={styles.github}
        >
          <BsGithub style={{ margin: "30px 0px" }} />
        </a>
        <a
          href="https://www.linkedin.com/in/bill-wong1"
          target="_blank"
          rel="noreferrer"
          className={styles.linkedin}
        >
          <BsLinkedin style={{ margin: "30px 0px" }} />
        </a>
      </div>
    </div>
  );
};

export default SocialLinks;
