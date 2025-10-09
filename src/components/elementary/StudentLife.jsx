import React from "react";

const StudentLife = () => {
  const cards = [
    { img: "/pre/c1.jpg", title: "Art, Calligraphy & Crafts" },
    { img: "/pre/c2.jpg", title: "STEM Activities & Robotics Clubs" },
    { img: "/pre/c3.jpg", title: "Quran Bees & Spelling Bees" },
    { img: "/pre/c1.jpg", title: "Field Trips & Outdoor Explorations" },
    { img: "/pre/c1.jpg", title: "Community Service Projects" },
  ];

  return (
    <div className="font-serif px-10 py-12">
      {/* Top Heading */}
      <div className="text-center items-center justify-center">
        <h2 className="text-3xl md:text-5xl italic text-[#00285e]">
          Enrichment & <span className="text-red-700">Student Life</span>
        </h2>
      </div>

      {/* Intro Paragraph */}
      <div className="flex justify-center mt-10 px-6 md:px-20">
        <p className="text-xl md:text-2xl max-w-2xl text-gray-800 text-center">
          We believe education should be holistic. Our students enjoy a wide
          range of enrichment opportunities, including:
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-10 ">
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
        <p className="text-3xl max-w-4xl font-medium text-red-700 text-center">
          Every child is encouraged to discover their passions beyond the
          classroom.
        </p>
      </div>
    </div>
  );
};

export default StudentLife;
