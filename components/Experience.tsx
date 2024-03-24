"use client";
import SectionHeading from "@/components/SectionHeading";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hook";
import React from "react";
import { GrLocationPin } from "react-icons/gr";
import { CiLocationOn } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";

import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export default function Experience() {
  const { ref } = useSectionInView("Experience");

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>My Experience</SectionHeading>
      <VerticalTimeline lineColor="" animate={true}>
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              visible={true}
              contentStyle={{
                background: "hsl(var(--border))",
                boxShadow: "none",
                border: "1px solid rgba(0,0,0,0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight: "0.4rem solid #9ca3af",
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background: "hsl(var(--card)",
                fontSize: "1.5rem",
              }}
            >
              <div className="flex flex-col gap-2">
                <h3 className="font-semibold capitalize"> {item.title}</h3>
                <p className="font-normal !mt-0 flex gap-1">
                  <FaLocationDot size="20px" />
                  {item.location}
                </p>
                <p className="!mt-1 !font-normal ">{item.description}</p>
              </div>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
