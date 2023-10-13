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
    { id: 4, link: "skills", logo: <BsCodeSlash size={24} /> },
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
      <div className="fixed w-full h-20 flex justify-center bottom-2 pb-[1rem]">
        <div className="flex justify-center rounded-full border-solid border-2 border-teal-700 w-[20rem] h-[4.4rem] bg-gray-800">
          <div className="flex w-full justify-between items-center px-5">
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
