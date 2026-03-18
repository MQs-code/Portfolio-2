// src/app/loading.tsx
export default function Loading() {
  return (
    <div className="fixed inset-0 z-[150] bg-[#030303] flex flex-col items-center justify-center">
      <div className="relative flex items-center justify-center">
        <div className="absolute w-24 h-24 bg-emerald-500/20 rounded-full animate-ping" />
        <div className="absolute w-16 h-16 bg-emerald-500/40 rounded-full animate-pulse" />
        <div className="relative text-2xl font-black tracking-tighter font-outfit uppercase text-white">
          MQ<span className="text-emerald-500">s</span>
        </div>
      </div>
      <div className="mt-8 overflow-hidden">
        <p className="text-[10px] tracking-[0.5em] text-white/30 uppercase animate-pulse">
          Initializing Experience
        </p>
      </div>
    </div>
  );
}