"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Introduction() {
  const [isLoaded, setIsLoaded] = useState(false);

  // Fix for the "extra scrollbar" caused by 100vw
  useEffect(() => {
    document.documentElement.style.overflowX = "hidden";
    document.body.style.overflowX = "hidden";
    return () => {
      document.documentElement.style.overflowX = "";
      document.body.style.overflowX = "";
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 1.4, ease: [0.19, 1, 0.22, 1] }
    }
  };

  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-[#050505] selection:bg-emerald-500 selection:text-white">
      {/* GLOBAL CSS TO HIDE SCROLLBARS BUT KEEP SCROLLING FUNCTIONAL */}
      <style jsx global>{`
        ::-webkit-scrollbar {
          display: none;
        }
        * {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
      `}</style>

      <section className="flex flex-col lg:flex-row min-h-screen w-full text-white relative">
        
        {/* Left Content Side */}
        <div className="w-full lg:w-[50vw] flex flex-col justify-center lg:justify-end h-screen lg:h-[90vh] p-8 md:p-16 lg:p-24 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex flex-col mb-8 lg:mb-12"
          >
            <h1 className="text-6xl md:text-7xl lg:text-8xl italic font-extralight tracking-tighter text-white leading-none">
              Elite
            </h1>
            <h2 className="font-sans text-[12vw] md:text-[5rem] lg:text-[4.5rem] leading-[0.85] tracking-tight font-black uppercase text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-500">
              DIGITAL <br /> EXPERIENCE
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="space-y-6"
          >
            <h3 className="text-white/40 font-light flex flex-col md:flex-row md:items-baseline gap-2 md:gap-4">
              <span className="text-[10px] md:text-xs tracking-[0.3em] uppercase opacity-50">
                Identity //
              </span>
              <span className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase">
                MIQDAM <span className="text-emerald-500">ALI</span>
              </span>
            </h3>

            <p className="font-ubuntu max-w-md text-base md:text-lg text-neutral-400 font-light leading-relaxed">
              Architecting the future of the web where
              <span className="text-white uppercase px-1.5 font-bold"> Next.js </span>
              efficiency meets the cinematic depth of
              <span className="text-emerald-400 uppercase font-bold px-1.5 block md:inline md:underline decoration-emerald-500/30 underline-offset-8">
                3D | React & R3F 
              </span>
              .
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-10 lg:mt-12"
          >
            <button className="group relative bg-emerald-500 px-8 md:px-12 py-3 md:py-4 rounded-lg overflow-hidden transition-transform active:scale-95 cursor-pointer">
              <span className="relative z-10 text-[13px] md:text-[15px] font-bold uppercase tracking-[0.2em] text-white group-hover:text-black transition-colors duration-300">
                Explore Work
              </span>
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 hidden lg:block" />
            </button>
          </motion.div>
        </div>

        {/* Right Visual Side */}
        <div className="w-full lg:w-[50vw] relative flex justify-center items-center h-[60vh] lg:h-screen bg-[#050505]">
          
          {/* Motion Background Text */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.02, scale: 1 }}
            transition={{ duration: 2 }}
            className="absolute inset-0 pointer-events-none select-none flex items-center justify-center overflow-hidden"
          >
            <h4 className="text-[40vw] lg:text-[25vw] font-black italic rotate-12">
              MQS
            </h4>
          </motion.div>

          {/* Main Image Container */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="relative w-[85%] lg:w-[75%] aspect-square overflow-hidden rounded-2xl group z-10"
          >
            <AnimatePresence>
              {!isLoaded && (
                <motion.div 
                  exit={{ opacity: 0, scale: 1.1 }}
                  className="absolute inset-0 z-20 bg-[#080808] flex items-center justify-center"
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/20 to-transparent h-full w-full animate-[scan_2.5s_ease-in-out_infinite]" />
                  <div className="w-24 h-24 border border-emerald-500/20 rounded-full animate-ping" />
                </motion.div>
              )}
            </AnimatePresence>

            <Image
              src="/profile.png"
              alt="Miqdam Ali Portfolio"
              fill
              priority
              onLoadingComplete={() => setIsLoaded(true)}
              unoptimized
              className={`object-contain transition-all duration-[2s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-105 ${
                isLoaded ? "opacity-100 scale-100 blur-0" : "opacity-0 scale-150 blur-3xl"
              }`}
            />

            {/* Motion Corners */}
            <motion.div 
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2 }}
              className="absolute top-4 right-4 w-10 h-10 border-t-2 border-r-2 border-emerald-500/30 group-hover:border-emerald-500 group-hover:w-14 group-hover:h-14 transition-all duration-500 z-30" 
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2 }}
              className="absolute bottom-4 left-4 w-10 h-10 border-b-2 border-l-2 border-emerald-500/30 group-hover:border-emerald-500 group-hover:w-14 group-hover:h-14 transition-all duration-500 z-30" 
            />
          </motion.div>

          {/* Background Glow */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 2 }}
            className="absolute w-[450px] h-[450px] bg-emerald-500/5 blur-[130px] rounded-full -z-10" 
          />
        </div>
      </section>
    </main>
  );
}