import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { fetchProducts, getImageUrl } from '../api/client';
import { useTheme } from '../context/ThemeContext';

const ShowcaseCard = ({ product, isMobile }) => {
  const navigate = useNavigate();
  const isSoinsVisage = product.category?.name?.toLowerCase().includes('visage');
  const isCapillaire = !isSoinsVisage && (product.category?.id === 3 || product.category?.id === 24 || product.category?.parentCategory === 3);
  const [baseImageError, setBaseImageError] = useState(false);

  const cardBg = isCapillaire ? 'bg-[#f5f8f3]' : 'bg-[#f1f5fa]';
  const accentHoverBg = isCapillaire ? 'hover:bg-[#3a7547]' : 'hover:bg-[#296fc2]';

  const desktopHoverProps = !isMobile ? {
    whileHover: { y: -6, boxShadow: "0 20px 30px -10px rgba(0,0,0,0.07)" }
  } : {};

  const mobileScrollProps = isMobile ? {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-5%" },
    transition: { duration: 0.5, ease: "easeOut" }
  } : {};

  const productImage = product.images?.length > 0 ? getImageUrl(product.images[0]) : '';

  return (
    <motion.div
      onClick={() => navigate(`/product/${product.slugName}`)}
      className="group flex flex-col bg-white rounded-2xl border border-gray-100/80 overflow-hidden relative cursor-pointer shadow-xs w-[62vw] sm:w-auto snap-center shrink-0 transition-all duration-300 hover:border-gray-200/60 hover:-translate-y-1.5 hover:shadow-[0_20px_30px_-10px_rgba(0,0,0,0.07)]"
      {...desktopHoverProps}
      {...mobileScrollProps}
      layout
    >
      {/* Image Area */}
      <div className={`w-full aspect-[4/5] overflow-hidden relative ${cardBg} transition-colors duration-500 flex items-center justify-center`}>

        {/* Product Image */}
        {!baseImageError && productImage ? (
          <img
            src={productImage}
            alt={product.name}
            onError={() => setBaseImageError(true)}
            className="w-full h-full object-cover absolute inset-0 transition-all duration-700 ease-out group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-300 text-xs font-semibold uppercase tracking-wider p-4 text-center">
            {product.name}
          </div>
        )}

        {/* Floating Quick Action CTA (Desktop only) */}
        <div className="absolute inset-x-0 bottom-4 px-4 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out z-10 hidden sm:block">
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigate(`/product/${product.slugName}`);
            }}
            className={`w-full bg-white/90 backdrop-blur-md text-gray-900 ${accentHoverBg} hover:text-white text-[11px] font-bold tracking-wider uppercase py-3 px-4 rounded-xl text-center shadow-md transition-all duration-300`}
          >
            Découvrir — {product.price.toLocaleString('fr-FR')} DA
          </button>
        </div>

        {/* Category Badge */}
        <div className="absolute top-4 left-4 z-10">
          <span className="text-[9px] tracking-wider font-bold uppercase px-3 py-1.5 rounded-full shadow-xs bg-white/90 backdrop-blur-md text-gray-800 border border-white/40">
            {product.category?.name || 'Produit'}
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5 flex flex-col flex-1 bg-white gap-3.5">

        {/* Product Name */}
        <h3 className="text-sm sm:text-base font-bold text-gray-800 tracking-tight group-hover:text-gray-950 transition-colors line-clamp-2 leading-snug min-h-[44px] mt-2">
          {product.name}
        </h3>

        {/* Pricing & Action */}
        <div className="flex items-center justify-between mt-auto pt-3.5 border-t border-gray-100/80">
          <div className="flex flex-col">
            <span className="text-[9px] text-gray-400 font-bold uppercase tracking-wider leading-none mb-0.5">Prix</span>
            <span className="text-base font-extrabold text-gray-900">
              {product.price.toLocaleString('fr-FR')} DA
            </span>
          </div>

          {/* Mobile: circle "+" button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigate(`/product/${product.slugName}`);
            }}
            className="sm:hidden flex items-center justify-center w-9 h-9 rounded-full bg-gray-900 text-white active:scale-95 transition-transform"
            aria-label="Voir le produit"
          >
            <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
          </button>

          {/* Desktop: text link */}
          <span className="hidden sm:inline-block text-[10px] font-bold text-gray-900 tracking-widest border-b border-gray-900 group-hover:text-brand-accent group-hover:border-brand-accent transition-colors uppercase pb-0.5">
            DÉCOUVRIR
          </span>
        </div>
      </div>
    </motion.div>
  );
};

