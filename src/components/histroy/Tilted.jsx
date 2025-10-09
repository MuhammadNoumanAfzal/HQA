import React from "react";

const requirements = [
  "Introduce new programs in AI, digital literacy & interfaith awareness",
  "Expand our facilities and scholarships to welcome more families",
  "Strengthen social responsibility through civic and inter-community engagement",
];

const Tilted = () => {
  return (
    <section className="py-12 px-10 font-serif">
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl italic text-center mb-6 text-[#CF3528]">
        Where We’re Headed
      </h2>
      <p className="text-center text-xl italic mb-2 text-gray-800">
        Innovation, Expansion, Unity
      </p>
      <p className="text-center text-xl italic mb-10 text-gray-800">
        As we move forward, we stay rooted in our faith and ready for the
        future:
      </p>

      <div className="w-full grid md:grid-cols-2 items-stretch gap-6">
        {/* Left Side (Cards) */}
        <div className="flex flex-col space-y-4 h-full">
          {requirements.map((req, index) => {
            const isDark = index % 2 === 0; // dark blue cards
            return (
              <div
                key={index}
                style={{
                  width: `calc(100% - ${index * 2}%)`, // shrink effect
                }}
                className={`flex items-center justify-center p-6  transition-all duration-300 clip-card ${
                  isDark
                    ? "bg-[#00285E] text-white"
                    : "bg-[#BCDDFC] text-[#00285E]"
                }`}
              >
                {/* Number + Text Centered */}
                <span className="text-3xl mr-4 font-bold">{index + 1}</span>
                <p className="text-lg md:text-xl ">{req}</p>
              </div>
            );
          })}
        </div>

        {/* Right Side (Image) */}
        <div className="relative shadow-lg overflow-hidden w-full h-full clip-left">
          <img
            src="/admission/library.jpg"
            alt="Library"
            className="w-full h-[60vh] object-cover "
          />
        </div>
      </div>
    </section>
  );
};

export default Tilted;
