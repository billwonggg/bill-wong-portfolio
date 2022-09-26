import { Badge } from "../components/ToolBadges/ToolBadges";

export default interface Experience {
  title: string;
  company?: JSX.Element;
  location?: string;
  timeline: string;
  description: JSX.Element;
  image?: JSX.Element;
  gitHubUrl?: string;
  demoUrl?: string;
  technologies: Badge[];
}
