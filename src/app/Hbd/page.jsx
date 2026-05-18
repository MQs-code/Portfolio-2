'use client';
import { useState, useEffect } from 'react';

export default function BirthdayPage() {
  const [mounted, setMounted] = useState(false);
  const [step, setStep] = useState(1);
  const [isOpening, setIsOpening] = useState(false);
  const totalSteps = 6;

  // Crucial: Fixes React tree hydration issues by ensuring client-only rendering for state-dependent blocks
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="bg-[#0B0B0F] min-h-screen w-full flex items-center justify-center">
        <div className="w-6 h-6 border-2 border-[#E0A96D]/30 border-t-[#E0A96D] rounded-full animate-spin" />
      </div>
    );
  }

  const nextStep = () => {
    if (step < totalSteps) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const resetToFirstPage = () => {
    setStep(1);
    setIsOpening(false);
  };

  const handleSeeMagic = () => {
    setIsOpening(true);
    // Smooth timing matching the premium gold scale-out transition
    setTimeout(() => {
      setStep(6);
    }, 2200); 
  };

  return (
    <div className="bg-[#0B0B0F] text-slate-200 min-h-screen w-full flex items-center justify-center font-sans relative selection:bg-amber-500/30 py-10 px-4 sm:px-6 md:px-8 select-none overscroll-none touch-manipulation">
      
      {/* Cinematic Ambient Background Glows — Upgraded with active-shine keyframes during box opening */}
      <div className={`absolute top-1/4 left-1/4 w-96 sm:w-[500px] h-96 sm:h-[500px] bg-[#E0A96D]/5 rounded-full blur-[100px] sm:blur-[150px] pointer-events-none transform-gpu ${isOpening ? 'animate-ambient-shine' : 'animate-pulse duration-[6000ms]'}`} />
      <div className={`absolute bottom-1/4 right-1/4 w-96 sm:w-[500px] h-96 sm:h-[500px] bg-purple-500/5 rounded-full blur-[100px] sm:blur-[150px] pointer-events-none transform-gpu ${isOpening ? 'animate-ambient-shine-delayed' : 'animate-pulse duration-[8000ms]'}`} />

      {/* Navigation Back Button */}
      {step > 1 && !isOpening && (
        <button 
          onClick={prevStep} 
          className="absolute top-6 left-6 z-20 text-xs sm:text-sm tracking-widest uppercase text-slate-400 active:text-[#E0A96D] transition-[transform,opacity] duration-300 ease-out flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/5 px-4 py-2 rounded-full transform-gpu active:scale-95 active:bg-white/10 [webkit-tap-highlight-color:transparent]"
        >
          ← Back
        </button>
      )}

      {/* STEP 1: The Hook */}
      {step === 1 && (
        <div className="text-center z-10 w-full max-w-2xl px-6 dynamic-fade-in">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-wide text-[#F1E4C3] mb-4">Hey Sis,</h1>
          <p className="text-slate-400 text-base sm:text-lg md:text-xl font-light mb-10 tracking-wide max-w-xl mx-auto">I built something special just for you. Take a second and click below.</p>
          <button 
            onClick={nextStep} 
            className="bg-white/5 backdrop-blur-md border border-white/10 text-[#E0A96D] px-8 sm:px-12 py-4 sm:py-5 rounded-full font-medium tracking-widest text-xs sm:text-sm uppercase transition-[transform,box-shadow,background-color] duration-300 cubic-bezier-bounce transform-gpu active:scale-90 active:bg-[#E0A96D]/20 active:shadow-[0_0_50px_rgba(224,169,109,0.6)] [webkit-tap-highlight-color:transparent]"
          >
            Open Your Gift
          </button>
        </div>
      )}

      {/* STEP 2: The Personality */}
      {step === 2 && (
        <div className="text-center z-10 w-full max-w-4xl px-6 dynamic-fade-in">
          <p className="text-xs sm:text-sm tracking-[0.3em] text-[#E0A96D] uppercase font-semibold mb-6">First of all...</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extralight text-[#F1E4C3] leading-relaxed tracking-wide mb-10 max-w-3xl mx-auto">
            I just wanna say your presence is a beautiful thing. Through every heavy wave, you carry yourself with <span className="font-light text-[#E0A96D] drop-shadow-[0_0_15px_rgba(224,169,109,0.3)]">so much grace</span>—you are genuinely the heart of our home, keeping us all smiling, happy, and alive.
          </h2>
          <button 
            onClick={nextStep} 
            className="bg-white/5 backdrop-blur-md border border-white/10 text-slate-300 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full text-xs sm:text-sm tracking-widest uppercase transition-[transform,box-shadow,color] duration-300 cubic-bezier-bounce transform-gpu active:scale-92 active:text-[#E0A96D] active:border-[#E0A96D]/40 active:shadow-[0_0_30px_rgba(224,169,109,0.4)] [webkit-tap-highlight-color:transparent]"
          >
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
          <button 
            onClick={nextStep} 
            className="bg-white/5 backdrop-blur-md border border-white/10 text-slate-300 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full text-xs sm:text-sm tracking-widest uppercase transition-[transform,box-shadow,color] duration-300 cubic-bezier-bounce transform-gpu active:scale-92 active:text-purple-400 active:border-purple-400/40 active:shadow-[0_0_30px_rgba(168,85,247,0.4)] [webkit-tap-highlight-color:transparent]"
          >
            Continue →
          </button>
        </div>
      )}

      {/* STEP 4: The Energy/Vibe */}
      {step === 4 && (
        <div className="text-center z-10 w-full max-w-4xl px-6 dynamic-fade-in">
          <p className="text-xs sm:text-sm tracking-[0.3em] text-amber-400 uppercase font-semibold mb-6">Also...</p>
          <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-extralight text-[#F1E4C3] leading-relaxed tracking-wide mb-10 max-w-3xl mx-auto">
           Vo na... is dafa  pocket khali thi tou gift skip ho gaya 😂 Chalo mere paise bache maza aya! 🥹 Par choro gift ko, is dafa ka gift is web app ko adjust krlo, poori mehnat se develop kia hy ap ky liye—<span className="font-light text-[#E0A96D] drop-shadow-[0_0_15px_rgba(224,169,109,0.3)]">with hands on keyboard, eyes on code 😅🤤</span>,✨ Next time jab paisay ayen gy tou acha sa gift le donga, tab tak isi website ko dekh kar khush hoty raho🤫. Abhi is 17 saal ky unstable developer ke pass abhi yahi tha 🫂❤️
         </h2>
          <button 
            onClick={nextStep} 
            className="bg-white/5 backdrop-blur-md border border-white/10 text-slate-300 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full text-xs sm:text-sm tracking-widest uppercase transition-[transform,box-shadow,color] duration-300 cubic-bezier-bounce transform-gpu active:scale-92 active:text-amber-400 active:border-amber-400/40 active:shadow-[0_0_30px_rgba(245,158,11,0.4)] [webkit-tap-highlight-color:transparent]"
          >
            Keep Going →
          </button>
        </div>
      )}

      {/* STEP 5: The Hype Build-up & Premium Box Theatre */}
      {step === 5 && (
        <div className="text-center z-10 w-full max-w-4xl px-6 flex flex-col items-center justify-center min-h-[350px]">
          {!isOpening ? (
            <div className="dynamic-fade-in text-center flex flex-col items-center">
              <p className="text-xs sm:text-sm tracking-[0.3em] text-[#E0A96D] uppercase font-semibold mb-6">And today...</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extralight text-[#F1E4C3] leading-relaxed tracking-wide mb-10 max-w-3xl mx-auto">
                Is all about celebrating <span className="italic text-[#E0A96D]">YOU</span> and your day.
              </h2>
              <button 
                onClick={handleSeeMagic} 
                className="bg-white/5 backdrop-blur-md border border-white/10 text-[#F1E4C3] px-8 sm:px-10 py-3.5 sm:py-4 rounded-full font-medium tracking-widest text-xs sm:text-sm uppercase transition-[transform,box-shadow] duration-300 cubic-bezier-bounce transform-gpu active:scale-90 active:bg-white/10 active:shadow-[0_0_50px_rgba(241,228,195,0.5)] [webkit-tap-highlight-color:transparent]"
              >
                See the Magic ✨
              </button>
            </div>
          ) : (
            /* Luxury Golden Gift Unwrap Transition */
            <div className="relative flex items-center justify-center w-72 h-72 transform-gpu">
              
              {/* Luxury Ambient Radial Burst */}
              <div className="absolute inset-0 bg-radial-gold rounded-full opacity-0 scale-50 pointer-events-none animate-gold-burst" />
              
              {/* Main Elegant Gift Structure Container */}
              <div className="w-28 h-28 relative transform-gpu animate-box-sequence flex items-center justify-center">
                
                {/* Lifting Floating Cap Lid */}
                <div className="absolute top-0 w-full h-5 bg-gradient-to-b from-[#E7B885] to-[#D49855] border-b border-black/20 rounded-t-md origin-bottom animate-premium-lid z-10 shadow-xl" />
                
                {/* Rich Textured Box Body */}
                <div className="w-full h-24 bg-gradient-to-b from-[#D49855] to-[#B37433] rounded-b-md relative shadow-[0_25px_60px_rgba(0,0,0,0.8)] flex items-center justify-center border-t border-white/10 overflow-hidden">
                  {/* Silk Velvet Ribbon Crossings */}
                  <div className="absolute inset-y-0 w-4 bg-gradient-to-r from-purple-600/40 via-purple-500/50 to-purple-600/40 shadow-inner" />
                  <div className="absolute inset-x-0 h-4 bg-gradient-to-b from-purple-600/40 via-purple-500/50 to-purple-600/40 shadow-inner" />
                  
                  {/* Elevated Dynamic Sparkle Particles Rising Upwards */}
                  <span className="text-2xl absolute animate-particle-one opacity-0 select-none">✨</span>
                  <span className="text-xl absolute animate-particle-two opacity-0 select-none">❤️</span>
                  <span className="text-lg absolute animate-particle-three opacity-0 select-none">✨</span>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* STEP 6: The Final Cinematic Reveal Dashboard */}
      {step === 6 && (
        <div className="w-full max-w-6xl p-4 sm:p-6 z-10 mx-auto space-y-6 sm:space-y-8 overflow-y-auto max-h-screen dynamic-fade-in py-16 md:py-12">
          
          {/* Main Header Card */}
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
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl sm:rounded-3xl p-8 sm:p-12 md:col-span-2 flex flex-col justify-center">
              <h3 className="text-xs sm:text-sm tracking-widest text-[#E0A96D] uppercase font-medium mb-4 sm:mb-6">A Note From Your Brother</h3>
              <p className="text-slate-300 font-light leading-relaxed text-base sm:text-xl md:text-2xl">
                I don't say it enough, but thank you for always having my back no matter what. You're the real backbone of this family. I'm wishing you the absolute best and brightest year ahead. Time to celebrate you today!
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-row md:flex-col justify-between items-center text-center min-h-[120px] md:min-h-[280px]">
              <h3 className="text-xs sm:text-sm tracking-widest text-slate-500 uppercase font-medium md:w-full text-left md:text-center">Current Vibe</h3>
              <div className="my-auto py-2 md:py-0">
                <span className="text-4xl sm:text-6xl block animate-pulse drop-shadow-[0_0_20px_rgba(224,169,109,0.5)]">🎂</span>
              </div>
              <div className="text-right md:text-center">
                <p className="text-sm sm:text-lg text-[#F1E4C3] tracking-wide font-light">The greatest sister on earth.</p>
              </div>
            </div>
          </div>

          {/* Centered Restart Action Block */}
          <div className="flex justify-center pt-8 sm:pt-12 w-full text-xs sm:text-sm tracking-widest uppercase pb-10">
            <button 
              onClick={resetToFirstPage} 
              className="bg-[#E0A96D]/15 backdrop-blur-md border border-[#E0A96D]/30 text-[#E0A96D] px-10 sm:px-14 py-4 sm:py-5 rounded-full font-medium shadow-[0_0_30px_rgba(224,169,109,0.2)] transition-opacity duration-200 active:opacity-60 whitespace-nowrap [webkit-tap-highlight-color:transparent]"
            >
              ↺ Restart Experience
            </button>
          </div>
        </div>
      )}
      
      {/* Global CSS Engine Injector */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .dynamic-fade-in {
          animation: fadeIn 0.5s cubic-bezier(0.25, 1, 0.5, 1) forwards;
        }
        .cubic-bezier-bounce {
          transition-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        /* Background Shine Keyframes — Synchronized seamlessly with the unwrap physics */
        @keyframes ambientShine {
          0% { background-color: rgba(224,169,109,0.05); filter: blur(100px); transform: scale(1); }
          40% { background-color: rgba(224,169,109,0.25); filter: blur(130px); transform: scale(1.4); }
          80% { background-color: rgba(224,169,109,0.4); filter: blur(70px); transform: scale(1.9); }
          100% { background-color: rgba(224,169,109,0.05); filter: blur(100px); transform: scale(1); }
        }
        @keyframes ambientShineDelayed {
          0% { background-color: rgba(168,85,247,0.05); filter: blur(100px); transform: scale(1); }
          45% { background-color: rgba(168,85,247,0.2); filter: blur(140px); transform: scale(1.3); }
          85% { background-color: rgba(168,85,247,0.35); filter: blur(80px); transform: scale(1.8); }
          100% { background-color: rgba(168,85,247,0.05); filter: blur(100px); transform: scale(1); }
        }
        .animate-ambient-shine {
          animation: ambientShine 2.2s cubic-bezier(0.25, 1, 0.5, 1) forwards;
        }
        .animate-ambient-shine-delayed {
          animation: ambientShineDelayed 2.2s cubic-bezier(0.25, 1, 0.5, 1) forwards;
        }

        /* Ambient Premium Soft Gold Blast Radial Styling */
        .bg-radial-gold {
          background: radial-gradient(circle, rgba(224,169,109,0.3) 0%, rgba(168,85,247,0.05) 50%, transparent 70%);
        }

        /* Box Unwrapping Sequence */
        @keyframes boxSequence {
          0% { transform: scale(0.4) translateY(60px); opacity: 0; }
          15% { transform: scale(1.05) translateY(-8px); opacity: 1; }
          30% { transform: scale(0.97) rotate(-2deg); }
          45% { transform: scale(1.02) rotate(2deg); }
          60% { transform: scale(1) translateY(0); }
          85% { transform: scale(1.1); opacity: 1; filter: blur(0px); }
          100% { transform: scale(0.7); opacity: 0; filter: blur(12px); }
        }
        .animate-box-sequence {
          animation: boxSequence 2.2s cubic-bezier(0.25, 1, 0.5, 1) forwards;
        }

        /* Velvet Lid Lifting Smooth Transition */
        @keyframes premiumLid {
          0%, 45% { transform: translateY(0) rotate(0deg); }
          65% { transform: translateY(-45px) rotate(-12deg); opacity: 0.9; }
          100% { transform: translateY(-110px) rotate(-35deg); opacity: 0; }
        }
        .animate-premium-lid {
          animation: premiumLid 2.2s cubic-bezier(0.25, 1, 0.5, 1) forwards;
        }

        /* Luxury Radial Glow Expand */
        @keyframes goldBurst {
          0%, 40% { transform: scale(0.4); opacity: 0; }
          75% { transform: scale(2.2); opacity: 1; }
          100% { transform: scale(3.5); opacity: 0; }
        }
        .animate-gold-burst {
          animation: goldBurst 2.2s ease-out forwards;
        }

        /* Layered Kinetic Particle Outputs */
        @keyframes particleOne {
          0%, 45% { transform: translateY(0px) scale(0) rotate(0deg); opacity: 0; }
          70% { transform: translateY(-70px) translateX(-30px) scale(1.4) rotate(45deg); opacity: 1; }
          100% { transform: translateY(-130px) translateX(-50px) scale(0.6); opacity: 0; }
        }
        .animate-particle-one {
          animation: particleOne 2.2s ease-out infinite;
        }

        @keyframes particleTwo {
          0%, 52% { transform: translateY(0px) scale(0); opacity: 0; }
          75% { transform: translateY(-80px) translateX(35px) scale(1.5); opacity: 1; }
          100% { transform: translateY(-150px) translateX(55px) scale(0.4); opacity: 0; }
        }
        .animate-particle-two {
          animation: particleTwo 2.2s ease-out infinite;
        }

        @keyframes particleThree {
          0%, 48% { transform: translateY(0px) scale(0) rotate(0deg); opacity: 0; }
          72% { transform: translateY(-90px) translateX(5px) scale(1.2) rotate(-30deg); opacity: 1; }
          100% { transform: translateY(-160px) translateX(10px) scale(0.5); opacity: 0; }
        }
        .animate-particle-three {
          animation: particleThree 2.2s ease-out infinite;
        }
      `}</style>
    </div>
  );
}