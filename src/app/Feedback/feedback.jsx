"use client";

import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { AnimatePresence, motion } from "framer-motion";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function FeedbackSection() {
  const containerRef = useRef(null);
  const cardContainerRef = useRef(null);
  
  const [feedbacks, setFeedbacks] = useState([
    { 
      id: 1, 
      client: "Sarah Jenkins", 
      role: "Creative Director", 
      text: "The cinematic soul MQs pours into their work is rare. They didn't just build a site; they built an emotion." 
    }
  ]);

  const [name, setName] = useState("");
  const [msg, setMsg] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [status, setStatus] = useState(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // Unified Scroll Stacking Animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: `+=${feedbacks.length * 100}%`,
          pin: true,
          scrub: 0.8,
          invalidateOnRefresh: true,
        },
      });

      feedbacks.forEach((_, i) => {
        if (i === 0) return;
        tl.to(cardContainerRef.current, {
          yPercent: -i * 100,
          ease: "expo.inOut",
        }, i);
      });
    }, [feedbacks]);

    return () => ctx.revert();
  }, [feedbacks]);

  const showPopup = (type) => {
    setStatus(type);
    setTimeout(() => setStatus(null), 1800);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !msg) return;

    if (editingId) {
      setFeedbacks(prev => prev.map(f => f.id === editingId ? { ...f, client: name, text: msg } : f));
      setEditingId(null);
      showPopup('Updated');
    } else {
      // Push new content to TOP
      setFeedbacks(prev => [{ id: Date.now(), client: name, role: "Partner", text: msg }, ...prev]);
      showPopup('Submitted');
    }
    
    setName(""); 
    setMsg("");
    
    // Refresh ScrollTrigger silently without jumping the page
    setTimeout(() => {
        ScrollTrigger.refresh();
    }, 100);
  };

  const handleDelete = (id) => {
    setFeedbacks(prev => prev.filter(f => f.id !== id));
    showPopup('Deleted');
    setTimeout(() => ScrollTrigger.refresh(), 100);
  };

  return (
    <section ref={containerRef} className="relative min-h-screen w-full bg-[#030303] flex flex-col lg:flex-row items-center overflow-hidden">
      
      {/* Modern Status Popup with Icons & Text */}
      <AnimatePresence>
        {status && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-md"
          >
            <motion.div 
              initial={{ scale: 0.8, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 1.1, opacity: 0 }}
              className="bg-neutral-900 border border-white/10 p-10 rounded-[40px] flex flex-col items-center shadow-2xl min-w-[200px]"
            >
              <div className="mb-4">
                {status === 'Deleted' ? (
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M15 9l-6 6M9 9l6 6"/></svg>
                ) : (
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                )}
              </div>
              <h3 className="text-white text-xs font-bold tracking-[0.5em] uppercase">{status}</h3>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="container mx-auto px-6 lg:px-24 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-24 items-center z-10 w-full h-full">
        
        {/* CARDS TOP (On Mobile) */}
        <div className="lg:col-span-7 h-[400px] lg:h-[500px] overflow-hidden order-1 lg:order-2 mt-12 lg:mt-0">
          <div ref={cardContainerRef} className="flex flex-col h-full w-full">
            {feedbacks.map((item) => (
              <div key={item.id} className="h-full w-full flex flex-col justify-center shrink-0">
                <div className="relative p-8 lg:p-14 rounded-[45px] border border-white/5 bg-[#060606] shadow-[0_50px_100px_-20px_rgba(0,0,0,1)] group">
                  
                  <div className="absolute top-8 right-10 flex gap-4">
                    <button onClick={() => {setName(item.client); setMsg(item.text); setEditingId(item.id);}} className="text-white/10 hover:text-emerald-500 transition-colors">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
                    </button>
                    <button onClick={() => handleDelete(item.id)} className="text-white/10 hover:text-red-500 transition-colors">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
                    </button>
                  </div>

                  <p className="text-xl lg:text-3xl font-light text-white/90 leading-tight mb-10 tracking-tight">
                    <span className="text-emerald-500 italic mr-2 opacity-30 text-4xl font-serif">“</span>
                    {item.text}
                  </p>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500 font-bold text-[10px]">
                      {item.client.charAt(0)}
                    </div>
                    <div>
                      <h4 className="text-white font-bold tracking-[0.2em] uppercase text-[9px]">{item.client}</h4>
                      <p className="text-white/20 text-[8px] uppercase mt-0.5 tracking-widest">{item.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* INPUT BOX BELOW (On Mobile) */}
        <div className="lg:col-span-5 order-2 lg:order-1 pb-20 lg:pb-0">
          <header className="mb-8">
            <h2 className="text-4xl lg:text-7xl font-bold tracking-tighter text-white leading-[0.9] uppercase">
              Share your <br /> 
              <span className="text-emerald-500 italic font-light lowercase font-serif">experience.</span>
            </h2>
          </header>
          
          <form onSubmit={handleSubmit} className="space-y-3">
            <input 
              value={name} onChange={(e) => setName(e.target.value)} placeholder="Full Name" 
              className="w-full bg-white/[0.01] border border-white/5 p-4 text-white text-sm rounded-2xl outline-none focus:border-emerald-500/20 transition-all font-light" 
            />
            <textarea 
              value={msg} onChange={(e) => setMsg(e.target.value)} placeholder="Your message..." rows={3} 
              className="w-full bg-white/[0.01] border border-white/5 p-4 text-white text-sm rounded-2xl outline-none focus:border-emerald-500/20 transition-all resize-none font-light" 
            />
            <button className="w-full py-4 rounded-2xl font-bold text-[9px] tracking-[0.6em] uppercase transition-all bg-white text-black hover:bg-emerald-500 hover:text-white active:scale-95 duration-500 shadow-2xl">
              {editingId ? "Update Now" : "Post Feedback"}
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}