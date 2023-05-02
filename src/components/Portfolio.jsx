import React from "react";
import oregano from "../assets/projects/oregano.png";
import irent from "../assets/projects/irent.png";
import workflo from "../assets/projects/workflo.png";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const Portfolio = () => {
  const portfolios = [
    { id: 1, src: irent },
    { id: 2, src: oregano },
    { id: 3, src: workflo },
  ];
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
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
            Portfolio
          </p>
          <p className="py-6">Check Out some of my work right here</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                alt=""
                src={src}
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
