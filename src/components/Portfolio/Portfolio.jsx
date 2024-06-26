import React from "react";
import Description from "./Description";
import BrothersPainting from "../../assets/logos/brotherspainting.jpg";
import DashedEats from "../../assets/logos/dashedeats.png";
import iRent from "../../assets/logos/irent.png";
import WorkFlo from "../../assets/logos/workflo.jpg";
import Oregano from "../../assets/logos/oregano.png";
import BR1 from "../../assets/projects/BrothersPainting/HomePage.png";
import BR2 from "../../assets/projects/BrothersPainting/Page0.png";
import BR3 from "../../assets/projects/BrothersPainting/Page1.png";
import BR4 from "../../assets/projects/BrothersPainting/Page2.png";
import DE1 from "../../assets/projects/DashedEats/Page1.png";
import DE2 from "../../assets/projects/DashedEats/Page2.png";
import DE3 from "../../assets/projects/DashedEats/Page3.png";
import DE4 from "../../assets/projects/DashedEats/Page4.png";
import DE5 from "../../assets/projects/DashedEats/Page5.png";
import DE6 from "../../assets/projects/DashedEats/Page6.png";
import WF1 from "../../assets/projects/WorkFlo/Page1.png";
import WF2 from "../../assets/projects/WorkFlo/Page2.png";
import WF3 from "../../assets/projects/WorkFlo/Page3.png";
import WF4 from "../../assets/projects/WorkFlo/Page4.png";
import WF5 from "../../assets/projects/WorkFlo/Page5.png";
import O1 from "../../assets/projects/Oregano/Page1.png";
import O2 from "../../assets/projects/Oregano/Page2.png";
import O3 from "../../assets/projects/Oregano/Page3.png";
import O4 from "../../assets/projects/Oregano/Page4.png";
import O5 from "../../assets/projects/Oregano/Page5.png";
import O6 from "../../assets/projects/Oregano/Page6.png";
import iRH from "../../assets/projects/iRent/Homepage.png";
import iR0 from "../../assets/projects/iRent/Page0.png";
import iR1 from "../../assets/projects/iRent/Page1.jpeg";
import iR2 from "../../assets/projects/iRent/Page2.png";
import iR3 from "../../assets/projects/iRent/Page3.png";
import iR4 from "../../assets/projects/iRent/Page4.png";
import iR5 from "../../assets/projects/iRent/Page5.png";
import iR6 from "../../assets/projects/iRent/Page6.jpeg";
import iR7 from "../../assets/projects/iRent/Page7.jpeg";
import iR8 from "../../assets/projects/iRent/Page8.jpeg";
import iR9 from "../../assets/projects/iRent/Page9.jpeg";
import iR10 from "../../assets/projects/iRent/Page10.jpeg";
import iR11 from "../../assets/projects/iRent/Page11.jpeg";
import iR12 from "../../assets/projects/iRent/Page12.jpeg";
import iR13 from "../../assets/projects/iRent/Page13.jpeg";
import iR14 from "../../assets/projects/iRent/Page14.jpeg";
import iR15 from "../../assets/projects/iRent/Page15.png";
import iR16 from "../../assets/projects/iRent/Page16.png";
import iR17 from "../../assets/projects/iRent/Page17.png";
import iR18 from "../../assets/projects/iRent/Page18.png";
import iR19 from "../../assets/projects/iRent/Page19.png";
import iR20 from "../../assets/projects/iRent/Page20.png";
import iR21 from "../../assets/projects/iRent/Page21.png";
import iR22 from "../../assets/projects/iRent/Page22.jpeg";
import iR23 from "../../assets/projects/iRent/Page23.jpeg";

