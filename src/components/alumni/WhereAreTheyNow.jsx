import React from "react";

const graduates = [
  {
    img: "/alumni/1.jpg",
    name: "University of Texas at Austin",
  },
  {
    img: "/alumni/2.jpg",
    name: "Texas A&M University",
  },
  {
    img: "/alumni/3.jpg",
    name: "Rice University",
  },
  {
    img: "/alumni/4.jpg",
    name: "University of Houston",
  },
];

const WhereAreTheyNow = () => {
  return (
    <section className="w-full px-6 md:px-12 py-16 font-serif">
      {/* Heading */}
      <h2 className="text-3xl md:text-5xl text-red-700 italic text-center mb-6">
        Where Are They Now?
      </h2>

      {/* Intro Paragraph */}
      <p className="text-gray-700 text-center text-lg md:text-xl mb-12 max-w-3xl mx-auto">
        Our graduates have gone on to attend prestigious institutions such as:
      </p>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        {graduates.map((grad, index) => (
          <div
            key={index}
            className="relative rounded-lg overflow-hidden shadow-md hover:shadow-xl transition h-96"
          >
            {/* Image */}
            <img
              src={grad.img}
              alt={grad.name}
              className="w-full h-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end">
              <div className="p-4 text-white w-full text-center">
                <h3 className="text-lg font-semibold">{grad.name}</h3>
                <p className="text-sm mt-1">{grad.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Closing Paragraph */}
      <p className="text-gray-700 text-center text-2xl max-w-4xl mx-auto">
        Beyond academics, they serve as doctors, engineers, educators,
        entrepreneurs, and community advocates—shining examples of our mission
        in action.
      </p>
    </section>
  );
};

export default WhereAreTheyNow;
