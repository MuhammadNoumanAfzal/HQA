import React from "react";

const ScholarshipCriteria = () => {
  const criteria = [
    "Families of previous recipients are not eligible in the current year.",
    "Only one scholarship per family will be awarded annually.",
    "Applications must be submitted before the deadline—late entries will not be considered.",
    "Parents must complete the application to nominate their child.",
    "Scholarship covers 2 months of full tuition.",
    "A minimum of 7 scholarships will be granted (based on applicants).",
    "No teacher recommendation letters are needed.",
    "In the event of a tie: Runner-up receives 1 month of tuition. If both top students tie, preference goes to the student with more siblings enrolled at HQA.",
  ];

  return (
    <section className="w-full px-6 py-12 bg-[#FFFDF5] font-serif">
      {/* Heading */}
      <h2 className="text-center text-3xl sm:text-4xl lg:text-5xl italic text-[#00285E] mb-10">
        Scholarship Criteria
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Criteria List */}
        <div className="space-y-4">
          {criteria.map((item, index) => (
            <div
              key={index}
              className={`p-4  shadow-md text-sm sm:text-base leading-relaxed ${
                index % 2 === 0
                  ? "bg-[#0B2E4D] text-white" // dark blue background → white text
                  : "bg-[#BCDDFC] text-[#00285E]" // light blue → dark text
              }`}
            >
              {item}
            </div>
          ))}
        </div>

        {/* Images (stacked vertically) */}
        <div className="flex flex-col gap-4">
          <img
            src="/scholarship/scholarshipp.jpg"
            alt="Library"
            className="w-full h-56 sm:h-64 lg:h-78 object-cover  shadow"
          />
          <img
            src="/scholarship/classroom.jpg"
            alt="Classroom"
            className="w-full h-56 sm:h-64 lg:h-78 object-cover  shadow"
          />
        </div>
      </div>
    </section>
  );
};

export default ScholarshipCriteria;
