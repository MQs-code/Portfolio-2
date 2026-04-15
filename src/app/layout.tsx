import type { Metadata } from "next";
import { Outfit, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./Navbar/page.jsx"; // Ensure this path matches where you saved the file

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });
const poppins = Poppins({ weight: ["400", "700"], subsets: ["latin"], variable: "--font-poppins" });

// SEO Metadata - This is what Google sees
export const metadata: Metadata = {
  title: "Digital Portfolio | MQs Creatvity",
  description: "Innovative web experiences and creative development by MQs.",
  keywords: ["MQs Creativity", "Web Design", "Portfolio", "Next.js Developer",""],
  openGraph: {
    title: "MQs Creativity",
    description: "Innovative web experiences and creative development.",
    url: "https://mqs-portfolio.vercel.app",
    siteName: "MQs Creativity",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MQs Creativity",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body id="root-body" className={`${outfit.variable} ${poppins.variable} font-sans antialiased bg-[#030303] text-white overflow-x-hidden`}>
        
        {/* Navbar component handles the client-side logic */}
        <Navbar />

        <main className="relative">
          {children}
        </main>

        <footer className="relative mt-20 border-t border-white/10 bg-[#020202] px-6 py-12 md:px-32 md:py-24 overflow-hidden">
  {/* Background Glow */}
  <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-emerald-500/5 blur-[100px] rounded-full pointer-events-none" />

  <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
    
    {/* Brand Section */}
    <div className="flex flex-col gap-4">
      <h2 className="text-3xl font-black uppercase tracking-tighter text-white">
        MQ<span className="text-emerald-500">s</span>
      </h2>
      <p className="max-w-[280px] text-neutral-500 font-mono text-[10px] leading-relaxed uppercase tracking-widest">
        Architecting immersive digital experiences through 3D motion and high-end development.
      </p>
    </div>

    {/* Navigation Links - CSS HOVER ONLY */}
    <div className="grid grid-cols-2 gap-16">
      <div className="flex flex-col gap-4">
        <span className="text-emerald-500 font-mono text-[10px] font-bold uppercase tracking-[0.4em]">Navigation</span>
        <ul className="flex flex-col gap-2">
          <li><a href="/" className="text-neutral-400 text-sm hover:text-white hover:translate-x-1 transition-all duration-300 inline-block">Home</a></li>
          <li><a href="/projects" className="text-neutral-400 text-sm hover:text-white hover:translate-x-1 transition-all duration-300 inline-block">Work</a></li>
          <li><a href="/contact" className="text-neutral-400 text-sm hover:text-white hover:translate-x-1 transition-all duration-300 inline-block">Contact</a></li>
        </ul>
      </div>

      <div className="flex flex-col gap-4">
        <span className="text-emerald-500 font-mono text-[10px] font-bold uppercase tracking-[0.4em]">About</span>
        <ul className="flex flex-col gap-2">
          <li><a href="/About" className="text-neutral-400 text-sm hover:text-white hover:translate-x-1 transition-all duration-300 inline-block">Services</a></li>
          <li><a href="/About" className="text-neutral-400 text-sm hover:text-white hover:translate-x-1 transition-all duration-300 inline-block">Introduction</a></li>
          <li><a href="/About" className="text-neutral-400 text-sm hover:text-white hover:translate-x-1 transition-all duration-300 inline-block">Tech Stack</a></li>
        </ul>
      </div>
    </div>
  </div>

  {/* Bottom Bar */}
  <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
    <p className="text-[9px] text-neutral-600 font-mono uppercase tracking-[0.5em]">
      &copy; 2026 MQs CREATIVITY — ALL RIGHTS RESERVED
    </p>
    
    <div className="flex items-center gap-2">
      <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_8px_#10b981]" />
      <span className="text-[9px] text-neutral-400 font-mono uppercase tracking-[0.3em]">Available for projects</span>
    </div>
  </div>
</footer>
      </body>
    </html>
  );
}