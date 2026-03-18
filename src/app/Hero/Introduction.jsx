"use client";

import { motion } from "framer-motion";
import Image from "next/image";
export default function Introduction() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden selection:bg-emerald-500 selection:text-white bg-[#050505]">
      <section className="flex flex-col lg:flex-row min-h-screen w-full text-white">
        {/* Left Content Side */}
        <div className="w-full lg:w-[50vw] flex flex-col justify-center lg:justify-end h-screen lg:h-[90vh] p-8 md:p-16 lg:p-24 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
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
              <span className="text-white uppercase px-1.5 font-bold">
                {" "}
                Next.js
              </span>
              efficiency meets the cinematic depth of
              <span className="text-emerald-400 uppercase font-bold px-1.5 block md:inline md:underline decoration-emerald-500/30 underline-offset-8">
                3D | React & R3F 
              </span>
              .
            </p>
          </motion.div>

          <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.5 }}
  className="mt-10 lg:mt-12 flex items-center gap-10"
>
  <button 
    onClick={() => {
      const element = document.getElementById('projects');
      if (element) {
        const yOffset = -80; // Navbar height offset
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }}
    className="group relative bg-emerald-500 px-8 md:px-12 py-3 md:py-4 rounded-lg overflow-hidden transition-transform active:scale-95 cursor-pointer"
  >
    <span className="relative z-10 text-[13px] md:text-[15px] font-bold uppercase tracking-[0.2em] text-black lg:text-white lg:group-hover:text-black transition-colors duration-300">
      Explore Work
    </span>
    
    {/* Hover slide effect (Desktop only) */}
    <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 hidden lg:block" />
  </button>
</motion.div>
        </div>

        {/* Right Visual Side - Refined for Glow Retention */}
<div className="w-full lg:w-[50vw] relative flex justify-center items-center h-[50vh] lg:h-screen bg-[#050505]">
  
  {/* Background MQS Text - Thora aur subtle kiya taaki image pop kare */}
  <div className="absolute inset-0 opacity-[0.02] pointer-events-none select-none flex items-center justify-center overflow-hidden">
    <h4 className="text-[40vw] lg:text-[25vw] font-black italic rotate-12 lg:rotate-15">
      MQS
    </h4>
  </div>

  {/* Image Container */}
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1.2, ease: "easeOut" }}
    className="relative w-[85%] lg:w-[75%] aspect-square overflow-hidden rounded-2xl group"
  >
    {/* Profile Image - Optimized for Glow */}
    <Image
      src="/profile.png"
      alt="Miqdam Ali Portfolio"
      fill
      priority
      unoptimized // Ye Next.js ki automatic compression ko bypass karega taaki colors na bigrein
      className="object-contain transition-transform duration-1000 group-hover:scale-105"
    />

    {/* Subtle Inner Glow - Image ke icons ke colors ko match karne ke liye */}
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.05)_0%,transparent_70%)] pointer-events-none" />

    {/* Luxury Corners - Emerald colors adjusted */}
    <div className="absolute top-4 right-4 w-10 h-10 border-t-2 border-r-2 border-emerald-500/30 group-hover:border-emerald-500/60 transition-colors duration-500" />
    <div className="absolute bottom-4 left-4 w-10 h-10 border-b-2 border-l-2 border-emerald-500/30 group-hover:border-emerald-500/60 transition-colors duration-500" />
  </motion.div>

  {/* Glow Orb behind the image to make it look 3D */}
  <div className="absolute w-[400px] h-[400px] bg-emerald-500/5 blur-[120px] rounded-full -z-10" />
</div>
      </section>
      
    </main>
  );
}
