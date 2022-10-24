import accenture from "../assets/images/accenture.png";
import aws from "../assets/images/aws.png";
import nab from "../assets/images/nab.png";
import policyMap from "../assets/images/policy-map.png";
import Experience from "../models/Experience";
import { Technology } from "../models/Technology";

const MyExperience: Experience[] = [
  {
    title: "Software Engineering Intern",
    company: <img src={nab} alt="NAB" style={{ width: "min(80px, 15vw)" }} />,
    timeline: "Feb 2023 -",
    description: (
      <ul>
        <li>Not yet started.</li>
      </ul>
    ),
    technologies: [],
  },
  {
    title: "AWS Early Careers Innovation Program",
    company: <img src={aws} alt="Amazon Web Services" style={{ width: "min(60px, 12vw)" }} />,
    timeline: "Apr 2022 - May 2022",
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
    technologies: [Technology.AWS, Technology.DrawIO, Technology.PowerPoint],
  },
  {
    title: "Accenture Tech Bootcamp",
    company: <img src={accenture} alt="Accenture" style={{ width: "min(110px, 20vw)" }} />,
    timeline: "Feb 2022",
    image: (
      <img
        src={policyMap}
        alt="World COVID Restrictions"
        style={{ outline: "5px solid white", width: "100%", margin: "0.5rem 0" }}
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
    technologies: [Technology.React, Technology.MaterialUI, Technology.AWS],
    gitHubUrl: "https://github.com/billwonggg/world-covid-restrictions",
    demoUrl: "https://policy-map.web.app/",
  },
];

export default MyExperience;
