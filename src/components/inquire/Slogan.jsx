import { SlideRight } from "../../../utility/animation";
import { motion } from "framer-motion";

const Slogan = () => {
  return (
    <section
      className="relative bg-cover bg-center py-12  px-10 flex items-center justify-center text-center font-serif"
      style={{ backgroundImage: "url('/inquire/bg.jpg')" }}
    >
      {/* Red Overlay */}
      <div className="absolute inset-0 bg-red-700/70"></div>

      {/* Content */}
      <div className="relative w-full  flex flex-col items-center justify-center">
        {/* Top Divider with logo */}
        <div className="relative w-full flex items-center justify-center mb-16 md:mb-20">
          {/* Logo container */}
          <motion.div
            variants={SlideRight(0.3)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex-shrink-0 px-4"
          >
            <img
              src="/logo.png"
              alt="Heritage Logo"
              className="h-20 w-20 mx-auto"
            />
          </motion.div>
        </div>
        <motion.p
          variants={SlideRight(0.5)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-white max-w-3xl text-3xl leading-relaxed px-4 md:px-6 mb-4"
        >
          Parent Testimonial
        </motion.p>

        {/* Description */}
        <motion.p
          variants={SlideRight(0.7)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-white max-w-5xl text-xl leading-relaxed px-4 md:px-6 mb-4"
        >
          “Joining HQA was the best decision for our family—our son’s confidence
          and love for learning have skyrocketed.”
        </motion.p>
        <motion.p
          variants={SlideRight(0.9)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-white max-w-3xl font-bold text-sm sm:text-base md:text-lg leading-relaxed mb-8 md:mb-12 px-4"
        >
          — The Ahmad Family, New to HQA{" "}
        </motion.p>

        {/* Bottom Divider with comma icon */}
        <div className="relative w-full flex items-center justify-center mt-8">
          {/* Left divider line */}
          <div className="flex-grow h-px bg-white mr-4 max-w-[50%]"></div>

          {/* Comma icon container */}
          <div className="flex-shrink-0 px-4">
            <img
              src="/admission/wcommaa.png"
              alt="Quote Icon"
              className="h-10 w-10 mx-auto"
            />
          </div>

          {/* Right divider line */}
          <div className="flex-grow h-px bg-white ml-4 max-w-[50%]"></div>
        </div>
      </div>
    </section>
  );
};

export default Slogan;
