import React from 'react';
import { useNavigate } from 'react-router-dom';
import Testimonials from './Testimonials';

const BrandStory = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full bg-[#fcfcfc] py-20 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Mission Statement */}
        <div className="max-w-4xl mx-auto text-center ">
          <span className="text-[10px] sm:text-xs font-bold tracking-[0.2em] text-gray-400 uppercase block mb-6">
            NOTRE IDENTITÉ
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-black uppercase tracking-tight leading-tight mb-8">
            La beauté n'est pas un standard, <br className="hidden sm:block" />
            c'est une science adaptée à vous.
          </h2>
          {/* <p className="text-gray-500 font-medium text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Chez UNIK, nous pensons que chaque peau et chaque cheveu possède sa propre singularité. 
            Notre mission est de vous offrir des formules de pointe, développées en laboratoire, 
            qui allient efficacité clinique et respect absolu de votre nature.
          </p> */}
        </div>

        <Testimonials />
        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 divide-y md:divide-y-0 md:divide-x divide-gray-100">
          
          {/* Pillar 1: Science */}
          <div className="flex flex-col md:pr-8 lg:pr-12 pt-8 md:pt-0">
            <h3 className="font-extrabold text-sm tracking-widest text-black uppercase mb-4">
              Science & Efficacité
            </h3>
            <p className="text-xs sm:text-sm text-gray-500 font-medium leading-relaxed mb-6">
              Nos formules ne font aucun compromis. Élaborées par des dermatologues et trichologues, 
              elles intègrent des actifs hautement dosés pour des résultats visibles et cliniquement prouvés.
            </p>
          </div>

          {/* Pillar 2: Transparence */}
          <div className="flex flex-col md:px-8 lg:px-12 pt-8 md:pt-0">
            <h3 className="font-extrabold text-sm tracking-widest text-black uppercase mb-4">
              Transparence Absolue
            </h3>
            <p className="text-xs sm:text-sm text-gray-500 font-medium leading-relaxed mb-6">
              Vous avez le droit de savoir ce que vous appliquez. Nous garantissons des ingrédients propres, 
              100% cruelty-free, sans silicones, sans sulfates agressifs et avec des emballages éco-responsables.
            </p>
          </div>

          {/* Pillar 3: Self-Care */}
          <div className="flex flex-col md:pl-8 lg:pl-12 pt-8 md:pt-0">
            <h3 className="font-extrabold text-sm tracking-widest text-black uppercase mb-4">
              Approche "Comme Toi"
            </h3>
            <p className="text-xs sm:text-sm text-gray-500 font-medium leading-relaxed mb-6">
              Votre routine ne devrait pas vous contraindre. Notre philosophie de self-care encourage 
              des rituels beauté qui s'adaptent à vos besoins réels, vos textures et votre rythme de vie.
            </p>
          </div>

        </div>

        {/* CTA Button */}
        <div className="mt-20 text-center">
          <button
            onClick={() => navigate('/about')}
            className="inline-block border border-gray-200 text-gray-600 px-8 py-3 text-xs font-bold tracking-widest uppercase hover:border-black hover:text-black hover:bg-black hover:text-white transition-all duration-300"
          >
            Découvrir notre histoire
          </button>
        </div>

      </div>
    </section>
  );
};

export default BrandStory;
