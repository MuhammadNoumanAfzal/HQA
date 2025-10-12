import { SlideLeft, SlideRight, SlideUp } from "../../../utility/animation";
import { motion } from "framer-motion";
const FaqsHead = () => {
  return (
    <section className=" py-12 px-10 flex flex-col items-center text-center font-serif bg-[#FFFDF5] ">
      {/* Divider with logo */}
      <div className="relative w-[95%] flex items-center justify-center mb-8">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300"></div>
        </div>
        <span className="relative bg-[#fdfbf7] px-4">
          <img
            src="/logo.png"
            alt="Heritage Logo"
            className="h-12 w-12 mx-auto"
          />
        </span>
      </div>

      <motion.h2
        variants={SlideRight(0.3)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-[#CF3528] text-2xl sm:text-3xl font-serif italic mb-4"
      >
        Frequently Asked Questions{" "}
      </motion.h2>

      {/* Description */}
      <motion.p
        variants={SlideLeft(0.6)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-gray-800 max-w-4xl text-xl text-center mx-auto"
      >
        Welcome to the HQA FAQ page. Here you'll find answers to some of the
        most commonly asked questions by parents and prospective families. If
        you don’t find what you’re looking for, feel free to{" "}
        <span className="font-semibold">Contact Us</span> directly.
      </motion.p>
    </section>
  );
};

export default FaqsHead;
