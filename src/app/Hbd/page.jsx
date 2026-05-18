'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function BirthdayPage() {
  const [step, setStep] = useState(1);
  const totalSteps = 6;

  const nextStep = () => {
    if (step < totalSteps) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const resetToFirstPage = () => {
    setStep(1);
  };

  return (
    <div className="bg-[#0B0B0F] text-slate-200 min-h-screen w-full flex items-center justify-center font-sans relative selection:bg-amber-500/30 py-10 px-4 sm:px-6 md:px-8">
      
      {/* Dynamic Ambient Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 sm:w-[500px] h-96 sm:h-[500px] bg-[#E0A96D]/5 rounded-full blur-[100px] sm:blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 sm:w-[500px] h-96 sm:h-[500px] bg-purple-500/5 rounded-full blur-[100px] sm:blur-[150px] pointer-events-none" />

      {/* Global Navigation Back Button (Top Left) */}
      {step > 1 && (
        <button 
          onClick={prevStep} 
          className="absolute top-6 left-6 z-20 text-xs sm:text-sm tracking-widest uppercase text-slate-500 hover:text-[#E0A96D] transition-colors duration-300 flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/5 px-4 py-2 rounded-full"
        >
          ← Back
        </button>
      )}

      {/* STEP 1: The Hook */}
      {step === 1 && (
        <div className="text-center z-10 w-full max-w-2xl px-6 dynamic-fade-in">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-wide text-[#F1E4C3] mb-4">Hey Sis,</h1>
          <p className="text-slate-400 text-base sm:text-lg md:text-xl font-light mb-10 tracking-wide max-w-xl mx-auto">I built something special just for you. Take a second and click below.</p>
          <button onClick={nextStep} className="bg-white/5 backdrop-blur-md border border-white/10 text-[#E0A96D] px-8 sm:px-12 py-4 sm:py-5 rounded-full font-medium tracking-widest text-xs sm:text-sm uppercase transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-[0_0_25px_rgba(224,169,109,0.3)] active:translate-y-0">
            Open Your Gift
          </button>
        </div>
      )}

      {/* STEP 2: The Personality */}
      {step === 2 && (
        <div className="text-center z-10 w-full max-w-4xl px-6 dynamic-fade-in">
          <p className="text-xs sm:text-sm tracking-[0.3em] text-[#E0A96D] uppercase font-semibold mb-6">First of all...</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extralight text-[#F1E4C3] leading-relaxed tracking-wide mb-10 max-w-3xl mx-auto">
            I just want to say you genuinely have the <span className="font-light text-[#E0A96D]">most amazing personality</span>. You are resilient, patient, and you bring so much life to our family.
          </h2>
          <button onClick={nextStep} className="bg-white/5 backdrop-blur-md border border-white/10 text-slate-300 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full text-xs sm:text-sm tracking-widest uppercase transition-all duration-300 hover:text-[#E0A96D] hover:border-[#E0A96D]/30">
            Next Note →
          </button>
        </div>
      )}

      {/* STEP 3: Your Custom Card */}
      {step === 3 && (
        <div className="text-center z-10 w-full max-w-4xl px-6 dynamic-fade-in">
          <p className="text-xs sm:text-sm tracking-[0.3em] text-purple-400 uppercase font-semibold mb-6">No Seriously</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extralight text-[#F1E4C3] leading-relaxed tracking-wide mb-10 max-w-3xl mx-auto">
            Your vibe and presence make everything around you <span className="font-light text-purple-400">so much better</span>. I'm incredibly grateful to have you as my sister.
          </h2>
          <button onClick={nextStep} className="bg-white/5 backdrop-blur-md border border-white/10 text-slate-300 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full text-xs sm:text-sm tracking-widest uppercase transition-all duration-300 hover:text-purple-400 hover:border-purple-400/30">
            Continue →
          </button>
        </div>
      )}

      {/* STEP 4: The Energy/Vibe (Your custom text injected here) */}
      {step === 4 && (
        <div className="text-center z-10 w-full max-w-4xl px-6 dynamic-fade-in">
          <p className="text-xs sm:text-sm tracking-[0.3em] text-amber-400 uppercase font-semibold mb-6">Also...</p>
          <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-extralight text-[#F1E4C3] leading-relaxed tracking-wide mb-10 max-w-3xl mx-auto">
            Vo na... is dafa sach mein pocket khali thi tou gift skip ho gaya 😂 Chalo mere paise bache maza aya! 🥹 Par choro gift ko, yeh premium website check karo, poori mehnat se vibes code ki hain tumhare liye! ✨ Next time jab paisay ayen gy tou acha sa gift le donga, tab tak isi website ko dekh kar khush hoti raho 🤫 unstable developer ke pass abhi yahi tha 🫂❤️
          </h2>
          <button onClick={nextStep} className="bg-white/5 backdrop-blur-md border border-white/10 text-slate-300 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full text-xs sm:text-sm tracking-widest uppercase transition-all duration-300 hover:text-amber-400 hover:border-amber-400/30">
            Keep Going →
          </button>
        </div>
      )}

      {/* STEP 5: The Hype Build-up */}
      {step === 5 && (
        <div className="text-center z-10 w-full max-w-4xl px-6 dynamic-fade-in">
          <p className="text-xs sm:text-sm tracking-[0.3em] text-[#E0A96D] uppercase font-semibold mb-6">And today...</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extralight text-[#F1E4C3] leading-relaxed tracking-wide mb-10 max-w-3xl mx-auto">
            Is all about celebrating <span className="italic text-[#E0A96D]">YOU</span> and your day.
          </h2>
          <button onClick={nextStep} className="bg-white/5 backdrop-blur-md border border-white/10 text-[#F1E4C3] px-8 sm:px-10 py-3.5 sm:py-4 rounded-full font-medium tracking-widest text-xs sm:text-sm uppercase transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(241,228,195,0.2)] active:translate-y-0">
            See the Magic ✨
          </button>
        </div>
      )}

      {/* STEP 6: The Final Cinematic Reveal Dashboard */}
      {step === 6 && (
        <div className="w-full max-w-6xl p-4 sm:p-6 z-10 mx-auto space-y-6 sm:space-y-8 overflow-y-auto max-h-screen dynamic-fade-in py-16 md:py-12">
          
          {/* Main Header Card - Swapped to max-w-4xl for dramatic wide sizing */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl sm:rounded-3xl p-8 sm:p-12 text-center max-w-4xl mx-auto shadow-2xl">
            <span className="text-xs sm:text-sm tracking-[0.3em] text-[#E0A96D] uppercase font-semibold block mb-3">May 18, 2026</span>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-extralight tracking-tight text-[#F1E4C3] leading-tight">
              Happy Birthday to the Best <span className="font-normal text-[#E0A96D]">Sister</span>.
            </h2>
            <p className="text-slate-400 text-sm sm:text-lg font-light mt-4 sm:mt-6 leading-relaxed max-w-xl mx-auto">
              I hope this year brings you infinite peace, continuous growth, and all the immense happiness you absolutely deserve. 
            </p>
          </div>

          {/* Elegant Bento Grid Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Left Card: Main Letter */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl sm:rounded-3xl p-8 sm:p-12 md:col-span-2 flex flex-col justify-center">
              <h3 className="text-xs sm:text-sm tracking-widest text-[#E0A96D] uppercase font-medium mb-4sm:mb-6">A Note From Your Brother</h3>
              <p className="text-slate-300 font-light leading-relaxed text-base sm:text-xl md:text-2xl">
                I don't say it enough, but thank you for always having my back no matter what. You're the real backbone of this family. I'm wishing you the absolute best and brightest year ahead. Time to celebrate you today!
              </p>
            </div>
            
            {/* Right Card: Status/Vibe Display */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-row md:flex-col justify-between items-center text-center min-h-[120px] md:min-h-[280px]">
              <h3 className="text-xs sm:text-sm tracking-widest text-slate-500 uppercase font-medium md:w-full text-left md:text-center">Current Vibe</h3>
              <div className="my-auto py-2 md:py-0">
                <span className="text-4xl sm:text-6xl block animate-pulse drop-shadow-[0_0_20px_rgba(224,169,109,0.5)]">🎂</span>
              </div>
              <p className="text-sm sm:text-lg text-[#F1E4C3] tracking-wide font-light text-right md:text-center">The greatest sister on earth.</p>
            </div>
          </div>

          {/* Centered Restart Action Block */}
          <div className="flex justify-center pt-8 sm:pt-12 w-full text-xs sm:text-sm tracking-widest uppercase pb-10">
            <button 
              onClick={resetToFirstPage} 
              className="bg-[#E0A96D]/10 backdrop-blur-md border border-[#E0A96D]/30 text-[#E0A96D] px-10 sm:px-14 py-4 sm:py-5 rounded-full font-medium transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-[0_0_25px_rgba(224,169,109,0.3)] active:translate-y-0 whitespace-nowrap"
            >
              ↺ Restart Experience
            </button>
          </div>
          
        </div>
      )}
      
      {/* Global CSS Injector for smooth fading */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .dynamic-fade-in {
          animation: fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </div>
  );
}