const ProductShowcase = () => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);
  const [products, setProducts] = useState([]);
  const { setTheme } = useTheme();

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // Home page does NOT force a theme reset — we let the persisted theme show
    // (user may have come from the catalog with green/blue already set)
  }, []);

  useEffect(() => {
    const loadProducts = async () => {
      const res = await fetchProducts(1, 20);
      if (res && res.data) {
        setProducts(res.data);
      }
    };
    loadProducts();
  }, []);

  const dermaProducts = products.filter(p => p.category?.id === 1 || p.category?.parentCategory === 1).slice(0, 2);
  const capillaireProducts = products.filter(p => p.category?.id === 3 || p.category?.id === 24 || p.category?.parentCategory === 3).slice(0, 2);

  return (
    <section className="w-full bg-white flex flex-col overflow-hidden">
      {/* Slice 1: Dermatologique */}
      <div className="grid grid-cols-1 lg:grid-cols-2 bg-gradient-to-br from-[#f1f5fa]/70 to-white">
        {/* Text Block */}
        <div className="flex flex-col justify-center px-6 sm:px-12 lg:px-20 py-16 sm:py-24">
          <span className="text-[10px] font-extrabold tracking-[0.25em] text-[#296fc2] uppercase block mb-4">
            NOTRE GAMME DERMATOLOGIQUE
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 uppercase tracking-tight leading-[1.1] mb-6">
            La Science au Service de Votre Peau
          </h2>
          <p className="hidden md:block text-gray-600 text-sm sm:text-base leading-relaxed mb-8 max-w-md font-medium">
            Formulés en laboratoire par nos experts, nos soins dermatologiques intègrent des actifs de pointe
            pour purifier, hydrater en profondeur et réparer la barrière cutanée. Une efficacité prouvée pour
            les peaux les plus exigeantes.
          </p>
          <button
            onClick={() => {
              setTheme('dermatologique');
              navigate('/catalog?category=1');
            }}
            className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-gray-900 border-b-2 border-gray-900 pb-1 w-fit hover:text-[#296fc2] hover:border-[#296fc2] transition-colors uppercase"
          >
            EXPLORER LA GAMME
            <span className="text-sm font-light">→</span>
          </button>
        </div>

        {/* Products Grid */}
        <div className="pl-6 sm:px-12 lg:px-20 py-12 sm:py-16 flex items-center justify-center overflow-hidden">
          <div className="flex overflow-x-auto sm:grid sm:grid-cols-2 gap-5 sm:gap-6 w-full max-w-3xl snap-x snap-mandatory pr-6 sm:pr-0 pb-6 sm:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {dermaProducts.map(product => (
              <ShowcaseCard key={product.id} product={product} isMobile={isMobile} />
            ))}
          </div>
        </div>
      </div>

      {/* Slice 2: Capillaire */}
      <div className="grid grid-cols-1 lg:grid-cols-2 bg-gradient-to-br from-[#f5f8f3]/70 to-white">
        {/* Products Grid */}
        <div className="order-2 lg:order-1 pl-6 sm:px-12 lg:px-20 py-12 sm:py-16 flex items-center justify-center overflow-hidden">
          <div className="flex overflow-x-auto sm:grid sm:grid-cols-2 gap-5 sm:gap-6 w-full max-w-3xl snap-x snap-mandatory pr-6 sm:pr-0 pb-6 sm:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {capillaireProducts.map(product => (
              <ShowcaseCard key={product.id} product={product} isMobile={isMobile} />
            ))}
          </div>
        </div>

        {/* Text Block */}
        <div className="order-1 lg:order-2 flex flex-col justify-center px-6 sm:px-12 lg:px-20 py-16 sm:py-24">
          <span className="text-[10px] font-extrabold tracking-[0.25em] text-[#3a7547] uppercase block mb-4">
            NOTRE GAMME CAPILLAIRE
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 uppercase tracking-tight leading-[1.1] mb-6">
            La Nature pour vos Cheveux
          </h2>
          <p className="hidden md:block text-gray-600 text-sm sm:text-base leading-relaxed mb-8 max-w-md font-medium">
            Des formulations riches en extraits botaniques et vitamines pour cibler
            les problèmes capillaires à la racine. Fortifiez, nourrissez et ravivez
            la brillance naturelle de vos cheveux avec nos soins ciblés.
          </p>
          <button
            onClick={() => {
              setTheme('capillaire');
              navigate('/catalog?category=3');
            }}
            className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-gray-900 border-b-2 border-gray-900 pb-1 w-fit hover:text-[#3a7547] hover:border-[#3a7547] transition-colors uppercase"
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