import {
  SlideLeft,
  SlideRight,
  SlideButton,
  SlideUp,
} from "../../../utility/animation";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Vision() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      aria-label="Hero - Houston Quran Academy"
      ref={ref}
      className="relative bg-cover bg-center flex justify-center items-center text-center min-h-[60vh] sm:min-h-[70vh] lg:min-h-[80vh] px-4 sm:px-6 md:px-10"
      style={{ backgroundImage: "url('/about/campus.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/70" aria-hidden="true" />

      {/* Content */}
      <div className="relative w-full max-w-6xl space-y-6">
        {/* Main Title */}
        <motion.p
          variants={SlideUp(0.9)}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-blue-900 text-xl sm:text-3xl md:text-5xl lg:text-6xl italic leading-snug"
        >
          Rooted in Legacy,{" "}
          <span className="text-red-600">Growing with Vision</span>
        </motion.p>

        {/* Subtitle */}
        <motion.p
          variants={SlideUp(1.1)}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-2 sm:mt-4 text-2xl text-[#353535] italic"
        >
          From a Small Room to a Legacy of Light
        </motion.p>

        {/* Paragraph 1 */}
        <motion.p
          variants={SlideUp(1.2)}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-4 text-base md:text-lg lg:text-xl leading-relaxed max-w-[850px] mx-auto px-2 sm:px-4"
        >
          <span className="font-bold not-italic font-[Stika]">In 2008,</span>{" "}
          what began as a humble Quran memorization program in a
          <span className="font-bold font-[Stika]"> 2,500 sq ft</span> room with
          just 10 students has grown into one of Houston’s most respected
          Islamic academies.
        </motion.p>

        {/* Paragraph 2 */}
        <motion.p
          variants={SlideUp(1.3)}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-4 text-base md:text-lg lg:text-xl font-[Stika] leading-relaxed max-w-[900px] mx-auto px-2 sm:px-4"
        >
          With the vision of the Muslim American Society (MAS) and the
          dedication of leaders like Dr. Main Alqudah and Dr. Hamed Ghazali, HQA
          transitioned from Al Noor Islamic Academy into a thriving institution
          combining faith and academic excellence.
        </motion.p>
      </div>
    </section>
  );
}
