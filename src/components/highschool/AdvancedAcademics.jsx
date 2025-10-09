import React from "react";

const AdvancedAcademics = () => {
  const cards = [
    { img: "/pre/c1.jpg", title: "Advanced Placement (AP)" },
    { img: "/pre/c2.jpg", title: "Dual Credit Courses" },
    { img: "/pre/c3.jpg", title: "Honors Curriculum" },
    { img: "/pre/c1.jpg", title: "STEM Programs" },
  ];

  const subjects = [
    "Algebra I",
    "English I",
    "English II",
    "Algebra II",
    "Biology",
  ];

  return (
    <div className="font-serif px-10 py-12">
      {/* Top Heading */}
      <div className="text-center items-center justify-center">
        <h2 className="text-3xl md:text-5xl italic text-[#00285e]">
          Advanced Courses <span className="text-red-700">& Enrichment</span>
        </h2>
      </div>

      {/* Intro Paragraph */}
      <div className="flex justify-center mt-10 px-6 md:px-20">
        <p className="text-xl md:text-2xl max-w-2xl text-gray-800 text-center">
          HQA students are given opportunities to excel beyond standard
          coursework through a range of advanced academic options:
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 ">
        {cards.map((card, index) => (
          <div
            key={index}
            className="relative rounded-xl overflow-hidden shadow-lg group cursor-pointer"
          >
            <img
              src={card.img}
              alt={card.title}
              className="w-full h-60 object-cover group-hover:scale-105 transition duration-500"
            />
            <div className="absolute bottom-0 w-full bg-opacity-50 text-white p-3 text-center text-lg font-medium">
              {card.title}
            </div>
          </div>
        ))}
      </div>

      {/* Second Paragraph */}
      <div className="flex justify-center mt-12 px-6 md:px-20">
        <p className="text-lg md:text-xl max-w-2xl font-medium text-red-700 text-center">
          Students also take State of Texas STAAR End-of-Course (EOC)
          assessments in:
        </p>
      </div>

      {/* Buttons spanning full card width */}
      <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 mt-8 ">
        {subjects.map((subject, index) => (
          <button
            key={index}
            className="bg-[#00285e] text-white py-4 text-lg  rounded-lg shadow-lg hover:bg-red-700 transition duration-300 w-full"
          >
            {subject}
          </button>
        ))}
      </div>
    </div>
  );
};

export default AdvancedAcademics;
