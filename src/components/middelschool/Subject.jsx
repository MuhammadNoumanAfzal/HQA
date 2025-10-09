import React from "react";

const Subject = () => {
  const cards = [
    {
      img: "/middel/s1.jpg",
      title: "Mathematics",
      text: "Algebra, Geometry, Pre-Algebra, Problem Solving, STAAR Preparation",
    },
    {
      img: "/middel/s2.jpg",
      title: "Science",
      text: "Life Science, Physical Science, Earth & Space, Labs & Experiments",
    },
    {
      img: "/middel/s3.jpg",
      title: "Social Studies",
      text: "U.S. History, World Geography, Civics, Islamic Contributions to Society",
    },
    {
      img: "/middel/s4.jpg",
      title: "Reading & Language",
      text: "Vocabulary, Grammar, Writing Techniques, Literary Analysis, Public Speaking",
    },
    {
      img: "/middel/s5.jpg",
      title: "Islamic Studies",
      text: "Seerah, Fiqh, Aqeedah, Character Development",
    },
    {
      img: "/middel/s6.jpg", // Added 6th card
      title: "Qur’an & Arabic", // Example title
      text: "Recitation with Tajweed, Memorization, Arabic Language & Comprehension", // Example text
    },
  ];

  return (
    <section className="py-12 px-10  font-serif">
      {/* Heading */}
      <h2 className="text-center italic text-3xl sm:text-4xl lg:text-5xl mb-12 text-[#CF3528]">
        <span className="text-[#00285E]"> Core Subjects </span> and Curriculum
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
              <h3 className="text-2xl italic text-gray-800 mb-3 text-left">
                {card.title}
              </h3>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed text-left">
                {card.text}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom row (3 cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {cards.slice(3, 6).map((card, i) => (
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

export default Subject;
