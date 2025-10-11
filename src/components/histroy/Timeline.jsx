import React from "react";

const Books = () => {
  return (
    <div>
      <div className="bg-[#00295e] text-white px-10 py-12 space-y-5 relative font-serif">
        {/* Horizontal Timeline Line */}
        <div className="absolute left-0 right-0 top-1/2 transform translate-y-26 h-[2px] bg-white "></div>

        {/* HEADINGS */}
        <div className="text-center space-y-8">
          <h1 className="text-3xl italic md:text-5xl ">A Timeline of Growth</h1>
          <h3 className="text-2xl md:text-3xl italic">
            The Milestones That Define Who We Are
          </h3>
          <p>
            Every chapter in our story reflects a step toward excellence —
            powered by purpose, prayer, and perseverance.
          </p>
        </div>

        {/* TIMELINE SECTIONS */}
        <div className="space-y-20 relative mt-10">
          {/* CARD 1 (Below Timeline) */}
          <div className="flex items-stretch justify-start relative ">
            {/* IMAGE LEFT */}
            <div className="relative w-[400px] flex-shrink-0">
              <div className="bg-[#00295e] absolute p-3.5 text-white">
                1990s–2000s: Vision Ignited
              </div>
              <img
                className="w-full h-full object-cover"
                src="/histroy/book.jpg"
                alt=""
              />
            </div>

            {/* TEXT RIGHT */}
            <div className="bg-white text-black p-4 w-[400px] space-y-5 relative flex flex-col justify-between">
              <div>
                <h1 className="text-4xl">Where Dreams Took Root</h1>
                <ul className="list-disc p-1.5 space-y-3.5">
                  <li>
                    Pioneering scholars and community leaders envision a school
                    that fuses Islamic values with academic rigor.
                  </li>
                  <li>
                    A handful of dedicated families gather in a leased space,
                    planting the seeds of HQA’s legacy.
                  </li>
                </ul>
              </div>

              {/* Circle + Triangle below card 1 */}
              <div className="absolute left-1/2 transform -translate-x-1/2 top-full flex flex-col items-center">
                {/* Triangle */}
                <div className="w-0 h-0 border-l-[10px] border-r-[10px] border-t-[15px] border-l-transparent border-r-transparent border-t-white"></div>

                {/* Outer + Inner Circle */}
                <div className="relative flex items-center justify-center">
                  {/* Outer Circle with border */}
                  <div className="w-10 h-10 rounded-full border-4 border-white flex items-center justify-center">
                    {/* Inner filled white circle */}
                    <div className="w-5 h-5 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CARD 2 (Above Timeline) */}
          <div className="flex justify-end items-stretch relative mt-10 ">
            {/* IMAGE LEFT */}
            <div className="relative w-[400px] flex-shrink-0">
              <div className="bg-[#00295e] absolute p-3.5 text-white">
                2010s–2020s: Expansion & Legacy
              </div>
              <img
                className="w-full h-full object-cover"
                src="/histroy/book.jpg"
                alt=""
              />
            </div>

            {/* TEXT RIGHT */}
            <div className="bg-white text-black p-4 w-[400px] space-y-5 relative z-10 flex flex-col justify-between">
              <div>
                <h1 className="text-4xl">Growth Beyond Boundaries</h1>
                <ul className="list-disc p-1.5 space-y-3.5">
                  <li>
                    Expanding campuses and enriching programs to empower the
                    next generation. Enrollment grows steadily as trust in our
                    mission deepens.
                  </li>
                  <li>
                    Launch of our signature Hifz-ul-Qur’an program alongside a
                    strong STEM curriculum.
                  </li>
                </ul>
              </div>

              {/* Circle + Triangle ABOVE card 2 */}
              <div className="absolute left-1/2 transform -translate-x-1/2 -top-16 flex flex-col items-center">
                {/* Outer + Inner Circle */}
                <div className="relative flex items-center justify-center">
                  {/* Outer Circle with border */}
                  <div className="w-10 h-10 rounded-full border-4 border-white flex items-center justify-center">
                    {/* Inner filled white circle */}
                    <div className="w-5 h-5 bg-white rounded-full"></div>
                  </div>
                </div>

                {/* Taller Triangle (inverted, bigger) */}
                <div className="w-0 h-0 border-l-[12px] border-r-[12px] border-b-[24px]  border-l-transparent border-r-transparent border-b-white"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Books;
