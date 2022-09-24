import { TbWorld } from "react-icons/tb";
import ButtonProps from "./ButtonProps";
import styles from "./Button.module.scss";

const WebsiteButton = ({ url }: ButtonProps) => {
  return (
    <a className={styles.button} href={url} target="_blank" rel="noopener noreferrer">
      <TbWorld className={`${styles.logo} ${styles.website}`} />
      Website
    </a>
  );
};

export default WebsiteButton;
