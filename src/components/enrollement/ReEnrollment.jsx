import React from "react";

export default function ReEnrollment() {
  return (
    <section className="w-full px-6 py-24">
      <h2 className="text-center text-[#00285E] text-4xl font-serif ">
        2025–2026 Re-Enrollment <br />
        <span className="text-red-600">Checklist for Returning Students</span>
      </h2>

      <div className="flex flex-col lg:flex-row gap-6 mt-10">
        {/* Left side - 80% */}
        <div className="w-full lg:w-4/5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-[#00285E] text-white p-10 rounded-lg shadow-md">
            Submit completed Registration Form
          </div>
          <div className="bg-[#00285E] text-white p-10 rounded-lg shadow-md">
            Review the Digital Parent’s Handbook
          </div>
          <div className="bg-[#00285E] text-white p-10 rounded-lg shadow-md">
            Submit the Liability Form
          </div>
          <div className="bg-[#00285E] text-white p-10 rounded-lg shadow-md">
            Sign the Parent’s Acceptance of Handbook and School Rules
          </div>
          <div className="bg-[#00285E] text-white p-10 rounded-lg shadow-md">
            Provide Updated Immunization Records
          </div>
          <div className="bg-[#00285E] text-white p-10 rounded-lg shadow-md">
            Book & Technology Fee: $400 (Refundable)
          </div>
        </div>

        {/* Right side - 20% */}
        <div className="w-full lg:w-1/5 bg-[#E3F1FF] text-gray-800 rounded-lg shadow-md p-6">
          <h3 className="font-bold mb-4">
            Early Registration Fee (Non-refundable):
          </h3>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>$200 if paid between Jan 13 – Jan 31, 2025</li>
            <li>$250 if paid after Jan 31, 2025</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
