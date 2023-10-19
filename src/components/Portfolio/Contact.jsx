import React from "react";
const Contact = () => {
  return (
    <div
      name="contact"
      className="space-y-[2rem] w-full px-[1rem] lg:px-[6rem] pt-[6rem] h-full bg-gradient-to-b to-gray-900 from-teal-950 text-white"
    >
      <p className="text-4xl font-bold inline border-b-4 border-gray-500">
        Contact
      </p>
      <div
        className="flex lg:flex-row flex-col w-full h-full items-center justify-between
         divide-y-2 lg:divide-y-0 lg:divide-x-2 space-y-[2rem] lg:space-y-0 lg:space-x-[2rem] lg:pb-[7rem]"
      >
        <form
          action="https://getform.io/f/3889bb99-1bea-4880-b192-ddfa83b32328"
          method="POST"
          className="flex flex-col w-full space-y-3"
        >
          <div className="space-y-2">
            <div className="text-lg font-semibold">Name</div>
            <input
              type="text"
              name="name"
              className="p-2 w-full bg-transparent border-2 rounded-md text-white
              focus:outline-none"
            />
          </div>
          <div className="space-y-2">
            <div className="text-lg font-semibold">Email</div>
            <input
              type="text"
              name="email"
              className="my-4 w-full p-2 bg-transparent border-2 rounded-md text-white
              focus:outline-none"
            />
          </div>
          <div className="space-y-2">
            <div className="text-lg font-semibold">Message</div>
            <textarea
              name="message"
              rows="10"
              className="w-full p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
          </div>
          <button
            className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6
            py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300"
          >
            Lets Talk!
          </button>
        </form>
        <div className="flex flex-col h-full pb-[8rem] pt-[3rem] lg:pt-0 pl-0 justify-center lg:pl-[2rem] w-full text-xl space-y-[2rem]">
          <div>Erik Trejo</div>
          <div>
            <div>Email:</div>
            <div>trejolujano.erik@gmail.com</div>
          </div>
          <div>
            <div>Phone Number:</div>
            <div>(408) 497 - 1264</div>
          </div>
          <div>
            <div>LinkedIn:</div>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/erik-trejo-lujano/"
              className="hover:text-teal-500"
            >
              https://www.linkedin.com/in/erik-trejo-lujano/
            </a>
          </div>
          <div>
            <div>GitHub:</div>
            <a
              target="_blank"
              rel="noreferrer"
              href=" https://github.com/eTrejoLujano"
              className="hover:text-teal-500"
            >
              https://github.com/eTrejoLujano
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
