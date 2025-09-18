import React from "react";

const CampusTours = () => {
  const cards = [
    {
      id: 1,
      number: "01",
      text: "Meet our dedicated faculty and staff, ready to welcome your family with warmth and care.",
    },
    {
      id: 2,
      number: "02",
      text: "Tour our classrooms, prayer spaces, and facilities that create a balanced learning environment.",
    },
    {
      id: 3,
      number: "03",
      text: "Gain insights into our academic programs, extracurriculars, and spiritual activities.",
    },
  ];

  return (
    <section className="w-full py-16 px-10   font-serif bg-gray-50">
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl italic text-center mb-6">
        <span className="text-[#00285E]">Personalized Campus Tours</span> <br />
        <span className="text-[#CF3528]">& Family Interviews</span>
      </h2>

      {/* Paragraph */}
      <p className="text-gray-800 text-center text-xl max-w-3xl mx-auto mb-12">
        Step into the heart of Houston Quran Academy and see what makes our
        school a meaningful choice for your child’s educational and spiritual
        journey.
      </p>

      {/* Two column layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Right side - Subtitle + Cards */}
        <div>
          <h3 className="text-3xl sm:text-4xl  italic text-[#00285E] mb-8">
            Our 90-minute visit experience <br /> includes:
          </h3>

          {/* Cards */}
          <div className="space-y-6">
            {cards.map((card) => (
              <div
                key={card.id}
                className="bg-white shadow-lg hover:shadow-xl rounded-lg p-6 flex items-start gap-4 transition"
              >
                <span className="text-gray-800 font-bold text-2xl">
                  {card.number}
                </span>
                <p className="text-gray-800">{card.text}</p>
              </div>
            ))}

            {/* Bigger final card */}
            <div className="bg-[#00285E] shadow-2xl hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] rounded-lg p-8 transition">
              <p className="text-white text-lg leading-relaxed">
                <strong>Please note:</strong> Interviews are a required part of
                the application process, and spots fill quickly. We strongly
                encourage you to schedule your visit early in the admissions
                timeline.
              </p>
            </div>
          </div>
        </div>

        {/* Left side - Images */}
        <div className="flex flex-col gap-4">
          {/* Large top image */}
          <img
            src="/inquire/c1.jpg"
            alt="Campus Tour"
            className="w-full h-64 md:h-80 object-cover rounded-lg shadow-md"
          />
          {/* Two side-by-side images */}
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/inquire/c2.jpg"
              alt="Campus Life"
              className="w-full h-40 md:h-68 object-cover rounded-lg shadow-md"
            />
            <img
              src="/inquire/c1.jpg"
              alt="Campus Students"
              className="w-full h-40 md:h-68 object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>

      {/* Final centered paragraph */}
      <div className="mt-16 text-center max-w-4xl mx-auto">
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
