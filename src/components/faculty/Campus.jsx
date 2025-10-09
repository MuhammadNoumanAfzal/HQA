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

const Campus = () => {
  return (
    <section className="w-full flex flex-col gap-16 px-10 py-12 font-serif">
      {/* Heading + Paragraph */}
      <div className="text-center  mb-10">
        <h2 className="text-3xl md:text-5xl italic text-[#CF3528] font-serif  mb-4">
          Our Staff: The Heart of Campus Life
        </h2>
        <p className="text-base max-w-4xl mx-auto md:text-lg text-gray-700 leading-relaxed">
          Behind every successful school day is a dedicated team of support
          staff who keep our operations running smoothly. From front office
          smiles to tech support to student wellness, these unsung heroes ensure
          our school community is safe, organized, and thriving.
        </p>
      </div>

      {/* Cards */}
      {cards.map((card, index) => {
        const isEven = index % 2 !== 0; // even index -> card 2,4,6...
        const colorClass = isEven ? "bg-[#00285E]" : "bg-[#CF3528]";

        return (
          <div
            key={card.id}
            className={`relative w-full flex flex-col md:flex-row items-center ${
              isEven ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* White Card (40%) */}
            <div
              className={`relative w-full md:w-2/5 z-20 ${
                isEven ? "md:-ml-6" : "md:-mr-6"
              }`}
            >
              {/* Accent Background */}
              <div
                className={`absolute h-28 w-40 ${colorClass} rounded-md aspect-square
                  ${isEven ? "-right-4 -bottom-4" : "-left-4 -bottom-4"}`}
              ></div>

              {/* White Box */}
              <div className="relative bg-white border border-black shadow-xl rounded-md px-8 py-8 md:py-12">
                <p className="text-xl font-serif italic text-left">
                  {card.text}
                </p>
              </div>
            </div>

            {/* Image Box (60%) */}
            <div className="relative w-full md:w-3/5 z-10">
              {/* Accent Background */}
              <div
                className={`absolute h-72 w-64 ${colorClass} rounded-md aspect-square 
                  ${isEven ? "-top-4 -left-4" : "-top-4 -right-4"}`}
              ></div>

              {/* Image */}
              <div className="relative">
                <img
                  src={card.img}
                  alt={card.text}
                  className="w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[450px] object-cover rounded-md"
                />
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Campus;
