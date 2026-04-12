"use client";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

export default function AboutPage() {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".reveal", {
        y: 40,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "power4.out",
      });
      
      gsap.from(".line-grow", {
        scaleX: 0,
        duration: 1.5,
        delay: 0.5,
        ease: "expo.inOut",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={containerRef} className="relative bg-[#020202] text-white min-h-screen overflow-x-hidden">
      {/* BACKGROUND GLOWS: Hidden on mobile to keep performance fast */}
      <div className="hidden md:block absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-[-10%] w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />

      {/* MAIN CONTAINER: Dynamic padding for mobile vs desktop */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-24 md:pt-32 pb-20">
        
        {/* THE GRID: Stacks on mobile (1 column), Side-by-side on large screens (lg:grid-cols-2) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* LEFT SIDE: Name & Identity */}
          {/* 'lg:sticky' means it only stays fixed on desktop. On mobile, it scrolls normally. */}
          <div className="lg:sticky lg:top-32">
            <div className="flex items-center gap-4 mb-6 md:mb-8 reveal">
              <span className="h-[1px] w-8 md:w-12 bg-emerald-500" />
              <span className="text-emerald-400 font-mono text-[10px] md:text-[11px] tracking-[0.5em] md:tracking-[0.8em] uppercase">
                Who am I
              </span>
            </div>
            
            {/* TYPOGRAPHY: Huge on desktop (9rem), readable on mobile (4xl) */}
            <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-[9rem] font-black uppercase tracking-tighter leading-[0.85] mb-6 md:mb-8 reveal">
              Miqdam <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-neutral-500 via-neutral-700 to-neutral-900">
                Ali
              </span>
            </h1>

            <div className="reveal">
              <div className="line-grow h-[1px] w-full bg-white/10 origin-left mb-6 md:mb-8" />
              <p className="text-neutral-500 font-mono text-[10px] md:text-xs uppercase tracking-[0.3em] md:tracking-[0.4em] leading-loose">
                Frontend Developer // <br />
                Next.js Specialist // <br />
                3D Experience Architect
              </p>
            </div>
          </div>

          {/* RIGHT SIDE: Narrative Content */}
          <div className="flex flex-col gap-12 md:gap-16 pt-0 lg:pt-20">
            
            {/* PHILOSOPHY */}
            <section className="reveal">
              <h2 className="text-emerald-500 font-mono text-[10px] uppercase tracking-[0.5em] mb-4 md:mb-6">The Philosophy</h2>
              <p className="text-lg md:text-2xl text-neutral-300 font-light leading-relaxed">
                I don’t just build websites; I construct digital <span className="text-white font-bold">atmospheres</span>. By merging high-end motion to make the web alive, I help brands bridge the gap between static design and immersive reality.
              </p>
            </section>

            {/* EXPERTISE GRID: 1 column on tiny phones, 2 columns on tablets/desktops */}
            <section className="reveal">
              <h2 className="text-emerald-500 font-mono text-[10px] uppercase tracking-[0.5em] mb-4 md:mb-6">Expertise</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8">
                {[
                  { title: "Core Tech", tech: "React / Next.js / TS" },
                  { title: "Motion", tech: "GSAP / Framer Motion" },
                  { title: "3D Rendering", tech: "Three.js / R3F" },
                  { title: "Styling", tech: "Tailwind / SCSS" }
                ].map((item, i) => (
                  <div key={i} className="border border-white/5 bg-white/[0.02] p-5 md:p-6 rounded-2xl hover:border-emerald-500/30 transition-colors">
                    <h3 className="text-[9px] md:text-[10px] text-neutral-500 uppercase tracking-widest mb-1 md:mb-2">{item.title}</h3>
                    <p className="text-sm md:text-base text-white font-bold tracking-tight">{item.tech}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* THE GOAL & CALL TO ACTION */}
            <section className="reveal pb-10">
              <h2 className="text-emerald-500 font-mono text-[10px] uppercase tracking-[0.5em] mb-4 md:mb-6">The Goal</h2>
              <p className="text-sm md:text-base text-neutral-400 leading-relaxed">
                Currently focused on building unified AI agents and luxury e-commerce experiences. My mission is to ensure that every pixel serves a purpose—and every interaction feels <span className="italic text-white">alive</span>.
              </p>
              
              <div className="mt-10 md:mt-12">
                <a href="/contact" className="inline-flex items-center gap-4 md:gap-6 group">
                  <span className="text-xs md:text-sm font-bold uppercase tracking-widest group-hover:text-emerald-400 transition-colors">Start a conversation</span>
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-emerald-500/50 group-hover:scale-110 transition-all">
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full shadow-[0_0_8px_#10b981]" />
                  </div>
                </a>
              </div>
            </section>
          </div>

        </div>
      </div>
    </main>
  );
}