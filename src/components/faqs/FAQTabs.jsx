import React, { useMemo, useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

export default function FAQTabs({ data }) {
  const defaultData = useMemo(
    () => ({
      Admissions: [
        {
          q: "What grades does HQIA offer?",
          a: "We currently offer classes from Preschool (3 months+) through 12th grade.",
        },
        {
          q: "What is the admission process?",
          a: "Complete the online application, submit documents, and schedule an assessment.",
        },
        {
          q: "Is there an entrance test?",
          a: "Yes, applicants take an age-appropriate assessment for placement.",
        },
        {
          q: "When does enrollment begin?",
          a: "Rolling admissions are open year-round with priority for early applications.",
        },
        {
          q: "What documents are required?",
          a: "Birth certificate, immunization, transcripts, and parent/guardian ID.",
        },
        {
          q: "Are interviews part of the process?",
          a: "Yes, an interview with students and parents may be required.",
        },
      ],
      Curriculum: [
        {
          q: "What curriculum do you follow?",
          a: "Standards-aligned academics integrated with Quranic and Islamic studies.",
        },
        {
          q: "Are AP or honors courses offered?",
          a: "Yes, select honors and AP courses are offered in upper grades.",
        },
        {
          q: "How is technology integrated?",
          a: "Students use modern learning platforms and digital resources.",
        },
        {
          q: "Are electives available?",
          a: "Yes, electives include Arabic, art, and leadership development.",
        },
        {
          q: "How do you assess students?",
          a: "Through tests, projects, and participation assessments.",
        },
        {
          q: "Do students get report cards?",
          a: "Yes, progress reports are shared quarterly.",
        },
      ],
      "Tuition & Aid": [
        {
          q: "How is tuition billed?",
          a: "Annually, with monthly payment plans available.",
        },
        {
          q: "Do you offer scholarships?",
          a: "Yes, need-based and limited merit scholarships are offered.",
        },
        {
          q: "Are sibling discounts available?",
          a: "Yes, discounts apply for families with multiple enrolled students.",
        },
        {
          q: "Is financial aid guaranteed?",
          a: "No, aid depends on availability and demonstrated need.",
        },
        {
          q: "How to apply for aid?",
          a: "Submit an aid application with supporting documents.",
        },
        {
          q: "What payment methods are accepted?",
          a: "Credit card, bank transfer, and checks.",
        },
      ],
      "Student Life": [
        {
          q: "What extracurriculars are available?",
          a: "Clubs, athletics, Quran competitions, and community service.",
        },
        {
          q: "Is transportation provided?",
          a: "Limited bus routes are available depending on demand.",
        },
        {
          q: "Are there field trips?",
          a: "Yes, educational and recreational trips are scheduled annually.",
        },
        {
          q: "Do students participate in competitions?",
          a: "Yes, local and national academic and Quran competitions.",
        },
        {
          q: "Are there leadership opportunities?",
          a: "Yes, student council and mentoring programs.",
        },
        {
          q: "What about sports?",
          a: "Basketball, soccer, and physical education are offered.",
        },
      ],
      Facilities: [
        {
          q: "What facilities are available?",
          a: "Modern classrooms, labs, library, and prayer areas.",
        },
        {
          q: "Is there a cafeteria?",
          a: "Yes, providing healthy meal options.",
        },
        {
          q: "Do you have science labs?",
          a: "Yes, fully equipped labs for hands-on learning.",
        },
        {
          q: "Are there computer labs?",
          a: "Yes, with updated systems and internet access.",
        },
        {
          q: "Do you have playgrounds?",
          a: "Yes, safe and supervised play areas are available.",
        },
        {
          q: "Is the campus secure?",
          a: "Yes, with surveillance and security staff.",
        },
      ],
      Community: [
        {
          q: "How do parents get involved?",
          a: "Through PTA, volunteering, and school events.",
        },
        {
          q: "Do you host community events?",
          a: "Yes, cultural, academic, and religious programs are hosted yearly.",
        },
        {
          q: "Is there alumni engagement?",
          a: "Yes, alumni often return as mentors and supporters.",
        },
        {
          q: "Do you collaborate with mosques?",
          a: "Yes, for joint educational and community programs.",
        },
        {
          q: "Are service projects part of the curriculum?",
          a: "Yes, students participate in charity and service.",
        },
        {
          q: "How do you support new families?",
          a: "Orientation sessions and mentorship programs.",
        },
      ],
    }),
    []
  );

  const tabs = Object.keys(data || defaultData);
  const content = data || defaultData;

  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [openIndexByTab, setOpenIndexByTab] = useState({});
  const faqs = content[activeTab] || [];
  const openIndex = openIndexByTab[activeTab] ?? -1;

  function toggle(i) {
    setOpenIndexByTab((prev) => ({
      ...prev,
      [activeTab]: prev[activeTab] === i ? -1 : i,
    }));
  }

  return (
    <section className=" py-12 px-10 font-serif">
      <div className="w-full max-w-5xl mx-auto">
        {/* Tabs */}
        <div className="flex flex-wrap gap-3 justify-center mb-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={
                "px-5 py-2  cursor-pointer border text-sm sm:text-base font-medium transition-all " +
                (activeTab === tab
                  ? "bg-[#00285E] text-white border-[#00285E] shadow-lg"
                  : "bg-white text-[#252626] border-gray-300 hover:bg-gray-100")
              }
              aria-pressed={activeTab === tab}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Heading */}
        <h2 className="text-center text-[#00285E] text-3xl sm:text-4xl italic font-semibold mb-8">
          {activeTab}
        </h2>

        {/* FAQ Cards */}
        <div className=" border border-gray-200 bg-[#f3f4ff] space-y-8 shadow-md overflow-hidden">
          {faqs.map((item, i) => {
            const isOpen = i === openIndex;
            return (
              <div
                key={i}
                className={
                  "border-b border-gray-100 transition " +
                  (isOpen ? "bg-white shadow-sm" : "bg-[f3f4ff]")
                }
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center gap-3 text-left px-4 sm:px-6 py-4 hover:bg-gray-100 transition"
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                >
                  <span className="text-xl font-medium text-gray-800 w-8 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1 text-gray-800 font-medium">
                    {item.q}
                  </span>
                  <span className="text-gray-800">
                    {isOpen ? <FiMinus /> : <FiPlus />}
                  </span>
                </button>
                <div
                  id={`faq-panel-${i}`}
                  className={
                    "grid transition-all duration-300 ease-in-out " +
                    (isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0")
                  }
                >
                  <div className="overflow-hidden">
                    <div className="px-12 sm:px-14 pb-5 text-gray-600 leading-relaxed">
                      {item.a}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
