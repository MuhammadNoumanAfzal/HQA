import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars } from "react-icons/fa";
import HeroText from "./HeroText";
import { Parallax } from "react-parallax";

const splashLogo = {
  initial: { y: "40vh", scale: 1, opacity: 1 },
  animate: {
    y: 0,
    scale: 1,
    opacity: 1,
    transition: { duration: 0.9, ease: "easeOut" },
  },
  exit: {
    y: "-10vh",
    scale: 0.5,
    opacity: 0,
    transition: { duration: 1.2, ease: "easeInOut" },
  },
};

const ayatVariants = {
  hidden: { y: "60vh", scale: 0.6, opacity: 0 },
  show: {
    y: ["60vh", "0vh", "-1vh", "0vh"],
    scale: [0.6, 1.12, 1.04, 1.0],
    opacity: [0, 1, 1, 1],
    transition: { duration: 1.8, times: [0, 0.6, 0.85, 1], ease: "easeInOut" },
  },
};

const navVariants = {
  hidden: { y: -20, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function NavbarLayout() {
  const [showSplash, setShowSplash] = useState(true);

  // End splash after 1.5s
  useEffect(() => {
    const t = setTimeout(() => setShowSplash(false), 1500);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="relative min-h-screen bg-white overflow-x-hidden">
      {/* Splash Screen */}
      <AnimatePresence>
        {showSplash && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-white"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 1 } }}
          >
            <motion.img
              src="/logo.png"
              alt="Logo"
              variants={splashLogo}
              initial="initial"
              animate="animate"
              exit="exit"
              className="w-[300px] h-[300px] sm:w-56 sm:h-56 object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      {!showSplash && (
        <div>
          {/* Navbar */}
          <motion.nav
            variants={navVariants}
            initial="hidden"
            animate="show"
            className="flex justify-between items-center px-8 py-4"
          >
            <div className="flex items-center gap-2">
              <img
                src="/logo.png"
                alt="Logo"
                className="w-14 h-14 object-contain"
              />
            </div>

            <div className="flex items-center gap-10">
              <button className="bg-[#0E2954] text-white px-5 py-2 rounded-md text-sm hover:bg-[#1a376b] transition">
                ENQUIRE
              </button>
              <FaBars className="text-2xl text-gray-500 cursor-pointer" />
            </div>
          </motion.nav>

          {/* Hero with animated ayat.svg */}
          <main className="px-8">
            <Parallax strength={600}>
              <section
                className="relative h-[50vh] sm:h-[70vh] grid place-items-center"
                aria-label="Hero"
              >
                <motion.img
                  src="/ayat.svg"
                  alt="Ayah"
                  variants={ayatVariants}
                  initial="hidden"
                  animate="show"
                  className="w-[260px] sm:w-[260px] md:w-[820px] max-w-full mx-auto object-contain mt-16 sm:mt-20"
                />
              </section>
            </Parallax>
          </main>

          <HeroText />
        </div>
      )}
    </div>
  );
}
