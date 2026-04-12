"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Home } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // FIX: Use proper comparison for both pages
  const isContactPage = pathname === '/contact';
  const isAboutPage = pathname === '/About';
  
  // This will only be true if you are on /contact OR /About
  const shouldHideWork = isContactPage || isAboutPage;

  const handleNavClick = (id) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-[100] p-4 md:p-8">
      <nav className="relative max-w-7xl mx-auto flex justify-between items-center backdrop-blur-xl bg-white/[0.02] border border-white/10 rounded-full px-6 py-3 shadow-2xl">
        
        <div className="flex items-center gap-4 z-[210]">
          <Link href="/" prefetch={true} className="flex items-center gap-3 group">
            <div className="bg-white/5 p-2 rounded-full group-hover:bg-emerald-500/20 transition-all duration-500">
              <Home size={18} className="text-white group-hover:text-emerald-500 transition-colors" />
            </div>
            <h1 className="text-xl md:text-2xl font-black tracking-tighter uppercase">
              MQ<span className="text-emerald-500">s</span>
            </h1>
          </Link>
        </div>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center space-x-8 text-[11px] font-bold uppercase tracking-[0.3em]">
          <Link href="/" prefetch={true} className="hover:text-emerald-400 transition-colors">Home</Link>
          
          {/* Work only shows if NOT on Contact or About */}
          {!shouldHideWork && (
            <button onClick={() => handleNavClick('projects')} className="hover:text-emerald-400 transition-colors">
              WORK
            </button>
          )}

          <Link href='/About' prefetch={true} className="hover:text-emerald-400 transition-colors">About</Link>
          
          <Link href='/contact' prefetch={true} className={`px-6 py-2 rounded-full transition-all duration-300 ${isContactPage ? 'bg-emerald-500 text-white' : 'bg-white text-black hover:bg-emerald-500 hover:text-white'}`}>
            {isContactPage ? "Active" : "Contact"}
          </Link>
        </div>

        {/* MOBILE BURGER */}
        <button className="md:hidden z-[210] w-10 h-10 flex flex-col items-center justify-center space-y-1.5 focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>

        {/* MOBILE MENU */}
        <div className={`fixed top-24 left-4 right-4 h-auto py-10 px-6 bg-[#0a0a0a] border border-white/10 rounded-[2.5rem] flex flex-col items-center justify-center space-y-6 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] z-[150] md:hidden shadow-2xl ${isOpen ? "translate-y-0 opacity-100 visible" : "-translate-y-10 opacity-0 invisible"}`}>
          <Link href="/" onClick={() => setIsOpen(false)} className="text-2xl font-bold uppercase tracking-widest hover:text-emerald-500" prefetch={true}>Home</Link>
          
          {!shouldHideWork && (
            <button
              onClick={() => {
                handleNavClick('projects');
                setIsOpen(false);
              }} 
              className="text-2xl font-bold uppercase tracking-widest hover:text-emerald-500"
            >
              Projects
            </button>
          )}
          
          <Link href='/About' onClick={() => setIsOpen(false)} prefetch={true} className="text-2xl font-bold uppercase tracking-widest hover:text-emerald-500">About</Link>
          
          <Link href='/contact' prefetch={true} onClick={() => setIsOpen(false)} className="bg-emerald-500 text-black font-black uppercase tracking-widest text-[10px] px-10 py-4 rounded-full mt-4">
            {isContactPage ? "Let's Talk" : "Contact Me"}
          </Link>
        </div>
      </nav>
    </header>
  );
}