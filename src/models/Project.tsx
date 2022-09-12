import { Technology } from "./Technology";

export interface Project {
  title: string;
  headline?: string;
  description: string;
  tools: Technology[];
  imageUrl: string;
  gitHubUrl?: string;
  demoUrl?: string;
}
