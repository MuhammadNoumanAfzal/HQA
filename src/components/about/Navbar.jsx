import { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaArrowRight,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

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
      { name: "Middel-School", path: "/middel-school" },
      { name: "High-School", path: "/high-school" },
      { name: "Elementry-School", path: "/elementry-school" },
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

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hovered, setHovered] = useState(null);
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState(null);

  const toggleMobileSubmenu = (menuName) => {
    setOpenMobileSubmenu(openMobileSubmenu === menuName ? null : menuName);
  };

  const handleMainMenuLinkClick = (item) => {
    // Close the navbar when any main menu item is clicked
    setIsOpen(false);
    setOpenMobileSubmenu(null);
  };

  const handleSubmenuItemClick = () => {
    // Close navbar when any submenu item is clicked
    setIsOpen(false);
    setOpenMobileSubmenu(null);
  };

  const handleQuickLinkClick = () => {
    // Close navbar when any quick link is clicked
    setIsOpen(false);
  };

  return (
    <nav className="px-8 py-4 bg-white relative z-50 font-serif">
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
            INQUIRE{" "}
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
                          {/* Main menu link - always navigates to its page */}
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
                              onClick={() => toggleMobileSubmenu(item.name)}
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
                      onClick={handleQuickLinkClick}
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
                menuItems.find((item) => item.name === hovered)?.submenu && (
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
                              onClick={() => {
                                setIsOpen(false);
                                setHovered(null);
                              }}
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
    </nav>
  );
}
