import { motion } from "framer-motion";

// Slide in from left → right
const SlideRight = (delay = 0) => ({
  hidden: { x: -80, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 1, ease: "easeOut", delay },
  },
});

// Slide in from right → left
const SlideLeft = (delay = 0) => ({
  hidden: { x: 40, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 1, ease: "easeOut", delay },
  },
});

// Container to stagger child animations
const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const HeroText = () => {
  return (
    <section className="min-h-[80vh] flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "0px 0px -10% 0px" }}
        className="text-center"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif flex flex-wrap justify-center gap-3">
          <motion.span variants={SlideRight(0.0)} className="text-[#0F2C56]">
            Make Us
          </motion.span>

          <motion.span
            variants={SlideLeft(0.1)}
            className="text-[#C0392B] italic"
          >
            Leaders for the Righteous
          </motion.span>
        </h1>
      </motion.div>
    </section>
  );
};

export default HeroText;
