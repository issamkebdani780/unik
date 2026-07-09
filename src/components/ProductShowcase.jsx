import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { products } from '../data/products';

const ShowcaseCard = ({ product, isMobile }) => {
  const navigate = useNavigate();
  const isCapillaire = product.gamme === 'capillaire';
  const accentColor = isCapillaire ? 'text-[#3a7547]' : 'text-[#296fc2]';
  const cardBg = isCapillaire ? 'bg-[#f8faf6]' : 'bg-[#f5f8fc]';

  // Desktop hover animations
  const desktopHoverProps = !isMobile ? {
    whileHover: { y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }
  } : {};

  // Mobile scroll animations
  const mobileScrollProps = isMobile ? {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: false, margin: "-10%" },
    transition: { duration: 0.6, ease: "easeOut" }
  } : {};

  return (
    <motion.div
      onClick={() => navigate(`/product/${product.id}`)}
      className="group flex flex-col bg-white border border-gray-100/60 overflow-hidden relative cursor-pointer shadow-sm w-[55vw] sm:w-auto snap-center shrink-0"
      {...desktopHoverProps}
      {...mobileScrollProps}
      layout
    >
      <div className={`w-full aspect-square overflow-hidden relative ${cardBg} transition-colors duration-300`}>
        {/* Added custom style for the hover pan animation */}
        <style>{`
          @keyframes panImage {
            0% { object-position: 50% 0%; }
            50% { object-position: 50% 100%; }
            100% { object-position: 50% 0%; }
          }
          .group:hover .hover-pan {
            animation: panImage 8s ease-in-out infinite;
            transform: scale(1.15);
          }
        `}</style>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover object-top transition-transform duration-700 hover-pan"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <span className="bg-white text-black text-[10px] font-bold tracking-widest px-5 py-3 shadow-md uppercase transition-transform duration-300 translate-y-2 group-hover:translate-y-0">
            DÉCOUVRIR
          </span>
        </div>
        <div className="absolute top-4 left-4">
          <span className={`text-[8px] tracking-[0.15em] font-extrabold uppercase px-2.5 py-1.5 shadow-sm bg-white/95 backdrop-blur-xs ${accentColor}`}>
            BEST SELLER
          </span>
        </div>
      </div>
      <div className="p-5 flex flex-col flex-1 border-t border-gray-50 bg-white">
        <span className="text-[9px] font-semibold text-gray-400 tracking-wider mb-2">
          {product.activeIngredients.slice(0, 2).join(' • ')}
        </span>
        <h3 className="text-sm font-bold tracking-tight text-gray-900 uppercase group-hover:text-black transition-colors line-clamp-1 mb-2">
          {product.name}
        </h3>
        <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-100/60">
          <span className="text-xs font-extrabold text-black">
            {product.price.toLocaleString('fr-FR')}DA
          </span>
        </div>
      </div>
    </motion.div>
  );
};

const ProductShowcase = () => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Top 2 Derma and Capillaire products
  const dermaProducts = products.filter(p => p.gamme === 'dermatologique').slice(0, 2);
  const capillaireProducts = products.filter(p => p.gamme === 'capillaire').slice(0, 2);

  return (
    <section className="w-full bg-white flex flex-col overflow-hidden">
      {/* Slice 1: Dermatologique (Text Left, Products Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 bg-[#ecf2f8]/50">

        {/* Text Block */}
        <div className="flex flex-col justify-center px-6 sm:px-12 lg:px-20 py-16 sm:py-24">
          <span className="text-[10px] font-bold tracking-[0.2em] text-[#296fc2] uppercase block mb-4">
            NOTRE GAMME DERMATOLOGIQUE
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-black uppercase tracking-tight leading-tight mb-6">
            La Science au Service de Votre Peau
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8 max-w-md font-medium">
            Formulés en laboratoire par nos experts, nos soins dermatologiques intègrent des actifs de pointe
            pour purifier, hydrater en profondeur et réparer la barrière cutanée. Une efficacité prouvée pour
            les peaux les plus exigeantes.
          </p>
          <button
            onClick={() => navigate('/catalog?gamme=dermatologique')}
            className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-black border-b-[1.5px] border-black pb-1 w-fit hover:text-[#296fc2] hover:border-[#296fc2] transition-colors uppercase"
          >
            EXPLORER LA GAMME
            <span className="text-sm font-light">→</span>
          </button>
        </div>

        {/* Products Grid */}
        <div className="pl-6 sm:px-12 lg:px-20 py-12 sm:py-16 flex items-center justify-center overflow-hidden">
          <div className="flex overflow-x-auto sm:grid sm:grid-cols-2 gap-4 sm:gap-6 w-full max-w-xl snap-x snap-mandatory pr-6 sm:pr-0 pb-6 sm:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {dermaProducts.map(product => (
              <ShowcaseCard key={product.id} product={product} isMobile={isMobile} />
            ))}
          </div>
        </div>
      </div>

      {/* Slice 2: Capillaire (Products Left, Text Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 bg-[#f0f4ea]/60">

        {/* Products Grid (Order 2 on mobile, Order 1 on desktop) */}
        <div className="order-2 lg:order-1 pl-6 sm:px-12 lg:px-20 py-12 sm:py-16 flex items-center justify-center overflow-hidden">
          <div className="flex overflow-x-auto sm:grid sm:grid-cols-2 gap-4 sm:gap-6 w-full max-w-xl snap-x snap-mandatory pr-6 sm:pr-0 pb-6 sm:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {capillaireProducts.map(product => (
              <ShowcaseCard key={product.id} product={product} isMobile={isMobile} />
            ))}
          </div>
        </div>

        {/* Text Block (Order 1 on mobile, Order 2 on desktop) */}
        <div className="order-1 lg:order-2 flex flex-col justify-center px-6 sm:px-12 lg:px-20 py-16 sm:py-24">
          <span className="text-[10px] font-bold tracking-[0.2em] text-[#3a7547] uppercase block mb-4">
            NOTRE GAMME CAPILLAIRE
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-black uppercase tracking-tight leading-tight mb-6">
            La Nature pour vos Cheveux
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8 max-w-md font-medium">
            Des formulations riches en extraits botaniques et vitamines pour cibler
            les problèmes capillaires à la racine. Fortifiez, nourrissez et ravivez
            la brillance naturelle de vos cheveux avec nos soins ciblés.
          </p>
          <button
            onClick={() => navigate('/catalog?gamme=capillaire')}
            className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-black border-b-[1.5px] border-black pb-1 w-fit hover:text-[#3a7547] hover:border-[#3a7547] transition-colors uppercase"
          >
            EXPLORER LA GAMME
            <span className="text-sm font-light">→</span>
          </button>
        </div>

      </div>
    </section>
  );
};

export default ProductShowcase;