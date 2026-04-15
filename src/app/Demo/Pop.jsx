'use client'

import { motion, AnimatePresence } from "framer-motion";
import { Handshake, X } from 'lucide-react';

export default function DealPopup({ isOpen, onClose, onContact }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] flex items-center justify-center p-6 bg-black/40 backdrop-blur-md"
        >
          {/* Backdrop Click to Close */}
          <div className="absolute inset-0" onClick={onClose} />

          <motion.div 
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative bg-white rounded-[2.5rem] p-8 md:p-12 max-w-lg w-full text-center shadow-2xl border border-black/5"
          >
            {/* Close Icon for better UX */}
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 text-gray-400 hover:text-black transition-colors"
            >
              <X size={20} />
            </button>

            <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <Handshake className="text-green-800" size={32} />
            </div>

            <h2 className="text-3xl md:text-4xl serif mb-4">
              Let's make a <span className="italic text-gradient">Deal First</span>
            </h2>
            
            <p className="text-gray-500 font-light mb-8 leading-relaxed">
              Join our exclusive inner circle to get early access to floor plans, lease details, and opening night invites.
            </p>

            <div className="flex flex-col gap-3">
              <button 
                onClick={onContact}
                className="w-full bg-green-900 text-white py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-green-800 transition-all shadow-lg shadow-green-900/20"
              >
                Contact Now
              </button>
              <button 
                onClick={onClose}
                className="w-full py-4 rounded-full font-bold uppercase tracking-widest text-xs text-gray-400 hover:text-black transition-all"
              >
                Maybe later (OK)
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}