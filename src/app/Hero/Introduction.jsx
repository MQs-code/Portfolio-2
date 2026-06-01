"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

export default function Introduction() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  
  const handleNavClick = (id) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <main className="relative w-full bg-[#050505] pt-20 md:pt-0">
      <section className="flex flex-col lg:flex-row min-h-[100dvh] w-full text-white relative">
        
        <div className="w-full lg:w-[50vw] flex flex-col justify-center p-8 md:p-16 lg:p-24 relative z-10 order-1">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ 
              duration: 0.8, 
              ease: [0.16, 1, 0.3, 1]
            }}
            className="will-change-transform"
          >
            <h1 className="text-6xl md:text-7xl lg:text-8xl italic font-extralight tracking-tighter leading-none">
              Elite
            </h1>
            <h2 className="font-sans text-[11vw] md:text-[5rem] lg:text-[4.5rem] leading-[0.85] tracking-tight font-black uppercase text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-500">
              DIGITAL <br /> EXPERIENCE
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              delay: 0.15, 
              duration: 0.8, 
              ease: [0.16, 1, 0.3, 1] 
            }}
            className="mt-6 space-y-6 will-change-transform"
          >
            <h3 className="text-white/40 font-light flex flex-col md:flex-row md:items-baseline gap-2">
              <span className="text-[10px] tracking-[0.3em] uppercase opacity-50">Identity //</span>
              <span className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase">
                MIQDAM <span className="text-emerald-500">ALI</span>
              </span>
            </h3>
            <p className="max-w-md text-base md:text-lg text-neutral-400 font-light leading-relaxed">
              Engineering high-performance ecosystems. Crafting lightning-fast 
              <span className="text-white font-bold"> Web & Mobile </span> applications powered by Next.js, React Native, and immersive 
              <span className="text-emerald-500 font-bold block md:inline"> 3D Graphics</span>.
            </p>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
             className="mt-10"
          >
            <button onClick={()=> handleNavClick('projects')} className="group relative bg-emerald-500 px-8 py-4 rounded-lg overflow-hidden active:scale-95 transition-all duration-300">
              <span className="relative z-10 text-[13px] font-bold uppercase tracking-[0.2em] text-white group-hover:text-black transition-colors duration-300">
                Explore Work
              </span>
              <div className="absolute inset-0 bg-white translate-y-full lg:group-hover:translate-y-0 transition-transform duration-500 ease-[0.76, 0, 0.24, 1]" />
            </button>
          </motion.div>
        </div>

        {/* IMAGE CONTAINER SECTION */}
        <div className="w-full lg:w-[50vw] relative flex justify-center items-center h-[40svh] lg:h-screen order-2">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 0.95 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-[80%] aspect-square z-10 will-change-transform"
          >
            {/* Core Responsive Asset */}
            <Image
              src="/pro.png"
              fill
              priority
              alt="Miqdam Ali Portfolio Graphic"
              className="object-contain"
              onLoad={() => setIsLoaded(true)}
              className='rounded-2xl' // Correct Next.js event listener to toggle state
            />
          </motion.div>

          {/* CONDITIONAL LOADER WITH ANIMATE PRESENCE */}
          <AnimatePresence>
            {!isLoaded && (
              <motion.div 
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 z-20 flex items-center justify-center bg-[#050505]"
              >
                <div className="w-6 h-6 border-2 border-emerald-500/20 border-t-emerald-500 rounded-full animate-spin" />
              </motion.div>
            )}
          </AnimatePresence>

          <div className="absolute w-[60%] aspect-square bg-emerald-500/[0.05] blur-[150px] rounded-full -z-10 animate-pulse pointer-events-none" style={{ animationDuration: '4s' }} />
        </div>
      </section>
    </main>
  );
}