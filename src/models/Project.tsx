import { Technology } from "./Technology";

export default interface Project {
  title: string;
  headline?: string;
  description: string;
  tools: Technology[];
  imageUrl: string;
  gitHubUrl?: string;
  demoUrl?: string;
}
