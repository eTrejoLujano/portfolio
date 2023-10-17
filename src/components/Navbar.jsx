import React, { useState, useRef } from "react";
import { IoHomeOutline } from "react-icons/io5";
import { RxPerson } from "react-icons/rx";
import { Link } from "react-scroll";
import { BsCodeSlash } from "react-icons/bs";
import { GoBrowser, GoComment } from "react-icons/go";

const Navbar = () => {
  const scrollRef = useRef();
  const [nav, setNav] = useState(false);
  const links = [
    { id: 1, link: "home", logo: <IoHomeOutline size={24} /> },
    { id: 2, link: "about", logo: <RxPerson size={24} /> },
    { id: 3, link: "portfolio", logo: <GoBrowser size={24} /> },
    // { id: 4, link: "skills", logo: <BsCodeSlash size={24} /> },
    // { id: 5, link: "experience" },
    { id: 6, link: "contact", logo: <GoComment size={24} /> },
  ];
  return (
    <div className="fixed w-screen z-10">
      <div
        className="flex justify-between items-center w-full h-20 px-4
     text-teal-600 bg-opacity-0 fixed"
      >
        <div>
          <h1 className="text-4xl font-signature">Erik Trejo</h1>
        </div>
      </div>
      <div className="fixed w-full h-20 flex justify-center bottom-2 pb-[1rem] pointer-events-none">
        <div className="flex justify-center rounded-full border-solid border-2 border-teal-700 w-[16rem] h-[4.4rem] bg-gray-800">
          <div className="flex w-full justify-between items-center px-5 pointer-events-auto">
            {links.map(({ id, link, logo }) => (
              <div
                key={id}
                className="cursor-pointer capitalize font-medium text-white hover:scale-105 duration-200"
              >
                <Link to={link} smooth duration={500}>
                  {logo}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
