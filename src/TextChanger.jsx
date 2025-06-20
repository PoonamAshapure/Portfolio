// import React from "react";
// import { useState, useEffect } from "react";

// const TextChanger = () => {
//   const texts = ["Hi, I'm Poonam Ashapure"];

//   const [currentText, setCurrentText] = useState("");

//   const [endValue, setEndValue] = useState(true);

//   const [isForward, setIsForward] = useState(true);

//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setCurrentText(texts[index].substring(0, endValue));
//       if (isForward) {
//         setEndValue((prev) => prev + 1);
//       } else {
//         setEndValue((prev) => prev - 1);
//       }
//       if (endValue > texts[index].length + 10) {
//         setIsForward(false);
//       }
//       if (endValue < 2.1) {
//         setIsForward(true);
//         setIndex((prev = prev & texts.length));
//       }
//     }, 50);

//     return () => clearInterval(intervalId);
//   }, [endValue, isForward, index, texts]);
//   return <div className="transition ease duration-300">{currentText}</div>;
// };

// export default TextChanger;

import React, { useState, useEffect } from "react";

const TextChanger = () => {
  const text = " Hi I'm  Poonam Ashapure";
  const [currentText, setCurrentText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeoutId = setTimeout(() => {
        setCurrentText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, 120); // typing speed
      return () => clearTimeout(timeoutId);
    }
  }, [index, text]);

  return <div className="transition ease duration-300">{currentText}</div>;
};

export default TextChanger;
