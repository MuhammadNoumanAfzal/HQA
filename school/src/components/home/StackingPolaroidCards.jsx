import React, { useMemo, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

/**
 * StackingPolaroidCards
 * - TailwindCSS + Framer Motion
 * - As you scroll, cards appear one-by-one and stack in a (stable) random order
 * - Pass your own images via the `images` prop; otherwise a few placeholders are used
 *
 * Usage:
 * <StackingPolaroidCards images={["/img/1.jpg", "/img/2.jpg", "/img/3.jpg"]} seed={7} />
 */
export default function StackingPolaroidCards({
  images = ["/card.webp", "/card1.webp", "card.webp"],
  seed = 42,
  title = "Stacking Cards",
}) {
  const stageRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: stageRef,
    offset: ["start start", "end end"],
  });

  // --- Utilities for stable randomization ---
  const rng = useMemo(() => mulberry32(seed), [seed]);
  const order = useMemo(() => shuffle([...images.keys()], rng), [images, rng]);
  const variations = useMemo(
    () =>
      order.map(() => ({
        // slight random offsets/rotations for an organic stack
        rot: lerp(rng(), -12, 12), // degrees
        x: lerp(rng(), -36, 36), // px
        y: lerp(rng(), -18, 18), // px
      })),
    [order, rng]
  );

  const total = order.length;
  const step = 1 / (total + 1); // +1 so the last card gets full time to arrive

  return (
    <section
      ref={stageRef}
      aria-label={title}
      className="relative h-[calc(100vh_*_6)] sm:h-[calc(100vh_*_7)]  text-gray-900"
    >
      {/* Sticky stage where the cards stack */}
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <div className="relative w-full max-w-5xl h-full">
          {/* Cards */}
          {order.map((imgIndex, i) => {
            const start = step * i;
            const end = step * (i + 1);

            const progressRaw = useTransform(
              scrollYProgress,
              [start, end],
              [0, 1]
            );
            const progress = useSpring(progressRaw, {
              stiffness: 45,
              damping: 20,
              mass: 1,
            });

            const opacity = useTransform(progress, [0, 1], [0, 1]);
            const translateY = useTransform(progress, [0, 1], [120, 0]);
            const scale = useTransform(progress, [0, 1], [0.92, 1]);
            const rotate = useTransform(
              progress,
              [0, 1],
              [0, variations[i].rot]
            );
            const translateX = useTransform(
              progress,
              [0, 1],
              [0, variations[i].x]
            );
            const offsetY = useTransform(
              progress,
              [0, 1],
              [0, variations[i].y]
            );

            return (
              <motion.figure
                key={`card-${imgIndex}`}
                style={{
                  opacity,
                  y: translateY,
                  x: translateX,
                  rotate,
                  scale,
                  zIndex: 10 + i,
                }}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[260px] sm:w-[320px] md:w-[320px] aspect-[3/4] select-none pointer-events-none"
              >
                <div className="bg-zinc-900 rounded-xl shadow-2xl shadow-black/40 border border-black/10 p-2 sm:p-3 flex flex-col h-full">
                  <div className="relative overflow-hidden rounded-lg h-full">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={images[imgIndex]}
                      alt="card"
                      className="w-full h-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />

                    {/* subtle glossy overlay */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-white/10 mix-blend-overlay" />
                  </div>

                  {/* Polaroid footer */}
                  <div className="mt-2 sm:mt-3 px-2 sm:px-3 pb-1 sm:pb-2 text-zinc-100 flex items-end justify-between">
                    <span className="text-[10px] sm:text-xs opacity-80 italic">
                      Karolina K
                    </span>
                    <span className="text-[10px] sm:text-xs opacity-70 tracking-wider">
                      {formatDate(new Date())}
                    </span>
                  </div>
                </div>
              </motion.figure>
            );
          })}

          {/* Subtle backdrop text to echo the reference style */}
        </div>
      </div>
    </section>
  );
}

// ---------- helpers ----------
function mulberry32(a) {
  let t = a + 0x6d2b79f5;
  return function () {
    t |= 0;
    t = (t + 0x6d2b79f5) | 0;
    let r = Math.imul(t ^ (t >>> 15), 1 | t);
    r ^= r + Math.imul(r ^ (r >>> 7), 61 | r);
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
  };
}

function shuffle(arr, rand) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function lerp(t, a, b) {
  return a + t * (b - a);
}

function formatDate(d) {
  const dd = String(d.getDate()).padStart(2, "0");
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const yyyy = d.getFullYear();
  return `${dd}/${mm}/${yyyy}`;
}
