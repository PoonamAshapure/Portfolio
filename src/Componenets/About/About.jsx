import React from "react";
import AboutImg from "../../assets/myImg.jpg";

const About = () => {
  return (
    <div
      id="About"
      className="bg-[#EFE1D1] text-black shadow-xl rounded-lg mx-4 md:mx-20 p-6 md:p-12"
    >
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold">About</h1>
        <h2 className="text-xl md:text-2xl font-semibold mt-2">
          What Defines Me
        </h2>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Image Section */}
        <div className="flex justify-center md:w-1/3">
          <img
            src={AboutImg}
            alt="About Poonam"
            // className="w-40 h-40 sm:w-52 sm:h-52 md:w-60 md:h-60 rounded-full object-cover shadow-xl border-4 border-[#5c5050] transition-transform duration-300 hover:scale-105"
            className="rounded-2xl shadow-lg object-cover w-50 h-auto transition-all duration-300 group-hover:scale-105"
          />
        </div>

        {/* Text Section */}
        <div className="md:w-2/3 text-center md:text-left">
          <p className="text-sm md:text-base leading-relaxed text-justify">
            Hey I'm <strong>Poonam Ashapure</strong>, a B.Tech (Information
            Technology) graduate specializing in Web Development. I’m a
            Full-Stack and MERN Stack Developer with a passion for crafting
            impactful, user-centric web solutions.
            <br />
            <br />
            My goal is to explore new opportunities and collaborate on exciting
            projects. Feel free to connect with me!
          </p>

          <div className="mt-6 flex justify-center md:justify-start">
            {/* <button className="bg-[#fbf9f5] text-black px-6 py-2 rounded-2xl font-semibold text-sm md:text-base hover:scale-105 hover:opacity-90 transition-all duration-300">
              Download CV
            </button> */}
            <button className=" bg-[#3F2E3E] border-none border-2 hover:bg-[#A78295] text-white px-6 py-2 rounded-2xl font-semibold text-sm md:text-base transition-all duration-300 hover:scale-105">
              <a href="Poonam_Ashapure__CV.pdf" download>
                Download CV
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
