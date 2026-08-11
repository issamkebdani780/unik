import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { fetchProductBySlug, getImageUrl } from '../api/client';

const ProductDetail = () => {
  const { productId: slug } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedSubOption, setSelectedSubOption] = useState(null);

  const scrollContainerRef = React.useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const loadProduct = async () => {
      setLoading(true);
      const res = await fetchProductBySlug(slug);
      if (res && res.id) {
        setProduct(res);
        if (res.attribute?.options?.length > 0) {
          setSelectedOption(res.attribute.options[0]);
          if (res.attribute.options[0].sizes?.length > 0) {
            setSelectedSubOption(res.attribute.options[0].sizes[0]);
          } else {
            setSelectedSubOption(null);
          }
        } else {
          setSelectedOption(null);
          setSelectedSubOption(null);
        }
      } else if (res && res.data) {
        setProduct(res.data);
        if (res.data.attribute?.options?.length > 0) {
          setSelectedOption(res.data.attribute.options[0]);
          if (res.data.attribute.options[0].sizes?.length > 0) {
            setSelectedSubOption(res.data.attribute.options[0].sizes[0]);
          } else {
            setSelectedSubOption(null);
          }
        } else {
          setSelectedOption(null);
          setSelectedSubOption(null);
        }
      } else {
        setProduct(null);
        setSelectedOption(null);
        setSelectedSubOption(null);
      }
      setLoading(false);
      setCurrentImageIndex(0);
      setQuantity(1);
    };
    if (slug) {
      loadProduct();
    }
  }, [slug]);

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h2 className="text-xl font-bold text-gray-900 uppercase">Chargement...</h2>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h2 className="text-xl font-bold text-gray-900 uppercase">Soin introuvable</h2>
        <p className="text-gray-500 text-sm mt-2">Le soin que vous recherchez n'existe pas ou a été déplacé.</p>
        <button
          onClick={() => navigate('/catalog')}
          className="mt-6 inline-block bg-black text-white px-8 py-3 text-xs font-bold tracking-widest uppercase cursor-pointer hover:bg-gray-800 transition-colors"
        >
          RETOUR AUX SOINS
        </button>
      </div>
    );
  }

  const isCapillaire = product.category?.id === 3 || product.category?.id === 24 || product.category?.parentCategory === 3;
  const themeColor = isCapillaire ? '#3a7547' : '#296fc2';
  const themeBgLight = isCapillaire ? 'bg-[#f0f4ea]' : 'bg-[#ecf2f8]';
  const themeBadgeText = isCapillaire ? 'text-[#3a7547] bg-[#f0f4ea]/80 border-[#3a7547]/20' : 'text-[#296fc2] bg-[#ecf2f8]/80 border-[#296fc2]/20';
  const themeBtnHover = isCapillaire ? 'hover:bg-[#3a7547]' : 'hover:bg-[#296fc2]';

  const productImages = (product.images || []).map(getImageUrl);

  const formatPrice = (price) => {
    return price.toLocaleString('fr-FR') + ' DA';
  };

  const handleAddToCart = () => {
    const cartItem = {
      ...product,
      quantity,
      selectedOption,
      selectedSubOption
    };
    
    const event = new CustomEvent('add-to-cart', { detail: cartItem });
    window.dispatchEvent(event);

    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
    }, 2000);
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

  return (
    <div className="w-full bg-white animate-[fadeDown_0.3s_ease]">
      {/* 1. PRODUCT INFORMATION HERO */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-10 sm:pb-12">
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
            <div className="w-full aspect-[4/5] overflow-hidden border border-gray-100 relative rounded-sm">
              <div
                ref={scrollContainerRef}
                className="flex overflow-x-auto snap-x snap-mandatory w-full h-full [scrollbar-width:none] [&::-webkit-scrollbar]:hidden scroll-smooth"
              >
                {productImages.length > 0 ? (
                  productImages.map((img, idx) => (
                    <img
                      key={idx}
                      src={img}
                      alt={`${product.name} - Vue ${idx + 1}`}
                      className="w-full h-full object-cover flex-shrink-0 snap-center"
                    />
                  ))
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400 uppercase font-bold tracking-widest text-xs">
                    Image non disponible
                  </div>
                )}
              </div>

              {product.category?.name && (
                <span className={`absolute top-4 left-4 text-[9px] tracking-[0.18em] font-extrabold uppercase px-3 py-2 border shadow-sm z-10 ${themeBadgeText}`}>
                  {product.category.name}
                </span>
              )}

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
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${currentImageIndex === idx ? 'bg-black w-6' : 'bg-gray-300 hover:bg-gray-400'}`}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Right: Product Purchase Actions & Info */}
          <div className="lg:col-span-6 xl:col-span-5 flex flex-col space-y-6">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-black uppercase tracking-tight leading-tight">
              {product.name}
            </h1>

            {/* Price */}
            <div className="text-xl sm:text-2xl font-extrabold text-black border-y border-gray-100 py-4 flex items-center gap-4">
              {formatPrice(product.price)}
              {product.CompareAtPrice > product.price && (
                <span className="text-sm text-gray-400 line-through font-medium">
                  {formatPrice(product.CompareAtPrice)}
                </span>
              )}
            </div>

            {/* Dynamic Attributes (Colors, Sizes, etc) */}
            {product.attribute?.options?.length > 0 && (
              <div className="flex flex-col space-y-4 pt-2">
                {/* Primary Option (e.g., Color) */}
                {product.attribute.name && (
                  <div>
                    <h3 className="text-xs font-bold tracking-widest text-gray-900 uppercase mb-3">
                      {product.attribute.name} {selectedOption && `: ${selectedOption.value}`}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {product.attribute.options.map((opt) => (
                        <button
                          key={opt.id}
                          onClick={() => {
                            setSelectedOption(opt);
                            if (opt.sizes?.length > 0) {
                              setSelectedSubOption(opt.sizes[0]);
                            } else {
                              setSelectedSubOption(null);
                            }
                          }}
                          className={`px-4 py-2 border text-xs font-bold transition-colors uppercase ${
                            selectedOption?.id === opt.id
                              ? 'border-black bg-black text-white'
                              : 'border-gray-200 text-gray-600 hover:border-black hover:text-black bg-white'
                          }`}
                        >
                          {opt.value}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Secondary Option (e.g., Size) */}
                {product.attribute.optionsName && selectedOption?.sizes?.length > 0 && (
                  <div>
                    <h3 className="text-xs font-bold tracking-widest text-gray-900 uppercase mb-3">
                      {product.attribute.optionsName} {selectedSubOption && `: ${selectedSubOption.value}`}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedOption.sizes.map((size) => (
                        <button
                          key={size.id}
                          onClick={() => setSelectedSubOption(size)}
                          className={`min-w-[3rem] px-3 py-2 border text-xs font-bold transition-colors uppercase ${
                            selectedSubOption?.id === size.id
                              ? 'border-black bg-black text-white'
                              : 'border-gray-200 text-gray-600 hover:border-black hover:text-black bg-white'
                          }`}
                        >
                          {size.value}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Quantity and Cart button */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <div className="flex border border-gray-200 h-12 w-full sm:w-32 items-center justify-between bg-white rounded-sm shrink-0">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-4 text-gray-400 hover:text-black font-semibold h-full cursor-pointer">—</button>
                <span className="text-xs font-extrabold text-black select-none">{quantity}</span>
                <button onClick={() => setQuantity(Math.min(product.stock || 99, quantity + 1))} className="px-4 text-gray-400 hover:text-black font-semibold h-full cursor-pointer">+</button>
              </div>

              <button
                onClick={handleAddToCart}
                style={{ backgroundColor: isAdded ? themeColor : '#000000' }}
                disabled={product.stock <= 0}
                className={`flex-1 h-12 text-white text-[10px] sm:text-xs font-extrabold tracking-widest uppercase transition-all duration-300 rounded-sm shadow-sm cursor-pointer ${themeBtnHover} disabled:opacity-50 disabled:cursor-not-allowed`}
              >
                {product.stock <= 0 ? 'RUPTURE DE STOCK' : (isAdded ? 'AJOUTÉ AU PANIER ✓' : 'AJOUTER AU PANIER')}
              </button>
            </div>

            {/* Reassurance Checklist */}
            <div className="pt-6 border-t border-gray-100 space-y-3">
              {[
                { icon: '🚚', text: 'Livraison express 48H/72H dans toutes les wilayas' },
                { icon: '🛡️', text: 'Paiement à la livraison sécurisé' },
              ].map(({ icon, text }, i) => (
                <div key={i} className="flex items-center space-x-3 text-xs text-gray-600 font-medium">
                  <span className="text-base">{icon}</span>
                  <span>{text}</span>
                </div>
              ))}
            </div>

            {/* Product HTML Description from Backend */}
            {product.description && (
              <div className="pt-8 mt-4 border-t border-gray-100">
                <h3 className="text-sm font-bold tracking-widest text-black uppercase mb-4">Description</h3>
                {/* Use specific styling for the injected HTML content */}
                <div 
                  className="prose prose-sm max-w-none text-gray-600 prose-img:rounded-xl prose-img:shadow-sm"
                  dangerouslySetInnerHTML={{ __html: product.description }} 
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
