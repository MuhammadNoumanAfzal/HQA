import React from "react";
import { FaArrowRight } from "react-icons/fa";

const School = () => {
  const levels = ["Pre School", "Elementary", "Middle School", "High School"];

  return (
    <div className="grid grid-cols-2 gap-4 px-4 sm:px-10 py-8 sm:py-12 sm:flex sm:flex-row">
      {levels.map((level, index) => (
        <button
          key={index}
          className="bg-[#00285E] text-white px-4 py-3 sm:px-6 sm:py-2 rounded-lg shadow-md hover:bg-[#b02b20] transition duration-300 flex items-center justify-center gap-2 text-sm sm:text-base"
        >
          {level}
        </button>
      ))}
    </div>
  );
};

export default School;
