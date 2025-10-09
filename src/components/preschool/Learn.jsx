import React from "react";

const Learn = () => {
  const cards = [
    {
      img: "/pre/learn1.jpg",
      title: "Academic Skills",
      text: "Phonics, early math, vocabulary, reasoning, pre-reading & writing",
    },
    {
      img: "/pre/learn2.jpg",
      title: "Emotional Growth",
      text: "Empathy, self-regulation, patience, communication.",
    },
    {
      img: "/pre/learn3.jpg",
      title: "Social Skills",
      text: "Cooperation, leadership, sharing, grace & courtesy",
    },
    {
      img: "/pre/learn4.jpg",
      title: "Spiritual Learning",
      text: "Duas, daily adhkar, stories of the Prophets, kindness in action",
    },
    {
      img: "/pre/learn5.jpg",
      title: "Life Skills",
      text: "Independence, organization, problem-solving",
    },
  ];

  return (
    <section className="py-12 px-10 bg-[#FFFDF4] font-serif">
      {/* Heading */}
      <h2 className="text-center italic text-3xl sm:text-4xl lg:text-5xl mb-12 text-[#CF3528]">
        <span className="text-[#00285E] "> What Your</span> Child Will Learn{" "}
      </h2>

      {/* Cards Layout */}
      <div className="">
        {/* Top row (3 cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">
          {cards.slice(0, 3).map((card, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-2xl p-6 flex flex-col transition-transform hover:scale-105 duration-300"
            >
              <div className="w-full flex justify-center mb-4">
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
              <h3 className="text-2xl italic text-[#00285E] mb-3 text-left">
                {card.title}
              </h3>
              <p className="text-gray-800 text-sm sm:text-base leading-relaxed text-left">
                {card.text}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom row (2 cards side by side) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {cards.slice(3, 5).map((card, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-2xl p-6 flex flex-col transition-transform hover:scale-105 duration-300"
            >
              <div className="w-full flex justify-center mb-4">
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
              <h3 className="text-2xl italic text-[#00285E] mb-3 text-left">
                {card.title}
              </h3>
              <p className="text-gray-800 text-sm sm:text-base leading-relaxed text-left">
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Learn;
