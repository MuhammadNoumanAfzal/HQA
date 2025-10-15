import { SlideLeft, SlideRight, SlideUp } from "../../../utility/animation";
import { motion } from "framer-motion";

const WhyInquire = () => {
  const cards = [
    {
      id: 1,
      border: "border-[#012974]",
      text: "A customized information packet tailored to your child’s grade level and interests.",
    },
    {
      id: 2,
      border: "border-[#CF3528]",
      text: "Answers to your specific questions about programs, tuition, curriculum, and Islamic values",
    },
    {
      id: 3,
      border: "border-[#012974]",
      text: "Let us help you discover what makes HQA a unique and nurturing place for academic excellence and spiritual growth.",
    },
  ];

  return (
    <section className="flex flex-col md:flex-row justify-between items-center w-full font-serif min-h-screen overflow-hidden pb-12 pt-16 px-10 gap-12">
      {/* Left Side */}
      <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
        <motion.h1
          variants={SlideRight(0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-[#CF3528] text-4xl sm:text-5xl lg:text-5xl italic text-left"
        >
          Why Inquire?
        </motion.h1>

        <motion.p
          variants={SlideRight(0.4)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-gray-800 leading-relaxed text-xl sm:text-base lg:text-lg text-left"
        >
          By filling out our inquiry form, you open the door to a personalized
          admissions experience. You’ll receive:
        </motion.p>

        {/* Cards */}
        <div className="space-y-6 mt-6">
          {cards.map((card) => (
            <div
              key={card.id}
              className={`flex items-start gap-4 border-4 bg-white  ${card.border} rounded-xl shadow-2xl p-6`}
            >
              <div className="text-3xl sm:text-4xl font-bold text-gray-700">
                {card.id}
              </div>
              <motion.p
                variants={SlideRight(0.6)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-gray-800 text-sm sm:text-base md:text-lg leading-relaxed text-left"
              >
                {card.text}
              </motion.p>
            </div>
          ))}
        </div>

        {/* After cards paragraph */}
        <motion.p
          variants={SlideRight(0.9)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-[#012974] leading-relaxed mt-8 text-xl sm:2xl font-bold md:text-2xl italic text-left"
        >
          Invitations to open houses, school tours, and community events
        </motion.p>
      </div>
      {/* Right Side */}
      <motion.div
        variants={SlideUp(0.5)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="w-full md:w-1/2 relative flex justify-center"
      >
        {/* Main Image */}
        <img
          src="/about/bg.jpg"
          alt="Graduation caps"
          className="h-64 sm:h-80 lg:h-130 w-full object-cover rounded-4xl"
        />

        {/* Background Shape */}
        <div className="bg-[#eb7f75] w-[120px] sm:w-[200px] h-[80px] sm:h-[150px] rounded-4xl absolute -right-4 sm:-right-8 -bottom-6 sm:-bottom-8 z-[-1]" />

        {/* Circle Decoration */}
        <div className="bg-white w-[80px] sm:w-[150px] h-[80px] sm:h-[150px] absolute -left-4 -bottom-4 flex justify-center items-center rounded-tr-[100px]">
          <div className="bg-[#dfd7d7] h-[40px] sm:h-[100px] w-[40px] sm:w-[100px] rounded-full flex justify-center items-center">
            <div className="bg-blue-600 h-4 sm:h-7 w-4 sm:w-7 rounded-full" />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default WhyInquire;
