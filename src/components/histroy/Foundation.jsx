import React from "react";

const Foundation = () => {
  const cards = [
    {
      id: 1,
      border: "border-[#BCDDFC]",
      text: "Daily Salah and Qur’an recitation are central to school life.",
    },
    {
      id: 2,
      border: "border-[#00285E]",
      text: "Character-building and community service are taught from KG to High School.",
    },
    {
      id: 3,
      border: "border-[#BCDDFC]",
      text: "Our alumni walk the world as ambassadors of Islam—leading with integrity and Imaan.",
    },
  ];

  return (
    <section className="w-full font-serif py-12 px-10 ">
      {/* Top Heading */}
      <div className="max-w-4xl mx-auto text-center mb-12 ">
        <h1 className="text-[#CF3528] text-2xl sm:text-4xl lg:text-5xl italic ">
          Faith is Our Foundation
        </h1>
      </div>

      {/* Two-column layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
        {/* Left Side (Cards) */}
        <div className="flex flex-col justify-center space-y-6">
          <h3 className="text-xl sm:text-4xl italic  text-gray-800 mb-2 text-center md:text-left">
            Shaping Hearts While Sharpening Minds
          </h3>
          <p className="text-gray-800 leading-relaxed mt-6 text-base sm:text-lg md:text-2xl   text-center md:text-left">
            Faith is not just a value—it’s our foundation. At HQA, every day
            begins with prayer and every lesson is infused with purpose.{" "}
          </p>

          {cards.map((card) => (
            <div
              key={card.id}
              className={`flex items-start gap-4 border-4 bg-white ${card.border} rounded-xl  shadow-[0_0_25px_rgba(0,0,0,0.25)] hover:shadow-[0_0_35px_rgba(0,0,0,0.35)]  p-4 sm:p-6 transition-transform duration-300 hover:scale-[1.02] cursor-pointer`}
            >
              <div className="text-2xl sm:text-3xl font-bold text-gray-700">
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

export default Foundation;
