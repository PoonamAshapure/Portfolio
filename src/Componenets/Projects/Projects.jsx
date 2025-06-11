import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div id="Projects" className="bg-[#3F2E3E] py-16 px-6 md:px-24 text-white">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-16">
        Projects
      </h1>

      {/* Centered Project Card */}
      <div className="flex justify-center ml-5">
        <div className="w-full max-w-md ">
          <ProjectCard
            title="MERN Expense Tracker"
            main="A full-stack expense management app using the MERN stack. Features include authentication, income/expense tracking, and dynamic charts."
            image="Expense-Tracker.png"
            demoLink="https://mern-expense-tracker-gamma.vercel.app/login"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
