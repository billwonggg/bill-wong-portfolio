import Project from "../../models/Project";
import styles from "./ProjectCard.module.scss";

const ProjectCard = (props: Project) => {
  return (
    <div className={styles.projectCard}>
      <h2>{props.title}</h2>
      {props.headline && <h4>{props.headline}</h4>}
      <p>{props.description}</p>
      {props.gitHubUrl && <a href={props.gitHubUrl}>GitHub</a>}
      {props.demoUrl && <a href={props.demoUrl}>Website</a>}
    </div>
  );
};

export default ProjectCard;
