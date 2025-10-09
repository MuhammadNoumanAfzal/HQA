import { FaArrowRight } from "react-icons/fa";

const requirements = [
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
    text: "Mon–Thurs: 8 AM – 3 PM •",
    timing: "Fri: 8 AM – 1 PM (extended day until 5 PM)",
  },
];

const Foundation = () => {
  return (
    <section className="py-12 px-10 font-serif">
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl italic mb-10 text-[#00285E]">
        Montessori & <span className="text-[#CF3528]">Qur’an Foundations</span>
      </h2>

      <div className="w-full grid md:grid-cols-2 items-stretch gap-4">
        {/* Left Side (Cards) */}
        <div className="flex flex-col space-y-3 h-full">
          {requirements.map((req, index) => {
            const isDark = index % 2 === 0; // alternate color
            return (
              <div
                key={index}
                style={{
                  width: `calc(100% - ${index * 2}%)`, // shrink effect
                }}
                className={`flex flex-col p-6 rounded-lg transition-all duration-300 clip-card ${
                  isDark
                    ? "bg-[#00285E] text-white"
                    : "bg-[#BCDDFC] text-[#00285E]"
                }`}
              >
                <h3 className="text-2xl font-semibold mb-2">{req.title}</h3>
                <p className="text-lg leading-relaxed">{req.text}</p>
                {req.timing && (
                  <p className="text-lg font-medium mt-1">{req.timing}</p>
                )}
              </div>
            );
          })}
        </div>

        {/* Right Side (Image) */}
        <div className="relative shadow-lg overflow-hidden w-full h-full clip-left">
          <img
            src="/admission/library.jpg"
            alt="Library"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Button */}
      <button className="bg-[#CF3528] mt-8 text-white px-6 py-2 rounded-lg shadow-md hover:bg-[#b02b20] transition duration-300 flex items-center gap-2">
        Lea\trn More <FaArrowRight className="text-sm" />
      </button>
    </section>
  );
};

export default Foundation;
