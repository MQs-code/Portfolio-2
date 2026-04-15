"use client";
import Image from "next/image";
import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const STACK = [
  { name: "Next.js", type: "text", icon: "NX", color: "#ffffff", desc: "Enterprise-grade performance and SEO." },
  { name: "Tailwind", type: "image", img: "/tailwind-css.png", color: "#38bdf8", desc: "Rapid UI development with utility-first CSS." },
  { name: "Three.js", type: "text", icon: "R3F", color: "#10b981", desc: "Immersive 3D experiences rendered in WebGL." },
  { name: "GSAP", type: "image", img: "/gsap.png", color: "#88ce02", desc: "Industry-leading motion design and complex animations." },
  { name: "React.js", type: "image", img: "/react.png", color: "#3ecf8e", desc: "Scalable frontend infrastructure and components." },
];

export default function TechStack() {
  const containerRef = useRef(null);
  const ringRef = useRef(null);
  const textContainerRef = useRef(null);
  const iconRefs = useRef([]);
  const [isReady, setIsReady] = useState(false); // For Fallback control

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const isMobile = window.innerWidth < 768;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: isMobile ? "+=100%" : "+=200%", 
          pin: true,
          scrub: 0.5, 
          snap: 1 / (STACK.length - 1),
          invalidateOnRefresh: true,
          onRefresh: () => setIsReady(true), // Hide fallback when measurements are done
        },
      });

      STACK.forEach((item, i) => {
        if (i === 0) return;
        
        tl.to(ringRef.current, {
          rotation: -i * (180 / (STACK.length - 1)),
          force3D: true,
          ease: "sine.inOut",
        }, i)
        .to(textContainerRef.current, {
          yPercent: -i * 100,
          force3D: true,
          ease: "power2.inOut",
        }, i);

        tl.to(iconRefs.current[i-1], { borderColor: "rgba(255,255,255,0.1)", boxShadow: "none", duration: 0.2 }, i)
          .to(iconRefs.current[i], { borderColor: item.color, boxShadow: `0 0 30px ${item.color}44`, duration: 0.2 }, i);
      });
      
      setIsReady(true);
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef} 
      className="relative min-h-screen w-full bg-[#030303] overflow-hidden flex items-center selection:bg-emerald-500/30"
    >
      {/* 1. FALLBACK / SKELETON */}
      {!isReady && (
        <div className="absolute inset-0 bg-[#030303] z-50 flex items-center justify-center">
           <div className="w-10 h-10 border-2 border-emerald-500/10 border-t-emerald-500 rounded-full animate-spin" />
        </div>
      )}
      
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[40vw] h-[40vw] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none will-change-transform" />

      <div className="container mx-auto px-8 md:px-24 grid grid-cols-1 lg:grid-cols-2 items-center w-full z-10">
        
        {/* Left Side: Text */}
        <div className="relative h-[200px] md:h-[350px] overflow-hidden will-change-transform">
          <div ref={textContainerRef} className="flex flex-col h-full">
            {STACK.map((item, index) => (
              <div key={index} className="h-full flex flex-col justify-center shrink-0">
                <h2 className="text-4xl md:text-8xl font-black uppercase tracking-tighter text-white leading-none">
                  {item.name}
                </h2>
                <div className="mt-6 max-w-sm">
                   <p className="text-neutral-500 font-light text-base md:text-lg leading-relaxed">
                     {item.desc}
                   </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Ring */}
        <div className="relative flex items-center justify-end h-full">
          <div 
            ref={ringRef}
            className="relative w-[300px] md:w-[70vw] aspect-square rounded-full border border-[1px] border-white/10 md:translate-x-[50%] flex items-center justify-center will-change-transform"
          >
            {STACK.map((item, i) => {
              const angle = (Math.PI) + (i * (Math.PI / (STACK.length - 1)));

              return (
                <div
                  key={`icon-${i}`}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 [--radius:125px] lg:[--radius:35vw] will-change-transform"
                  style={{
                    transform: `translate(calc(var(--radius) * ${Math.cos(angle)}), calc(var(--radius) * ${Math.sin(angle)}))`,
                  }}
                >
                  <div 
                    ref={(el) => (iconRefs.current[i] = el)}
                    className="w-12 h-12 md:w-28 md:h-28 rounded-full bg-[#080808] border border-white/10 flex items-center justify-center overflow-hidden transition-shadow"
                  >
                    {item.type === "image" ? (
                      <div className="relative w-1/2 h-1/2">
                        <Image 
                          src={item.img} 
                          alt={item.name} 
                          priority={true} // High-priority loading
                          fetchPriority="high"
                          loading="eager" // Do not lazy load these
                          fill 
                          className="object-contain" 
                          sizes="120px"  
                        />
                      </div>
                    ) : (
                      <span className="text-xs md:text-2xl font-bold italic" style={{ color: item.color }}>{item.icon}</span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}