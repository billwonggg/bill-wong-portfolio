import { Technology } from "./Technology";

export default interface Experience {
  title: string;
  company?: string;
  location?: string;
  employmentType?: "Full-Time" | "Part-Time" | "Internship" | "Casual" | "Program";
  timeline: string;
  image?: JSX.Element;
  gitHubUrl?: string;
  demoUrl?: string;
  technologies: Technology[];
}
