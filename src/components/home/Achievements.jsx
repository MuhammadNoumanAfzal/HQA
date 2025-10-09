import React, { useCallback, useMemo, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SlideRight } from "../../../utility/animation.js";

const Achievements = () => {
  const achievements = useMemo(
    () => [
      {
        id: 1,
        img: "/p.png",
        nbr: "/home/nbr1.png",
        bg: "home/11.jpg",
        hoverTitle: "Among Top10 Private School in Houston",
        text: (
          <p className="text-sm sm:text-base md:text-lg lg:text-2xl text-red-700">
            Among Top 10 <br /> Private School <br /> in Houston
          </p>
        ),
        para: "Proud to be recognized among Houston's top 10 private schools, setting high academic standards and fostering leadership.",
      },
      {
        id: 2,
        img: "/c.png",
        nbr: "/home/nbr2.png",
        bg: "home/2.jpg",
        hoverTitle: "Cognia Accredited School",

        text: (
          <p className="text-sm sm:text-base md:text-lg lg:text-2xl text-red-700">
            Cognia Accredited <br /> School
          </p>
        ),
        para: "We are accredited by Cognia, ensuring our educational practices meet the highest global standards.",
      },
      {
        id: 3,
        img: "/pass.png",
        nbr: "/home/nbr3.png",
        bg: "home/3.jpg",
        hoverTitle: "93% Pass Rate on All AP Exams",

        text: (
          <span className="text-sm sm:text-base md:text-lg lg:text-2xl  text-gray-800">
            <span className="text-red-700 font-bold text-base sm:text-lg md:text-xl lg:text-4xl">
              93%
            </span>{" "}
            Pass Rate on <br /> All AP Exams
          </span>
        ),
        para: "Our students actively contribute to their communities, completing over 5,000 hours of service to date.",
      },
      {
        id: 4,
        img: "/community.png",
        nbr: "/home/nbr4.png",
        bg: "home/4.jpg",
        hoverTitle: "5000+ Community Service Hours (PK-12)",

        text: (
          <>
            <p className="text-base sm:text-lg md:text-xl lg:text-4xl font-bold text-red-700">
              5,000+
            </p>
            <p className="mt-1 text-sm sm:text-base md:text-lg lg:text-2xl font-medium text-gray-800">
              Community Service <br /> Hours (PK-12)
            </p>
          </>
        ),
        para: "Our students actively contribute to their communities, completing over 5,000 hours of service to date.",
      },
      {
        id: 5,
        img: "/hafiz.png",
        nbr: "/home/nbr5.png",
        bg: "home/5.jpg",
        hoverTitle: "99+ Quran Hafiz to Date",

        text: (
          <p className="text-sm sm:text-base md:text-lg lg:text-2xl">
            <span className="text-red-700  text-4xl font-bold">99+</span> Quran
            Hafiz <br /> to Date
          </p>
        ),
        para: "Over 99 students have memorized the Quran, showcasing our commitment to spiritual education.",
      },
      {
        id: 6,
        img: "/merit.png",
        nbr: "/home/nbr6.png",
        bg: "home/6.jpg",
        hoverTitle: "National Merit Scholarship Winner",

        text: (
          <p className="text-sm sm:text-base md:text-lg lg:text-2xl text-red-700">
            National Merit <br /> Scholarship <br /> Winner
          </p>
        ),
        para: "Our students achieve excellence, with winners of the prestigious National Merit Scholarship, a testament to their academic prowess.",
      },
      {
        id: 7,
        img: "/club.png",
        nbr: "/home/nbr7.png",
        bg: "home/7.jpg",
        hoverTitle: "Student Led-Club",

        text: (
          <p className="text-sm sm:text-base md:text-lg lg:text-2xl text-gray-700 mt-2">
            Student Led- <br /> Club
          </p>
        ),
        para: "Our student-led clubs foster leadership, teamwork, and creativity, empowering students to take charge of their extracurricular activities.",
      },
      {
        id: 8,
        img: "/country.png",
        nbr: "/home/nbr8.png",
        bg: "home/8.jpg",
        hoverTitle: "Diverse Student Body Representing 12+ Countries",

        text: (
          <>
            <p className="text-sm sm:text-base md:text-lg lg:text-2xl text-gray-800">
              Diverse Student Body <br /> Representing
            </p>
            <p className="text-xs sm:text-sm md:text-base lg:text-4xl font-bold text-red-700 mt-2">
              12+ Countries
            </p>
          </>
        ),
        para: "Our academy celebrates cultural diversity, with students hailing from over 12 countries, enriching the learning experience.",
      },
      {
        id: 9,
        img: "/islam.png",
        nbr: "/home/nbr9.png",
        bg: "home/9.jpg",
        hoverTitle: "Top Islamic Private School in Houston",

        text: (
          <p className="text-sm sm:text-base md:text-lg text-red-700 lg:text-2xl">
            Top Islamic <br /> Private School in <br /> Houston
          </p>
        ),
        para: "Ranked as one of the top Islamic private schools in Houston, we combine academic excellence with Islamic values.",
      },
    ],
    []
  );

  const [hovered, setHovered] = useState(null);
  const [active, setActive] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  const handleEnter = useCallback(
    (e, ach) => {
      if (isMobile) return;
      const rect = e.currentTarget.getBoundingClientRect();
      const cardCenter = rect.top + rect.height / 2;
      const previewHeight = window.innerHeight * 0.2;
      const rawTop = cardCenter - previewHeight / 2;
      const minTop = 12;
      const maxTop = window.innerHeight - previewHeight - 12;
      const top = Math.max(minTop, Math.min(rawTop, maxTop));
      setHovered({ ach, top });
    },
    [isMobile]
  );

  const handleLeave = useCallback(() => {
    if (isMobile) return;
    setHovered(null);
  }, [isMobile]);

  const handleClick = useCallback(
    (e, ach) => {
      if (!isMobile) return;
      const rect = e.currentTarget.getBoundingClientRect();
      const cardCenter = rect.top + rect.height / 2;
      const previewHeight = window.innerHeight * 0.3;
      const rawTop = cardCenter - previewHeight / 2;
      const minTop = 12;
      const maxTop = window.innerHeight - previewHeight - 12;
      const top = Math.max(minTop, Math.min(rawTop, maxTop));
      if (active && active.ach.id === ach.id) {
        setActive(null);
      } else {
        setActive({ ach, top });
      }
    },
    [isMobile, active]
  );

  const closePreview = useCallback(() => setActive(null), []);

  return (
    <section className="pb-8 md:pt-8 text-gray-900 font-serif overflow-x-hidden">
      <div className="px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.h1
          variants={SlideRight(0.3)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-3xl text-[#00285E] sm:text-3xl md:text-4xl lg:text-5xl mb-8 md:mb-16 text-center leading-snug"
        >
          Our Proud Moments
          <br className="block sm:hidden" />
          {""} and <br />
          <span className="text-red-700 italic">
            Achievements at the School!
          </span>
        </motion.h1>

        {/* Achievements Grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 gap-1 sm:gap-4 md:gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            visible: {
              transition: { staggerChildren: 0.15, delayChildren: 0.5 },
            },
          }}
        >
          {achievements.map((ach, index) => (
            <motion.div
              key={ach.id}
              onMouseEnter={(e) => handleEnter(e, ach)}
              onMouseLeave={handleLeave}
              onClick={(e) => handleClick(e, ach)}
              variants={{
                hidden: { opacity: 0, y: 40, scale: 0.95 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    duration: 0.8,
                    delay: index * 0.2,
                    ease: [0.22, 1, 0.36, 1],
                  },
                },
              }}
              className="relative group bg-white border border-[#ADADAD] rounded-xl h-40 xs:h-44 sm:h-48 md:h-52 flex flex-col items-center justify-center text-center transition-all duration-500 hover:shadow-2xl hover:-translate-y-0.5 cursor-pointer"
              style={{
                boxShadow:
                  "0 10px 20px rgba(0,0,0,0.2), 0 6px 6px rgba(0,0,0,0.15)",
              }}
            >
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300" />
              <div className="relative z-10 px-2 sm:px-3 py-1 sm:py-2 flex flex-col items-center">
                <img
                  src={ach.img}
                  alt={`achievement-${ach.id}`}
                  className="w-12 h-12 sm:w-14 sm:h-14 md:w-20 md:h-20 object-contain mb-2 transition-transform duration-300 group-hover:scale-105"
                />
                <div className="mt-1 mb-2 text-xs sm:text-sm md:text-base lg:text-lg font-medium leading-snug text-gray-800">
                  {ach.text}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Desktop Hover Preview */}
      <AnimatePresence>
        {hovered && !isMobile && (
          <motion.div
            key={hovered.ach.id}
            initial={{ x: "-40vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-40vw", opacity: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 22 }}
            className="fixed left-0 hidden sm:block pointer-events-none z-[60] shadow-2xl"
            style={{
              top: 0,
              width: "34vw",
              height: "100vh",
              backgroundImage: `url(${hovered.ach.bg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            aria-hidden
          >
            {/* Blue overlay at bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#00285E] to-transparent" />
            <div className="absolute inset-0 bg-black/20" />

            {/* Content positioned at bottom */}
            <div className="relative h-full w-full flex flex-col justify-end gap-4 p-6 pb-8">
              <img
                src={hovered.ach.nbr}
                alt="preview"
                className="w-16 h-16 sm:w-20 sm:h-20 object-contain drop-shadow"
              />
              <div className="text-white text-lg sm:text-xl md:text-2xl  leading-snug">
                {hovered.ach.hoverTitle}
              </div>
              <p className="text-white text-sm sm:text-base md:text-lg leading-snug">
                {hovered.ach.para}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Preview */}
      <AnimatePresence>
        {active && isMobile && (
          <>
            {/* Dark backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/30"
              onClick={closePreview}
            />
            {/* Slide-in panel */}
            <motion.div
              key={active.ach.id}
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "-100%", opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed left-0 top-0 h-[98%] w-4/5 max-w-sm z-50 shadow-2xl"
              style={{
                backgroundImage: `url(${active.ach.bg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Blue overlay at bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#00285E] to-transparent" />
              <div className="absolute inset-0 bg-black/20" />

              {/* Content */}
              <div className="relative h-full w-full flex flex-col items-start justify-end gap-4 p-6 pb-8">
                {/* Close Button */}
                <button
                  onClick={closePreview}
                  className="absolute top-4 right-4 text-white text-2xl bg-black/30 rounded-full w-8 h-8 flex items-center justify-center z-10"
                >
                  ×
                </button>

                {/* Number Icon */}
                <img
                  src={active.ach.nbr}
                  alt="preview"
                  className="w-16 h-16 sm:w-20 sm:h-20 object-contain drop-shadow"
                />

                {/* Title  */}
                <div className="text-white text-lg sm:text-xl md:text-2xl font-semibold leading-snug text-left">
                  {active.ach.hoverTitle}
                </div>

                {/* Paragraph  */}
                <p className="text-white text-sm sm:text-base md:text-lg leading-snug text-left">
                  {active.ach.para}
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Achievements;
