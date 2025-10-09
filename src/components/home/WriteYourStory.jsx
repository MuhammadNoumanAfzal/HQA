import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const WriteYourStory = () => {
  const ref = useRef(null);

  // Track scroll progress
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

  // Text color animation
  const textColor = useTransform(opacity, [0, 1], ["#012974", "#FFFFFF"]);
  const headingColor = useTransform(opacity, [0, 1], ["#CF3528", "#FFFFFF"]);

  // Button background & text colors
  const buttonBg = useTransform(opacity, [0, 1], ["#012974", "#CF3528"]);
  const buttonText = useTransform(opacity, [0, 1], ["#FFFFFF", "#FFFFFF"]);
  const buttonBorder = useTransform(opacity, [0, 1], ["#012974", "#CF3528"]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen font-serif flex items-center justify-center overflow-hidden bg-[#BCDDFC] px-4 sm:px-6"
    >
      {/* Background Image */}
      <motion.img
        src="home/story.jpg"
        alt="Write your story background"
        style={{ scale, opacity }}
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Content */}
      <div className="relative text-center max-w-3xl z-10">
        {/* Heading */}
        <motion.h1
          style={{ color: headingColor }}
          className="text-4xl xs:text-3xl sm:text-4xl md:text-5xl italic mb-4 sm:mb-6 leading-snug"
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
          style={{ color: textColor }}
          className="text-xl xs:text-3xl sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto"
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
          {/* Button 1 */}
          <motion.button
            style={{
              backgroundColor: buttonBg,
              color: buttonText,
              borderColor: buttonBorder,
            }}
            className="h-12 w-full sm:w-60 rounded-md font-medium cursor-pointer border-2 transition duration-300"
          >
            Schedule a Campus Tour
          </motion.button>

          {/* Button 2 */}
          <motion.button
            style={{
              backgroundColor: buttonBg,
              color: buttonText,
              borderColor: buttonBorder,
            }}
            className="h-12 w-full sm:w-60 rounded-md font-medium cursor-pointer border-2 transition duration-300"
          >
            Apply Now for Fall 2025
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default WriteYourStory;
