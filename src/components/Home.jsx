import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import picture from "../assets/logos/profilepicture.jpeg";

function Home() {
  return (
    <div
      name="home"
      className="h-screen w-full pt-[2rem] lg:pt-0 bg-gradient-to-b to-teal-950 from-gray-900 text-white py-[4rem]"
    >
      <div className="w-full px-[2rem] relative top-[2rem] lg:top-0 lg:px-[6rem] flex flex-col items-center h-full justify-center lg:justify-between lg:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-6xl font-bold text-white">
            I'm a full-stack developer who uses code to create and innovate cool
            projects and ideas
          </h2>
          <p className="text-gray-500 py-4 max-w-md"></p>
          <div className="flex space-x-[1rem]">
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-teal-500 cursor-pointer hover:bg-white hover:text-teal-500 transition delay-75"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
            <a
              download={true}
              href="/ErikTrejo_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-teal-500 cursor-pointer hover:bg-white hover:text-teal-500 transition delay-75"
            >
              Download Resume
            </a>
          </div>
        </div>
        <div className="h-full flex items-center justify-center">
          <img
            src={picture}
            alt="my profile"
            className="rounded-full w-full sm:w-[25rem] lg:w-[70rem] aspect-square"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
