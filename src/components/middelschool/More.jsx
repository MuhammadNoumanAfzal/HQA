import React from "react";

const More = () => {
  const cards = [
    {
      id: 1,
      border: "border-[#00285E]",
      text: "Leadership & Responsibility through student councils and peer mentoring",
      img: "/middel/g1.gif",
    },
    {
      id: 2,
      border: "border-[#BCDDFC]",
      text: "Islamic Identity through relevant lessons and practical application of deen",
      img: "/middel/g2.gif",
    },
    {
      id: 3,
      border: "border-[#00285E]",
      text: "Confidence & Public Speaking through class discussions, debates, and presentations",
      img: "/middel/g3.gif",
    },
    {
      id: 4,
      border: "border-[#BCDDFC]",
      text: "Service & Integrity through community service initiatives and daily character goals",
      img: "/middel/g4.gif",
    },
  ];

  return (
    <section className="w-full font-serif py-12 px-10 ">
      {/* Top Heading */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-[#CF3528] mb-8 text-2xl sm:text-4xl lg:text-5xl italic">
          <span className="text-[#00285E]">More Than Just</span> Academics
        </h1>
        <p className="text-gray-800 text-xl max-w-3xl leading-relaxed">
          At this pivotal stage of development, we focus on more than grades.
          HQA's Middle School program cultivates:
        </p>
      </div>

      {/* Two-column layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
        {/* Left Side (Cards) */}
        <div className="flex flex-col justify-center space-y-6">
          {cards.map((card) => (
            <div
              key={card.id}
              className={`flex items-start gap-4 border-4 bg-white ${card.border} rounded-xl shadow-xl p-4 sm:p-6 transition-transform duration-300 hover:scale-[1.02]`}
            >
              <div className="w-12 h-12 flex-shrink-0">
                <img
                  src={card.img}
                  alt={`Icon ${card.id}`}
                  className="w-full h-full object-contain"
                />
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

export default More;
