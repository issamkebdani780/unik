import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  // Try to load cart from localStorage, otherwise start empty
  const [cartItems, setCartItems] = useState(() => {
    try {
      const savedCart = localStorage.getItem('unik_cart');
      return savedCart ? JSON.parse(savedCart) : [];
    } catch (error) {
      console.error("Failed to parse cart from local storage", error);
      return [];
    }
  });

  // Save to localStorage whenever cart changes
  useEffect(() => {
    localStorage.setItem('unik_cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id || item.id === `product-${product.id}`);
      if (existing) {
        return prev.map(item => (item.id === product.id || item.id === `product-${product.id}`) ? { ...item, quantity: item.quantity + (product.quantity || 1) } : item);
      }
      return [...prev, {
        id: product.id,
        name: product.name,
        price: product.price,
        images: product.images,
        image: product.image,
        size: product.selectedSubOption ? product.selectedSubOption.value : (product.selectedOption ? product.selectedOption.value : (product.sizes?.[0] || '1 pc')),
        quantity: product.quantity || 1
      }];
    });
  };

  const updateQuantity = (id, newQty) => {
    if (newQty <= 0) {
      removeFromCart(id);
    } else {
      setCartItems(prev => prev.map(item => item.id === id ? { ...item, quantity: newQty } : item));
    }
  };

  const removeFromCart = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      updateQuantity,
      removeFromCart,
      clearCart,
      totalCartCount,
      subtotal
    }}>
      {children}
    </CartContext.Provider>
  );
};
