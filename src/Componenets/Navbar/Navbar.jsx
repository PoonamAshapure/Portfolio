// // import pic from "../../assets/mylogo.jpeg";
// // import React, { useState } from "react";
// // import { FiMenu } from "react-icons/fi";
// // import { IoClose } from "react-icons/io5";
// // // bg-[#fcf5f5]
// // const Navbar = () => {
// //   const [menu, setMenu] = useState(false);

// //   const navItems = [
// //     {
// //       id: 1,
// //       text: "Home",
// //     },
// //     {
// //       id: 2,
// //       text: "About",
// //     },
// //     {
// //       id: 3,
// //       text: "Skills",
// //     },
// //     {
// //       id: 4,
// //       text: "Projects",
// //     },
// //     {
// //       id: 5,
// //       text: "Contact",
// //     },
// //   ];

// //   return (
// //     <>
// //       <nav className="max-w-screen-2xl container mx-auto px-4 md:px-20  shadow-md bg-[#fcf5f5] fixed top-0 left-0 right-0 z-50 ">
// //         <div className="flex justify-between items-center h-16">
// //           <div className="flex space-x-2 ">
// //             <img src={pic} className="h-12 w-12 rounded-full" alt=""></img>
// //             <div className="flex flex-col">
// //               <h1 className="font-semibold text-xl cursor-pointer">Poonam</h1>
// //               <p className="text-sm">Web Developer</p>
// //             </div>
// //           </div>

// //           {/* desktop navbar navbar */}
// //           <div>
// //             <ul className=" hidden md:flex space-x-8 ">
// //               {navItems.map(({ id, text }) => (
// //                 <li
// //                   className="hover:scale-105 duration-200 cursor-pointer"
// //                   key={id}
// //                 >
// //                   <a href="#"> {text}</a>
// //                 </li>
// //               ))}
// //             </ul>
// //             <div onClick={() => setMenu(!menu)} className="md:hidden">
// //               {menu ? <IoClose size={24} /> : <FiMenu size={24} />}
// //             </div>
// //           </div>
// //         </div>

// //         {/* mobile navbar */}
// //         {menu && (
// //           <div>
// //             <ul className="md:hidden flex flex-col w-full bg-[#fcf5f5] absolute top-16 left-0 items-center space-y-6 py-8 shadow-md text-xl z-10">
// //               {navItems.map(({ id, text }) => (
// //                 <li
// //                   className="hover:scale-105 duration-200 cursor-pointer"
// //                   key={id}
// //                 >
// //                   <a href="#"> {text}</a>
// //                 </li>
// //               ))}
// //             </ul>
// //           </div>
// //         )}
// //       </nav>
// //     </>
// //   );
// // };

// // export default Navbar;

// import React, { useState } from "react";
// import { Link, useActionData } from "react-router-dom";
// import { FiMenu } from "react-icons/fi";
// import { IoClose } from "react-icons/io5";
// import pic from "../../assets/mylogo.jpeg";

// const Navbar = () => {
//   const [menu, setMenu] = useState(false);

//   const navItems = [
//     { id: 1, text: "Home", route: "/" },
//     { id: 2, text: "About", route: "/about" },
//     { id: 3, text: "Skills", route: "/skills" },
//     { id: 4, text: "Projects", route: "/projects" },
//     { id: 5, text: "Contact", route: "/contact" },
//   ];

//   return (
//     <nav className="max-w-screen-2xl container mx-auto px-4 md:px-20 shadow-md bg-[#fcf5f5] fixed top-0 left-0 right-0 z-50">
//       <div className="flex justify-between items-center h-16">
//         <div className="flex space-x-2">
//           <img src={pic} className="h-12 w-12 rounded-full" alt="logo" />
//           <div className=" flex flex-col">
//             <h1 className="font-semibold text-xl cursor-pointer">Poonam</h1>
//             <p className="text-sm ">Web Developer</p>
//           </div>
//         </div>
//         {/* Desktop Menu */}
//         <ul className="hidden md:flex space-x-8">
//           {navItems.map(({ id, text, route }) => (
//             <li key={id} className="hover:scale-105 duration-200">
//               <Link to={route} className="cursor-pointer">
//                 {text}
//               </Link>
//             </li>
//           ))}
//         </ul>

//         {/* Mobile Toggle Button */}
//          <div onClick={() => setMenu(!menu)} className="md:hidden cursor-pointer">
//           {menu ? <IoClose size={24} /> : <FiMenu size={24} />}
//         </div>
//       </div>

//       {/* Mobile Menu */}
//         {menu && (
//           <ul className="md:hidden flex flex-col w-full bg-full bg-[#fcf5f5] absolute top-16 left-0 items-center space-y-6 py-8 shadow-md text-xl z-10">
//             {navItems.map(({ id, text, route }) => (
//               <li key={id} className="hover:scale-105 duration-200">
//                 <Link
//                   to={route}
//                   onClick={() => setMenu(false)}
//                   className="cursor-pointer"
//                 >
//                   {text}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//     </nav>
//   );
// };
// export default Navbar;
import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import pic from "../../assets/mylogo.jpeg";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const navItems = [
    { id: 1, text: "Home", route: "#home" },
    { id: 2, text: "About", route: "#about" },
    { id: 3, text: "Skills", route: "#skills" },
    { id: 4, text: "Projects", route: "#projects" },
    { id: 5, text: "Contact", route: "#contact" },
  ];

  return (
    <nav className="max-w-screen-2xl container mx-auto px-4 md:px-20 shadow-md bg-[#EFE1D1] fixed top-0 left-0 right-0 z-50">
      <div className="flex justify-between items-center h-16">
        <div className="flex space-x-2">
          <img src={pic} className="h-12 w-12 rounded-full" alt="logo" />
          <div className="flex flex-col">
            <h1 className="font-semibold text-xl cursor-pointer">Poonam</h1>
            <p className="text-sm">Web Developer</p>
          </div>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          {navItems.map(({ id, text, route }) => (
            <li key={id} className="hover:scale-105 duration-200">
              <a href={route} className="cursor-pointer">
                {text}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle Button */}
        <div
          onClick={() => setMenu(!menu)}
          className="md:hidden cursor-pointer"
        >
          {menu ? <IoClose size={24} /> : <FiMenu size={24} />}
        </div>
      </div>

      {/* Mobile Menu */}
      {menu && (
        <ul className="md:hidden flex flex-col w-fullabsolute top-16 left-0 items-center space-y-6 py-8 shadow-md text-xl z-10">
          {navItems.map(({ id, text, route }) => (
            <li key={id} className="hover:scale-105 duration-200">
              <a
                href={route}
                onClick={() => setMenu(false)}
                className="cursor-pointer"
              >
                {text}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;

//bg-[#fcf5f5]
