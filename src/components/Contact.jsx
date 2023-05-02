import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black
    p-4 text-white"
    >
      <div
        className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full delay-[300ms] duration-[600ms] taos:translate-y-[200px] taos:opacity-0"
        data-aos="fade-up"
        data-aos-offset="100"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">Submit the form below</p>
        </div>
        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/3889bb99-1bea-4880-b192-ddfa83b32328"
            method="POST"
            className="flex flex-col w-full md:w-1/2"
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
        </div>
      </div>
    </div>
  );
};

export default Contact;
