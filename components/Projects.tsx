"use client";

import ProjectCard from "@/components/ProjectCard";
import SectionHeading from "@/components/SectionHeading";
import { useActiveSectionContext } from "@/context/active-section-context";
import { projectsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hook";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section id="projects" className="scroll-mt-28 mb-28" ref={ref}>
      <SectionHeading>My Projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <ProjectCard {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
