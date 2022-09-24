import Project from "../models/Project";
import messageSpace from "../assets/images/message_space.png";
import calculator from "../assets/images/calculator.png";
import recipeSearch from "../assets/images/recipe_search.png";

const MyProjects: Project[] = [
  {
    title: "MessageSpace",
    headline: "A real time messaging web app with rooms.",
    tools: ["React", "MaterialUI", "Azure", "SocketIO", "Docker"],
    image: <img src={messageSpace} alt="Message Space" />,
    demoUrl: "https://message-space.web.app",
    gitHubUrl: "https://github.com/billwonggg/message-space",
  },
  {
    title: "Calculator App",
    headline: "A calculator with a minimalist design and great features.",
    tools: ["React", "TypeScript"],
    image: <img src={calculator} alt="Calculator App" />,
    demoUrl: "https://ui-calculate.web.app/",
    gitHubUrl: "https://github.com/billwonggg/calculator-app",
  },
  {
    title: "Recipe Search Tool",
    headline: "A website to search for your favourite recipes.",
    tools: ["React", "MaterialUI"],
    image: <img src={recipeSearch} alt="Recipe Search Tool" />,
    demoUrl: "https://recipesearch-api.web.app/",
    gitHubUrl: "https://github.com/billwonggg/recipe-search",
  },
];

export default MyProjects;
