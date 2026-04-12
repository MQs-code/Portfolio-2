"use client";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const PROJECTS = [
  { 
    id: 1, 
    title: "High-End Portfolios", 
    category: "Spatial Design",
    internalTitle: "Digital Presence",
    desc: "SEO OPTIMIZED / 3D IMMERSIVE / LIVING UI",
    details: "Tailored for creatives seeking a cinematic digital identity."
  },
  { 
    id: 2, 
    title: "Ecommerce Store", 
    category: "Attraction Leading",
    internalTitle: "Modern Commerce",
    desc: "HIGH-END ENGAGEMENT / SEAMLESS CONVERSION",
    details: "Built to transform standard shopping into a luxury experience."
  },
  { 
    id: 3, 
    title: "Business Sites", 
    category: "Branding",
    internalTitle: "Corporate Growth",
    desc: "AUTHORITATIVE DESIGN / STRATEGIC FLOW",
    details: "Sophisticated platforms that command industry respect."
  },
  { 
    id: 4, 
    title: "Product Web", 
    category: "3D or Gsaped",
    internalTitle: "Product Showcase",
    desc: "MOTION DRIVEN / INTERACTIVE MODELS",
    details: "Feature-heavy landing pages for innovative physical goods."
  },
];

export default function ProjectSection() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const section = sectionRef.current;
      const totalWidth = section.scrollWidth;
      const windowWidth = window.innerWidth;
      const xTranslate = totalWidth - windowWidth;

      gsap.to(section, {
        x: -xTranslate,
        ease: "power2.inOut", 
        scrollTrigger: {
          trigger: triggerRef.current,
          pin: true,
          pinSpacing: true,
          scrub: 1.2,
          start: "top top",
          end: () => `+=${xTranslate}`,
          invalidateOnRefresh: true,
        },
      });
    }, triggerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={triggerRef} className="relative bg-[#020202] overflow-hidden">
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div 
        ref={sectionRef} 
        className="flex gap-20 md:gap-48 px-10 md:px-32 items-center h-screen will-change-transform"
      >
        <div className="shrink-0 w-[300px] md:w-[600px] relative">
          <div className="flex items-center gap-4 mb-8">
            <span className="h-[1px] w-12 bg-gradient-to-r from-emerald-500 to-transparent" />
            <span className="text-emerald-400 font-mono text-[11px] tracking-[0.8em] uppercase">Creative Archive</span>
          </div>
          <h4 className="flex flex-col select-none">
            <span className="text-white text-8xl md:text-[11rem] font-black uppercase tracking-tighter leading-[0.8]">
              Latest
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-neutral-600 via-neutral-800 to-neutral-900 text-7xl md:text-[9rem] font-black uppercase tracking-tighter leading-[0.8] ml-6">
              Visions
            </span>
          </h4>
        </div>

        {PROJECTS.map((project) => (
          <ProjectFrame key={project.id} project={project} />
        ))}

        <div className="shrink-0 w-[30vw]" />
      </div>
    </section>
  );
}

function ProjectFrame({ project }) {
  return (
    <div className="relative shrink-0 w-[85vw] md:w-[45vw] group">
      <div className="relative w-full aspect-[16/11] border border-white/5 rounded-[2rem] bg-gradient-to-br from-white/[0.03] to-transparent overflow-hidden transition-all duration-700 group-hover:border-emerald-500/40 group-hover:from-emerald-500/[0.02]">
        
        <div className="absolute top-6 left-6 w-4 h-4 border-t border-l border-white/20 group-hover:border-emerald-500/60 transition-colors" />
        <div className="absolute bottom-6 right-6 w-4 h-4 border-b border-r border-white/20 group-hover:border-emerald-500/60 transition-colors" />

        <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center transition-all duration-500">
          <div className="flex flex-col gap-6 max-w-sm">
            
            <div className="flex flex-col gap-3 group/item">
              {/* Internal Unique Title */}
              <h2 className="text-white text-xs md:text-sm font-bold uppercase tracking-[0.4em] group-hover/item:text-emerald-400 transition-colors duration-500">
                {project.internalTitle}
              </h2>
              
              {/* Internal Unique Tagline */}
              <p className="text-emerald-500/60 font-mono text-[9px] md:text-[10px] leading-relaxed uppercase tracking-[0.2em]">
                {project.desc}
              </p>

              {/* Internal Unique Detail */}
              <p className="text-white/20 font-sans text-[10px] md:text-xs leading-relaxed italic group-hover/item:text-white/40 transition-colors duration-500">
                "{project.details}"
              </p>
            </div>
            
          </div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.02] to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite] pointer-events-none" />
      </div>

      <div className="mt-10 flex justify-between items-end px-2">
        <div className="flex flex-col gap-2">
          <span className="text-emerald-500 font-mono text-[10px] uppercase tracking-[0.4em] opacity-60 group-hover:opacity-100 transition-opacity">
            {project.category}
          </span>
          <h5 className="text-white text-4xl md:text-6xl font-black uppercase tracking-tighter group-hover:text-emerald-50 group-hover:translate-x-2 transition-all duration-500">
            {project.title}
          </h5>
        </div>
        
        <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-emerald-500/50 group-hover:rotate-45 transition-all duration-700">
           <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full shadow-[0_0_10px_#10b981]" />
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
}