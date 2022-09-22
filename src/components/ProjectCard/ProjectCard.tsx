import Project from "../../models/Project";
import DemoButton from "../Buttons/DemoButton";
import styles from "./ProjectCard.module.scss";

const ProjectCard = (props: Project) => {
  return (
    <div className={styles.projectCard}>
      <h2>{props.title}</h2>
      {props.headline && <h4>{props.headline}</h4>}
      <p>{props.description}</p>
      {/* {props.gitHubUrl && <DemoButton {props.demoUrl}/>} */}
      {props.demoUrl && <DemoButton url={props.demoUrl} />}
    </div>
  );
};

export default ProjectCard;
