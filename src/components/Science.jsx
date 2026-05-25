import React from 'react';

const Science = () => {
  return (
    <section className="w-full py-14 lg:py-20 bg-[#fbfbfb] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">

          {/* Text — full width on mobile, 4 cols on desktop */}
          <div className="lg:col-span-4 space-y-5 text-center lg:text-left w-full">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-black leading-tight uppercase">
              LA SCIENCE AU SERVICE DE VOTRE PEAU &amp; DE VOS CHEVEUX
            </h2>
            <p className="text-gray-500 font-medium text-sm leading-relaxed max-w-sm mx-auto lg:mx-0">
              Chaque formule Unik est développée avec rigueur pour offrir des résultats visibles et durables, en toute sécurité.
            </p>
            <a
              href="#"
              className="inline-block border border-black text-black px-8 py-3.5 text-xs font-bold tracking-widest hover:bg-black hover:text-white transition-all duration-300 rounded-none uppercase"
            >
              EN SAVOIR PLUS
            </a>
          </div>

          {/* Features — 3 cols grid */}
          <div className="lg:col-span-5 grid grid-cols-3 divide-x divide-gray-200 w-full py-6 lg:py-0">

            {[
              {
                icon: (
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25">
                    <path d="M10 2v7.31" /><path d="M14 9.3V1.99" /><path d="M8.5 2h7" />
                    <path d="M14 9.3a6.5 6.5 0 1 1-4 0" /><line x1="5.52" x2="18.48" y1="16" y2="16" />
                  </svg>
                ),
                title: 'EXPERTISE SCIENTIFIQUE',
                body: 'Des formules développées avec des experts en dermatologie et en trichologie.',
              },
              {
                icon: (
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25">
                    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
                    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 12 12" />
                  </svg>
                ),
                title: 'INGRÉDIENTS SÉLECTIONNÉS',
                body: 'Des actifs de qualité, rigoureusement choisis pour leur efficacité et leur tolérance.',
              },
              {
                icon: (
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                ),
                title: 'EFFICACITÉ PROUVÉE',
                body: 'Des résultats visibles, testés et approuvés sous contrôle dermatologique.',
              },
            ].map(({ icon, title, body }, i) => (
              <div key={i} className="flex flex-col items-center text-center px-2 sm:px-4 space-y-3 sm:space-y-4">
                <div className="text-gray-900">{icon}</div>
                <div className="space-y-1 sm:space-y-2">
                  <h4 className="font-extrabold text-[9px] sm:text-[10px] tracking-widest text-black uppercase leading-tight">
                    {title}
                  </h4>
                  <p className="text-[9px] sm:text-[10px] text-gray-500 leading-relaxed font-medium hidden sm:block">
                    {body}
                  </p>
                </div>
              </div>
            ))}

          </div>

          {/* Petri dish image — desktop only */}
          <div className="hidden lg:flex lg:col-span-3 w-full justify-end">
            <img
              src="/scuence.png"
              alt="Petri Dish Cosmetic Gel Formulation"
              className="w-full lg:scale-[1.3] lg:origin-right object-contain"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Science;
