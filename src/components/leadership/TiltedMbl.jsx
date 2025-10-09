import React from "react";
const requirements = [
  "Shaping long-term strategic goals",
  "Upholding transparency and financial integrity",
  "Guiding faith-aligned policies and growth initiatives.",
  "Strengthening community trust and partnerships.",
  "Empowering innovation while preserving tradition.",
];

const FamilyMobile = () => {
  return (
    <section className="block md:hidden py-12 px-4 font-serif">
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
    </section>
  );
};

export default FamilyMobile;
