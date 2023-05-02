import React, { useRef } from "react";
import LiIcon from "./LiIcon";
import { useScroll, motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between"
    >
      <LiIcon reference={ref} />
      <motion.div
        intial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-gray-500 capitalize"
            rel="noreferrer"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-gray-400">
          {time} | {address}
        </span>
        <p className="font-medium w-full">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-black to-gray-800 w-full h-full"
    >
      <div
        className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white"
        data-aos="fade-up"
        data-aos-offset="100"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
      >
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6"></p>
        </div>
        <p className="py-6"></p>
        <div ref={ref} className="w-[75%] mx-auto relative">
          <motion.div
            style={{ scaleY: scrollYProgress }}
            className="absolute left-9 top-0 w-[4px] h-full bg-white origin-top"
          />
          <ul className="w-full flex flex-col items-start justify-between ml-4">
            <Details
              position="Software Developer"
              company="Carrion Technologies"
              time="February 2023 - Present"
              companyLink="https://www.linkedin.com/company/carrion-technologies-llc/"
              address="Remote"
              work=" Implemented the necessary features for the deployment of version 2.0 of the iRent website by developing 10 React components a day by setting hourly deadlines and daily goals. Advanced the existing backend infrastructure by shortening the lines of code by 66% for each API route by focusing on developing efficient code in both time and space complexity"
            />
            <Details
              position="Web Development Student"
              company="Fullstack Academy"
              time="August 2022 - December 2022"
              companyLink="https://www.fullstackacademy.com/"
              address="Remote"
              work="Exceeded expectations for data production in every workflow by more than double the expected performance rate through self-reflection and fast-pace style of work. Improved the performance of the autopilot AI by an efficiency rate of 100% by providing constructive feedback to the computer vision engineers on data production and quality for tooling and processes"
            />
            <Details
              position="Data Annotation Specialist | Quality Assurance"
              company="Tesla Inc."
              time="December 2020 - June 2022"
              companyLink="https://www.tesla.com/"
              address="San Mateo, CA"
              work="Exceeded expectations for data production in every workflow by more than double the expected performance rate through self-reflection and fast-pace style of work. Improved the performance of the autopilot AI by an efficiency rate of 100% by providing constructive feedback to the computer vision engineers on data production and quality for tooling and processes"
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;
