"use client";
import { useLayoutEffect, useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const PROJECTS = [
  { id: 1, title: "3D Portfolio", video: "/video1.mp4" },
  { id: 2, title: "3D Product", video: "/video2.mp4" },
  { id: 3, title: "3D Watch Animation", video: "/video3.mp4" },
  { id: 4, title: "Spatial UI", video: "/video4.mp4" },
  { id: 5, title: "Dark Ecommerce", video: "/video5.mp4" },
  { id: 6, title: "Gsap Animation", video: "/video6.mp4" },
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
        ease: "none",
        scrollTrigger: {
          trigger: triggerRef.current,
          pin: true,
          pinSpacing: true,
          scrub: 1.5, // Reduced slightly for better sync with video frames
          start: "top top",
          end: () => `+=${xTranslate}`,
          invalidateOnRefresh: true,
          anticipatePin: 1,
          // Lag-fix: Prevent heavy recalculations during scroll
          fastScrollEnd: true,
          preventOverlaps: true,
        },
      });
    }, triggerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={triggerRef} className="relative bg-[#030303] overflow-hidden">
      <div 
        ref={sectionRef} 
        className="flex gap-12 md:gap-24 px-10 md:px-32 items-center h-screen will-change-transform"
        style={{ transform: "translate3d(0,0,0)" }} // Hardware Acceleration
      >
        <div className="shrink-0 w-[300px] md:w-[550px] pr-20">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[1px] bg-emerald-500" />
            <span className="text-emerald-500 font-mono text-[10px] tracking-[0.6em] uppercase">MQs Creativity</span>
          </div>
          <h4 className="flex flex-col">
            <span className="text-white text-7xl md:text-[8rem] font-black uppercase tracking-tighter leading-[0.7]">
              Project
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-700 to-neutral-900 text-6xl md:text-[7rem] font-black uppercase tracking-tighter leading-[0.8] ml-4">
              Works
            </span>
          </h4>
        </div>

        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}

        <div className="shrink-0 w-[50vw] md:w-[80vw]" />
      </div>
    </section>
  );
}

function ProjectCard({ project, index }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    // Smart Play/Pause: Only play when card is visible to save GPU
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            videoRef.current?.play().catch(() => {});
          } else {
            videoRef.current?.pause();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (videoRef.current) observer.observe(videoRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative shrink-0 w-[80vw] md:w-[38vw] aspect-[4/5] md:aspect-square group">
      <div className="relative w-full h-full overflow-hidden rounded-[2.5rem] bg-[#0a0a0a] border border-white/5 shadow-2xl transition-all duration-700">
        
        {!isLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-[#080808] z-10">
            <div className="w-6 h-6 border-2 border-emerald-500/20 border-t-emerald-500 rounded-full animate-spin" />
          </div>
        )}

        <video
          ref={videoRef}
          src={project.video}
          loop
          muted
          playsInline
          autoPlay
          preload="metadata" // Changed to metadata for faster initial page load
          onLoadedData={() => setIsLoaded(true)}
          className={`w-full h-full object-cover transform-gpu transition-opacity duration-700 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
          style={{ transform: "translateZ(0)" }} // Force GPU layer
        />
        
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/60 pointer-events-none" />
      </div>

      <div className="mt-8 flex flex-col items-start translate-x-2">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-emerald-500 font-mono text-[10px] tracking-widest font-bold">0{index + 1}</span>
          <div className="w-4 h-[1px] bg-neutral-800" />
          <span className="text-neutral-500 font-mono text-[9px] uppercase tracking-[0.4em]">Project</span>
        </div>
        <h5 className="text-white text-xl md:text-3xl font-black uppercase tracking-tight leading-none">
          {project.title}
        </h5>
      </div>
    </div>
  );
}