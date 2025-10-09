import React from "react";

const requirements = [
  "Application form completed online",
  "Pass Admission Test with Minimum 75% Grade",
  "Copies of previous school records (for Grades 1 and up)",
  "Birth Certificate",
];

const Family = () => {
  return (
    <section className="py-12 px-10 font-serif">
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl italic  text-center mb-6 text-[#CF3528]">
        Meet our Family
      </h2>
      <p className="text-center text-lg md:text-xl max-w-5xl mx-auto mb-10 text-gray-700">
        Our teachers bring together a dynamic blend of academic credentials,
        classroom experience, and spiritual insight. Whether teaching core
        subjects, Quranic studies, or enrichment programs, they lead with
        passion, creativity, and care.
      </p>
      <p className="text-lg md:text-3xl italic text-[#00285E] mb-6">
        Each member of our faculty is:
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
                <p className="text-lg">{req}</p>
              </div>
            );
          })}
        </div>

        {/* Right Side (Image with tilt effect) */}
        <div className="relative shadow-lg overflow-hidden w-full h-full clip-left">
          <img
            src="/admission/library.jpg"
            alt="Library"
            className="w-full h-[400px] md:h-[350px] object-cover"
          />
        </div>
      </div>
      <p className="mt-8 text-red-700 italic text-center text-3xl max-w-4xl mx-auto">
        “Teaching is not just about information — it’s about inspiration. At
        HQA, our teachers uplift minds and hearts.”
      </p>
    </section>
  );
};

export default Family;
