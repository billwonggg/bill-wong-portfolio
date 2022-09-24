import { VscGithub } from "react-icons/vsc";
import ButtonProps from "./ButtonProps";
import styles from "./Button.module.scss";

const GitHubButton = ({ url }: ButtonProps) => {
  return (
    <a className={styles.button} href={url} target="_blank" rel="noopener noreferrer">
      <VscGithub className={`${styles.logo} ${styles.gitHub}`} />
      GitHub
    </a>
  );
};

export default GitHubButton;
