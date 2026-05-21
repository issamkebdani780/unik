import React from 'react';

const Newsletter = () => {
  return (
    <section className="w-full py-16 md:py-20 relative overflow-hidden bg-gradient-to-r from-[#eef4fc] to-[#f4f8fe] border-t border-b border-gray-150">
      
      {/* Overlapping Product on the left */}
      <div className="absolute bottom-[-30px] left-[-30px] sm:left-[-10px] md:left-6 w-44 sm:w-52 md:w-60 lg:w-64 pointer-events-none z-0 select-none">
        <img 
          src="/newsletter-bottle.png" 
          alt="Unik Anti-Acné Serum" 
          className="w-full h-auto object-contain drop-shadow-md"
        />
      </div>

      {/* Decorative bubble floating (Right) */}
      <div className="absolute right-[5%] top-[15%] w-16 h-16 rounded-full border border-white/60 bg-white/20 backdrop-blur-sm shadow-sm hidden sm:block pointer-events-none select-none"></div>
      <div className="absolute right-[15%] bottom-[15%] w-24 h-24 rounded-full border border-white/50 bg-white/10 backdrop-blur-sm shadow-sm hidden md:block pointer-events-none select-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center space-y-6 md:space-y-8 pl-[10%] sm:pl-0">
          
          <div className="space-y-2">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight text-black uppercase">
              REJOIGNEZ LA COMMUNAUTÉ UNIK
            </h2>
            <p className="text-gray-500 font-semibold text-xs sm:text-sm">
              Conseils beauté, nouveautés et offres exclusives rien que pour vous.
            </p>
          </div>

          <form className="w-full max-w-md flex flex-col sm:flex-row gap-0 border border-gray-200 shadow-sm bg-white p-1">
            <input 
              type="email" 
              placeholder="Votre e-mail" 
              className="flex-1 px-4 py-3 bg-white focus:outline-none text-xs sm:text-sm text-gray-800"
              required
            />
            <button 
              type="submit" 
              className="bg-black text-white px-6 sm:px-8 py-3 text-xs font-bold tracking-widest hover:bg-emerald-950 transition-colors whitespace-nowrap rounded-none uppercase duration-300"
            >
              S'INSCRIRE
            </button>
          </form>

        </div>
      </div>

    </section>
  );
};

export default Newsletter;
