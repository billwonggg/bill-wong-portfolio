import { FiExternalLink } from "react-icons/fi";
import styles from "./Button.module.scss";
import ButtonProps from "./ButtonProps";

const CredentialButton = ({ url }: ButtonProps) => {
  return (
    <a className={styles.button} href={url} target="_blank" rel="noopener noreferrer">
      <FiExternalLink className={`${styles.logo} ${styles.website}`} />
      Credential
    </a>
  );
};

export default CredentialButton;
