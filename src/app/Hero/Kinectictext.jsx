"use client";
import { 
  motion, 
  useScroll, 
  useTransform, 
  useSpring, 
  useVelocity, 
  useAnimationFrame,
  useMotionValue // Add this import
} from "framer-motion";
import { useRef } from "react";

// Manual wrap function (no library needed)
const wrap = (min, max, v) => {
    const rangeSize = max - min;
    return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

function ParallaxText({ children, baseVelocity = 100 }) {
  // FIX: Change useRef to useMotionValue
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

  // Now useTransform will work because baseX is a MotionValue
  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef(1);
  
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

   
    
    baseX.set(baseX.get() + moveBy); 
  });

  return (
    <div className="overflow-hidden tracking-tighter leading-[0.8] whitespace-nowrap flex flex-nowrap">
      <motion.div className="flex whitespace-nowrap gap-10 font-black uppercase" style={{ x }}>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
      </motion.div>
    </div>
  );
}

export default function KineticIntroduction() {
  return (
    <main className="bg-[#050505] relative md:h-[100vh] h-[60vh] ">
      <section className="sticky top-[40%] flex flex-col gap-4">
        <ParallaxText baseVelocity={-2}>
          <span className="font-display test-white italic text-[12vw]">MIQDAM'S</span>
          <span className="text-emerald-500 text-[12vw] font-sans"> CREATIVITY</span>
        </ParallaxText>
        <ParallaxText baseVelocity={2}>
          <span className="text-white/20 text-[12vw] font-display">NEXT.JS R3F GSAP INTERFACES</span>
        </ParallaxText>
      </section>
    </main>
  );
}