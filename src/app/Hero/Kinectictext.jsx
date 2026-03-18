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

// Manual wrap function
const wrap = (min, max, v) => {
    const rangeSize = max - min;
    return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

function ParallaxText({ children, baseVelocity = 100 }) {
  const baseX = useMotionValue(0); 
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });

  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  });

  // Wider wrap range to prevent "jumping" on large screens
  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef(1);
  
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    // This makes the scroll direction dictate the text direction
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    // Multiply movement by velocity factor to make it "scroll-controlled"
    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy); 
  });

  return (
    <div className="overflow-hidden tracking-tighter leading-[0.8] whitespace-nowrap flex flex-nowrap py-2">
      <motion.div className="flex whitespace-nowrap gap-10 font-black uppercase" style={{ x }}>
        <span className="block">{children} </span>
        <span className="block">{children} </span>
        <span className="block">{children} </span>
        <span className="block">{children} </span>
      </motion.div>
    </div>
  );
}

export default function KineticIntroduction() {
  // Reset scroll and margins to prevent "upper space"
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-[#050505] relative w-full overflow-hidden border-none m-0 p-0">
      {/* Removing 'h-screen' here and using a specific min-h 
          prevents the "dead space" between this and the next section.
      */}
      <section className="relative py-20 md:py-32 flex flex-col justify-center items-center overflow-hidden">
        
        {/* Decorative background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="flex flex-col gap-4 md:gap-8 w-full z-10">
          <ParallaxText baseVelocity={-2}>
            <span className="italic text-[15vw] md:text-[12vw] text-white">MIQDAM'S</span>
            <span className="text-emerald-500 text-[15vw] md:text-[12vw]"> CREATIVITY</span>
          </ParallaxText>
          
          <ParallaxText baseVelocity={2}>
            <span className="text-white/10 text-[15vw] md:text-[12vw]">NEXT.JS R3F GSAP INTERFACES</span>
          </ParallaxText>
        </div>

      </section>

      <style jsx global>{`
        /* Forces zero gap between sections */
        html, body {
          margin: 0;
          padding: 0;
          background: #050505;
        }
      `}</style>
    </main>
  );
}