import { IconType } from "react-icons";
import styles from "./ToolBadges.module.scss";

export interface Badge {
  name: string;
  icon: IconType;
}
interface ToolBadgesProps {
  tools: Badge[];
}

const ToolBadges = ({ tools }: ToolBadgesProps) => {
  return (
    <div className={styles.tools}>
      {tools.map((tool, i) => (
        <div className={styles.badge} key={i}>
          <tool.icon style={{ position: "relative", top: "2.5px" }} />
          &nbsp;{tool.name}
        </div>
      ))}
    </div>
  );
};

export default ToolBadges;
