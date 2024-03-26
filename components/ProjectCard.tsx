"use client";

import { projectsData } from "@/lib/data";
import { useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { motion } from "framer-motion";
type ProjectProps = (typeof projectsData)[number];

function ProjectCard({ title, description, tags, imageUrl, url }: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"], //bottom of the viewport cross the top of the container
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className=" group mb-4 sm:mb-8 last:mb-0"
    >
      <section className="group bg-border rounded-lg max-w-[45rem] border border-border overflow-hidden sm:pr-8 relative sm:h-[23rem]  group-even:even:pl-8 transition">
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]  ">
          <h3 className="text-2xl font-semibold hover:text-ring cursor-pointer">
            <a href={url} target="_blank" rel="noopener noreferrer">
              {title}
            </a>
          </h3>

          <p className="mt-2 leading-relaxed  text-foreground/65 sm:group-even:w-[350px] sm:group-even:">
            {description}
          </p>

          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="px-3 py-1 text-[0.7rem] uppercase tracking-wider bg-secondary-foreground text-secondary rounded-full "
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <Image
          src={imageUrl}
          alt="Project I worked on"
          quality={95}
          className="absolute hidden sm:block top-8 -right-40 w-[28rem] rounded-t-lg shadow-2xl 
          transition
          group-hover:scale-[1.05]
          group-hover:-translate-x-3
          group-hover:translate-y-3
          group-hover:-rotate-2
  
          group-even:group-hover:translate-x-3
          group-even:group-hover:translate-y-3
          group-even:group-hover:rotate-2
  
          group-even:-right-[initial] 
          group-even:-left-40"
        />
      </section>
    </motion.div>
  );
}

export default ProjectCard;
