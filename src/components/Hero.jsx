import React from 'react';

const Hero = () => {
  return (
    <section className="w-full bg-[#fcfcfc] py-12 lg:py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* Left Text Content */}
          <div className="lg:col-span-6 flex flex-col items-start space-y-6">
            <div className="space-y-1">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-black tracking-tight leading-none uppercase">
                L'EXPERTISE
              </h2>
              <h3 className="text-2xl sm:text-3xl lg:text-[40px] font-extrabold tracking-tight leading-tight uppercase">
                <span className="text-[#2b6fc2]">DERMATOLOGIQUE</span> <span className="text-black">&</span> <span className="text-[#418854]">CAPILLAIRE</span>
              </h3>
            </div>

            <div className="space-y-4">
              <p className="text-base sm:text-lg font-bold text-black tracking-wide leading-snug">
                POUR PRENDRE SOIN DE VOUS, COMME VOUS ÊTES.
              </p>

              <p className="text-gray-500 text-sm sm:text-base font-medium max-w-md leading-relaxed">
                Des soins ciblés, développés avec exigence <br className="hidden sm:inline" />
                pour révéler votre beauté naturelle.
              </p>
            </div>

            <a
              href="#"
              className="inline-block bg-black text-white px-8 py-4 text-xs font-bold tracking-widest hover:bg-emerald-950 transition-colors uppercase duration-300 rounded-none shadow-sm"
            >
              DÉCOUVRIR NOS GAMMES
            </a>

            {/* Features Icons */}
            <div className="grid grid-cols-4 pt-12 w-full max-w-xl divide-x divide-gray-200">

              {/* Feature 1 */}
              <div className="flex flex-col items-center text-center px-2 space-y-3">
                <div className="text-gray-900">
                  {/* Test tube / drop icon */}
                  <svg className="w-6 h-6 stroke-1.5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 8v8" />
                    <path d="M8 12h8" />
                  </svg>
                </div>
                <span className="text-[10px] sm:text-xs text-gray-500 font-medium leading-tight">
                  Formules testées<br />dermatologiquement
                </span>
              </div>

              {/* Feature 2 */}
              <div className="flex flex-col items-center text-center px-2 space-y-3">
                <div className="text-gray-900">
                  {/* Leaf icon */}
                  <svg className="w-6 h-6 stroke-1.5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M12 2A10 10 0 0 0 2 12c0 4.4 3.6 8 8 8h2a10 10 0 0 0 10-10V2H12z" />
                    <path d="M12 22V12" />
                    <path d="M12 12c4 0 8-4 8-8" />
                  </svg>
                </div>
                <span className="text-[10px] sm:text-xs text-gray-500 font-medium leading-tight">
                  Ingrédients<br />rigoureusement<br />sélectionnés
                </span>
              </div>

              {/* Feature 3 */}
              <div className="flex flex-col items-center text-center px-2 space-y-3">
                <div className="text-gray-900">
                  {/* Shield check */}
                  <svg className="w-6 h-6 stroke-1.5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
                <span className="text-[10px] sm:text-xs text-gray-500 font-medium leading-tight">
                  Efficacité<br />prouvée
                </span>
              </div>

              {/* Feature 4 */}
              <div className="flex flex-col items-center text-center px-2 space-y-3">
                <div className="text-gray-900">
                  {/* Profile / All hair icon */}
                  <svg className="w-6 h-6 stroke-1.5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M18 21a6 6 0 0 0-12 0" />
                    <circle cx="12" cy="10" r="4" />
                    <path d="M12 2v2" />
                  </svg>
                </div>
                <span className="text-[10px] sm:text-xs text-gray-500 font-medium leading-tight">
                  Convient à<br />tous types de peau<br />et de cheveux
                </span>
              </div>

            </div>
          </div>

          {/* Right Product Image */}
          <div className="lg:col-span-6 flex justify-center items-center relative">
            {/* Soft decorative blur behind products */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-emerald-500/5 blur-[120px] rounded-full"></div>

            <div className="relative w-full max-w-lg lg:max-w-xl xl:max-w-2xl">
              <img
                src="/hero-products.png"
                alt="Gammes Unik Capillaire et Dermatologique"
                className="w-full h-auto object-cover relative z-10 drop-shadow-sm select-none"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
