import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const EmailPopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasSeenPopup = sessionStorage.getItem('hasSeenEmailPopup');
    
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 3000);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    sessionStorage.setItem('hasSeenEmailPopup', 'true');
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={handleClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative bg-white w-full max-w-md rounded-2xl shadow-2xl overflow-hidden flex flex-col"
          >
            <div className="p-8 w-full relative">
              <button 
                onClick={handleClose}
                className="absolute top-4 right-4 text-gray-400 hover:text-black transition-colors focus:outline-none p-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <div className="text-center mt-4 mb-6">
                <h3 className="text-2xl font-bold tracking-tight text-black mb-3 poppins-bold">Unik</h3>
                <p className="text-gray-600 text-sm poppins-regular leading-relaxed">
                  Signup for insider tips, lunch news and all thing unik.
                </p>
              </div>

              <form className="flex flex-col space-y-4" onSubmit={(e) => { e.preventDefault(); handleClose(); }}>
                <input 
                  type="email" 
                  placeholder="Votre adresse email" 
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all text-sm poppins-regular"
                />
                <button 
                  type="submit"
                  className="w-full bg-black hover:bg-brand-accent text-white font-bold py-3 px-4 rounded-md transition-colors uppercase tracking-widest text-xs poppins-semibold"
                >
                  S'inscrire
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default EmailPopup;
