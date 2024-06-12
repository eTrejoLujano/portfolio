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
      name: "Tailwind CSS",
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
          I was born, raised, and attended University in San Jose. I’m currently
          doing freelance work for small businesses by developing their website
          and helping them gain an online presence. I’m consistently learning
          new technologies and applying them to current projects. At the moment,
          I am learning and using GO to develop an interpreter and afterwards, a
          compiler. I’m also working on a product that helps consumers manage
          and keep track of their finances by utilizing different visual tools
          such as graphs and charts. I have a love and genuine interest in
          engineering. Being from the Bay Area, I’ve worked with people from all
          different backgrounds and cultures which has made me someone who can
          effortlessly collaborate with others and coordinate effectively to
          meet weekly deadlines. I’m easy to talk to and I feel that there’s
          always something new you can learn from everyone.
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
          technologies. The fact I’m able to develop any idea that comes to mind
          through a keyboard is what attracts me to this industry the most!
        </p>
        <p className="text-md">
          I was recently employed by a small startup called Carrion Technologies
          LLC where I worked on iRent, a property management software, for a
          client. After innovating the software, I've been working on my skills
          by building Dashed Eats which helped me practice and learn Tailwind
          CSS and Django.
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
