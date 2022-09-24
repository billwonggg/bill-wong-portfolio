import { Technology } from "../../models/Technology";
import styles from "./ToolBadges.module.scss";

interface ToolBadgesProps {
  tools: Technology[];
}

const ToolBadges = ({ tools }: ToolBadgesProps) => {
  return (
    <div className={styles.tools}>
      {tools.map((tool, i) => (
        <div className={styles.badge} key={i}>
          {tool}
        </div>
      ))}
    </div>
  );
};

export default ToolBadges;
