import {
  SlideLeft,
  SlideRight,
  SlideUp,
  FadeIn,
  StaggerChildren,
} from "../../../utility/animation";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const sections = [
  {
    id: 1,
    title: "Our Commitment to Education",
    description:
      "We believe education shapes the foundation of life and strengthens both character and intellect.",
    list: [
      "Islam encourages us to excel in every field of life",
      "Education is a right for every individual",
      "A sound education nourishes the mind, body, and soul",
      "We foster creativity, critical thinking, and individual talent",
      "Committed to strong curricula, qualified staff, and effective processes",
      "Recognize that students learn in different ways and at different paces",
    ],
    img: "/about/c1.jpg",
    reverse: false,
    bg: "#00285E",
    textColor: "text-white",
    headingColor: "text-white",
  },
  {
    id: 2,
    title: "Respect and Equality",
    description:
      "We uphold respect, compassion, and inclusivity in all aspects of education and community life.",
    list: [
      "Every student deserves respect, compassion, and love",
      "We believe in equality for all—no discrimination",
      "Parents, teachers, and administrators serve as role models",
      "Education is a partnership between school and family",
      "Our youth are our greatest trust and most valuable asset",
      "Every voice—especially youth—must be heard and valued",
      "We promote respect for all cultures, values, and religions",
    ],
    img: "/about/c2.jpg",
    reverse: true,
    bg: "#C8E1F8",
    textColor: "text-gray-800",
    headingColor: "text-[#00285E]",
  },
  {
    id: 3,
    title: "Islamic Foundations",
    description:
      "Our mission is rooted in Islam's teachings, providing guidance for a balanced and meaningful life.",
    list: [
      "Islam is a universal model for life",
      "Rooted in the Qur'an, Sunnah, and the way of the Sahabah",
      "Islam is the foundation of morals, manners, and character",
      "A strong Islamic environment is essential for youth development",
      "Islam promotes balance and moderation in all aspects of life",
      "Recognizes both fixed rulings (thawabit) and flexible rulings (mutaghayyirat)",
      "Encourages simplicity and ease in religious practice",
    ],
    img: "/about/c3.jpg",
    reverse: false,
    bg: "#00285E",
    textColor: "text-white",
    headingColor: "text-white",
  },
  {
    id: 4,
    title: "Our Vision in the American Context",
    description:
      "We integrate Islamic values within the American context, preparing students for both worlds.",
    list: [
      "HQA emphasizes academics, not politics",
      "We promote success within the American context",
      "Freedom of expression is respected—no coercion of beliefs",
      "We support gender equity and opportunity for all",
      "Encourage collaboration on noble and just causes",
      "Stand firmly for justice for all people",
      "Every member's voice matters in our school community",
    ],
    img: "/about/c4.jpg",
    reverse: true,
    bg: "#C8E1F8",
    textColor: "text-gray-800",
    headingColor: "text-[#00285E]",
  },
];

// Create a separate component for each section to properly use hooks
const SectionItem = ({ section }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={StaggerChildren(0.1)}
      className={`flex flex-col md:flex-row ${
        section.reverse ? "md:flex-row-reverse" : ""
      } overflow-hidden`} // Added overflow-hidden to prevent any overflow issues
    >
      {/* ---- Text ---- */}
      <motion.div
        variants={section.reverse ? SlideRight(0.2) : SlideLeft(0.2)}
        className={`w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-center ${section.textColor}`} // Changed p-8 to p-6 on mobile
        style={{ backgroundColor: section.bg }}
      >
        <motion.h2
          variants={FadeIn(0.3)}
          className={`text-xl md:text-2xl lg:text-3xl mb-4 ${section.headingColor}`} // Adjusted text sizes for mobile
        >
          {section.title}
        </motion.h2>
        <motion.p variants={FadeIn(0.4)} className="mb-4 text-sm md:text-base">
          {" "}
          {/* Added text size for mobile */}
          {section.description}
        </motion.p>
        <motion.ul
          variants={StaggerChildren(0.05)}
          className="list-disc pl-5 md:pl-6 space-y-1 md:space-y-2 text-sm md:text-base" // Adjusted spacing and text size for mobile
        >
          {section.list.map((item, itemIndex) => (
            <motion.li key={itemIndex} variants={FadeIn(0.1)}>
              {item}
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>

      {/* ---- Image ---- */}
      <motion.div
        variants={section.reverse ? SlideLeft(0.2) : SlideRight(0.2)}
        className="w-full md:w-1/2"
      >
        <img
          src={section.img}
          alt={section.title}
          className="w-full h-auto md:h-100 object-cover" // Changed h-100 to h-auto on mobile
        />
      </motion.div>
    </motion.div>
  );
};

const BalanceSections = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div
      ref={ref}
      className="w-full py-8 md:py-12 px-4 md:px-10 font-serif overflow-x-hidden"
    >
      {" "}
      {/* Added overflow-x-hidden and adjusted padding for mobile */}
      <div className="text-center max-w-4xl mx-auto mb-6 md:mb-8">
        {" "}
        {/* Adjusted margin for mobile */}
        <motion.h1
          variants={SlideUp(0.6)}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl italic text-[#CF3528] mb-4 md:mb-6" // Adjusted text sizes and margins for mobile
        >
          Rooted in Faith, Guided by Purpose
        </motion.h1>
        <motion.p
          variants={SlideUp(1)}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-sm sm:text-base md:text-lg text-gray-800 leading-relaxed" // Adjusted text size for mobile
        >
          At Houston Quran Academy, our values and guiding principles are
          grounded in the Qur'an and Sunnah. We believe in nurturing
          well-rounded individuals through a balanced approach to spiritual,
          intellectual, emotional, and civic growth. Every belief we hold shapes
          a student's character, purpose, and contribution to the world—both as
          a Muslim and as a compassionate global citizen.
        </motion.p>
      </div>
      {sections.map((section) => (
        <SectionItem key={section.id} section={section} />
      ))}
    </div>
  );
};

export default BalanceSections;
