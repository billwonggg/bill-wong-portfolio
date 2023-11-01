import React from "react";
import { PiCertificate } from "react-icons/pi";
import { Link } from "react-router-dom";
import styles from "./Link.module.scss";

const CertificationsLink = (style: React.CSSProperties) => {
  return (
    <Link className={styles.link} to="/certifications" style={style}>
      <PiCertificate size="1.05em" style={{ position: "relative", top: "2.5px" }} />
      &nbsp;Certifications
    </Link>
  );
};

export default CertificationsLink;
