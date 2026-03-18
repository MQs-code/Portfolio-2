"use client";
import { motion } from "framer-motion";
import { Github, Linkedin, ArrowUpRight, MessageCircle } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  
  const WHATSAPP_NUMBER = "923707158959"; // Number with country code, no +

  const socials = [
    { name: "LinkedIn", icon: <Linkedin size={18} />, link: "#" },
    { name: "GitHub", icon: <Github size={18} />, link: "#" },
  ];

  const handleWhatsAppRedirect = (e) => {
    e.preventDefault();
    const text = `Hi Miqdam! %0A%0AMy Name: ${formData.name}%0AEmail: ${formData.email}%0AMessage: ${formData.message}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
  };

  return (
    <main className="min-h-screen w-full bg-[#050505] text-white flex items-center justify-center p-4 sm:p-8 md:p-24 overflow-x-hidden relative">
      
      {/* Background Glow - Responsive size */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] md:w-[60vw] h-[90vw] md:h-[60vw] bg-emerald-500/[0.03] blur-[80px] md:blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 z-10 pt-20 lg:pt-0">
        
        {/* Left Side: Editorial Typography */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center text-left"
        >
          <span className="text-emerald-500 font-mono text-[9px] md:text-[10px] tracking-[0.6em] uppercase mb-4 md:mb-6">Contact</span>
          
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] md:leading-[0.8] mb-6 md:mb-8">
            Start a <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-700 to-neutral-900">Project</span>
          </h1>

          <p className="text-neutral-400 text-base md:text-xl font-light max-w-sm leading-relaxed mb-8 md:mb-10">
            I’m available for freelance work and cinematic web experiences. Let's create something 
            <span className="text-white font-medium"> unforgettable</span>.
          </p>

          {/* Social Links - Stack on mobile, row on desktop */}
          <div className="flex flex-wrap gap-6">
            {socials.map((social) => (
              <a 
                key={social.name} 
                href={social.link} 
                className="group flex items-center gap-2 text-[10px] md:text-xs font-bold uppercase tracking-widest text-neutral-500 hover:text-emerald-500 transition-colors"
              >
                {social.icon} {social.name} 
                <ArrowUpRight size={14} className="opacity-0 lg:group-hover:opacity-100 transition-all" />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Right Side: Form Container */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white/[0.02] border border-white/5 p-6 sm:p-10 md:p-12 rounded-[2rem] md:rounded-[2.5rem] backdrop-blur-3xl shadow-2xl relative"
        >
          <form className="space-y-8 md:space-y-10" onSubmit={handleWhatsAppRedirect}>
            
            <div className="relative group">
              <input 
                required
                type="text" 
                placeholder="YOUR NAME"
                className="w-full bg-transparent border-b border-neutral-800 py-3 md:py-4 outline-none focus:border-emerald-500 transition-all placeholder:text-neutral-700 font-bold text-xs md:text-sm tracking-widest uppercase"
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
              <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-emerald-500 lg:group-focus-within:w-full transition-all duration-500" />
            </div>

            <div className="relative group">
              <input 
                required
                type="email" 
                placeholder="YOUR EMAIL"
                className="w-full bg-transparent border-b border-neutral-800 py-3 md:py-4 outline-none focus:border-emerald-500 transition-all placeholder:text-neutral-700 font-bold text-xs md:text-sm tracking-widest uppercase"
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
              <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-emerald-500 lg:group-focus-within:w-full transition-all duration-500" />
            </div>

            <div className="relative group">
              <textarea 
                required
                rows={3}
                placeholder="PROJECT DESCRIPTION"
                className="w-full bg-transparent border-b border-neutral-800 py-3 md:py-4 outline-none focus:border-emerald-500 transition-all placeholder:text-neutral-700 font-bold text-xs md:text-sm tracking-widest uppercase resize-none"
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              />
              <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-emerald-500 lg:group-focus-within:w-full transition-all duration-500" />
            </div>

            <button 
              type="submit"
              className="group relative w-full bg-emerald-500 text-black py-5 md:py-6 rounded-xl md:rounded-2xl overflow-hidden font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-[10px] md:text-xs transition-transform active:scale-[0.98]"
            >
              <span className="relative z-10 flex items-center justify-center gap-3 lg:group-hover:text-white transition-colors duration-300">
                <MessageCircle size={18} fill="currentColor" /> Send via WhatsApp
              </span>
              <div className="absolute inset-0 bg-neutral-900 translate-y-full lg:group-hover:translate-y-0 transition-transform duration-500 ease-out" />
            </button>
          </form>

          <div className="mt-8 md:mt-10 pt-8 border-t border-white/5">
            <p className="text-[8px] md:text-[9px] font-mono text-neutral-600 tracking-[0.4em] md:tracking-[0.5em] uppercase text-center">
              MQs Creativity — Est. 2026
            </p>
          </div>
        </motion.div>

      </div>
    </main>
  );
}