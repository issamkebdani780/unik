const Newsletter = () => {
  return (
    <section className="w-full py-20 relative overflow-hidden bg-gradient-to-r from-[#eef4fc] to-[#f8faff]">
      {/* Decorative Bubbles (Vide representation) */}
      <div className="absolute top-10 left-10 w-24 h-24 rounded-full border-4 border-white/60 bg-blue-100/20 backdrop-blur-sm shadow-sm"></div>
      <div className="absolute bottom-10 left-32 w-16 h-16 rounded-full border-2 border-white/80 bg-white/30 backdrop-blur-sm shadow-sm"></div>
      <div className="absolute top-32 left-1/4 w-10 h-10 rounded-full border-2 border-white/60 bg-blue-100/30 backdrop-blur-sm shadow-sm"></div>
      <div className="absolute bottom-20 right-20 w-32 h-32 rounded-full border-4 border-white/50 bg-white/20 backdrop-blur-sm shadow-sm hidden md:block"></div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center space-y-8">
          
          <div className="space-y-3">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-black">
              REJOIGNEZ LA COMMUNAUTÉ UNIK
            </h2>
            <p className="text-gray-600 font-medium">
              Conseils beauté, nouveautés et offres exclusives rien que pour vous.
            </p>
          </div>

          <form className="w-full max-w-lg flex flex-col sm:flex-row gap-3">
            <input 
              type="email" 
              placeholder="Votre e-mail" 
              className="flex-1 px-6 py-3.5 bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-300 transition-all text-sm rounded-none"
              required
            />
            <button 
              type="submit" 
              className="bg-black text-white px-8 py-3.5 text-sm font-bold tracking-wider hover:bg-gray-800 transition-colors whitespace-nowrap rounded-none"
            >
              S'INSCRIRE
            </button>
          </form>

        </div>
      </div>
      
      {/* Product Placeholder on the left */}
      <div className="absolute -bottom-10 -left-10 md:left-10 w-48 h-64 bg-white/80 backdrop-blur-md rounded-xl border border-white shadow-2xl rotate-12 flex items-center justify-center opacity-50 pointer-events-none">
        <span className="text-gray-300 text-xs font-bold tracking-widest rotate-90">UNIK SERUM</span>
      </div>
    </section>
  );
};

export default Newsletter;
