import React from "react";

const cards = [
  {
    id: 1,
    text: "Front Office & Reception",
    img: "/faculty/c1.jpg",
  },
  {
    id: 2,
    text: "Student Affairs & Counseling",
    img: "/faculty/c2.jpg",
  },
  {
    id: 3,
    text: "IT & Educational Technology",
    img: "/faculty/c1.jpg",
  },
  {
    id: 4,
    text: "Facilities & Maintenance",
    img: "/faculty/c3.jpg",
  },
  {
    id: 5,
    text: "Security & Safety",
    img: "/faculty/c1.jpg",
  },
  {
    id: 6,
    text: "Cafeteria & Nutrition Services",
    img: "/faculty/c3.jpg",
  },
];

const MobileCampus = () => {
  return (
    <section className="w-full flex flex-col gap-20 px-6 py-10 font-serif md:hidden">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-3xl italic text-[#CF3528] font-serif mb-4">
          Our Staff: The Heart of Campus Life
        </h2>
        <p className="text-base max-w-2xl mx-auto text-gray-700 leading-relaxed">
          Behind every successful school day is a dedicated team of support
          staff who keep our operations running smoothly. From front office
          smiles to tech support to student wellness, these unsung heroes ensure
          our school community is safe, organized, and thriving.
        </p>
      </div>

      {/* Cards */}
      {cards.map((card, index) => {
        const isEven = index % 2 !== 0;
        const colorClass = isEven ? "bg-[#00285E]" : "bg-[#CF3528]";

        return (
          <div key={card.id} className="flex flex-col relative">
            {/* Image Box */}
            <div className="relative w-full">
              <div
                className={`absolute w-38 h-38 ${colorClass} rounded-md ${
                  isEven ? "-top-4 -left-4" : "-top-4 -right-4"
                }`}
              ></div>
              <img
                src={card.img}
                alt={card.text}
                className="relative w-full h-[260px] object-cover rounded-md z-10"
              />
            </div>

            {/* White Text Box overlapping */}
            <div className="relative w-full -mt-12 px-4">
              {/* Accent Background */}
              <div
                className={`absolute w-50 h-20 z-10 ${colorClass} rounded-md ${
                  isEven ? "-bottom-4 -right-4" : "-bottom-4 -left-4"
                }`}
              ></div>
              {/* White Card */}
              <div className="relative bg-white shadow-lg border border-gray-300 rounded-md px-6 py-6 z-20">
                <p className="text-lg font-serif italic">{card.text}</p>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default MobileCampus;