const Portfolio = ({ modalInfo, openModal, closeModal }) => {
  const projects = [
    {
      name: "The Brothers Painting",
      techStack: ["Javascript", "React", "Tailwind CSS", "HTML", "CSS"],
      logo: (
        <img
          alt=""
          src={BrothersPainting}
          className="w-[30rem] rounded-full bg-white aspect-square"
        />
      ),
      description: [
        "The Brothers Painting is a website that was developed using Javascript, React, and Tailwind CSS.",
        "It gives customers the ability to request estimates for different services and get in contact with the owner.",
        "Customers can see the company's past work, visit their social media, and view the reviews left by other customers.",
      ],
      links: [
        { name: "Read Me", exist: true },
        { name: "Live", exist: "https://thebrotherspainting.netlify.app/" },
      ],
      readMe: [BR1, BR2, BR3, BR4],
      readMeDescription:
        "A small business that specializes in commercial and residential painting services.",
    },
    {
      name: "Dashed Eats",
      techStack: [
        "Javascript",
        "Python",
        "React",
        "Django",
        "Tailwind CSS",
        "Redux",
        "HTML",
        "CSS",
        "PostgreSQL",
        "AWS",
      ],
      logo: (
        <img
          alt=""
          src={DashedEats}
          className="w-[30rem] rounded-full bg-white aspect-square"
        />
      ),
      description: [
        "Dashed Eats is a food delivery web application built with Javascript and Python.",
        "It gives users the power to conveniently order groceries and meals from any location via the Google Maps API.",
        "Users also have the ability to pick up their orders and keep track of their past purchases and receipts.",
        "Dashed Eats is strictly a personal project and does not place real orders.",
      ],
      links: [
        { name: "Read Me", exist: true },
        {
          name: "Code",
          exist: "https://github.com/eTrejoLujano/dashed-eats-react",
        },
        { name: "Live", exist: "https://dashedeats.com/" },
      ],
      readMe: [DE1, DE2, DE3, DE4, DE5, DE6],
      readMeDescription:
        "A full stack application that provides delivery services for meals and groceries.",
    },
    {
      name: "iRent",
      techStack: [
        "Javascript",
        "React",
        "Express",
        "Redux",
        "Sequelize",
        "MySQL",
        "Mui",
        "HTML",
        "CSS",
      ],
      logo: (
        <img
          alt=""
          src={iRent}
          className="w-[30rem] rounded-full bg-white aspect-square"
        />
      ),
      description: [
        "iRent is a company with a reputation for excellent customer service and satisfaction through its innovative property management software.",
        "By using data automation, the iRent website gives the user analytics involving tenant aquisition, management, and billing.",
        "iRent also equips the user with the ability to manage and receive information on tenant screening, full accounting, reporting, and online tenant payment capabilities.",
      ],
      links: [
        { name: "Read Me", exist: true },
        {
          name: "Code",
          exist: false,
        },
        { name: "Live", exist: "https://myirent.netlify.app/" },
      ],
      readMe: [
        iRH,
        iR0,
        iR1,
        iR2,
        iR3,
        iR4,
        iR5,
        iR6,
        iR7,
        iR8,
        iR9,
        iR10,
        iR11,
        iR12,
        iR13,
        iR14,
        iR15,
        iR16,
        iR17,
        iR18,
        iR19,
        iR20,
        iR21,
        iR22,
        iR23,
      ],
      readMeDescription:
        "A fully featured Property Management Software that allows you to maximize revenue through automation.",
    },
    {
      name: "WorkFlo",
      techStack: [
        "Javascript",
        "React",
        "Express",
        "Redux",
        "Sequelize",
        "PostgreSQL",
        "Mui",
        "HTML",
        "CSS",
      ],
      logo: (
        <img
          alt=""
          src={WorkFlo}
          className="w-[30rem] rounded-full bg-white aspect-square"
        />
      ),
      description: [
        "WorkFlo is a project management web application built by a team of developers using Javascript and Node.",
        "WorkFlo makes the project development process easier by offering a tool that creates a timeline of goals and objectives.",
        "Users have the ability to depict a direction for their project by utilizing the virtual collaborative whiteboard tool, Excalidraw, in the projects sidebar menu.",
      ],
      links: [
        { name: "Read Me", exist: true },
        {
          name: "Code",
          exist: "https://github.com/eTrejoLujano/WorkFlo",
        },
        // { name: "Live", exist: "https://workfloproduction.onrender.com/" },
      ],
      readMe: [WF1, WF2, WF3, WF4, WF5],
      readMeDescription:
        "A work management web application where teams can collaborate on projects, organize workflows, and track progress in a visual and productive way.",
    },
    {
      name: "Oregano",
      techStack: [
        "Javascript",
        "React",
        "Express",
        "Redux",
        "Sequelize",
        "PostgreSQL",
        "HTML",
        "CSS",
      ],
      logo: (
        <img
          alt=""
          src={Oregano}
          className="w-[30rem] rounded-full bg-white aspect-square"
        />
      ),
      description: [
        "Oregano is an E-commerce website built by a team of developers using Javascript and Node.",
        "Oregano promotes fashionable and organic clothing to keep customers looking stylish, sustainably.",
        "The website is strictly a group project for the Full Stack Academy bootcamp, not meant to take real orders.",
      ],
      links: [
        { name: "Read Me", exist: true },
        {
          name: "Code",
          exist: "https://github.com/eTrejoLujano/Oregano",
        },
        // { name: "Live", exist: "https://oreganoproduction.onrender.com/" },
      ],
      readMe: [O1, O2, O3, O4, O5, O6],
      readMeDescription:
        "A website that promotes stylish clothing and environmental awareness for a healthy, better looking future.",
    },
  ];
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b to-teal-950 from-gray-900 w-screen h-full text-white px-[1rem] lg:px-[6rem] py-[6rem] space-y-[4rem] z-0"
    >
      <div className="">
        <p className="text-4xl font-bold inline border-b-4 border-gray-500">
          Projects
        </p>
      </div>
      <div className="flex flex-col items-center w-full h-full space-y-[10rem] relative">
        {projects.map(
          (
            {
              name,
              techStack,
              links,
              description,
              readMe,
              readMeDescription,
              logo,
            },
            index
          ) => (
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
                projectName={name}
                techStack={techStack}
                links={links}
                description={description}
                readMe={readMe}
                readMeDescription={readMeDescription}
                modalInfo={modalInfo}
                openModal={openModal}
                closeModal={closeModal}
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
