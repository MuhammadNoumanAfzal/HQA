import React, { useRef, useEffect, useState } from "react";

const ITBSSection = () => {
  const contentRef = useRef(null);
  const [textHeight, setTextHeight] = useState(0);

  const content = [
    {
      heading: "Language Skills",
      items: [
        "Vocabulary",
        "Reading Comprehension",
        "Writing Mechanics & Grammar",
        "Spelling",
      ],
    },
    {
      heading: "Mathematics",
      items: ["Math Concepts", "Computation Skills", "Problem Solving"],
    },
    {
      heading: "Science & Social Studies",
      items: [
        "General Science Understanding",
        "Social Studies Concepts",
        "Study Skills & Use of Resources",
      ],
    },
  ];

  useEffect(() => {
    if (contentRef.current) {
      setTextHeight(contentRef.current.clientHeight);
    }

    const handleResize = () => {
      if (contentRef.current) {
        setTextHeight(contentRef.current.clientHeight);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="w-full py-12 px-10 font-serif  pb-28">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Left side - Text Content */}
        <div className="flex flex-col gap-6" ref={contentRef}>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl italic text-[#CF3528]">
            Iowa Test of Basic Skills{" "}
            <span className="text-[#00285E]">(ITBS)</span>
          </h2>

          <p className="text-gray-800 text-base sm:text-lg lg:text-xl">
            In addition to STAAR, students in Grades 6–8 take the Iowa Test of
            Basic Skills, a nationally recognized benchmark to measure academic
            progress.
          </p>

          <h3 className="text-[#CF3528] text-xl sm:text-2xl lg:text-3xl italic">
            ITBS Evaluation Areas:
          </h3>

          {content.map((section, idx) => (
            <div key={idx}>
              <h4 className="text-[#00285E] text-lg sm:text-xl font-semibold mt-4">
                {section.heading}
              </h4>
              <ul className="list-disc list-inside text-gray-800 text-base sm:text-lg lg:text-xl mt-2">
                {section.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}

          <p className="text-gray-800 text-base sm:text-lg lg:text-xl mt-4">
            This dual-assessment model ensures that students are not only
            meeting state expectations but are also nationally competitive.
          </p>
        </div>

        {/* Right side - Images */}
        <div className="flex flex-col gap-4" style={{ height: textHeight }}>
          {/* Large top image */}
          <img
            src="/middel/t1.jpg"
            alt="ITBS Image 1"
            className="w-full object-cover rounded-lg shadow-md flex-[0.5]"
          />
          {/* Two side-by-side images */}
          <div className="grid grid-cols-2 gap-4 flex-[0.5]">
            <img
              src="/middel/t2.jpg"
              alt="ITBS Image 2"
              className="w-full h-full object-cover rounded-lg shadow-md"
            />
            <img
              src="/middel/t3.jpg"
              alt="ITBS Image 3"
              className="w-full h-full object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ITBSSection;
