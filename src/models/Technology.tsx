import { FaSass } from "react-icons/fa";
import {
  SiAmazonaws,
  SiCss3,
  SiDocker,
  SiExpress,
  SiFramer,
  SiHtml5,
  SiJavascript,
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
  CSS: { name: "CSS", icon: SiCss3, color: "#1572B6" },
  Docker: { name: "Docker", icon: SiDocker, color: "#2496ED" },
  Express: { name: "Express.js", icon: SiExpress },
  Framer: { name: "Framer Motion", icon: SiFramer, color: "#0055FF" },
  HTML: { name: "HTML", icon: SiHtml5, color: "#E34F26" },
  JavaScript: { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  Jest: { name: "Jest", icon: SiJest, color: "#C21325" },
  MaterialUI: { name: "Material UI", icon: SiMaterialui, color: "#007FFF" },
  React: { name: "React", icon: SiReact, color: "#61DAFB" },
  SocketIO: { name: "Socket.io", icon: SiSocketdotio },
  Sass: { name: "Sass", icon: FaSass, color: "#CC6699" },
  TypeScript: { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
};
