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
} from "react-icons/si";

const Description = ({
  projectName,
  imgname,
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
    Javascript: { name: "JavaScript", logo: <SiJavascript size={30} /> },
    HTML: { name: "HTML", logo: <SiHtml5 size={30} /> },
    Python: { name: "Python", logo: <SiPython size={30} /> },
    Django: { name: "Django", logo: <SiDjango size={30} /> },
    React: { name: "React", logo: <SiReact size={30} /> },
    TailwindCSS: { name: "TailwindCSS", logo: <SiTailwindcss size={30} /> },
    PostgreSQL: { name: "PostgreSQL", logo: <SiPostgresql size={30} /> },
    CSS: { name: "CSS", logo: <SiCss3 size={30} /> },
    Sequelize: { name: "Sequelize", logo: <SiSequelize size={30} /> },
    MySQL: { name: "MySQL", logo: <GrMysql size={30} /> },
    Express: { name: "Express", logo: <SiExpress size={30} /> },
    Mui: { name: "MaterialUI", logo: <SiMui size={30} /> },
  };
  console.log(
    "name tech kubjs readme",
    projectName,
    techStack,
    links,
    readMe,
    readMeDescription
  );
  return (
    <div className="space-y-6 w-full lg:w-7/12">
      <div className="text-xl font-bold">{projectName}</div>
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
                      imgname,
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
        <div className="text-sm">{bullet}</div>
      ))}
      <div className="flex items-center space-x-5 w-full lg:w-full">
        <div className="w-[8rem] truncate font-bold">Tech Stack</div>
        <div className="w-full h-[.1rem] bg-white"></div>
      </div>
      <div className={`grid grid-cols-3 md:grid-cols-8 gap-3 grid-flow-row`}>
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
