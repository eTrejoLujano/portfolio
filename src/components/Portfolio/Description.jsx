import React from "react";
import { ImBook } from "react-icons/im";
import { BsGithub } from "react-icons/bs";
import { FiMonitor } from "react-icons/fi";
import { GrMysql } from "react-icons/gr";
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
  SiMui,
  SiAmazonaws,
  SiRedux,
} from "react-icons/si";

const Description = ({
  projectName,
  techStack,
  description,
  links,
  readMe,
  modalInfo,
  openModal,
  closeModal,
  readMeDescription,
}) => {
  const techs = {
    Javascript: {
      name: "JavaScript",
      logo: <SiJavascript className="fill-yellow-400" size={30} />,
    },
    HTML: {
      name: "HTML",
      logo: <SiHtml5 className="fill-orange-400" size={30} />,
    },
    Python: {
      name: "Python",
      logo: <SiPython className="fill-blue-400" size={30} />,
    },
    Django: {
      name: "Django",
      logo: <SiDjango className="fill-green-800" size={30} />,
    },
    React: {
      name: "React",
      logo: <SiReact className="fill-blue-500" size={30} />,
    },
    TailwindCSS: {
      name: "TailwindCSS",
      logo: <SiTailwindcss className="fill-blue-300" size={30} />,
    },
    PostgreSQL: {
      name: "PostgreSQL",
      logo: <SiPostgresql className="fill-blue-500" size={30} />,
    },
    CSS: {
      name: "CSS",
      logo: <SiCss3 className="fill-yellow-300" size={30} />,
    },
    Sequelize: {
      name: "Sequelize",
      logo: <SiSequelize className="fill-blue-500" size={30} />,
    },
    MySQL: {
      name: "MySQL",
      logo: <GrMysql className="fill-blue-400" size={30} />,
    },
    Express: {
      name: "Express",
      logo: <SiExpress className="fill-gray-300" size={30} />,
    },
    Mui: {
      name: "MaterialUI",
      logo: <SiMui className="fill-blue-600" size={30} />,
    },
    AWS: {
      name: "Amazon Web Services",
      logo: <SiAmazonaws className="fill-orange-400" size={30} />,
    },
    Redux: {
      name: "Redux",
      logo: <SiRedux className="fill-purple-500" size={30} />,
    },
  };
  return (
    <div className="space-y-6 w-full lg:w-7/12">
      <div className="text-2xl font-bold">{projectName}</div>
      <div className="flex space-x-5 text-lg">
        {links.map(({ name, exist }) => {
          if (exist)
            return (
              <a
                className="px-3 w-fit h-[2.6rem] flex items-center justify-center rounded-lg bg-teal-500 hover:bg-white hover:text-teal-500 space-x-1 cursor-pointer"
                rel="noreferrer"
                href={exist}
                target="_blank"
                onClick={() => {
                  if (name === "Read Me") {
                    modalInfo({
                      name: projectName,
                      readMe,
                      readMeDescription,
                    });
                    openModal();
                  }
                }}
              >
                <div>{name}</div>
                {name === "Read Me" && (
                  <div>
                    <ImBook size={22} />
                  </div>
                )}
                {name === "Code" && (
                  <div>
                    <BsGithub size={22} />
                  </div>
                )}
                {name === "Live" && (
                  <div>
                    <FiMonitor size={22} />
                  </div>
                )}
              </a>
            );
        })}
      </div>
      {description.map((bullet) => (
        <div className="text-md">{bullet}</div>
      ))}
      <div className="flex items-center space-x-5 w-full lg:w-full">
        <div className="w-[9rem] truncate text-lg font-bold">Tech Stack</div>
        <div className="w-full h-[.1rem] bg-white"></div>
      </div>
      <div
        className={`grid grid-cols-3 md:grid-cols-8 gap-y-5 gap grid-flow-row`}
      >
        {techStack.map((tech) => (
          <div className="flex flex-col items-center justify-center space-y-3 w-full">
            <div>{techs[tech].logo}</div>
            <div className="h-fit py-1 w-fit flex items-center justify-center px-2 text-sm rounded-lg bg-black font-semibold">
              {tech}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Description;
