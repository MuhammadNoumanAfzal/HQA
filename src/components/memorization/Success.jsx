import React from "react";

const Success = () => {
  const cards = [
    {
      id: 1,
      img: "/memorizaation/i1.png",
      title: "Individualized Quran Plans",
      text: "Every student from Grade 2 onward receives a tailored memorization and understanding plan based on their unique strengths. Even advanced students are encouraged to take on additional Quranic challenges when ready.",
      border: "border-[#00285E]", // Blue border
    },
    {
      id: 2,
      img: "/memorizaation/i2.png",
      title: "Dedicated Instructors",
      text: "Each grade is supported by three specialized Quran teachers. This ensures focused attention, personalized guidance, and consistent tracking of progress through our Individualized Quran Evaluation Booklets.",
      border: "border-red-700", // Red border
    },
    {
      id: 3,
      img: "/memorizaation/i3.png",
      title: "Consistent Revision",
      text: "Daily revision is built into every student’s schedule to ensure long-term retention and mastery of previously memorized Surahs.",
      border: "border-[#00285E]", // Blue border again
    },
  ];

  return (
    <section className="w-full py-12 px-10 font-serif">
      {/* Heading */}
      <h2 className="text-2xl sm:text-4xl lg:text-5xl italic text-center mb-10 leading-snug">
        <span className="text-[#CF3528]">Customized Paths to Success</span>
      </h2>

      {/* Two column layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start">
        {/* Left side - Text Cards */}
        <div className="flex flex-col space-y-6">
          {cards.map((card) => (
            <div
              key={card.id}
              className={`bg-white border-2 ${card.border} 
    shadow-[0_0_25px_rgba(0,0,0,0.25)] hover:shadow-[0_0_35px_rgba(0,0,0,0.35)] 
    rounded-lg p-6 flex items-start gap-4 transition`}
            >
              {/* Image instead of icon */}
              <div className="flex-shrink-0">
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-12 h-12 sm:w-14 sm:h-14 object-cover  "
                />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-[#00285E] mb-2">
                  {card.title}
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  {card.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Right side - Images */}
        <div className="flex flex-col gap-4">
          {/* Large top image */}
          <img
            src="/memorizaation/c1.jpg"
            alt="Students learning Quran"
            className="w-full h-52 sm:h-64 md:h-78 object-cover rounded-lg shadow-md"
          />
          {/* Two side-by-side images */}
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/memorizaation/c2.jpg"
              alt="Quran study"
              className="w-full h-32 sm:h-40 md:h-74 object-cover rounded-lg shadow-md"
            />
            <img
              src="/memorizaation/c3.jpg"
              alt="Student reciting Quran"
              className="w-full h-32 sm:h-40 md:h-74 object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Success;
