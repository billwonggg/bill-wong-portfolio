import Experience from "../../models/Experience";
import GitHubButton from "../Buttons/GitHubButton";
import WebsiteButton from "../Buttons/WebsiteButton";
import styles from "./ExperienceCard.module.scss";

const ExperienceCard = (props: Experience) => {
  return (
    <div className={styles.experienceCard}>
      <h3>{props.title}</h3>
      <div className={styles.logoLine}>
        <p>{props.timeline}</p>
        <div className={styles.imgContainer}>{props.company}</div>
      </div>
      {props.image !== undefined && <div className={styles.demoImage}>{props.image}</div>}
      {props.description}
      <div className={styles.experienceLinks}>
        {props.gitHubUrl && <GitHubButton url={props.gitHubUrl} />}
        {props.demoUrl && <WebsiteButton url={props.demoUrl} />}
      </div>
    </div>
  );
};

export default ExperienceCard;
