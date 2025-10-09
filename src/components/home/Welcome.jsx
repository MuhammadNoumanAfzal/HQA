import { useState } from "react";
import { motion } from "framer-motion";
import {
  SlideUp,
  SlideRight,
  SlideButton,
  SlideLeft,
} from "../../../utility/animation.js";
import { FaArrowRight } from "react-icons/fa";

const images = [
  {
    id: 1,
    src: "/home/welcome1.jpg",
    alt: "Pre School",
    btn: "Pre School",
    description:
      "A traditional setting offering toddler care and a Montessori Primary program focused on early learning for ages 3–5.",
    link: "/pre-school",
  },
  {
    id: 2,
    src: "home/welcome2.jpg",
    alt: "Middel School",
    btn: "Middel School",
    description:
      "A transition program reinforcing state-mandated academics and critical thinking while providing in-depth spiritual and character development.",
    link: "/middel-school",
  },
  {
    id: 3,
    src: "home/welcome3.jpg",
    alt: "High School",
    btn: " High School",
    description:
      "A college-preparatory track (AP/Dual-Credit) focused on academic mastery and cultivating knowledgeable, balanced Muslim leaders for the future.",
    link: "/high-school",
  },
  {
    id: 4,
    src: "home/welcome4.jpg",
    alt: "Elementary",
    btn: "Elementary",
    description:
      "Building a strong academic foundation (TEKS-aligned) by integrating core subjects with Islamic values and initial Quran study.",
    link: "/elementry-school",
  },
];

const Welcome = () => {
  const [activeId, setActiveId] = useState(null);

  return (
    <section className="py-12 bg-[#00285E] text-white relative overflow-hidden">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-10 relative">
          {/* Left side - */}
          <motion.div
            className="md:w-1/2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: {
                opacity: 1,
                x: 0,
                transition: {
                  duration: 0.8,
                  ease: "easeOut",
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            <motion.h2
              className="text-4xl font-serif md:text-5xl italic leading-tight mb-4 flex flex-wrap gap-2"
              variants={{
                hidden: { opacity: 0, x: -30 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.6 },
                },
              }}
            >
              {["Welcome", "to", "Houston", "Quran", "Academy"].map(
                (word, wi) => (
                  <span key={wi} className="inline-flex gap-1">
                    {word.split("").map((letter, li) => (
                      <motion.span
                        key={li}
                        variants={SlideRight(wi * 0.7 + li * 0.05)}
                        className="inline-block"
                      >
                        {letter}
                      </motion.span>
                    ))}
                  </span>
                )
              )}
            </motion.h2>

            <motion.p
              className="text-xl mb-6 font-serif max-w-xl"
              variants={{
                hidden: { opacity: 0, x: -30 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.6, delay: 0.2 },
                },
              }}
            >
              At HQA, we don't just educate—we transform. Merging the timeless
              wisdom of the Quran with cutting-edge academics, we cultivate
              leaders who excel in both faith and life. With world-class
              faculty, innovative programs, and a nurturing Islamic environment,
              we empower students to master the Quran, achieve academic
              brilliance, and lead with integrity.
            </motion.p>

            <motion.button
              className="border border-[#FAF1C4] hover:bg-[#1a3f75] text-xl text-[#FAF1C4] font-serif py-3 px-6 cursor-pointer transition duration-300 rounded-md"
              variants={{
                hidden: { opacity: 0, x: -30 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.6, delay: 0.4 },
                },
              }}
            >
              Start Your Journey
            </motion.button>
          </motion.div>

          {/* Right side - Image grid */}
          <div className="md:w-1/2 border border-white p-2 rounded-md relative">
            {/* Decorative line with twinkling circle */}
            <div className="absolute left-2 top-120 -translate-y-1/2 hidden md:block">
              <div className="flex items-center">
                <div className="w-[600px] h-[3px] bg-white -ml-[600px]" />
                <motion.div
                  className="relative flex items-center justify-center -ml-[630px]"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
                    <div className="w-8 h-8 bg-white rounded-full" />
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Image grid */}
            <motion.div
              className="grid grid-cols-2 cursor-pointer"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ staggerChildren: 0.15 }}
            >
              {images.map((img, index) => (
                <motion.div
                  key={img.id}
                  className="relative overflow-visible shadow-lg group"
                  variants={{
                    hidden: { opacity: 0, x: 100 },
                    visible: {
                      opacity: 1,
                      x: 0,
                      transition: { duration: 0.6, ease: "easeOut" },
                    },
                  }}
                  onClick={() =>
                    setActiveId(activeId === img.id ? null : img.id)
                  }
                >
                  <div className="relative overflow-hidden h-64">
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <a
                      href={img.link}
                      className="absolute bottom-1 left-1 
  bg-[#1a3f75]/90 text-white text-sm font-serif 
  h-12 w-40 flex items-center justify-center 
  rounded-bl-md rounded-tr-md border border-white/50 
  transition-opacity duration-300 group-hover:opacity-0"
                    >
                      {img.btn}
                    </a>
                  </div>

                  {/* Overlay */}
                  <div
                    className={`absolute inset-0 bg-[#1a3f75]/80 transition-all duration-500 flex flex-col justify-end rounded-md transform origin-center shadow-2xl
                    ${
                      activeId === img.id
                        ? "opacity-100 scale-105"
                        : "opacity-0 scale-95"
                    } sm:group-hover:opacity-100 sm:group-hover:scale-120 z-20`}
                  >
                    <div className="p-4">
                      {/* Hide alt text on mobile */}
                      <h3 className="font-bold text-lg hidden sm:block">
                        {img.alt}
                      </h3>
                      <p className="text-sm">{img.description}</p>
                    </div>
                    <a
                      href={img.link}
                      className="w-full flex items-center justify-between bg-[#1a3f75] text-white text-sm font-serif py-3 px-4 rounded-bl-md rounded-tr-md border-t border-white/30 hover:bg-[#163765] transition"
                    >
                      {img.btn}
                      <FaArrowRight className="ml-2 text-white" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
