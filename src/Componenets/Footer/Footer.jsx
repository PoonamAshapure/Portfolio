// import React from "react";
// import { MdOutlineEmail } from "react-icons/md";
// import { CiLinkedin } from "react-icons/ci";
// import { FaGithub } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <div
//       id="Footer"
//       className="flex justify-around bg-[#EFE1D1] text-black p-10 md:p-12 items-center"
//     >
//       <div>
//         <h2 className="text-2xl md:text-6xl font-semibold">Contact</h2>
//         <h3 className="text-sm md:text-2xl font-normal">
//           Feel Free to reach out!
//         </h3>
//       </div>

//       <ul>
//         <li className="flex gap-1 items-center">
//           <MdOutlineEmail size={20} />
//           poonamashapure1@gmail.com
//         </li>
//         <li className="flex gap-1 items-center">
//           <CiLinkedin size={20} />
//           www.linkedin.com/in/ poonam-ashapure-546973327
//         </li>
//         <li className="flex gap-1 items-center">
//           <FaGithub size={20} />
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Footer;

import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      id="contact"
      className="flex flex-col md:flex-row justify-around bg-[#EFE1D1] text-black p-10 md:p-12 items-center space-y-6 md:space-y-0"
    >
      <div className="text-center md:text-left">
        <h2 className="text-2xl md:text-6xl font-semibold">Contact</h2>
        <h3 className="text-sm md:text-2xl font-normal">
          Feel free to reach out!
        </h3>
      </div>

      <ul className="space-y-4 text-center md:text-left">
        <li className="flex items-center gap-2">
          <MdOutlineEmail size={20} />
          <a
            href="mailto:poonamashapure1@gmail.com"
            className="hover:underline"
          >
            poonamashapure1@gmail.com
          </a>
        </li>
        <li className="flex items-center gap-2">
          <FaLinkedin size={20} />
          <a
            href="https://www.linkedin.com/in/poonam-ashapure-546973327"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            https://www.linkedin.com/in/poonam-ashapure-546973327
          </a>
        </li>
        <li className="flex items-center gap-2">
          <FaGithub size={20} />
          <a
            href="https://github.com/PoonamAshapure"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            https://github.com/PoonamAshapure
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
