import React from "react";
import avatarImg from "../../assets/7358602-removebg-preview.png";
import TextChanger from "../../TextChanger";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Home = () => {
  return (
    <>
      <div className="text-white max-w-screen-2xl container mx-auto px-4 md:px-20 my-20">
        <div className=" flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-12 md:mt-24 order-2 md:order-1">
            <span>Welcome In My Feed</span>
            <br />
            <br />
            <h1 className="text-2xl md:text-4xl font-semibold ">
              <TextChanger />
            </h1>
            <h2 className="text-1xl md:text-2xl font-semibold">
              A Mern-Stack Web Developer
            </h2>
            <br />
            <p className="text-sm md:text-md ">
              I'm focused on building responsive MERN stack applications
              integrating back-end technologies. Driven by a vision to create
              impactful digital experiences that solve real-world problems.
            </p>
            <br />
            <br />

            <div className="flex flex-col md:flex-row justify-betwee space-y-6 md:space-y-0 items-center ">
              <div className="space-y-2">
                <h1 className="font-bold ">Available on</h1>

                <ul className="flex space-x-6">
                  <li>
                    <a
                      href="https://www.linkedin.com/in/poonam-ashapure-546973327"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedin className="text-2xl cursor-pointer ml-2" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/PoonamAshapure"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 md:ml-48 md:mt-5 order-1 md:order-2">
            <img
              className="md:[450px] md:h-[450px]"
              src={avatarImg}
              alt=""
            ></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
