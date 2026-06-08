import React, { useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { products } from '../data/products';

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
    return price.toLocaleString('fr-FR') + 'DA';
  };

  return (
    <div className="w-full bg-[#fcfcfc] min-h-screen py-8 sm:py-12 animate-[fadeDown_0.3s_ease]">
      {/* Header section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <span className="text-[10px] sm:text-xs font-bold tracking-[0.2em] text-gray-400 uppercase block mb-3">
          UNIK COSMÉTIQUES
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-black uppercase tracking-tight mb-4">
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
              { id: 'capillaire', label: 'GAMME CAPILLAIRE', activeClass: 'text-[#3a7547] border-[#3a7547] bg-[#f0f4ea]' },
              { id: 'dermatologique', label: 'GAMME DERMATOLOGIQUE', activeClass: 'text-[#296fc2] border-[#296fc2] bg-[#ecf2f8]' }
            ].map((tab) => {
              const isActive = selectedGamme === tab.id;
              let btnClass = "px-4 py-2 text-[10px] sm:text-xs font-bold tracking-widest border transition-all duration-300 rounded-none cursor-pointer ";
              
              if (isActive) {
                btnClass += tab.activeClass || "border-black bg-black text-white";
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
                className="appearance-none bg-white border border-gray-200 px-4 py-2 pr-8 text-xs font-bold tracking-wider text-black rounded-none focus:outline-none focus:border-black cursor-pointer"
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
          <div className="text-center py-20 bg-white border border-gray-100">
            <p className="text-gray-500 text-sm font-medium">Aucun produit trouvé dans cette catégorie.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8">
            {sortedProducts.map((product) => {
              const isCapillaire = product.gamme === 'capillaire';
              const accentColor = isCapillaire ? 'text-[#3a7547]' : 'text-[#296fc2]';
              const cardBg = isCapillaire ? 'bg-[#f8faf6]' : 'bg-[#f5f8fc]';
              
              return (
                <div
                  key={product.id}
                  className="group flex flex-col bg-white border border-gray-100/60 overflow-hidden relative cursor-pointer"
                  onClick={() => navigate(`/product/${product.id}`)}
                >
                  {/* Image wrapper */}
                  <div className={`w-full aspect-[4/5] overflow-hidden relative ${cardBg} transition-colors duration-300`}>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    
                    {/* Hover detail reveal button */}
                    <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="bg-white text-black text-[10px] font-bold tracking-widest px-5 py-3 shadow-md uppercase transition-transform duration-300 translate-y-2 group-hover:translate-y-0">
                        VOIR LE SOIN
                      </span>
                    </div>

                    {/* Gamme Badge */}
                    <div className="absolute top-4 left-4">
                      <span className={`text-[8px] tracking-[0.15em] font-extrabold uppercase px-2.5 py-1.5 shadow-sm bg-white/95 backdrop-blur-xs ${accentColor}`}>
                        {product.gamme}
                      </span>
                    </div>
                  </div>

                  {/* Info details */}
                  <div className="p-5 flex flex-col flex-1 border-t border-gray-50 bg-white">
                    {/* Active ingredients */}
                    <span className="text-[9px] font-semibold text-gray-400 tracking-wider mb-2">
                      {product.activeIngredients.slice(0, 2).join(' • ')}
                    </span>

                    {/* Product name */}
                    <h3 className="text-sm font-bold tracking-tight text-gray-900 uppercase group-hover:text-emerald-800 transition-colors line-clamp-1 mb-2">
                      {product.name}
                    </h3>

                    {/* Reviews */}
                    <div className="flex items-center space-x-1.5 mb-4">
                      <div className="flex text-amber-400">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className={`w-3.5 h-3.5 ${i < Math.floor(product.rating) ? 'fill-current' : 'stroke-current text-gray-200'}`}
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="text-[10px] text-gray-400 font-semibold">
                        {product.rating} ({product.reviewsCount})
                      </span>
                    </div>

                    {/* Price and Action row */}
                    <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-100/60">
                      <span className="text-xs font-extrabold text-black">
                        {formatPrice(product.price)}
                      </span>
                      <span className="text-[10px] font-bold text-black tracking-widest border-b border-black group-hover:text-emerald-700 group-hover:border-emerald-700 transition-colors uppercase pb-0.5">
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
  );
};

export default ProductCatalog;
