import React from "react";

const requirements = [
  "Application form completed online",
  "Pass Admission Test with Minimum 75% Grade",
  "Copies of previous school records (for Grades 1 and up)",
  "Birth Certificate",
];

const FamilyMobile = () => {
  return (
    <section className="block md:hidden py-12 px-4 font-serif">
      {/* Heading */}
      <h2 className="text-3xl italic text-center mb-6 text-[#CF3528]">
        Meet our Family
      </h2>

      <p className="text-center text-base md:text-lg max-w-3xl mx-auto mb-6 text-gray-700">
        Our teachers bring together a dynamic blend of academic credentials,
        classroom experience, and spiritual insight. Whether teaching core
        subjects, Quranic studies, or enrichment programs, they lead with
        passion, creativity, and care.
      </p>

      {/* Subtitle */}
      <p className="text-lg font-semibold italic text-[#00285E] mb-6 text-center">
        Each member of our faculty is:
      </p>

      {/* Cards */}
      <div className="flex flex-col space-y-4">
        {requirements.map((req, index) => {
          const isOdd = index % 2 === 0;
          return (
            <div
              key={index}
              className={`flex items-center p-4 rounded-lg shadow-black shadow-2xl w-full ${
                isOdd
                  ? "bg-[#00285E] text-white"
                  : "bg-[#C8E1F8] text-[#00285E]"
              }`}
            >
              <span
                className={`text-2xl mr-4 font-semibold ${
                  isOdd ? "text-white" : "text-[#00285E]"
                }`}
              >
                {index + 1}
              </span>
              <p className="text-base">{req}</p>
            </div>
          );
        })}
      </div>
      <p className="mt-8 text-red-700  italic text-center text-xl">
        “Teaching is not just about information — it’s about inspiration. At
        HQA, our teachers uplift minds and hearts.”
      </p>
    </section>
  );
};

export default FamilyMobile;
