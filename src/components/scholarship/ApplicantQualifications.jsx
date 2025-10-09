import React from "react";

const ApplicantQualifications = () => {
  return (
    <section className="w-full px-10 py-12 bg-[#fdfdfd] font-serif">
      {/* Heading */}
      <h2 className="text-center text-3xl sm:text-4xl lg:text-5xl text-[#00285E] mb-12">
        Applicant Qualifications
      </h2>

      {/* Intro Paragraph */}
      <p className="text-gray-800 text-1xl sm:text-2xl mb-4 max-w-4xl mx-auto text-left pl-2 sm:pl-14">
        To be considered, applicants must:
      </p>

      {/* Requirements List */}
      <ul className="list-disc pl-8 space-y-2 text-gray-800 text-xl  max-w-3xl mx-auto mb-8">
        <li>
          Be an HQA student for at least{" "}
          <span className="text-[#CF3528] font-semibold">one year</span>.
        </li>
        <li>
          Have memorized the following{" "}
          <span className="text-[#CF3528] font-semibold">
            minimum Ajzaa per grade level
          </span>
          .
        </li>
      </ul>

      {/* Table */}
      <div className="overflow-x-auto flex justify-center mb-8">
        <table className="w-full max-w-3xl border border-gray-300 rounded-lg text-sm sm:text-base border-collapse table-fixed shadow-[12px_12px_20px_rgba(0,0,0,0.5)] mb-12">
          <thead>
            <tr className="bg-[#00285E] text-white">
              <th className="px-4 py-2 border-r border-gray-300 text-center w-1/2">
                Grade Level
              </th>
              <th className="px-4 py-2 text-center w-1/2">
                Minimum Ajzaa Memorized
              </th>
            </tr>
          </thead>
          <tbody>
            {[
              { grade: "1st Grade", ajzaa: "1" },
              { grade: "2nd Grade", ajzaa: "2" },
              { grade: "3rd Grade", ajzaa: "4" },
              { grade: "4th Grade", ajzaa: "6" },
              { grade: "5th Grade", ajzaa: "9" },
              { grade: "Middle School", ajzaa: "15" },
              { grade: "High School", ajzaa: "20" },
            ].map((row, i) => (
              <tr key={i} className="bg-[#F2F7FF] text-gray-800">
                <td className="px-4 py-2 border-r border-gray-300 border-b text-center w-1/2">
                  {row.grade}
                </td>
                <td className="px-4 py-2 border-b border-gray-300 text-center w-1/2">
                  {row.ajzaa}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Good Standing */}
      <div className="max-w-4xl mx-auto">
        <ul className="list-disc text-gray-800 text-xl sm:text-2xl mb-4 max-w-4xl mx-auto text-left pl-5 sm:pl-6">
          <li>Be in good standing:</li>
        </ul>

        <ul className="list-disc pl-10 space-y-2 text-gray-800 text-xl ">
          <li>
            Discipline and character must reflect HQA’s values: <br />
            <span className="italic text-[#CF3528]">
              “Oh Allah, make us leaders of the righteous.”
            </span>
          </li>
          <li>
            Academically strong: Students may have only{" "}
            <span className="text-[#CF3528]">
              one B+ in the four core subjects (English, Math, Science, Social
              Studies).{" "}
            </span>
          </li>
          <li>All other grades must be A </li>
        </ul>
      </div>
    </section>
  );
};

export default ApplicantQualifications;
