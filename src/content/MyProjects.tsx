import calculator from "../assets/images/calculator.png";
import messageSpace from "../assets/images/message_space.png";
import recipeSearch from "../assets/images/recipe_search.png";
import Project from "../models/Project";

const MyProjects: Project[] = [
  {
    title: "MessageSpace",
    headline: "A real time messaging web app with rooms.",
    tools: ["React", "MaterialUI", "Socket.io", "Docker", "Azure"],
    image: <img src={messageSpace} alt="Message Space" />,
    demoUrl: "https://message-space.web.app",
    gitHubUrl: "https://github.com/billwonggg/message-space",
  },
  {
    title: "Calculator App",
    headline: "A calculator with a minimalist design and great features.",
    tools: ["React", "TypeScript", "Jest"],
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
