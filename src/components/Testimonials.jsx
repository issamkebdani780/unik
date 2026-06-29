import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const reviews = [
  {
    id: 1,
    name: "Sarah M.",
    role: "Acheteuse Vérifiée",
    title: "Une vraie révélation",
    text: "Depuis que j'utilise le sérum anti-acné, ma peau est complètement transformée. Plus de rougeurs, plus de boutons persistants. Je recommande à 100% !",
    rating: 5,
    product: "Sérum Anti-Acné",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 2,
    name: "Lina K.",
    role: "Acheteuse Vérifiée",
    title: "Mes cheveux revivent",
    text: "Le shampooing pousse a sauvé mes cheveux qui étaient très cassants après plusieurs décolorations. Ils sont plus forts et poussent enfin !",
    rating: 5,
    product: "Shampooing Pousse & Équilibre",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 3,
    name: "Emma T.",
    role: "Acheteuse Vérifiée",
    title: "Texture incroyable",
    text: "J'adore la texture très légère de la crème hydratante. Elle pénètre rapidement sans laisser de film gras, idéale avant le maquillage le matin.",
    rating: 5,
    product: "Crème Hydratante Légère",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 4,
    name: "Chloé B.",
    role: "Acheteuse Vérifiée",
    title: "Je ne m'en passe plus",
    text: "Une gamme capillaire vraiment complète et respectueuse du cuir chevelu. J'apprécie particulièrement la composition ultra clean.",
    rating: 4,
    product: "Sérum Anti-Chute Capillaire",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 5,
    name: "Yasmine L.",
    role: "Acheteuse Vérifiée",
    title: "Très efficace rapidement",
    text: "Des résultats visibles dès les trois premières semaines d'utilisation. Le packaging en verre est aussi très élégant dans la salle de bain.",
    rating: 5,
    product: "Lotion Exfoliante Douce",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80"
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Autoplay logic
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isHovered]);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % reviews.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const StarIcon = () => (
    <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );

  return (
    <section className="w-full bg-[#fcfcfc] py-20 sm:py-32 overflow-hidden border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <span className="text-[10px] sm:text-xs font-bold tracking-[0.2em] text-gray-400 uppercase block mb-4">
          ILS L'ONT ADOPTÉ
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-black uppercase tracking-tight leading-tight">
          Avis de notre <span className="text-brand-accent">Communauté</span>
        </h2>
      </div>

      <div 
        className="relative w-full max-w-5xl mx-auto h-[450px] sm:h-[400px] flex items-center justify-center"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <AnimatePresence>
          {reviews.map((review, index) => {
            // Calculate relative position
            let diff = index - activeIndex;
            if (diff < -2) diff += reviews.length;
            if (diff > 2) diff -= reviews.length;

            const isCenter = diff === 0;
            const isLeft = diff === -1;
            const isRight = diff === 1;
            
            // Determine styles based on position
            let xOffset = "0%";
            let scale = 0;
            let opacity = 0;
            let zIndex = 0;
            let blur = "blur(0px)";

            if (isCenter) {
              xOffset = "0%";
              scale = 1;
              opacity = 1;
              zIndex = 20;
            } else if (isLeft) {
              xOffset = "-105%";
              scale = 0.85;
              opacity = 0.4;
              zIndex = 10;
              blur = "blur(2px)";
            } else if (isRight) {
              xOffset = "105%";
              scale = 0.85;
              opacity = 0.4;
              zIndex = 10;
              blur = "blur(2px)";
            } else if (diff < -1) {
              xOffset = "-150%";
              scale = 0.6;
              opacity = 0;
              zIndex = 0;
            } else if (diff > 1) {
              xOffset = "150%";
              scale = 0.6;
              opacity = 0;
              zIndex = 0;
            }

            return (
              <motion.div
                key={review.id}
                initial={false}
                animate={{
                  x: xOffset,
                  scale: scale,
                  opacity: opacity,
                  zIndex: zIndex,
                  filter: blur
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="absolute w-[90%] sm:w-[500px] bg-white p-8 sm:p-10 rounded-2xl shadow-xl border border-gray-100"
                style={{
                  pointerEvents: isCenter ? 'auto' : 'none'
                }}
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="flex space-x-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <StarIcon key={i} />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold tracking-widest text-brand-accent uppercase bg-brand-light px-3 py-1 rounded-full">
                    {review.product}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-black mb-4">"{review.title}"</h3>
                <p className="text-gray-500 font-medium text-sm leading-relaxed mb-8">
                  {review.text}
                </p>

                <div className="flex items-center space-x-4">
                  <img 
                    src={review.image} 
                    alt={review.name} 
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm font-bold text-black">{review.name}</p>
                    <p className="text-xs text-gray-400 font-medium flex items-center mt-1">
                      <svg className="w-3 h-3 text-green-500 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {review.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>

        {/* Navigation Controls */}
        <div className="absolute top-1/2 -translate-y-1/2 left-4 sm:-left-4 lg:-left-12 z-30">
          <button 
            onClick={handlePrev}
            className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center shadow-lg text-black hover:bg-black hover:text-white transition-colors duration-300 border border-gray-100"
            aria-label="Avis précédent"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 right-4 sm:-right-4 lg:-right-12 z-30">
          <button 
            onClick={handleNext}
            className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center shadow-lg text-black hover:bg-black hover:text-white transition-colors duration-300 border border-gray-100"
            aria-label="Avis suivant"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
