import React from 'react';

const Newsletter = () => {
  return (
    <section className="w-full py-14 md:py-20 relative overflow-hidden bg-gradient-to-r from-[#eef4fc] to-[#f4f8fe] border-t border-b border-gray-200/60">

      {/* Decorative product image — hidden on small screens to avoid overlap */}
      <div className="hidden lg:block absolute top-1/2 -translate-y-1/2 left-8 xl:left-16 w-72 xl:w-96 pointer-events-none z-0 select-none">
        <img
          src="/newsletter.png"
          alt="Unik Sérum"
          className="w-full h-auto object-contain scale-[1.2]"
        />
      </div>

      {/* Decorative bubbles */}
      <div className="absolute right-[5%] top-[15%] w-14 h-14 rounded-full border border-white/60 bg-white/20 backdrop-blur-sm shadow-sm hidden sm:block pointer-events-none select-none" />
      <div className="absolute right-[15%] bottom-[15%] w-20 h-20 rounded-full border border-white/50 bg-white/10 backdrop-blur-sm shadow-sm hidden md:block pointer-events-none select-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-end gap-8 lg:gap-16 py-2">

          <div className="space-y-2 text-center lg:text-left max-w-xs sm:max-w-sm">
            <h2 className="text-xl sm:text-2xl lg:text-[24px] font-extrabold tracking-tight text-black uppercase leading-tight">
              REJOIGNEZ LA COMMUNAUTÉ UNIK
            </h2>
            <p className="text-gray-500 font-semibold text-xs sm:text-sm">
              Conseils beauté, nouveautés et offres exclusives rien que pour vous.
            </p>
          </div>

          <form className="w-full max-w-sm flex flex-col sm:flex-row gap-0 border border-gray-200 shadow-sm bg-white p-1 shrink-0">
            <input
              type="email"
              placeholder="Votre e-mail"
              className="flex-1 px-4 py-3 bg-white focus:outline-none text-xs sm:text-sm text-gray-800 min-w-0"
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
