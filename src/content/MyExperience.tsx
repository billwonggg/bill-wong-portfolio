import Experience from "../models/Experience";
import aws from "../assets/images/aws.png";
import accenture from "../assets/images/accenture.png";
import policyMap from "../assets/images/policy-map.png";

const MyExperience: Experience[] = [
  {
    title: "AWS Early Careers Innovation Program",
    company: <img src={aws} alt="Amazon Web Services" style={{ width: "65px" }} />,
    timeline: "May 2022",
    description: (
      <ul>
        <li>
          Selected to join a cohort-based program to learn more about AWS and skills in the cloud
          computing industry.
        </li>
        <li>
          Worked in a team to deliver an elevator pitch followed by an end-to-end cloud migration
          strategy for a business and achieved a semi-final place.
        </li>
      </ul>
    ),
    technologies: ["AWS"],
  },
  {
    title: "Accenture Tech Bootcamp",
    company: <img src={accenture} alt="Accenture" style={{ width: "110px" }} />,
    timeline: "Feb 2022",
    image: (
      <img
        src={policyMap}
        alt="World COVID Restrictions"
        style={{ outline: "5px solid white", width: "90%" }}
      />
    ),
    description: (
      <ul>
        <li>
          Being selected out of 800 candidates nationwide, worked as a team and created a full stack
          website to help travellers understand COVID-19 restrictions around the world easily.
        </li>
        <li>
          Led the front-end team: delegated tasks, initiated discussions, and helped team members
          review, debug, and test code.
        </li>
        <li>
          Implemented the entire map component and worked closely with the UI/UX team to improve the
          website appearance.
        </li>
      </ul>
    ),
    technologies: ["React", "MaterialUI", "AWS"],
    gitHubUrl: "https://github.com/billwonggg/world-covid-restrictions",
    demoUrl: "https://policy-map.web.app/",
  },
];

export default MyExperience;
