import React from "react";
import {
  SiHtml5,
  SiTailwindcss,
  SiJavascript,
  SiReact,
  SiCss3,
  SiPython,
  SiDjango,
  SiPostgresql,
  SiSequelize,
  SiExpress,
  SiAmazonaws,
  SiRedux,
} from "react-icons/si";

const About = () => {
  const techs = [
    {
      name: "JavaScript",
      logo: <SiJavascript className="fill-yellow-400" size={30} />,
    },
    { name: "Python", logo: <SiPython className="fill-blue-400" size={30} /> },
    { name: "React", logo: <SiReact className="fill-blue-500" size={30} /> },
    {
      name: "Express",
      logo: <SiExpress className="fill-gray-300" size={30} />,
    },
    { name: "Django", logo: <SiDjango className="fill-green-800" size={30} /> },
    {
      name: "TailwindCSS",
      logo: <SiTailwindcss className="fill-blue-300" size={30} />,
    },
    {
      name: "AWS",
      logo: <SiAmazonaws className="fill-orange-400" size={30} />,
    },
    { name: "Redux", logo: <SiRedux className="fill-purple-500" size={30} /> },
    {
      name: "PostgreSQL",
      logo: <SiPostgresql className="fill-blue-500" size={30} />,
    },
    { name: "HTML", logo: <SiHtml5 className="fill-orange-400" size={30} /> },
    { name: "CSS", logo: <SiCss3 className="fill-yellow-300" size={30} /> },
    {
      name: "Sequelize",
      logo: <SiSequelize className="fill-blue-500" size={30} />,
    },
  ];
  return (
    <div
      name="about"
      className="w-screen h-full bg-gradient-to-b from-teal-950 to-gray-900 text-white px-[1rem] lg:px-[6rem] py-[6rem] space-y-[4rem] z-0"
    >
      <p className="text-4xl font-bold inline border-b-4 border-gray-500">
        About
      </p>
      <div className="space-y-3">
        <div className="flex items-center space-x-3">
          <p className="font-bold text-xl">Hi there, I'm Erik!</p>
        </div>
        <p className="text-md">
          I'm a full-stack developer who was born and raised in San Jose and
          with a Bachelors degree from San Jose State University.
        </p>
      </div>
      <div className="space-y-3">
        <p className="font-bold text-xl">How did I get into programming?</p>
        <p className="text-md">
          I've been programming for over two years and taught myself by going
          through several YouTube tutorials, the Nucamp cirriculum, and the Full
          Stack Academy full-time bootcamp. Since writing my first line of code,
          I've been passionate about the power of programming and how much
          potential it holds for creating world changing software and
          technology.
        </p>
        <p className="text-md">
          I was recently employed by a small startup called Carrion Technologies
          LLC where I worked on the iRent website for a client of ours. After
          completing the website, I've aimed to improve on my skills by building
          Dashed Eats which helped me practice and learn TailwindCSS and Django.
          I'm now looking to build a strong foundation for the fundamentals of
          frontend development while also specializing in more backend
          technologies. To achieve this I'm developing a Trello clone website
          with a vanilla Javascript frontend and a Golang backend.
        </p>
      </div>
      <div className="space-y-6">
        <p className="font-bold text-xl">
          Some of the tech I love working with
        </p>
        <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-8 lg:grid-cols-12 gap-y-5 grid-flow-row">
          {techs.map(({ name, logo }) => (
            <div className="flex flex-col items-center justify-center space-y-3 w-full">
              <div>{logo}</div>
              <div className="h-fit py-1 w-fit text-center flex items-center justify-center px-2 text-sm rounded-lg bg-black font-semibold">
                {name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
