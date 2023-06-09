import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const links = [
    { id: 1, link: "home" },
    { id: 2, link: "about" },
    { id: 3, link: "portfolio" },
    { id: 4, link: "skills" },
    // { id: 5, link: "experience" },
    { id: 6, link: "contact" },
  ];
  return (
    <div className="fixed h-screen">
      <div
        className="flex justify-between items-center w-full h-20 px-4
     text-teal-500 bg-opacity-0 fixed"
      >
        <div>
          <h1 className="text-5xl font-signature">ET</h1>
        </div>
        {/* <ul className="hidden md:flex">
          {links.map((link) => (
            <li
              key={link.id}
              className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200"
            >
              <Link to={link.link} smooth duration={500}>
                {link.link}
              </Link>
            </li>
          ))}
        </ul>
        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer pr-4 z-10 text-gray-500 md md:hidden"
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
        {nav && (
          <ul
            className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b
       from-black to-gray-800 text-gray-500"
          >
            {links.map((link) => (
              <li
                key={link.id}
                className="px-4 cursor-pointer capitalize py-6 text-4xl"
              >
                <Link
                  to={link.link}
                  smooth
                  duration={500}
                  onClick={() => setNav(!nav)}
                >
                  {link.link}
                </Link>
              </li>
            ))}
          </ul>
        )} */}
      </div>
      <div className="flex flex-col justify-end items-center w-screen h-full pb-[1rem]">
        <div className="rounded-full border-solid border-2 border-teal-600 w-[20rem] h-[4.4rem] ">
          <ul className="flex">
            {links.map((link) => (
              <li
                key={link.id}
                className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200"
              >
                <Link to={link.link} smooth duration={500}>
                  {link.link}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
