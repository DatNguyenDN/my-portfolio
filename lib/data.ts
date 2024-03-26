import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import priceTracker from "@/public/priceTracker.png";
import bloomyu from "@/public/bloomyu.png";
import fourseasons from "@/public/fourseasons.png";
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
    title: "Price Tracker Website",
    url: "https://pricetrackerweb-devtest.azurewebsites.net/",
    description:
      " Users can track product prices from the Nintendo eShop (https://store.nintendo.com.au/au/nintendo-eshop) and will receive an email alert as soon as the price drops.",
    tags: ["JavaScript", "React", "Redux", "Tailwind", "Axios Interceptor", "Framer-Motion"],
    imageUrl: priceTracker,
  },
  {
    title: "Bloomyu",
    url: "https://bloomyu.com",
    description:
      "This website caters to IT job seekers by providing a recruitment platform where they can search for jobs, apply filters to refine their search results, and submit their CVs directly to companies posting job openings.",
    tags: [
      "TypeScript",
      "Next.js",

      "Antd Design",
      "Redux",
      "Axios Interceptor",
      "Framer-Motion",
      "React-Quill",
    ],
    imageUrl: bloomyu,
  },
  {
    title: "Four Seasons Hotel",
    url: "https://four-seasons-hotel.netlify.app/",
    description:
      "Offers a user-friendly admin dashboard tailored for efficient hotel room and booking management, with added functionality to track sales through insightful charts <email:admin@gmail.com> <password:admin123>",
    tags: ["Vite", "Styled Component", "Supabase", "React Query", "Recharts"],
    imageUrl: fourseasons,
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
