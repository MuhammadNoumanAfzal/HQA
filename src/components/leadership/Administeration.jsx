import React from "react";

const Administeration = () => {
  return (
    <div>
      <div className="py-12 px-18 space-y-5 mb-6 font-serif">
        <div className="flex flex-col justify-center items-center space-y-5 text-center">
          <h1 className="text-[#cf3527] text-3xl md:text-5xl mb-4 italic">
            School Administration
          </h1>
          <h2 className="text-2xl md:text-3xl italic mt-6  text-gray-800">
            Educators. Innovators. Role Models.
          </h2>
          <p className="w-full md:w-6xl text-justify md:text-center  text-gray-700">
            Our administration team is the engine that drives daily excellence
            at HQA. From classrooms to campus operations, they lead with
            professional expertise,{" "}
            <strong>Islamic character, and unwavering dedication.</strong>
            <br />
            <br />
            Together, they create a{" "}
            <strong>nurturing, innovative, and safe environment</strong> where
            faith and knowledge flourish side by side.
          </p>
          <h3 className="text-2xl md:text-3xl italic mb-8">
            Our Esteemed Leadership Team
          </h3>
        </div>

        <div className="relative shadow-[0_0_30px_rgba(0,0,0,0.25)] flex flex-col justify-center items-center px-10 mb-16 rounded-lg">
          {/* Blue div behind the whole card */}
          <div className="absolute -top-3 left-2 md:-left-4 z-[-1] w-[20%] h-90 rounded-[5px] shadow-xl bg-[#00285E]"></div>

          {/* Main content (image + heading + short para on desktop) */}
          <div className="flex flex-col md:flex-row justify-center items-center md:space-x-11 space-y-4 md:space-y-0">
            <img
              className="h-64 md:h-96 rounded-[8px] w-full md:w-auto max-w-xs object-cover relative z-10"
              src="/leadership/a1.jpg"
              alt="Dr. Hamed Ghazali"
            />
            <div className="w-full">
              <h1 className="text-[#00285E] italic mb-6 text-3xl">
                Dr. Hamed Ghazali
              </h1>
              <h4 className="text-[#00285E] italic mb-6 text-2xl">
                Founder and Director of Houston Quran Academy
              </h4>
              <p className="w-full hidden md:block ">
                Dr. Hamed Ghazali is the visionary founder and current director
                of Houston Quran Academy (HQA), where he has been instrumental
                in transforming the institution into a model of integrated
                Islamic and academic education. A hafiz of the Quran with a
                Ph.D. in Curriculum and Instruction from Kansas State
                University, Dr. Ghazali brings over two decades of experience in
                Islamic education, having served as a principal, superintendent,
                and imam.
                <br />
                <br />
                Since joining HQA in 2009, Dr. Ghazali has led a comprehensive
                overhaul of the school’s curriculum, expanding it beyond Quranic
                studies to include core academic subjects such as mathematics,
                science, English, social studies, physical education, and art.
                This initiative not only broadened the educational scope but
                also facilitated the school’s accreditation and significant
                growth in student enrollment.
              </p>
            </div>
          </div>

          {/* Extra paragraphs below image (always visible) */}
          <div className="w-full mt-4 space-y-4 mb-4">
            <p>
              Dr. Hamed Ghazali is the visionary founder and current director of
              Houston Quran Academy (HQA), where he has been instrumental in
              transforming the institution into a model of integrated Islamic
              and academic education. A hafiz of the Quran with a Ph.D. in
              Curriculum and Instruction from Kansas State University, Dr.
              Ghazali brings over two decades of experience in Islamic
              education, having served as a principal, superintendent, and imam.
            </p>
            <p>
              Since joining HQA in 2009, Dr. Ghazali has led a comprehensive
              overhaul of the school’s curriculum, expanding it beyond Quranic
              studies to include core academic subjects such as mathematics,
              science, English, social studies, physical education, and art.
              This initiative not only broadened the educational scope but also
              facilitated the school’s accreditation and significant growth in
              student enrollment.
            </p>
          </div>
        </div>

        {/* FIRST CARD END */}

        {/* SECOND AND THIRD CARDS */}
        <div className="flex flex-col md:flex-row mt-3.5 gap-4">
          {/* Card 2 */}
          <div className="flex-1">
            <div className="relative shadow-[0_0_30px_rgba(0,0,0,0.25)] flex flex-col justify-center items-center p-3.5 gap-4 rounded-lg">
              {/* Blue background box */}
              <div className="bg-blue-950 h-40 w-28 md:h-52 md:w-36 absolute left-2 md:left-1.5 top-2 md:top-1.5 z-[-1] rounded-[5px]"></div>

              <div className="flex flex-col md:flex-row justify-center items-start md:space-x-11 space-y-4 md:space-y-0">
                {/* Image */}
                <img
                  className="h-56 md:h-64 rounded-[8px] w-full md:w-auto max-w-xs object-cover"
                  src="/leadership/a2.jpg"
                  alt="Sr. Shamima Khalid"
                />

                {/* Text */}
                <div className="w-full self-start">
                  <h1 className="text-[#00285E] italic mb-4 text-3xl">
                    Sr. Shamima Khalid
                  </h1>
                  <h4 className="text-[#00285E] italic mb-4 text-2xl">
                    Assistant Principal
                  </h4>
                  <p className="hidden md:block text-base">
                    Dr. Hamed Ghazali is the visionary founder and current
                    director of Houston Quran Academy (HQA), where he has been
                    instrumental in transforming the institution into a model of
                    integrated Islamic and academic education. A hafiz of the
                    Quran with a Ph.D. in Curriculum and Instruction from Kansas
                    State University, Dr. Ghazali brings over two decades of
                    experience in Islamic education, having served as a
                    principal, superintendent, and imam.
                  </p>
                </div>
              </div>

              {/* Mobile para */}
              <p className="w-full md:hidden">
                Dr. Hamed Ghazali is the visionary founder and current director
                of Houston Quran Academy (HQA), where he has been instrumental
                in transforming the institution into a model of integrated
                Islamic and academic education. A hafiz of the Quran with a
                Ph.D. in Curriculum and Instruction from Kansas State
                University, Dr. Ghazali brings over two decades of experience in
                Islamic education, having served as a principal, superintendent,
                and imam.
              </p>

              {/* Extra text */}
              <p>
                As a founding leader, Shamima Khalid was instrumental in shaping
                HQA's mission and curriculum, emphasizing both strong Quranic
                education and rigorous academic standards. Her leadership was
                characterized by a student-centered approach, faculty
                development, and the creation of a nurturing environment that
                fosters moral and spiritual growth alongside scholastic
                achievement.
                <br />
                <br />
                Throughout her tenure, she mentored teachers, engaged parents,
                and helped build a school culture grounded in compassion,
                discipline, and continuous improvement. Her contributions have
                had a lasting impact on the community, helping to raise
                generations of students who are not only academically capable
                but also confident in their Islamic identity.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex-1">
            <div className="relative shadow-[0_0_30px_rgba(0,0,0,0.25)] flex flex-col justify-center items-center p-3.5 gap-4 rounded-lg">
              {/* Blue background box */}
              <div className="bg-blue-950 h-40 w-28 md:h-52 md:w-36 absolute left-2 md:left-1.5 top-2 md:top-1.5 z-[-1] rounded-[5px]"></div>

              <div className="flex flex-col md:flex-row justify-center items-start md:space-x-11 space-y-4 md:space-y-0">
                {/* Image */}
                <img
                  className="h-56 md:h-64 rounded-[8px] w-full md:w-auto max-w-xs object-cover"
                  src="/leadership/a3.jpg"
                  alt="Sr. Shamima Khalid"
                />

                {/* Text aligned with image top */}
                <div className="w-full self-start">
                  <h1 className="text-[#00285E] italic mb-4 text-3xl">
                    Sr. Shamima Khalid
                  </h1>
                  <h4 className="text-[#00285E] italic mb-4 text-2xl">
                    Assistant Principal
                  </h4>
                  <p className="hidden md:block">
                    Dr. Hamed Ghazali is the visionary founder and current
                    director of Houston Quran Academy (HQA), where he has been
                    instrumental in transforming the institution into a model of
                    integrated Islamic and academic education. A hafiz of the
                    Quran with a Ph.D. in Curriculum and Instruction from Kansas
                    State University, Dr. Ghazali brings over two decades of
                    experience in Islamic education, having served as a
                    principal, superintendent, and imam.
                  </p>
                </div>
              </div>

              {/* Mobile para */}
              <p className="w-full md:hidden">
                Dr. Hamed Ghazali is the visionary founder and current director
                of Houston Quran Academy (HQA), where he has been instrumental
                in transforming the institution into a model of integrated
                Islamic and academic education. A hafiz of the Quran with a
                Ph.D. in Curriculum and Instruction from Kansas State
                University, Dr. Ghazali brings over two decades of experience in
                Islamic education, having served as a principal, superintendent,
                and imam.
              </p>

              {/* Extra text */}
              <p>
                As a founding leader, Shamima Khalid was instrumental in shaping
                HQA's mission and curriculum, emphasizing both strong Quranic
                education and rigorous academic standards. Her leadership was
                characterized by a student-centered approach, faculty
                development, and the creation of a nurturing environment that
                fosters moral and spiritual growth alongside scholastic
                achievement.
                <br />
                <br />
                Throughout her tenure, she mentored teachers, engaged parents,
                and helped build a school culture grounded in compassion,
                discipline, and continuous improvement. Her contributions have
                had a lasting impact on the community, helping to raise
                generations of students who are not only academically capable
                but also confident in their Islamic identity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Administeration;
