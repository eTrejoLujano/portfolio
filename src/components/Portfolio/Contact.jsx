import React from "react";
const Contact = () => {
  return (
    <div
      name="contact"
      className="space-y-[2rem] w-full px-[1rem] lg:px-[6rem] py-[6rem] h-screen bg-gradient-to-b to-gray-900 from-teal-950 text-white"
    >
      <p className="text-4xl font-bold inline border-b-4 border-gray-500">
        Contact
      </p>
      <div className="flex w-full h-full items-center justify-between space-x-[4rem]">
        <form
          action="https://getform.io/f/3889bb99-1bea-4880-b192-ddfa83b32328"
          method="POST"
          className="flex flex-col w-full"
        >
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            className="p-2 bg-transparent border-2 rounded-md text-white
              focus:outline-none"
          />
          <input
            type="text"
            name="email"
            placeholder="Enter your Email"
            className="my-4 p-2 bg-transparent border-2 rounded-md text-white
              focus:outline-none"
          />
          <textarea
            name="message"
            placeholder="Enter your message"
            rows="10"
            className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
          />
          <button
            className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6
            py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300"
          >
            Lets Talk!
          </button>
        </form>
        <div className="h-full w-[.1rem] bg-white" />
        <div className="flex flex-col w-full text-xl space-y-[2rem]">
          <div>Erik Trejo Lujano</div>
          <div>
            <div>Email:</div>
            <div>trejolujano.erik@gmail.com</div>
          </div>
          <div>
            {" "}
            <div>Phone Number:</div>
            <div>(408) 497 - 1264</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
