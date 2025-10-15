import { SlideLeft, SlideRight, SlideUp } from "../../../utility/animation";
import { motion } from "framer-motion";
const Table1 = () => {
  return (
    <section className="w-full px-4 sm:px-6 md:px-10 py-12 bg-[#fdfdfd] font-serif">
      {/* Heading */}
      <motion.h2
        variants={SlideRight(0.3)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center text-3xl italic sm:text-4xl lg:text-5xl text-[#00285E] mb-8 sm:mb-12"
      >
        <span className="text-[#CF3528]">Annual</span> Tuition Rates
      </motion.h2>

      {/* Table Container */}
      <motion.div
        variants={SlideUp(0.5)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex justify-center py-10"
      >
        <table className="w-full max-w-4xl text-sm sm:text-base border-collapse rounded-2xl overflow-hidden shadow-[0_15px_30px_5px_rgba(0,0,0,0.25),0_5px_10px_rgba(0,0,0,0.22),inset_0_1px_0_rgba(255,255,255,0.2)]">
          <thead>
            <tr className="bg-[#00285E] text-white">
              <th className="px-4 py-5 text-center border-r border-gray-300">
                Grade Level
              </th>
              <th className="px-4 py-5 text-center border-r border-gray-300">
                Monthly (Aug-May)
              </th>
              <th className="px-4 py-3 text-center">Annual Tuition</th>
            </tr>
          </thead>
          <tbody>
            {[
              { grade: "KG - 5th Grade", ajzaa: "$725", tuition: "$7250" },
              { grade: "6th - 12th Grade", ajzaa: "$750", tuition: "$7500" },
            ].map((row, i) => (
              <tr key={i} className="bg-[#F2F7FF] text-gray-800">
                <td className="px-4 py-5 border-r border-b border-gray-300 text-center">
                  {row.grade}
                </td>
                <td className="px-4 py-5 border-r border-b border-gray-300 text-center">
                  {row.ajzaa}
                </td>
                <td className="px-4 py-5 border-b border-gray-300 text-center">
                  {row.tuition}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>

      {/* Paragraph Below Table */}
      <motion.p
        variants={SlideLeft(0.7)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto text-gray-700 text-base leading-relaxed"
      >
        *Tuition is divided into 10 monthly payments, due on the 5th of each
        month from August to May.
      </motion.p>
    </section>
  );
};

export default Table1;
