import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <p>&copy; {new Date().getFullYear()} Bill Wong</p>
    </div>
  );
};

export default Footer;
