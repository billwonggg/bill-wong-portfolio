import MyHomeProfile from "../../content/MyHomeProfile";
import Typewriter from "typewriter-effect";
import styles from "./ProfileCard.module.scss";

const ProfileCard = () => {
  return (
    <div className={styles.profileCard}>
      <span>Hi, my name is </span>
      <span className={styles.introName}>Bill.</span>
      <br />
      <div className={styles.typewriter}>
        I am&nbsp;
        <Typewriter options={{ strings: MyHomeProfile.headlines, autoStart: true, loop: true }} />
      </div>
    </div>
  );
};

export default ProfileCard;