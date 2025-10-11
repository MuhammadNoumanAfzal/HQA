import React from "react";
import { motion } from "framer-motion";
import { SlideLeft, SlideRight, SlideUp } from "../../../utility/animation";

const Message = () => {
  return (
    <section className="w-full px-10 py-12 font-serif">
      {/* Paragraph with red border-left */}
      <div className="mb-6 md:mb-10 lg:mb-12">
        <motion.p
          variants={SlideUp(0.3)}
          initial="hidden"
          whileInView="visible"
          className="border-l-4 md:border-l-[6px] border-[#CF3528] pl-3 md:pl-4 italic text-xl sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-[#00285E] leading-relaxed"
        >
          Each inquiry and application to Houston Quran Academy is met with
          personal care, ensuring a smooth, supportive, and stress-free journey
          for both you and your child from the very first step.
        </motion.p>
      </div>

      {/* Two-column layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 md:h-[500px] lg:h-[450px]">
        {/* Left: Image - Order changes on mobile */}
        <div className="order-2 md:order-1 w-full h-full">
          <img
            src="/admission/msg.jpg"
            alt="HQA Admissions Team"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right: Text Card - Order changes on mobile */}
        <div className="order-1 md:order-2 bg-[#00285E] flex flex-col p-4 sm:p-6 md:p-8 lg:p-10 w-full h-full">
          {/* Heading with white border-left */}
          <motion.h2
            variants={SlideRight(0.5)}
            initial="hidden"
            whileInView="visible"
            className="border-l-4 md:border-l-[6px] border-white pl-2 md:pl-3 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl italic text-white mb-4 md:mb-6 leading-snug"
          >
            A Heartfelt Welcome from the HQA Admissions Team
          </motion.h2>

          {/* Three paragraphs */}
          <div className="space-y-3 md:space-y-4">
            <motion.p
              variants={SlideRight(0.7)}
              initial="hidden"
              whileInView="visible"
              className="text-white text-sm sm:text-base md:text-lg leading-relaxed"
            >
              At Houston Quran Academy, every child's journey begins with
              purpose and promise. Our Admissions Team is here to guide you with
              warmth, care, and clarity as you explore a school where faith
              meets excellence and learning inspires leadership.
            </motion.p>
            <motion.p
              variants={SlideRight(0.9)}
              initial="hidden"
              whileInView="visible"
              className="text-white text-sm sm:text-base md:text-lg leading-relaxed"
            >
              Step into a nurturing community where students flourish —
              academically, spiritually, and socially. This is more than
              enrollment; it's the start of a meaningful chapter.
            </motion.p>
            <motion.p
              variants={SlideRight(1.1)}
              initial="hidden"
              whileInView="visible"
              className="text-white text-sm sm:text-base md:text-lg leading-relaxed font-semibold"
            >
              We're honored to welcome you to the HQA family — where tomorrow's
              leaders rise today.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Message;
