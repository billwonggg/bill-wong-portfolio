import Project from "../../models/Project";
import GitHubButton from "../Buttons/GitHubButton";
import WebsiteButton from "../Buttons/WebsiteButton";
import styles from "./ProjectCard.module.scss";

const ProjectCard = (props: Project) => {
  return (
    <div className={styles.projectCard}>
      <h2>{props.title}</h2>
      {props.headline && <h4>{props.headline}</h4>}
      {props.image}
      {props.description && <p>{props.description}</p>}
      <div className={styles.projectLinks}>
        {props.gitHubUrl && <GitHubButton url={props.gitHubUrl} />}
        {props.demoUrl && <WebsiteButton url={props.demoUrl} />}
      </div>
    </div>
  );
};

export default ProjectCard;
