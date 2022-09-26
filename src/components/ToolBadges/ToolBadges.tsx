import { IconType } from "react-icons";
import styles from "./ToolBadges.module.scss";

export interface Badge {
  name: string;
  icon: IconType;
  color?: string;
}
interface ToolBadgesProps {
  tools: Badge[];
}

const ToolBadges = ({ tools }: ToolBadgesProps) => {
  return (
    <div className={styles.tools}>
      {tools.map((tool, i) => (
        <div className={styles.badge} key={i}>
          <tool.icon style={{ position: "relative", top: "2px", color: tool.color }} />
          &nbsp;{tool.name}
        </div>
      ))}
    </div>
  );
};

export default ToolBadges;
