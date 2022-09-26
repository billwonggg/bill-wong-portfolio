import { Badge } from "../components/ToolBadges/ToolBadges";

export default interface Project {
  title: string;
  headline?: string;
  description?: string;
  tools: Badge[];
  image?: JSX.Element;
  gitHubUrl?: string;
  demoUrl?: string;
}
