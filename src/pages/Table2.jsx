import React from "react";

const Table2 = () => {
  return (
    <section className="w-full px-4 sm:px-6 md:px-10 py-12 bg-[#fdfdfd] font-serif">
      {/* Heading */}
      <h2 className="text-center text-3xl italic sm:text-4xl lg:text-5xl text-[#00285E] mb-8 sm:mb-12">
        <span className="text-[#CF3528]">One-Time</span> Annual Fees
      </h2>

      {/* Table Container */}
      <div className="flex justify-center py-10">
        <table className="w-full max-w-4xl text-sm sm:text-base border-collapse rounded-2xl overflow-hidden shadow-[0_15px_30px_5px_rgba(0,0,0,0.25),0_5px_10px_rgba(0,0,0,0.22),inset_0_1px_0_rgba(255,255,255,0.2)]">
          <thead>
            <tr className="bg-[#00285E] text-white">
              <th className="px-4 py-3 text-center border-r border-gray-300">
                Fee type
              </th>
              <th className="px-4 py-3 text-center border-r border-gray-300">
                Amount
              </th>
              <th className="px-4 py-3 text-center">Notes</th>
            </tr>
          </thead>
          <tbody>
            {[
              {
                fee: "Book & Technology Fee",
                amount: "$350",
                notes: "One- Time, Per Student",
              },
              {
                fee: "Registration Fee",
                amount: "$200",
                notes: "One- Time, Per Student",
              },
            ].map((row, i) => (
              <tr key={i} className="bg-[#F2F7FF] text-gray-800">
                <td className="px-4 py-3 border-r border-b border-gray-300 text-center">
                  {row.fee}
                </td>
                <td className="px-4 py-3 border-r border-b border-gray-300 text-center">
                  {row.amount}
                </td>
                <td className="px-4 py-3 border-b border-gray-300 text-center">
                  {row.notes}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Paragraph Below Table */}
      <p className="text-center max-w-3xl mx-auto text-gray-700 text-sm sm:text-base leading-relaxed">
        These fees are non-refundable and help cover learning resources and
        student systems.
      </p>
    </section>
  );
};

export default Table2;
