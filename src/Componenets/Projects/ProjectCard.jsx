import React from "react";

const ProjectCard = ({ title, main, image, demoLink }) => {
  return (
    <div className="w-full sm:w-90 md:w-106 lg:w-106 p-4 flex flex-col bg-[#A78295] shadow-lg rounded-2xl transition-transform duration-300 hover:scale-105">
      {/* Image Section */}
      <img
        src={image}
        alt={title}
        className="w-full h-48 md:h-56 object-cover rounded-t-xl"
      />

      {/* Text Section */}
      <div className="p-4 flex flex-col justify-between flex-1">
        <h3 className="text-xl md:text-2xl font-semibold leading-tight">
          {title}
        </h3>
        <p className="text-sm md:text-base leading-snug mt-2">{main}</p>

        {/* Demo Button */}
        <div className="mt-4 flex justify-start">
          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white py-2 px-6 text-sm md:text-base bg-[#46569] rounded-3xl font-semibold hover:opacity-90 duration-300 hover:scale-105"
          >
            Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
