import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {

  return (
    <section className="w-full bg-[#fcfcfc] overflow-hidden relative">
      {/* Background image — desktop only */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="hidden lg:block absolute top-0 right-0 w-[100vw] h-full z-0"
      >
        <img
          src="/hero.png"
          alt="Gammes Unik Capillaire et Dermatologique"
          className="w-full h-full object-cover object-left"
        />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-0 lg:gap-12 items-center pt-36 pb-0 sm:pt-40  lg:pt-64 lg:pb-30 lg:min-h-[650px]"
        >

          {/* Left Text Content */}
          <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 pr-0 lg:pr-8">
            <div className="space-y-1 w-full">
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-black tracking-tight leading-none uppercase">
                L'EXPERTISE
              </h1>
              <h2 className="text-xl sm:text-2xl lg:text-[40px] font-extrabold tracking-tight leading-tight uppercase">
                <span className="text-[#2b6fc2]">DERMATOLOGIQUE</span>{' '}
                <span className="text-black">&amp;</span>{' '}
                <span className="text-[#418854]">CAPILLAIRE</span>
              </h2>
            </div>

            <div className="space-y-3 w-full">
              <p className="text-sm sm:text-base font-bold text-black tracking-wide leading-snug">
                POUR PRENDRE SOIN DE VOUS, COMME VOUS ÊTES.
              </p>
              <p className="text-gray-500 text-sm font-medium max-w-md leading-relaxed mx-auto lg:mx-0">
                Des soins ciblés, développés avec exigence pour révéler votre beauté naturelle.
              </p>
            </div>

            <a
              href="#"
              className="inline-block bg-black text-white px-8 py-4 text-xs font-bold tracking-widest hover:bg-brand-hover transition-colors uppercase duration-300 rounded-none shadow-sm"
            >
              DÉCOUVRIR NOS GAMMES
            </a>

            {/* Feature Icons */}
            <div className="grid grid-cols-4 pt-8 w-full max-w-sm sm:max-w-md divide-x divide-gray-200 mx-auto lg:mx-0">

              {[
                {
                  icon: (
                    <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 8v8" /><path d="M8 12h8" />
                    </svg>
                  ),
                  label: 'Formules testées dermatologiquement',
                },
                {
                  icon: (
                    <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M12 2A10 10 0 0 0 2 12c0 4.4 3.6 8 8 8h2a10 10 0 0 0 10-10V2H12z" />
                      <path d="M12 22V12" /><path d="M12 12c4 0 8-4 8-8" />
                    </svg>
                  ),
                  label: 'Ingrédients rigoureusement sélectionnés',
                },
                {
                  icon: (
                    <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  ),
                  label: 'Efficacité prouvée',
                },
                {
                  icon: (
                    <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M18 21a6 6 0 0 0-12 0" />
                      <circle cx="12" cy="10" r="4" />
                      <path d="M12 2v2" />
                    </svg>
                  ),
                  label: 'Convient à tous types de peau et de cheveux',
                },
              ].map(({ icon, label }, i) => (
                <div key={i} className="flex flex-col items-center text-center px-1 sm:px-2 space-y-2 sm:space-y-3">
                  <div className="text-gray-900">{icon}</div>
                  <span className="text-[9px] sm:text-[10px] text-gray-500 font-medium leading-tight">{label}</span>
                </div>
              ))}

            </div>
          </div>

          {/* Hero image — mobile/tablet only */}
          <div className="lg:hidden w-full h-[280px] sm:h-[420px] rounded-2xl overflow-hidden shadow-sm">
            <img
              src="/hero.png"
              alt="Gammes Unik Capillaire et Dermatologique"
              className="w-full h-full object-cover object-center"
            />
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
