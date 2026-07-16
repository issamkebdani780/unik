import React, { useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { products } from '../data/products';
import FloatingBackground from './FloatingBackground';

// Premium Star Rating component matching the Showcase design
const StarRating = ({ rating, accentColor }) => {
  const stars = [1, 2, 3, 4, 5];
  return (
    <div className="flex items-center gap-[3px]">
      {stars.map((star) => (
        <svg
          key={star}
          width="12"
          height="12"
          viewBox="0 0 20 20"
          className={star <= Math.round(rating) ? accentColor : 'text-gray-200'}
          fill="currentColor"
        >
          <path d="M10 1l2.8 5.9 6.2.9-4.5 4.5 1.1 6.2L10 15.5 4.4 18.5l1.1-6.2L1 7.8l6.2-.9L10 1z" />
        </svg>
      ))}
    </div>
  );
};

const ProductCatalog = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const selectedGamme = searchParams.get('gamme') || 'all';
  const [sortBy, setSortBy] = useState('recommended');

  const handleGammeChange = (gammeId) => {
    if (gammeId === 'all') {
      setSearchParams({});
    } else {
      setSearchParams({ gamme: gammeId });
    }
  };

  // Filter products
  const filteredProducts = products.filter((product) => {
    if (selectedGamme === 'all') return true;
    return product.gamme === selectedGamme;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-asc') {
      return a.price - b.price;
    } else if (sortBy === 'price-desc') {
      return b.price - a.price;
    } else {
      // Default recommended sorting (by rating)
      return b.rating - a.rating;
    }
  });

  // Format price
  const formatPrice = (price) => {
    return price.toLocaleString('fr-FR') + ' DA';
  };

  return (
    <div className="w-full bg-[#fcfcfc] min-h-screen py-8 sm:py-12 animate-[fadeDown_0.3s_ease] relative overflow-hidden">
      <FloatingBackground gamme={selectedGamme} />
      
      <div className="relative z-10">
        {/* Header section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
          <span className="text-[10px] sm:text-xs font-bold tracking-[0.2em] text-gray-400 uppercase block mb-3">
            UNIK COSMÉTIQUES
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-black uppercase tracking-tight mb-4 transition-colors duration-500">
            NOS FORMULATIONS
          </h1>
          <p className="text-gray-500 font-medium text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Découvrez notre gamme de soins haute performance formulés scientifiquement pour la santé de votre peau et de vos cheveux.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Controls: Filter & Sort */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-gray-200/80 pb-6 mb-8 gap-4">
            {/* Category Tabs */}
            <div className="flex flex-wrap gap-2 sm:gap-4">
              {[
                { id: 'all', label: 'TOUT VOIR' },
                { id: 'capillaire', label: 'GAMME CAPILLAIRE' },
                { id: 'dermatologique', label: 'GAMME DERMATOLOGIQUE' }
              ].map((tab) => {
                const isActive = selectedGamme === tab.id;
                let btnClass = "px-4 py-2 text-[10px] sm:text-xs font-bold tracking-widest border transition-all duration-300 rounded-none cursor-pointer ";
                
                if (isActive) {
                  if (tab.id === 'all') {
                    btnClass += "border-black bg-black text-white";
                  } else {
                    btnClass += "text-brand-accent border-brand-accent bg-brand-light";
                  }
                } else {
                  btnClass += "border-gray-200 text-gray-500 hover:text-black hover:border-black bg-white";
                }

                return (
                  <button
                    key={tab.id}
                    onClick={() => handleGammeChange(tab.id)}
                    className={btnClass}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>

            {/* Sort Selector */}
            <div className="flex items-center space-x-2 text-xs font-semibold text-gray-500">
              <span className="tracking-wide">TRIER PAR :</span>
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-white border border-gray-200 px-4 py-2 pr-8 text-xs font-bold tracking-wider text-black rounded-none focus:outline-none focus:border-brand-accent cursor-pointer transition-colors"
                >
                  <option value="recommended">RECOMMANDÉ</option>
                  <option value="price-asc">PRIX : CROISSANT</option>
                  <option value="price-desc">PRIX : DÉCROISSANT</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-black">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          {sortedProducts.length === 0 ? (
            <div className="text-center py-20 bg-white border border-gray-100 rounded-2xl">
              <p className="text-gray-500 text-sm font-medium">Aucun produit trouvé dans cette catégorie.</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-4 sm:gap-y-12 sm:gap-x-8">
              {sortedProducts.map((product) => {
                const isCapillaire = product.gamme === 'capillaire';
                
                // Color configuration mapping
                const accentColor = isCapillaire ? 'text-[#3a7547]' : 'text-[#296fc2]';
                const accentBg = isCapillaire ? 'bg-[#eef4ea]/80' : 'bg-[#eaf1fa]/80';
                const accentBorder = isCapillaire ? 'border-[#d9e6d0]/60' : 'border-[#d3e2f3]/60';
                const cardBg = isCapillaire ? 'bg-[#f5f8f3]' : 'bg-[#f1f5fa]';
                const accentHoverBg = isCapillaire ? 'hover:bg-[#3a7547]' : 'hover:bg-[#296fc2]';
                
                return (
                  <div
                    key={product.id}
                    onClick={() => navigate(`/product/${product.id}`)}
                    className="group flex flex-col bg-white rounded-2xl border border-gray-100/80 overflow-hidden relative cursor-pointer shadow-xs transition-all duration-300 hover:border-gray-200/60 hover:-translate-y-1.5 hover:shadow-[0_20px_30px_-10px_rgba(0,0,0,0.07)]"
                  >
                    {/* Image Area */}
                    <div className={`w-full aspect-[4/5] overflow-hidden relative ${cardBg} transition-colors duration-500`}>
                      
                      {/* Base Image */}
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover object-center absolute inset-0 transition-all duration-700 ease-out group-hover:scale-105 group-hover:opacity-0"
                        loading="lazy"
                      />

                      {/* Lifestyle/UGC Image on Hover */}
                      <img
                        src={product.ugcVideo}
                        alt={`${product.name} - lifestyle`}
                        className="w-full h-full object-cover absolute inset-0 opacity-0 scale-110 transition-all duration-700 ease-out group-hover:opacity-100 group-hover:scale-100"
                        loading="lazy"
                      />
                      
                      {/* Floating Quick Action CTA (Desktop only) */}
                      <div className="absolute inset-x-0 bottom-4 px-4 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out z-10 hidden sm:block">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            navigate(`/product/${product.id}`);
                          }}
                          className={`w-full bg-white/90 backdrop-blur-md text-gray-900 ${accentHoverBg} hover:text-white text-[11px] font-bold tracking-wider uppercase py-3 px-4 rounded-xl text-center shadow-md transition-all duration-300`}
                        >
                          Découvrir — {formatPrice(product.price)}
                        </button>
                      </div>

                      {/* Gamme Badge */}
                      <div className="absolute top-4 left-4 z-10">
                        <span className="text-[9px] tracking-wider font-bold uppercase px-3 py-1.5 rounded-full shadow-xs bg-white/90 backdrop-blur-md text-gray-800 border border-white/40">
                          {product.gamme}
                        </span>
                      </div>
                    </div>

                    {/* Content Area */}
                    <div className="p-5 flex flex-col flex-1 bg-white gap-3.5">
                      
                      {/* Rating & Size Row */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                          <StarRating rating={product.rating} accentColor={accentColor} />
                          <span className="text-[10px] text-gray-400 font-semibold">
                            ({product.reviewsCount})
                          </span>
                        </div>
                        {product.sizes?.length > 0 && (
                          <span className="text-[9px] text-gray-400 font-bold uppercase tracking-wider bg-gray-50 px-2 py-0.5 rounded">
                            {product.sizes[0]}
                          </span>
                        )}
                      </div>

                      {/* Product Name */}
                      <h3 className="text-sm sm:text-base font-bold text-gray-800 tracking-tight group-hover:text-gray-950 transition-colors line-clamp-1 leading-snug">
                        {product.name}
                      </h3>

                      {/* Modern Ingredient Badges */}
                      <div className="flex flex-wrap gap-1.5 min-h-[22px]">
                        {product.activeIngredients.slice(0, 2).map((ingredient) => (
                          <span
                            key={ingredient}
                            className={`text-[8px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md border ${accentBg} ${accentBorder} ${accentColor}`}
                          >
                            {ingredient}
                          </span>
                        ))}
                      </div>

                      {/* Pricing & Mobile Quick Action */}
                      <div className="flex items-center justify-between mt-auto pt-3.5 border-t border-gray-100/80">
                        <div className="flex flex-col">
                          <span className="text-[9px] text-gray-400 font-bold uppercase tracking-wider leading-none mb-0.5">Prix</span>
                          <span className="text-base font-extrabold text-gray-900">
                            {formatPrice(product.price)}
                          </span>
                        </div>

                        {/* Mobile action indicator */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            navigate(`/product/${product.id}`);
                          }}
                          className="sm:hidden flex items-center justify-center w-9 h-9 rounded-full bg-gray-900 text-white active:scale-95 transition-transform"
                          aria-label="Acheter"
                        >
                          <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                          </svg>
                        </button>

                        <span className="hidden sm:inline-block text-[10px] font-bold text-gray-900 tracking-widest border-b border-gray-900 group-hover:text-brand-accent group-hover:border-brand-accent transition-colors uppercase pb-0.5">
                          DÉCOUVRIR
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCatalog;