import React from "react";
import {
  FaCss3,
  FaHtml5,
  FaJs,
  FaReact,
  FaNodeJs,
  FaBootstrap,
} from "react-icons/fa";
import { SiMongodb, SiExpress, SiPostman, SiRedux } from "react-icons/si";

const Skills = () => {
  return (
    <div
      id="Skills"
      className="bg-[#331D2C] text-white
     py-12 px-6 md:px-24 mt-20 mb-20"
    >
      <h1 className="text-3xl md:text-4xl text-center font-bold text-white mb-10">
        Skills
      </h1>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6 md:gap-10 justify-items-center">
        <div className="flex flex-col items-center">
          <FaHtml5 color="#E34F26" size={50} />
          <p className="mt-2 text-sm font-semibold">HTML5</p>
        </div>

        <div className="flex flex-col items-center">
          <FaCss3 color="#349beb" size={50} />
          <p className="mt-2 text-sm font-semibold">CSS3</p>
        </div>

        <div className="flex flex-col items-center">
          <FaJs color="#f7df1e" size={50} />
          <p className="mt-2 text-sm font-semibold">JavaScript</p>
        </div>

        <div className="flex flex-col items-center">
          <FaReact color="#68c8e3" size={50} />
          <p className="mt-2 text-sm font-semibold">React</p>
        </div>

        <div className="flex flex-col items-center">
          <SiMongodb color="#209932" size={50} />
          <p className="mt-2 text-sm font-semibold">MongoDB</p>
        </div>

        <div className="flex flex-col items-center">
          <SiExpress color="#000000" size={50} />
          <p className="mt-2 text-sm font-semibold">Express</p>
        </div>

        <div className="flex flex-col items-center">
          <SiRedux color="#8231ad" size={50} />
          <p className="mt-2 text-sm font-semibold">Redux</p>
        </div>

        <div className="flex flex-col items-center">
          <FaNodeJs color="#3ba858" size={50} />
          <p className="mt-2 text-sm font-semibold">Node.js</p>
        </div>

        <div className="flex flex-col items-center">
          <SiPostman color="#ad5631" size={50} />
          <p className="mt-2 text-sm font-semibold">Postman</p>
        </div>

        <div className="flex flex-col items-center">
          <FaBootstrap color="#4b3ba8" size={50} />
          <p className="mt-2 text-sm font-semibold">Bootstrap</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
