"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";



export default function AboutPage() {
  const containerRef = useRef(null);

  useGSAP(() => {
    // Elegant entrance reveal for luxury typesetting
    gsap.from(".reveal", {
      y: 40,
      opacity: 0,
      duration: 1.2,
      stagger: 0.15,
      ease: "power4.out",
    });
    
    gsap.from(".line-grow", {
      scaleX: 0,
      duration: 1.5,
      delay: 0.4,
      ease: "expo.inOut",
    });
  }, { scope: containerRef });

  return (
    <main ref={containerRef} className="relative bg-[#020202] text-white min-h-screen overflow-x-hidden selection:bg-cyan-500/20">
      
      {/* LUXURY CYAN GLOWS: Calibrated opacity for high-end screens */}
      <div className="hidden md:block absolute top-0 right-0 w-[500px] h-[500px] bg-[#00f7ff]/5 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-[-10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#00f7ff]/5 blur-[140px] rounded-full pointer-events-none" />

      {/* MAIN LAYOUT WRAPPER */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-28 md:pt-40 pb-20">
        
        {/* THE RESPONSIVE GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* LEFT SIDE: Identity Structure */}
          <div className="lg:sticky lg:top-32 space-y-6 md:space-y-8">
            <div className="flex items-center gap-4 reveal">
              <span className="h-[1px] w-8 md:w-12 text-emerald-500" />
              <span className="text-emerald-500 font-mono text-[10px] md:text-[11px] tracking-[0.5em] md:tracking-[0.8em] uppercase">
                Who am I
              </span>
            </div>
            
            {/* HERO TYPOGRAPHY */}
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[8.5rem] font-black uppercase tracking-tighter leading-[0.85] reveal">
              Miqdam <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-neutral-200 via-neutral-500 to-neutral-800">
                Ali
              </span>
            </h1>

            <div className="reveal space-y-6 md:space-y-8">
              <div className="line-grow h-[1px] w-full bg-white/10 origin-left" />
              <p className="text-neutral-500 font-mono text-[10px] md:text-xs uppercase tracking-[0.3em] md:tracking-[0.4em] leading-loose">
                Visual Architect // <br />
                Next.js Web Engineer // <br />
                React Native Developer
              </p>
            </div>
          </div>

          {/* RIGHT SIDE: Narrative Content Ecosystem */}
          <div className="flex flex-col gap-14 md:gap-20 pt-0 lg:pt-24">
            
            {/* THE PHILOSOPHY */}
           <section className="reveal space-y-4 md:space-y-6">
  <h2 className="text-emerald-500 font-mono text-[10px] uppercase tracking-[0.5em]">The Philosophy</h2>
  <p className="text-xl md:text-2xl text-neutral-300 font-light leading-relaxed">
    I don’t just build apps—I build the way people experience them. By connecting the speed of <span className="text-white font-bold">Next.js</span> on the web with fluid, native interfaces in <span className="text-white font-bold">React Native</span>, I make digital experiences feel natural. I back my workflow with smart AI integration, meaning I spend less time fighting with configuration and more time crafting clean, high-performance interactions that actually matter.
  </p>
</section>
            {/* UPGRADED EXPERTISE GRID */}
            <section className="reveal space-y-4 md:space-y-6">
              <h2 className="text-emerald-500 font-mono text-[10px] uppercase tracking-[0.5em]">Architecture & Stack</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: "Web Platforms", tech: "Next.js / React / TypeScript" },
                  { title: "Mobile Ecosystems", tech: "React Native / Expo Architecture" },
                  { title: "Motion Dynamics", tech: "GSAP / Reanimated / Framer" },
                  { title: "Immersive Graphics", tech: "Three.js / React Three Fiber" },
                ].map((item, i) => (
                  <div key={i} className="border border-white/5 bg-white/[0.01] p-6 rounded-2xl hover:border-[#00f7ff]/30 hover:bg-[#00f7ff]/[0.01] transition-all duration-300 group">
                    <h3 className="text-[9px] md:text-[10px] text-neutral-500 uppercase tracking-widest mb-2 group-hover:text-neutral-400 transition-colors">{item.title}</h3>
                    <p className="text-base text-white font-bold tracking-tight">{item.tech}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* MISSION OBJECTIVE & CALL TO ACTION */}
            <section className="reveal pb-12 space-y-6">
              <h2 className="text-emerald-500 font-mono text-[10px] uppercase tracking-[0.5em]">Current Focus</h2>
              <p className="text-sm md:text-base text-neutral-400 leading-relaxed max-w-xl">
                Currently building high-fidelity micro-SaaS products, unified AI operational layers, and elite mobile designs. My focus is absolute optimization—ensuring your platform retains 60 FPS fluidity on any handheld screen or multi-threaded browser.
              </p>
              
              <div className="pt-6">
                <a href="/contact" className="inline-flex items-center gap-6 group">
                  <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-neutral-300 group-hover:text-emerald-500 transition-colors duration-300">
                    Initiate Deployment
                  </span>
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/10 flex items-center justify-center bg-white/[0.02] group-hover:border-[#00f7ff]/40 group-hover:scale-115 transition-all duration-300 shadow-[0_0_0_0_rgba(0,247,255,0)] group-hover:shadow-[0_0_20px_rgba(0,247,255,0.15)]">
                    <div className="w-1.5 h-1.5 text-emerald-500 rounded-full shadow-[0_0_10px_#00f7ff]" />
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