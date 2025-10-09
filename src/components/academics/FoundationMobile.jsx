import { FaArrowRight } from "react-icons/fa";

const foundations = [
  {
    title: "Montessori Method",
    text: "Hands-on, child-centered learning that nurtures independence, social skills, and a lifelong love of discovery.",
  },
  {
    title: "Qur’an Time",
    text: "Daily recitation and storytelling from the Sunnah to build early spiritual connections.",
  },
  {
    title: "Flexible Care",
    text: "Extended day options available for working families.",
    timing:
      "Mon–Thurs: 8 AM – 3 PM • Fri: 8 AM – 1 PM (extended day until 5 PM)",
  },
];

const FoundationMobile = () => {
  return (
    <section className="block md:hidden py-12 px-4 font-serif">
      {/* Heading */}
      <h2 className="text-3xl italic text-center mb-8 text-[#00285E]">
        Montessori & <span className="text-[#CF3528]">Qur’an Foundations</span>
      </h2>

      <div className="flex flex-col space-y-4">
        {foundations.map((item, index) => {
          const isDark = index % 2 === 0;
          return (
            <div
              key={index}
              className={`p-5 rounded-lg shadow-black shadow-lg w-full ${
                isDark
                  ? "bg-[#00285E] text-white"
                  : "bg-[#C8E1F8] text-[#00285E]"
              }`}
            >
              {/* Title */}
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              {/* Description */}
              <p className="text-base leading-relaxed">{item.text}</p>
              {/* Timing for Flexible Care */}
              {item.timing && (
                <p className="mt-2 text-sm italic font-medium">{item.timing}</p>
              )}
            </div>
          );
        })}
      </div>
      <div className="flex justify-center">
        <button className="bg-[#CF3528] mt-8 text-white px-6 py-2 text-center shadow-md hover:bg-[#b02b20] transition duration-300 flex items-center gap-2">
          Learn More <FaArrowRight className="text-sm" />
        </button>
      </div>
    </section>
  );
};

export default FoundationMobile;
