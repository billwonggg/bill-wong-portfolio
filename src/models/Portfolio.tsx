import Education from "./Education";
import Project from "./Project";
import { Technology } from "./Technology";
import Experience from "./Experience";

export default interface Portfolio {
  homeProfile: {
    headlines: string[];
    description: string;
  };

  projects: Project[];
  work: Experience[];
  education: Education;
  skills: Technology[];
}
