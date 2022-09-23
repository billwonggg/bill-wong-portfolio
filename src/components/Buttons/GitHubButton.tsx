import { VscGithub } from "react-icons/vsc";
import ButtonProps from "./ButtonProps";
import styles from "./Button.module.scss";

const GitHubButton = ({ url }: ButtonProps) => {
  return (
    <a className={styles.button} href={url} rel="_blank noreferrer">
      <VscGithub className={styles.logo} />
      GitHub
    </a>
  );
};

export default GitHubButton;
