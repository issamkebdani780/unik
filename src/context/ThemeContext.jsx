import React, { createContext, useState, useEffect, useContext } from 'react';

const ThemeContext = createContext();

// Capillaire category IDs
const CAPILLAIRE_IDS = ['3', '24'];
const CAPILLAIRE_KEYWORDS = ['cheveux', 'capillaire', 'anti chute', 'chute'];

export const isCapillaireCategory = (categoryId, categoryName = '') => {
  if (CAPILLAIRE_IDS.includes(String(categoryId))) return true;
  const lower = categoryName.toLowerCase();
  return CAPILLAIRE_KEYWORDS.some(k => lower.includes(k)) && !lower.includes('visage');
};

export const ThemeProvider = ({ children }) => {
  // Read persisted theme from localStorage so it survives page navigation
  const [theme, setThemeState] = useState(
    () => localStorage.getItem('unik-theme') || 'dermatologique'
  );

  const setTheme = (newTheme) => {
    setThemeState(newTheme);
    localStorage.setItem('unik-theme', newTheme);
  };

  // Apply data-theme attribute to <html> whenever theme changes
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
