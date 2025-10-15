import React from "react";

const requirements = [
  "Memorize and recite Qur’an with proper Tajweed",
  "Explore Islamic history and seerah",
  "Engage in daily duas and moral stories",
  "Practice adab (manners), akhlaq (character), and salaah (prayer routines)",
];

const Tilted = () => {
  return (
    <section className="py-12 px-10 bg-[#FFFDF5] font-serif">
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl italic text-center mb-6 text-[#CF3528]">
        <span className="text-[#00285E]">Integrated Islamic</span> Learning{" "}
      </h2>
      <p className="text-center text-lg md:text-2xl max-w-5xl mx-auto mb-10 text-gray-700">
        Faith and academics go hand in hand at HQA. Our Elementary students:{" "}
      </p>

      <div className="w-full grid md:grid-cols-2 items-stretch gap-6">
        {/* Left Side (Cards with shrink effect) */}
        <div className="flex flex-col space-y-4 h-full">
          {requirements.map((req, index) => {
            const isDark = index % 2 === 0;
            return (
              <div
                key={index}
                style={{
                  width: `calc(100% - ${index * 2}%)`, // shrink effect
                }}
                className={`flex items-center p-6 clip-card transition-all duration-300
                  ${
                    isDark
                      ? "bg-[#00285E] text-white"
                      : "bg-[#BCDDFC] text-[#00285E]"
                  }
                `}
              >
                <p
                  className="text-xl"
                  dangerouslySetInnerHTML={{ __html: req }}
                />
              </div>
            );
          })}
        </div>

        {/* Right Side (Image with tilt effect) */}
        <div className="relative shadow-lg overflow-hidden w-full h-full clip-left">
          <img
            src="/admission/library.jpg"
            alt="Library"
            className="w-full h-[400px] md:h-[380px] object-cover"
          />
        </div>
      </div>

      {/* Centered Paragraphs Below */}
      <div className="mt-12 text-center">
        <p className="text-[#CF3528] text-2xl md:text-3xl  mb-2">Goal:</p>
        <p className="text-gray-800 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
          To instill taqwa, empathy, and leadership from a young age.
        </p>
      </div>
    </section>
  );
};

export default Tilted;
