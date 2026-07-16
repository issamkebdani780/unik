import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const CartDrawer = ({ isOpen, onClose, cartItems = [], onRemove, onUpdateQuantity }) => {
  const navigate = useNavigate();

  // Free shipping goal in Dinars
  const FREE_SHIPPING_THRESHOLD = 3000;
  
  // Calculate subtotal
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const isFreeShipping = subtotal >= FREE_SHIPPING_THRESHOLD;
  const missingAmount = FREE_SHIPPING_THRESHOLD - subtotal;
  const progressPercentage = Math.min((subtotal / FREE_SHIPPING_THRESHOLD) * 100, 100);

  // Suggested item when cart is empty (Matching the "Complete your routine" Rhode style)
  const suggestionProduct = {
    id: 'cap-serum',
    name: 'SÉRUM FORTIFIANT CAPILLAIRE',
    price: 3500,
    image: '/capillaire_serum.png',
    size: '50ml'
  };

  return (
    <div className="fixed inset-0 z-[100] overflow-hidden">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black/40 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Sidebar Drawer */}
      <div className="absolute inset-y-0 right-0 pl-10 max-w-full flex">
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 25, stiffness: 220 }}
          className="w-screen max-w-md bg-[#f4f2ee] shadow-2xl flex flex-col h-full rounded-l-[32px] overflow-hidden"
        >
          {/* Header */}
          <div className="px-6 py-5 flex items-center justify-between border-b border-gray-200/40">
            <h2 className="text-sm font-bold tracking-widest text-[#4e4b47] uppercase poppins-bold">
              Votre Panier
            </h2>
            <button
              onClick={onClose}
              className="p-2 text-[#726e69] hover:text-black rounded-full hover:bg-gray-200/50 transition-colors"
              aria-label="Fermer le panier"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto py-6 px-6 space-y-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            
            {/* Free Shipping Progress Indicator (Rhode Style) */}
            <div className="bg-white rounded-2xl p-5 shadow-xs border border-gray-100 flex flex-col items-center text-center">
              <span className="text-xs font-semibold text-[#4e4b47] poppins-semibold mb-3">
                {isFreeShipping ? (
                  "✨ Vous bénéficiez de la LIVRAISON OFFERTE !"
                ) : (
                  <>
                    Ajoutez <span className="font-bold text-brand-accent">{missingAmount.toLocaleString('fr-FR')} DA</span> de plus pour la <span className="font-bold uppercase">Livraison Gratuite</span>
                  </>
                )}
              </span>
              <div className="w-full bg-[#f4f2ee] h-1.5 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${progressPercentage}%` }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="bg-brand-accent h-full rounded-full"
                />
              </div>
            </div>

            {cartItems.length > 0 ? (
              /* Cart Items List */
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex bg-white p-4 rounded-2xl border border-gray-100 shadow-xs gap-4 items-center">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-16 h-16 object-cover rounded-xl bg-gray-50 flex-shrink-0" 
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="text-xs font-bold text-gray-800 tracking-tight line-clamp-1 poppins-bold mb-1">
                        {item.name}
                      </h4>
                      <p className="text-[10px] text-gray-400 font-bold tracking-wider uppercase mb-2">
                        {item.size || 'Taille unique'}
                      </p>
                      
                      {/* Quantity Controller */}
                      <div className="flex items-center space-x-3 bg-[#f4f2ee] w-fit rounded-lg px-2.5 py-1">
                        <button 
                          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                          className="text-[#4e4b47] hover:text-black font-bold text-xs"
                        >
                          -
                        </button>
                        <span className="text-xs font-bold text-[#4e4b47] w-4 text-center">{item.quantity}</span>
                        <button 
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          className="text-[#4e4b47] hover:text-black font-bold text-xs"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="text-right flex flex-col justify-between h-full py-1">
                      <button 
                        onClick={() => onRemove(item.id)}
                        className="text-gray-400 hover:text-red-500 transition-colors mb-2 self-end"
                        aria-label="Supprimer"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                      <span className="text-xs font-bold text-gray-800 whitespace-nowrap">
                        {(item.price * item.quantity).toLocaleString('fr-FR')} DA
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              /* Empty State + Upsell routine product */
              <div className="flex flex-col items-center justify-center py-8 text-center">
                <p className="text-sm font-medium text-[#726e69] poppins-medium mb-12">
                  Votre panier est actuellement vide.
                </p>

                {/* Complete your routine module */}
                <div className="w-full">
                  <p className="text-[10px] tracking-widest font-bold text-[#4e4b47] uppercase mb-4 poppins-bold">
                    Complétez votre Routine UNIK
                  </p>
                  
                  <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-xs flex items-center justify-between gap-3">
                    <img 
                      src={suggestionProduct.image} 
                      alt={suggestionProduct.name} 
                      className="w-14 h-14 object-cover rounded-xl bg-gray-50 flex-shrink-0"
                    />
                    <div className="text-left flex-1 min-w-0">
                      <h4 className="text-[11px] font-bold text-gray-800 tracking-tight line-clamp-1 poppins-bold">
                        {suggestionProduct.name}
                      </h4>
                      <p className="text-[9px] text-gray-400 font-bold uppercase tracking-wider">
                        {suggestionProduct.size}
                      </p>
                    </div>
                    
                    <button 
                      onClick={() => navigate(`/product/${suggestionProduct.id}`)}
                      className="px-4 py-2 bg-[#65635f] hover:bg-black text-white font-bold rounded-xl text-[10px] tracking-wider transition-all duration-300 whitespace-nowrap shadow-xs"
                    >
                      AJOUTER — {suggestionProduct.price} DA
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Footer Area */}
          <div className="bg-white border-t border-gray-200/40 p-6 space-y-4">
            <div className="flex items-center justify-between text-[#4e4b47]">
              <span className="text-xs font-bold uppercase tracking-widest poppins-bold">Sous-total</span>
              <span className="text-lg font-extrabold text-gray-900">
                {subtotal.toLocaleString('fr-FR')} DA
              </span>
            </div>
            <p className="text-[10px] text-gray-400 font-medium leading-normal">
              *Les frais de livraison et de traitement sont calculés lors de l'étape de validation.
            </p>
            <button
              disabled={cartItems.length === 0}
              onClick={() => {
                onClose();
                navigate('/checkout');
              }}
              className="w-full bg-[#65635f] hover:bg-[#52504c] disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-bold py-4 rounded-full transition-all duration-300 uppercase tracking-widest text-xs poppins-bold shadow-md"
            >
              Commander
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CartDrawer;