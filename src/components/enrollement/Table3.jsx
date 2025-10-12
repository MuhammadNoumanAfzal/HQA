import {
  FadeIn,
  SlideLeft,
  SlideRight,
  SlideUp,
} from "../../../utility/animation";
import { motion } from "framer-motion";
const Table3 = () => {
  return (
    <section className="w-full px-4 sm:px-6 md:px-10 py-12 bg-[#fdfdfd] font-serif">
      {/* Heading */}
      <motion.h2
        variants={SlideRight(0.3)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center text-3xl italic sm:text-4xl lg:text-5xl text-[#00285E] mb-8 "
      >
        Early Childhood Program <br />
        <span className="text-[#CF3528] text-3xl">
          (Pre-K Eligibility by Age)
        </span>
      </motion.h2>

      <motion.p
        variants={SlideLeft(0.5)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center max-w-4xl mx-auto text-gray-800 text-xl  leading-relaxed"
      >
        Children are placed according to their age as of September 1st of the
        enrolment year.
      </motion.p>

      <motion.p
        variants={SlideRight(0.7)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center max-w-3xl italic mx-auto text-gray-700 text-xl sm:text-2xl leading-relaxed pt-16"
      >
        Program Age Requirement
      </motion.p>

      {/* Table Container */}
      <motion.div
        variants={SlideUp(0.9)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex justify-center pb-10 pt-4"
      >
        <table className="w-full max-w-3xl text-xl   italic border-collapse overflow-hidden shadow-[0_15px_30px_5px_rgba(0,0,0,0.25),0_5px_10px_rgba(0,0,0,0.22),inset_0_1px_0_rgba(255,255,255,0.2)]">
          <tbody>
            {[
              { cladd: "Pre-K1", age: "1 Year Old" },
              { cladd: "Pre-K2", age: "2 Year Old" },
              { cladd: "Pre-K3", age: "3 Year Old" },
              { cladd: "Pre-K4", age: "4 Year Old" },
              { cladd: "Kindergarten ", age: "5 Year Old" },
            ].map((row, i) => (
              <tr
                key={i}
                className={`${
                  i % 2 === 0 ? "bg-[#F2F7FF]" : "bg-white"
                } text-gray-800`}
              >
                <td className="px-4 py-3 border-r border-b border-gray-300 text-center">
                  {row.cladd}
                </td>
                <td className="px-4 py-3 border-b border-gray-300 text-center">
                  {row.age}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </section>
  );
};

export default Table3;
