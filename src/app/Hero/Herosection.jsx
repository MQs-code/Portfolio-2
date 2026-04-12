"use client";

import dynamic from 'next/dynamic';
import Introduction from './Introduction'; // Keep this standard so it loads first

// 1. Dynamic imports for heavy components
const Kinetictext = dynamic(() => import('./Kinectictext'), { ssr: false });
const ThreeDshape = dynamic(() => import('./ThreeDshape'), { 
  ssr: false,
  loading: () => <div className="h-screen w-full bg-[#030303]" /> 
});
const Stack = dynamic(() => import('./Stack'), { ssr: false });
const Projects = dynamic(() => import('../Projects/page.jsx'), { ssr: false });

export default function Page() {
  return (
    <main className="w-full bg-[#030303]"> 
      {/* 1. Hero / Intro Section - Loads instantly */}
      <section className="min-h-screen">
        <Introduction />
      </section>

      {/* 2. Kinetic Text - Loads after Intro is ready */}
      <section className="py-5">
        <Kinetictext />
      </section>

      {/* 3. 3D Visuals - Will not block the page from opening */}
      <section className="w-full h-screen px-10">
        <ThreeDshape />
      </section>

      {/* 4. Technical Stack */}
      <section>
        <Stack/>
      </section>

      {/* 5. Projects */}
      <section id='projects'>
        <Projects/>
      </section>

      
    </main>
  );
}