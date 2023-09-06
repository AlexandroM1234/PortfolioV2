import { AiOutlineHtml5 } from "react-icons/ai";
import { DiCss3, DiReact, DiNodejs } from "react-icons/di";
import { SiJavascript, SiExpress, SiPostgresql } from "react-icons/si";

export const ABOUT_ME_HEADER = "About Me";
export const ABOUT_ME =
  "I am a Full-Stack Engineer with a focus on the frontend based out ofVirginia. Outside of sitting in my room and coding I like to workout, play video games and listen to music.";
export const WELCOME = "Hi, I'm Alex";
export const TITLE = "I'm a Full-Stack Software Engineer";
export const COPYRIGHT = "Alexandro Martinez @2023";
export const ABOUT = "About";
export const EXPERIENCE = "Experience";
export const PROJECTS = "Projects";
export const SKILLS = "Skills";
export const Skills = [
  {
    name: "HTML",
    icon: AiOutlineHtml5,
  },
  {
    name: "CSS",
    icon: DiCss3,
  },

  {
    name: "JavaScript",
    icon: SiJavascript,
  },

  {
    name: "React",
    icon: DiReact,
  },

  {
    name: "Node.js",
    icon: DiNodejs,
  },

  {
    name: "Express",
    icon: SiExpress,
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
  },
];

export const ProjectDetails = [
  {
    name: "Econ",
    desc: "A web application for users to see their ",
    date: "May 2020 - June 2020",
    img: "",
    url: "",
    stack: ["JavaScript", "React, SCSS", "Context", "React Hook Form"],
  },
  {
    name: "This Portfolio",
    date: "September 2023 - Current",
    img: "",
    desc: "Curious to see how I built this click here",
    url: "",
    stack: ["JavaScript", "React", "Chakra UI", "Framer Motion"],
  },
];

export const JobExperience = [
  {
    employer: "JP Morgan Chase & Co.",
    role: "Software Engineer",
    date: "October 2022 - July 2023",
    location: "Remote",
    desc: "Worked on a cross-functional team to develop a web application for over 40,000 managers in the company to use.",
    logo: "/Chase.png",
    stack: ["JavaScript", "SCSS", "React", "Redux", "Ag-Grid"],
  },
  {
    employer: "GoSchoolBox",
    role: "Software Engineering Fellow",
    date: "March 2022 - April 2022",
    location: "Remote",
    desc: "Created a feature for file uploading for parents, teachers, and students to use in their tutoring sessions.",
    logo: "/GoSchoolBox.png",
    stack: ["JavaScript", "TypeScript", "SCSS", "Redux", "GraphQL", "MongoDB"],
  },
];
