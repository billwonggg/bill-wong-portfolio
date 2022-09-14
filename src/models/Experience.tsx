import { Technology } from "./Technology";

export default interface Experience {
  title: string;
  company: string;
  location?: string;
  employmentType?: "Full-Time" | "Part-Time" | "Internship" | "Casual" | "Program";
  team?: string;
  from: string;
  to: string;
  technologies: Technology[];
}
