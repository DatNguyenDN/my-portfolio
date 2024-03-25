"use client";

import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useSectionInView } from "@/lib/hook";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaArrowCircleRight } from "react-icons/fa";
import { MdDownloadForOffline } from "react-icons/md";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="/personal2.jpg"
              alt="personal"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-24 w-24 rounded-full object-cover shadow-xl border-[0.35rem] border-white "
            />
          </motion.div>
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
            className="absolute text-4xl bottom-0 right-0"
          >
            {/* <MdWavingHand fill="yellow" /> */}
          </motion.span>
        </div>
      </div>
      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-3xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Dat Nguyen.</span> I'm a{" "}
        <span className="font-bold">fresher Frontend Developer</span> with
        <span className="font-bold"> one year</span> of professional experience in building
        responsive and user-friendly web applications. I enjoy building{" "}
        <span className="">websites and applications</span> using popular frameworks such as{" "}
        <span className="underline">React.js and Next.js</span>
      </motion.h1>
      <motion.div
        className="flex flex-col sm:flex-row  items-center justify-center gap-5 px-4 "
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className=" "
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          <Button
            size="lg"
            className="bg-primary  flex items-center  outline-none  px-7 py-3 rounded-full gap-2 focus:scale-110 hover:scale-110 active:scale-105 transition hover:border-2 group"
          >
            Contact me here <FaArrowCircleRight className=" group-hover:translate-x-1  " />
          </Button>
        </Link>

        <Button
          size="lg"
          className="px-7 py-3 rounded-full gap-2 focus:scale-110 hover:scale-110 active:scale-105 transition hover:border-2  group"
        >
          Download CV <MdDownloadForOffline className="group-hover:translate-y-1  " />
        </Button>

        <a className="px-7 py-3 rounded-full gap-2 bg-primary text-background cursor-pointer focus:scale-110 hover:scale-110 active:scale-105 hover:border-2 hover:border-green-500 ">
          <BsLinkedin />
        </a>

        <a
          className="px-7 py-3 rounded-full items-center gap-2 bg-primary text-background cursor-pointer focus:scale-110 hover:scale-110 active:scale-105 hover:border-2 hover:border-green-500 "
          href="https://github.com/DatNguyenDN"
          target="_blank"
        >
          <BsGithub />
        </a>
      </motion.div>
    </section>
  );
}
