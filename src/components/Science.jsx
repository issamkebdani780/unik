import React from 'react';

const Science = () => {
  return (
    <section className="w-full py-16 lg:py-20 bg-[#fbfbfb] relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* Column 1: Text Content (Left) */}
          <div className="lg:col-span-4 space-y-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-black leading-tight uppercase">
              LA SCIENCE AU SERVICE DE VOTRE PEAU & DE VOS CHEVEUX
            </h2>
            <p className="text-gray-500 font-medium text-xs sm:text-sm leading-relaxed max-w-sm">
              Chaque formule Unik est développée avec rigueur pour offrir des résultats visibles et durables, en toute sécurité.
            </p>
            <a
              href="#"
              className="inline-block border border-black text-black px-8 py-3.5 text-xs font-bold tracking-widest hover:bg-black hover:text-white transition-all duration-300 rounded-none uppercase"
            >
              EN SAVOIR PLUS
            </a>
          </div>

          {/* Column 2: Features Grid (Middle) */}
          <div className="lg:col-span-5 grid grid-cols-3 divide-x divide-gray-200 py-6 sm:py-8 lg:py-0">

            {/* Feature 1 */}
            <div className="flex flex-col items-center text-center px-2 space-y-4">
              <div className="text-gray-900">
                {/* Beaker / Flask Icon */}
                <svg className="w-6 h-6 stroke-1.25" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M10 2v7.31" />
                  <path d="M14 9.3V1.99" />
                  <path d="M8.5 2h7" />
                  <path d="M14 9.3a6.5 6.5 0 1 1-4 0" />
                  <line x1="5.52" x2="18.48" y1="16" y2="16" />
                </svg>
              </div>
              <div className="space-y-2">
                <h4 className="font-extrabold text-[10px] sm:text-xs tracking-widest text-black uppercase leading-tight">
                  EXPERTISE<br />SCIENTIFIQUE
                </h4>
                <p className="text-[10px] sm:text-xs text-gray-500 leading-relaxed font-medium">
                  Des formules développées avec des experts en dermatologie et en trichologie.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col items-center text-center px-2 space-y-4">
              <div className="text-gray-900">
                {/* Leaves Icon */}
                <svg className="w-6 h-6 stroke-1.25" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
                  <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 12 12" />
                </svg>
              </div>
              <div className="space-y-2">
                <h4 className="font-extrabold text-[10px] sm:text-xs tracking-widest text-black uppercase leading-tight">
                  INGRÉDIENTS<br />SÉLECTIONNÉS
                </h4>
                <p className="text-[10px] sm:text-xs text-gray-500 leading-relaxed font-medium">
                  Des actifs de qualité, rigoureusement choisis pour leur efficacité et leur tolérance.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col items-center text-center px-2 space-y-4">
              <div className="text-gray-900">
                {/* Shield Check Icon */}
                <svg className="w-6 h-6 stroke-1.25" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <div className="space-y-2">
                <h4 className="font-extrabold text-[10px] sm:text-xs tracking-widest text-black uppercase leading-tight">
                  EFFICACITÉ<br />PROUVÉE
                </h4>
                <p className="text-[10px] sm:text-xs text-gray-500 leading-relaxed font-medium">
                  Des résultats visibles, testés et approuvés sous contrôle dermatologique.
                </p>
              </div>
            </div>

          </div>

          {/* Column 3: Circular Petri Dish Gel Photo (Right) */}
          <div className="lg:col-span-3 ">
            <img
              src="/scuence.png"
              alt="Petri Dish Cosmetic Gel Formulation"
              className="w-full h-full object-contain scale-110 lg:scale-[1.4] origin-right mx-auto"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Science;
