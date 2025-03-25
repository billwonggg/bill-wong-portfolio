import calculator from "../assets/images/projects/calculator.png";
import developerSite from "../assets/images/projects/developer_site.png";
import messageSpace from "../assets/images/projects/message_space.png";
import oldSite from "../assets/images/projects/old_site.png";
import recipeSearch from "../assets/images/projects/recipe_search.png";
import smu from "../assets/images/projects/smu.png";
import Project from "../models/Project";
import { Technology } from "../models/Technology";

const MyProjects: Project[] = [
  {
    title: "Student Management System",
    headline: "A website to manage student data connected to a database.",
    tools: [
      Technology.React,
      Technology.TypeScript,
      Technology.MaterialUI,
      Technology.SpringBoot,
      Technology.PostgreSql,
      Technology.Docker,
    ],
    image: <img src={smu} alt="Student Management System" />,
    gitHubUrl: "https://github.com/billwonggg/student-management-system",
  },

  {
    title: "MessageSpace",
    headline: "A real time messaging web app with rooms.",
    tools: [Technology.React, Technology.MaterialUI, Technology.SocketIO, Technology.Docker, Technology.Express],
    image: <img src={messageSpace} alt="Message Space" />,
    demoUrl: "https://message-space.web.app",
    gitHubUrl: "https://github.com/billwonggg/message-space",
  },
  {
    title: "New Personal Website",
    headline: "An upgraded version of my old personal website. You are currently viewing this website.",
    tools: [Technology.React, Technology.TypeScript, Technology.Sass, Technology.Framer],
    image: <img src={developerSite} alt="New Personal Website" />,
    demoUrl: "https://billw.blog",
    gitHubUrl: "https://github.com/billwonggg/bill-wong-portfolio",
  },
  {
    title: "Calculator App",
    headline: "A calculator with a minimalist design and great features.",
    tools: [Technology.React, Technology.TypeScript, Technology.Jest],
    image: <img src={calculator} alt="Calculator App" />,
    demoUrl: "https://ui-calculate.web.app/",
    gitHubUrl: "https://github.com/billwonggg/calculator-app",
  },
  {
    title: "Recipe Search Tool",
    headline: "A website to search for your favourite recipes.",
    tools: [Technology.React, Technology.MaterialUI],
    image: <img src={recipeSearch} alt="Recipe Search Tool" />,
    demoUrl: "https://recipesearch-api.web.app/",
    gitHubUrl: "https://github.com/billwonggg/recipe-search",
  },
  {
    title: "Old Personal Website",
    headline: "My first ever front-end project.",
    tools: [Technology.HTML, Technology.CSS, Technology.JavaScript],
    image: <img src={oldSite} alt="Old Personal Website" />,
    demoUrl: "https://billwonggg.github.io/",
    gitHubUrl: "https://github.com/billwonggg/billwonggg.github.io",
  },
];

export default MyProjects;
