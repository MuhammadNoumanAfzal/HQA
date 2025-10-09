import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqs = [
  {
    q: "What curriculum does HQA follow?",
    a: "HQA integrates Islamic studies with a rigorous academic curriculum, ensuring a balance of deen and dunya.",
  },
  {
    q: "Do you offer extracurricular activities?",
    a: "Yes, students can participate in robotics, sports, art, debate clubs, and more.",
  },
  {
    q: "How do teachers support individualized learning?",
    a: "Teachers provide personalized mentorship, small group sessions, and tailored assessments.",
  },
  {
    q: "Is financial aid available for families?",
    a: "Yes, we offer scholarships and financial assistance for eligible families.",
  },
];

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 px-10 font-serif">
      {/* Heading */}
      <h2 className="text-center text-3xl sm:text-4xl lg:text-5xl italic text-[#00285E] mb-12">
        Parent Questions, Answered
      </h2>

      {/* FAQs */}
      <div className="max-w-6xl mx-auto space-y-6">
        {faqs.map((item, i) => (
          <div
            key={i}
            className={`rounded-lg shadow-lg p-6 cursor-pointer transition-all duration-300 ${
              openIndex === i ? "bg-white" : "bg-[#F3F4FF]"
            }`}
            onClick={() => toggleFAQ(i)}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="text-xl font-bold text-[#00285E]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-lg sm:text-xl italic w-full">{item.q}</h3>
              </div>
              <button className="text-xl">
                {openIndex === i ? <FaMinus /> : <FaPlus />}
              </button>
            </div>

            {openIndex === i && (
              <>
                {/* Divider line */}
                <div className="border-t border-gray-300 my-4"></div>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  {item.a}
                </p>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQs;
