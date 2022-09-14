import Portfolio from "../src/models/Portfolio";
import MyEducation from "./MyEducation";
import MyExperience from "./MyExperience";
import MyHomeProfile from "./MyHomeProfile";
import MyProjects from "./MyProjects";
import MySkills from "./MySkills";

const MyPortfolio: Portfolio = {
  homeProfile: MyHomeProfile,
  education: MyEducation,
  experience: MyExperience,
  skills: MySkills,
  projects: MyProjects,
};

export default MyPortfolio;
