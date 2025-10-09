import React from "react";

const ScholarshipSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between gap-8 px-10 py-12 font-serif bg-[#FFFDF5] ">
      {/* Left Content */}
      <div className="w-full md:w-1/2 space-y-4 text-center md:text-left">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl ">
          <span className="text-[#00285E] italic">
            Scholarships & <br />
          </span>{" "}
          <span className="text-[#CF3528] italic">Financial Aid</span>
        </h2>

        {/* Subheading */}
        <p className="text-lg sm:text-3xl font-medium italic text-gray-800">
          Empowering Students, Honoring <br /> Excellence
        </p>

        {/* Description */}
        <p className="text-gray-800 leading-relaxed text-sm sm:text-base">
          At Houston Quran Academy , we believe that financial limitations
          should never stand in the way of academic and spiritual excellence.
          Our scholarship program reflects our commitment to supporting
          outstanding students while encouraging Quran memorization and
          character development.
        </p>
      </div>

      {/* Right Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src="/scholarship/scholarshipp.jpg"
          alt="Scholarship Graduate"
          className="w-full rounded-xl shadow-lg object-cover"
        />
      </div>
    </section>
  );
};

export default ScholarshipSection;
