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
import yahoo from "@/public/yahoo.png";
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
      "After completing my studies in Accounting in Australia, I returned home and devoted six months to studying frontend development. Shortly thereafter, I secured a position as an intern frontend developer at GameTamin LTD (35 Le Dinh Tham)",
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
      "I'm now a fresher front-end developer. My stack includes React.js, Next.js, Tailwind, MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "01/2024 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Price Tracker Website",
    url: "https://pricetrackerweb-devtest.azurewebsites.net",
    description:
      " Users can track product prices from the Nintendo eShop (https://store.nintendo.com.au/au/nintendo-eshop) and will receive an email alert as soon as the price drops.",
    tags: ["Reactjs", "Redux", "Tailwind", "daisyUI", "Framer-Motion"],
    imageUrl: priceTracker,
  },
  {
    title: "Bloomyu",
    url: "https://bloomyu.com",
    description:
      "This website caters to IT job seekers by providing a recruitment platform where they can search for jobs, apply filters to refine their search results, and submit their CVs directly to companies posting job openings.",
    tags: ["TypeScript", "Nextjs", "Antd Design", "Redux", "Axios Interceptor", "React-Quill"],
    imageUrl: bloomyu,
  },
  // {
  //   title: "Four Seasons Hotel",
  //   url: "https://four-seasons-hotel.netlify.app",
  //   description:
  //     "Offers a user-friendly admin dashboard tailored for efficient hotel room and booking management, with added functionality to track sales through insightful charts <email:admin@gmail.com> <password:admin123>",
  //   tags: ["Vite", "Supabase", "React Query", "Recharts"],
  //   imageUrl: fourseasons,
  // },
  {
    title: "Yahoo Messenger",
    url: "https://yahoo-chat.onrender.com",
    description:
      "A fully responsive website application allow user to create account, send and receiver messengers to another user in real time",
    tags: ["Vite", "Tailwind", "Socket.io", "MongoDB", "Mongoose", "Zustand"],
    imageUrl: yahoo,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "Basic TypeScript",
  "Responsive Design",
  "React",
  "RESTful APIs",
  "Git",
  "Tailwind",
  "MongoDB",
  "Problem-solving",
  "Communication and Collaboration",
  "Continuous Learning",
  // "Nextjs",
  // "Node.js",
  // "Prisma",
  // "GraphQL",
  // "Apollo",
  // "Express",
  // "PostgreSQL",
  // "Python",
  // "Django",
] as const;
