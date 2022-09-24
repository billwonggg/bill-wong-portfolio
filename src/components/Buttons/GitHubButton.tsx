import { VscGithub } from "react-icons/vsc";
import styles from "./Button.module.scss";
import ButtonProps from "./ButtonProps";

const GitHubButton = ({ url }: ButtonProps) => {
  return (
    <a className={styles.button} href={url} target="_blank" rel="noopener noreferrer">
      <VscGithub className={`${styles.logo} ${styles.gitHub}`} />
      GitHub
    </a>
  );
};

export default GitHubButton;
