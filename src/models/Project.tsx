import { JsxElement } from "typescript";
import { Technology } from "./Technology";

export default interface Project {
  title: string;
  headline?: string;
  description?: string;
  tools: Technology[];
  image?: JSX.Element;
  gitHubUrl?: string;
  demoUrl?: string;
}
