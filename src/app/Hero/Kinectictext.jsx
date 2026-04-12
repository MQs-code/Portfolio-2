"use client";

import { motion, useScroll, useTransform } from "framer-motion";

function ParallaxText({ children, direction = "left" }) {
  const { scrollYProgress } = useScroll();
  
  // We use scroll position to subtly shift the track, 
  // but the constant movement is handled by CSS.
  const xShift = useTransform(scrollYProgress, [0, 1], [0, direction === "left" ? -200 : 200]);

  return (
    <div className="overflow-hidden whitespace-nowrap flex flex-nowrap py-2 select-none">
      <motion.div 
        style={{ x: xShift }}
        className={`flex whitespace-nowrap gap-10 font-black uppercase will-change-transform ${
          direction === "left" ? "animate-marquee-left" : "animate-marquee-right"
        }`}
      >
        {/* Render multiple times to ensure seamless loop */}
        {[...Array(6)].map((_, i) => (
          <span key={i} className="block">{children}</span>
        ))}
      </motion.div>
    </div>
  );
}

export default function KineticIntroduction() {
  return (
    <main className="bg-[#030303] relative w-full overflow-hidden">
      <section className="relative min-h-[40vh] flex flex-col justify-center items-center py-10 md:py-20">
        
        {/* Static Glow - No blur animation to save GPU memory */}
        <div className="absolute inset-0 bg-emerald-500/5 blur-[120px] pointer-events-none" />

        <div className="flex flex-col gap-4 w-full z-10">
          <ParallaxText direction="left">
            <span className="italic text-[14vw] md:text-[11vw] text-white tracking-tighter">
              MIQDAM'S
            </span>
            <span className="font-outline-2 text-[14vw] md:text-[11vw]">
              {" "}CREATIVITY
            </span>
          </ParallaxText>
          
          <ParallaxText direction="right">
            <span className="text-white/5 text-[14vw] md:text-[11vw]">
              NEXT.JS R3F GSAP INTERFACES
            </span>
          </ParallaxText>
        </div>
      </section>

      <style jsx global>{`
        .font-outline-2 {
          -webkit-text-stroke: 1px #10b981;
          color: transparent;
        }

        /* High-performance CSS marquee */
        .animate-marquee-left {
          animation: marquee-l 30s linear infinite;
        }
        .animate-marquee-right {
          animation: marquee-r 30s linear infinite;
        }

        @keyframes marquee-l {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes marquee-r {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }

        /* Disable animations if user has "Reduce Motion" enabled */
        @media (prefers-reduced-motion: reduce) {
          .animate-marquee-left, .animate-marquee-right {
            animation: none;
          }
        }
      `}</style>
    </main>
  );
}