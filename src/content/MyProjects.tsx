import calculator from "../assets/images/calculator.png";
import developerSite from "../assets/images/developer_site.png";
import messageSpace from "../assets/images/message_space.png";
import oldSite from "../assets/images/old_site.png";
import recipeSearch from "../assets/images/recipe_search.png";
import Project from "../models/Project";
import { Technology } from "../models/Technology";

const MyProjects: Project[] = [
  {
    title: "MessageSpace",
    headline: "A real time messaging web app with rooms.",
    tools: [
      Technology.React,
      Technology.MaterialUI,
      Technology.SocketIO,
      Technology.Docker,
      Technology.Azure,
      Technology.Express,
    ],
    image: <img src={messageSpace} alt="Message Space" />,
    demoUrl: "https://message-space.web.app",
    gitHubUrl: "https://github.com/billwonggg/message-space",
  },
  {
    title: "New Personal Website",
    headline: "An upgraded version of my old personal website that you are current viewing.",
    tools: [Technology.React, Technology.TypeScript, Technology.Sass, Technology.Framer],
    image: <img src={developerSite} alt="New Personal Website" />,
    demoUrl: "https://billw.space",
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
