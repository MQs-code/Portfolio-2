"use client";
import { useState } from "react";
import { usePathname } from "next/navigation"; // Pathname detect karne ke liye
import { Outfit, Poppins } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Home } from "lucide-react";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });
const poppins = Poppins({ weight: ["400", "700"], subsets: ["latin"], variable: "--font-poppins" });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // Current route track karega

  // Check karein ke user Contact page par hai ya nahi
  const isContactPage = pathname === "/contact";

  const handleNavClick = (id: string) => {
    setIsOpen(false); 
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80; 
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${outfit.variable} ${poppins.variable} font-sans antialiased bg-[#030303] text-white overflow-x-hidden`}>
        
        <header className="fixed top-0 left-0 w-full z-[100] p-4 md:p-8">
          <nav className="relative max-w-7xl mx-auto flex justify-between items-center backdrop-blur-xl bg-white/[0.02] border border-white/10 rounded-full px-6 py-3 shadow-2xl">
            
            <div className="flex items-center gap-4 z-[210]">
              <Link href="/" className="flex items-center gap-3 group">
                <div className="bg-white/5 p-2 rounded-full group-hover:bg-emerald-500/20 transition-all duration-500">
                  <Home size={18} className="text-white group-hover:text-emerald-500 transition-colors" />
                </div>
                <h1 className="text-xl md:text-2xl font-black tracking-tighter font-outfit uppercase">
                  MQ<span className="text-emerald-500">s</span>
                </h1>
              </Link>
            </div>

            {/* Desktop Navigation with Conditional Logic */}
            <div className="hidden md:flex items-center space-x-8 text-[11px] font-bold uppercase tracking-[0.3em]">
              <Link href="/" className="hover:text-emerald-400 transition-colors">Home</Link>
              
              {!isContactPage && (
                <>
                  <button onClick={() => handleNavClick('projects')} className="hover:text-emerald-400 transition-colors">Projects</button>
                  <button onClick={() => handleNavClick('feedback')} className="hover:text-emerald-400 transition-colors">Feedback</button>
                </>
              )}

              <Link href='/contact' className={`px-6 py-2 rounded-full transition-all duration-300 ${isContactPage ? 'bg-emerald-500 text-white' : 'bg-white text-black hover:bg-emerald-500 hover:text-white'}`}>
                {isContactPage ? "Active" : "Contact"}
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden z-[210] w-10 h-10 flex flex-col items-center justify-center space-y-1.5 focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
              <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
              <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </button>

            {/* Mobile Menu Content with same Conditional Logic */}
            <div className={`fixed top-24 left-4 right-4 h-auto py-10 px-6 bg-[#0a0a0a] border border-white/10 rounded-[2.5rem] flex flex-col items-center justify-center space-y-6 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] z-[150] md:hidden shadow-2xl ${isOpen ? "translate-y-0 opacity-100 visible" : "-translate-y-10 opacity-0 invisible"}`}>
              <Link href="/" onClick={() => setIsOpen(false)} className="text-2xl font-bold uppercase tracking-widest hover:text-emerald-500">Home</Link>
              
              {!isContactPage && (
                <>
                  <button onClick={() => handleNavClick('projects')} className="text-2xl font-bold uppercase tracking-widest hover:text-emerald-500">Projects</button>
                  <button onClick={() => handleNavClick('feedback')} className="text-2xl font-bold uppercase tracking-widest hover:text-emerald-500">Feedback</button>
                </>
              )}

              <Link href='/contact' onClick={() => setIsOpen(false)} className="bg-emerald-500 text-black font-black uppercase tracking-widest text-[10px] px-10 py-4 rounded-full mt-4">
                {isContactPage ? "Let's Talk" : "Contact Me"}
              </Link>
            </div>
          </nav>
        </header>

        <main className="relative">{children}</main>

        <footer className="py-12 border-t border-white/5 text-center text-white/20 text-[10px] tracking-[0.4em] uppercase">
          &copy; 2026 MQs CREATIVITY
        </footer>
      </body>
    </html>
  );
}