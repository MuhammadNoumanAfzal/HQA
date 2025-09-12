import React, { useCallback, useMemo, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SlideLeft, SlideRight } from "../../../utility/animation.js";

const Achievements = () => {
  const achievements = useMemo(
    () => [
      {
        id: 1,
        img: "/01.png",
        text: (
          <p className="text-sm sm:text-base md:text-lg lg:text-xl">
            Among Top 10 <br /> Private School <br /> in Houston
          </p>
        ),
      },
      {
        id: 2,
        img: "/02.png",
        text: (
          <p className="text-sm sm:text-base md:text-lg lg:text-xl">
            Cognia Accredited <br /> School
          </p>
        ),
      },
      {
        id: 3,
        img: "/03.png",
        text: (
          <span className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-[#00285E]">
            <span className="text-red-700 text-base sm:text-lg md:text-xl lg:text-2xl">
              93%
            </span>{" "}
            Rate on <br /> All AP Exams
          </span>
        ),
      },
      {
        id: 4,
        img: "/04.png",
        text: (
          <>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-red-700">
              5,000+
            </p>
            <p className="mt-1 text-sm sm:text-base md:text-lg lg:text-xl font-medium text-gray-800">
              Community Service <br /> Hours (PK-12)
            </p>
          </>
        ),
      },
      {
        id: 5,
        img: "/05.png",
        text: (
          <p className="text-sm sm:text-base md:text-lg lg:text-xl">
            <span className="text-red-700 font-bold">99+</span> Quran Hafiz{" "}
            <br /> to Date
          </p>
        ),
      },
      {
        id: 6,
        img: "/06.png",
        text: (
          <p className="text-sm sm:text-base md:text-lg lg:text-xl">
            National Merit <br /> Scholarship <br /> Winner
          </p>
        ),
      },
      {
        id: 7,
        img: "/07.png",
        text: (
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 mt-2">
            Student Led- <br /> Club
          </p>
        ),
      },
      {
        id: 8,
        img: "/08.png",
        text: (
          <>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-800">
              Diverse Student Body <br /> Representing
            </p>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-red-700 mt-2">
              12+ Countries
            </p>
          </>
        ),
      },
      {
        id: 9,
        img: "/09.png",
        text: (
          <p className="text-sm sm:text-base md:text-lg lg:text-xl">
            Top Islamic <br /> Private School in <br /> Houston
          </p>
        ),
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
    <section className="py-8 sm:py-12 text-gray-900 font-serif overflow-x-hidden">
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Heading */}
        <motion.h1
          variants={SlideRight(0.3)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-3xl text-[#00285E] sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-8 md:mb-16 text-center leading-snug"
        >
          Our Proud Moments and <br />
          <span className="text-red-700">Achievements at the School!</span>
        </motion.h1>

        {/* Main container */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          {/* Left Side - Badge */}
          <motion.div
            variants={SlideLeft(0.4)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="hidden md:flex lg:w-1/3 bg-[#BCDDFC] rounded-xl p-4 sm:p-6 md:p-8 flex-col justify-end items-center shadow-lg min-h-[300px] sm:min-h-[400px] md:min-h-[500px]"
          >
            <img
              src="/badge.png"
              alt="badge"
              className="w-20 h-20 sm:w-28 sm:h-28 md:w-40 md:h-40 object-contain mb-3 md:mb-4"
            />
            <div className="text-center">
              <p className="text-base sm:text-lg md:text-xl font-semibold text-red-800 mt-2 leading-snug">
                Among Top 10 <br /> Private Schools <br /> in Houston
              </p>
            </div>
          </motion.div>

          {/* Right Side - Achievements Grid */}
          <motion.div
            className="lg:w-2/3 grid grid-cols-3 gap-3 sm:gap-4 md:gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              visible: {
                transition: { staggerChildren: 0.15, delayChildren: 0.9 },
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
                className="relative group bg-[url('/slidebg.jpg')] bg-cover bg-center bg-no-repeat border border-[#ADADAD] rounded-xl h-40 xs:h-44 sm:h-48 md:h-52 flex flex-col items-center justify-center text-center transition-all duration-500 hover:shadow-2xl hover:-translate-y-0.5 cursor-pointer"
                style={{
                  boxShadow:
                    "0 10px 20px rgba(0,0,0,0.3), 0 6px 6px rgba(0,0,0,0.25)",
                }}
              >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 rounded-xl" />

                {/* Content */}
                <div className="relative z-10 px-2 sm:px-3 py-1 sm:py-2 flex flex-col items-center">
                  <img
                    src={ach.img}
                    alt={`achievement-${ach.id}`}
                    className="w-12 h-12 sm:w-14 sm:h-14 md:w-20 md:h-20 object-contain mb-2 transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="mt-1 text-xs sm:text-sm md:text-base lg:text-lg font-medium leading-snug text-white break-words">
                    {ach.text}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Hover Preview Card (desktop) */}
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
              backgroundImage: "url('/slidebg.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            aria-hidden
          >
            <div className="relative h-full w-full flex items-center gap-3 pl-5 pr-4">
              <img
                src={hovered.ach.img}
                alt="preview"
                className="w-16 h-16 sm:w-20 sm:h-20 object-contain drop-shadow"
              />
              <div className="text-white text-sm sm:text-base md:text-lg leading-snug">
                {hovered.ach.text}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Preview Card */}
      <AnimatePresence>
        {active && isMobile && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0  z-50"
              onClick={closePreview}
            />
            <motion.div
              key={active.ach.id}
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "-100%", opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed left-0 top-0 h-full w-4/5 max-w-sm z-50 shadow-2xl"
              style={{
                backgroundImage: "url('/slidebg.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-black/40" />
              <div className="relative h-full w-full flex flex-col items-center justify-center gap-4 p-6">
                <button
                  onClick={closePreview}
                  className="absolute top-4 right-4 text-white text-2xl bg-black/30 rounded-full w-8 h-8 flex items-center justify-center"
                >
                  ×
                </button>
                <img
                  src={active.ach.img}
                  alt="preview"
                  className="w-20 h-20 sm:w-24 sm:h-24 object-contain drop-shadow"
                />
                <div className="text-white text-sm sm:text-base md:text-lg text-center leading-snug">
                  {active.ach.text}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Achievements;
