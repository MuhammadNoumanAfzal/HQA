import React, { useState } from "react";

const MobileAdministration = () => {
  const [showMore1, setShowMore1] = useState(false);
  const [showMore2, setShowMore2] = useState(false);
  const [showMore3, setShowMore3] = useState(false);

  return (
    <div className="md:hidden px-5 py-10 space-y-10 font-serif">
      <div className="flex flex-col justify-center items-center space-y-5 text-center">
        <h1 className="text-[#cf3527] text-3xl md:text-5xl mb-4 italic">
          School Administration
        </h1>
        <h2 className="text-2xl md:text-3xl italic mt-6  text-gray-800">
          Educators. Innovators. Role Models.
        </h2>
        <p className="w-full md:w-6xl text-justify md:text-center  text-gray-700">
          Our administration team is the engine that drives daily excellence at
          HQA. From classrooms to campus operations, they lead with professional
          expertise,{" "}
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

      {/* Card 1 */}
      <div className="space-y-4">
        {/* Image with blue bg behind */}
        <div className="relative w-full flex justify-center">
          <div className="absolute -top-2 -left-4 w-80 h-full bg-blue-900 rounded-md z-0"></div>
          <img
            className="relative z-10 w-full h-110 object-cover rounded-md"
            src="/leadership/a1.jpg"
            alt="Dr. Hamed Ghazali"
          />
        </div>

        {/* Text Content */}
        <div className="text-gray-800">
          <h2 className="text-xl italic mb-1 text-[#00285E]">
            Dr. Hamed Ghazali
          </h2>
          <h4 className="text-lg italic mb-3 text-[#00285E]">
            Founder and Director of Houston Quran Academy
          </h4>
          <p className="text-sm leading-relaxed">
            {showMore1 ? (
              <>
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
              </>
            ) : (
              "Dr. Hamed Ghazali is the visionary founder and current director of Houston Quran Academy (HQA)..."
            )}
          </p>
          <button
            onClick={() => setShowMore1(!showMore1)}
            className="mt-3 bg-blue-900 text-white px-4 py-1 rounded-md font-medium"
          >
            {showMore1 ? "Read Less" : "Read More"}
          </button>
        </div>
      </div>

      {/* Card 2 */}
      <div className="space-y-4">
        <div className="relative w-full flex justify-center">
          <div className="absolute -top-2 -left-4 w-80 h-full bg-blue-900 rounded-md z-0"></div>
          <img
            className="relative z-10 w-full h-110 object-cover rounded-md"
            src="/leadership/a2.jpg"
            alt="Sr. Shamima Khalid"
          />
        </div>

        <div className="text-gray-800">
          <h2 className="text-xl italic mb-1 text-[#00285E]">
            Sr. Shamima Khalid
          </h2>
          <h4 className="text-lg italic mb-3 text-[#00285E]">
            Assistant Principal
          </h4>
          <p className="text-sm leading-relaxed">
            {showMore2 ? (
              <>
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
                had a lasting impact on the community.
              </>
            ) : (
              "As a founding leader, Shamima Khalid was instrumental in shaping HQA's mission and curriculum..."
            )}
          </p>
          <button
            onClick={() => setShowMore2(!showMore2)}
            className="mt-3 bg-blue-900 text-white px-4 py-1 rounded-md font-medium"
          >
            {showMore2 ? "Read Less" : "Read More"}
          </button>
        </div>
      </div>

      {/* Card 3 */}
      <div className="space-y-4">
        <div className="relative w-full flex justify-center">
          <div className="absolute -top-2 -left-4 w-80 h-full bg-blue-900 rounded-md z-0"></div>
          <img
            className="relative z-10 w-full h-110 object-cover rounded-md"
            src="/leadership/a3.jpg"
            alt="Sr. Shamima Khalid"
          />
        </div>

        <div className="text-gray-800">
          <h2 className="text-xl italic mb-1 text-[#00285E]">
            Sr. Shamima Khalid
          </h2>
          <h4 className="text-lg italic mb-3 text-[#00285E]">
            Assistant Principal
          </h4>
          <p className="text-sm leading-relaxed">
            {showMore3 ? (
              <>
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
                discipline, and continuous improvement.
              </>
            ) : (
              "As a founding leader, Shamima Khalid was instrumental in shaping HQA's mission and curriculum..."
            )}
          </p>
          <button
            onClick={() => setShowMore3(!showMore3)}
            className="mt-3 bg-blue-900 text-white px-4 py-1 rounded-md font-medium"
          >
            {showMore3 ? "Read Less" : "Read More"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileAdministration;
