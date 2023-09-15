import { AiOutlineHtml5 } from "react-icons/ai";
import { DiCss3, DiReact, DiNodejs } from "react-icons/di";
import { SiJavascript, SiExpress, SiPostgresql, SiGit } from "react-icons/si";

export const MY_NAME = "Alex Martinez";
export const ABOUT_ME_HEADER = "About Me";
export const ABOUT_ME =
  "I am a Full-Stack Engineer with a focus on the frontend based out of Virginia. Outside of sitting in my room and coding I like to workout, play video games and listen to music.";
export const WELCOME = "Hi, I'm Alex";
export const TITLE = "I'm a Full-Stack Software Engineer";
export const COPYRIGHT = "Alexandro Martinez @2023";
export const ABOUT = "About";
export const EXPERIENCE = "Experience";
export const PROJECTS = "Projects";
export const SKILLS = "Skills";
export const Skills = [
  {
    id: 1,
    name: "HTML",
    icon: AiOutlineHtml5,
  },
  {
    id: 2,
    name: "CSS",
    icon: DiCss3,
  },

  {
    id: 3,
    name: "JavaScript",
    icon: SiJavascript,
  },

  {
    id: 4,
    name: "React",
    icon: DiReact,
  },

  {
    id: 5,
    name: "Node.js",
    icon: DiNodejs,
  },

  {
    id: 6,
    name: "Express",
    icon: SiExpress,
  },
  {
    id: 7,
    name: "PostgreSQL",
    icon: SiPostgresql,
  },
  {
    id: 8,
    name: "Git",
    icon: SiGit,
  },
];

export const ProjectDetails = [
  {
    id: 1,
    name: "Econ",
    desc: "A web application for users to see their energy consumtion and cost on house hold items ",
    date: "May 2020 - June 2020",
    img: "/encon.png",
    url: "https://github.com/BloomTech-Labs/Encon-fe",
    stack: ["JavaScript", "React", "SCSS", "Context", "React Hook Form"],
  },
  {
    id: 2,
    name: "This Portfolio",
    date: "September 2023 - Current",
    img: "/portfolio.png",
    desc: "Curious to see how I built this? Check it out on GitHub.",
    url: "https://github.com/AlexandroM1234/PortfolioV2",
    stack: ["JavaScript", "React", "Chakra UI", "Framer Motion"],
  },
];

export const JobExperience = [
  {
    id: 1,
    employer: "JP Morgan Chase & Co.",
    role: "Software Engineer",
    date: "October 2022 - July 2023",
    location: "Remote",
    desc: "Worked on a cross-functional team to develop a web application for over 40,000 managers in the company to use.",
    logo: "/chase.png",
    stack: ["JavaScript", "SCSS", "React", "Redux", "Ag-Grid"],
  },
  {
    id: 2,
    employer: "GoSchoolBox",
    role: "Software Engineering Fellow",
    date: "March 2022 - April 2022",
    location: "Remote",
    desc: "Created a feature for file uploading for parents, teachers, and students to use in their tutoring sessions.",
    logo: "/GoSchoolBox.png",
    stack: ["JavaScript", "TypeScript", "SCSS", "Redux", "GraphQL", "MongoDB"],
  },
];
