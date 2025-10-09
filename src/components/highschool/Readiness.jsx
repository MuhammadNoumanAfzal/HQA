import React from "react";

const Readiness = () => {
  const cards = [
    {
      id: 1,
      border: "border-[#BCDDFC]",
      text: "PSAT & SAT preparation embedded in curriculum",
    },
    {
      id: 2,
      border: "border-[#00285E]",
      text: "Academic Advising to build individualized college plans",
    },
    {
      id: 3,
      border: "border-[#BCDDFC]",
      text: "Leadership & Service Opportunities that strengthen resumes and character",
    },
    {
      id: 4,
      border: "border-[#00285E]",
      text: "Islamic Ethics & Worldview Integration in all subjects",
    },
  ];

  return (
    <section className="w-full font-serif py-12 px-4 sm:px-10">
      {/* Top Heading */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-[#CF3528] mb-6 text-2xl sm:text-4xl lg:text-5xl italic">
          <span className="text-[#00285E]">College & Career </span>
          Readiness
        </h1>
        {/* Centered paragraph */}
        <p className="text-gray-800 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed text-center">
          Our college-prep pathway ensures students are well-equipped to
          navigate their academic future:
        </p>
      </div>

      {/* Two-column layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
        {/* Left Side (Cards with numbers instead of images) */}
        <div className="flex flex-col justify-center space-y-6">
          {cards.map((card) => (
            <div
              key={card.id}
              className={`flex items-start gap-4 border-4 bg-white ${card.border} rounded-xl shadow-xl p-6 sm:p-8 transition-transform duration-300 hover:scale-[1.02]`}
            >
              {/* Number Circle */}
              <div className="w-12 h-12 flex items-center justify-center  text-[#00285E]  font-bold text-4xl">
                {card.id}
              </div>
              <p className="text-gray-800 text-sm sm:text-base md:text-lg leading-relaxed">
                {card.text}
              </p>
            </div>
          ))}
        </div>

        {/* Right Side (Image) */}
        <div className="w-full h-64 sm:h-80 md:h-auto flex">
          <img
            src="/about/bg.jpg"
            alt="Graduation caps"
            className="w-full h-full object-cover rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Readiness;
