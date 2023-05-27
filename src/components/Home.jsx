import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

function Home() {
  //  Description - A call to action. github readme - screenshots, say
  //             what it does, video (demo?). For home page: See my work - portfolio,
  //             connect with me - contact.
  return (
    <div name="home" className="h-screen w-full bg-gray-900 text-white">
      <div
        className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row"
        data-aos="fade-up"
        data-aos-offset="100"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
      >
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Full Stack Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md"></p>
          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-teal-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <h1 alt="my profile" className="rounded-2xl mx-auto w-2/3 md:w-full">
            profile image
          </h1>
        </div>
      </div>
      {/* {MdOutlineKeyboardArrowRight} */}
    </div>
  );
}

export default Home;
