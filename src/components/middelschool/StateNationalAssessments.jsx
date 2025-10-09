import { SlideUp, SlideLeft, SlideRight } from "../../../utility/animation";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const StateNationalAssessments = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="w-full flex flex-col items-center py-12 px-10 font-serif"
    >
      {/* Heading: Half Blue Half Red */}
      <motion.h2
        variants={SlideUp(0.6)}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="text-4xl md:text-5xl italic text-center mb-6"
      >
        <span className="text-[#00285E]">State and National</span>{" "}
        <span className="text-[#CF3528]"> Assessments</span>
      </motion.h2>

      {/* Paragraph */}
      <motion.p
        variants={SlideUp(0.8)}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="text-center text-gray-800 max-w-2xl text-xl mb-10"
      >
        At HQA, we prepare students to succeed in both state-mandated exams and
        national standardized assessments.
      </motion.p>

      {/* Two-column layout */}
      <div className="flex flex-col md:flex-row  gap-8">
        {/* Left 40%: Image */}
        <motion.div
          variants={SlideLeft(0.8)}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="md:w-2/5 w-full"
        >
          <img
            src="/middel/state.jpg" // replace with your image
            alt="STAAR Exam"
            className="w-full h-90 rounded-lg object-cover"
          />
        </motion.div>

        {/* Right 60%: Content */}
        <motion.div
          variants={SlideRight(0.8)}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="md:w-3/5 w-full flex flex-col justify-start"
        >
          <h3 className="text-4xl italic  text-[#00285E] mb-8">
            <span className="text-[#CF3528]">STAAR</span> (State of Texas
            Assessments of Academic Readiness)
          </h3>
          <p className="text-gray-800 text-xl max-w-xl mb-6">
            HQA students in Middle School participate in annual STAAR testing
            for:
          </p>
          <ul className="list-disc list-inside text-gray-800 space-y-2 pl-2">
            <li>Mathematics: Grades 6–8</li>
            <li>Reading Language Arts (RLA): Grades 6–8</li>
            <li>Science: Grade 8</li>
            <li>Social Studies: Grade 8</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default StateNationalAssessments;
