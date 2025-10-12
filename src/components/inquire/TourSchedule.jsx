import { SlideLeft, SlideRight, SlideUp } from "../../../utility/animation";
import { motion } from "framer-motion";
const TourSchedule = () => {
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const times = [
    ["9:10 AM", "9:10 AM", "9:00 AM", "9:10 AM", "9:10 AM", "9:00 AM"],
    ["10:45 AM", "10:45 AM", "9:50 AM", "10:45 AM", "10:45 AM", "9:55 AM"],
    ["11:25 AM", "11:25 AM", "10:55 AM", "11:25 AM", "11:25 AM", "10:50 AM"],
    ["12:50 PM", "12:50 PM", "11:45 AM", "12:50 PM", "12:50 PM", ""],
    ["1:40 PM", "1:40 PM", "", "1:40 PM", "1:40 PM", ""],
    ["2:30 PM", "2:30 PM", "", "2:30 PM", "2:30 PM", ""],
  ];

  return (
    <section className="w-full px-4 sm:px-6 md:px-10 py-12 bg-[#fdfdfd] font-serif">
      {/* Heading */}
      <motion.h2
        variants={SlideRight(0.3)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl lg:text-5xl italic text-[#00285E] mb-6"
      >
        Campus Tour <span className="text-[#CF3528]">Schedule</span>
      </motion.h2>

      <motion.p
        variants={SlideRight(0.6)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-gray-800 text-xl leading-relaxed mb-6"
      >
        To ensure a meaningful visit, our student tour guides are available
        during the school day when classes are in session. Tours are scheduled
        to align with our academic schedule, giving you a real-time glimpse into
        campus life.
      </motion.p>

      <motion.p
        variants={SlideRight(0.9)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-gray-700 italic text-xl leading-relaxed mb-10"
      >
        Below is our current tour availability for families applying for the
        2025–2026 school year:
      </motion.p>

      {/* Table */}
      <motion.div
        variants={SlideUp(1.1)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="overflow-x-auto scrollbar-hide "
      >
        <table className="w-full min-w-[500px] sm:min-w-[600px] md:min-w-[700px] lg:min-w-full text-sm sm:text-base md:text-lg mb-12 italic border-collapse rounded-xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
          <thead>
            <tr className="bg-[#00285E] text-white">
              {days.map((day, i) => (
                <th
                  key={i}
                  className="px-3 sm:px-4 py-3 border border-gray-300 text-center font-medium whitespace-nowrap"
                >
                  {day}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {times.map((row, i) => (
              <tr
                key={i}
                className={`${
                  i % 2 === 0 ? "bg-white" : "bg-[#F2F7FF]"
                } text-gray-800`}
              >
                {row.map((time, j) => (
                  <td
                    key={j}
                    className="px-3 sm:px-4 py-3 border border-gray-300 text-center whitespace-nowrap"
                  >
                    {time || "-"}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </section>
  );
};

export default TourSchedule;
