import MyCertifications from "../../content/MyCertifications";
import CredentialButton from "../Buttons/CredentialButton";
import styles from "./CertificationList.module.scss";

const CertificationList = () => {
  return (
    <div className={styles.list}>
      {MyCertifications.map((certification, i) => (
        <div className={styles.item} key={i}>
          {certification.image}
          <p className={styles.title}>{certification.name}</p>
          <CredentialButton url={certification.url} />
        </div>
      ))}
    </div>
  );
};

export default CertificationList;
