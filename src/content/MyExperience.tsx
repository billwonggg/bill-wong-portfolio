import accenture from "../assets/images/experience/accenture.png";
import aws from "../assets/images/experience/aws.png";
import nab from "../assets/images/experience/nab.png";
import policyMap from "../assets/images/experience/policy-map.png";
import Experience from "../models/Experience";
import { Technology } from "../models/Technology";

const MyExperience: Experience[] = [
  {
    title: "Software Engineering Intern",
    company: <img src={nab} alt="NAB" style={{ width: "min(80px, 15vw)" }} />,
    timeline: "Feb 2023 - Present",
    description: (
      <ul>
        <li>
          Built a web app with React, TypeScript and NAB's UI frameworks for submissions of Suspicious Matter Reports
          for Anti-Money Laundering and Counter-Terrorism Financing obligations.
        </li>
        <li>
          Implemented and applied test driven development for the backend REST API microservice in a dockerised
          environment using Java Spring Boot and PostgreSQL, and improved code coverage by writing unit and component
          tests.
        </li>
        <li>
          Planned and executed production deployment procedures, from API and testing documentation to various quality
          and compliance checks before deploying to production in AWS.
        </li>
      </ul>
    ),
    technologies: [
      Technology.React,
      Technology.TypeScript,
      Technology.Jest,
      Technology.SpringBoot,
      Technology.PostgreSql,
      Technology.Docker,
      Technology.AWS,
    ],
  },
  {
    title: "AWS Early Careers Innovation Program",
    company: <img src={aws} alt="Amazon Web Services" style={{ width: "min(60px, 12vw)" }} />,
    timeline: "Apr 2022 - May 2022",
    description: (
      <ul>
        <li>
          Selected to join a cohort-based program to learn more about AWS and skills in the cloud computing industry.
        </li>
        <li>
          Worked in a team to deliver an elevator pitch followed by an end-to-end cloud migration strategy for a
          business and achieved a semi-final place.
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
          Being selected out of 800 candidates nationwide, worked as a team and created a full stack website to help
          travellers understand COVID-19 restrictions around the world easily.
        </li>
        <li>
          Led the front-end team: delegated tasks, initiated discussions, and helped team members review, debug, and
          test code.
        </li>
        <li>
          Implemented the entire map component and worked closely with the UI/UX team to improve the website appearance.
        </li>
      </ul>
    ),
    technologies: [Technology.React, Technology.MaterialUI, Technology.AWS],
    gitHubUrl: "https://github.com/billwonggg/world-covid-restrictions",
    demoUrl: "https://policy-map.web.app/",
  },
];

export default MyExperience;
