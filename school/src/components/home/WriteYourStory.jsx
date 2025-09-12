import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const WriteYourStory = () => {
  const ref = useRef(null);

  // Track scroll progress for this section
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Background image animation
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.05, 0.5, 1],
    [0, 1, 1, 0.6]
  );
  const scale = useTransform(scrollYProgress, [0, 1], [1.5, 1]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen font-serif flex items-center justify-center overflow-hidden bg-[#BCDDFC] px-4 sm:px-6"
    >
      {/* Background Image */}
      <motion.img
        src="/story.jpg"
        alt="Write your story background"
        style={{ scale, opacity }}
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Content */}
      <div className="relative text-center max-w-3xl z-10">
        {/* Heading */}
        <motion.h1
          className="text-4xl xs:text-3xl sm:text-4xl md:text-5xl text-[#CF3528] italic mb-4 sm:mb-6 leading-snug"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Are You Ready to Write <br />
          Your Story?
        </motion.h1>

        {/* Paragraph */}
        <motion.p
          className="text-xl xs:text-3xl sm:text-base md:text-lg text-gray-800 leading-relaxed max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          At Houston Quran Academy, we don’t just prepare students for exams—we
          prepare them for life. With Allah as their guide and knowledge as
          their tool, they’ll thrive in both Dunya and Akhirah.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="mt-6 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <button className="bg-[#012974] text-white h-12 w-full sm:w-60 rounded-md font-medium cursor-pointer hover:bg-transparent hover:text-[#012974] border-2 border-[#012974] transition duration-300">
            Schedule a Campus Tour
          </button>

          <button className="border-2 border-[#012974] h-12 w-full sm:w-60 rounded-md font-medium text-[#012974] hover:bg-[#012974] hover:text-white transition duration-300">
            Apply Now for Fall 2025
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default WriteYourStory;
