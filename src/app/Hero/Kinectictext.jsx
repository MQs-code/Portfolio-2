"use client";

import { 
  motion, 
  useScroll, 
  useTransform, 
  useSpring, 
  useVelocity, 
  useAnimationFrame,
  useMotionValue 
} from "framer-motion";
import { useRef, useEffect } from "react";
import { wrap } from "@motionone/utils"; // Faster than manual math

function ParallaxText({ children, baseVelocity = 100 }) {
  const baseX = useMotionValue(0); 
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  
  // High damping and lower stiffness creates that "buttery" feel
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 60,
    stiffness: 300
  });

  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  });

  // Wider wrap range (-20 to -45) ensures the loop is invisible
  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef(1);
  
  useAnimationFrame((t, delta) => {
    // Delta-based movement ensures it runs at the same speed on 60Hz and 144Hz monitors
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy); 
  });

  return (
    <div className="overflow-hidden tracking-tighter leading-[0.8] whitespace-nowrap flex flex-nowrap py-2 select-none">
      <motion.div 
        className="flex whitespace-nowrap gap-10 font-black uppercase will-change-transform" 
        style={{ x }}
      >
        <span className="block">{children} </span>
        <span className="block">{children} </span>
        <span className="block">{children} </span>
        <span className="block">{children} </span>
      </motion.div>
    </div>
  );
}

export default function KineticIntroduction() {
  return (
    <main className="bg-[#030303] relative w-full overflow-hidden m-0 p-0 border-none">
      <section className="relative min-h-[60vh] flex flex-col justify-center items-center py-10 md:py-20">
        
        {/* Subtle radial gradient for depth */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-500/10 via-transparent to-transparent blur-3xl opacity-50 pointer-events-none" />

        <div className="flex flex-col gap-2 md:gap-4 w-full z-10">
          <ParallaxText baseVelocity={-1.5}>
            <span className="italic text-[14vw] md:text-[11vw] text-white tracking-[-0.05em]">
              MIQDAM'S
            </span>
            <span className="text-emerald-500 text-[14vw] md:text-[11vw] font-outline-2">
              {" "}CREATIVITY
            </span>
          </ParallaxText>
          
          <ParallaxText baseVelocity={1.5}>
            <span className="text-white/5 text-[14vw] md:text-[11vw] hover:text-white/10 transition-colors duration-700">
              NEXT.JS R3F GSAP INTERFACES
            </span>
          </ParallaxText>
        </div>

      </section>

      {/* Modern Global Reset */}
      <style jsx global>{`
        .font-outline-2 {
          -webkit-text-stroke: 1px rgba(16, 185, 129, 0.5);
          color: transparent;
        }
        @media (min-width: 768px) {
          .font-outline-2 { -webkit-text-stroke: 2px #10b981; }
        }
      `}</style>
    </main>
  );
}