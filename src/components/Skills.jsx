import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import python from "../assets/technologies/python.png";
import javascript from "../assets/technologies/javascript.png";
import css from "../assets/technologies/css.png";
import html from "../assets/technologies/html.png";
import postgresql from "../assets/technologies/postgresql.png";
import react from "../assets/technologies/react.png";
import redux from "../assets/technologies/redux.png";
import express from "../assets/technologies/express.png";
import github from "../assets/technologies/github.png";
import node from "../assets/technologies/node.png";
import tailwind from "../assets/technologies/tailwind.png";
import materialui from "../assets/technologies/materialui.png";

AOS.init();

const Skills = () => {
  const techs = [
    { id: 1, src: javascript, title: "Javascript", style: "shadow-yellow-400" },
    { id: 4, src: html, title: "HTML", style: "shadow-orange-500" },
    { id: 3, src: css, title: "CSS", style: "shadow-blue-500" },
    { id: 2, src: python, title: "Python", style: "shadow-blue-500" },
    { id: 5, src: postgresql, title: "PostgreSQL", style: "shadow-blue-300" },
    { id: 8, src: node, title: "Node", style: "shadow-green-400" },
    { id: 7, src: react, title: "React", style: "shadow-blue-600" },
    { id: 6, src: redux, title: "Redux", style: "shadow-purple-500" },
    { id: 9, src: express, title: "Express", style: "shadow-gray-300" },
    { id: 10, src: github, title: "GitHub", style: "shadow-gray-500" },
    { id: 11, src: tailwind, title: "Tailwind", style: "shadow-sky-400 py-5" },
    { id: 12, src: materialui, title: "Material UI", style: "shadow-blue-600" },
  ];
  return (
    <div
      name="skills"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-full"
    >
      <div
        className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full
         text-white"
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
            Skills
          </p>
          <p className="py-6"></p>
        </div>
        <div
          className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8
        text-center py-8 px-12 sm:px-0"
        >
          {techs.map(({ id, src, title, style }) => (
            <div
              className={
                "shadow-md hover:scale-105 duration-500 py-2 rounded-lg" +
                " " +
                style
              }
            >
              <img alt="" src={src} className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
