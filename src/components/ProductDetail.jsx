import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { products } from '../data/products';

const ProductDetail = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [activeAccordion, setActiveAccordion] = useState('description');
  const [isAdded, setIsAdded] = useState(false);
  const [flyingImage, setFlyingImage] = useState(null);

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
          className="mt-6 inline-block bg-black text-white px-8 py-3 text-xs font-bold tracking-widest uppercase cursor-pointer hover:bg-brand-hover transition-colors"
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

  // Find personalized routine products
  const routineProducts = product.routine?.ids
    ? products.filter(p => product.routine.ids.includes(p.id))
    : [];

  const formatPrice = (price) => {
    return price.toLocaleString('fr-FR') + ' DA';
  };

  const handleAddToCart = (e) => {
    if (e && e.currentTarget) {
      const rect = e.currentTarget.getBoundingClientRect();
      // Start flying animation from the button center
      setFlyingImage({
        x: rect.left + rect.width / 2 - 20,
        y: rect.top + rect.height / 2 - 20,
        id: Date.now()
      });
      // Remove flying element after animation finishes
      setTimeout(() => setFlyingImage(null), 1500);
    }

    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
    }, 2000);
  };

  const toggleAccordion = (section) => {
    setActiveAccordion(activeAccordion === section ? null : section);
  };

  return (
    <div className="w-full bg-white animate-[fadeDown_0.3s_ease]">
      {/* 1. PRODUCT INFORMATION HERO */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
        
        {/* Breadcrumbs */}
        <nav className="flex items-center space-x-2 text-[10px] sm:text-xs font-semibold tracking-wider text-gray-400 uppercase mb-8 sm:mb-12">
          <Link to="/" className="hover:text-black transition-colors cursor-pointer">ACCUEIL</Link>
          <span>/</span>
          <Link to="/catalog" className="hover:text-black transition-colors cursor-pointer">NOS FORMULATIONS</Link>
          <span>/</span>
          <span className="text-gray-900 truncate max-w-[150px] sm:max-w-xs">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mb-16">
          
          {/* Left: Product Images */}
          <div className="lg:col-span-6 xl:col-span-7 flex flex-col">
            <div className={`w-full aspect-[4/5] ${themeBgLight} overflow-hidden border border-gray-100 flex items-center justify-center relative rounded-sm`}>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover object-center transition-all duration-700 hover:scale-105"
              />
              <span className={`absolute top-4 left-4 text-[9px] tracking-[0.18em] font-extrabold uppercase px-3 py-2 border shadow-sm ${themeBadgeText}`}>
                {product.gamme}
              </span>
            </div>
          </div>

          {/* Right: Product Purchase Actions & Info */}
          <div className="lg:col-span-6 xl:col-span-5 flex flex-col space-y-6">
            
            {/* Active Ingredients list badges */}
            <div className="flex flex-wrap gap-1.5">
              {product.activeIngredients.map((ing) => (
                <span key={ing} className="text-[9px] font-extrabold tracking-widest text-gray-500 bg-gray-100/70 border border-gray-200/40 px-2.5 py-1 uppercase rounded-sm">
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
                    <svg key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-current' : 'stroke-current text-gray-200'}`} viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-xs text-gray-500 font-semibold tracking-wide">
                  {product.rating} / 5.0 ({product.reviewsCount} avis)
                </span>
              </div>
            </div>

            {/* Price */}
            <div className="text-xl sm:text-2xl font-extrabold text-black border-y border-gray-100 py-4">
              {formatPrice(product.price)}
            </div>

            {/* Short Desc */}
            <p className="text-gray-600 text-sm font-medium leading-relaxed">
              {product.shortDescription}
            </p>

            {/* Size Selector */}
            <div className="space-y-3 pt-2">
              <span className="text-[10px] font-extrabold tracking-widest text-black uppercase">
                CONTENANCE :
              </span>
              <div className="flex gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-5 py-2.5 text-xs font-bold tracking-wider border rounded-sm cursor-pointer transition-colors ${
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
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <div className="flex border border-gray-200 h-12 w-full sm:w-32 items-center justify-between bg-white rounded-sm shrink-0">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-4 text-gray-400 hover:text-black font-semibold h-full cursor-pointer">—</button>
                <span className="text-xs font-extrabold text-black select-none">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="px-4 text-gray-400 hover:text-black font-semibold h-full cursor-pointer">+</button>
              </div>

              <button
                onClick={handleAddToCart}
                style={{ backgroundColor: isAdded ? themeColor : '#000000' }}
                className={`flex-1 h-12 text-white text-[10px] sm:text-xs font-extrabold tracking-widest uppercase transition-all duration-300 rounded-sm shadow-sm cursor-pointer ${themeBtnHover}`}
              >
                {isAdded ? 'AJOUTÉ AU PANIER ✓' : 'AJOUTER AU PANIER'}
              </button>
            </div>

            {/* Reassurance Checklist */}
            <div className="pt-6 border-t border-gray-100 space-y-3">
              {[
                { icon: '🚚', text: 'Livraison express 48H/72H dans toutes les wilayas' },
                { icon: '🧬', text: 'Formulé et testé sous contrôle dermatologique' },
              ].map(({ icon, text }, i) => (
                <div key={i} className="flex items-center space-x-3 text-xs text-gray-600 font-medium">
                  <span className="text-base">{icon}</span>
                  <span>{text}</span>
                </div>
              ))}
            </div>

            {/* Collapsible Tabs for Deep Info */}
            <div className="pt-6 border-t border-gray-100 space-y-3">
              
              {/* Description & Benefits tab */}
              <div className="border-b border-gray-100 pb-3">
                <button onClick={() => toggleAccordion('description')} className="w-full flex justify-between items-center text-left text-xs font-bold tracking-widest text-black uppercase py-2 cursor-pointer">
                  <span>Description &amp; Bénéfices</span>
                  <span className="text-sm font-light text-gray-400">{activeAccordion === 'description' ? '−' : '+'}</span>
                </button>
                {activeAccordion === 'description' && (
                  <div className="mt-3 text-xs text-gray-600 font-medium leading-relaxed animate-[fadeDown_0.2s_ease]">
                    <p className="mb-4">{product.description}</p>
                    {product.benefits && (
                      <ul className="space-y-2">
                        {product.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start">
                            <svg className="w-4 h-4 text-brand-accent mr-2 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}
              </div>

              {/* Usage directions tab */}
              <div className="border-b border-gray-100 pb-3">
                <button onClick={() => toggleAccordion('usage')} className="w-full flex justify-between items-center text-left text-xs font-bold tracking-widest text-black uppercase py-2 cursor-pointer">
                  <span>Conseils d’utilisation</span>
                  <span className="text-sm font-light text-gray-400">{activeAccordion === 'usage' ? '−' : '+'}</span>
                </button>
                {activeAccordion === 'usage' && (
                  <p className="mt-3 text-xs text-gray-600 font-medium leading-relaxed animate-[fadeDown_0.2s_ease]">
                    {product.usage}
                  </p>
                )}
              </div>

              {/* INCI Ingredients tab */}
              <div className="border-b border-gray-100 pb-3">
                <button onClick={() => toggleAccordion('ingredients')} className="w-full flex justify-between items-center text-left text-xs font-bold tracking-widest text-black uppercase py-2 cursor-pointer">
                  <span>Liste des ingrédients (INCI)</span>
                  <span className="text-sm font-light text-gray-400">{activeAccordion === 'ingredients' ? '−' : '+'}</span>
                </button>
                {activeAccordion === 'ingredients' && (
                  <div className="mt-3 text-[11px] text-gray-400 font-medium tracking-wide leading-relaxed italic animate-[fadeDown_0.2s_ease]">
                    {product.ingredients}
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* 2. EDUCATION SECTION (La Science UNIK) */}
      {product.education && (
        <div className={`w-full ${themeBgLight} py-16 sm:py-24 border-y border-black/5`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <span className={`text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase block mb-4 ${isCapillaire ? 'text-[#3a7547]' : 'text-[#296fc2]'}`}>
                LA SCIENCE DERRIÈRE LA FORMULE
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-black uppercase tracking-tight">
                Décryptage de l'expertise
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-black/5">
                <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mb-6">
                  <span className="text-xl">🔬</span>
                </div>
                <h3 className="text-sm font-extrabold tracking-widest text-black uppercase mb-4">Pourquoi ces ingrédients ?</h3>
                <p className="text-sm text-gray-600 font-medium leading-relaxed">{product.education.whyChosen}</p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm border border-black/5">
                <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mb-6">
                  <span className="text-xl">⚙️</span>
                </div>
                <h3 className="text-sm font-extrabold tracking-widest text-black uppercase mb-4">Comment ça marche ?</h3>
                <p className="text-sm text-gray-600 font-medium leading-relaxed">{product.education.howItWorks}</p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm border border-black/5">
                <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mb-6">
                  <span className="text-xl">💡</span>
                </div>
                <h3 className="text-sm font-extrabold tracking-widest text-black uppercase mb-4">L'origine de la formule</h3>
                <p className="text-sm text-gray-600 font-medium leading-relaxed">{product.education.whyExists}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 3. USAGE CONTENT & UGC SECTION */}
      {product.ugcVideo && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            
            <div className="order-2 lg:order-1 flex justify-center">
              <div className="relative w-64 sm:w-80 aspect-[9/16] rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-gray-900 bg-black">
                <img src={product.ugcVideo} alt="Démonstration" className="w-full h-full object-cover opacity-90" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="w-16 h-16 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/50 transition-colors shadow-lg cursor-pointer">
                    <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                  </button>
                </div>
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-white text-xs font-bold shadow-sm">@unik_community</p>
                  <p className="text-white/90 text-xs mt-1 shadow-sm line-clamp-2">Application de la routine {product.gamme} au quotidien ✨</p>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 flex flex-col items-center text-center lg:items-start lg:text-left">
              <span className="text-[10px] sm:text-xs font-bold tracking-[0.2em] text-gray-400 uppercase block mb-4">
                EN ACTION
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-black uppercase tracking-tight leading-tight mb-6">
                L'application parfaite
              </h2>
              <p className="text-gray-500 font-medium text-sm sm:text-base leading-relaxed max-w-lg mb-8">
                Découvrez comment appliquer ce soin pour maximiser ses bienfaits. La régularité et la bonne gestuelle sont les clés de résultats visibles et durables.
              </p>
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 max-w-lg w-full">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-bold text-xs shrink-0">1</div>
                  <p className="text-sm text-gray-700 font-medium pt-1">Prélevez la juste dose de produit.</p>
                </div>
                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-bold text-xs shrink-0">2</div>
                  <p className="text-sm text-gray-700 font-medium pt-1">Réchauffez la matière entre vos mains si nécessaire.</p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-bold text-xs shrink-0">3</div>
                  <p className="text-sm text-gray-700 font-medium pt-1">Appliquez en massant délicatement pour faire pénétrer les actifs.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 4. PERSONALIZED ROUTINE SECTION */}
      {routineProducts.length > 0 && product.routine && (
        <div className="bg-[#111111] py-20 sm:py-28 text-white border-t border-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
              
              <div className="lg:w-1/3 flex flex-col items-center lg:items-start text-center lg:text-left">
                <span className="text-[10px] sm:text-xs font-bold tracking-[0.2em] text-gray-400 uppercase block mb-4">
                  VOTRE RITUEL PERSONNALISÉ
                </span>
                <h2 className="text-2xl sm:text-4xl font-extrabold uppercase tracking-tight leading-tight mb-6 text-white">
                  Construisez votre routine
                </h2>
                <p className="text-gray-400 font-medium text-sm sm:text-base leading-relaxed mb-8">
                  {product.routine.text}
                </p>
              </div>
              
              <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
                {routineProducts.map((relProduct) => (
                  <div
                    key={relProduct.id}
                    onClick={() => navigate(`/product/${relProduct.id}`)}
                    className="group bg-[#1a1a1a] border border-gray-800 rounded-2xl overflow-hidden cursor-pointer hover:border-gray-600 transition-colors flex flex-col"
                  >
                    <div className="w-full aspect-video overflow-hidden relative bg-black flex items-center justify-center p-6">
                      <img
                        src={relProduct.image}
                        alt={relProduct.name}
                        className="h-full w-auto object-contain object-center group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="text-[8px] tracking-[0.15em] font-extrabold uppercase px-2 py-1 bg-white/10 text-white rounded-sm backdrop-blur-md">
                          Étape Complémentaire
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-5 bg-[#1a1a1a] flex flex-col flex-1">
                      <h3 className="text-sm font-bold tracking-tight text-white uppercase group-hover:text-brand-accent transition-colors mb-2">
                        {relProduct.name}
                      </h3>
                      <p className="text-xs text-gray-400 line-clamp-2 mb-4 font-medium flex-1">
                        {relProduct.shortDescription}
                      </p>
                      <div className="flex items-center justify-between pt-3 border-t border-gray-800">
                        <span className="text-sm font-extrabold text-white">
                          {formatPrice(relProduct.price)}
                        </span>
                        <span className="text-[9px] font-bold text-white border-b border-white uppercase pb-0.5">
                          DÉCOUVRIR
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      )}

      {/* Flying Image to Cart Animation */}
      {flyingImage && (
        <motion.img
          key={flyingImage.id}
          src={product.image}
          initial={{ x: flyingImage.x, y: flyingImage.y, scale: 1, opacity: 1 }}
          animate={{ x: window.innerWidth - 70, y: 30, scale: 0.2, opacity: 0 }}
          transition={{ duration: 1.2, ease: "backInOut" }}
          className="fixed top-0 left-0 w-12 h-12 object-cover shadow-2xl rounded-sm border border-gray-200 pointer-events-none z-[9999]"
          alt=""
        />
      )}

    </div>
  );
};

export default ProductDetail;
