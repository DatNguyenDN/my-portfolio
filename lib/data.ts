import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Da Nang",
    description:
      "After completing my studies in Accounting in Australia, I returned home and devoted six months to studying frontend development. Shortly thereafter, I secured a position as an intern frontend developer at GameTamin",
    icon: React.createElement(LuGraduationCap),
    date: "03-09/2023",
  },
  {
    title: "Intern Front-End Developer",
    location: "Da Nang",
    description:
      "After three months as an intern at GameTamin, I had the opportunity to collaborated on several projects where I honed skills in writing clean code and maintainable code. I also gained experience working with backend servers, improving my understanding of database operations.",
    icon: React.createElement(CgWorkAlt),
    date: "09-12/2023",
  },
  {
    title: "Fresher Front-End Developer",
    location: "Da Nang",
    description:
      "I'm now a fresher front-end developer. My stack includes React.js, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "01/2024 - present",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  // "Apollo",
  // "Express",
  "PostgreSQL",
  // "Python",
  // "Django",
  "Framer Motion",
] as const;
