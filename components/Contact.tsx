"use client";
import { sendEmail } from "@/actions/sendEmail";
import SectionHeading from "@/components/SectionHeading";
import SubmitBtn from "@/components/ui/SubmitBtn";
import { useSectionInView } from "@/lib/hook";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center pb-10"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact Me</SectionHeading>
      <p className="-mt-5">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:ncdat@gmail.com">
          ncdat@gmail.com
        </a>{" "}
        or through this form
      </p>

      <form
        action={async (FormData) => {
          const { data, error } = await sendEmail(FormData);
          if (error) {
            toast.error(error);
            return;
          }
          toast.success("Email sent successfully");
        }}
        className="mt-10 flex flex-col"
      >
        <input
          type="email"
          name="senderEmail"
          placeholder="Your email"
          required
          maxLength={500}
          className="h-14 rounded-lg px-4 border border-accent-foreground bg-input outline-none"
        />
        <textarea
          placeholder="Your message"
          name="message"
          required
          maxLength={5000}
          className="h-52 my-3 p-4 rounded-lg border border-accent-foreground bg-input outline-none"
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
