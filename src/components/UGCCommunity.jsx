import React, { useRef, useEffect, useState } from 'react';

const UGCCommunity = () => {
  const scrollContainerRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  // Local fallback images state tracker
  const [imageErrors, setImageErrors] = useState({});

  const handleImageError = (id) => {
    setImageErrors((prev) => ({ ...prev, [id]: true }));
  };

  const videos = [
    {
      id: 1,
      image: "/RiseGroup-18.png", // Local asset
      handle: "@skincare_by_chloe",
      views: "12.4k",
      caption: "Mon indispensable pour une peau lumineuse ✨ #Unik",
    },
    {
      id: 2,
      image: "/dermato_gel.png", // Local asset
      handle: "@glowwithmia",
      views: "8.2k",
      caption: "Routine du soir avec les essentiels anti-acné 💧",
    },
    {
      id: 3,
      image: "/capillaire_serum.png", // Local asset
      handle: "@hairgoals_fr",
      views: "45.1k",
      caption: "Croissance capillaire : mes résultats après 3 mois ! 🌱",
    },
    {
      id: 4,
      image: "/catg1.png", // Local asset
      handle: "@natural.lena",
      views: "22.8k",
      caption: "Texture incroyable ! 🤍 On adore #Selfcare",
    },
    {
      id: 5,
      image: "/about_lab.png", // Local asset
      handle: "@dr.beaute",
      views: "105k",
      caption: "Avis d'expert sur la gamme Dermatologique UNIK 🔬",
    },
    {
      id: 6,
      image: "/catg2.png", // Local asset
      handle: "@justine_curls",
      views: "9.3k",
      caption: "Définir ses boucles facilement 👩🏽‍Glisse",
    }
  ];

  // We duplicate the array to create a seamless infinite loop
  const duplicatedVideos = [...videos, ...videos];

  useEffect(() => {
    let animationFrameId;
    const container = scrollContainerRef.current;

    const scroll = () => {
      if (container && !isPaused) {
        container.scrollLeft += 1;
        
        // Reset scroll position when reaching the end of the first set
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft -= container.scrollWidth / 2;
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused]);

  const handlePrev = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const handleNext = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full bg-[#fcfcfc] py-20 sm:py-32 overflow-hidden border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12 sm:mb-16">
        <span className="text-[10px] sm:text-xs font-bold tracking-[0.2em] text-gray-400 uppercase block mb-4">
          REJOIGNEZ LE MOUVEMENT
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-black uppercase tracking-tight leading-tight">
          Notre <span className="text-brand-accent">Communauté</span>
        </h2>
        <p className="mt-4 text-sm sm:text-base text-gray-500 font-medium max-w-2xl mx-auto">
          Découvrez comment notre communauté intègre UNIK dans son quotidien. 
          Partagez votre expérience avec #UnikCommeToi.
        </p>
      </div>

      <div 
        className="relative w-full group"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        {/* Gradients for smooth fading on edges */}
        <div className="absolute top-0 left-0 h-full w-12 sm:w-32 bg-gradient-to-r from-[#fcfcfc] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 h-full w-12 sm:w-32 bg-gradient-to-l from-[#fcfcfc] to-transparent z-10 pointer-events-none"></div>

        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto py-8 px-4 sm:px-8 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {duplicatedVideos.map((video, index) => {
            const hasError = imageErrors[video.id];
            return (
              <a
                key={index}
                href="#"
                className="relative w-64 h-96 sm:w-72 sm:h-[450px] mx-3 sm:mx-4 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex-shrink-0 cursor-pointer group/card block bg-gray-100"
                aria-label={`Voir la vidéo de ${video.handle}`}
              >
                {/* Image Thumbnail with local files & error handler */}
                {!hasError ? (
                  <img
                    src={video.image}
                    alt={`Video by ${video.handle}`}
                    onError={() => handleImageError(video.id)}
                    className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-700 pointer-events-none"
                  />
                ) : (
                  /* Soft generic gradient placeholder if local path fails */
                  <div className="w-full h-full bg-gradient-to-br from-[#f1f5fa] to-[#eaf1fa] flex items-center justify-center text-xs font-semibold text-gray-400">
                    {video.handle}
                  </div>
                )}
                
                {/* Overlay Gradient for readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none"></div>

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="w-14 h-14 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
                    <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>

                {/* Video Info (Handle, Views, Caption) */}
                <div className="absolute bottom-0 left-0 w-full p-5 text-left pointer-events-none">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-8 h-8 rounded-full border-2 border-white overflow-hidden bg-gray-200">
                      {!hasError && (
                        <img src={video.image} alt="Avatar" className="w-full h-full object-cover" />
                      )}
                    </div>
                    <div>
                      <p className="text-white font-bold text-xs tracking-wide shadow-sm">{video.handle}</p>
                      <p className="text-white/80 font-medium text-[10px] flex items-center">
                        <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        {video.views} vues
                      </p>
                    </div>
                  </div>
                  <p className="text-white text-xs font-medium line-clamp-2 shadow-sm opacity-90">
                    {video.caption}
                  </p>
                </div>
              </a>
            );
          })}
        </div>

        {/* Navigation Controls */}
        <div className="absolute top-1/2 -translate-y-1/2 left-4 sm:left-8 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button 
            onClick={handlePrev}
            className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center shadow-lg text-black hover:bg-black hover:text-white transition-colors duration-300 border border-gray-100"
            aria-label="Vidéo précédente"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 right-4 sm:right-8 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button 
            onClick={handleNext}
            className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center shadow-lg text-black hover:bg-black hover:text-white transition-colors duration-300 border border-gray-100"
            aria-label="Vidéo suivante"
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

export default UGCCommunity;