import Introduction from './Introduction'
import Kinetictext from './Kinectictext'
import ThreeDshape from './ThreeDshape'
import Stack from './Stack'
import Projects from '../Projects/page.jsx'

export default function Page() {
  return (
    <main className="w-full bg-[#030303]"> 
      {/* 1. Hero / Intro Section */}
      <section className="min-h-screen">
        <Introduction />
      </section>

      {/* 2. Kinetic Text Animation */}
      <section className="py-5">
        <Kinetictext />
      </section>

      {/* 3. 3D Visuals */}
      <section className="w-full h-screen px-10">
        <ThreeDshape />
      </section>

      {/* 4. Technical Stack (Pinned Scroll) */}
      <section>
        <Stack/>
      </section>

      {/* 5. Projects (Horizontal Scroll) */}
      <section id='projects'>
        <Projects/>
      </section>

    
    </main>
  );
}