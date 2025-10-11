import { motion } from "framer-motion";
import { SlideLeft, SlideRight, SlideUp } from "../../../utility/animation";
const requirements = [
  "Application form completed online",
  "Pass Admission Test with Minimum 75% Grade",
  "Copies of previous school records (for Grades 1 and up)",
  "Birth Certificate",
  "Immunization Records",
  "Quranic background (if applicable)",
];

const AdmissionsRequirements = () => {
  return (
    <section className="py-12 px-10 font-serif">
      {/* Heading */}
      <motion.h2
        variants={SlideUp(0.3)}
        initial="hidden"
        whileInView="visible"
        className="text-4xl md:text-5xl italic  text-center mb-10 text-red-700"
      >
        Admissions Requirements
      </motion.h2>

      <div className="w-full grid md:grid-cols-2 items-stretch">
        {/* Left Side (Cards) */}
        <motion.div
          variants={SlideRight(0.6)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col space-y-4 h-full"
        >
          {requirements.map((req, index) => {
            const isDark = index % 2 === 0; // dark blue cards
            return (
              <div
                key={index}
                style={{
                  width: `calc(100% - ${index * 2}%)`, // shrink effect
                  height: "100%",
                }}
                className={`flex items-center p-4 transition-all duration-300 clip-card ${
                  isDark
                    ? "bg-[#00285E] text-white"
                    : "bg-[#BCDDFC] text-[#00285E]"
                }`}
              >
                {/* Number without box */}
                <span className="text-3xl mr-4 font-semibold">{index + 1}</span>
                <p className="text-xl">{req}</p>
              </div>
            );
          })}
        </motion.div>

        {/* Right Side (Image) */}
        <div className="relative w-full h-full overflow-hidden">
          <motion.div
            variants={SlideLeft(0.5)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative shadow-lg w-full h-full clip-left"
          >
            <img
              src="/admission/library.jpg"
              alt="Library"
              className="w-full h-[90vh] object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AdmissionsRequirements;
