import React from "react";

const RashidScholarship = () => {
  return (
    <section className="flex flex-col items-center px-10  py-12 font-serif">
      {/* Title - Centered at the top */}
      <h2 className="text-[#CF3528] italic text-3xl sm:text-5xl  text-center w-full mb-8">
        Dr. Rashid's Scholarship
      </h2>

      <div className="flex flex-col md:flex-row items-center justify-between gap-8 w-full">
        {/* Left Image with Red Background Accent */}
        <div className="relative w-full md:w-2/5 flex justify-center order-2 md:order-1">
          {/* Red Accent Div - Adjusted for subtle bottom-left appearance */}
          <div className="absolute -left-2 sm:left-6 -bottom-3 w-[85%] max-w-xs h-[90%] bg-[#CF3528] rounded-lg"></div>

          {/* Image */}
          <img
            src="/scholarship/owner.png"
            alt="Dr. Rashid"
            className="relative z-10 w-full max-w-sm cursor-pointer rounded-lg shadow-lg object-cover"
          />
        </div>

        {/* Right Text Content */}
        <div className="w-full md:w-3/5 space-y-4 text-center md:text-left order-1 md:order-2">
          {/* Subheading */}
          <h3 className="text-xl sm:text-3xl  italic text-gray-800">
            In Honor of Dedication to <br /> the Holy Quran
          </h3>

          {/* Description */}
          <p className="text-gray-800 leading-relaxed text-sm sm:text-base">
            Dr. Muhammad Rashid and his wife have established a heartfelt
            scholarship program in honor of serious HQA students who are
            committed to memorizing the Holy Quran. While open to all eligible
            students, priority is given to those in financial need when more
            than one top candidate is identified.
          </p>

          {/* Button */}
          <button className="mt-4 bg-[#002147] text-white px-5 py-2 cursor-pointer shadow hover:bg-[#00152b] transition">
            Dr. Rashid's Full Biography
          </button>
        </div>
      </div>
    </section>
  );
};

export default RashidScholarship;
