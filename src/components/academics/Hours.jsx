import React from "react";

const Hours = () => {
  return (
    <section className="w-full px-10 py-12 bg-[#BCDDFC] font-serif">
      {/* Heading */}
      <h2 className="text-center text-3xl italic sm:text-4xl lg:text-5xl text-[#00285E] mb-6">
        School Hours
      </h2>

      {/* Table Container */}
      <div className="flex justify-center py-8">
        <table className="w-full max-w-4xl text-sm sm:text-base border-collapse rounded-2xl overflow-hidden shadow-[0_15px_30px_5px_rgba(0,0,0,0.25),0_5px_10px_rgba(0,0,0,0.22),inset_0_1px_0_rgba(255,255,255,0.2)]">
          <thead>
            <tr className="bg-[#00285E] text-white">
              <th className="px-4 py-3 text-center border-r border-gray-300">
                Day
              </th>
              <th className="px-4 py-3 text-center">Hours</th>
            </tr>
          </thead>
          <tbody>
            {[
              { day: "Monday – Thursday", time: "8:00 AM – 3:00 PM" },
              { day: "Friday", time: "8:00 AM – 1:00 PM" },
            ].map((row, i) => (
              <tr
                key={i}
                className={`${
                  i % 2 === 0
                    ? "bg-[#F2F7FF] text-black"
                    : "bg-white text-gray-800"
                }`}
              >
                <td className="px-4 py-3 border-r border-b border-gray-300 text-center font-medium">
                  {row.day}
                </td>
                <td className="px-4 py-3 border-b border-gray-300 text-center">
                  {row.time}
                </td>
              </tr>
            ))}

            {/* Full-width note row */}
            <tr className="bg-white text-gray-800">
              <td
                colSpan="2"
                className="px-4 py-4 border-t border-gray-300 text-center italic"
              >
                Extended Day Option: Until 5:00 PM (for working families)
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Hours;
