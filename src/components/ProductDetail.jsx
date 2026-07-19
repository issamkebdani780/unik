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
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const defaultReviews = [
    {
      name: "Sarah M.",
      date: "12/07/2026",
      rating: 5,
      title: "Une vraie révélation !",
      comment: "Depuis que j'utilise ce soin, ma peau est complètement transformée. Plus de rougeurs ni d'inconfort. Je recommande à 100% !"
    },
    {
      name: "Lina K.",
      date: "05/07/2026",
      rating: 5,
      title: "Texture incroyable",
      comment: "J'adore la texture ultra-légère. Elle pénètre instantanément sans laisser de fini gras. Parfait au quotidien."
    },
    {
      name: "Yasmine L.",
      date: "28/06/2026",
      rating: 4,
      title: "Efficace rapidement",
      comment: "Des résultats visibles dès les trois premières semaines d'utilisation. Le packaging est également très qualitatif."
    }
  ];

  const [newReview, setNewReview] = useState({ name: '', rating: 5, comment: '', title: '' });
  const [reviewsList, setReviewsList] = useState(defaultReviews);
  const scrollContainerRef = React.useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const routineScrollContainerRef = React.useRef(null);
  const [isRoutinePaused, setIsRoutinePaused] = useState(false);
  const reviewMarqueeRef = React.useRef(null);
  const [isReviewMarqueePaused, setIsReviewMarqueePaused] = useState(false);

  // Find personalized routine products (and append other catalog products to make it scrollable like UGCCommunity)
  const routineProducts = (() => {
    if (!product || !product.routine) return [];
    const directIds = product.routine.ids || [];
    const direct = products.filter(p => directIds.includes(p.id));
    const sameGamme = products.filter(p => p.gamme === product.gamme && p.id !== product.id && !directIds.includes(p.id));
    const otherGamme = products.filter(p => p.gamme !== product.gamme && p.id !== product.id && !directIds.includes(p.id));
    return [...direct, ...sameGamme, ...otherGamme];
  })();

  const productImages = product?.images || [product?.image, '/about_lab.png', '/engagements_eco.png'];

  // Auto-scroll functionality
  useEffect(() => {
    if (isPaused || productImages.length <= 1) return;

    const interval = setInterval(() => {
      // Find current index directly from scroll position to avoid state staleness
      if (!scrollContainerRef.current) return;
      const scrollPosition = scrollContainerRef.current.scrollLeft;
      const width = scrollContainerRef.current.clientWidth;
      const index = Math.round(scrollPosition / width);
      const next = index === productImages.length - 1 ? 0 : index + 1;

      scrollContainerRef.current.scrollTo({ left: width * next, behavior: 'smooth' });
      setCurrentImageIndex(next);
    }, 3500);

    return () => clearInterval(interval);
  }, [isPaused, productImages.length]);

  // Auto-scroll for routine section (matching UGCCommunity logic)
  useEffect(() => {
    let animationFrameId;
    const container = routineScrollContainerRef.current;
    if (!container || routineProducts.length <= 1) return;

    const scroll = () => {
      if (container && !isRoutinePaused) {
        container.scrollLeft += 1;
        
        // Reset scroll position when reaching the end of the first set of items
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft -= container.scrollWidth / 2;
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isRoutinePaused, routineProducts.length]);

  // Auto-scroll for reviews section (matching Testimonials logic)
  useEffect(() => {
    let animationFrameId;
    const container = reviewMarqueeRef.current;
    if (!container || reviewsList.length === 0) return;

    const scroll = () => {
      if (container && !isReviewMarqueePaused) {
        container.scrollLeft += 0.8;
        
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft -= container.scrollWidth / 2;
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isReviewMarqueePaused, reviewsList]);

  // Scroll to top when product changes
  useEffect(() => {
    window.scrollTo(0, 0);
    const foundProduct = products.find((p) => p.id === productId);
    if (foundProduct) {
      setProduct(foundProduct);
      setSelectedSize(foundProduct.sizes[0] || '');
      setQuantity(1);
      setCurrentImageIndex(0);
      setReviewsList(defaultReviews);
      setNewReview({ name: '', rating: 5, comment: '', title: '' });
    }
  }, [productId]);

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (!newReview.name || !newReview.comment) return;
    setReviewsList([...reviewsList, { 
      ...newReview, 
      date: new Date().toLocaleDateString('fr-FR'),
      title: newReview.title || 'Soin Exceptionnel'
    }]);
    setNewReview({ name: '', rating: 5, comment: '', title: '' });
  };

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

  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const scrollPosition = scrollContainerRef.current.scrollLeft;
    const width = scrollContainerRef.current.clientWidth;
    const index = Math.round(scrollPosition / width);
    if (index !== currentImageIndex) {
      setCurrentImageIndex(index);
    }
  };

  const scrollToImage = (index) => {
    if (!scrollContainerRef.current) return;
    const width = scrollContainerRef.current.clientWidth;
    scrollContainerRef.current.scrollTo({ left: width * index, behavior: 'smooth' });
    setCurrentImageIndex(index);
  };

  const handlePrevImage = () => {
    const prev = currentImageIndex === 0 ? productImages.length - 1 : currentImageIndex - 1;
    scrollToImage(prev);
  };

  const handleNextImage = () => {
    const next = currentImageIndex === productImages.length - 1 ? 0 : currentImageIndex + 1;
    scrollToImage(next);
  };

  const handleRoutinePrev = () => {
    if (routineScrollContainerRef.current) {
      routineScrollContainerRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const handleRoutineNext = () => {
    if (routineScrollContainerRef.current) {
      routineScrollContainerRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full bg-white animate-[fadeDown_0.3s_ease]">
      {/* 1. PRODUCT INFORMATION HERO */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6  sm:pt-10 sm:pb-4">

        {/* Breadcrumbs */}
        <nav className="flex items-center space-x-2 text-[10px] sm:text-xs font-semibold tracking-wider text-gray-400 uppercase mb-8 sm:mb-12">
          <Link to="/" className="hover:text-black transition-colors cursor-pointer">ACCUEIL</Link>
          <span>/</span>
          <Link to="/catalog" className="hover:text-black transition-colors cursor-pointer">NOS FORMULATIONS</Link>
          <span>/</span>
          <span className="text-gray-900 truncate max-w-[150px] sm:max-w-xs">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">

          {/* Left: Product Images Carousel */}
          <div className="lg:col-span-6 xl:col-span-7 flex flex-col relative group">
            <div
              className={`w-full aspect-[4/5] ${themeBgLight} overflow-hidden border border-gray-100 relative rounded-sm`}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              onTouchStart={() => setIsPaused(true)}
              onTouchEnd={() => setIsPaused(false)}
            >

              <div
                ref={scrollContainerRef}
                onScroll={handleScroll}
                className="flex overflow-x-auto snap-x snap-mandatory w-full h-full [scrollbar-width:none] [&::-webkit-scrollbar]:hidden scroll-smooth"
              >
                {productImages.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`${product.name} - Vue ${idx + 1}`}
                    className="w-full h-full object-cover object-center flex-shrink-0 snap-center"
                  />
                ))}
              </div>

              <span className={`absolute top-4 left-4 text-[9px] tracking-[0.18em] font-extrabold uppercase px-3 py-2 border shadow-sm z-10 ${themeBadgeText}`}>
                {product.gamme}
              </span>

              {/* Carousel Navigation Arrows */}
              {productImages.length > 1 && (
                <>
                  <button
                    onClick={handlePrevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full flex items-center justify-center text-black hover:bg-white transition-colors opacity-100 sm:opacity-0 sm:group-hover:opacity-100 cursor-pointer shadow-sm z-10"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
                  </button>
                  <button
                    onClick={handleNextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full flex items-center justify-center text-black hover:bg-white transition-colors opacity-100 sm:opacity-0 sm:group-hover:opacity-100 cursor-pointer shadow-sm z-10"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                  </button>
                </>
              )}
            </div>

            {/* Carousel Dots */}
            {productImages.length > 1 && (
              <div className="flex justify-center items-center space-x-2 mt-4">
                {productImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => scrollToImage(idx)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${currentImageIndex === idx ? 'bg-black w-6' : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                  />
                ))}
              </div>
            )}
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
            {/* <div className="space-y-3 pt-2">
              <span className="text-[10px] font-extrabold tracking-widest text-black uppercase">
                CONTENANCE :
              </span>
              <div className="flex gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-5 py-2.5 text-xs font-bold tracking-wider border rounded-sm cursor-pointer transition-colors ${selectedSize === size
                        ? 'border-black bg-black text-white'
                        : 'border-gray-200 text-gray-500 hover:border-black hover:text-black bg-white'
                      }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div> */}

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

      {/* 2. HOW TO APPLY SECTION */}
      {product.usage && (
        <div className={`w-full ${themeBgLight} py-16 sm:py-24 border-y border-black/5`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

              <div className="lg:w-1/3 text-center lg:text-left">
                <span className={`text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase block mb-4 ${isCapillaire ? 'text-[#3a7547]' : 'text-[#296fc2]'}`}>
                  VOTRE RITUEL BEAUTÉ
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-black uppercase tracking-tight leading-none mb-6">
                  L'ART DE<br />L'APPLICATION
                </h2>
                <div className={`hidden lg:block w-12 h-1 ${isCapillaire ? 'bg-[#3a7547]' : 'bg-[#296fc2]'}`}></div>
              </div>

              <div className="lg:w-2/3 w-full bg-white p-8 sm:p-12 lg:p-16 relative shadow-sm border border-gray-100">
                <div className={`absolute top-0 left-0 w-1 h-full ${isCapillaire ? 'bg-[#3a7547]' : 'bg-[#296fc2]'}`}></div>
                <svg className={`absolute right-8 top-8 w-12 h-12 opacity-10 ${isCapillaire ? 'text-[#3a7547]' : 'text-[#296fc2]'}`} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                </svg>
                <p className="text-sm sm:text-base lg:text-lg text-gray-700 font-medium leading-relaxed relative z-10">
                  {product.usage}
                </p>
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

      {/* 4. REVIEWS SECTION */}
      <div className="w-full bg-[#fcfcfc] py-16 sm:py-24 border-t border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="text-center  mb-10">
            <span className="text-[10px] sm:text-xs font-bold tracking-[0.2em] text-gray-400 uppercase block mb-4">
              VOTRE AVIS COMPTE
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-black uppercase tracking-tight">
              Avis Clients
            </h2>
          </div>

          {/* Dynamic Reviews Marquee */}
          <div 
            className="relative w-full group mt-6"
            onMouseEnter={() => setIsReviewMarqueePaused(true)}
            onMouseLeave={() => setIsReviewMarqueePaused(false)}
            onTouchStart={() => setIsReviewMarqueePaused(true)}
            onTouchEnd={() => setIsReviewMarqueePaused(false)}
          >
            {/* Gradients for smooth fading on edges */}
            <div className="absolute top-0 left-0 h-full w-12 sm:w-32 bg-gradient-to-r from-[#fcfcfc] to-transparent z-10 pointer-events-none"></div>
            <div className="absolute top-0 right-0 h-full w-12 sm:w-32 bg-gradient-to-l from-[#fcfcfc] to-transparent z-10 pointer-events-none"></div>

            <div 
              ref={reviewMarqueeRef}
              className="flex overflow-x-auto py-10 px-4 sm:px-8 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden items-center"
            >
              {[...reviewsList, ...reviewsList].map((review, index) => (
                <div
                  key={`${review.id || index}-${index}`}
                  className="relative flex-shrink-0 w-[80vw] sm:w-[450px] mx-3 sm:mx-4 bg-white p-6 sm:p-8 rounded-2xl shadow-xs border border-gray-100 transition-all duration-300 hover:shadow-md hover:-translate-y-1"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex space-x-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <svg key={i} className="w-3.5 h-3.5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      ))}
                      {[...Array(5 - review.rating)].map((_, i) => (
                        <svg key={i} className="w-3.5 h-3.5 text-gray-200 fill-current" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">{review.date}</span>
                  </div>

                  <h3 className="text-base font-bold text-black mb-2">"{review.title || 'Excellent produit'}"</h3>
                  <p className="text-gray-500 font-medium text-xs sm:text-sm leading-relaxed mb-6">
                    {review.comment}
                  </p>

                  <div className="flex items-center space-x-3">
                    <div className="w-9 h-9 rounded-full bg-gray-50 flex items-center justify-center text-xs font-bold text-gray-600 uppercase border border-gray-100">
                      {review.name.slice(0, 2)}
                    </div>
                    <div>
                      <p className="text-xs font-bold text-black">{review.name}</p>
                      <p className="text-[10px] text-green-600 font-bold flex items-center mt-0.5">
                        <svg className="w-2.5 h-2.5 mr-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        Acheteur Vérifié
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Controls */}
            <div className="absolute top-1/2 -translate-y-1/2 left-4 sm:left-6 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button 
                onClick={() => reviewMarqueeRef.current?.scrollBy({ left: -350, behavior: 'smooth' })}
                className="w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-md text-black hover:bg-black hover:text-white transition-colors border border-gray-100 cursor-pointer"
                aria-label="Avis précédent"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 right-4 sm:right-6 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button 
                onClick={() => reviewMarqueeRef.current?.scrollBy({ left: 350, behavior: 'smooth' })}
                className="w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-md text-black hover:bg-black hover:text-white transition-colors border border-gray-100 cursor-pointer"
                aria-label="Avis suivant"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          <div className="flex justify-center">
            {/* Review Form */}
            <div className="w-full max-w-2xl bg-white p-8 sm:p-10 rounded-2xl border border-gray-100/80 shadow-xs">
              <h3 className="text-sm font-bold tracking-widest text-black uppercase mb-6">Laissez un avis</h3>
              <form onSubmit={handleReviewSubmit} className="space-y-5">
                <div>
                  <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Votre Note</label>
                  <div className="flex space-x-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        type="button"
                        key={star}
                        onClick={() => setNewReview({ ...newReview, rating: star })}
                        className="cursor-pointer transition-transform active:scale-90"
                      >
                        <svg className={`w-7 h-7 transition-colors ${newReview.rating >= star ? 'text-amber-400 fill-current' : 'text-gray-200 fill-current'}`} viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Nom / Pseudo</label>
                    <input
                      type="text"
                      required
                      value={newReview.name}
                      onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                      className="w-full border border-gray-200 p-3.5 rounded-xl text-sm focus:outline-none focus:border-black transition-colors"
                      placeholder="Ex: Sarah M."
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Titre de l'avis</label>
                    <input
                      type="text"
                      required
                      value={newReview.title || ''}
                      onChange={(e) => setNewReview({ ...newReview, title: e.target.value })}
                      className="w-full border border-gray-200 p-3.5 rounded-xl text-sm focus:outline-none focus:border-black transition-colors"
                      placeholder="Ex: Texture incroyable !"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Commentaire</label>
                  <textarea
                    required
                    rows="3"
                    value={newReview.comment}
                    onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                    className="w-full border border-gray-200 p-3.5 rounded-xl text-sm focus:outline-none focus:border-black transition-colors resize-none"
                    placeholder="Qu'avez-vous pensé de l'efficacité, de la texture ou du parfum ?"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className={`w-full text-white text-xs font-extrabold tracking-widest uppercase py-4 rounded-xl shadow-xs transition-all duration-300 cursor-pointer ${themeBtnHover}`}
                  style={{ backgroundColor: themeColor }}
                >
                  Publier l'avis
                </button>
              </form>
            </div>
          </div>
        </div>

        
      </div>

      {/* 5. PERSONALIZED ROUTINE SECTION */}
      {routineProducts.length > 0 && product.routine && (
        <section className="w-full bg-[#111111] py-20 sm:py-32 overflow-hidden border-t border-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12 sm:mb-16">
            <span className="text-[10px] sm:text-xs font-bold tracking-[0.2em] text-gray-500 uppercase block mb-4">
              VOTRE RITUEL PERSONNALISÉ
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white uppercase tracking-tight leading-tight">
              Construisez votre routine
            </h2>
            <p className="mt-4 text-sm sm:text-base text-gray-400 font-medium max-w-2xl mx-auto">
              {product.routine.text}
            </p>
          </div>

          <div 
            className="relative w-full group"
            onMouseEnter={() => setIsRoutinePaused(true)}
            onMouseLeave={() => setIsRoutinePaused(false)}
            onTouchStart={() => setIsRoutinePaused(true)}
            onTouchEnd={() => setIsRoutinePaused(false)}
          >
            {/* Gradients for smooth fading on edges */}
            <div className="absolute top-0 left-0 h-full w-12 sm:w-32 bg-gradient-to-r from-[#111111] to-transparent z-10 pointer-events-none"></div>
            <div className="absolute top-0 right-0 h-full w-12 sm:w-32 bg-gradient-to-l from-[#111111] to-transparent z-10 pointer-events-none"></div>

            <div 
              ref={routineScrollContainerRef}
              className="flex overflow-x-auto py-8 px-4 sm:px-8 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden scroll-smooth"
            >
              {[...routineProducts, ...routineProducts].map((relProduct, index) => (
                <div
                  key={`${relProduct.id}-${index}`}
                  onClick={() => navigate(`/product/${relProduct.id}`)}
                  className="relative w-64 h-96 sm:w-72 sm:h-[450px] mx-3 sm:mx-4 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex-shrink-0 cursor-pointer group/card block"
                >
                  {/* Image Thumbnail */}
                  <img
                    src={relProduct.image}
                    alt={relProduct.name}
                    className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-700 pointer-events-none"
                  />
                  
                  {/* Overlay Gradient for readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent pointer-events-none"></div>

                  {/* Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="text-[8px] tracking-[0.15em] font-extrabold uppercase px-2.5 py-1.5 bg-black/40 text-white rounded-sm backdrop-blur-md">
                      Étape Complémentaire
                    </span>
                  </div>

                  {/* Product Info Overlay */}
                  <div className="absolute bottom-0 left-0 w-full p-5 text-left pointer-events-none z-10">
                    <h3 className="text-sm font-bold tracking-tight text-white uppercase group-hover/card:text-brand-accent transition-colors mb-2">
                      {relProduct.name}
                    </h3>
                    <p className="text-[11px] text-gray-300 line-clamp-2 mb-4 font-medium leading-relaxed">
                      {relProduct.shortDescription}
                    </p>
                    <div className="flex items-center justify-between pt-3 border-t border-white/10">
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

            {/* Navigation Controls */}
            <div className="absolute top-1/2 -translate-y-1/2 left-4 sm:left-8 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button 
                onClick={handleRoutinePrev}
                className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center shadow-lg text-black hover:bg-black hover:text-white transition-colors duration-300 border border-gray-100 cursor-pointer"
                aria-label="Produit précédent"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 right-4 sm:right-8 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button 
                onClick={handleRoutineNext}
                className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center shadow-lg text-black hover:bg-black hover:text-white transition-colors duration-300 border border-gray-100 cursor-pointer"
                aria-label="Produit suivant"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

          </div>
        </section>
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
