import React from 'react';

const UGCCommunity = () => {
  const videos = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?auto=format&fit=crop&w=400&q=80",
      handle: "@skincare_by_chloe",
      views: "12.4k",
      caption: "Mon indispensable pour une peau lumineuse ✨ #Unik",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1596755389378-c11dde12415e?auto=format&fit=crop&w=400&q=80",
      handle: "@glowwithmia",
      views: "8.2k",
      caption: "Routine du soir avec les essentiels anti-acné 💧",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=400&q=80",
      handle: "@hairgoals_fr",
      views: "45.1k",
      caption: "Croissance capillaire : mes résultats après 3 mois ! 🌱",
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1580870058864-1596541f5a54?auto=format&fit=crop&w=400&q=80",
      handle: "@natural.lena",
      views: "22.8k",
      caption: "Texture incroyable ! 🤍 On adore #Selfcare",
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1512496015851-a1dc8a477858?auto=format&fit=crop&w=400&q=80",
      handle: "@dr.beaute",
      views: "105k",
      caption: "Avis d'expert sur la gamme Dermatologique UNIK 🔬",
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=400&q=80",
      handle: "@justine_curls",
      views: "9.3k",
      caption: "Définir ses boucles facilement 👩🏽‍🦱✨",
    }
  ];

  // We duplicate the array to create a seamless infinite loop
  const duplicatedVideos = [...videos, ...videos];

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

      <div className="relative w-full overflow-hidden group">
        {/* Gradients for smooth fading on edges */}
        <div className="absolute top-0 left-0 h-full w-12 sm:w-32 bg-gradient-to-r from-[#fcfcfc] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 h-full w-12 sm:w-32 bg-gradient-to-l from-[#fcfcfc] to-transparent z-10 pointer-events-none"></div>

        <div className="animate-marquee py-4">
          {duplicatedVideos.map((video, index) => (
            <a
              key={index}
              href="#"
              className="relative w-64 h-96 sm:w-72 sm:h-[450px] mx-3 sm:mx-4 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex-shrink-0 cursor-pointer group/card block"
              aria-label={`Voir la vidéo de ${video.handle}`}
            >
              {/* Image Thumbnail */}
              <img
                src={video.image}
                alt={`Video by ${video.handle}`}
                className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-700"
              />
              
              {/* Overlay Gradient for readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/card:opacity-100 transition-opacity duration-300">
                <div className="w-14 h-14 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
                  <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>

              {/* Video Info (Handle, Views, Caption) */}
              <div className="absolute bottom-0 left-0 w-full p-5 text-left">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-8 h-8 rounded-full border-2 border-white overflow-hidden">
                    <img src={video.image} alt="Avatar" className="w-full h-full object-cover" />
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default UGCCommunity;
