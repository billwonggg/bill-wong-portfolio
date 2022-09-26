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
  AWS: { name: "AWS", icon: SiAmazonaws },
  Azure: { name: "Azure", icon: SiMicrosoftazure },
  Docker: { name: "Docker", icon: SiDocker },
  Express: { name: "Express", icon: SiExpress },
  Jest: { name: "Jest", icon: SiJest },
  MaterialUI: { name: "MaterialUI", icon: SiMaterialui },
  React: { name: "React", icon: SiReact },
  SocketIO: { name: "Socket.io", icon: SiSocketdotio },
  TypeScript: { name: "TypeScript", icon: SiTypescript },
};
