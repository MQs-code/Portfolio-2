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
  const [loadProgress, setLoadProgress] = useState(0); // Real-time feedback
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Track actual buffer progress to show the user "something is happening"
    const handleProgress = () => {
      if (video.buffered.length > 0) {
        const bufferedEnd = video.buffered.end(video.buffered.length - 1);
        const duration = video.duration;
        if (duration > 0) {
          setLoadProgress((bufferedEnd / duration) * 100);
        }
      }
    };

    video.addEventListener("progress", handleProgress);
    video.load();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(video);
    return () => {
      video.removeEventListener("progress", handleProgress);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="relative shrink-0 w-[85vw] md:w-[38vw] aspect-[4/5] md:aspect-square group">
      <div className="relative w-full h-full overflow-hidden rounded-[2.5rem] bg-[#050505] border border-white/5 shadow-2xl transition-all duration-700">
        
        {/* HIGH-ENGAGEMENT FALLBACK */}
        {!isLoaded && (
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-[#080808]">
            {/* 1. Animated Scanning Line */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/10 to-transparent h-1/2 w-full animate-[scan_2s_linear_infinite] z-10" />
            
            {/* 2. Project Number Watermark */}
            <span className="absolute top-10 left-10 text-[10rem] font-black text-white/[0.02] select-none">
              0{index + 1}
            </span>

            {/* 3. Centered Loading Status */}
            <div className="relative z-20 flex flex-col items-center gap-4">
              <div className="relative w-16 h-16">
                {/* Spinning Ring */}
                <div className="absolute inset-0 border-2 border-emerald-500/20 rounded-full" />
                <div 
                  className="absolute inset-0 border-2 border-t-emerald-500 rounded-full animate-spin" 
                  style={{ animationDuration: '0.6s' }}
                />
              </div>
              
              <div className="flex flex-col items-center">
                <span className="text-emerald-500 font-mono text-[10px] tracking-[0.3em] uppercase animate-pulse">
                  Initializing Media
                </span>
                {/* Real-time percentage to keep them watching */}
                <span className="text-neutral-600 font-mono text-[9px] mt-1">
                  {Math.round(loadProgress)}% SECURED
                </span>
              </div>
            </div>

            {/* 4. Bottom Progress Bar */}
            <div className="absolute bottom-0 left-0 h-[2px] bg-emerald-500/30 transition-all duration-300" style={{ width: `${loadProgress}%` }} />
          </div>
        )}

        {/* THE VIDEO */}
        <video
          ref={videoRef}
          src={project.video}
          loop
          muted
          playsInline
          autoPlay
          preload="auto"
          onLoadedData={() => setIsLoaded(true)}
          className={`w-full h-full object-cover transform-gpu transition-all duration-[1500ms] ease-expo ${
            isLoaded ? "opacity-100 scale-100 blur-0" : "opacity-0 scale-125 blur-3xl"
          }`}
        />
        
        {/* Vignette for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />
      </div>

      {/* Info Section */}
      <div className="mt-8 flex flex-col items-start translate-x-2 group-hover:translate-x-4 transition-transform duration-500">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-emerald-500 font-mono text-[10px] tracking-widest font-bold">0{index + 1}</span>
          <div className="w-8 h-[1px] bg-emerald-500/20 group-hover:w-12 group-hover:bg-emerald-500 transition-all duration-500" />
          <span className="text-neutral-500 font-mono text-[9px] uppercase tracking-[0.4em]">Case Study</span>
        </div>
        <h5 className="text-white text-2xl md:text-4xl font-black uppercase tracking-tight leading-none">
          {project.title}
        </h5>
      </div>

      <style jsx global>{`
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(200%); }
        }
        .ease-expo {
          transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);
        }
      `}</style>
    </div>
  );
}