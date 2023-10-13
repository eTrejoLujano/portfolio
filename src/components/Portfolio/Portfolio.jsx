import React from "react";
import Description from "./Description";
import oregano from "../../assets/projects/oregano.png";
import irent from "../../assets/projects/irent.png";
import workflo from "../../assets/projects/workflo.png";
import DashedEats from "../../assets/logos/dashedeats.png";
import iRent from "../../assets/logos/irent.png";
import WorkFlo from "../../assets/logos/workflo.jpg";
import Oregano from "../../assets/logos/oregano.png";

const Portfolio = () => {
  const portfolios = [
    { id: 1, src: irent },
    { id: 2, src: oregano },
    { id: 3, src: workflo },
  ];
  const projects = [
    {
      name: "Dashed Eats",
      techStack: [
        "Javascript",
        "Python",
        "React",
        "Django",
        "TailwindCSS",
        "HTML",
        "CSS",
        "PostgreSQL",
      ],
      logo: (
        <img
          src={DashedEats}
          className="w-[30rem] rounded-full bg-white aspect-square"
        />
      ),
      description: [
        "Dashed Eats is a food delivery web application built with Javascript and Python.",
        "It gives users the power to conveniently order groceries and meals from any location via the Google Maps API.",
        "Users also have the ability to pick up their orders and keep track of their past purchases and receipts.",
      ],
      links: [
        { name: "Read Me", exist: true },
        {
          name: "Code",
          exist: "https://github.com/eTrejoLujano/dashed-eats-react",
        },
        { name: "Live", exist: "https://dashedeats.com/" },
      ],
      readme: [
        "../../assets/projects/DashedEats/Page1.png",
        "../../assets/projects/DashedEats/Page2.png",
        "../../assets/projects/DashedEats/Page3.png",
        "../../assets/projects/DashedEats/Page4.png",
        "../../assets/projects/DashedEats/Page5.png",
        "../../assets/projects/DashedEats/Page6.png",
      ],
    },
    {
      name: "iRent",
      techStack: [
        "Javascript",
        "React",
        "Express",
        "Sequelize",
        "MySQL",
        "HTML",
      ],
      logo: (
        <img
          src={iRent}
          className="w-[30rem] rounded-full bg-white aspect-square"
        />
      ),
      description: [
        "iRent is a company with a long record of excellent customer satisfaction through its innovative property management software.",
        "I developed and tailored the reports section of the website with each report having its own unqiue requirements to fetch and display its data.",
        "iRent includes tenant screening, full accounting, reporting, and online tenant payment capabilities.",
      ],
      links: [
        { name: "Read Me", exist: true },
        {
          name: "Code",
          exist: false,
        },
        { name: "Live", exist: "https://myirent.netlify.app/" },
      ],
      readme: [
        "../../assets/projects/DashedEats/Page1.png",
        "../../assets/projects/DashedEats/Page2.png",
        "../../assets/projects/DashedEats/Page3.png",
        "../../assets/projects/DashedEats/Page4.png",
        "../../assets/projects/DashedEats/Page5.png",
        "../../assets/projects/DashedEats/Page6.png",
      ],
    },
    {
      name: "WorkFlo",
      techStack: [
        "Javascript",
        "React",
        "Express",
        "Sequelize",
        "PostgreSQL",
        "Mui",
        "HTML",
        "CSS",
      ],
      logo: (
        <img
          src={WorkFlo}
          className="w-[30rem] rounded-full bg-white aspect-square"
        />
      ),
      description: [
        "WorkFlo is a project management web application built by a team of developers by using with Javascript and Node.",
        "WorkFlo makes the development process easier by playing the role acting as a tool to optimize and e It gives users the power to conveniently order groceries and meals from any location.",
        "Users can also choose to pick up their order and keep track of their past orders and receipts.",
      ],
      links: [
        { name: "Read Me", exist: true },
        {
          name: "Code",
          exist: "https://github.com/eTrejoLujano/WorkFlo",
        },
        { name: "Live", exist: "https://workfloproduction.onrender.com/" },
      ],
      readme: [
        "../../assets/projects/WorkFlo/Page1.png",
        "../../assets/projects/WorkFlo/Page2.png",
        "../../assets/projects/WorkFlo/Page3.png",
        "../../assets/projects/WorkFlo/Page4.png",
        "../../assets/projects/WorkFlo/Page5.png",
      ],
    },
    {
      name: "Oregano",
      techStack: [
        "Javascript",
        "React",
        "Express",
        "Sequelize",
        "PostgreSQL",
        "HTML",
        "CSS",
      ],
      logo: (
        <img
          src={Oregano}
          className="w-[30rem] rounded-full bg-white aspect-square"
        />
      ),
      description: [
        "Dashed Eats is a food delivery web application built with Javascript and Python.",
        "It gives users the power to conveniently order groceries and meals from any location.",
        "Users can also choose to pick up their order and keep track of their past orders and receipts.",
      ],
      links: [
        { name: "Read Me", exist: true },
        {
          name: "Code",
          exist: "https://github.com/eTrejoLujano/Oregano",
        },
        { name: "Live", exist: "https://workfloproduction.onrender.com/" },
      ],
      readme: [
        "../../assets/projects/Oregano/Page1.png",
        "../../assets/projects/Oregano/Page2.png",
        "../../assets/projects/Oregano/Page3.png",
        "../../assets/projects/Oregano/Page4.png",
        "../../assets/projects/Oregano/Page5.png",
        "../../assets/projects/Oregano/Page6.png",
      ],
    },
  ];
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b to-teal-950 from-gray-900 w-screen h-full text-white px-[1rem] lg:px-[6rem] py-[6rem] space-y-[5rem] z-0"
    >
      <div className="">
        <p className="text-4xl font-bold inline border-b-4 border-gray-500">
          Projects
        </p>
      </div>
      <div className="flex flex-col items-center w-full h-full space-y-[10rem] relative">
        {projects.map(
          ({ name, techStack, links, description, readme, logo }, index) => (
            <div
              className={`w-screen h-full flex items-center px-[1rem] ${
                index % 2 === 0 ? "flex-col-reverse" : "flex-col"
              } lg:flex-row lg:justify-between lg:px-[6rem]`}
              key={index}
            >
              {index % 2 !== 0 && (
                <div className="w-full lg:w-5/12 px-2 h-full flex justify-center items-center">
                  {logo}
                </div>
              )}
              <Description
                name={name}
                techStack={techStack}
                links={links}
                description={description}
                readme={readme}
              />
              {index % 2 === 0 && (
                <div className="w-full lg:w-5/12 h-full flex justify-center items-center">
                  {logo}
                </div>
              )}
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Portfolio;
