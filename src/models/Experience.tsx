import { Technology } from "./Technology";

export default interface Experience {
  title: string;
  company?: JSX.Element;
  location?: string;
  timeline: string;
  description: JSX.Element;
  image?: JSX.Element;
  gitHubUrl?: string;
  demoUrl?: string;
  technologies: Technology[];
}
