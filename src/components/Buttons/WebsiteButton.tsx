import { TbWorld } from "react-icons/tb";
import ButtonProps from "./ButtonProps";
import styles from "./Button.module.scss";

const WebsiteButton = ({ url }: ButtonProps) => {
  return (
    <a className={styles.button} href={url} rel="_blank noreferrer">
      <TbWorld className={styles.logo} />
      Website
    </a>
  );
};

export default WebsiteButton;
