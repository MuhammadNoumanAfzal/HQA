export const SlideUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      delay,
      ease: [0.25, 0.1, 0.25, 1],
      type: "tween",
    },
  },
});

export const SlideLeft = (delay = 0) => ({
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.9,
      delay,
      ease: [0.25, 0.1, 0.25, 1],
      type: "tween",
    },
  },
});

export const SlideRight = (delay = 0) => ({
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.9,
      delay,
      ease: [0.25, 0.1, 0.25, 1],
      type: "tween",
    },
  },
});

// ✅ Special smoother animation for buttons
export const SlideButton = (delay = 0) => ({
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      delay,
      ease: "easeOut",
      type: "spring",
      stiffness: 120,
    },
  },
});
