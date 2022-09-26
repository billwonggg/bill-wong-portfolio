import {
  SiAmazonaws,
  SiDocker,
  SiExpress,
  SiJest,
  SiMaterialui,
  SiMicrosoftazure,
  SiReact,
  SiSocketdotio,
  SiTypescript,
} from "react-icons/si";
import { Badge } from "../components/ToolBadges/ToolBadges";

export const Technology: { [key: string]: Badge } = {
  AWS: { name: "AWS", icon: SiAmazonaws, color: "#FF9900" },
  Azure: { name: "Azure", icon: SiMicrosoftazure, color: "#0078D4" },
  Docker: { name: "Docker", icon: SiDocker, color: "#2496ED" },
  Express: { name: "Express.js", icon: SiExpress },
  Jest: { name: "Jest", icon: SiJest, color: "#C21325" },
  MaterialUI: { name: "Material UI", icon: SiMaterialui, color: "#007FFF" },
  React: { name: "React", icon: SiReact, color: "#61DAFB" },
  SocketIO: { name: "Socket.io", icon: SiSocketdotio },
  TypeScript: { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
};
