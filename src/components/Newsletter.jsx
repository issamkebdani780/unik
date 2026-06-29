import React from 'react';

const Newsletter = () => {
  return (
    <section className="w-full py-16 md:py-24 relative overflow-hidden bg-black border-t border-gray-900">

      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-white/5 blur-[120px]"></div>
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-brand-accent/10 blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Text Content */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
            <span className="text-[10px] sm:text-xs font-bold tracking-[0.2em] text-gray-400 uppercase block mb-4">
              VOTRE CERCLE PRIVÉ
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white uppercase tracking-tight leading-tight mb-6">
              Rejoignez la communauté <span className="text-brand-accent">UNIK</span>
            </h2>
            <p className="text-gray-400 font-medium text-sm sm:text-base leading-relaxed mb-8 max-w-lg">
              Plus qu'une simple newsletter. En rejoignant notre communauté, vous entrez dans un cercle d'échanges dédié à la santé de votre peau et de vos cheveux.
            </p>
            
            {/* Value Props Checklist */}
            <ul className="space-y-4 mb-10 text-left">
              {[
                { title: 'Contenu éducatif', desc: 'Décryptage d\'ingrédients et conseils routines.' },
                { title: 'Avant-premières (Lancements & Drops)', desc: 'Soyez les premiers informés de nos nouveautés.' },
                { title: 'Promotions exclusives', desc: 'Des offres réservées uniquement aux membres de la communauté.' }
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center mr-4 shrink-0 mt-0.5">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <span className="block text-sm font-bold text-white tracking-wide uppercase">{item.title}</span>
                    <span className="block text-xs text-gray-400 mt-1">{item.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Form Container */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="w-full max-w-md bg-[#111111] border border-white/10 p-8 sm:p-10 rounded-2xl shadow-2xl relative">
              
              <div className="text-center mb-8">
                <h3 className="text-lg font-bold text-white uppercase tracking-wider mb-2">
                  Devenir membre
                </h3>
                <p className="text-xs text-gray-500 font-medium">
                  Rejoignez des milliers d'autres membres dès aujourd'hui.
                </p>
              </div>

              <form className="flex flex-col gap-4">
                <div className="space-y-1">
                  <label htmlFor="email" className="text-[10px] font-bold text-gray-400 uppercase tracking-widest pl-1">
                    Adresse e-mail
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Entrez votre e-mail..."
                    className="w-full px-5 py-4 bg-[#1a1a1a] border border-white/5 rounded-xl focus:outline-none focus:border-brand-accent/50 text-sm text-white placeholder-gray-600 transition-colors"
                    required
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-white text-black mt-2 py-4 text-xs font-bold tracking-widest hover:bg-gray-200 transition-colors rounded-xl uppercase shadow-lg"
                >
                  REJOINDRE LA COMMUNAUTÉ
                </button>
                
                <p className="text-[10px] text-gray-600 text-center mt-4 px-4 leading-relaxed">
                  En rejoignant la communauté, vous acceptez notre politique de confidentialité. Vous pouvez vous désinscrire à tout moment.
                </p>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Newsletter;
