"use client";
import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const STACK = [
  { 
    name: "Next.js", 
    type: "text",
    icon: "NX",
    color: "#ffffff", 
    desc: "Enterprise-grade performance and SEO." 
  },
  { 
    name: "Tailwind", 
    type: "image",
    img: "/tailwind-css.png", 
    color: "#38bdf8", 
    desc: "Rapid UI development with utility-first CSS." 
  },
  { 
    name: "Three.js", 
    type: "text",
    icon: "R3F",
    color: "#10b981", 
    desc: "Immersive 3D experiences rendered in WebGL." 
  },
  { 
    name: "GSAP", 
    type: "image",
    img: "/gsap.png", 
    color: "#88ce02", 
    desc: "Industry-leading motion design and complex animations." 
  },
  { 
    name: "React.js", 
    type: "image",
    img: "/react.png", 
    color: "#3ecf8e", 
    desc: "Scalable frontend infrastructure and components." 
  },
];

export default function TechStack() {
  const containerRef = useRef(null);
  const ringRef = useRef(null);
  const textContainerRef = useRef(null);
  const headingRef = useRef(null); // Ref for title animation
  const iconRefs = useRef([]);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const isMobile = window.innerWidth < 768;

      // 1. Initial Entry Animation for Title
      gsap.fromTo(headingRef.current, 
        { opacity: 0, y: 50, letterSpacing: "1em" },
        { opacity: 1, y: 0, letterSpacing: "0.4em", duration: 1.5, ease: "expo.out" }
      );

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: isMobile ? "+=200%" : "+=400%",
          pin: true,
          scrub: isMobile ? 0.5 : 1.5,
          invalidateOnRefresh: true,
        },
      });

      // Pehla icon glow state
      gsap.set(iconRefs.current[0], { 
        borderColor: STACK[0].color, 
        boxShadow: `0 0 30px ${STACK[0].color}44` 
      });

      STACK.forEach((item, i) => {
        if (i === 0) return;
        
        tl.to(ringRef.current, {
          rotation: -i * (180 / (STACK.length - 1)),
          ease: "power2.inOut",
        }, i)
        .to(textContainerRef.current, {
          yPercent: -i * 100,
          ease: "expo.inOut",
        }, i)
        .to(iconRefs.current[i-1], { 
          borderColor: "rgba(255,255,255,0.1)", 
          boxShadow: "none",
          duration: 0 
        }, i)
        .to(iconRefs.current[i], { 
          borderColor: item.color, 
          boxShadow: `0 0 40px ${item.color}66`,
          duration: 0 
        }, i);
      });
    }, containerRef);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen w-full bg-[#030303] overflow-hidden flex items-center">
      
      {/* Dynamic Background Glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[40vw] h-[40vw] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Main Animated Title */}
      

      <div className="container mx-auto px-8 md:px-24 grid grid-cols-1 lg:grid-cols-2 items-center w-full z-10 pt-20">
        
        <div className="relative h-[200px] md:h-[450px] overflow-hidden">
          <div ref={textContainerRef} className="flex flex-col h-full">
            {STACK.map((item, index) => (
              <div key={index} className="h-full flex flex-col justify-center shrink-0">
                <h2 className="text-4xl md:text-[7rem] font-bold uppercase tracking-[-0.05em] text-white leading-[0.8]">
                  {item.name}
                </h2>
                <div className="mt-10 max-w-sm space-y-4">
                   <div className="h-[1px] w-12 bg-emerald-500/40" />
                   <p className="text-neutral-500 font-light text-lg md:text-xl leading-relaxed tracking-wide">
                     {item.desc}
                   </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex items-center justify-end h-full">
          <div 
            ref={ringRef}
            className="relative w-[300px] md:w-[85vw] aspect-square rounded-full border border-[10px] border-white/10 md:translate-x-[50%] translate-x-[0] mt-20 md:mt-0 flex items-center justify-center"
          >
            <div className="absolute inset-[15%] rounded-full border border-white/[0.3]" />
            <div className="absolute inset-[30%] rounded-full border border-emerald-500 border-dashed" />

            {STACK.map((item, i) => {
  const angle = (Math.PI) + (i * (Math.PI / (STACK.length - 1)));
  
  return (
    <div
      key={`icon-${i}`}
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 [--radius:120px] lg:[--radius:400px]"
      style={{
        transform: `translate(calc(var(--radius) * ${Math.cos(angle).toFixed(6)}), calc(var(--radius) * ${Math.sin(angle).toFixed(6)}))`,
      }}
    >
      <div className="relative group cursor-pointer">
        <div 
          ref={(el) => (iconRefs.current[i] = el)}
          className="w-14 h-14 md:w-32 md:h-32 rounded-full bg-[#050505] border border-white/10 flex flex-col items-center justify-center backdrop-blur-3xl transition-all duration-300 overflow-hidden"
        >
          {item.type === "image" ? (
            <div className="relative w-full h-full p-4 md:p-8 bg-white/5"> {/* Added bg-white/5 as a fast visual fallback */}
              <Image 
                src={item.img}
                alt={item.name}
                fill
                priority // Tells Next.js to preload this image
                loading="eager" // Forces the browser to fetch immediately
                fetchPriority="high" // Modern browser hint for critical assets
                className="object-contain"
                sizes="(max-width: 768px) 56px, 128px" // Helps browser pick the right size instantly
              />
            </div>
          ) : (
            <span className="text-sm md:text-3xl font-bungee italic tracking-tighter" style={{ color: item.color }}>
              {item.icon}
            </span>
          )}
        </div>
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