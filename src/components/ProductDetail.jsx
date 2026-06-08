import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { products } from '../data/products';

const ProductDetail = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [activeAccordion, setActiveAccordion] = useState('description');
  const [isAdded, setIsAdded] = useState(false);

  // Scroll to top when product changes
  useEffect(() => {
    window.scrollTo(0, 0);
    const foundProduct = products.find((p) => p.id === productId);
    if (foundProduct) {
      setProduct(foundProduct);
      setSelectedSize(foundProduct.sizes[0] || '');
      setQuantity(1);
    }
  }, [productId]);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h2 className="text-xl font-bold text-gray-900 uppercase">Soin introuvable</h2>
        <p className="text-gray-500 text-sm mt-2">Le soin que vous recherchez n'existe pas ou a été déplacé.</p>
        <button
          onClick={() => navigate('/catalog')}
          className="mt-6 inline-block bg-black text-white px-8 py-3 text-xs font-bold tracking-widest uppercase cursor-pointer hover:bg-emerald-950 transition-colors"
        >
          RETOUR AUX SOINS
        </button>
      </div>
    );
  }

  const isCapillaire = product.gamme === 'capillaire';
  const themeColor = isCapillaire ? '#3a7547' : '#296fc2';
  const themeBgLight = isCapillaire ? 'bg-[#f0f4ea]' : 'bg-[#ecf2f8]';
  const themeBadgeText = isCapillaire ? 'text-[#3a7547] bg-[#f0f4ea]/80 border-[#3a7547]/20' : 'text-[#296fc2] bg-[#ecf2f8]/80 border-[#296fc2]/20';
  const themeBtnHover = isCapillaire ? 'hover:bg-[#3a7547]' : 'hover:bg-[#296fc2]';

  // Find related products
  const relatedProducts = products
    .filter((p) => p.gamme === product.gamme && p.id !== product.id)
    .slice(0, 3);

  const formatPrice = (price) => {
    return price.toLocaleString('fr-FR') + ' DA';
  };

  const handleAddToCart = () => {
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
    }, 2000);
  };

  const toggleAccordion = (section) => {
    setActiveAccordion(activeAccordion === section ? null : section);
  };

  return (
    <div className="w-full bg-white py-6 sm:py-10 animate-[fadeDown_0.3s_ease]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumbs */}
        <nav className="flex items-center space-x-2 text-[10px] sm:text-xs font-semibold tracking-wider text-gray-400 uppercase mb-8 sm:mb-12">
          <Link to="/" className="hover:text-black transition-colors cursor-pointer">
            ACCUEIL
          </Link>
          <span>/</span>
          <Link to="/catalog" className="hover:text-black transition-colors cursor-pointer">
            NOS FORMULATIONS
          </Link>
          <span>/</span>
          <span className="text-gray-900 truncate max-w-[150px] sm:max-w-xs">{product.name}</span>
        </nav>

        {/* Product Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mb-16 sm:mb-24">
          
          {/* Left: Product Images */}
          <div className="lg:col-span-7 flex flex-col space-y-4">
            <div className={`w-full aspect-[4/5] ${themeBgLight} overflow-hidden border border-gray-100 flex items-center justify-center relative`}>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover object-center transition-all duration-700 hover:scale-103"
              />
              <span className={`absolute top-4 left-4 text-[9px] tracking-[0.18em] font-extrabold uppercase px-3 py-2 border shadow-sm ${themeBadgeText}`}>
                {product.gamme}
              </span>
            </div>
          </div>

          {/* Right: Product Purchase Actions */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            
            {/* Active Ingredients list badges */}
            <div className="flex flex-wrap gap-1.5">
              {product.activeIngredients.map((ing) => (
                <span
                  key={ing}
                  className="text-[9px] font-extrabold tracking-widest text-gray-500 bg-gray-100/70 border border-gray-200/40 px-2.5 py-1 uppercase"
                >
                  {ing}
                </span>
              ))}
            </div>

            {/* Title & Stars */}
            <div className="space-y-3">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-black uppercase tracking-tight leading-tight">
                {product.name}
              </h1>
              
              <div className="flex items-center space-x-2">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-current' : 'stroke-current text-gray-200'}`}
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-xs text-gray-500 font-semibold tracking-wide">
                  {product.rating} / 5.0 ({product.reviewsCount} avis clientèles)
                </span>
              </div>
            </div>

            {/* Price */}
            <div className="text-xl sm:text-2xl font-extrabold text-black border-y border-gray-100 py-3">
              {formatPrice(product.price)}
            </div>

            {/* Short Desc */}
            <p className="text-gray-500 text-sm font-medium leading-relaxed">
              {product.shortDescription}
            </p>

            {/* Size Selector */}
            <div className="space-y-2">
              <span className="text-[10px] font-extrabold tracking-widest text-black uppercase">
                CONTENANCE :
              </span>
              <div className="flex gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2.5 text-xs font-bold tracking-wider border rounded-none cursor-pointer transition-colors ${
                      selectedSize === size
                        ? 'border-black bg-black text-white'
                        : 'border-gray-200 text-gray-500 hover:border-black hover:text-black bg-white'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity and Cart button */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              {/* Quantity counter */}
              <div className="flex border border-gray-200 h-12 w-full sm:w-32 items-center justify-between bg-white shrink-0">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 text-gray-400 hover:text-black font-semibold h-full transition-colors cursor-pointer text-sm"
                >
                  —
                </button>
                <span className="text-xs font-extrabold text-black select-none">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 text-gray-400 hover:text-black font-semibold h-full transition-colors cursor-pointer text-sm"
                >
                  +
                </button>
              </div>

              {/* Purchase button */}
              <button
                onClick={handleAddToCart}
                style={{
                  backgroundColor: isAdded ? themeColor : '#000000'
                }}
                className={`flex-1 h-12 text-white text-[10px] sm:text-xs font-extrabold tracking-widest uppercase transition-all duration-300 rounded-none shadow-sm cursor-pointer ${themeBtnHover}`}
              >
                {isAdded ? 'AJOUTÉ AU PANIER ✓' : 'AJOUTER AU PANIER'}
              </button>
            </div>

            {/* Reassurance Checklist */}
            <div className="pt-6 border-t border-gray-100 space-y-3">
              {[
                { icon: '🚚', text: 'Livraison express 48H/72H dans toutes les wilayas' },
                { icon: '🧬', text: 'Formulé et testé cliniquement sous contrôle dermatologique' },
                { icon: '🌿', text: 'Actifs d’origine naturelle hautement concentrés, 100% Cruelty-Free' },
                { icon: '✨', text: 'Livraison offerte à partir de 3000 Dinars d’achats' }
              ].map(({ icon, text }, i) => (
                <div key={i} className="flex items-start space-x-3 text-xs text-gray-500 font-medium leading-relaxed">
                  <span className="text-base select-none leading-none">{icon}</span>
                  <span>{text}</span>
                </div>
              ))}
            </div>

            {/* Collapsible Tabs */}
            <div className="pt-6 border-t border-gray-100 space-y-3">
              
              {/* Description tab */}
              <div className="border-b border-gray-100 pb-3">
                <button
                  onClick={() => toggleAccordion('description')}
                  className="w-full flex justify-between items-center text-left text-xs font-bold tracking-widest text-black uppercase py-1 cursor-pointer"
                >
                  <span>Description &amp; Bénéfices</span>
                  <span className="text-sm font-light text-gray-400">{activeAccordion === 'description' ? '−' : '+'}</span>
                </button>
                {activeAccordion === 'description' && (
                  <p className="mt-3 text-xs text-gray-500 font-medium leading-relaxed animate-[fadeDown_0.2s_ease]">
                    {product.description}
                  </p>
                )}
              </div>

              {/* Usage directions tab */}
              <div className="border-b border-gray-100 pb-3">
                <button
                  onClick={() => toggleAccordion('usage')}
                  className="w-full flex justify-between items-center text-left text-xs font-bold tracking-widest text-black uppercase py-1 cursor-pointer"
                >
                  <span>Conseils d’utilisation</span>
                  <span className="text-sm font-light text-gray-400">{activeAccordion === 'usage' ? '−' : '+'}</span>
                </button>
                {activeAccordion === 'usage' && (
                  <p className="mt-3 text-xs text-gray-500 font-medium leading-relaxed whitespace-pre-line animate-[fadeDown_0.2s_ease]">
                    {product.usage}
                  </p>
                )}
              </div>

              {/* INCI Ingredients tab */}
              <div className="border-b border-gray-100 pb-3">
                <button
                  onClick={() => toggleAccordion('ingredients')}
                  className="w-full flex justify-between items-center text-left text-xs font-bold tracking-widest text-black uppercase py-1 cursor-pointer"
                >
                  <span>Liste des ingrédients (INCI)</span>
                  <span className="text-sm font-light text-gray-400">{activeAccordion === 'ingredients' ? '−' : '+'}</span>
                </button>
                {activeAccordion === 'ingredients' && (
                  <div className="mt-3 text-[11px] text-gray-500/80 font-semibold tracking-wide leading-relaxed italic animate-[fadeDown_0.2s_ease]">
                    {product.ingredients}
                  </div>
                )}
              </div>

            </div>

          </div>
        </div>

        {/* Related Products Section */}
        {relatedProducts.length > 0 && (
          <div className="pt-16 sm:pt-20 border-t border-gray-100">
            <h2 className="text-xl sm:text-2xl font-extrabold text-black uppercase tracking-tight text-center mb-10 sm:mb-14">
              VOUS AIMEREZ AUSSI
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProducts.map((relProduct) => {
                const isRelCapillaire = relProduct.gamme === 'capillaire';
                const relAccentColor = isRelCapillaire ? 'text-[#3a7547]' : 'text-[#296fc2]';
                const relBg = isRelCapillaire ? 'bg-[#f8faf6]' : 'bg-[#f5f8fc]';

                return (
                  <div
                    key={relProduct.id}
                    onClick={() => navigate(`/product/${relProduct.id}`)}
                    className="group bg-white border border-gray-100/60 overflow-hidden relative cursor-pointer"
                  >
                    <div className={`w-full aspect-[4/5] overflow-hidden relative ${relBg}`}>
                      <img
                        src={relProduct.image}
                        alt={relProduct.name}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute top-4 left-4">
                        <span className={`text-[8px] tracking-[0.15em] font-extrabold uppercase px-2 py-1 bg-white/95 backdrop-blur-xs ${relAccentColor}`}>
                          {relProduct.gamme}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-4 border-t border-gray-50 bg-white flex flex-col">
                      <span className="text-[8px] font-semibold text-gray-400 tracking-wider mb-1">
                        {relProduct.activeIngredients.slice(0, 2).join(' • ')}
                      </span>
                      <h3 className="text-xs font-bold tracking-tight text-gray-900 uppercase group-hover:text-emerald-800 transition-colors line-clamp-1 mb-2">
                        {relProduct.name}
                      </h3>
                      <div className="flex items-center justify-between pt-2 border-t border-gray-50 mt-1">
                        <span className="text-xs font-extrabold text-black">
                          {formatPrice(relProduct.price)}
                        </span>
                        <span className="text-[9px] font-bold text-black border-b border-black uppercase pb-0.5">
                          DÉCOUVRIR
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default ProductDetail;
