import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="w-full bg-[#fcfcfc] py-8 sm:py-16 animate-[fadeDown_0.3s_ease]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
          <span className="text-[10px] sm:text-xs font-bold tracking-[0.25em] text-gray-400 uppercase block mb-3">
            QUI SOMMES-NOUS ?
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-black uppercase tracking-tight mb-6 leading-none">
            L'ESSENCE DE UNIK
          </h1>
          <p className="text-gray-500 font-medium text-sm sm:text-base leading-relaxed">
            Fondée sur la conviction que chaque personne possède une beauté unique, Unik développe des formules de pointe alliant expertise dermatologique et science capillaire pour révéler votre nature profonde.
          </p>
        </div>

        {/* Detailed Brand Story: Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center mb-20 sm:mb-32">
          {/* Left Text */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-black uppercase tracking-tight">
              DES SOINS CRÉÉS POUR VOTRE SINGULARITÉ
            </h2>
            <div className="space-y-4 text-xs sm:text-sm text-gray-500 font-medium leading-relaxed">
              <p>
                L'histoire de Unik commence en laboratoire. Constatant que le marché des cosmétiques offrait trop souvent des solutions génériques, notre équipe de dermatologistes et de trichologues a souhaité formuler des soins ciblés, hautement concentrés et adaptés aux climats et besoins spécifiques de notre peau et de nos cheveux.
              </p>
              <p>
                Le nom <strong className="text-black">UNIK</strong> est notre promesse : concevoir des soins qui célèbrent la diversité de vos textures capillaires et de vos spécificités épidermiques. Notre signature, <em className="text-emerald-800 font-semibold not-italic">"Comme toi"</em>, rappelle que votre rituel de beauté doit s'adapter à vous, et non l'inverse.
              </p>
            </div>
            
            {/* Quote block */}
            <div className="border-l-2 border-black pl-4 py-1.5 bg-gray-50/70">
              <p className="text-xs sm:text-sm italic text-gray-700 font-semibold leading-relaxed">
                "Nous ne croyons pas aux standards imposés. Nous créons des formules scientifiques rigoureuses pour soutenir la barrière naturelle de votre peau et stimuler la force de vos cheveux."
              </p>
              <span className="text-[10px] font-bold text-gray-400 uppercase block mt-2 tracking-wider">
                — Direction Scientifique, Unik Lab
              </span>
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:col-span-6 h-[320px] sm:h-[450px] bg-[#f0f4ea] overflow-hidden border border-gray-100 flex items-center justify-center relative">
            <img
              src="/about_lab.png"
              alt="Unik Laboratory Formulation Concept"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-103"
            />
          </div>
        </div>

        {/* Brand Pillars */}
        <div className="bg-white border border-gray-100 p-8 sm:p-12 mb-20 sm:mb-32 shadow-xs">
          <h2 className="text-xl sm:text-2xl font-extrabold text-black uppercase tracking-tight text-center mb-12">
            NOS ENGAGEMENTS &amp; PILIERS
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 divide-y md:divide-y-0 md:divide-x divide-gray-100">
            {[
              {
                number: '01',
                title: 'EXIGENCE DERMATOLOGIQUE',
                desc: 'Toutes nos formules sont élaborées selon un protocole scientifique strict. Les actifs cliniques (comme l’Acide Salicylique, la Niacinamide et la Vitamine C) sont dosés de manière optimale pour garantir une efficacité maximale sans compromettre la tolérance cutanée.'
              },
              {
                number: '02',
                title: 'PURETÉ BOTANIQUE & SÉCURITÉ',
                desc: 'Nous privilégions des ingrédients d’origine naturelle de qualité supérieure (Beurre de Karité, Huile de Ricin et d’Argan). Nos produits sont 100% Cruelty-free et formulés sans silicones, sulfates agressifs, parabènes ni perturbateurs endocriniens.'
              },
              {
                number: '03',
                title: 'LOCAL & ÉCO-RESPONSABLE',
                desc: 'Fiers de nos racines, nous formulons et conditionnons nos produits avec des partenaires engagés. Nos emballages sont sélectionnés pour être recyclables et nous limitons notre empreinte carbone en favorisant des circuits d’approvisionnement courts.'
              }
            ].map((pillar, index) => (
              <div key={index} className={`flex flex-col space-y-4 ${index > 0 ? 'md:pl-8' : ''} ${index > 0 ? 'pt-8 md:pt-0' : ''}`}>
                <span className="text-3xl font-black text-gray-200 tracking-tight leading-none">
                  {pillar.number}
                </span>
                <h4 className="font-extrabold text-xs sm:text-sm tracking-widest text-black uppercase leading-snug">
                  {pillar.title}
                </h4>
                <p className="text-xs text-gray-500 leading-relaxed font-medium">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Call To Action Block */}
        <div className="bg-[#ecf2f8] text-center p-8 sm:p-14 relative overflow-hidden flex flex-col items-center">
          <div className="relative z-10 max-w-xl space-y-5">
            <h3 className="text-xl sm:text-2xl font-black text-black uppercase tracking-tight leading-none">
              DÉCOUVREZ L'EXPÉRIENCE UNIK
            </h3>
            <p className="text-xs sm:text-sm text-gray-500 font-medium leading-relaxed">
              Explorez nos gammes capillaire et dermatologique conçues sur-mesure pour vous. Retrouvez des formules adaptées à votre quotidien.
            </p>
            <Link
              to="/catalog"
              className="inline-block bg-black text-white px-8 py-4 text-xs font-bold tracking-widest hover:bg-emerald-950 transition-colors uppercase duration-300 rounded-none shadow-sm cursor-pointer"
            >
              VOIR TOUS NOS SOINS
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
