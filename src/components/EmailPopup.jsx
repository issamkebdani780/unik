import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const EmailPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

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
          {/* Backdrop with slight blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/50 backdrop-blur-xs"
            onClick={handleClose}
          />

          {/* Popup Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative bg-white w-full max-w-[850px] rounded-[28px] shadow-2xl overflow-hidden p-5 flex flex-col md:flex-row gap-8 items-center"
          >
            {/* Round Close Button using your Theme Accent hover state */}
            <button 
              onClick={handleClose}
              className="absolute top-5 right-5 z-20 bg-gray-100 text-gray-500 hover:bg-brand-accent hover:text-white rounded-full p-2 transition-all duration-200"
              aria-label="Fermer"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Left Side: Product/Lifestyle Image */}
            <div className="w-full md:w-1/2 aspect-[4/3] md:aspect-square rounded-[20px] overflow-hidden relative self-stretch hidden sm:block">
              <img 
                src="/RiseGroup-18.png" 
                alt="Unik Summer Restock" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right Side: Copy & Form using your brand's Poppins styles and accent colors */}
            <div className="w-full md:w-1/2 flex flex-col justify-center px-4 md:px-8 py-6 text-center">
              
              <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight text-gray-900 mb-4 lowercase poppins-extrabold">
                bienvenue chez <span className="text-brand-accent">unik</span>
              </h3>
              
              <p className="text-gray-600 text-xs md:text-sm leading-relaxed mb-4 poppins-medium">
                Nous livrons actuellement dans toutes les wilayas d'Algérie avec un service rapide et premium.
              </p>

              <p className="text-gray-500 text-xs md:text-sm leading-relaxed mb-8 poppins-regular">
                Soyez les premiers informés de nos prochains réassorts, du lancement de nos nouvelles routines de soin et bénéficiez de conseils personnalisés.
              </p>

              {/* Form aligned with your theme utilities */}
              <form 
                className="flex flex-col space-y-3.5 w-full max-w-[320px] mx-auto" 
                onSubmit={(e) => { e.preventDefault(); handleClose(); }}
              >
                <input 
                  type="email" 
                  placeholder="Votre adresse email" 
                  required
                  className="w-full px-5 py-3.5 bg-gray-50 border border-gray-200 rounded-[14px] focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all text-sm placeholder-gray-400 text-gray-800 poppins-regular"
                />
                
                <button 
                  type="submit"
                  className="w-full bg-brand-accent hover:bg-brand-hover text-white font-bold py-4 px-6 rounded-full transition-all duration-300 uppercase tracking-widest text-xs poppins-bold shadow-xs"
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