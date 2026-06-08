import React from 'react';
import { Link } from 'react-router-dom';

const Engagements = () => {
  return (
    <div className="w-full bg-[#fcfcfc] py-8 sm:py-16 animate-[fadeDown_0.3s_ease]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
          <span className="text-[10px] sm:text-xs font-bold tracking-[0.25em] text-gray-400 uppercase block mb-3">
            NOTRE CHARTE DE CONFIANCE
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-black uppercase tracking-tight mb-6 leading-none">
            NOS ENGAGEMENTS
          </h1>
          <p className="text-gray-500 font-medium text-sm sm:text-base leading-relaxed">
            Parce que prendre soin de vous ne devrait jamais se faire au détriment de notre planète, Unik s'engage sur une charte éthique stricte combinant efficacité dermatologique, respect animal et éco-conception.
          </p>
        </div>

        {/* 4 Pillars Grid with SVG Icons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-20 sm:mb-32">
          
          {/* Pillar 1: Clean Beauty */}
          <div className="bg-white border border-gray-100 p-8 flex flex-col sm:flex-row gap-6 relative shadow-xs">
            <div className="text-emerald-700 shrink-0">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="space-y-2">
              <h3 className="font-extrabold text-sm sm:text-base tracking-wider text-black uppercase">
                FORMULATION CLEAN & SANS RISQUE
              </h3>
              <p className="text-xs text-gray-500 font-medium leading-relaxed">
                Nous bannissons plus de 1 500 ingrédients controversés de nos formules. Nos soins sont garantis sans sulfates agressifs, silicones occlusifs, parabènes, phénoxyéthanol ni colorants artificiels pour préserver l'équilibre de votre barrière cutanée.
              </p>
            </div>
          </div>

          {/* Pillar 2: Cruelty-Free & Vegan */}
          <div className="bg-white border border-gray-100 p-8 flex flex-col sm:flex-row gap-6 relative shadow-xs">
            <div className="text-emerald-700 shrink-0">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="space-y-2">
              <h3 className="font-extrabold text-sm sm:text-base tracking-wider text-black uppercase">
                100% CRUELTY-FREE & VEGAN
              </h3>
              <p className="text-xs text-gray-500 font-medium leading-relaxed">
                Nous aimons et respectons les animaux. Aucun de nos ingrédients ou produits finis n'est testé sur eux. Toutes nos formules sont rigoureusement véganes et privilégient des protéines et huiles végétales de qualité premium.
              </p>
            </div>
          </div>

          {/* Pillar 3: Eco-Conception */}
          <div className="bg-white border border-gray-100 p-8 flex flex-col sm:flex-row gap-6 relative shadow-xs">
            <div className="text-emerald-700 shrink-0">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.656 48.656 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7C4.547 9.547 4.5 10.768 4.5 12s.047 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7C19.453 14.453 19.5 13.232 19.5 12z" />
              </svg>
            </div>
            <div className="space-y-2">
              <h3 className="font-extrabold text-sm sm:text-base tracking-wider text-black uppercase">
                EMBALLAGES ÉCO-CONÇUS
              </h3>
              <p className="text-xs text-gray-500 font-medium leading-relaxed">
                Nous privilégions le verre recyclable et le carton certifié FSC pour limiter notre empreinte environnementale. Nos flacons sont rechargeables ou recyclables, et nous supprimons les notices papier inutiles au profit d'informations imprimées directement sur nos étuis.
              </p>
            </div>
          </div>

          {/* Pillar 4: Efficacité Scientifique */}
          <div className="bg-white border border-gray-100 p-8 flex flex-col sm:flex-row gap-6 relative shadow-xs">
            <div className="text-emerald-700 shrink-0">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.751A11.975 11.975 0 0112 2.714z" />
              </svg>
            </div>
            <div className="space-y-2">
              <h3 className="font-extrabold text-sm sm:text-base tracking-wider text-black uppercase">
                EFFICACITÉ CLINIQUEMENT PROUVÉE
              </h3>
              <p className="text-xs text-gray-500 font-medium leading-relaxed">
                Nos actifs phares (Huile de Ricin, Niacinamide, Acide Salicylique) font l'objet d'études cliniques rigoureuses. Chaque lot de soins est testé sous contrôle dermatologique pour garantir des résultats visibles, une texture sensorielle et une tolérance parfaite.
              </p>
            </div>
          </div>

        </div>

        {/* Eco Packaging Showcase: Split Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center mb-20 sm:mb-32">
          {/* Left Image */}
          <div className="lg:col-span-6 h-[320px] sm:h-[450px] bg-[#ecf2f8] overflow-hidden border border-gray-100 flex items-center justify-center relative order-2 lg:order-1">
            <img
              src="/engagements_eco.png"
              alt="Unik Eco Conception Skincare Product Showcase"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-103"
            />
          </div>

          {/* Right Text */}
          <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
            <span className="text-[10px] sm:text-xs font-bold tracking-[0.2em] text-[#3a7547] uppercase block mb-1">
              ÉCO-DESIGN & FLACONS RECYCLABLES
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-black uppercase tracking-tight leading-tight">
              RÉDUIRE NOTRE IMPACT, UN SOIN À LA FOIS
            </h2>
            <div className="space-y-4 text-xs sm:text-sm text-gray-500 font-medium leading-relaxed">
              <p>
                Chez Unik, nous repensons le cycle de vie complet de nos cosmétiques. Le choix du verre opaque ou ambré pour nos sérums permet non seulement de protéger la stabilité des vitamines et antioxydants formulés, mais garantit également une recyclabilité à l’infini de nos emballages.
              </p>
              <p>
                De plus, nos cartons d'expédition sont issus de forêts gérées durablement et nous utilisons des encres végétales pour toute impression. En favorisant une production rationalisée et des wilayas de livraison optimisées, nous œuvrons chaque jour à construire une beauté consciente, propre et transparente.
              </p>
            </div>
          </div>
        </div>

        {/* Certifications Row */}
        <div className="border-t border-b border-gray-200/60 py-10 mb-20 sm:mb-32">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center text-center">
            {[
              {
                icon: (
                  <svg className="w-8 h-8 mx-auto text-emerald-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 19a7 7 0 0 0 6.66-4.63C21 8.5 21 6.5 21 6.5s-2 0-7.87 2.34A7 7 0 0 0 12 19Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 19V9" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 13a4 4 0 0 0-3.5-3.5" />
                  </svg>
                ),
                title: 'FORMULES VEGANES',
                desc: 'Ingrédients 100% d’origine végétale.'
              },
              {
                icon: (
                  <svg className="w-8 h-8 mx-auto text-emerald-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 13.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm9 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 15.75c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a6.75 6.75 0 0 0 6.75-6.75c0-1.72-.63-3.28-1.68-4.5H6.93C5.88 11 5.25 12.53 5.25 14.25A6.75 6.75 0 0 0 12 21Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9.75V3.75c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v6M15.75 9.75V3.75c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v6" />
                  </svg>
                ),
                title: 'SANS CRUAUTÉ',
                desc: 'Jamais testé sur les animaux.'
              },
              {
                icon: (
                  <svg className="w-8 h-8 mx-auto text-emerald-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 3h6m-3 0v11.25m0 0a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5ZM5.25 21h13.5" />
                  </svg>
                ),
                title: 'TESTÉ DERMATOLOGIQUEMENT',
                desc: 'Hypoallergénique et validé par des experts.'
              },
              {
                icon: (
                  <svg className="w-8 h-8 mx-auto text-emerald-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                  </svg>
                ),
                title: 'VERRE RECYCLABLE',
                desc: 'Flacons éco-conçus réutilisables.'
              }
            ].map((cert, i) => (
              <div key={i} className="space-y-2 px-4">
                <div className="mb-3 flex justify-center text-emerald-700">{cert.icon}</div>
                <h4 className="font-extrabold text-[10px] sm:text-xs tracking-wider text-black uppercase">
                  {cert.title}
                </h4>
                <p className="text-[10px] sm:text-xs text-gray-400 font-medium leading-normal">
                  {cert.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Block */}
        <div className="bg-[#f0f4ea] text-center p-8 sm:p-14 relative overflow-hidden flex flex-col items-center">
          <div className="relative z-10 max-w-xl space-y-5">
            <h3 className="text-xl sm:text-2xl font-black text-black uppercase tracking-tight leading-none">
              REJOIGNEZ LA BEAUTÉ CONSCIENTE
            </h3>
            <p className="text-xs sm:text-sm text-gray-500 font-medium leading-relaxed">
              Découvrez des soins hautement qualitatifs, efficaces et développés avec intégrité éthique.
            </p>
            <Link
              to="/catalog"
              className="inline-block bg-[#3a7547] text-white px-8 py-4 text-xs font-bold tracking-widest hover:bg-emerald-950 transition-colors uppercase duration-300 rounded-none shadow-sm cursor-pointer"
            >
              BROWSING DE NOS ENGAGEMENTS SOINS
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Engagements;
