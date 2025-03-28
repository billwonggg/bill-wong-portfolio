import { FaSass } from "react-icons/fa";
import {
  SiAmazonwebservices,
  SiCss3,
  SiDiagramsdotnet,
  SiDocker,
  SiExpress,
  SiFramer,
  SiHtml5,
  SiJavascript,
  SiJest,
  SiKotlin,
  SiKubernetes,
  SiMui,
  SiNextdotjs,
  SiPostgresql,
  SiReact,
  SiSnowflake,
  SiSocketdotio,
  SiSpringboot,
  SiTypescript,
} from "react-icons/si";

import { Badge } from "../components/ToolBadges/ToolBadges";

export const Technology: { [key: string]: Badge } = {
  AWS: { name: "AWS", icon: SiAmazonwebservices, color: "#FF9900" },
  CSS: { name: "CSS", icon: SiCss3, color: "#1572B6" },
  Docker: { name: "Docker", icon: SiDocker, color: "#2496ED" },
  DrawIO: { name: "Draw.io", icon: SiDiagramsdotnet, color: "#F08705" },
  Express: { name: "Express.js", icon: SiExpress },
  Framer: { name: "Framer Motion", icon: SiFramer, color: "#0055FF" },
  HTML: { name: "HTML", icon: SiHtml5, color: "#E34F26" },
  JavaScript: { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  Jest: { name: "Jest", icon: SiJest, color: "#C21325" },
  MaterialUI: { name: "Material UI", icon: SiMui, color: "#007FFF" },
  PostgreSql: { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  React: { name: "React", icon: SiReact, color: "#61DAFB" },
  SocketIO: { name: "Socket.io", icon: SiSocketdotio },
  SpringBoot: { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F" },
  Sass: { name: "Sass", icon: FaSass, color: "#CC6699" },
  TypeScript: { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  Kubernetes: { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5" },
  Kotlin: { name: "Kotlin", icon: SiKotlin, color: "#7F52FF" },
  NextJS: { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
  Snowflake: { name: "Snowflake", icon: SiSnowflake, color: "#29B5E8" },
};
