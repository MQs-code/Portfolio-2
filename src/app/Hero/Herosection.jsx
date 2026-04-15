"use client";

import dynamic from 'next/dynamic';
import Introduction from './Introduction';
import { Suspense } from 'react';

// SKELETON: Matches 3DScene layout exactly
const SceneSkeleton = () => (
  <div className="h-screen w-full flex items-center justify-center bg-[#050505] animate-pulse">
    <div className="flex gap-20">
      <div className="w-32 h-32 bg-white/5 rounded-full" />
      <div className="w-32 h-32 bg-emerald-500/5 rounded-full" />
    </div>
  </div>
);

const ThreeDshape = dynamic(() => import('./ThreeDshape'), { 
  ssr: false,
  loading: () => <SceneSkeleton /> 
});

const Kinetictext = dynamic(() => import('./Kinectictext'), { 
  ssr: false,
  loading: () => <div className="h-20 w-full bg-white/5 animate-pulse my-5" /> 
});
const Stack = dynamic(() => import('./Stack'), { 
  ssr: false,
  loading: () => <div className="h-[400px] w-full bg-transparent" /> 
});

const Projects = dynamic(() => import('../Projects/page.jsx'), { 
  ssr: false,
  loading: () => <div className="h-screen w-full bg-[#020202]" /> 
});

export default function Page() {
  return (
    <main className="w-full bg-[#030303] selection:bg-emerald-500/30 ">
      <div className="hidden" aria-hidden="true">
        <img src="/tailwind-css.png" rel="preload" />
        <img src="/gsap.png" rel="preload" />
        <img src="/react.png" rel="preload" />
      </div> 
      {/* LCP: Loads Instantly */}
      <section className="min-h-screen">
        <Introduction />
      </section>

      <Suspense fallback={null}>
        {/* Kinetic Text Section */}
        <section className="py-10">
          <Kinetictext />
        </section>

        {/* 3D Visuals: Optimized for GPU */}
        <section className="w-full h-screen relative z-0">
          <ThreeDshape />
        </section>
        <section>
          <Stack/>
        </section>
        <section id='projects'>
          <Projects/>
        </section>
      
      </Suspense>

      <style jsx global>{`
        /* GPU Optimization: Force Hardware Acceleration on all moving parts */
        .gpu-prime {
          transform: translateZ(0);
          backface-visibility: hidden;
          perspective: 1000px;
          will-change: transform;
        }
      `}</style>
    </main>
  );
}