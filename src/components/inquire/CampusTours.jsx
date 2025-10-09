import React from "react";

const CampusTours = () => {
  const cards = [
    {
      id: 1,
      number: "1",
      text: "Meet our dedicated faculty and staff, ready to welcome your family with warmth and care.",
    },
    {
      id: 2,
      number: "2",
      text: "Tour our classrooms, prayer spaces, and facilities that create a balanced learning environment.",
    },
    {
      id: 3,
      number: "3",
      text: "Gain insights into our academic programs, extracurriculars, and spiritual activities.",
    },
  ];

  return (
    <section className="w-full py-12 sm:py-16 px-4 sm:px-8 lg:px-16 font-serif bg-gray-50">
      {/* Heading */}
      <h2 className="text-2xl sm:text-4xl lg:text-5xl italic text-center mb-6 leading-snug">
        <span className="text-[#00285E]">Personalized Campus Tours</span>{" "}
        <br className="hidden sm:block" />
        <span className="text-[#CF3528]">& Family Interviews</span>
      </h2>

      {/* Paragraph */}
      <p className="text-gray-800 text-center text-base sm:text-lg lg:text-xl max-w-3xl mx-auto mb-10 sm:mb-12 px-2">
        Step into the heart of Houston Quran Academy and see what makes our
        school a meaningful choice for your child’s educational and spiritual
        journey.
      </p>

      {/* Two column layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start">
        {/* Right side - Subtitle + Cards */}
        <div className="order-1 md:order-1">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl italic text-[#00285E] mb-6 sm:mb-8 leading-snug  md:text-left">
            Our 90-minute visit experience
            <br className="hidden sm:block" />
            includes:
          </h3>

          {/* Cards */}
          <div className="space-y-5 sm:space-y-6">
            {cards.map((card) => (
              <div
                key={card.id}
                className="bg-white shadow-lg hover:shadow-xl rounded-lg p-10 flex items-start gap-3 sm:gap-4 transition"
              >
                <span className="text-gray-800 font-bold text-3xl sm:text-3xl">
                  {card.number}
                </span>
                <p className="text-gray-800 text-sm sm:text-base text-left">
                  {card.text}
                </p>
              </div>
            ))}

            {/* Bigger final card */}
            <div className="bg-[#00285E] shadow-2xl hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] rounded-lg p-6 sm:p-8 transition">
              <p className="text-white text-sm sm:text-lg leading-relaxed">
                <strong>Please note:</strong> Interviews are a required part of
                the application process, and spots fill quickly. We strongly
                encourage you to schedule your visit early in the admissions
                timeline.
              </p>
            </div>
          </div>

          {/* Final centered paragraph */}
          <div className="mt-8 text-center md:hidden max-w-4xl">
            <p className="text-gray-800 text-sm sm:text-base md:text-lg leading-relaxed">
              To schedule your tour and interview, please make sure you’ve
              completed our Online Inquiry Form. These visits are currently open
              only to families applying for the 2025–2026 school year.
            </p>
          </div>
        </div>

        {/* Left side - Images */}
        <div className="order-2 md:order-2 flex flex-col gap-4">
          {/* Large top image */}
          <img
            src="/inquire/c1.jpg"
            alt="Campus Tour"
            className="w-full h-52 sm:h-64 md:h-80 object-cover rounded-lg shadow-md"
          />
          {/* Two side-by-side images */}
          <div className="grid md:grid-cols-2 gap-4">
            <img
              src="/inquire/c2.jpg"
              alt="Campus Life"
              className="w-full h-32 sm:h-40 md:h-56 object-cover rounded-lg shadow-md"
            />
            <img
              src="/inquire/c1.jpg"
              alt="Campus Students"
              className="w-full h-32 sm:h-40 md:h-56 object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
      {/* Final centered paragraph */}
      <div className="hidden md:block mt-16 text-center max-w-4xl mx-auto">
        <p className="text-gray-800 text-base md:text-lg leading-relaxed">
          To schedule your tour and interview, please make sure you’ve completed
          our Online Inquiry Form. These visits are currently open only to
          families applying for the 2025–2026 school year.
        </p>
      </div>
    </section>
  );
};

export default CampusTours;
