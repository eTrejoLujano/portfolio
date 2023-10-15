import React, { useState, useEffect, useRef } from "react";
import { VscClose } from "react-icons/vsc";
import { BsCameraFill } from "react-icons/bs";

function useOnClickOutside(ref, handler) {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
}

const ReadMe = ({ name, imgname, readMeDescription, readMe, closeModal }) => {
  console.log("readMeDescription", readMeDescription, "readme", readMe);
  const readMeRef = useRef(null);

  useOnClickOutside(readMeRef, () => closeModal());

  return (
    <div className="fixed flex w-full h-full justify-center items-center z-10">
      <div
        ref={readMeRef}
        className="px-[1rem] w-[42rem] h-fit bg-gray-50 py-[1rem] rounded-xl space-y-[2rem]"
      >
        <div className="flex justify-between w-full">
          <div className="font-extrabold text-3xl">{name}</div>
          <VscClose
            size={30}
            className="cursor-pointer relative"
            onClick={() => closeModal()}
          />
        </div>
        <div className="text-gray-400">{readMeDescription}</div>
        <div>Hi</div>
        <div className="space-y-[1rem]">
          <div className="flex space-x-2 items-center">
            <BsCameraFill size={24} />
            <div className="font-bold text-xl">Screenshots</div>
          </div>
          {readMe.map((picture, index) => {
            console.log(
              "the picture",
              `../../../public/${imgname}/Page${index + 1}.png`
            );
            return (
              <img
                src={`../../../public/${imgname}/Page${index + 1}.png`}
                className="w-full h-fit"
                alt=""
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ReadMe;
