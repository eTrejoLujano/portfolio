import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-gray-900 text-white">
      <div
        className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full"
        data-aos="fade-up"
        data-aos-offset="100"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">About Section</p>
        <br />
        <p className="text-xl">Coming Soon!</p>
      </div>
    </div>
  );
};

export default About;
