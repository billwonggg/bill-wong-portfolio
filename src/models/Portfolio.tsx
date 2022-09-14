import Education from "./Education";
import Project from "./Project";
import { Technology } from "./Technology";
import Experience from "./Experience";
import HomeProfile from "./HomeProfile";

export default interface Portfolio {
  homeProfile: HomeProfile;
  projects: Project[];
  education: Education;
  experience: Experience[];
  skills: Technology[];
}
