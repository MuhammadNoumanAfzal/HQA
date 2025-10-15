import { useEffect, useState } from "react";
import {
  FaBars,
  FaTimes,
  FaArrowRight,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Parallax } from "react-parallax";
import HeroText from "./HeroText";

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

const heroTextVariants = {
  hidden: {
    y: 80,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const mobileSubmenuVariants = {
  closed: {
    opacity: 0,
    height: 0,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
  open: {
    opacity: 1,
    height: "auto",
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

const menuItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  {
    name: "Admission",
    path: "/admission",
    submenu: [
      { name: "Inquire", path: "/inquire" },
      { name: "FAQs", path: "/faqs" },
      { name: "Enrollement", path: "/enrollement" },
      { name: "Tution-Fee", path: "/tution-fee" },
      { name: "Scholarship", path: "/scholarship" },
    ],
  },
  {
    name: "Academics",
    path: "/academics",
    submenu: [
      { name: "Pre-School", path: "/pre-school" },
      { name: "Elementary-School", path: "/elementry-school" },

      { name: "Middel-School", path: "/middel-school" },
      { name: "High-School", path: "/high-school" },
    ],
  },
  {
    name: "LeaderShip",
    path: "/leadership",
    submenu: [
      { name: "Faculty", path: "/Faculty" },
      { name: "Quran Memorization", path: "/memorizaton" },
      { name: "Athelatics", path: "/athelatics" },
      { name: "Student Life", path: "/student-life" },
      { name: "Career", path: "/career" },
    ],
  },
];

const quickLinks = [
  { name: "Calendar", path: "/calendar" },
  { name: "Library", path: "/library" },
  { name: "Events", path: "/events" },
  { name: "Clubs", path: "/clubs-and-organizations" },
  { name: "Alumni", path: "/alumni" },
  { name: "Gallery", path: "/gallery" },
  { name: "News", path: "/news" },
  { name: "Staff", path: "/staff" },
  { name: "Contact", path: "/contact" },
  { name: "Support", path: "/support" },
];

export default function NavbarLayout() {
  const [showSplash, setShowSplash] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [hovered, setHovered] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [ayatAnimationComplete, setAyatAnimationComplete] = useState(false);
  const [showHeroText, setShowHeroText] = useState(false);
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState(null);
  const location = useLocation();

  // End splash after 1.5s
  useEffect(() => {
    const t = setTimeout(() => setShowSplash(false), 1500);
    return () => clearTimeout(t);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
    setOpenMobileSubmenu(null);
  }, [location.pathname]);

  // Handle scroll for ayat fade out effect
  useEffect(() => {
    if (!ayatAnimationComplete) return;

    const handleScroll = () => {
      const heroSection = document.querySelector(".hero-section");
      if (!heroSection) return;

      const sectionHeight = heroSection.offsetHeight;
      const scrollY = window.scrollY;
      const progress = Math.min(scrollY / (sectionHeight * 0.6), 1);
      setScrollProgress(progress);

      // Show hero text when scroll progress reaches a certain point
      if (progress > 0.4 && !showHeroText) {
        setShowHeroText(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [ayatAnimationComplete, showHeroText]);

  const toggleMobileSubmenu = (menuName) => {
    setOpenMobileSubmenu(openMobileSubmenu === menuName ? null : menuName);
  };

  const handleSubmenuItemClick = () => {
    // Close navbar when any submenu item is clicked
    setIsOpen(false);
    setOpenMobileSubmenu(null);
  };

  const handleMainMenuLinkClick = (item) => {
    // For main menu links without submenus, close the menu
    if (!item.submenu) {
      setIsOpen(false);
    }
  };

  // Ayat fades out completely first (0% to 70% scroll), then hero text fades in (70% to 100% scroll)
  const ayatOpacity = Math.max(0, 1 - scrollProgress / 0.3);
  const heroTextOpacity = Math.max(0, (scrollProgress - 0.4) / 0.1);

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
            className="px-8 py-4 bg-white relative z-50 font-serif"
          >
            {/* Top Row */}
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <img
                  src="/logo.png"
                  alt="Logo"
                  className="w-16 h-16 object-contain"
                />
              </div>

              <div className="flex items-center gap-6">
                <button className="bg-[#0E2954] text-white px-5 py-2 rounded-md text-sm hover:bg-[#1a376b] transition">
                  INQUIRE
                </button>

                {isOpen ? (
                  <FaTimes
                    className="text-3xl text-gray-800 cursor-pointer"
                    onClick={() => setIsOpen(false)}
                  />
                ) : (
                  <FaBars
                    className="text-3xl text-gray-800 cursor-pointer"
                    onClick={() => setIsOpen(true)}
                  />
                )}
              </div>
            </div>

            {/* Overlay */}
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ clipPath: "circle(8% at 100% 0%)" }}
                  animate={{ clipPath: "circle(150% at 100% 0%)" }}
                  exit={{ clipPath: "circle(8% at 100% 0%)" }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="fixed inset-0 bg-[#0E2954] flex overflow-y-auto"
                >
                  <div className="flex-1 flex flex-col relative">
                    {/* Header inside overlay */}
                    <div className="flex justify-between items-center px-8 py-6">
                      <img
                        src="/logo.png"
                        alt="Logo"
                        className="w-16 h-16 object-contain"
                      />
                      <FaTimes
                        className="text-4xl text-white cursor-pointer"
                        onClick={() => setIsOpen(false)}
                      />
                    </div>

                    {/* Menu links */}
                    <div className="flex-1 flex flex-col items-start gap-8 mt-12 px-10">
                      {menuItems.map((item, index) => (
                        <div
                          key={index}
                          className="relative w-full"
                          onMouseEnter={() => setHovered(item.name)}
                          onMouseLeave={() => setHovered(null)}
                        >
                          {/* Mobile: Show dropdown for submenus */}
                          <div className="flex flex-col w-full">
                            <div className="flex items-center justify-between w-full">
                              <div className="flex items-center">
                                {/* Main menu link - always clickable */}
                                <Link
                                  to={item.path}
                                  className="relative text-white text-3xl md:text-5xl font-medium group"
                                  onClick={() => handleMainMenuLinkClick(item)}
                                >
                                  {item.name}
                                  <span className="absolute left-1/2 -translate-x-1/2 bottom-[-6px] w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-10"></span>
                                </Link>

                                {/* Mobile dropdown arrow - only show on mobile and for items with submenu */}
                                {item.submenu && (
                                  <button
                                    className="md:hidden text-white text-2xl ml-4"
                                    onClick={() =>
                                      toggleMobileSubmenu(item.name)
                                    }
                                  >
                                    {openMobileSubmenu === item.name ? (
                                      <FaChevronUp />
                                    ) : (
                                      <FaChevronDown />
                                    )}
                                  </button>
                                )}
                              </div>
                            </div>

                            {/* Mobile submenu dropdown */}
                            {item.submenu && (
                              <AnimatePresence>
                                {openMobileSubmenu === item.name && (
                                  <motion.div
                                    variants={mobileSubmenuVariants}
                                    initial="closed"
                                    animate="open"
                                    exit="closed"
                                    className="md:hidden overflow-hidden w-full mt-4 ml-6"
                                  >
                                    <div className="flex flex-col gap-4">
                                      {item.submenu.map((sub, i) => (
                                        <Link
                                          key={i}
                                          to={sub.path}
                                          className="text-white text-xl font-normal py-2 hover:pl-2 transition-all duration-300 border-l-2 border-white/30 pl-4"
                                          onClick={handleSubmenuItemClick}
                                        >
                                          {sub.name}
                                        </Link>
                                      ))}
                                    </div>
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Quick links */}
                    <div className="px-8 py-8 md:absolute md:bottom-12 md:right-16 md:w-[340px]">
                      <h3 className="text-white text-lg md:text-xl mb-4">
                        Quick Links
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {quickLinks.map((link, i) => (
                          <Link
                            key={i}
                            to={link.path}
                            className="flex items-center gap-2 text-base md:text-xl border-b border-white/40 text-white hover:pl-1 transition-all duration-300"
                            onClick={() => setIsOpen(false)}
                          >
                            <FaArrowRight size={14} />
                            {link.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Desktop Submenu */}
                  <AnimatePresence>
                    {hovered &&
                      menuItems.find((item) => item.name === hovered)
                        ?.submenu && (
                        <motion.div
                          initial={{ opacity: 0, x: 100 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 100 }}
                          transition={{ duration: 0.4, ease: "easeOut" }}
                          className="hidden md:flex absolute top-0 left-80 bottom-0 gap-2 z-50"
                          style={{ minWidth: "200px" }}
                          onMouseEnter={() => setHovered(hovered)}
                          onMouseLeave={() => setHovered(null)}
                        >
                          <div className="w-1 bg-white rounded-full my-30"></div>
                          <div className="flex flex-col gap-2 p-4 pt-44 bg-[#0E2954]">
                            {menuItems
                              .find((item) => item.name === hovered)
                              ?.submenu?.map((sub, i) => (
                                <motion.div
                                  key={i}
                                  initial={{ opacity: 0, x: 20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: i * 0.1 + 0.2 }}
                                >
                                  <Link
                                    to={sub.path}
                                    className="block text-white text-lg font-medium py-2 hover:pl-2 transition-all duration-300 hover:bg-white/10 rounded-md px-2"
                                    onClick={() => setIsOpen(false)}
                                  >
                                    {sub.name}
                                  </Link>
                                </motion.div>
                              ))}
                          </div>
                        </motion.div>
                      )}
                  </AnimatePresence>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.nav>

          {/* Hero with animated ayat.svg */}
          <main className="px-8">
            <Parallax strength={600}>
              <section
                className="hero-section relative h-[80vh] sm:h-[90vh] grid place-items-center"
                aria-label="Hero"
              >
                {/* Ayat Section */}
                <motion.div
                  style={{ opacity: ayatOpacity }}
                  className="transition-opacity duration-300"
                >
                  <motion.img
                    src="/ayat.svg"
                    alt="Ayah"
                    variants={ayatVariants}
                    initial="hidden"
                    animate="show"
                    onAnimationComplete={() => setAyatAnimationComplete(true)}
                    className="w-[260px] sm:w-[260px] md:w-[920px] max-w-full mx-auto object-contain mt-16 sm:mt-20"
                  />
                </motion.div>

                {/* Hero Text - appears only after ayat is mostly faded */}
                <div className="absolute inset-0 flex items-end justify-center pointer-events-none ">
                  <motion.div
                    style={{ opacity: heroTextOpacity }}
                    className="w-full max-w-4xl mx-auto px-4 transition-opacity duration-500 pointer-events-auto"
                  >
                    <AnimatePresence>
                      {showHeroText && (
                        <motion.div
                          variants={heroTextVariants}
                          initial="hidden"
                          animate="visible"
                          className="w-full"
                        >
                          <HeroText />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </div>
              </section>
            </Parallax>
          </main>
        </div>
      )}
    </div>
  );
}
