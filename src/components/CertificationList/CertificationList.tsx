import MyCertifications from "../../content/MyCertifications";
import styles from "./CertificationList.module.scss";

const CertificationList = () => {
  return (
    <ul className={styles.list}>
      {MyCertifications.map((certification, i) => (
        <li key={i}>
          <a href={certification.url}>{certification.name}</a>
        </li>
      ))}
    </ul>
  );
};

export default CertificationList;
