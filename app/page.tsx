import About from "@/components/About";
import Header from "@/components/Header";
import Projects from "@/components/Projects";
import SectionDivider from "@/components/SectionDivider";
import Intro from "@/components/Intro";

import { ModeToggle } from "@/components/mode-toggle";
import Image from "next/image";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4 ">
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}
