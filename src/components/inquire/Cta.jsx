import { FaArrowRight } from "react-icons/fa";
import { SlideLeft, SlideRight, SlideUp } from "../../../utility/animation";
import { motion } from "framer-motion";

const cta = () => {
  return (
    <section className="bg-[#BCDDFC] pt-30 pb-30 px-10 flex flex-col items-center justify-center text-center font-serif text-white">
      {/* Title */}
      <motion.h2
        variants={SlideLeft(0.3)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-3xl text-[#00285E] sm:text-4xl md:text-5xl  italic mb-6"
      >
        Ready to Learn More?
      </motion.h2>

      {/* Paragraph */}
      <motion.p
        variants={SlideRight(0.5)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-3xl text-xl  text-gray-800 leading-relaxed mb-20"
      >
        We’d love to get to know your family and help you explore what makes
        Houston Quran Academy the right fit.
      </motion.p>

      {/* Button */}
      <motion.button
        variants={SlideUp(0.7)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex items-center gap-2 cursor-pointer bg-[#00285E] hover:bg-red-700 text-white px-6 py-3 rounded-lg shadow-md text-sm sm:text-base  transition"
      >
        Submit an Inquiry Now <FaArrowRight className="text-white" />
      </motion.button>
    </section>
  );
};

export default cta;
