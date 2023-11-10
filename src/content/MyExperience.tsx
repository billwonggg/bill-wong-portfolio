import accenture from "../assets/images/experience/accenture.png";
import atlassian from "../assets/images/experience/atlassian.png";
import aws from "../assets/images/experience/aws.png";
import nab from "../assets/images/experience/nab.png";
import policyMap from "../assets/images/experience/policy-map.png";
import Experience from "../models/Experience";
import { Technology } from "../models/Technology";

const MyExperience: Experience[] = [
  {
    title: "Software Engineering Intern",
    company: <img src={atlassian} alt="Atlassian" style={{ width: "min(75px, 15vw)" }} />,
    timeline: "Nov 2023 - Feb 2024",
    description: (
      <ul>
        <li>Upcoming internship</li>
      </ul>
    ),
    technologies: [],
  },
  {
    title: "Software Engineering Intern",
    company: <img src={nab} alt="NAB" style={{ width: "min(80px, 15vw)" }} />,
    timeline: "Feb 2023 - Present",
    description: (
      <ul>
        <li>
          Worked on a Java microservice and a React TypeScript web app for submissions of Suspicious Matter Reports in
          line with NAB's Anti-Money Laundering and Counter-Terrorism Financing obligations.
        </li>
        <li>
          Applied test driven development for the backend Java microservice, and improved code coverage by writing unit
          and component tests in a dockerised environment.
        </li>
        <li>
          Planned and executed production deployment procedures, documenting steps for deployment and rollback before
          executing the procedure to production in AWS EKS.
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
      Technology.Kubernetes,
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
        <li>Created a full stack website to help travellers visualise COVID-19 restrictions around the world.</li>
        <li>
          Learned the benefits of serverless computing by using AWS Lambda, DynamoDB, and API Gateway as the backend.
        </li>
        <li>
          Led the front-end team: delegated tasks, initiated discussions, and helped team members review, debug, and
          test code.
        </li>
        <li>
          Implemented the entire map component and worked closely with the UI/UX members to improve the website
          appearance.
        </li>
      </ul>
    ),
    technologies: [Technology.React, Technology.MaterialUI, Technology.AWS],
    gitHubUrl: "https://github.com/billwonggg/world-covid-restrictions",
    demoUrl: "https://policy-map.web.app/",
  },
];

export default MyExperience;
